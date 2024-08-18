import { download } from 'assets/img/images'
import React from 'react'

const Assets = ({ backgrounds, handleLoadImage }) => {
  return (
    <>
      <div className="assets text-left pe-3">
        <h5 className='bold-font colored-text font-semibold mb-3'>Assets</h5>
        <hr className='h-seperator-one' />
        {/* Base */}
        <div className="mt-3 frame-btn">
          <button className='text-white flex items-center justify-center'><img src={download} alt="" className='me-2' />Upload Assets</button>
        </div>
        <hr className='h-seperator-one' style={{ margin: "25px 0" }} />

        {backgrounds.map((row, index) => (
          <div
            key={index}
            className="background-images text-center  mb-3 me-2"
            onClick={() => handleLoadImage(row.image)}
          >
            <img src={row.image} alt={row.title} className="cursor-pointer transition-transform transform hover:scale-105" />
          </div>
        ))}

      </div >
    </>
  )
}

export default Assets