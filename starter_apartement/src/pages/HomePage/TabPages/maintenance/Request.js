import React, { useState } from "react";
import {
  acceptMaintenanceRequest,
  rejectMaintenanceRequest,
} from "../../../../services/managerService";

const Request = ({ data, isPending }) => {
  const [issues, setIssues] = useState("");
  const [details, setDetails] = useState("");
  const [urgency, setUrgency] = useState("");

  const handleAcceptRequest = (ev) => {
    ev.preventDefault();
    acceptMaintenanceRequest(data._id, issues, details, urgency).then((data) => {});
  };
  const handleRejectRequest = (ev) => {
    ev.preventDefault();

    rejectMaintenanceRequest(data._id).then((data) => {});
  };
  return (
    <div class="max-w-md mx-auto">
      <div class="bg-white rounded-lg shadow-lg px-6 py-8">
        <h2 class="text-2xl font-bold mb-4">Applicant Information</h2>
        <div class="flex flex-col space-y-4">
          <div class="flex flex-col sm:flex-row justify-between">
            <label class="text-lg font-bold">Name:</label>
            <span class="text-gray-700 overflow-x-auto">
              {data.user.name} {data.user.fatherName}{" "}
              {data.user.grandFatherName}
            </span>
          </div>
          <div class="flex flex-col sm:flex-row justify-between">
            <label class="text-lg font-bold">Email:</label>
            <span class="text-gray-700">{data.user.email}</span>
          </div>
          <div class="flex flex-col sm:flex-row justify-between">
            <label class="text-lg font-bold">Phone:</label>
            <span class="text-gray-700">{data.user.phoneNumber}</span>
          </div>
          <div class="flex flex-col sm:flex-row justify-between">
            <label class="text-lg font-bold">Apartment ID:</label>
            <span class="text-gray-700">{data.apartment._id}</span>
          </div>
          <div class="flex flex-col sm:flex-row justify-between">
            <label class="text-lg font-bold">Issues:</label>
            <span class="text-gray-700">{data.issues}</span>
          </div>
          <div class="flex flex-col sm:flex-row justify-between">
            <label class="text-lg font-bold">Details:</label>
            <span class="text-gray-700">{data.details}</span>
          </div>
          <div class="flex flex-col sm:flex-row justify-between">
            <label class="text-lg font-bold">Urgency:</label>
            <span class="text-gray-700">{data.urgency}</span>
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
