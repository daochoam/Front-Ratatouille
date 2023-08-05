import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Paginated from './class/Paginated';

describe('<Paginated />', () => {
  test('it should mount', () => {
    render(<Paginated />);
    
    const paginated = screen.getByTestId('Paginated');

    expect(paginated).toBeInTheDocument();
  });
});