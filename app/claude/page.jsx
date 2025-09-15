// 'use client';

// import { useEffect, useRef } from 'react';

// const HeroSection = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     const width = canvas.width;
//     const height = canvas.height;

//     // Initial setup for moving dots (they will move along grid lines)
//     const movingDots = [
//       { 
//         x: 221, 
//         y: 360, 
//         r: 9, 
//         direction: 'horizontal', 
//         speed: 0.5, 
//         minX: 0, 
//         maxX: width, 
//         originalY: 360,
//         movingRight: true 
//       },
//       { 
//         x: 1218, 
//         y: 105, 
//         r: 9, 
//         direction: 'vertical', 
//         speed: 0.3, 
//         minY: 0, 
//         maxY: height, 
//         originalX: 1218,
//         movingDown: true 
//       },
//       { 
//         x: 1106.5, 
//         y: 231.5, 
//         r: 4.5, 
//         direction: 'horizontal', 
//         speed: 0.4, 
//         minX: 0, 
//         maxX: width, 
//         originalY: 231.5,
//         movingRight: false 
//       },
//       { 
//         x: 111.5, 
//         y: 364.5, 
//         r: 4.5, 
//         direction: 'vertical', 
//         speed: 0.6, 
//         minY: 0, 
//         maxY: height, 
//         originalX: 111.5,
//         movingDown: false 
//       },
//       { 
//         x: 18.5, 
//         y: 103.5, 
//         r: 4.5, 
//         direction: 'horizontal', 
//         speed: 0.45, 
//         minX: 0, 
//         maxX: width, 
//         originalY: 103.5,
//         movingRight: true 
//       },
//       { 
//         x: 1103, 
//         y: 479, 
//         r: 9, 
//         direction: 'vertical', 
//         speed: 0.35, 
//         minY: 0, 
//         maxY: height, 
//         originalX: 1103,
//         movingDown: true 
//       },
//       { 
//         x: 661, 
//         y: 1001, 
//         r: 9, 
//         direction: 'horizontal', 
//         speed: 0.5, 
//         minX: 0, 
//         maxX: width, 
//         originalY: 1001,
//         movingRight: false 
//       },
//       { 
//         x: 1218, 
//         y: 873, 
//         r: 9, 
//         direction: 'vertical', 
//         speed: 0.4, 
//         minY: 0, 
//         maxY: height, 
//         originalX: 1218,
//         movingDown: false 
//       },
//       { 
//         x: 332, 
//         y: 1001, 
//         r: 9, 
//         direction: 'horizontal', 
//         speed: 0.55, 
//         minX: 0, 
//         maxX: width, 
//         originalY: 1001,
//         movingRight: true 
//       },
//       { 
//         x: 111, 
//         y: 873, 
//         r: 9, 
//         direction: 'vertical', 
//         speed: 0.3, 
//         minY: 0, 
//         maxY: height, 
//         originalX: 111,
//         movingDown: true 
//       }
//     ];

//     // Setup for moving blocks (they will move vertically from top to bottom)
//     const movingBlocks = [
//       { 
//         x: 333.5, 
//         y: 5.5, 
//         width: 109, 
//         height: 147, 
//         radius: 13.5, 
//         colors: ['#FF9618', '#FFBB6800'], 
//         opacity: 0.4,
//         speed: 0.2,
//         originalX: 333.5,
//         movingDown: true,
//         minY: -147,
//         maxY: height
//       },
//       { 
//         x: 996.5, 
//         y: 104.5, 
//         width: 109, 
//         height: 97, 
//         radius: 13.5, 
//         colors: ['#704EEC', '#A28FE700'], 
//         opacity: 0.5,
//         speed: 0.25,
//         originalX: 996.5,
//         movingDown: false,
//         minY: -97,
//         maxY: height
//       },
//       { 
//         x: 332.5, 
//         y: 606.5, 
//         width: 94, 
//         height: 77, 
//         radius: 13.5, 
//         colors: ['#6989FF', '#B1C2FF00'], 
//         opacity: 1,
//         speed: 0.3,
//         originalX: 332.5,
//         movingDown: true,
//         minY: -77,
//         maxY: height
//       },
//       { 
//         x: 2.5, 
//         y: 232.5, 
//         width: 108, 
//         height: 127, 
//         radius: 13.5, 
//         colors: ['#6989FF', '#B1C2FF00'], 
//         opacity: 1,
//         speed: 0.15,
//         originalX: 2.5,
//         movingDown: false,
//         minY: -127,
//         maxY: height
//       },
//       { 
//         x: 443.5, 
//         y: 918.5, 
//         width: 109, 
//         height: 147, 
//         radius: 13.5, 
//         colors: ['#FF9618', '#FFBB6800'], 
//         opacity: 0.4,
//         speed: 0.35,
//         originalX: 443.5,
//         movingDown: true,
//         minY: -147,
//         maxY: height
//       }
//     ];

