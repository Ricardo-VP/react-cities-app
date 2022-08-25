import React from 'react'

const ModalResponse = ({ toggleVisibility, response }) => {
  return (
    <div>
      <div className="modal modal-open">
        <div className="modal-box relative">
          <button onClick={toggleVisibility}>
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
          </button>
          <p className="-mt-5 text-center text-xl text-primary font-bold capitalize">
            {response?.type}
          </p>
          <p className="mt-2">{response?.message}</p>
          <button
            onClick={() => {
              toggleVisibility()
            }}
            className="btn btn-sm btn-primary mt-5"
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalResponse
