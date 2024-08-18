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
  { video: video1, thumbnail: videoPlaceholder },
  { video: video2, thumbnail: videoPlaceholder },
]

const musicTracks = [
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

  const [isDragging, setIsDragging] = useState(false);
  const [draggedElement, setDraggedElement] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Check for icons
    for (let i = 0; i < currentImage.icons.length; i++) {
      const icon = currentImage.icons[i];
      if (
        mouseX >= icon.xPos &&
        mouseX <= icon.xPos + icon.size &&
        mouseY >= icon.yPos &&
        mouseY <= icon.yPos + icon.size
      ) {
        setIsDragging(true);
        setDraggedElement({ ...icon, type: 'icon', index: i });
        setOffset({ x: mouseX - icon.xPos, y: mouseY - icon.yPos });
        return; // Exit early once an element is found
      }
    }

    // Check for stickers
    if (currentImage?.stickers) {
      for (let i = 0; i < currentImage.stickers.length; i++) {
        const sticker = currentImage.stickers[i];
        if (
          mouseX >= sticker.xPos &&
          mouseX <= sticker.xPos + sticker.size &&
          mouseY >= sticker.yPos &&
          mouseY <= sticker.yPos + sticker.size
        ) {
          setIsDragging(true);
          setDraggedElement({ ...sticker, type: 'sticker', index: i });
          setOffset({ x: mouseX - sticker.xPos, y: mouseY - sticker.yPos });
          return; // Exit early once an element is found
        }
      }
    };
  }

  const handleMouseMove = (event) => {
    if (!isDragging || !draggedElement) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const newXPos = mouseX - offset.x;
    const newYPos = mouseY - offset.y;

    setDraggedElement((prev) => ({
      ...prev,
      xPos: newXPos,
      yPos: newYPos,
    }));

    // Draw while moving
    redrawCanvas(newXPos, newYPos);
  };

  const handleMouseUp = () => {
    if (!isDragging || !draggedElement) return;

    const updatedCanvasArray = [...canvasArray];
    if (draggedElement.type === 'icon') {
      updatedCanvasArray[selectedIndex].icons[draggedElement.index] = draggedElement;
    } else if (draggedElement.type === 'sticker') {
      updatedCanvasArray[selectedIndex].stickers[draggedElement.index] = draggedElement;
    }

    setCanvasArray(updatedCanvasArray);
    setCurrentImage(updatedCanvasArray[selectedIndex]);

    setIsDragging(false);
    setDraggedElement(null);
  };

  const redrawCanvas = (newXPos, newYPos) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Redraw background
      if (currentImage?.bgImage) {
        const bgImg = new Image();
        bgImg.src = currentImage.bgImage;
        bgImg.onload = () => {
          ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
          drawContent(ctx, newXPos, newYPos);
        };
      } else {
        drawCheckerboard(ctx, canvas);
        drawContent(ctx, newXPos, newYPos);
      }
    }
  };

  const drawContent = (ctx, newXPos, newYPos) => {
    // Draw the avatar
    if (currentImage?.image) {
      drawAvatar(ctx, canvasRef.current, currentImage.image);
    }

    // Draw icons
    currentImage?.icons && currentImage?.icons.forEach((icon, i) => {
      if (draggedElement && draggedElement.type === 'icon' && i === draggedElement.index) {
        drawIcon(ctx, canvasRef.current, icon.src, newXPos, newYPos, icon.size);
      } else {
        drawIcon(ctx, canvasRef.current, icon.src, icon.xPos, icon.yPos, icon.size);
      }
    });

    // Draw stickers
    currentImage?.stickers && currentImage?.stickers.forEach((sticker, i) => {
      if (draggedElement && draggedElement.type === 'sticker' && i === draggedElement.index) {
        drawSticker(ctx, canvasRef.current, sticker.src, newXPos, newYPos, sticker.size);
      } else {
        drawSticker(ctx, canvasRef.current, sticker.src, sticker.xPos, sticker.yPos, sticker.size);
      }
    });
  };


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
      updatedCanvasArray[index] = {
        ...updatedCanvasArray[index],
        image: img,
        title: title,
      };
    } else {
      updatedCanvasArray.push({
        index: canvasArray.length,
        image: img,
        title: title,
        bgImage: null,
        script: '',
        length: '',
        images: [],
        icons: [], // Add icons array if not already present
      });
    }

    setCanvasArray(updatedCanvasArray);
    setSelectedIndex(index); // Set the currently displayed avatar
    setCurrentImage(updatedCanvasArray[index]); // Update currentImage with the selected avatar

    if (editorArray.length < updatedCanvasArray.length) {
      setEditorArray(prev => [...prev, '']);
      setActiveTab('script');
    }
  };


  const handleBackgroundClick = (bgImg, feature) => {
    if (feature === 'img') {
      if (currentImage.image != null) {
        console.log(bgImg, "xxxxx", feature)
      }
    } else {
      if (selectedIndex !== null) { // Ensure an avatar is selected
        const updatedCanvasArray = [...canvasArray];
        updatedCanvasArray[selectedIndex].bgImage = bgImg; // Update background only for the selected avatar
        setCanvasArray(updatedCanvasArray);
        setCurrentImage(updatedCanvasArray[selectedIndex]); // Update currentImage to reflect the change
      }
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

  const handleLoadIcon = (iconSrc, xPos = 0, yPos = 0, iconSize = 50) => {
    if (selectedIndex !== null) { // Ensure an avatar is selected
      const updatedCanvasArray = [...canvasArray];
      const updatedIcons = [
        ...updatedCanvasArray[selectedIndex].icons,
        { src: iconSrc, xPos, yPos, size: iconSize }
      ];

      updatedCanvasArray[selectedIndex] = {
        ...updatedCanvasArray[selectedIndex],
        icons: updatedIcons
      };

      setCanvasArray(updatedCanvasArray);
      setCurrentImage(updatedCanvasArray[selectedIndex]); // Update currentImage to reflect the change

      console.log("Icon added:", updatedCanvasArray[selectedIndex].icons);
    } else {
      console.error("No avatar selected to load the icon.");
    }
  };

  const handleLoadSticker = (stickerSrc, xPos = 0, yPos = 0, stickerSize = 50) => {
    if (selectedIndex !== null && canvasArray[selectedIndex]) { // Ensure an avatar is selected and the index exists in canvasArray
      const updatedCanvasArray = [...canvasArray];

      // Ensure the stickers array is initialized
      if (!Array.isArray(updatedCanvasArray[selectedIndex].stickers)) {
        updatedCanvasArray[selectedIndex].stickers = [];
        console.log("Initialized stickers array for selected index:", selectedIndex);
      }

      console.log("Adding sticker with source:", stickerSrc);
      console.log("Current stickers array before adding:", updatedCanvasArray[selectedIndex].stickers);

      // Push the new sticker to the stickers array
      updatedCanvasArray[selectedIndex].stickers.push({ src: stickerSrc, xPos, yPos, size: stickerSize });

      setCanvasArray(updatedCanvasArray);
      setCurrentImage(updatedCanvasArray[selectedIndex]); // Update currentImage to reflect the change

      console.log("Sticker added:", updatedCanvasArray[selectedIndex].stickers);
    } else {
      console.error("No avatar selected or invalid canvasArray index. Cannot load sticker.");
    }
  };



  const drawAvatar = (ctx, canvas, imageSrc) => {
    if (imageSrc) {
      const avatarImg = new Image();
      avatarImg.src = imageSrc;

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

  const drawBackground = (ctx, canvas, bgImage, onComplete) => {
    const bgImg = new Image();
    bgImg.src = bgImage;

    bgImg.onload = () => {
      const imageAspectRatio = bgImg.width / bgImg.height;
      const canvasAspectRatio = canvas.width / canvas.height;

      let renderableWidth, renderableHeight, xStart, yStart;

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
      onComplete(); // Draw avatar after background
    };
  };

  const drawCheckerboard = (ctx, canvas, squareSize = 10) => {
    const numCols = Math.ceil(canvas.width / squareSize);
    const numRows = Math.ceil(canvas.height / squareSize);

    for (let i = 0; i < numCols; i++) {
      for (let j = 0; j < numRows; j++) {
        ctx.fillStyle = (i + j) % 2 === 0 ? '#cccccc' : '#ffffff';
        ctx.fillRect(i * squareSize, j * squareSize, squareSize, squareSize);
      }
    }
  };

  const drawIcon = (ctx, canvas, iconSrc, xPos, yPos, iconSize = 50) => {
    if (iconSrc) {
      const iconImg = new Image();
      iconImg.src = iconSrc;

      iconImg.onload = () => {
        // If xPos or yPos are not provided, center the icon by default
        const xStart = xPos !== undefined ? xPos : (canvas.width - iconSize) / 2;
        const yStart = yPos !== undefined ? yPos : (canvas.height - iconSize) / 2;

        // Draw the icon on the canvas at the specified position
        ctx.drawImage(iconImg, xStart, yStart, iconSize, iconSize);
      };

      iconImg.onerror = (error) => {
        console.error("Error loading icon:", error);
      };
    } else {
      console.error("No iconSrc provided for drawIcon");
    }
  };

  const drawSticker = (ctx, canvas, stickerSrc, xPos, yPos, stickerSize = 50) => {
    if (stickerSrc) {
      const stickerImg = new Image();
      stickerImg.src = stickerSrc;

      stickerImg.onload = () => {
        // If xPos or yPos are not provided, center the sticker by default
        const xStart = xPos !== undefined ? xPos : (canvas.width - stickerSize) / 2;
        const yStart = yPos !== undefined ? yPos : (canvas.height - stickerSize) / 2;

        // Draw the sticker on the canvas at the specified position
        ctx.drawImage(stickerImg, xStart, yStart, stickerSize, stickerSize);
      };

      stickerImg.onerror = (error) => {
        console.error("Error loading sticker:", error);
      };
    } else {
      console.error("No stickerSrc provided for drawSticker");
    }
  };



  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      console.log(currentImage, "currentImagecurrentImagecurrentImage");

      const drawContent = () => {
        // Draw the avatar
        if (currentImage?.image) {
          drawAvatar(ctx, canvas, currentImage.image);
        } else {
          console.error("No image found for avatar");
        }

        // Draw the icons
        if (currentImage?.icons) {
          currentImage.icons.forEach((icon) => {
            drawIcon(ctx, canvas, icon.src, icon.xPos, icon.yPos, icon.size);
          });
        }

        // Draw the stickers
        if (currentImage?.stickers) {
          currentImage.stickers.forEach((sticker) => {
            drawSticker(ctx, canvas, sticker.src, sticker.xPos, sticker.yPos, sticker.size);
          });
        }
      };

      // Draw background and then the content (avatar, icons, stickers)
      if (currentImage?.bgImage) {
        drawBackground(ctx, canvas, currentImage.bgImage, drawContent);
      } else {
        drawCheckerboard(ctx, canvas);
        drawContent();
      }
    }
  }, [currentImage, canvasArray]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener('mousedown', handleMouseDown);
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener('mousedown', handleMouseDown);
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseup', handleMouseUp);
      }
    };
  }, [currentImage, draggedElement, handleMouseDown, handleMouseMove, handleMouseUp, isDragging]);






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
                <Assets backgrounds={backgrounds} stickers={stickers} icons={icons} videos={videos} musicTracks={musicTracks} images={images} handleLoadImage={handleBackgroundClick} handleLoadIcon={handleLoadIcon} handleLoadSticker={handleLoadSticker} />
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
                          onClick={() => handleImageClick(val.index, val.image, val.title)}
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
