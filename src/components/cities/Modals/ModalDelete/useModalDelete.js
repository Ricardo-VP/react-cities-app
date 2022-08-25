import { useState } from 'react'

const useModalDelete = () => {
  const [modalConfirmVisibility, setModaConfirmlVisibility] = useState(false)

  const toggleModalConfirmVisibility = () => {
    setModaConfirmlVisibility((prev) => !prev)
  }

  return { modalConfirmVisibility, toggleModalConfirmVisibility }
}

export default useModalDelete
