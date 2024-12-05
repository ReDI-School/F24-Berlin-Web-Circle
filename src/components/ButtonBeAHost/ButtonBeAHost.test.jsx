import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {describe, expect, it} from 'vitest';
import ButtonBeAHost from './ButtonBeAHost';

function renderComponent() {
    render(<ButtonBeAHost/>);
}

describe('Button be a host Component', () => {
    it('should render the Airbnb your home text', () => {
        renderComponent();
        const airbnbText = screen.getByText('Airbnb your home');
        expect(airbnbText).toBeInTheDocument();
    });
});