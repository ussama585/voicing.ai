import DraggableImage from 'components/DraggableImage'
import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const DragDrop = ({canvasRef, drop, imagePosition}) => {
  return (
    <DndProvider debugMode={true} backend={HTML5Backend}>
      <div style={{ position: 'relative' }}>
        <canvas id='canvas' ref={canvasRef} width="400" height="200" style={{ width: "100%" }} />
        <div
          ref={drop}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
          }}
        >
          <DraggableImage
            id="draggableImage"
            src="path/to/your/image.png"
            x={imagePosition.x}
            y={imagePosition.y}
          />
        </div>
      </div>
    </DndProvider>
  )
}

export default DragDrop