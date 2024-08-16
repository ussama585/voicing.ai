import React, { useState, useRef, useEffect } from 'react';
import { submit, preview, logo, demo1, demo2, demo3 } from 'assets/img/images';
import MenusSidebar from './menus/menus-sidebar';
import Avatar from './features tab/avatar';
import Script from './features tab/script';
import { scale } from 'assets/img/images';
import { frameDivider } from 'assets/img/images';
import { volume } from 'assets/img/images';
import { arrowDown } from 'assets/img/images';
import { playBtn } from 'assets/img/images';
import { autoLayout } from 'assets/img/images';
import { zoomOut } from 'assets/img/images';
import { volumeBar } from 'assets/img/images';
import { zoomIn } from 'assets/img/images';
import { fitScreen } from 'assets/img/images';
import { Option } from 'assets/img/images';
import { frameSplitter } from 'assets/img/images';

const EditorLayout = () => {
  const [activeTab, setActiveTab] = useState("avatar");
  const [imagesArray, setImagesArray] = useState([]);
  const [currentImage, setCurrentImage] = useState({ image: null, title: '' });


  const dataArray = [
    {
      image: demo1,
      title: "Chris in black suit",
      script: '',
      length: ''
    },
    {
      image: demo2,
      title: "Chris in beige suit",
      script: '',
      length: ''
    },
    {
      image: demo3,
      title: "Voicing Ai",
      script: '',
      length: ''
    },
    {
      image: demo1,
      title: "Chris in black suit",
      script: '',
      length: ''
    },
    {
      image: demo2,
      title: "Chris in beige suit",
      script: '',
      length: ''
    },
    {
      image: demo3,
      title: "Voicing Ai",
      script: '',
      length: ''
    },
  ]

  const canvasRef = useRef(null);
  const thumbnailRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [editorText, setEditorText] = useState('');

  const [sizes, setSizes] = useState(
    imagesArray.map(() => ({ width: 130 }))
  );

  const containerRef = useRef(null);
  const [imageWidth, setImageWidth] = useState(0);

  const updateImageWidth = () => {
    if (containerRef.current) {
      const width = containerRef.current.getBoundingClientRect().width;
      setImageWidth(width);
    }
  };

  useEffect(() => {
    updateImageWidth();

    window.addEventListener('resize', updateImageWidth);

    return () => {
      window.removeEventListener('resize', updateImageWidth);
    };
  }, []);

  const handleResize = (e, index) => {
    const startX = e.clientX;

    // Safely access the width, falling back to a default value if undefined
    const startWidth = sizes[index]?.width || 130;

    const onMouseMove = (moveEvent) => {
      const newWidth = startWidth + moveEvent.clientX - startX;
      setSizes((prevSizes) => {
        const updatedSizes = [...prevSizes];
        updatedSizes[index] = { width: Math.max(newWidth, 130) }; // Set a minimum width of 130px
        return updatedSizes;
      });
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  const handleChangeTab = (tab) => {
    setActiveTab(tab)
  }

  // function to load script on frame
  const handleImageClick = (index, img) => {
    setActiveTab('script');
    setCurrentImage(prev => ({ ...prev, image: img }))
    setSelectedIndex(index);
    setEditorText(imagesArray[index].script);
  };

  const averageWPM = 150;

  // text to time calculator
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

  // load image on canvas
  const handleLoadImage = (row) => {
    setCurrentImage((prev) => ({ ...prev, image: row.image, title: row.title }));
    setImagesArray(prev => [...prev, row]);
  };

  useEffect(() => {
    if (currentImage.image && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const img = new Image();
      img.src = currentImage.image;
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
    }
  }, [currentImage]);


  return (
    <div className='editor-layout w-full'>
      <nav className='flex justify-between items-center'>
        <img src={logo} alt="Logo" className='logo' />
        <p className='title mb-0'></p>
        <div className="nav-btn flex justify-between items-center">
          <button className='simple-btn'>Feedback</button>
          <button className='text-dark simple-btn flex justify-content items-center'>
            <img src={preview} alt="Preview" className='me-1' />Preview
          </button>
          <button className='text-white colored-btn flex justify-content items-center'>
            <img src={submit} alt="Submit" className='me-1' />Submit
          </button>
        </div>
      </nav>
      <div className="row" style={{ height: "calc(100vh - 50px)" }}>
        <div className="col-5">
          <div className="row h-full">
            <div className="col-3">
              <MenusSidebar activeTab={activeTab} setActiveTab={setActiveTab} handleChangeTab={handleChangeTab} />
            </div>
            <div className="col-9 ps-0">
              <div ref={containerRef} id='menu-tab-options' className="menu-tab-options">

                {activeTab === "avatar" ? (
                  <Avatar dataArray={dataArray} handleLoadImage={handleLoadImage} imageWidth={imageWidth} />
                ) : activeTab === "script" ? (
                  <Script editorText={editorText} handleEditorChange={handleEditorChange} />
                ) : (
                  <div className="template">
                    {/* {logos.map((row, index) => (
                      <div
                        key={index}
                        className="text-center cursor-pointer transition-transform transform hover:scale-105 mb-2 me-2"
                      >
                        <img src={row.image} alt={row.title} className="w-full h-auto object-cover" />
                      </div>
                    ))} */}
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
        <div className="col-7">
          <div className='py-5'>
            {/* canvas */}
            <div className='flex justify-center item-center'>
              <div style={{ width: "600px", height: "370px" }}>
                <canvas ref={canvasRef} width="400" height="200" style={{ width: "100%" }} />
              </div>
            </div>
            <div style={{ height: "40px" }}>
              <div className="row">
                <div className="col-4">
                  <div className="flex items-center">
                    <button className="cursor-pointer transition-transform transform hover:scale-105 me-3"><img src={frameSplitter} alt="" /></button>
                    <button className="cursor-pointer transition-transform transform hover:scale-105 me-3"><img src={volume} alt="" /></button>
                    <button className="cursor-pointer transition-transform transform hover:scale-105 flex items-center" style={{ padding: "0 10px" }}>Landscape<img src={arrowDown} alt="" /></button>
                  </div>
                </div>
                <div className="col-3">
                  <div className='flex justify-center items-center'>
                    <img src={playBtn} alt="" />
                    <p style={{ fontSize: "12px", marginBottom: "0" }}>00:00:00 | 00:00:00</p>
                  </div>
                </div>
                <div className="col-5">
                  <div className="flex justify-between items-center pe-2">
                    <button className="cursor-pointer transition-transform transform hover:scale-105"><img src={autoLayout} alt="" /></button>
                    <button className="cursor-pointer transition-transform transform hover:scale-105"><img src={frameDivider} alt="" /></button>
                    <button className="cursor-pointer transition-transform transform hover:scale-105"><img src={zoomOut} alt="" /></button>
                    <button className="cursor-pointer transition-transform transform hover:scale-105"><img src={volumeBar} alt="" /></button>
                    <button className="cursor-pointer transition-transform transform hover:scale-105"><img src={zoomIn} alt="" /></button>
                    <button className="cursor-pointer transition-transform transform hover:scale-105"><img src={fitScreen} alt="" /></button>
                    <button className="cursor-pointer transition-transform transform hover:scale-105"><img src={Option} alt="" /></button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src={scale} alt="" />
              <div className='bottom-section' style={{ display: 'flex', gap: '10px' }}>
                {imagesArray.map((val, index) => {
                  const width = sizes[index]?.width || 120;

                  return (
                    <div>
                      <div className='timeline' style={{ width: `max-content`, }}>
                        {val.title && (
                          <p className="" style={{
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            fontSize: '12px',
                            padding: '3px',
                            color: '#fff',
                            marginRight: '5px',
                          }}>{val.title}</p>
                        )}
                        <div style={{
                          background: "#E7EDFF", padding: "2px 10px",
                          borderRadius: "10px"
                        }}>
                          <div key={index}
                            className="thumbnail-frame"
                            ref={thumbnailRef}
                            style={{
                              width: `${width}px`,
                              height: '62px',
                              backgroundSize: 'contain',
                              backgroundRepeat: 'repeat',
                              backgroundImage: `url(${val.image})`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              position: 'relative',
                            }}
                            onClick={() => handleImageClick(index, val.image)}
                          >
                            <div className="resizer"
                              style={{
                                width: '10px',
                                height: '100%',
                                position: 'absolute',
                                right: "-9px",
                                top: 0,
                                cursor: 'e-resize',
                              }}
                              onMouseDown={(e) => handleResize(e, index)}
                            />
                          </div>
                        </div>

                      </div>
                      {val.script && (
                        <p className="text-gray-700" style={{
                          textOverflow: 'ellipsis',
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          border: '2px dashed rgb(28 39 76 / 12%)',
                          borderRadius: '10px',
                          fontSize: '12px',
                          padding: '4px 5px',
                          background: 'rgb(28 39 76 / 3%)',
                          color: '#000',
                          marginRight: '5px',
                          marginTop: "5px",
                          maxWidth: `${width}`
                        }}>{val.script}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default EditorLayout;