//     const drawBackground = () => {
//       // Draw background gradient
//       const gradient = ctx.createLinearGradient(0, 0, 0, height);
//       gradient.addColorStop(0, '#D8DDED');
//       gradient.addColorStop(1, '#E1E8FF');
//       ctx.fillStyle = gradient;
//       ctx.fillRect(0, 0, width, height);

//       // Draw grid lines
//       ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
//       ctx.lineWidth = 1;

//       // Vertical lines
//       const verticalLines = [0.5, 111.201, 221.9, 332.596, 443.297, 553.996, 664.691, 775.393, 886.088, 996.787, 1107.49, 1218.18];
//       verticalLines.forEach(x => {
//         ctx.beginPath();
//         ctx.moveTo(x, 0);
//         ctx.lineTo(x, height);
//         ctx.stroke();
//       });

//       // Horizontal lines
//       const horizontalLines = [104, 232, 360, 488, 616, 744, 872, 1000];
//       horizontalLines.forEach(y => {
//         ctx.beginPath();
//         ctx.moveTo(0, y);
//         ctx.lineTo(width, y);
//         ctx.stroke();
//       });
//     };

//     const drawBlock = (x, y, width, height, borderRadius, colors, opacity = 1) => {
//       ctx.save();
//       ctx.globalAlpha = opacity;
      
//       // Draw rounded rectangle
//       ctx.beginPath();
//       ctx.moveTo(x + borderRadius, y);
//       ctx.lineTo(x + width - borderRadius, y);
//       ctx.arcTo(x + width, y, x + width, y + borderRadius, borderRadius);
//       ctx.lineTo(x + width, y + height - borderRadius);
//       ctx.arcTo(x + width, y + height, x + width - borderRadius, y + height, borderRadius);
//       ctx.lineTo(x + borderRadius, y + height);
//       ctx.arcTo(x, y + height, x, y + height - borderRadius, borderRadius);
//       ctx.lineTo(x, y + borderRadius);
//       ctx.arcTo(x, y, x + borderRadius, y, borderRadius);
//       ctx.closePath();
      
//       // Create gradient
//       const gradient = ctx.createLinearGradient(x, y, x, y + height);
//       colors.forEach((color, index) => {
//         gradient.addColorStop(index / (colors.length - 1), color);
//       });
      
//       ctx.fillStyle = gradient;
//       ctx.fill();
      
//       ctx.restore();
//     };

//     const animate = () => {
//       // Clear canvas
//       ctx.clearRect(0, 0, width, height);
      
//       // Draw background and grid
//       drawBackground();
      
//       // Update and draw moving dots
//       movingDots.forEach(dot => {
//         if (dot.direction === 'horizontal') {
//           if (dot.movingRight) {
//             dot.x += dot.speed;
//             if (dot.x >= dot.maxX) {
//               dot.movingRight = false;
//             }
//           } else {
//             dot.x -= dot.speed;
//             if (dot.x <= dot.minX) {
//               dot.movingRight = true;
//             }
//           }
//         } else if (dot.direction === 'vertical') {
//           if (dot.movingDown) {
//             dot.y += dot.speed;
//             if (dot.y >= dot.maxY) {
//               dot.movingDown = false;
//             }
//           } else {
//             dot.y -= dot.speed;
//             if (dot.y <= dot.minY) {
//               dot.movingDown = true;
//             }
//           }
//         }
        
//         // Draw dot with glow effect
//         const gradient = ctx.createRadialGradient(
//           dot.x, dot.y, 0,
//           dot.x, dot.y, dot.r * 1.5
//         );
//         gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
//         gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.8)');
//         gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
//         ctx.beginPath();
//         ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
//         ctx.fillStyle = gradient;
//         ctx.fill();
//       });
      
