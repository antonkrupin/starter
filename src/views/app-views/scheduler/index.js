import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Schema from './schema';

const Scheduler = () => {
  return (
    <>
      <h1>Планировщик расстановки</h1>
        <Schema />
    </>
  )
};

export default Scheduler;