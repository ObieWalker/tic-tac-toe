import React from 'react';

const Box = ({ onClick, box }) => {
  return (
    <div 
      onClick={onClick} className="box">{box}
    </div>
  );
}

export default Box;
