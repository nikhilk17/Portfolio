// // import React from 'react';
// // import { useState, useEffect, useCallback } from 'react';

// // // LED Matrix Animation Component
// // const LEDMatrix = () => {
// //   const width = window.innerWidth > 1200 ? 1184 : window.innerWidth - 40;
// //   const height = 170;
// //   const matrixSize = 4; // Size of each LED
// //   const gap = 2; // Gap between LEDs
  
// //   // Calculate number of columns and rows based on width and height
// //   const columns = Math.floor(width / (matrixSize + gap));
// //   const rows = Math.floor(height / (matrixSize + gap));
  
// //   const [matrix, setMatrix] = useState([]);
// //   const [dimensions, setDimensions] = useState({ width, height });
  
// //   // Handle window resize
// //   useEffect(() => {
// //     const handleResize = () => {
// //       const newWidth = window.innerWidth > 1200 ? 1184 : window.innerWidth - 40;
// //       setDimensions({ 
// //         width: newWidth, 
// //         height: 170 
// //       });
// //     };
    
// //     window.addEventListener('resize', handleResize);
// //     return () => window.removeEventListener('resize', handleResize);
// //   }, []);
  
// //   // Initialize matrix
// //   useEffect(() => {
// //     const newMatrix = [];
// //     for (let i = 0; i < rows; i++) {
// //       const row = [];
// //       for (let j = 0; j < columns; j++) {
// //         row.push({
// //           id: `${i}-${j}`,
// //           glowing: false,
// //           intensity: 0,
// //         });
// //       }
// //       newMatrix.push(row);
// //     }
// //     setMatrix(newMatrix);
// //   }, [rows, columns, dimensions]);
  
// //   // Update random cells
// //   const updateRandomCells = useCallback(() => {
// //     setMatrix((prevMatrix) => {
// //       const newMatrix = JSON.parse(JSON.stringify(prevMatrix));
// //       // Fade existing glowing cells
// //       newMatrix.forEach((row) => {
// //         row.forEach((cell) => {
// //           if (cell.glowing) {
// //             cell.intensity -= 0.1;
// //             if (cell.intensity <= 0) {
// //               cell.glowing = false;
// //               cell.intensity = 0;
// //             }
// //           }
// //         });
// //       });
      
// //       // Add new glowing cells (accent amount: 5)
// //       const numNewCells = 5;
// //       for (let i = 0; i < numNewCells; i++) {
// //         const row = Math.floor(Math.random() * rows);
// //         const col = Math.floor(Math.random() * columns);
// //         if (newMatrix[row] && newMatrix[row][col]) {
// //           newMatrix[row][col].glowing = true;
// //           newMatrix[row][col].intensity = 1.0;
// //         }
// //       }
// //       return newMatrix;
// //     });
// //   }, [rows, columns]);
  
// //   // Animation loop
// //   useEffect(() => {
// //     if (matrix.length === 0) return;
// //     // Speed: 100ms intervals
// //     const interval = setInterval(updateRandomCells, 100);
// //     return () => clearInterval(interval);
// //   }, [matrix, updateRandomCells]);
  
// //   return (
// //     <div className="absolute bottom-0 left-0 w-full">
// //       <div
// //         className="relative"
// //         style={{
// //           width: `${dimensions.width}px`,
// //           height: `${dimensions.height}px`,
// //           margin: '0 auto'
// //         }}
// //       >
// //         <div
// //           className="grid"
// //           style={{
// //             gridTemplateColumns: `repeat(${columns}, ${matrixSize}px)`,
// //             gap: `${gap}px`,
// //             width: '100%',
// //             height: '100%',
// //           }}
// //         >
// //           {matrix.flat().map((cell) => (
// //             <div
// //               key={cell.id}
// //               className="transition-all duration-200 ease-in-out"
// //               style={{
// //                 width: `${matrixSize}px`,
// //                 height: `${matrixSize}px`,
// //                 backgroundColor: cell.glowing ? `#FE4C22` : "#F5F5F5",
// //                 opacity: cell.glowing ? cell.intensity : 0.2,
// //               }}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const Home = () => {
// //   const [isHovered, setIsHovered] = useState(false);
  
