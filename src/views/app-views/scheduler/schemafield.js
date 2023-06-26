import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

const Schemafield = () => {
  /*const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => ({ name: 'Dustbin' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))
  const isActive = canDrop && isOver
  let backgroundColor = '#222'
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  } */
  return (
    <div className="furniture_schema">
      <h4>tessdfsdftet</h4>
    </div>
  )
};

export default Schemafield;