import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableImage = ({ id, src, x, y }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'image',
    item: { id, x, y },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <img
      ref={drag}
      src={src}
      alt=""
      style={{
        position: 'absolute',
        left: x,
        top: y,
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
    />
  );
};

export default DraggableImage;
