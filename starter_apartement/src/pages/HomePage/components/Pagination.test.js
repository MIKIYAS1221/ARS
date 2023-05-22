import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';
import '@testing-library/jest-dom';

test('Pagination component test', () => {
  const handlePageChange = jest.fn();

  const { getByText } = render(
    <Pagination currentPage={1} totalPages={5} onPageChange={handlePageChange} />
  );

  // Test if the first page is active
  const page1 = getByText('1');
  expect(page1.classList.contains('active')).toBe(true);

  // Test clicking on the second page
  const page2 = getByText('2');
  fireEvent.click(page2);
  expect(handlePageChange).toHaveBeenCalledWith(2);

  // Test if the "Next" button works
  const nextButton = getByText('Next »');
  fireEvent.click(nextButton);
  expect(handlePageChange).toHaveBeenCalledWith(2); 

  // Test if the "Prev" button does not exist on the first page
  expect(() => getByText('« Prev')).toThrow();

  // Test if all pages are rendered
  for(let i = 1; i <= 5; i++){
    expect(getByText(i.toString())).toBeInTheDocument();
  }
});
