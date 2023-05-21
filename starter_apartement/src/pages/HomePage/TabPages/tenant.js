import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import Modal from "react-modal";
import { TrashIcon, PencilIcon } from "@heroicons/react/solid";
import { tenantListState } from "../../../recoil_state";
import { getAllTenant } from "../../../services/managerService";
import Navbar from "../../LandingPage/components/Navbar";

const TenantList = () => {


  const [tenants, setTenants] = useRecoilState(tenantListState);
  const [form, setForm] = useState({
    id: null,
    name: "",
    fatherName: "",
    grandFatherName: "",
    phoneNumber: "",
    email: "",
    date: "",
  });


  useEffect(() => {
    getAllTenant().then((response) => {
        console.log("All tenants", response.data);
        setTenants(response.data);
        })
  }, [setTenants]);





  return (
    <>
        <Navbar dis={false}/>
      <div className="flex flex-col mt-8 min-h-screen" >
        <h2 className="text-lg font-large mb-4 flex justify-center">
         All Tenants
        </h2>

        <table className="table-auto border-collapse w-full mt-4 mb-16">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Fist Name</th>
              <th className="border border-gray-400 px-4 py-2">Father Name</th>
                <th className="border border-gray-400 px-4 py-2">grandFatherName</th>
              <th className="border border-gray-400 px-4 py-2">Phone Number</th>
              <th className="border border-gray-400 px-4 py-2">Email</th>
              <th className="border border-gray-400 px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {tenants.map((tenant) => (
              <tr key={tenant._id}>
                <td className="border border-gray-400 px-4 py-2">
                  {tenant.name}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {tenant.fatherName}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {tenant.grandFatherName}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {tenant.phoneNumber}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                    {tenant.email}
                </td>
              {/* <td className="border border-gray-400 px-4 py-2">
                <img
                  className="h-10 w-10 object-cover rounded-full"
                  src={tenant.image}
                  alt={tenant.firstName}
                />
              </td> */}
                <td className="border border-gray-400 px-4 py-2">
                  {tenant.createdAt}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default TenantList;