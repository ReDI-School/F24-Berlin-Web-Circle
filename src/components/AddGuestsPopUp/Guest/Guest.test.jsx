import {fireEvent, render, screen, act, waitFor} from '@testing-library/react';
import {beforeEach, describe, expect, it, vi} from 'vitest';
import '@testing-library/jest-dom';
import Guest from './Guest';

const mockHandlePlusCount = vi.fn();
const mockHandleMinusCount = vi.fn();
function renderComponent() {
    const mockOnGuestChange = vi.fn();
    const mocksetGuestSearchCounts = vi.fn();
    const mockHandleGuestSearchClick = vi.fn();
    const  allowGuestsNumber = { peopleNumber:15, petsNumber:5 };
    render( <Guest
            key= {1}
            title="Adults"
            description="Age 13+"
            descriptionType="string"
            onGuestChange={mockHandlePlusCount}
            count={20}
            allowGuestsNumber={allowGuestsNumber}
            setGuestCounts={8}
            currentTotalPeople={4}
            toggleGuestCountPopup={true}
            isSearchWhoDropdown={true}
            setGuestSearchCounts={mocksetGuestSearchCounts}
            currentSearchTotalPeople={8}
            handleGuestSearchClick={mockHandleGuestSearchClick}
            childrenCount={1}
            infantsCount={1}
            petsCount={2}
        />);
}
describe('Guest Component', () => {
    it('should render the Title text', () => {
        renderComponent();
        const title = screen.getByText('Adults');
        expect(title).toBeInTheDocument();
    });
    it('should render the Description text', () => {
        renderComponent();
        const description = screen.getByText('Age 13+');
        expect(description).toBeInTheDocument();
    });
    it('should render the Current Total People count', () => {
        renderComponent();
        const count = screen.getByTestId("guest_count");
        expect(count.textContent).toBe("20");
    });
});