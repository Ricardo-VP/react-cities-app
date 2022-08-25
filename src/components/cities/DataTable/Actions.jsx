import React, { useState } from 'react'

import { FcFullTrash, FcSettings } from 'react-icons/fc'

import useModalData from '../Modals/ModalData/useModalData'
import useModalDelete from '../Modals/ModalDelete/useModalDelete'
import useModalResponse from '../Modals/ModalResponse/useModalResponse'
import Modals from '../Modals/Modals'

const Actions = ({ city, fetchCities, page }) => {
  const [response, setResponse] = useState({})

  const { modalDataVisibility, toggleModalDataVisibility } = useModalData()

  const { modalConfirmVisibility, toggleModalConfirmVisibility } =
    useModalDelete()

  const { modalResponseVisibility, toggleModalResponseVisibility } =
    useModalResponse()

  const handleDelete = () => {
    toggleModalConfirmVisibility()
  }

  const handleEdit = () => {
    toggleModalDataVisibility()
  }

  const handleResponseChange = (value) => {
    setResponse(value)
  }

  return (
    <div>
      <Modals
        city={city}
        response={response}
        fetchCities={fetchCities}
        page={page}
        handleResponseChange={handleResponseChange}
        modalConfirmVisibility={modalConfirmVisibility}
        toggleModalConfirmVisibility={toggleModalConfirmVisibility}
        modalResponseVisibility={modalResponseVisibility}
        toggleModalResponseVisibility={toggleModalResponseVisibility}
        modalEditVisibility={modalDataVisibility}
        toggleModalEditVisibility={toggleModalDataVisibility}
      />
      <p>
        <FcSettings
          onClick={handleEdit}
          className="text-3xl inline cursor-pointer	hover:text-4xl hover:-mr-1"
        />
        <FcFullTrash
          onClick={handleDelete}
          className="text-3xl inline cursor-pointer hover:text-4xl hover:-ml-1"
        />
      </p>
    </div>
  )
}

export default Actions