// //   return (
// //     <div className="min-h-screen bg-white font-serif relative overflow-hidden">
// //       {/* No static dot pattern or decorative lines anymore */}
// //       {/* Header */}
// //       <header className="relative z-10 py-6 px-4 md:px-8 flex justify-between items-center">
// //         <div className="flex items-center space-x-3">
// //           <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 border border-gray-200 flex items-center justify-center">
// //             <div className="w-10 h-10 rounded-full bg-gray-200"></div>
// //           </div>
// //           <span className="text-gray-800">Tallinn, Estonia 🇪🇪</span>
// //         </div>
        
// //         <nav className="hidden md:flex items-center space-x-6">
// //           <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Resume</a>
// //           <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">LinkedIn</a>
// //           <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Template Store</a>
// //           <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
// //             Email me
// //           </button>
// //         </nav>
        
// //         <button className="md:hidden text-gray-800">
// //           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
// //           </svg>
// //         </button>
// //       </header>
      
// //       {/* Main Content */}
// //       <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-12 md:py-24">
// //         <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight max-w-5xl">
// //           Hello, I'm Yohji. Delighted to have you explore my portfolio. I craft standout designs for <span className="text-gray-500">early-stage ventures.</span>
// //         </h1>
        
// //         <div className="mt-16">
// //           <button 
// //             className="relative bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
// //             onMouseEnter={() => setIsHovered(true)}
// //             onMouseLeave={() => setIsHovered(false)}
// //           >
// //             Book a short call
// //             <div className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-4/5 h-8 bg-orange-300 opacity-30 blur-md rounded-full transition-opacity ${isHovered ? 'opacity-50' : 'opacity-30'}`}></div>
// //           </button>
// //         </div>
        
// //         <div className="mt-20 md:mt-32">
// //           <p className="text-gray-600 mb-8">Trusted by the best</p>
// //           <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
// //             <div className="flex items-center text-gray-500 font-medium">
// //               <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg">
// //                 <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
// //               </svg>
// //               Sisyphus
// //             </div>
// //             <div className="flex items-center text-gray-500 font-medium">
// //               <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg">
// //                 <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
// //               </svg>
// //               Constellation
// //             </div>
// //             <div className="flex items-center text-gray-500 font-medium">
// //               <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg">
// //                 <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" fill="currentColor" />
// //               </svg>
// //               Euphoria
// //             </div>
// //             <div className="flex items-center text-gray-500 font-medium">
// //               <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg">
// //                 <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16zm0-11.47L17.74 9 12 13.47 6.26 9 12 4.53z" fill="currentColor" />
// //               </svg>
// //               Layers
// //             </div>
// //           </div>
// //         </div>
// //       </main>
      
// //       {/* LED Matrix Animation */}
// //       <LEDMatrix />
// //     </div>
// //   );
// // };

// // export default Home;


// import React from 'react';
// import { useState, useEffect, useCallback } from 'react';

// // LED Matrix Animation Component
// const LEDMatrix = () => {
//   const width = window.innerWidth;
//   // Increased visibility by placing it higher in the viewport
//   const height = 200; 
//   const matrixSize = 5; // Small dot size
//   const gap = 2; // Sparse spacing
  
//   // Calculate number of columns and rows based on width and height
//   const columns = Math.floor(width / (matrixSize + gap));
//   const rows = Math.floor(height / (matrixSize + gap));
  
//   const [matrix, setMatrix] = useState([]);
//   const [dimensions, setDimensions] = useState({ width, height });
  
//   // Handle window resize
//   useEffect(() => {
//     const handleResize = () => {
//       const newWidth = window.innerWidth;
//       setDimensions({ 
//         width: newWidth, 
//         height: 220 
//       });
//     };
    
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);
  
