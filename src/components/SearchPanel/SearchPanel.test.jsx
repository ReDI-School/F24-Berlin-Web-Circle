import {fireEvent, render, screen} from '@testing-library/react';
import {beforeEach, describe, expect, it, vi} from 'vitest';
import SearchPanel from './SearchPanel';
import '@testing-library/jest-dom';
import {BrowserRouter as Router} from 'react-router-dom';
// Mock the necessary modules at the top level
vi.mock('../SearchBar/SearchBar.jsx', () => ({
    default: ({searchType, onSearch}) => (
        <div data-testid="mocked-component-search-bar">
            Mocked Search Bar - {searchType}
            <button onClick={() => onSearch({
                location: 'Berlin',
                checkIn: '2023-01-01',
                checkOut: '2023-01-07',
                adults: 4,
                children: 3,
                infants: 2,
                pets: 1
            })}>Search
            </button>
        </div>
    ),
}));

vi.mock('../ToggleButtonsStaysExperiences/ToggleButtonsStaysExperiences.jsx', () => ({
    default: ({toggleSearchType}) => (
        <div data-testid="mocked-component-toggle-buttons">
            Mocked Toggle Buttons
            <button onClick={() => toggleSearchType('experiences')}>Toggle</button>
        </div>
    ),
}));

// Mock the react-router-dom and return the original BrowserRouter
const navigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => navigate,
    };
});

describe('SearchPanel Component', () => {

    beforeEach(() => {
        renderComponent();
    });

    it('should render the ToggleButtonsStaysExperiences component', () => {
        expect(screen.getByTestId('mocked-component-toggle-buttons')).toBeInTheDocument();
        expect(screen.getByText('Mocked Search Bar - stays')).toBeInTheDocument();
    });

    it('should toggle search type when button is clicked', () => {
        //given
        const toggleButton = screen.getByText('Toggle');
        //when
        fireEvent.click(toggleButton);
        //then
        expect(screen.getByTestId('mocked-component-toggle-buttons')).toBeInTheDocument();
        expect(screen.getByText('Mocked Search Bar - experiences')).toBeInTheDocument();
    });

    it('should call handleAirbnbSearch with correct parameters when search button is clicked', () => {
        //given
        const searchButton = screen.getByText('Search');
        //when
        fireEvent.click(searchButton);
        //then
        expect(navigate).toHaveBeenCalledWith({
            pathname: '/s/Berlin/homes',
            search: 'region=Berlin&checkIn=2023-01-01&checkOut=2023-01-07&adults=4&children=3&infants=2&pets=1',
        });
    });

    function renderComponent() {
        render(
            // Use actual BrowserRouter from the mocked module
            <Router future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
                <SearchPanel/>
            </Router>
        );
    }
});