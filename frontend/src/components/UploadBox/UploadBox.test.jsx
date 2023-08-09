import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UploadBox from './class/UploadBox';

describe('<UploadBox />', () => {
  test('it should mount', () => {
    render(<UploadBox />);
    
    const uploadBox = screen.getByTestId('UploadBox');

    expect(uploadBox).toBeInTheDocument();
  });
});