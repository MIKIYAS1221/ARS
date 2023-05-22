import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

test('SearchBar component test', () => {
  const handleSearchChange = jest.fn();
  
  const { getByPlaceholderText } = render(
    <SearchBar onSearchChange={handleSearchChange} />
  );

  const searchBox = getByPlaceholderText('Search');

  // Simulate user typing 'Apartment' in the search box
  fireEvent.change(searchBox, { target: { value: 'Apartment' } });

  // Check if the search box value has been updated
  expect(searchBox.value).toBe('Apartment');

  // Check if the onSearchChange function has been called with the correct value
  expect(handleSearchChange).toHaveBeenCalledWith('Apartment');

  // Simulate user typing 'House' in the search box
  fireEvent.change(searchBox, { target: { value: 'House' } });

  // Check if the search box value has been updated
  expect(searchBox.value).toBe('House');

  // Check if the onSearchChange function has been called with the correct value
  expect(handleSearchChange).toHaveBeenCalledWith('House');
});
