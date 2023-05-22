import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TabItem from './TabItem';
import '@testing-library/jest-dom';

// Mock the Icon component
const MockIcon = ({ size, weight }) => <div>{`Icon: ${size} ${weight}`}</div>;

test('TabItem component test', () => {
  const onClick = jest.fn();

  const { getByText, rerender } = render(
    <TabItem tabName="Tab1" Icon={MockIcon} onClick={onClick} isActive={false} />
  );

  // Check if the tabName is rendered correctly
  expect(getByText("Tab1")).toBeInTheDocument();

  // Check if the Icon is rendered with the correct size and weight
  expect(getByText("Icon: 24 regular")).toBeInTheDocument();

  // Simulate user clicking the tab
  fireEvent.click(getByText("Tab1"));

  // Check if the onClick function has been called with the correct value
  expect(onClick).toHaveBeenCalledWith("Tab1");

  // Now we rerender the TabItem as active
  rerender(<TabItem tabName="Tab1" Icon={MockIcon} onClick={onClick} isActive={true} />);

  // Check if the Icon is rendered with the correct size and weight
  expect(getByText("Icon: 28 bold")).toBeInTheDocument();
});