//   // Initialize matrix with some cells already glowing
//   useEffect(() => {
//     const newMatrix = [];
//     for (let i = 0; i < rows; i++) {
//       const row = [];
//       for (let j = 0; j < columns; j++) {
//         // Initialize with about 1% of cells already glowing
//         const randomStart = Math.random() < 0.01;
//         row.push({
//           id: `${i}-${j}`,
//           glowing: randomStart,
//           intensity: randomStart ? Math.random() : 0,
//         });
//       }
//       newMatrix.push(row);
//     }
//     setMatrix(newMatrix);
//   }, [rows, columns, dimensions]);
  
//   // Update random cells - following the provided animation logic
//   const updateRandomCells = useCallback(() => {
//     setMatrix((prevMatrix) => {
//       const newMatrix = JSON.parse(JSON.stringify(prevMatrix));
      
//       // Fade existing glowing cells
//       newMatrix.forEach((row) => {
//         row.forEach((cell) => {
//           if (cell.glowing) {
//             cell.intensity -= 0.1;
//             if (cell.intensity <= 0) {
//               cell.glowing = false;
//               cell.intensity = 0;
//             }
//           }
//         });
//       });
      
//       // Add more new glowing cells to increase visibility
//       const numNewCells = 10; // Increased for more visible effect
//       for (let i = 0; i < numNewCells; i++) {
//         const row = Math.floor(Math.random() * rows);
//         const col = Math.floor(Math.random() * columns);
        
//         if (newMatrix[row] && newMatrix[row][col]) {
//           newMatrix[row][col].glowing = true;
//           newMatrix[row][col].intensity = 1.0;
//         }
//       }
      
//       return newMatrix;
//     });
//   }, [rows, columns]);
  
//   // Animation loop
//   useEffect(() => {
//     if (matrix.length === 0) return;
//     const interval = setInterval(updateRandomCells, 100);
//     return () => clearInterval(interval);
//   }, [matrix, updateRandomCells]);
  
//   return (
//     <div className="fixed bottom-0 left-0 w-full z-0">
//       <div
//         className="relative"
//         style={{
//           width: '100%',
//           height: `${dimensions.height}px`,
//           margin: '0 auto',
//         }}
//       >
//         <div
//           className="grid absolute bottom-0 left-0 w-full"
//           style={{
//             gridTemplateColumns: `repeat(${columns}, ${matrixSize}px)`,
//             gap: `${gap}px`,
//             width: '100%',
//             height: '100%',
//           }}
//         >
//           {matrix.flat().map((cell) => (
//             <div
//               key={cell.id}
//               className="transition-all duration-200 bg-[#cfcece] ease-in-out"
//               style={{
//                 width: `${matrixSize}px`,
//                 height: `${matrixSize}px`,
//                 backgroundColor: cell.glowing ? `#FE4C22` : "#cfcece",
//                 opacity: cell.glowing ? cell.intensity : 0.1, // Slightly increased opacity for visibility
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Home = () => {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [isHovered, setIsHovered] = useState(false);
  
//   // Update time every second
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);
    
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);
  
//   // Format time as HH:MM AM/PM
//   const formattedTime = currentTime.toLocaleTimeString([], {
//     hour: '2-digit',
//     minute: '2-digit',
//     hour12: true
//   });
//   return (
//     <div className="h-screen bg-white font-serif relative overflow-hidden flex flex-col">
//       {/* Header */}
//       <header className="relative z-10 py-4 px-4 md:px-8 flex justify-between items-center">
//        <div className="flex justify-center">
//       <div 
//         className="relative w-52 h-10 rounded-lg bg-gray-100 shadow-sm cursor-pointer transition-all duration-300"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         {/* Location display (shown by default) */}
//         <div 
//           className={`absolute inset-0 flex items-center px-4 transition-opacity duration-600 ${
//             isHovered ? 'opacity-0' : 'opacity-100'
//           }`}
//         >
//           <div className="w-10 h-10 overflow-hidden bg-gray-300 mr-3 flex-shrink-0">
//             <img
//               src="/api/placeholder/40/40"
//               alt="Profile"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <span className="text-gray-800 text-sm font-medium">Hyd, Telangana 🇮🇳</span>
//         </div>
        
