import React from 'react'
import CategoryMenu from '../categories/CategoryMenu'

const Main = () => {
  return (
    <div className="d-flex">
    {/* Kategori Menüsü */}
    <div style={{ width: "25%", borderRight: "1px solid #ccc", padding: "10px" }}>
      <CategoryMenu />
    </div>
    </div>
  )
}

export default Main