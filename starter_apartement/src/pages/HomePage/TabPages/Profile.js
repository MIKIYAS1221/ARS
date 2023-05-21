import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { loggedInUserState } from "../../../recoil_state";
import Navbar from "../../LandingPage/components/Navbar";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    avatar: {},
  });

  const [loggedInUser, setLoggedInUser] = useRecoilState(loggedInUserState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {}, []);

  useEffect(() => {
    if (!loggedInUser) {
      return;
    }
    setProfile(loggedInUser);
  }, [loggedInUser]);

  const saveProfile = (event) => {
    event.preventDefault();
    if (isLoading) return;
    setIsLoading(true);

    axios
      .put("/profile", profile)
      .then((response) => {
        console.log("Profile updated", response.data.data);
        setLoggedInUser(response.data.data);
      })
      .catch((error) => {
        console.log("Error updating profile", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleEditImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (file) {
            

      }
    });
    input.click();
  };
  

  return (
    <>
      <Navbar dis={false} />

      <div>
        <form className="px-16 pt-16 mb-16">
          <div className="space-y-12">
            <div className="pb-12 border-b border-gray-900/10">
              <p className="text-4xl font-semibold text-neutral-900">Profile</p>
            </div>
            <div className="relative inline-block">
  <img
    src={profile.avatar.url}
    alt="Profile"
    className="h-60 w-60 rounded-full object-cover transition duration-300 ease-in-out transform hover:scale-105"
    style={{ aspectRatio: '1/1' }} // Maintain aspect ratio to make it circular
  />
  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
    <button
      type="button"
      className="bg-gray-800 bg-opacity-75 p-2 rounded-full text-white hover:bg-opacity-100 focus:outline-none"
      onClick={handleEditImage}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
        />
      </svg>
    </button>
  </div>
</div>

            <div className="pb-12 border-b border-gray-900/10">
              <h2 className="text-base font-semibold leading-7 text-neutral-900">
                Personal Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-neutral-600">
                Make sure to provide your most used communication channels.
              </p>

              <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-neutral-900"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="John"
                      value={profile.name}
                      onChange={(e) =>
                        setProfile({ ...profile, name: e.target.value })
                      }
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-neutral-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Doe"
                      value={profile.lastname}
                      onChange={(e) =>
                        setProfile({ ...profile, lastname: e.target.value })
                      }
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-neutral-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="yourname@email.com"
                      value={profile.email}
                      onChange={(e) =>
                        setProfile({ ...profile, email: e.target.value })
                      }
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-neutral-900"
                  >
                    Phone
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="+251980555555"
                      value={profile.phoneNumber}
                      onChange={(e) =>
                        setProfile({ ...profile, phone: e.target.value })
                      }
                      type="tel"
                      name="phone"
                      id="phone"
                      autoComplete="given-phone"
                      readOnly
                      className="block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end mt-6 gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-neutral-900"
            >
              Cancel
            </button>
            <button
              type="button "
              className={
                "btn btn-primary btn-md w-48 " +
                (isLoading ? " loading btn-disabled" : "")
              }
              onClick={saveProfile}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
