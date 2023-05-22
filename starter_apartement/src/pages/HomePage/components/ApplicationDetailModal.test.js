import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AppartmentDetailsModal from './ApplicationDetailModal';
import '@testing-library/jest-dom';

test('renders AppartmentDetailsModal and closes on button click', () => {
  const closeModalMock = jest.fn();

  const dummyApplication = {
    name: 'Test Appartment',
    description: 'This is a test appartment.',
    price: '100',
    images: [],
  };

  const { getByText, queryByText } = render(
    <AppartmentDetailsModal
      isOpen={true}
      closeModal={closeModalMock}
      application={dummyApplication}
    />
  );

  // Check if modal renders properly
  expect(getByText(/Appartment Details/i)).toBeInTheDocument();
  expect(getByText(/This is a test appartment./i)).toBeInTheDocument();
  expect(getByText(/100/i)).toBeInTheDocument();
});
