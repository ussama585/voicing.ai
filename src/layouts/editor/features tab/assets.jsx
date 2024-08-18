import { download } from 'assets/img/images'
import React from 'react'

const Assets = ({ backgrounds, images, stickers, icons, musicTracks, videos, handleLoadImage, handleLoadIcon, handleLoadSticker }) => {
  return (
    <>
      <div className="assets text-left pe-2 h-full" style={{ overflowY: "scroll" }}>
        <h5 className='bold-font colored-text font-semibold mb-3'>Assets</h5>
        <hr className='h-seperator-one' />
        {/* Base */}
        <div className="mt-3 frame-btn">
          <button className='text-white flex items-center justify-center'><img src={download} alt="" className='me-2' />Upload Assets</button>
        </div>
        <hr className='h-seperator-one' style={{ margin: "25px 0" }} />
        {/* backgrounds */}
        <section>
          <div className="flex justify-between align-items mb-2">
            <h6>Background</h6>
            <p style={{ fontSize: "14px" }}>View All</p>
          </div>
          <div className='background-images'>
            {backgrounds.map((row, index) => (
              <div
                key={index}
                className="mb-3 me-2"
                onClick={() => handleLoadImage(row.image)}
              >
                <img src={row.image} alt={row.title} className="cursor-pointer transition-transform transform hover:scale-105" />
              </div>
            ))}
          </div>
        </section>
        <hr className='h-seperator-one' style={{ margin: "25px 0" }} />
        {/* images */}
        <section>
          <div className="flex justify-between align-items mb-2">
            <h6>Image</h6>
            <p style={{ fontSize: "14px" }}>View All</p>
          </div>
          <div className='background-images'>
            {images.map((row, index) => (
              <div
                key={index}
                className="mb-3 me-2"
                onClick={() => handleLoadImage(row.image, 'img')}
              >
                <img src={row.image} alt={index} className="cursor-pointer transition-transform transform hover:scale-105" />
              </div>
            ))}
          </div>
        </section>
        <hr className='h-seperator-one' style={{ margin: "25px 0" }} />
        {/* videos */}
        <section>
          <div className="flex justify-between align-items mb-2">
            <h6>Video</h6>
            <p style={{ fontSize: "14px" }}>View All</p>
          </div>
          <div className='background-images'>
            {videos.map((row, index) => (
              <div
                key={index}
                className="mb-3 me-2"
              // onClick={() => handleLoadVideo(row.video)}
              >
                <img src={row.thumbnail} alt={index} className="cursor-pointer transition-transform transform hover:scale-105" />
              </div>
            ))}
          </div>
        </section>
        <hr className='h-seperator-one' style={{ margin: "25px 0" }} />
        {/* music */}
        <section>
          <div className="flex justify-between align-items mb-2">
            <h6>Music</h6>
            <p style={{ fontSize: "14px" }}>View All</p>
          </div>
          <div className='background-images'>
            {musicTracks.map((row, index) => (
              <div
                key={index}
                className="mb-3"
              // onClick={() => handleLoadVideo(row.music)}
              >

                <img src={row.thumbnail} alt={index} className="music-thumbnail cursor-pointer transition-transform transform hover:scale-105" />
              </div>
            ))}
          </div>
        </section>
        <hr className='h-seperator-one' style={{ margin: "25px 0" }} />
        {/* icons */}
        <section>
          <div className="flex justify-between align-items mb-2">
            <h6>Icons</h6>
            <p style={{ fontSize: "14px" }}>View All</p>
          </div>
          <div className='background-images'>
            {icons.map((row, index) => (
              <div
                key={index}
                className="mb-3"
                onClick={() => handleLoadIcon(row.image)}
              >
                <img src={row.image} alt={index} className="cursor-pointer transition-transform transform hover:scale-105" />
              </div>
            ))}
          </div>
        </section>
        <hr className='h-seperator-one' style={{ margin: "25px 0" }} />
        {/* stickers */}
        <section>
          <div className="flex justify-between align-items mb-2">
            <h6>Stickers</h6>
            <p style={{ fontSize: "14px" }}>View All</p>
          </div>
          <div className='background-images'>
            {stickers.map((row, index) => (
              <div
                key={index}
                className="mb-3"
              onClick={() => handleLoadSticker(row.image)}
              >
                <img src={row.image} alt={index} className="cursor-pointer transition-transform transform hover:scale-105" />
              </div>
            ))}
          </div>
        </section>
      </div >
    </>
  )
}

export default Assets