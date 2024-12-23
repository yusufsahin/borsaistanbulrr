import React from 'react'

const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={()=>props.sendData("Merhaba!")}>Veri Gönder</button>
    </div>
  )
}

export default ChildComponent;
