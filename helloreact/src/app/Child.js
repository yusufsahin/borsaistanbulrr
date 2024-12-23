import React from 'react'

const Child = ({firstname=firstname || "Anonim",lastname=lastname || "Kullanıcı" }) => {
  return (
    <div>
      <h1>Welcome {lastname},{firstname} </h1>
    </div>
  )
}

export default Child
