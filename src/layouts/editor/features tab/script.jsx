import { arrowDown } from 'assets/img/images';
import { add } from 'assets/img/images';
import { addTime } from 'assets/img/images';
import { arrowUp } from 'assets/img/images';
import { playBlackIcon } from 'assets/img/images'
import React, { useEffect, useRef, useState } from 'react'

const Script = ({ editorText, handleEditorChange }) => {

  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    console.log("firstfirstfirstfirstfirst")
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        console.log("Clicked outside");
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="text-left pe-3">
      <h6 className='colored-text font-semibold mb-3'>Choose an Avatar</h6>
      <hr className='h-seperator' />
      {/* Base */}

      <div className='flex items-center mt-3 px-4 mb-5'>
        <button className="bottom-border-btn inline-block " >
          Text
        </button>
        <button className="bottom-border-btn inline-block " >
          Audio
        </button>
      </div>

      <div>
        <h5 className='mb-2' style={{ fontSize: "14px", fontWeight: "500" }}>Select Voice</h5>
        <div class="custom-select" ref={dropdownRef} onClick={toggleDropdown}>
          <div class="arrow-down">
            <img src={playBlackIcon} alt="" width={16} height={16} />
          </div>
          <div class="select-box">
            <div class="file-info">
              <span class="file-name">New audio.mp3</span>
              <span class="file-duration">00:12</span>
            </div>
            <div class="arrow-down">
              <img src={isOpen ? arrowUp : arrowDown} alt="" width={16} height={16} />
            </div>
          </div>
          {isOpen && <div id="dropdown" class="dropdown-content">
            <div class="dropdown-item">
              <span class="file-name">New audio.mp3</span>
              <span class="file-duration">00:12</span>
            </div>
            <div class="dropdown-item">
              <span class="file-name">New audio1.mp3</span>
              <span class="file-duration">00:30</span>
            </div>
            <div class="dropdown-item">
              <span class="file-name">New audio2.mp3</span>
              <span class="file-duration">30:10</span>
            </div>
            <div class="dropdown-item">
              <span class="file-name">New audio3.mp3</span>
              <span class="file-duration">04:20</span>
            </div>
            <div class="dropdown-item">
              <span class="file-name">New audio1.mp3</span>
              <span class="file-duration">00:10</span>
            </div>
          </div>}
        </div>
      </div>
      <hr className='h-seperator' style={{ margin: "25px 0" }} />

      <div className="my-2">
        <textarea
          value={editorText}
          onChange={handleEditorChange}
          rows={4}
          placeholder="Write something..."
          className="script-textarea w-full p-2 border border-gray-300"
          style={{ fontSize: "14px" }}
        />
      </div>

      <div className='flex items-center'>
        <hr className='h-seperator' style={{ width: "100%", height: "2px" }} />
        <img src={add} alt="" className='cursor-pointer transition-transform transform hover:scale-105' style={{ margin: "10px", }} />
        <img src={addTime} alt="" className='cursor-pointer transition-transform transform hover:scale-105' style={{ margin: "10px", }} />
        <hr className='h-seperator' style={{ width: "100%", height: "2px" }} />
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
  )
}

export default Script