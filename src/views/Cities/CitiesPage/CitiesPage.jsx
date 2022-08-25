import React, { useState } from "react";

import CitiesDataTable from "../../../components/cities/DataTable/CitiesDataTable";
import CityForm from "../../../components/cities/Forms/CityForm";
import ModalResponse from "../../../components/cities/Modals/ModalResponse/ModalResponse";
import { postCity } from "../../../services/cities/CitiesServices";

const CitiesPage = () => {
  const [modalResponseVisibility, setModalResponselVisibility] =
    useState(false);
  const [modalDataVisibility, setModalDataVisibility] = useState(false);
  const [response, setResponse] = useState({});
  const [enableFilter, setEnableFilter] = useState(false);
  const [cityName, setCityName] = useState(null);

  const toggleModalResponseVisibility = () => {
    setModalResponselVisibility((prev) => !prev);
  };

  const toggleModalVisibility = () => {
    setModalDataVisibility((prev) => !prev);
  };

  const handleResponseChange = (data) => {
    setResponse(data);
  };

  const handleSearch = () => {
    setEnableFilter((prev) => !prev);
  };

  return (
    <div className="text-center m-5 min-h-full">
      {modalResponseVisibility === true && (
        <ModalResponse
          toggleVisibility={toggleModalResponseVisibility}
          response={response}
        />
      )}
      <div className="mb-5 grid grid-flow-dense grid-cols-2">
        <span>
          <button
            onClick={toggleModalVisibility}
            className="btn btn-sm w-50 bg-primary hover:bg-primary hover:text-black"
          >
            Add new one
          </button>
        </span>
        <span>
          <button
            onClick={handleSearch}
            className="btn btn-sm w-50 bg-primary hover:bg-primary hover:text-black"
          >
            Search
          </button>
          <input
            type="text"
            onChange={(e) => setCityName(e.target.value)}
            placeholder="City Name"
            className="input input-bordered input-sm input-primary ml-2"
          />
        </span>
      </div>
      {modalDataVisibility === true && (
        <ModalData
          editing={false}
          toggleModalVisibility={toggleModalVisibility}
          toggleModalResponseVisibility={toggleModalResponseVisibility}
          handleResponseChange={handleResponseChange}
        />
      )}
      <CitiesDataTable cityFilter={cityName} enableFilter={enableFilter} />
    </div>
  );
};

const ModalData = ({
  toggleModalVisibility,
  toggleModalResponseVisibility,
  handleResponseChange,
}) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    const city = {
      name: data?.cityName,
      country: data?.cityCountry,
      timezone: data?.cityTimezone,
      population: data?.cityPopulation,
      location: {
        longitude: parseFloat(data?.cityLocationLongitude),
        latitude: parseFloat(data?.cityLocationLatitude),
      },
    };
    setLoading(true);
    await postCity(city)
      .then((res) => {
        handleResponseChange({
          type: res.type,
          message: res.message,
        });
      })
      .finally(() => {
        toggleModalVisibility();
        toggleModalResponseVisibility();
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="modal modal-open">
        <div className="modal-box relative">
          <button onClick={toggleModalVisibility}>
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
          </button>
          <p className="-mt-5 text-center text-xl text-primary font-bold">
            <span className="text-secondary-content">Add new city</span>
          </p>
          <CityForm
            editing={false}
            city={null}
            handleSubmitForm={handleSubmit}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default CitiesPage;
