import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Alerts from './class/Alerts';

describe('<Alerts />', () => {
  test('it should mount', () => {
    render(<Alerts />);
    
    const alerts = screen.getByTestId('Alerts');

    expect(alerts).toBeInTheDocument();
  });
});