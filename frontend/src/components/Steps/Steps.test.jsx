import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Steps from './class/Steps';

describe('<Steps />', () => {
  test('it should mount', () => {
    render(<Steps />);

    const steps = screen.getByTestId('Steps');

    expect(steps).toBeInTheDocument();
  });
});