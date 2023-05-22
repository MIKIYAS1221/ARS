import React, { useState } from "react";
import { acceptVisitor, rejectVisitor } from "../../../../services/securityGuardService";


const Request = ({ data, isPending }) => {
  

  const handleAcceptRequest = (ev) => {
    ev.preventDefault();
    acceptVisitor(data._id).then((data) => {});
  };
  const handleRejectRequest = (ev) => {
    ev.preventDefault();

    rejectVisitor(data._id).then((data) => {});
  };
  return (
    <div class="max-w-md mx-auto">
      <div class="bg-white rounded-lg shadow-lg px-6 py-8">
        <h2 class="text-2xl font-bold mb-4">Applicant Information</h2>
        <div class="flex flex-col space-y-4">
          <div class="flex flex-col sm:flex-row justify-between">
            <label class="text-lg font-bold">Tenant Name:</label>
            <span class="text-gray-700 overflow-x-auto">
              {data.user.name} {data.user.fatherName}{" "}
              {data.user.grandFatherName}
            </span>
          </div>
          <div class="flex flex-col sm:flex-row justify-between">
            <label class="text-lg font-bold">Phone:</label>
            <span class="text-gray-700">{data.user.phoneNumber}</span>
          </div>
          <div class="flex flex-col sm:flex-row justify-between">
            <label class="text-lg font-bold">Apartment number:</label>
            <span class="text-gray-700">{data.apartment && data.apartment.apartmentNumber}</span>
          </div>
          <div class="flex flex-col sm:flex-row justify-between">
            <label class="text-lg font-bold">Visitor name:</label>
            <span class="text-gray-700">{data.visitorName}</span>
          </div>
          <div class="flex flex-col sm:flex-row justify-between">
            <label class="text-lg font-bold">code:</label>
            <span class="text-gray-700">{data.code}</span>
          </div>
          <div class="flex flex-col sm:flex-row justify-between">
            <label class="text-lg font-bold">createdAt:</label>
            <span class="text-gray-700">{data.createdAt}</span>
          </div>
        </div>
        {isPending && (
          <div class="mt-6 space-y-4">
            <div class="flex flex-row space-x-4">
              <button
                class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleAcceptRequest}
              >
                Serve
              </button>
              <button
                class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleRejectRequest}
              >
                Extend
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Request;
