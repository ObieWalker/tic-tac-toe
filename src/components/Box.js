import React from 'react';

const Box = ({ onClick, box }) => {
  return (
    <div 
      onClick={onClick}
      className="box box-player1">{box}
    </div>
  );
}

export default Box;
