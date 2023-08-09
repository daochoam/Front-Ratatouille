import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UploadPhoto from './class/UploadPhoto';

describe('<UploadPhoto />', () => {
  test('it should mount', () => {
    render(<UploadPhoto />);
    
    const uploadPhoto = screen.getByTestId('UploadPhoto');

    expect(uploadPhoto).toBeInTheDocument();
  });
});