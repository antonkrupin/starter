/* eslint-disable default-case */
import React, { useRef } from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

const Schemaelement = (props) => {
  const { quantity } = props;
  /* const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.TABLE,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`)
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))
  const opacity = isDragging ? 0.4 : 1; */
  switch(quantity) {
    case 2: {
      return (
        <img src="/img/furniture/2.jpg" alt="место для двоих"/>
      );
    }
    case 4: {
      return (
        <img src="/img/furniture/4_round.jpg" alt="стол круглый на 4-х"/>
      )
    }
    case 5: {
      return (
        <img src="/img/furniture/5.jpg" alt="столк круглый на 5-х"/>
      )
    }
  }
};

export default Schemaelement;