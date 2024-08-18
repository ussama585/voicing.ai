import React from 'react'

const Avatar = ({ dataArray, handleLoadImage, imageWidth, screenHeight }) => {

  const thumbWidth = (imageWidth / 2 - 20)
console.log(screenHeight,"scrrennene")
  return (
    <>
      <h6 className='colored-text font-semibold mb-3'>Choose an Avatar</h6>
      <div className="flex justify-between items-center ps-1 pe-3">
        <p>My Saved Avatars</p>
        <button className='text-white colored-btn'>Create Avatar</button>
      </div>
      <div className="template" style={{ overflowY: "scroll", maxHeight: `calc(${screenHeight}px - 100px)` }}>
        {dataArray.map((row, index) => (
          <div
            key={index}
            className="template-image text-center cursor-pointer transition-transform transform hover:scale-105 mb-3 me-2"
            onClick={() => handleLoadImage(index, row.image, row.title)}
          >
            <img src={row.image} alt={row.title} style={{ width: `calc(${thumbWidth}px - 20px)` }} className="w-full h-auto object-cover" />
            <p className="mt-2 text-sm font-medium text-gray-700">{row.title}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Avatar