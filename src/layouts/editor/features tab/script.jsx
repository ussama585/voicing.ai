import { arrowDown } from 'assets/img/images';
import { add } from 'assets/img/images';
import { addTime } from 'assets/img/images';
import { arrowUp } from 'assets/img/images';
import { playBlackIcon } from 'assets/img/images'
import React, { useEffect, useRef, useState } from 'react'

const Script = ({ editorArray, handleEditorChange, handleButtonClick, handleButtonClickToRemoveTextarea }) => {

  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (e.shiftKey) {
        // Shift + Enter creates a new line
        return;
      } else {
        // Enter alone creates a new textarea
        e.preventDefault(); // Prevent default action of adding a newline
        handleButtonClick(); // Add a new textarea
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="text-left pe-3">
      <h5 className='bold-font colored-text font-semibold mb-3'>Script</h5>
      <hr className='h-seperator-one' />
      {/* Base */}

      <div className='flex items-center px-4 mb-4'>
        <button className="bottom-border-btn inline-block " >
          Text
        </button>
        <button className="bottom-border-btn inline-block " >
          Audio
        </button>
      </div>

      <div>
        <h5 className='mb-3'>Select Voice</h5>
        <div className="custom-select" style={{ borderRadius: isOpen && "10px 10px 0 0" }} ref={dropdownRef} onClick={toggleDropdown}>
          <div className="arrow-down">
            <img src={playBlackIcon} alt="" width={16} height={16} />
          </div>
          <div className="select-box">
            <div className="file-info">
              <span className="file-name">New audio.mp3</span>
              <span className="file-duration">00:12</span>
            </div>
            <div className="arrow-down">
              <img src={isOpen ? arrowUp : arrowDown} alt="" width={16} height={16} />
            </div>
          </div>
          {isOpen && <div id="dropdown" className="dropdown-content">
            <div className="dropdown-item">
              <span className="file-name">New audio.mp3</span>
              <span className="file-duration">00:12</span>
            </div>
            <div className="dropdown-item">
              <span className="file-name">New audio1.mp3</span>
              <span className="file-duration">00:30</span>
            </div>
            <div className="dropdown-item">
              <span className="file-name">New audio2.mp3</span>
              <span className="file-duration">30:10</span>
            </div>
            <div className="dropdown-item">
              <span className="file-name">New audio3.mp3</span>
              <span className="file-duration">04:20</span>
            </div>
            <div className="dropdown-item">
              <span className="file-name">New audio1.mp3</span>
              <span className="file-duration">00:10</span>
            </div>
          </div>}
        </div>
      </div>
      <hr className='h-seperator-one' style={{ margin: "25px 0" }} />

      <div className="my-2">
        {editorArray.length > 0 && (
          editorArray.map((text, index) => (
            <textarea
              key={index}
              value={text}
              onChange={(e) => handleEditorChange(e, index)}
              onKeyDown={handleKeyDown}
              rows={4}
              placeholder="Write something..."
              className="script-textarea w-full p-2 border border-gray-300"
              style={{ fontSize: "14px" }}
            />
          ))
        )}
      </div>

      <div className='flex items-center'>
        <hr className='h-seperator-two' style={{ width: "100%", height: "2px" }} />
        <img src={add} alt="" className='cursor-pointer transition-transform transform hover:scale-105' style={{ margin: "10px", }} onClick={()=>{handleButtonClick()}} />
        <img src={addTime} alt="" className='cursor-pointer transition-transform transform hover:scale-105' style={{ margin: "10px", }} onClick={()=>handleButtonClickToRemoveTextarea()} />
        <hr className='h-seperator-two' style={{ width: "100%", height: "2px" }} />
      </div>

      <div className='flex flex-col gap-3'>
        <div>
          <button className='cursor-pointer transition-transform transform hover:scale-105 transparent-btn me-3'>Enter</button> <span>Add new script</span>
        </div>
        <div className='flex items-center'>
          <button className='cursor-pointer transition-transform transform hover:scale-105 transparent-btn me-3'>Shift + Enter</button> <span>Create newline within paragraph</span>
        </div>
      </div>

    </div>
  );
}

export default Script;