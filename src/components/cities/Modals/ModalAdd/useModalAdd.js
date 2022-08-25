import { useState } from 'react'

const useModalAdd = () => {
  const [modalAddVisibility, setModalAddVisibility] = useState(false)

  const toggleModalAddVisibility = () => {
    setModalAddVisibility((prev) => !prev)
  }

  return { modalAddVisibility, toggleModalAddVisibility }
}

export default useModalAdd
