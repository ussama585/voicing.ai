import React, { useState, useRef, useEffect } from 'react';
import { submit, preview, logo } from 'assets/img/images';
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
import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar10,
  avatar11,
  avatar12,
  avatar13,
  avatar14,
  avatar15,
  avatar16,
  avatar17,
  avatar18
} from 'assets/img/images';
import Assets from './features tab/assets';
import { bg1 } from 'assets/img/images';
import { bg2 } from 'assets/img/images';
import { bg3 } from 'assets/img/images';
import { sticker1 } from 'assets/img/images';
import { sticker2 } from 'assets/img/images';
import { sticker3 } from 'assets/img/images';
import { icon1 } from 'assets/img/images';
import { icon2 } from 'assets/img/images';
import { icon3 } from 'assets/img/images';
import { video1 } from 'assets/videos';
import { video2 } from 'assets/videos';
import { music1 } from 'assets/img/images';
import { music2 } from 'assets/img/images';
import { demo1 } from 'assets/img/images';
import { demo3 } from 'assets/img/images';
import { demo2 } from 'assets/img/images';
import { videoPlaceholder } from 'assets/img/images';
import { musicFrame } from 'assets/img/images';
// import { bg4 } from 'assets/img/images';
// import { bg5 } from 'assets/img/images';

const dataArray = [
  {
    image: avatar1,
    title: "Chris in black suit",
    script: '',
    length: '',
    bgImage: null,
  },
  {
    image: avatar2,
    title: "Chris in beige suit",
    script: '',
    length: '',
    bgImage: null,
  },
  {
    image: avatar3,
    title: "Voicing Ai",
    script: '',
    length: '',
    bgImage: null,
  },
  {
    image: avatar4,
    title: "Chris in black suit",
    script: '',
    length: '',
    bgImage: null,
  },
  {
    image: avatar5,
    title: "Chris in beige suit",
    script: '',
    length: '',
    bgImage: null,
  },
  {
    image: avatar6,
    title: "Voicing Ai",
    script: '',
    length: '',
    bgImage: null,
  },
  {
    image: avatar7,
    title: "Voicing Ai",
    script: '',
    length: '',
    bgImage: null,
  },
  {
    image: avatar8,
    title: "Chris in black suit",
    script: '',
    length: '',
    bgImage: null,
  },
  {
    image: avatar9,
    title: "Chris in beige suit",
    script: '',
    length: '',
    bgImage: null,
  },
  {
    image: avatar10,
    title: "Voicing Ai",
    script: '',
    length: '',
    bgImage: null,
  },
  {
    image: avatar11,
    title: "Chris in black suit",
    script: '',
    length: '',
    bgImage: null,
  },
  {
    image: avatar12,
    title: "Chris in beige suit",
    script: '',
    length: '',
    bgImage: null,
  },
  {
    image: avatar13,
    title: "Voicing Ai",
    script: '',
    length: '',
    bgImage: null,
  },
  {
    image: avatar14,
    title: "Voicing Ai",
    script: '',
    length: '',
    bgImage: null,
  },
  {
    image: avatar15,
    title: "Chris in black suit",
    script: '',
    length: '',
    bgImage: null,
  },
  {
    image: avatar16,
    title: "Chris in beige suit",
    script: '',
    length: '',
    bgImage: null,
  },
  {
    image: avatar17,
    title: "Voicing Ai",
    script: '',
    length: '',
    bgImage: null,
  },
  {
    image: avatar18,
    title: "Voicing Ai",
    script: '',
    length: '',
    bgImage: null,
  },
]

const backgrounds = [
  { image: bg1 },
  { image: bg2 },
  { image: bg3 },
  // { image: bg4 },
  // { image: bg5 },
]

const images = [
  { image: demo1 },
  { image: demo2 },
  { image: demo3 },
]

const stickers = [
  { image: sticker1 },
  { image: sticker2 },
  { image: sticker3 },
]

const icons = [
  { image: icon1 },
  { image: icon2 },
  { image: icon3 },
]

const videos = [
  { video:  video1, thumbnail: videoPlaceholder },
  { video:  video2, thumbnail: videoPlaceholder },
]

const musicTracks=[
  { music: music1, thumbnail: musicFrame },
  { music: music2, thumbnail: musicFrame },
]

