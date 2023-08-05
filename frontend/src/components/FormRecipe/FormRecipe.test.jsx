import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormRecipe from './class/FormRecipe';

describe('<FormRecipe />', () => {
  test('it should mount', () => {
    render(<FormRecipe />);
    
    const formRecipe = screen.getByTestId('FormRecipe');

    expect(formRecipe).toBeInTheDocument();
  });
});