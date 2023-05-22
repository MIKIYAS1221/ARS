import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import RequestRegister from './RequestRegister';
import '@testing-library/jest-dom';

jest.mock('../../LandingPage/components/Navbar', () => () => <div>Navbar</div>);

describe('RequestRegister', () => {
  test('switches tabs', () => {
    const { getByText } = render(
      <RecoilRoot>
        <RequestRegister />
      </RecoilRoot>
    );

    expect(getByText('Pending display')).toBeInTheDocument();

    const acceptedTabButton = getByText('Accepted');
    fireEvent.click(acceptedTabButton);
    expect(getByText('Accepted display')).toBeInTheDocument();

    const rejectedTabButton = getByText('Rejected');
    fireEvent.click(rejectedTabButton);
    expect(getByText('Rejected display')).toBeInTheDocument();
  });
});
