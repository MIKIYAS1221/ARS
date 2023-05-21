import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Trash, Pencil } from "@phosphor-icons/react";
import { apartmentListState } from "../../../recoil_state";
// import { roo msState } from "../atoms";
import { getAllLeaseAgreement,getLeaseAgreement,deleteLeaseAgreement } from "../../../services/managerService";
import { Navigate } from "react-router-dom";
import Navbar from "../../LandingPage/components/Navbar";

const Lease_AgreeementList = () => {
  const [Lease_Agreeements, setLease_Agreeements] = useState([]);

  const handleDelete = async (id) => {
    deleteLeaseAgreement(id).then((data) => {
        console.log(data)
      getAllLeaseAgreement().then((data) => {
        setLease_Agreeements(data.data);
      });
    });
    getAllLeaseAgreement().then((data) => {
        setLease_Agreeements(data.data);
      });
  };


  useEffect(() => {
    getAllLeaseAgreement().then((data) => {
      setLease_Agreeements(data.data);
    });
  }, []);

  return (
    <>
    <Navbar dis={false}/>
      <div className="flex flex-col mt-8">
        <h2 className="flex justify-center mb-4 text-lg font-large">
          All Lease_Agreeements
        </h2>

        <table className="w-full mt-4 mb-16 border-collapse table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-400">Tenant</th>
              <th className="px-4 py-2 border border-gray-400">Phone number</th>
                <th className="px-4 py-2 border border-gray-400">Email</th>
              <th className="px-4 py-2 border border-gray-400">Apartement No</th>
              <th className="px-4 py-2 border border-gray-400">apartment floor</th>
                <th className="px-4 py-2 border border-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Lease_Agreeements.map((Lease_Agreeement) => (
              <tr key={Lease_Agreeement._id}>
                <td className="px-4 py-2 border border-gray-400">
                  {Lease_Agreeement.user.name+" "+Lease_Agreeement.user.fatherName+" "+Lease_Agreeement.user.grandFatherName}
                </td>
                <td className="px-4 py-2 border border-gray-400">
                  {Lease_Agreeement.user.phoneNumber}
                </td>
                <td className="px-4 py-2 border border-gray-400">
                  {Lease_Agreeement.user.email}
                </td>
                <td className="px-4 py-2 border border-gray-400">
                    {Lease_Agreeement.apartment.apartmentNumber}
                </td>
                <td className="px-4 py-2 border border-gray-400">
                    {Lease_Agreeement.apartment.apartmentFloor}
                </td>

                <td className="px-4 py-2 border border-gray-400">
                  <button
                    className="mx-2"
                    onClick={() => handleDelete(Lease_Agreeement._id)}
                  >
                    <Trash className="w-5 h-5 text-red-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>   
    </>
  );
};

export default Lease_AgreeementList;
