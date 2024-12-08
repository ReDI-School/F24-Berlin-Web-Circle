# Testing Introduction

`26 Nov 2024`

## Why Tests Are Important

- **Prevent Bugs:** Tests catch errors early during development.
- **Confidence in Changes:** With good tests, you can confidently refactor or add features without breaking existing
  functionality.
- **Improved Collaboration:** Tests act as documentation, helping team members understand how the code should behave.
- **Saves Time:** Finding and fixing bugs during development is faster than addressing issues after deployment.

---

## Types of Tests

### Unit Tests:

_Testing a car’s brakes_

Focus on testing a single unit of functionality, such as a function or component.
They are fast, reliable, and form the foundation of a robust testing strategy.

### Integration Tests:

_Taking the car on a test track_

Ensure that different parts of the application work together correctly.
Example: Testing interactions between a parent and child component.

### End-to-End (E2E) Tests:

_Finally driving on the road_

Simulate real-world scenarios to verify the entire application works as intended.
Slower to run and typically written for critical user flows.

### The testing pyramid

```
        ^  
       /_\    E2E Tests: Simulate real-world scenarios.
      /___\   Integration Tests: Ensure components work together.
     /_____\  Unit Tests: Test individual functions or components.
```

---

<h1> For today’s demo, we’re focusing on <i>unit tests</i> </h1>

---

## Test Setup

### Configurations

- [vite.config.js](../vite.config.js)
- [setup.js](../src/tests/setup.js)

### Sample Tests

- [Header.test.jsx](../src/components/Header/Header.test.jsx)
- [SearchPanel.test.jsx](../src/components/SearchPanel/SearchPanel.test.jsx)

---

## What is Mocking?

### Definition:

Mocking replaces real implementations with simplified versions in tests.
This isolation ensures the unit under test behaves correctly without relying on external dependencies.

### Why Mock?

- Isolate components for testing.
- Simulate behavior of complex dependencies like APIs, third-party libraries, or sibling components.

---
<h1>Code Walkthrough #1</h1>

Simple Mocking - [Header.test.jsx](../src/components/Header/Header.test.jsx)

---

## Mocking in Our Tests

### Mocking Components:

- Replace child components (e.g., SearchPanel) with simple div elements using vi.mock.
- Verify if the component is rendered, without testing its internal logic.

```jsx
vi.mock('../SearchPanel/SearchPanel.jsx', () => ({
    default: () => <div data-testid="mocked-component-search-panel">Mocked Search Panel</div>,
}));
```

**Assert**

```jsx
expect(screen.getById('mocked-component-search-panel')).toBeInTheDocument();
```

### Mocking Props:

- Provide mock props to simulate interaction behavior.
- Example: The SearchBar test passes a searchType prop to the mocked component.

```jsx
vi.mock('../SearchBar/SearchBar.jsx', () => ({
    default: ({searchType}) => (
        <div data-testid="mocked-component-search-bar">
            Mocked Search Bar - {searchType}
        </div>
    ),
}));
```

**Assert**

```jsx
expect(screen.getByText('Mocked Search Bar - stays')).toBeInTheDocument();
```

### Mocking Modules:

- Replace parts of libraries, such as useNavigate from react-router-dom.
- Allows testing navigation without actually redirecting. By mocking navigation, we prevent side effects like actually
  navigating away during the test.

**Inside the component under test (Pseudo Code)**

```jsx
import {createSearchParams, useNavigate} from 'react-router-dom'

.
.
const
navigate = useNavigate()
    .
    .const
handleAirbnbSearch = () => {
    if (region) {
        navigate({
            pathname: `/s/${region}/homes`,
            search: createSearchParams(searchQueries).toString(),
        })
    }
}
.
.
<SearchBar
    onSearch={handleAirbnbSearch}
/>
```

**Mocking inside the test**

```jsx
const navigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => navigate,
    };
});
```

**Assert**

```jsx
expect(navigate).toHaveBeenCalledWith({
    pathname: '/s/Berlin/homes',
    search: 'region=Berlin&checkIn=2023-01-01&checkOut=2023-01-07&adults=4&children=3&infants=2&pets=1',
});
```

---

## Simulating User Interactions

### Why Simulate Interactions?

User interactions like clicks, typing, or form submissions are core to UI behavior.
Simulating these ensures components respond as expected.

### How to Simulate with fireEvent

```jsx
fireEvent.click(toggleButton); // Simulate a click
expect(screen.getByText('Mocked Search Bar - experiences')).toBeInTheDocument();
```

### Testing Props and State Changes:

- Interaction tests often involve verifying state changes or callback calls.
- Example: Clicking "Search" calls navigate with specific arguments.

```jsx
expect(navigate).toHaveBeenCalledWith({
    pathname: '/s/Berlin/homes',
    search: 'region=Berlin&checkIn=2023-01-01&checkOut=2023-01-07&adults=4&children=3&infants=2&pets=1',
});
```

---
<h1>Code Walkthrough #2</h1>

Mocking Props and
Modules - [SearchPanel.test.jsx](../src/components/SearchPanel/SearchPanel.test.jsx)

---