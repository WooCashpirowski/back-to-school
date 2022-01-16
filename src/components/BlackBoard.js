import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  width: 47%;
  height: 600px;
  right: 0;
  bottom: 0;
  canvas {
    background: #000;
    cursor: url('/img/kredka.png'), auto;
  }
`;

const BlackBoard = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [drawing, setDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 0.47 * 2;
    canvas.height = 600 * 2;
    canvas.style.width = `${window.innerWidth * 0.47}px`;
    canvas.style.height = '600px';

    const ctx = canvas.getContext('2d');
    ctx.scale(2, 2);
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#f3e261';
    ctx.lineWidth = 5;
    ctxRef.current = ctx;
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(offsetX, offsetY);
    setDrawing(true);
  };
  const stopDrawing = () => {
    ctxRef.current.closePath();
    setDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!drawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    ctxRef.current.lineTo(offsetX, offsetY);
    ctxRef.current.stroke();
  };

  return (
    <Wrapper>
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      ></canvas>
    </Wrapper>
  );
};

export default BlackBoard;
