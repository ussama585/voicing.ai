import React from 'react'

const Avatar = ({dataArray, handleLoadImage}) => {
  return (
    <>
      <h6 className='colored-text font-semibold mb-3'>Choose an Avatar</h6>
      <div className="flex justify-between items-center ps-1 pe-3">
        <p>My Saved Avatars</p>
        <button className='text-white colored-btn'>Create Avatar</button>
      </div>
      <div className="template">
        {dataArray.map((row, index) => (
          <div
            key={index}
            className="text-center cursor-pointer transition-transform transform hover:scale-105 mb-3 me-2"
            onClick={() => handleLoadImage(row)}
          >
            <img src={row.image} alt={row.title} className="w-full h-auto object-cover" />
            <p className="mt-2 text-sm font-medium text-gray-700">{row.title}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Avatar