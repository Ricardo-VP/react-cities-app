import React from 'react'

import { useForm } from 'react-hook-form'

const CityForm = ({ city, handleSubmitForm, editing, loading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' })

  const errorSpan = (field) => {
    return (
      errors[field] && (
        <label className="label -mb-5">
          <span className="label-text text-error-content">Field required</span>
        </label>
      )
    )
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className="mt-1">
      <div className="grid grid-cols-2">
        <div className="form-control p-2">
          <label className="label">
            <span className="label-text text-secondary-content">Name</span>
          </label>
          <input
            type="text"
            defaultValue={editing === true ? city.name : ''}
            {...register('cityName', { required: true })}
            placeholder="City name"
            className="input input-bordered input-primary"
          />
          {errorSpan('cityName')}
        </div>
        <div className="form-control p-2">
          <label className="label">
            <span className="label-text text-secondary-content">Country</span>
          </label>
          <input
            type="text"
            defaultValue={editing === true ? city.country : ''}
            {...register('cityCountry', { required: true })}
            placeholder="Country"
            className="input input-bordered input-primary"
          />
          {errorSpan('cityCountry')}
        </div>
        <div className="form-control p-2">
          <label className="label">
            <span className="label-text text-secondary-content">Timezone</span>
          </label>
          <input
            type="text"
            defaultValue={editing === true ? city.timezone : ''}
            {...register('cityTimezone', { required: true })}
            placeholder="Timezone"
            className="input input-bordered input-primary"
          />
          {errorSpan('cityTimezone')}
        </div>
        <div className="form-control p-2">
          <label className="label">
            <span className="label-text text-secondary-content">
              Population
            </span>
          </label>
          <input
            type="number"
            defaultValue={editing === true ? city.population : ''}
            {...register('cityPopulation', { required: true })}
            placeholder="Population"
            className="input input-bordered input-primary"
          />
          {errorSpan('cityPopulation')}
        </div>
        <div className="form-control p-2">
          <label className="label">
            <span className="label-text text-secondary-content">Latitude</span>
          </label>
          <input
            type="number"
            step="any"
            defaultValue={editing === true ? city.location.latitude : null}
            {...register('cityLocationLatitude', {
              required: true,
              valueAsNumber: true,
            })}
            placeholder="Latitude"
            className="input input-bordered input-primary"
          />
          {errorSpan('cityLocationLatitude')}
        </div>
        <div className="form-control p-2">
          <label className="label">
            <span className="label-text text-secondary-content">Longitude</span>
          </label>
          <input
            type="number"
            step="any"
            defaultValue={editing === true ? city.location.longitude : null}
            {...register('cityLocationLongitude', {
              required: true,
              valueAsNumber: true,
            })}
            placeholder="Longitude"
            className="input input-bordered input-primary"
          />
          {errorSpan('cityLocationLongitude')}
        </div>
      </div>
      <input
        disabled={!isValid || loading}
        type="submit"
        className="btn btn-sm w-20 btn-primary mt-5 text-white hover:text-black"
        value={editing === true ? 'Update' : 'Save'}
      />
    </form>
  )
}

export default CityForm
