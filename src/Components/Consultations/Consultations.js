import React, { useEffect, useState } from "react";
import Consultation from "./Consultation";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const Consultations = () => {
  const [user, loading] = useAuthState(auth);
  const [specialties, setSpecialties] = useState([]);
  const [searchSpecialty, setSearchSpecialty] = useState({});

  const filterValues = specialties?.filter((category) => {
    // console.log("Category Heading:", category?.Specialty);
    return category?.Specialty === searchSpecialty?.searchSpecialty;
  });

  useEffect(() => {
    fetch("http://localhost:5000/specialty")
      // fetch("Specialty.json")
      .then((res) => res.json())
      .then((data) => setSpecialties(data));
  }, []);

  if (loading) {
    return <Loading />;
  }

  // console.log("Search Specialty:", searchSpecialty.searchSpecialty);

  // console.log("Filtered Values:", filterValues);

  const handleOnChange = (e) => {
    setSearchSpecialty({
      ...searchSpecialty,
      [e.target.name]: e.target.value,
    });
  };
  // console.log("setSpecialties", specialties);

  return (
    <div className="m-16">
      <div className="flex flex-row justify-between w-full mt-32">
        <h1 className="text-2xl mb-10 me-5">Please Select a Specialty</h1>
        <select
          className="select select-accent w-full max-w-xs"
          name="searchSpecialty"
          onChange={handleOnChange}
        >
          <option disabled selected>
            Select a Specialty
          </option>
          {specialties?.map((specialty) => (
            <option value={specialty?.Specialty}>{specialty?.heading}</option>
          ))}
        </select>
        {/* <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            name="searchSpecialty"
            onChange={handleOnChange}
            className="grow"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label> */}
      </div>

      {/* heading end */}
      <div className="specialties grid lg:grid-cols-2 gap-7">
        {filterValues?.length === 0 ? (
          <>
            {specialties?.map((specialty) => (
              <Consultation
                key={specialty?.id}
                specialty={specialty}
              ></Consultation>
            ))}
          </>
        ) : (
          <>
            {filterValues?.map((specialty) => (
              <Consultation
                key={specialty?.id}
                specialty={specialty}
              ></Consultation>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Consultations;
