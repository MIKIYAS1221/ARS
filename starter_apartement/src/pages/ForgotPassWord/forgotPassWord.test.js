import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import ForgotPassword from './ForgotPassword';
import { forgotPassword } from '../../services/authService';
import '@testing-library/jest-dom';

// Mocking axios module
jest.mock('axios');

// Mocking authService module
jest.mock('../../services/authService', () => ({
  forgotPassword: jest.fn(),
}));




beforeEach(() => {
    // Mock global alert
    window.alert = jest.fn();
  });

test('renders ForgotPassword', async () => {

      
  const { getByText, getByPlaceholderText } = render(
    <BrowserRouter>
      <RecoilRoot>
        <ForgotPassword />
      </RecoilRoot>
    </BrowserRouter>
  );

  // Check if page renders properly
  expect(getByText(/Forgot Password/i)).toBeInTheDocument();

  // Check the form
  const input = getByPlaceholderText('your@email.com');
  fireEvent.change(input, { target: { value: 'test@email.com' } });
  expect(input.value).toBe('test@email.com');

  // Mock successful API call
  forgotPassword.mockResolvedValueOnce({ data: {} });
  
  // Click submit button
  fireEvent.click(getByText(/Reset Password/i));

  // After successful API call, alert with success message should be displayed
  await waitFor(() => {
    expect(window.alert).toHaveBeenCalledWith(
      'Password reset instructions have been sent to your email.'
    );
  });
});
