import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import TenantList from './tenant';
import * as managerService from '../../../services/managerService';
import '@testing-library/jest-dom';

jest.mock('../../../services/managerService');
jest.mock('../../LandingPage/components/Navbar', () => () => <div>Navbar</div>);

describe('TenantList', () => {
  test('renders tenants', async () => {
    const mockTenants = [
      {
        _id: '1',
        name: 'Tenant 1',
        fatherName: 'Father 1',
        grandFatherName: 'Grandfather 1',
        phoneNumber: '1234567890',
        email: 'tenant1@example.com',
        createdAt: '2022-01-01',
      },
      {
        _id: '2',
        name: 'Tenant 2',
        fatherName: 'Father 2',
        grandFatherName: 'Grandfather 2',
        phoneNumber: '0987654321',
        email: 'tenant2@example.com',
        createdAt: '2022-01-02',
      },
    ];
    managerService.getAllTenant.mockResolvedValue({ data: mockTenants });

    const { getByText } = render(
      <RecoilRoot>
        <TenantList />
      </RecoilRoot>
    );

    await waitFor(() => expect(getByText('Tenant 1')).toBeInTheDocument());
    expect(getByText('Tenant 2')).toBeInTheDocument();
  });
});
