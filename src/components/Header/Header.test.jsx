import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';
import '@testing-library/jest-dom';
import {describe, expect, it, vi} from 'vitest';


vi.mock('../SearchPanel/SearchPanel.jsx', () => ({
    default: () => <div data-testid="mocked-component-search-panel">Mocked Search Panel</div>,
}));
vi.mock('../ButtonBeAHost/ButtonBeAHost.jsx', () => ({
    default: () => <div data-testid="mocked-component-button-be-a-host">Mocked Button Be A Host</div>,
}));
vi.mock('../LanguageSelector/LanguageSelector.jsx', () => ({
    default: () => <div data-testid="mocked-component-language-selector">Mocked Language Selector</div>,
}));
vi.mock('../HeaderUserMenu/HeaderUserMenu.jsx', () => ({
    default: () => <div data-testid="mocked-component-header-user-menu">Mocked Header User Menu</div>,
}));

function renderComponent() {
    render(<Router future={{v7_startTransition: true, v7_relativeSplatPath: true}}><Header/></Router>);
}

describe('Header Component', () => {
    it('should render the AirBnB logo', () => {
        renderComponent();
        //TODO: Uncomment the line below to see the debug output. Delete after demo.
        // screen.debug();
        const logo = screen.getByAltText('The Logo of AirBnB');
        expect(logo).toBeInTheDocument();
    });

    it('should render the SearchPanel component', () => {
        renderComponent();
        expect(screen.getByTestId('mocked-component-search-panel')).toBeInTheDocument();
    });

    it('should render the ButtonBeAHost component', () => {
        renderComponent();
        expect(screen.getByTestId('mocked-component-button-be-a-host')).toBeInTheDocument();
    });

    it('should render the LanguageSelector component', () => {
        renderComponent();
        expect(screen.getByTestId('mocked-component-language-selector')).toBeInTheDocument();
    });

    it('should render the HeaderUserMenu component', () => {
        renderComponent();
        expect(screen.getByTestId('mocked-component-header-user-menu')).toBeInTheDocument();
    });

});