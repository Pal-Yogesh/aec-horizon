"use client";

import { useEffect, useRef } from "react";

const HeroDot = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    // Initial setup for moving dots (they will move along grid lines)
    const movingDots = [
      {
        x: 221,
        y: 360,
        r: 9,
        direction: "horizontal",
        speed: 0.5,
        minX: 0,
        maxX: width,
        originalY: 360,
        movingRight: true,
      },
      {
        x: 1218,
        y: 105,
        r: 9,
        direction: "vertical",
        speed: 0.3,
        minY: 0,
        maxY: height,
        originalX: 1218,
        movingDown: true,
      },
      {
        x: 1106.5,
        y: 231.5,
        r: 4.5,
        direction: "horizontal",
        speed: 0.4,
        minX: 0,
        maxX: width,
        originalY: 231.5,
        movingRight: false,
      },
      {
        x: 111.5,
        y: 364.5,
        r: 4.5,
        direction: "vertical",
        speed: 0.6,
        minY: 0,
        maxY: height,
        originalX: 111.5,
        movingDown: false,
      },
      {
        x: 18.5,
        y: 103.5,
        r: 4.5,
        direction: "horizontal",
        speed: 0.45,
        minX: 0,
        maxX: width,
        originalY: 103.5,
        movingRight: true,
      },
      {
        x: 1103,
        y: 479,
        r: 9,
        direction: "vertical",
        speed: 0.35,
        minY: 0,
        maxY: height,
        originalX: 1103,
        movingDown: true,
      },
      {
        x: 661,
        y: 1001,
        r: 9,
        direction: "horizontal",
        speed: 0.5,
        minX: 0,
        maxX: width,
        originalY: 1001,
        movingRight: false,
      },
      {
        x: 1218,
        y: 873,
        r: 9,
        direction: "vertical",
        speed: 0.4,
        minY: 0,
        maxY: height,
        originalX: 1218,
        movingDown: false,
      },
      {
        x: 332,
        y: 1001,
        r: 9,
        direction: "horizontal",
        speed: 0.55,
        minX: 0,
        maxX: width,
        originalY: 1001,
        movingRight: true,
      },
      {
        x: 111,
        y: 873,
        r: 9,
        direction: "vertical",
        speed: 0.3,
        minY: 0,
        maxY: height,
        originalX: 111,
        movingDown: true,
      },
    ];

    // Enhanced setup for moving glass blocks with 3D effects and appearing/disappearing
    const movingBlocks = [
      {
        x: 333.5,
        y: 50,
        width: 109,
        height: 130,
        radius: 1,
        speed: 0.8,
        movingDown: true,
        opacity: 0.8,
        fadeDirection: -1, // -1 for fading out, 1 for fading in
        minOpacity: 0.2,
        maxOpacity: 0.9,
        fadeSpeed: 0.01,
        glassColor: 'rgba(255, 255, 255, 0.3)',
        borderColor: 'rgba(255, 255, 255, 0.6)',
      },
      {
        x: 996.5,
        y: 200,
        width: 109,
        height: 130,
        radius: 1,
        speed: 1.2,
        movingDown: false,
        opacity: 0.6,
        fadeDirection: 1,
        minOpacity: 0.2,
        maxOpacity: 0.9,
        fadeSpeed: 0.008,
        glassColor: 'rgba(255, 255, 255, 0.25)',
        borderColor: 'rgba(255, 255, 255, 0.5)',
      },
      {
        x: 332.5,
        y: 400,
        width: 109,
        height: 130,
        radius: 1,
        speed: 0.9,
        movingDown: true,
        opacity: 0.4,
        fadeDirection: -1,
        minOpacity: 0.1,
        maxOpacity: 0.8,
        fadeSpeed: 0.012,
        glassColor: 'rgba(255, 255, 255, 0.2)',
        borderColor: 'rgba(255, 255, 255, 0.4)',
      },
      {
        x: 2.5,
        y: 300,
        width: 109,
        height: 130,
        radius: 1,
        speed: 0.7,
        movingDown: false,
        opacity: 0.7,
        fadeDirection: 1,
        minOpacity: 0.3,
        maxOpacity: 0.9,
        fadeSpeed: 0.009,
        glassColor: 'rgba(255, 255, 255, 0.35)',
        borderColor: 'rgba(255, 255, 255, 0.7)',
      },
      {
        x: 443.5,
        y: 600,
        width: 109,
        height: 130,
        radius: 1,
        speed: 1.1,
        movingDown: true,
        opacity: 0.5,
        fadeDirection: -1,
        minOpacity: 0.15,
        maxOpacity: 0.85,
        fadeSpeed: 0.011,
        glassColor: 'rgba(255, 255, 255, 0.28)',
        borderColor: 'rgba(255, 255, 255, 0.55)',
      },
      {
        x: 111.5,
        y: 50,
        width: 109,
        height: 130,
        radius: 1,
        speed: 1.3,
        movingDown: true,
        opacity: 0.3,
        fadeDirection: 1,
        minOpacity: 0.1,
        maxOpacity: 0.8,
        fadeSpeed: 0.013,
        glassColor: 'rgba(255, 255, 255, 0.22)',
        borderColor: 'rgba(255, 255, 255, 0.45)',
      },
    ];

    const drawBackground = () => {
      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, "#BAC7FF");
      gradient.addColorStop(1, "#AEBDFF");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw grid lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
      ctx.lineWidth = 1;

      // Vertical lines
      const verticalLines = [
        0.5, 111.201, 221.9, 332.596, 443.297, 553.996, 664.691, 775.393,
        886.088, 996.787, 1107.49, 1218.18,
      ];
      verticalLines.forEach((x) => {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      });

      // Horizontal lines
      const horizontalLines = [104, 232, 360, 488, 616, 744, 872, 1000];
      horizontalLines.forEach((y) => {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      });
    };

    const drawGlassBlock = (block) => {
      const { x, y, width, height, radius, opacity } = block;
      
      ctx.save();

      // Draw shadow first (0px 4px 4px 0px #00000040)
      ctx.save();
      ctx.globalAlpha = opacity * 0.25; // 40% opacity from #00000040
      ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
      ctx.shadowBlur = 4;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 4;
      
      // Create shadow path
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.arcTo(x + width, y, x + width, y + radius, radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
      ctx.lineTo(x + radius, y + height);
      ctx.arcTo(x, y + height, x, y + height - radius, radius);
      ctx.lineTo(x, y + radius);
      ctx.arcTo(x, y, x + radius, y, radius);
      ctx.closePath();
      
      ctx.fillStyle = 'rgba(0, 0, 0, 0.01)';
      ctx.fill();
      ctx.restore();

      // Set opacity for the main block
      ctx.globalAlpha = opacity;

      // Create rounded rectangle path for the main block
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.arcTo(x + width, y, x + width, y + radius, radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
      ctx.lineTo(x + radius, y + height);
      ctx.arcTo(x, y + height, x, y + height - radius, radius);
      ctx.lineTo(x, y + radius);
      ctx.arcTo(x, y, x + radius, y, radius);
      ctx.closePath();

      // Fill with white color at 43% opacity (color FFFFFF 43%)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.43)';
      ctx.fill();

      // Draw 3px white border
      ctx.strokeStyle = 'rgba(255, 255, 255, 1)';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Simulate backdrop-filter blur effect with additional glass layers
      ctx.save();
      ctx.globalAlpha = opacity * 0.3;
      
      // Create a subtle inner glow to simulate the blur effect
      const blurGradient = ctx.createRadialGradient(
        x + width/2, 
        y + height/2, 
        0, 
        x + width/2, 
        y + height/2, 
        Math.max(width, height) * 0.7
      );
      blurGradient.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
      blurGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)');
      blurGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.fillStyle = blurGradient;
      ctx.fill();
      ctx.restore();

      // Add subtle inner highlight for more glass-like appearance
      ctx.save();
      ctx.globalAlpha = opacity * 0.4;
      const highlightGradient = ctx.createLinearGradient(x, y, x, y + height * 0.3);
      highlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
      highlightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.fillStyle = highlightGradient;
      ctx.fill();
      ctx.restore();

      ctx.restore();
    };

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Draw background and grid
      drawBackground();

      // Update and draw moving dots
      movingDots.forEach((dot) => {
        if (dot.direction === "horizontal") {
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
        } else if (dot.direction === "vertical") {
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
          dot.x,
          dot.y,
          0,
          dot.x,
          dot.y,
          dot.r * 1.5
        );
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.7, "rgba(255, 255, 255, 0.8)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Update and draw moving glass blocks with proper boundary detection and fade effects
      movingBlocks.forEach((block) => {
        // Update vertical position
        if (block.movingDown) {
          block.y += block.speed;
          if (block.y + block.height >= height) {
            block.movingDown = false;
            block.y = height - block.height;
          }
        } else {
          block.y -= block.speed;
          if (block.y <= 0) {
            block.movingDown = true;
            block.y = 0;
          }
        }

        // Update opacity for appearing/disappearing effect
        block.opacity += block.fadeDirection * block.fadeSpeed;
        
        if (block.opacity >= block.maxOpacity) {
          block.opacity = block.maxOpacity;
          block.fadeDirection = -1; // Start fading out
        } else if (block.opacity <= block.minOpacity) {
          block.opacity = block.minOpacity;
          block.fadeDirection = 1; // Start fading in
        }

        // Draw the glass block
        drawGlassBlock(block);
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="relative w-full h-auto overflow-hidden">
      <canvas
        ref={canvasRef}
        width={1280}
        height={1045}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default HeroDot;