import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MultiSelect from './class/MultiSelect';

describe('<MultiSelect />', () => {
  test('it should mount', () => {
    render(<MultiSelect />);
    
    const multiSelect = screen.getByTestId('MultiSelect');

    expect(multiSelect).toBeInTheDocument();
  });
});