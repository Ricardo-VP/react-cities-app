import { useState } from 'react'

const useModalData = () => {
  const [modalDataVisibility, setModalDataVisibility] = useState(false)

  const toggleModalDataVisibility = () => {
    setModalDataVisibility((prev) => !prev)
  }

  return { modalDataVisibility, toggleModalDataVisibility }
}

export default useModalData
