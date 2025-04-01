
// import gsap from 'gsap';
// import React, { useEffect, useRef } from 'react';

// const projectData = [
//   {
//     id: 1,
//     title: 'Revitalizing Customer Engagement for FluxCRM',
//     image: 'https://framerusercontent.com/images/bE5C7AyfhrXV8b2NK9vhMlEFmQ.png?lossless=1',
//     gradient: 'from-orange-300 via-purple-400 to-blue-500'
//   },
//   {
//     id: 2,
//     title: 'Streamlining E-Commerce for ZenithCart',
//     image: 'https://framerusercontent.com/images/bE5C7AyfhrXV8b2NK9vhMlEFmQ.png?lossless=1',
//     gradient: 'bg-gray-200'
//   },
//   {
//     id: 3,
//     title: 'Designing a Seamless User Experience for TaskFlow',
//     image: 'https://framerusercontent.com/images/bE5C7AyfhrXV8b2NK9vhMlEFmQ.png?lossless=1',
//     gradient: 'from-yellow-300 via-orange-200 to-yellow-400'
//   },
//   {
//     id: 4,
//     title: 'Revamping the Digital Experience for NexaTech',
//     image: 'https://framerusercontent.com/images/bE5C7AyfhrXV8b2NK9vhMlEFmQ.png?lossless=1',
//     gradient: 'bg-gray-200'
//   }
// ];

// const ProjectCard = ({ project }) => {
//   const cardRef = useRef(null);


//   // useEffect(() => {
//   //   const card = cardRef.current;

//   //   gsap.set(card, { 
//   //     transformStyle: "preserve-3d", 
//   //     perspective: 1000,
//   //     transformOrigin: "center center" 
//   //   });
//   //   card.addEventListener("mouseenter", () => {
//   //     gsap.to(card, {
//   //       rotationY: 40,   // Backward tilt
//   //       // scaleY: 0.92,    // Flatten top   // Narrow left & right     // Further taper effect
//   //       scaleX: 0.98,    // Make width slightly smaller
//   //       duration: 0.8,
//   //       ease: "power2.inOut",
//   //     });
//   //   });

//   //   card.addEventListener("mouseleave", () => {
//   //     gsap.to(card, {
//   //       rotationY: 0,
//   //       skewX: 0,  
//   //       skewY: 0,  
//   //       scaleY: 1,
//   //       scaleX: 1,
//   //       duration: 0.8,
//   //       ease: "power2.inOut",
//   //     });
//   //   });

//   //   return () => {
//   //     card.removeEventListener("mouseenter", () => {});
//   //     card.removeEventListener("mouseleave", () => {});
//   //   };
//   // }, []);
//   return (
//     <div ref={cardRef} className="relative  rounded-2xl overflow-hidden border-2 p-0.5 sm:p-1.5 border-[border-3 border-[#F8F8F8]]">
//       <div className={`absolute inset-0 `}></div>
//       <img 
//         src={project.image} 
//         alt={project.title} 
//         className="w-full h-[380px] sm:h-[480px] rounded-xl object-cover"
//       />
//       <div className="absolute bottom-0 left-0 right-0 pl-8 pb-9 pr-20">
//         <h3 className="text-white text-2xl font-light leading-tight">{project.title}</h3>
//       </div>
//     </div>
//   );
// };

// const FeaturedProjects = () => {
//   return (
//     <div className="w-full px-4 md:px-6 lg:px-10 py-6">
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="mt-5 text-4xl font-light text-gray-900">Featured Projects</h2>
//         <div className="flex space-x-2">
//           {/* <button className="p-1 text-gray-600 hover:text-gray-900">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//               <path d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v10H5V5z" />
//             </svg>
//           </button>
//           <button className="p-1 text-gray-600 hover:text-gray-900">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//               <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
//               <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
//             </svg>
//           </button> */}
//         </div>
//       </div>

//       {/* Grid layout for all screen sizes */}
//       <div className=" mt-12 grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-7">
//         {projectData.map((project) => (
//           <ProjectCard key={project.id} project={project} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedProjects;

import React, { useEffect, useRef, useState,useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
const projectData = [
  {
    id: 1,
    title: 'Thynkr',
    image: "https://i.postimg.cc/k5zqttcn/Screenshot-2025-04-01-at-5-34-16-PM.png",
    gradient: 'bg-gray-200'
  },
  {
    id: 2,
    title: 'Darth-Ai',
    image: "https://i.ibb.co/zWdjQ5P6/Screenshot-2025-04-01-at-12-51-26-PM.png",
    gradient: 'from-orange-300 via-purple-400 to-blue-500'
  },
  {
    id: 3,
    title: 'NoCaptcha',
    image: "https://i.ibb.co/Z5Swpx6/Screenshot-2025-04-01-at-12-56-16-PM.png",
    gradient: 'from-yellow-300 via-orange-200 to-yellow-400'
  },
  {
    id: 4,
    title: 'Farmer to Customer',
    image: "https://i.ibb.co/7J3ZLzks/Screenshot-2025-04-01-at-3-23-17-PM.png",
    gradient: 'bg-gray-200'
  }
];

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const containerRef = useRef(null);
  const navigate = useNavigate();
  // useGSAP(() => {
  //   const container = containerRef.current;
  //   const card = cardRef.current;

  //   gsap.set(container, { perspective: 1000 });
  //   gsap.set(container, { transformStyle: "preserve-3d" });
  //   gsap.set(container, { transformOrigin: "center center" });

  //   card.addEventListener("mouseenter", () => {
  //           gsap.to(card, {
  //             rotationX: 4, 
  //             scale: 0.94,   
  //             duration: 0.5,
  //             ease: "easeIn"
  //           });
  //         });
      
  //         card.addEventListener("mouseleave", () => {
  //           gsap.to(card, {
  //             rotationX: 0,
  //             scaleY: 1,
  //             scaleX: 1,
  //             duration: 0.2,
  //             ease: "easeOut",
  //           });
  //         });
      
  //         return () => {
  //           card.removeEventListener("mouseenter", () => {});
  //           card.removeEventListener("mouseleave", () => {});
  //         };
  //       }, []);

  return (
    <div onClick={()=>navigate(`projects/${project.id}`)} ref={containerRef} className="relative perspective preserve-3d hover:scale-[0.95] transition-all duration-500">
      <div ref={cardRef} className=" border-2 p-0.5 sm:p-1.5 hover:my-rotate-x transition-all duration-500 cursor-pointer rounded-2xl border-[#efeeee]">
      
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-[380px] sm:h-[420px] rounded-xl object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 pl-8 pb-9 pr-20">
        <h3 className="text-blue-300 text-2xl font-light transition-all duration-500 leading-tight">{project.title}</h3>
      </div>
      </div>
    
    </div>
  );
};
const LEDMatrix = () => {
  // Your existing LED Matrix code here
  // ... (keeping all the original implementation)
  
  const width = window.innerWidth;
  const height = 150; 
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
        height: 220 
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
                backgroundColor: cell.glowing ? `#FFFFF` : "#cfcece",
                opacity: cell.glowing ? cell.intensity : 0.1,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const FeaturedProjects = () => {
  return (
    <div className='p-1'>

    <div className="w-full bg-white rounded-t-3xl font-serif px-4 md:px-6 lg:px-10 py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="mt-5 text-4xl font-light text-gray-900">Featured Projects</h2>
      </div>

      {/* Grid layout for all screen sizes */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-7">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </div>
    <div className='relative bg-white rounded-b-3xl  bottom-0 your-class-name w-full h-[150px]'>
        <LEDMatrix/>
        </div>
  </div>
  );
};

export default FeaturedProjects;
