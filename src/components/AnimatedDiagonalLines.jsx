// import React, { useEffect, useState } from 'react';

// const AnimatedDiagonalLines = () => {
//   // Define the fixed positions for diagonal lines across the screen
//   const linePositions = [
//     { id: 'line-1', top: 5, left: -5, width: 180 },
//     { id: 'line-2', top: 15, left: -8, width: 220 },
//     { id: 'line-3', top: 25, left: -6, width: 200 },
//     { id: 'line-4', top: 40, left: -10, width: 250 },
//     { id: 'line-5', top: 55, left: -7, width: 190 },
//     { id: 'line-6', top: 70, left: -5, width: 210 },
//     { id: 'line-7', top: 85, left: -8, width: 230 },
//   ];

//   const [lines, setLines] = useState(
//     linePositions.map(line => ({
//       ...line,
//       opacity: Math.random() * 0.3 + 0.1, // Random starting opacity
//       fadeDirection: Math.random() > 0.5 ? 'in' : 'out', // Random fade direction
//       fadeSpeed: Math.random() * 0.002 + 0.001, // Random fade speed
//     }))
//   );

//   // Subtle fade in/out animation
//   useEffect(() => {
//     const animationFrame = requestAnimationFrame(function animate() {
//       setLines(prevLines => 
//         prevLines.map(line => {
//           let newOpacity = line.opacity;
//           let newDirection = line.fadeDirection;
          
//           // Handle fading in
//           if (line.fadeDirection === 'in') {
//             newOpacity += line.fadeSpeed;
//             if (newOpacity >= 0.45) {
//               newDirection = 'out';
//             }
//           }
//           // Handle fading out
//           else {
//             newOpacity -= line.fadeSpeed;
//             if (newOpacity <= 0.1) {
//               newDirection = 'in';
//             }
//           }
          
//           return {
//             ...line,
//             opacity: newOpacity,
//             fadeDirection: newDirection,
//           };
//         })
//       );
      
//       requestAnimationFrame(animate);
//     });
    
//     return () => cancelAnimationFrame(animationFrame);
//   }, []);

//   return (
//     <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
//       {lines.map(line => (
//         <div 
//           key={line.id}
//           className="absolute overflow-visible"
//           style={{
//             top: `${line.top}%`,
//             left: `${line.left}%`,
//             width: `${line.width}px`,
//             height: '1px',
//             borderRadius: '2px',
//             opacity: line.opacity,
//             background: 'linear-gradient(to right, gray 20%, #000000)',
//             transform: 'rotate(12deg)',
//             transformOrigin: 'left top',
//             transition: 'opacity 0.5s ease-in-out',
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default AnimatedDiagonalLines;
import React, { useEffect, useState } from 'react';

const AnimatedDiagonalLines = () => {
  const [lines, setLines] = useState([]);

  // Initialize lines
  useEffect(() => {
    // Create initial set of lines at different stages of animation
    const initialLines = Array.from({ length: 7 }, (_, index) => {
      // Calculate starting position (off-screen to the left and top)
      // Different progress values so they don't all start at the same position
      const progress = Math.random(); 
      
      return {
        id: `line-${index}`,
        progress, // Animation progress from 0 to 1
        width: 150 + Math.random() * 100, // Random width
        opacity: 0.2 + Math.random() * 0.3, // Random opacity
        speed: 0.0003 + Math.random() * 0.0002, // Very slow speed for diagonal movement
      };
    });
    
    setLines(initialLines);
  }, []);

  // Animate lines diagonally
  useEffect(() => {
    const animationFrame = requestAnimationFrame(function animate() {
      setLines(prevLines => 
        prevLines.map(line => {
          // Update progress, moving the line diagonally
          let newProgress = line.progress + line.speed;
          
          // Reset when line has moved fully across the screen
          if (newProgress > 1.2) {
            return {
              ...line,
              progress: -0.2, // Start again from off-screen
              opacity: 0.2 + Math.random() * 0.3, // New random opacity
              width: 150 + Math.random() * 100, // New random width
            };
          }
          
          return {
            ...line,
            progress: newProgress,
          };
        })
      );
      
      requestAnimationFrame(animate);
    });
    
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {lines.map(line => {
        // Calculate position based on progress
        // This moves the line from top-left to bottom-right
        const left = -10 + line.progress * 100; // Move from -10% to 90% horizontally
        const top = line.progress * 100; // Move from 0% to 100% vertically
        
        return (
          <div 
            key={line.id}
            className="absolute overflow-visible"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${line.width}px`,
              height: '1px',
              borderRadius: '2px',
              opacity: line.opacity,
              background: 'linear-gradient(to right, gray 20%, #000000)',
              transform: 'rotate(12deg)',
              transformOrigin: 'left top',
            }}
          />
        );
      })}
    </div>
  );
};

export default AnimatedDiagonalLines;