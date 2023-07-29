import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Favorites from './class/Favorites';

describe('<Favorites />', () => {
  test('it should mount', () => {
    render(<Favorites />);
    
    const favorites = screen.getByTestId('Favorites');

    expect(favorites).toBeInTheDocument();
  });
});