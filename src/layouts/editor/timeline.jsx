import React, { useState } from 'react';
import { Rnd } from 'react-rnd';

const Timeline = ({ clips, setClips }) => {


  const onResize = (e, direction, ref, delta, id) => {
    setClips(prevClips =>
      prevClips.map(clip =>
        clip.id === id
          ? { ...clip, duration: parseInt(ref.style.width, 10) }
          : clip
      )
    );
  };

  const onDragStop = (e, d, id) => {
    setClips(prevClips =>
      prevClips.map(clip =>
        clip.id === id ? { ...clip, startTime: d.x } : clip
      )
    );
  };

  return (
    <div className="timeline-container">
      {clips.map(clip => (
        <Rnd
          key={clip.id}
          size={{ width: clip.duration * 10, height: 50 }} // Scale factor for width
          position={{ x: clip.startTime * 10, y: 0 }}
          onDragStop={(e, d) => onDragStop(e, d, clip.id)}
          onResizeStop={(e, direction, ref, delta) => onResize(e, direction, ref, delta, clip.id)}
          minWidth={50} // Minimum width for the clips
          bounds="parent"
        >
          <div className="clip">
            <img src={`path/to/thumbnail`} alt={clip.title} style={{ width: '100%', height: '100%' }} />
          </div>
        </Rnd>
      ))}
    </div>
  );
};

export default Timeline;