//       // Update and draw moving blocks
//       movingBlocks.forEach(block => {
//         if (block.movingDown) {
//           block.y += block.speed;
//           if (block.y >= block.maxY) {
//             block.y = block.minY;
//           }
//         } else {
//           block.y -= block.speed;
//           if (block.y <= block.minY) {
//             block.y = block.maxY;
//           }
//         }
        
//         drawBlock(block.x, block.y, block.width, block.height, block.radius, block.colors, block.opacity);
//       });
      
//       requestAnimationFrame(animate);
//     };
    
//     animate();
//   }, []);

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       <canvas
//         ref={canvasRef}
//         width={1280}
//         height={1045}
//         className="w-full h-full object-cover"
//       />
//     </div>
//   );
// };

// export default HeroSection;




'use client';

import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Initial setup for moving dots (they will move along grid lines)
    const movingDots = [
      { 
        x: 221, 
        y: 360, 
        r: 9, 
        direction: 'horizontal', 
        speed: 0.5, 
        minX: 0, 
        maxX: width, 
        originalY: 360,
        movingRight: true 
      },
      { 
        x: 1218, 
        y: 105, 
        r: 9, 
        direction: 'vertical', 
        speed: 0.3, 
        minY: 0, 
        maxY: height, 
        originalX: 1218,
        movingDown: true 
      },
      { 
        x: 1106.5, 
        y: 231.5, 
        r: 4.5, 
        direction: 'horizontal', 
        speed: 0.4, 
        minX: 0, 
        maxX: width, 
        originalY: 231.5,
        movingRight: false 
      },
      { 
        x: 111.5, 
        y: 364.5, 
        r: 4.5, 
        direction: 'vertical', 
        speed: 0.6, 
        minY: 0, 
        maxY: height, 
        originalX: 111.5,
        movingDown: false 
      },
      { 
        x: 18.5, 
        y: 103.5, 
        r: 4.5, 
        direction: 'horizontal', 
        speed: 0.45, 
        minX: 0, 
        maxX: width, 
        originalY: 103.5,
        movingRight: true 
      },
      { 
        x: 1103, 
        y: 479, 
        r: 9, 
        direction: 'vertical', 
        speed: 0.35, 
        minY: 0, 
        maxY: height, 
        originalX: 1103,
        movingDown: true 
      },
      { 
        x: 661, 
        y: 1001, 
        r: 9, 
        direction: 'horizontal', 
        speed: 0.5, 
        minX: 0, 
        maxX: width, 
        originalY: 1001,
        movingRight: false 
      },
      { 
        x: 1218, 
        y: 873, 
        r: 9, 
        direction: 'vertical', 
        speed: 0.4, 
        minY: 0, 
        maxY: height, 
        originalX: 1218,
        movingDown: false 
      },
      { 
        x: 332, 
        y: 1001, 
        r: 9, 
        direction: 'horizontal', 
        speed: 0.55, 
        minX: 0, 
        maxX: width, 
        originalY: 1001,
        movingRight: true 
      },
      { 
        x: 111, 
        y: 873, 
        r: 9, 
        direction: 'vertical', 
        speed: 0.3, 
        minY: 0, 
        maxY: height, 
        originalX: 111,
        movingDown: true 
      }
    ];

    // Enhanced setup for moving blocks with proper boundary detection
    const movingBlocks = [
      { 
        x: 333.5, 
        y: 50, 
        width: 109, 
        height: 147, 
        radius: 13.5, 
        colors: ['#FF9618', '#FFBB6800'], 
        opacity: 0.4,
        speed: 0.8,
        movingDown: true
      },
      { 
        x: 996.5, 
        y: 200, 
        width: 109, 
        height: 97, 
        radius: 13.5, 
        colors: ['#704EEC', '#A28FE700'], 
        opacity: 0.5,
        speed: 1.2,
        movingDown: false
      },
      { 
        x: 332.5, 
        y: 400, 
        width: 94, 
        height: 77, 
        radius: 13.5, 
        colors: ['#6989FF', '#B1C2FF00'], 
        opacity: 1,
        speed: 0.9,
        movingDown: true
      },
      { 
        x: 2.5, 
        y: 300, 
        width: 108, 
        height: 127, 
        radius: 13.5, 
        colors: ['#6989FF', '#B1C2FF00'], 
        opacity: 1,
        speed: 0.7,
        movingDown: false
      },
      { 
        x: 443.5, 
        y: 600, 
        width: 109, 
        height: 147, 
        radius: 13.5, 
        colors: ['#FF9618', '#FFBB6800'], 
        opacity: 0.4,
        speed: 1.1,
        movingDown: true
      },
      // Additional moving blocks
     
      
      
     
      { 
        x: 111.5, 
        y: 50, 
        width: 102, 
        height: 115, 
        radius: 13.5, 
        colors: ['#B4A7D6', '#D4C5F900'], 
        opacity: 0.6,
        speed: 1.3,
        movingDown: true
      },
     
    ];

    const drawBackground = () => {
      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, '#D8DDED');
      gradient.addColorStop(1, '#E1E8FF');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 1;

      // Vertical lines
      const verticalLines = [0.5, 111.201, 221.9, 332.596, 443.297, 553.996, 664.691, 775.393, 886.088, 996.787, 1107.49, 1218.18];
      verticalLines.forEach(x => {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      });

      // Horizontal lines
      const horizontalLines = [104, 232, 360, 488, 616, 744, 872, 1000];
      horizontalLines.forEach(y => {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      });
    };

    const drawBlock = (x, y, width, height, borderRadius, colors, opacity = 1) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      
      // Draw rounded rectangle
      ctx.beginPath();
      ctx.moveTo(x + borderRadius, y);
      ctx.lineTo(x + width - borderRadius, y);
      ctx.arcTo(x + width, y, x + width, y + borderRadius, borderRadius);
      ctx.lineTo(x + width, y + height - borderRadius);
      ctx.arcTo(x + width, y + height, x + width - borderRadius, y + height, borderRadius);
      ctx.lineTo(x + borderRadius, y + height);
      ctx.arcTo(x, y + height, x, y + height - borderRadius, borderRadius);
      ctx.lineTo(x, y + borderRadius);
      ctx.arcTo(x, y, x + borderRadius, y, borderRadius);
      ctx.closePath();
      
      // Create gradient
      const gradient = ctx.createLinearGradient(x, y, x, y + height);
      colors.forEach((color, index) => {
        gradient.addColorStop(index / (colors.length - 1), color);
      });
      
      ctx.fillStyle = gradient;
      ctx.fill();
      
      ctx.restore();
    };

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Draw background and grid
      drawBackground();
      
      // Update and draw moving dots
      movingDots.forEach(dot => {
        if (dot.direction === 'horizontal') {
          if (dot.movingRight) {
            dot.x += dot.speed;
            if (dot.x >= dot.maxX) {
              dot.movingRight = false;
            }
          } else {
            dot.x -= dot.speed;
            if (dot.x <= dot.minX) {
              dot.movingRight = true;
            }
          }
        } else if (dot.direction === 'vertical') {
          if (dot.movingDown) {
            dot.y += dot.speed;
            if (dot.y >= dot.maxY) {
              dot.movingDown = false;
            }
          } else {
            dot.y -= dot.speed;
            if (dot.y <= dot.minY) {
              dot.movingDown = true;
            }
          }
        }
        
        // Draw dot with glow effect
        const gradient = ctx.createRadialGradient(
          dot.x, dot.y, 0,
          dot.x, dot.y, dot.r * 1.5
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });
      
      // Update and draw moving blocks with proper boundary detection
      movingBlocks.forEach(block => {
        if (block.movingDown) {
          block.y += block.speed;
          // Check if block has reached the bottom boundary
          if (block.y + block.height >= height) {
            block.movingDown = false;
            block.y = height - block.height; // Prevent crossing boundary
          }
        } else {
          block.y -= block.speed;
          // Check if block has reached the top boundary
          if (block.y <= 0) {
            block.movingDown = true;
            block.y = 0; // Prevent crossing boundary
          }
        }
        
        drawBlock(block.x, block.y, block.width, block.height, block.radius, block.colors, block.opacity);
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        width={1280}
        height={1045}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default HeroSection;