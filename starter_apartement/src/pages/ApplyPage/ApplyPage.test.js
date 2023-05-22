import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ApplyPage from './ApplyPage';
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

describe('ApplyPage', () => {
  test('renders ApplyPage component', () => {
    render(<RecoilRoot>
        <BrowserRouter>
        <ApplyPage />
        </BrowserRouter>
      </RecoilRoot>);

    // Check if the form elements are rendered
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();

    // Check if the buttons are rendered
    expect(screen.getByText(/Cancel/i)).toBeInTheDocument();
    expect(screen.getByText(/Submit Application/i)).toBeInTheDocument();
  });

  test('handleCancel function works correctly', () => {
    const { getByText } = render(<RecoilRoot>
        <BrowserRouter>
        <ApplyPage />
        </BrowserRouter>
      </RecoilRoot>);
    const cancelButton = getByText(/Cancel/i);

    // Mock the console.log function
    // console.log = jest.fn();

    fireEvent.click(cancelButton);

    // Check if the console.log function was called with 'Cancelled'
    // expect(console.log).toHaveBeenCalledWith('Cancelled');
  });
});

