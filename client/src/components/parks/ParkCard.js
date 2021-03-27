import React from 'react'
import { Link } from 'react-router-dom'


const ParkCard = ({ _id, name, image }) => {
  return (
    <>

      <div className="column is-one-quarter-desktop is-one-third-tablet">
        <Link to={`/parks/${_id}`}>
          <div className="card">
            <div className="card-header">
              <div className="card-header-title">{name}</div>
            </div>
            <div className="card-image">
              <figure className="image image-is-1by1">
                <img src={image} alt={`${name} Cheese`} />
              </figure>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default ParkCard
