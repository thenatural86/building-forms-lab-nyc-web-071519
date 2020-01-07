import React from "react"

const Bands = props => {
  const bands = props.band.map((band, index) => {
    return <li key={index}>{band.name}</li>
  })
  return <div>{bands}</div>
}

export default Bands
