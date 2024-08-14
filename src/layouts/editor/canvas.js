import React, { useState } from 'react'
import { useEffect } from 'react'

const Canvas = ({ currentImage, imagesArray, setImagesArray, setActiveTab }) => {

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [editorText, setEditorText] = useState('');
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleImageClick = (index) => {
    setActiveTab('script')
    setOpen(true)
    setSelectedIndex(index);
    setEditorText(imagesArray[index].script);
  };

  const averageWPM = 150; // You can adjust this based on your needs

  const calculateTime = (text) => {
    const words = text.trim().split(/\s+/).length;
    const timeInSeconds = (words / averageWPM) * 60;
    return timeInSeconds.toFixed(2);
  };

  const handleEditorChange = (e) => {
    let text = e.target.value;
    let getLength = calculateTime(text);

    setEditorText(e.target.value);

    setImagesArray(prev =>
      prev.map((item, idx) =>
        idx === selectedIndex ? { ...item, script: e.target.value, length: getLength } : item
      )
    );
  };

  return (
    <div>
      <div style={{ width: "600px", height: "400px" }}>
        <img src={currentImage} alt="" style={{ width: "100%" }} />
      </div>
      <div className="flex">
        {imagesArray?.map((val, index) => {
          return (
            <div key={index} style={{ width: "130px", height: "72px", }}>
              <img src={val.image} alt="" width={130} height={72} onClick={() => handleImageClick(index)} />

              {selectedIndex === index && (
                open && <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                  <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                      <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                          <div class="">

                            <div class="text-left">
                              <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Write your script here</h3>
                              <div className="mt-2">
                                <textarea
                                  value={editorText}
                                  onChange={handleEditorChange}
                                  placeholder="Write something..."
                                  className="w-full p-2 border border-gray-300 rounded"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="bg-gray-50 px-4 py-3">
                          {/* <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Deactivate</button> */}
                          <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={() => handleClose()}>Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {val.script && (
                <p className="mt-2 pe-2 text-gray-700" style={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  border: "2px solid purple",
                  borderRadius: "5px",
                  fontSize: "12px",
                  padding: "3px",
                  background: "#d8ebf4",
                  color: "#268ae0",
                  marginRight: "5px"
                }}>{val.script}</p>
              )}
              {val.length && (
                <p className="mt-2 text-gray-700">{val.length}</p>
              )}
            </div>

          )
        })}
      </div>
    </div>
  )
}

export default Canvas