//         {/* Time overlay (shown on hover) */}
//         <div 
//           className={`absolute inset-0 scale-105 flex items-center justify-center bg-black text-white rounded-lg transition-opacity duration-300 ${
//             isHovered ? 'opacity-100' : 'opacity-0'
//           }`}
//         >
//           <span className="font-medium text-sm">{formattedTime}</span>
//         </div>
//       </div>
//     </div>
        
//         <nav className="hidden md:flex items-center space-x-6">
//           <div className='items-center space-x-6 border-2 border-gray-300 rounded-xl px-4 py-2'>
//           <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Resume</a>
//           <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">LinkedIn</a>
//           <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Template Store</a>
//           </div>
//           <button className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition-colors">
//             Email me
//           </button>
//         </nav>
        
//         <button className="md:hidden text-gray-800">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//           </svg>
//         </button>
//       </header>
      
//       {/* Main Content - Using flex-grow to take available space */}
//       <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-12 md:py-16 flex-grow">
//         <h1 className="text-4xl md:text-4xl lg:text-6xl font-light text-gray-900 leading-tight max-w-5xl">
//           Hello, I'm Yohji. Delighted to have you explore my portfolio. I craft standout designs for <span className="text-gray-300">early-stage ventures.</span>
//         </h1>
        
//         <div className="mt-16">
//           <button 
//             className="relative bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
//           >
//             Book a short call
//             <div className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-4/5 h-8 bg-orange-300 opacity-30 blur-md rounded-full transition-opacity ${isHovered ? 'opacity-50' : 'opacity-30'}`}></div>
//           </button>
//         </div>
        
