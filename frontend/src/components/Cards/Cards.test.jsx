import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Cards from './class/Cards';

describe('<Cards />', () => {
  test('it should mount', () => {
    render(<Cards />);
    
    const cards = screen.getByTestId('Cards');

    expect(cards).toBeInTheDocument();
  });
});