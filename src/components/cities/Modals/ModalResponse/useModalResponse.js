import { useState } from 'react'

const useModalResponse = () => {
  const [modalResponseVisibility, setModalResponselVisibility] = useState(false)

  const toggleModalResponseVisibility = () => {
    setModalResponselVisibility((prev) => !prev)
  }

  return { modalResponseVisibility, toggleModalResponseVisibility }
}

export default useModalResponse
