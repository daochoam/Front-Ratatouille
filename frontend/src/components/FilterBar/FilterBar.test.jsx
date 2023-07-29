import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FilterBar from './class/FilterBar';

describe('<FilterBar />', () => {
  test('it should mount', () => {
    render(<FilterBar />);
    
    const filterBar = screen.getByTestId('FilterBar');

    expect(filterBar).toBeInTheDocument();
  });
});