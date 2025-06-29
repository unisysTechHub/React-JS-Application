import React, { useRef, useEffect } from 'react';

export const ColoredBorderCircleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const containerHeight = canvas.clientHeight;
    const containerWidth = canvas.clientWidth;
    const borderSize = 20; // Border width in pixels
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;
    const radius = Math.min(centerX, centerY) - borderSize;

    const totalPerimeter = 2 * Math.PI * radius;
    const blackPercentage = 0.5; // 50% with black
    const blackPerimeter = totalPerimeter * blackPercentage;

    // Draw the black portion
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 180);
    context.lineWidth = borderSize;
    context.strokeStyle = '#000000'; // Black color
    context.stroke();

    // Draw the green portion
    context.beginPath();
    context.arc(centerX, centerY, radius, (-Math.PI / 2) + (2 * Math.PI * (blackPerimeter / totalPerimeter)), Math.PI * 1.5);
    context.lineWidth = borderSize;
    context.strokeStyle = '#00FF00'; // Green color
    context.stroke();
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '300px' }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} />
    </div>
  );
};

export const ArcCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const containerWidth = canvas.clientWidth;
    const containerHeight = canvas.clientHeight;
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;
    const radius = Math.min(centerX, centerY) - 20; // Subtracting 20 for padding

    // Draw the arc
    context.beginPath();
    context.arc(50, 50, 50, 0, 2 * Math.PI);
    // context.lineWidth = 2;
    // context.strokeStyle = '#000000'; // Stroke color
    context.stroke();
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '300px' }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} />
    </div>
  );
};

