import React, { useEffect, useRef } from 'react';

const AlphabetWave = ({ x, y, width, height, marginTop = 0, marginRight = 0, paddingTop = 0 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const rows = Math.floor(canvas.height / fontSize);

    const chars = Array(rows).fill(null).map(() => 
      Array(columns).fill('').map(() => alphabet[Math.floor(Math.random() * alphabet.length)])
    );

    let time = 0;
    const wave = (x, y) => {
      return Math.sin(x * 0.05 + time) * 15 + Math.cos(y * 0.05 + time) * 15;
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 11, 30, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
          const char = chars[y][x];
          const posX = x * fontSize;
          const posY = y * fontSize + wave(x, y);

          const hue = (210 + wave(x, y)) % 360;
          ctx.fillStyle = `hsl(${hue}, 100%, ${50 + wave(x, y)}%)`;
          ctx.font = `bold ${fontSize}px monospace`;
          ctx.fillText(char, posX, posY);

          if (Math.random() < 0.001) {
            chars[y][x] = alphabet[Math.floor(Math.random() * alphabet.length)];
          }
        }
      }

      time += 0.05;
    };

    const animate = () => {
      draw();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      // Cleanup if needed
    };
  }, [width, height]);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        width: `${width}px`,
        height: `${height}px`,
        marginTop: marginTop,
        marginRight: marginRight,
      }}
    />
  );
};

export default AlphabetWave;
