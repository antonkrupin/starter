import React from 'react';
import Schemafield from './schemafield';
import Schemaelement from './schemaelement';
import './list.css';

const Schema = () => {
  return (
    <>
      <div className="furniture">
        <Schemaelement quantity={2} />
        <Schemaelement quantity={4} />
        <Schemaelement quantity={5} />
      </div>
      <Schemafield />
    </>
  )
}

export default Schema;