const EditorLayout = () => {

  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [activeTab, setActiveTab] = useState("avatar");
  const [canvasArray, setCanvasArray] = useState([]);
  const [currentImage, setCurrentImage] = useState({ image: null, bgImage: null, title: '' });
  const [selectedIndex, setSelectedIndex] = useState(null); // Track the currently displayed avatar
  const [editorArray, setEditorArray] = useState([]);

  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const thumbnailRef = useRef(null);
  const [sizes, setSizes] = useState(canvasArray.map(() => ({ width: 130 })));
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
    const startWidth = sizes[index]?.width || 130;

    const onMouseMove = (moveEvent) => {
      const newWidth = startWidth + moveEvent.clientX - startX;
      setSizes((prevSizes) => {
        const updatedSizes = [...prevSizes];
        updatedSizes[index] = { width: Math.max(newWidth, 130) };
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
    setActiveTab(tab);
  };

  const handleImageClick = (index, img, title) => {
    const updatedCanvasArray = [...canvasArray];
    if (index < updatedCanvasArray.length) {
      updatedCanvasArray[index].image = img;
      updatedCanvasArray[index].title = title;
    } else {
      updatedCanvasArray.push({ image: img, title: title, bgImage: null, script: '', length: '' });
    }
    setCanvasArray(updatedCanvasArray);
    setSelectedIndex(index); // Set the currently displayed avatar
    setCurrentImage(updatedCanvasArray[index]);

    if (editorArray.length < updatedCanvasArray.length) {
      setEditorArray(prev => [...prev, '']);
      setActiveTab('script');
    }
  };

  const handleBackgroundClick = (bgImg) => {
    if (selectedIndex !== null) { // Ensure an avatar is selected
      const updatedCanvasArray = [...canvasArray];
      updatedCanvasArray[selectedIndex].bgImage = bgImg; // Update background only for the selected avatar
      setCanvasArray(updatedCanvasArray);
      setCurrentImage(updatedCanvasArray[selectedIndex]); // Update currentImage to reflect the change
    }
  };
  const handleButtonClick = (index) => {
    if (editorArray.length < canvasArray.length) {
      setEditorArray(prev => [...prev, '']);
    }
  };

  const handleButtonClickToRemoveTextarea = () => {
    if (editorArray.length > 0) {
      setEditorArray((prevArray) => prevArray.slice(0, -1));

      setCanvasArray((prev) => {
        const updatedArray = [...prev];
        const lastIndex = editorArray.length - 1;

        if (lastIndex >= 0) {
          updatedArray[lastIndex].script = '';
        }

        return updatedArray;
      });
    }
  };

  const handleEditorChange = (e, index) => {
    const text = e.target.value;
    const timeLength = calculateTime(text);

    setEditorArray(prev => {
      const newEditorArray = [...prev];
      newEditorArray[index] = text;
      return newEditorArray;
    });

    setCanvasArray(prev =>
      prev.map((item, idx) =>
        idx === index ? { ...item, script: text, length: timeLength } : item
      )
    );
  };

  const calculateTime = (text) => {
    const averageWPM = 150;
    const words = text.trim().split(/\s+/).length;
    const timeInSeconds = (words / averageWPM) * 60;
    return timeInSeconds.toFixed(2);
  };

  useEffect(() => {
    const drawCanvas = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Function to draw the avatar image
        const drawAvatar = () => {
          if (currentImage?.image) {
            const avatarImg = new Image();
            avatarImg.src = currentImage.image;

            avatarImg.onload = () => {
              const imageAspectRatio = avatarImg.width / avatarImg.height;
              const canvasAspectRatio = canvas.width / canvas.height;

              let renderableWidth, renderableHeight, xStart, yStart;

              if (imageAspectRatio < canvasAspectRatio) {
                renderableHeight = canvas.height;
                renderableWidth = avatarImg.width * (renderableHeight / avatarImg.height);
                xStart = (canvas.width - renderableWidth) / 2;
                yStart = 0;
              } else {
                renderableWidth = canvas.width;
                renderableHeight = avatarImg.height * (renderableWidth / avatarImg.width);
                xStart = 0;
                yStart = (canvas.height - renderableHeight) / 2;
              }

              ctx.drawImage(avatarImg, xStart, yStart, renderableWidth, renderableHeight);
            };
          }
        };

        // Draw the background image if present
        if (currentImage?.bgImage) {
          const bgImg = new Image();
          bgImg.src = currentImage.bgImage;

          bgImg.onload = () => {
            const imageAspectRatio = bgImg.width / bgImg.height;
            const canvasAspectRatio = canvas.width / canvas.height;

            let renderableWidth, renderableHeight, xStart, yStart;

            // Cover logic: Ensure no blank spaces by covering the canvas fully
            if (imageAspectRatio > canvasAspectRatio) {
              renderableHeight = canvas.height;
              renderableWidth = bgImg.width * (renderableHeight / bgImg.height);
              xStart = (canvas.width - renderableWidth) / 2;
              yStart = 0;
            } else {
              renderableWidth = canvas.width;
              renderableHeight = bgImg.height * (renderableWidth / bgImg.width);
              xStart = 0;
              yStart = (canvas.height - renderableHeight) / 2;
            }

            ctx.drawImage(bgImg, xStart, yStart, renderableWidth, renderableHeight);
            drawAvatar(); // Draw the avatar after the background
          };
        } else {
          // If no background image, draw checkerboard pattern
          const squareSize = 10;
          const numCols = Math.ceil(canvas.width / squareSize);
          const numRows = Math.ceil(canvas.height / squareSize);

          for (let i = 0; i < numCols; i++) {
            for (let j = 0; j < numRows; j++) {
              ctx.fillStyle = (i + j) % 2 === 0 ? '#cccccc' : '#ffffff';
              ctx.fillRect(i * squareSize, j * squareSize, squareSize, squareSize);
            }
          }

          drawAvatar(); // Draw the avatar if no background is present
        }
      }
    };

    drawCanvas();
  }, [currentImage, canvasArray]);


  useEffect(() => {
    let getHeight = window.innerHeight;
    setScreenHeight(getHeight);
  }, []);

  return (
    <div className='editor-layout w-full'>
      <nav className='flex justify-between items-center'>
        <img src={logo} alt="Logo" className='logo' />
        <p className='title mb-0'></p>
        <div className="nav-btn flex space-x-4 items-center">
          <button className='simple-btn'>Feedback</button>
          <button className='text-dark simple-btn flex items-center space-x-1'>
            <img src={preview} alt="Preview" className='me-1' />Preview
          </button>
          <button className='text-white colored-btn flex items-center space-x-1'>
            <img src={submit} alt="Submit" className='me-1' />Submit
          </button>
        </div>
      </nav>

      <div className="grid grid-cols-12">
        <div className="col-span-1 flex flex-col h-full" style={{ maxWidth: "88px" }}>
          <div className="h-full">
            <MenusSidebar activeTab={activeTab} setActiveTab={setActiveTab} handleChangeTab={handleChangeTab} />
          </div>

        </div>
        <div className="col-span-3 h-full" style={{ maxWidth: "336px", position: "relative" }}>
          <div className="h-full ps-0" style={{ position: "absolute", left: "-16px" }}>
            <div ref={containerRef} id='menu-tab-options' className="menu-tab-options" style={{ overflowY: "hidden" }}>
              {activeTab === "avatar" ? (
                <Avatar dataArray={dataArray} handleLoadImage={handleImageClick} imageWidth={imageWidth} screenHeight={screenHeight} />
              ) : activeTab === "script" ? (
                <Script
                  editorArray={editorArray}
                  handleEditorChange={handleEditorChange}
                  handleButtonClick={handleButtonClick}
                  handleButtonClickToRemoveTextarea={handleButtonClickToRemoveTextarea}
                />
              ) : activeTab === "assets" ? (
                <Assets backgrounds={backgrounds} stickers={stickers} icons={icons} videos={videos} musicTracks={musicTracks} images = {images} handleLoadImage={handleBackgroundClick} />
              ) : (
                <div className="template">
                  {/* Other template code */}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="col-span-8 py-5">
          {/* canvas */}
          <div className='flex justify-center items-center'>
            <div style={{ width: "600px", height: "370px" }}>
              <canvas ref={canvasRef} width="400" height="200" style={{ width: "100%" }} />
            </div>
          </div>

          <div style={{ height: "40px" }}>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-4 flex items-center">
                <button className="cursor-pointer transition-transform transform hover:scale-105 me-3"><img src={frameSplitter} alt="" /></button>
                <button className="cursor-pointer transition-transform transform hover:scale-105 me-3"><img src={volume} alt="" /></button>
                <button className="cursor-pointer transition-transform transform hover:scale-105 flex items-center space-x-2" style={{ padding: "0 10px" }}>Landscape<img src={arrowDown} alt="" /></button>
              </div>

              <div className="col-span-3 flex justify-center items-center">
                <img src={playBtn} alt="" />
                <p className="text-xs mb-0">00:00:00 | 00:00:00</p>
              </div>

              <div className="col-span-5 flex justify-between items-center pe-2">
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

          <div>
            <img src={scale} alt="" />
            <div className='bottom-section flex gap-2'>
              {console.log(canvasArray, "imagesArrayimagesArrayimagesArray")}
              {canvasArray.map((val, index) => {
                const width = sizes[index]?.width || 120;

                return (
                  <div key={index}>
                    <div className='timeline' style={{ width: `max-content`, }}>
                      {val.title && (
                        <p className="text-sm text-white mb-1" style={{
                          textOverflow: 'ellipsis',
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          padding: '3px',
                          marginRight: '5px',
                        }}>{val.title}</p>
                      )}
                      <div className="bg-blue-100 rounded-md px-2 py-1">
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
                          onClick={() => handleImageClick(index, val.image, val.title)}
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
                      <p className="text-xs bg-gray-200 border-dashed border-2 border-gray-400 rounded-md p-2 mt-1" style={{
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        color: '#000',
                        marginRight: '5px',
                        maxWidth: `${width}px`
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

  );
}

export default EditorLayout;
