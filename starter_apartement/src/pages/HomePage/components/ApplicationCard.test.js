import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ApplicationCard from './ApplicationCard';
import '@testing-library/jest-dom';


// Mock react-router-dom
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useNavigate: () => jest.fn(),
  }));
  
  // Mock ApplicationDetailModal component
  jest.mock('./ApplicationDetailModal', () => {
    return function DummyModal(props) {
      return (
        <div data-testid="mockModal">
          {props.isOpen ? "Modal Open" : "Modal Closed"}
        </div>
      );
    };
  });


test('renders ApplicationCard and opens modal', () => {
  const dummyApplication = {
    _id: '123',
    status: 'Pending',
    date: '2023-05-21',
    house: {},
  };

  const { getByText, getByTestId } = render(
    <ApplicationCard application={dummyApplication} />
  );

  // Check if card renders properly
  expect(getByText(/Pending/i)).toBeInTheDocument();
  expect(getByText(/Applied Date:/i)).toBeInTheDocument();
  expect(getByText(/2023-05-21/i)).toBeInTheDocument();

  // Check if modal is initially closed
  const modal = getByTestId('mockModal');
  expect(modal.textContent).toBe('Modal Closed');

  // Simulate click on View Details button
  fireEvent.click(getByText(/View Details/i));

  // Check if modal opens
  expect(modal.textContent).toBe('Modal Open');
});
