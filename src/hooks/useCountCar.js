const { useState } = require("react")

const initialState = 0
const [carNumber, setCarNumber] = useState(initialState)

export const useCountCar = () => {
  

  const carHandlerAdd = () => {
    setCarNumber(carNumber + 1)

  }

  const carHandlerDegree = () => {
setCarNumber(carNumber - 1)


  }

  const carHandlerReset = () => {
setCarNumber(0)


  }




  
  return (
carNumber,
carHandlerAdd,
carHandlerDegree,
carHandlerReset
  )
}