//       </main>
      
      
//       {/* Removed LED Matrix from the bottom since it's now at the top level */}
//       <div>
//       <LEDMatrix/>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useState, useEffect, useCallback } from 'react';
import AnimatedDiagonalLines from './AnimatedDiagonalLines';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// LED Matrix Animation Component
const LEDMatrix = () => {
  // Your existing LED Matrix code here
  // ... (keeping all the original implementation)
  
  const width = window.innerWidth;
  const height = 200; 
  const matrixSize = 5;
  const gap = 2;
  
  const columns = Math.floor(width / (matrixSize + gap));
  const rows = Math.floor(height / (matrixSize + gap));
  
  const [matrix, setMatrix] = useState([]);
  const [dimensions, setDimensions] = useState({ width, height });
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      
      setDimensions({ 
        width: newWidth, 
        height: 200 
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Initialize matrix with some cells already glowing
  useEffect(() => {
    const newMatrix = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        const randomStart = Math.random() < 0.01;
        row.push({
          id: `${i}-${j}`,
          glowing: randomStart,
          intensity: randomStart ? Math.random() : 0,
        });
      }
      newMatrix.push(row);
    }
    setMatrix(newMatrix);
  }, [rows, columns, dimensions]);
  
  // Update random cells
  const updateRandomCells = useCallback(() => {
    setMatrix((prevMatrix) => {
      const newMatrix = JSON.parse(JSON.stringify(prevMatrix));
      
      // Fade existing glowing cells
      newMatrix.forEach((row) => {
        row.forEach((cell) => {
          if (cell.glowing) {
            cell.intensity -= 0.1;
            if (cell.intensity <= 0) {
              cell.glowing = false;
              cell.intensity = 0;
            }
          }
        });
      });
      
      // Add more new glowing cells to increase visibility
      const numNewCells = 10;
      for (let i = 0; i < numNewCells; i++) {
        const row = Math.floor(Math.random() * rows);
        const col = Math.floor(Math.random() * columns);
        
        if (newMatrix[row] && newMatrix[row][col]) {
          newMatrix[row][col].glowing = true;
          newMatrix[row][col].intensity = 1.0;
        }
      }
      
      return newMatrix;
    });
  }, [rows, columns]);
  
  // Animation loop
  useEffect(() => {
    if (matrix.length === 0) return;
    const interval = setInterval(updateRandomCells, 100);
    return () => clearInterval(interval);
  }, [matrix, updateRandomCells]);
  
  return (
    <div className="w-full z-0">
      <div
        className="relative"
        style={{
          width: '100%',
          height: `${dimensions.height}px`,
          margin: '0 auto',
        }}
      >
        <div
          className="grid absolute bottom-0 left-0 w-full"
          style={{
            gridTemplateColumns: `repeat(${columns}, ${matrixSize}px)`,
            gap: `${gap}px`,
            width: '100%',
            height: '100%',
          }}
        >
          {matrix.flat().map((cell) => (
            <div
              key={cell.id}
              className="transition-all duration-200 bg-[#cfcece] ease-in-out"
              style={{
                width: `${matrixSize}px`,
                height: `${matrixSize}px`,
                backgroundColor: cell.glowing ? `#FE4C22` : "#cfcece",
                opacity: cell.glowing ? cell.intensity : 0.1,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [counter, setCounter] = useState(0);
  const [showLoader, setShowLoader] = useState(() => {
    return sessionStorage.getItem("loaderShown") !== "true";
  });

  const startLoader = () => {
    const updateCounter = () => {
      setCounter((prev) => {
        const next = prev + Math.floor(Math.random() * 10) + 1;
        if (next >= 100) return 100;
        setTimeout(updateCounter, Math.floor(Math.random() * 200) + 50);
        return next;
      });
    };
    updateCounter();
  };

  useEffect(() => {
    if (showLoader) startLoader();
    else setCounter(100);
  }, []);

  useEffect(() => {
    if (counter === 100 && showLoader) {
      sessionStorage.setItem("loaderShown", "true");
      const tl = gsap.timeline();
      tl.to(".counter", { opacity: 0, duration: 0.5, ease: "power4.inOut" }, 'ani1')
        .to(".bar", { height: 0, duration: 2, stagger: { amount: 0.5 }, ease: "power4.inOut" }, 'ani1')
        .to(".counter", { y: "-100%", duration: 1, ease: "power4.inOut" })
        .to(".overlay", { y: "-100%", duration: 1, ease: "power4.inOut" });

      return () => tl.kill();
    }
  }, [counter, showLoader]);
  useGSAP(() => {
    const lines = [
      { top: "390px", left: "-120px" },
      { top: "-40px", left: "290px" },
      { top: "100px", left: "-250px" },
      { top: "-100px", left: "50px" },
      { top: "200px", left: "-400px" },
      { top: "-50px", left: "150px" },
      { top: "50px", left: "-300px" },
      { top: "-70px", left: "450px" },
      { top: "350px", left: "-200px" },
      { top: "-20px", left: "600px" },
    ];
  
    lines.forEach((line, index) => {
      gsap.fromTo(
        `.linee-${index}`,
        { top: line.top, left: line.left },
        {
          top: `${parseInt(line.top) + 624}px`, // End position
          left: `${parseInt(line.left) + 1357}px`,
          duration: 8 , // Slight variation in speed for natural effect
          ease: "easeInOut",
          repeat: -1,
          delay: index * 0.5, 
          opacity:0.3// Staggered start for each line
        }
      );
    });
  });
  //  Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);
  useGSAP(() => {
    if (isOpen) {
      gsap.to(".mobile-nav", {
        height: "auto",
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.fromTo(
        ".mobile-nav a, .mobile-nav button",
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }
      );
    } else {
      gsap.to(".mobile-nav", {
        height: 0,
        opacity: 0,
        y: -10,
        duration: 0.4,
        ease: "power2.in",
      });
    }
  }, [isOpen]);
  // Format time as HH:MM AM/PM
  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });


  
  return (

    <div className='p-1 h-[100vh] overflow-hidden'>
          {showLoader && (
        <>
          <h1 className='fixed w-[100vw] counter h-[100vh] flex justify-end font-bold items-end p-5 sm:p-20 z-50 text-[#BCBBC2] leading-none text-[20vh] md:text-[30vh]'>
            {counter}
          </h1>
          <div className='overlay fixed w-[100vw] h-[100vh] z-40 flex'>
            {Array.from({ length: 10 }).map((_, idx) => (
              <div key={idx} className="bar bg-black w-[10vw] z-40 h-[105vh]" />
            ))}
          </div>
        </>
      )}

    <div className="h-full rounded-3xl bg-white font-serif relative overflow-hidden flex flex-col">

      <div 
        className="absolute top-16 left-0 w-full rounded-xl px-3 py-1 z-20 overflow-hidden mobile-nav" 
        style={{ opacity: 0, height: 0, transform: "translateY(-20px)" }} // Initially hidden
        >
        <div className='flex flex-col p-3 py-5 gap-5 bg-gray-100 rounded-xl text-xl font-extralight'>
        <a href="#"  className="text-gray-600 hover:text-gray-900 transition-colors">Resume</a>
        <a href="https://www.linkedin.com/in/nikhil-goud-31519025b/" target="_blank" className="text-gray-600 hover:text-gray-900 transition-colors">LinkedIn</a>
        <a target="_blank" href="mailto:knilhilgoud2004@gmail.com">
        <button className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition-colors">
          Email me
        </button>
        </a>
        </div>
      </div>
{[...Array(10)].map((_, index) => (
  <div
  key={index}
  className={`absolute linee-${index} w-24 h-[1px] bg-gradient-to-r from-slate-400 to-black opacity-100 rounded-sm rotate-[22.6deg]`}
  />
))}
      <header className="relative z-10 py-4 px-4 md:px-8 flex justify-between items-center">
       <div className="flex justify-center">
        <div 
          className="relative w-52 h-10 rounded-lg bg-gray-100 shadow-sm cursor-pointer transition-all duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          >
          {/* Location display (shown by default) */}
          <div 
            className={`absolute inset-0 flex items-center transition-opacity duration-600 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
            >
            <div className="w-10 h-10 overflow-hidden rounded-xl border-[1px] border-[#ebdbc8] bg-gray-300 mr-3 flex-shrink-0">
              <img
                src="https://www.lummi.ai/api/pro/image/a21be9c5-714e-4668-a81c-aaa2873ddc5b?asset=original&cb=iuWBGj&auto=format&w=640"
                alt="Profile"
                className="w-full h-full object-cover rounded-xl"
                />
            </div>
            <span className="text-gray-800 text-sm font-medium">Hyd, Telangana 🇮🇳</span>
          </div>
          
          {/* Time overlay (shown on hover) */}
          <div 
            className={`absolute inset-0 scale-105 flex items-center justify-center bg-black text-white rounded-lg transition-opacity duration-3000 ease-in-out ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            >
            <span className="font-medium text-sm">{formattedTime}</span>
          </div>
        </div>
      </div>
        
      <nav className="hidden md:flex items-center space-x-6">
        <div className='items-center space-x-6 border-2 border-gray-300 rounded-xl px-4 py-2'>
        <a href="#"  className="text-gray-600 hover:text-gray-900 transition-colors">Resume</a>
        <a href="https://www.linkedin.com/in/nikhil-goud-31519025b/" target="_blank" className="text-gray-600 hover:text-gray-900 transition-colors">LinkedIn</a>
        {/* <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Template Store</a> */}
        </div>

        <a target="_blank" href="mailto:knilhilgoud2004@gmail.com">
        <button className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition-colors">
          Email me
        </button>
        </a>
      </nav>
        
      <button
        className="md:hidden text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
        >
        {isOpen ? (
          // X Icon
          <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
              />
          </svg>
        ) : (
          // Hamburger Icon
          <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
              />
          </svg>
        )}
      </button>
      </header>
      
      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-12 md:py-16 flex-grow">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-thin text-gray-900 leading-none max-w-5xl">
        Hello, I’m Nikhil. Delighted to have you explore my portfolio.I Build seamless websites for an <span className="text-gray-400">immersive and engaging user experience.</span>
        </h1>
        
        <div className="mt-16">
          <button 
            className="relative bg-gradient-to-r from-[#FF532E] to-orange-400 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
            Explore 
            <div className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-4/5 h-8 bg-orange-300 opacity-30 blur-md rounded-full transition-opacity ${isHovered ? 'opacity-50' : 'opacity-30'}`}></div>
          </button>
        </div>
        <div className='absolute bottom-0 your-class-name w-full h-[220px]'>
        <LEDMatrix/>
        </div>
      </main>

      <div>
      </div>
    </div>
            </div>
  );
};

export default Home;