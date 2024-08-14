import React, { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { playIcon } from 'assets/img/images'
import { imageIcon } from 'assets/img/images'
import { language } from 'assets/img/images'
import { script } from 'assets/img/images'
import { pdf } from 'assets/img/images'
import { frame } from 'assets/img/images'
import { playWhiteIcon } from 'assets/img/images'
import { closeButton } from 'assets/img/images'
import { Link, useNavigate } from 'react-router-dom'

const VideoAi = () => {
  const [open, setOpen] = useState(true)
  const navigate = useNavigate();

  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-screen-lg data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:max-w-full data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="video-ai-menu bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="row">
                <div className="col-3">
                  <h2 className='mb-4 font-semibold'>Create Video</h2>
                  <ul className='mb-4'>
                    <li className='flex items-center'>
                      <img src={playIcon} alt="" className='me-3' />
                      <p>Start from scratch</p>
                    </li>
                    <li className='flex items-center'>
                      <img src={imageIcon} alt="" className='me-3' />
                      <p>Start with a template</p>
                    </li>
                    <li className='flex items-center'>
                      <img src={pdf} alt="" className='me-3' />
                      <p>Start with a PPT/PDF</p>
                    </li>
                    <li className='flex items-center'>
                      <img src={script} alt="" className='me-3' />
                      <p>Generate script with AI</p>
                    </li>

                  </ul>
                  <ul>
                    <h2 className='mb-4 font-semibold'>Translate Video</h2>
                    <li className='flex items-center'>
                      <img src={language} alt="" className='me-3' />
                      <p>Translate a video</p>
                    </li>
                  </ul>
                </div>
                <div className="col-9">
                  <div className="flex justify-between items-center mb-3">
                    <h2 className='font-semibold'>Choose the layout of your video</h2>
                    <Link to={'/admin/default'}><img src={closeButton} alt="" /></Link>
                  </div>
                  <div className='frame'>
                    <div className="layout">
                      <img src={frame} alt="" width={40} height={40} />
                    </div>
                  </div>
                  <div className="mt-3 frame-btn flex justify-center">
                    <button className='text-white flex items-center me-3' onClick={()=>navigate('/editor-ai')}><img src={playWhiteIcon} alt="" className='me-2' />Landscape</button>
                    <button className='text-white flex items-center' onClick={()=>navigate('/editor-ai')}><img src={playWhiteIcon} alt="" className='me-2' />Portrait</button>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>

  )
}

export default VideoAi