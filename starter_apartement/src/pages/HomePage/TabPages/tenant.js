import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import Modal from "react-modal";
import { TrashIcon, PencilIcon } from "@heroicons/react/solid";
import { tenantListState } from "../../../recoil_state";
import { getAllTenant } from "../../../services/managerService";

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
    const fetchData = async () => {
      const data = await getAllTenant();
      setTenants(data);
    };
    fetchData();
  }, [setTenants]);





  return (
    <>
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
                  {tenant.date}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button
                    className="mx-2"
                    onClick={() => handleEdit(tenant)}
                  >
                    <PencilIcon className="h-5 w-5 text-indigo-500" />
                  </button>
                  <button
                    className="mx-2"
                    onClick={() => handleDelete(tenant._id)}
                  >
                    <TrashIcon className="h-5 w-5 text-red-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={() => setModalIsOpen(true)}
      >
        Add Apartment
      </button> */}

      <div className="modal max-w-3xl max-h-screen">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          className="Modal w-96 h-96"
          overlayClassName="Overlay"
          style={{
            content: {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              maxWidth: "100%",
              maxHeight: "100%",
              overflow: "auto",
              backgroundColor: "#F3F4F6",
              border: "none",
              borderRadius: "8px",
              padding: "10px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
            },
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
          }}
        >
          <h2 className="text-lg font-medium mb-4">
            {isEditing ? "Edit Apartment" : "Add Apartment"}
          </h2>
          <form onSubmit={handleSubmit}>
            
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-medium" htmlFor="firstname">
                First Name
              </label>
              <input
                className="border rounded-lg py-2 px-3"
                type="text"
                id="firstname"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-medium" htmlFor="lastname">
                Last Name
              </label>
              <input
                className="border rounded-lg py-2 px-3"
                type="text"
                id="lastname"
                name="lastname"
                value={form.fatherName}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-medium" htmlFor="price">
                Phone Number
              </label>
              <input
                className="border rounded-lg py-2 px-3"
                type="tel"
                id="price"
                name="price"
                value={form.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-medium" htmlFor="price">
               Email
              </label>
              <input
                className="border rounded-lg py-2 px-3"
                type="number"
                id="price"
                name="price"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              {isEditing ? "Save Changes" : "Add Apartment"}
            </button>
          </form>
        </Modal>
      </div>
    </>
  );
};
export default TenantList;