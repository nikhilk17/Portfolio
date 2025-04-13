// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ArrowRight } from 'lucide-react';
// import React, { useEffect, useRef, useState, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// gsap.registerPlugin(useGSAP);
// const projectData = [
//   {
//     id: 1,
//     title: 'Thynkr',
//     image: "https://i.postimg.cc/k5zqttcn/Screenshot-2025-04-01-at-5-34-16-PM.png",
//     gradient: 'bg-gray-200'
//   },
//   {
//     id: 2,
//     title: 'Darth-Ai',
//     image: "https://i.ibb.co/zWdjQ5P6/Screenshot-2025-04-01-at-12-51-26-PM.png",
//     gradient: 'from-orange-300 via-purple-400 to-blue-500'
//   },
//   {
//     id: 3,
//     title: 'NoCaptcha',
//     image: "https://i.ibb.co/Z5Swpx6/Screenshot-2025-04-01-at-12-56-16-PM.png",
//     gradient: 'from-yellow-300 via-orange-200 to-yellow-400'
//   },
//   {
//     id: 4,
//     title: 'DarkVerse',
//     image: "https://i.postimg.cc/7YZWy4Dg/Screenshot-2025-04-03-at-6-53-43-PM.png",
//     gradient: 'bg-gray-200'
//   },
//   {
//     id: 5,
//     title: 'Farmer to Customer',
//     image: "https://i.ibb.co/7J3ZLzks/Screenshot-2025-04-01-at-3-23-17-PM.png",
//     gradient: 'bg-gray-200'
//   },
//   {
//     id: 6,
//     title: 'Saviskar',
//     image: "https://i.postimg.cc/KjM41whQ/Screenshot-2025-04-03-at-7-00-08-PM.png",
//     gradient: 'bg-gray-200'
//   },
// ];


// const ProjectCard = ({ project }) => {
//   const cardRef = useRef(null);
//   const exploreRef = useRef(null);
//   const navigate = useNavigate();

//   useGSAP(() => {
//     const card = cardRef.current;
//     const explore = exploreRef.current;

//     if (!card || !explore) return;

//     const handleMouseEnter = () => {
//       gsap.to(explore, {
//         scale: 1,
//         opacity: 1,
//         duration: 0.6,
//         ease: "power1.inOut",
//         overwrite: "auto",
//       });
//     };

//     const handleMouseLeave = () => {
//       gsap.to(explore, {
//         scale: 0,
//         opacity: 0,
//         overwrite: "auto",
//       });
//     };

//     const handleMouseMove = (e) => {
//       const rect = card.getBoundingClientRect();
//       gsap.to(explore, {
//         x: e.clientX - rect.left - 40, // Centering the effect
//         y: e.clientY - rect.top,
//         overwrite: "auto",
//       });
//     };

//     card.addEventListener("mouseenter", handleMouseEnter);
//     card.addEventListener("mouseleave", handleMouseLeave);
//     card.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       card.removeEventListener("mouseenter", handleMouseEnter);
//       card.removeEventListener("mouseleave", handleMouseLeave);
//       card.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div
//       onClick={() => navigate(`projects/${project.id}`)}
//       className="relative perspective preserve-3d hover:scale-[0.95] transition-all duration-500"
//     >
//       <div
//         ref={cardRef}
//         className="relative cursor-none border-2 p-0.5 sm:p-1.5 hover:my-rotate-x transition-all duration-500 rounded-2xl border-[#efeeee] overflow-hidden"
//       >
//         {/* Floating Explore Effect */}
//         <div
//           ref={exploreRef}
//           className="absolute flex gap-2 top-0 left-0 bg-gray-200 px-3 pl-4 py-3 rounded-full opacity-0 scale-0 pointer-events-none"
//         >
//           Explore Now
//           <ArrowRight />
//         </div>

//         {/* Project Image */}
//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-[380px] sm:h-[420px] rounded-xl object-cover"
//         />

//         {/* Title */}
//         <div className="absolute bottom-0 left-0 right-0 pl-8 pb-9 pr-20">
//           <h3 className="text-blue-300 text-2xl font-light transition-all duration-500 leading-tight">
//             {project.title}
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// const LEDMatrix = () => {
//   const containerRef = useRef(null);
//   const [glowingCells, setGlowingCells] = useState(new Set());
//   const [dimensions, setDimensions] = useState({
//     width: window.innerWidth,
//     height: 150,
//   });

//   const matrixSize = 8;
//   const gap = 2;
//   const columns = Math.floor(dimensions.width / (matrixSize + gap));
//   const rows = Math.floor(dimensions.height / (matrixSize + gap));

//   // Handle resize
//   useEffect(() => {
//     const handleResize = () => {
//       setDimensions({
//         width: window.innerWidth,
//         height: 150,
//       });
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Animation loop
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setGlowingCells((prevSet) => {
//         const newSet = new Set(prevSet);
//         // Fade out some random existing glowing cells
//         for (let id of prevSet) {
//           if (Math.random() < 0.3) newSet.delete(id);
//         }
//         // Add a few new glowing cells
//         for (let i = 0; i < 6; i++) {
//           const r = Math.floor(Math.random() * rows);
//           const c = Math.floor(Math.random() * columns);
//           newSet.add(`${r}-${c}`);
//         }
//         return newSet;
//       });
//     }, 300);

//     return () => clearInterval(interval);
//   }, [columns, rows]);

//   return (
//     <div className="w-full z-0">
//       <div
//         ref={containerRef}
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
//           {Array.from({ length: rows * columns }).map((_, index) => {
//             const row = Math.floor(index / columns);
//             const col = index % columns;
//             const id = `${row}-${col}`;
//             const isGlowing = glowingCells.has(id);
//             return (
//               <div
//                 key={id}
//                 className="transition-opacity duration-300"
//                 style={{
//                   width: `${matrixSize}px`,
//                   height: `${matrixSize}px`,
//                   backgroundColor: isGlowing ? "#FE4C22" : "#cfcece",
//                   opacity: isGlowing ? 1 : 0.1,
//                 }}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// const FeaturedProjects = () => {
//   return (
//     <div className='p-1 w-screen overflow-hidden'>

//       <div className="w-full bg-white rounded-t-3xl font-serif px-4 md:px-6 lg:px-10 py-6">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="mt-5 text-4xl font-light text-gray-900">Featured Projects</h2>
//         </div>

//         {/* Grid layout for all screen sizes */}
//         <div className="mt-12 grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-7">
//           {projectData.map((project) => (
//             <ProjectCard key={project.id} project={project} />
//           ))}
//         </div>

//       </div>
//       {/* <div className='relative bg-white rounded-b-3xl  bottom-0 w-full h-[150px]'>
//         <LEDMatrix />
//       </div> */}
//     </div>
//   );
// };

// export default FeaturedProjects;

// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ArrowRight } from 'lucide-react';
// import React, { useEffect, useRef, useState, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// const projectData = [
//   {
//     id: 1,
//     title: 'Thynkr',
//     image: "https://i.postimg.cc/k5zqttcn/Screenshot-2025-04-01-at-5-34-16-PM.png",
//     gradient: 'bg-gray-200'
//   },
//   {
//     id: 2,
//     title: 'Darth-Ai',
//     image: "https://i.ibb.co/zWdjQ5P6/Screenshot-2025-04-01-at-12-51-26-PM.png",
//     gradient: 'from-orange-300 via-purple-400 to-blue-500'
//   },
//   {
//     id: 3,
//     title: 'NoCaptcha',
//     image: "https://i.ibb.co/Z5Swpx6/Screenshot-2025-04-01-at-12-56-16-PM.png",
//     gradient: 'from-yellow-300 via-orange-200 to-yellow-400'
//   },
//   {
//     id: 4,
//     title: 'DarkVerse',
//     image: "https://i.postimg.cc/7YZWy4Dg/Screenshot-2025-04-03-at-6-53-43-PM.png",
//     gradient: 'bg-gray-200'
//   },
//   {
//     id: 5,
//     title: 'Farmer to Customer',
//     image: "https://i.ibb.co/7J3ZLzks/Screenshot-2025-04-01-at-3-23-17-PM.png",
//     gradient: 'bg-gray-200'
//   },
//   {
//     id: 6,
//     title: 'Saviskar',
//     image: "https://i.postimg.cc/KjM41whQ/Screenshot-2025-04-03-at-7-00-08-PM.png",
//     gradient: 'bg-gray-200'
//   },
// ];


// const ProjectCard = ({ project }) => {
//   const cardRef = useRef(null);
//   const exploreRef = useRef(null);
//   const navigate = useNavigate();

//   useGSAP(() => {
//     const card = cardRef.current;
//     const explore = exploreRef.current;

//     if (!card || !explore) return;

//     const handleMouseEnter = () => {
//       gsap.to(explore, {
//         scale: 1,
//         opacity: 1,
//         duration: 0.6,
//         ease: "power1.inOut",
//         overwrite: "auto",
//       });
//     };

//     const handleMouseLeave = () => {
//       gsap.to(explore, {
//         scale: 0,
//         opacity: 0,
//         overwrite: "auto",
//       });
//     };

//     const handleMouseMove = (e) => {
//       const rect = card.getBoundingClientRect();
//       gsap.to(explore, {
//         x: e.clientX - rect.left - 40, // Centering the effect
//         y: e.clientY - rect.top,
//         overwrite: "auto",
//       });
//     };

//     card.addEventListener("mouseenter", handleMouseEnter);
//     card.addEventListener("mouseleave", handleMouseLeave);
//     card.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       card.removeEventListener("mouseenter", handleMouseEnter);
//       card.removeEventListener("mouseleave", handleMouseLeave);
//       card.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div
//       onClick={() => navigate(`projects/${project.id}`)}
//       className="relative perspective preserve-3d hover:scale-[0.95] transition-all duration-500"
//     >
//       <div
//         ref={cardRef}
//         className="relative cursor-none border-2 p-0.5 sm:p-1.5 hover:my-rotate-x transition-all duration-500 rounded-2xl border-[#efeeee] overflow-hidden"
//       >
//         {/* Floating Explore Effect */}
//         <div
//           ref={exploreRef}
//           className="absolute flex gap-2 top-0 left-0 bg-gray-200 px-3 pl-4 py-3 rounded-full opacity-0 scale-0 pointer-events-none"
//         >
//           Explore Now
//           <ArrowRight />
//         </div>

//         {/* Project Image */}
//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-[380px] sm:h-[420px] rounded-xl object-cover"
//         />

//         {/* Title */}
//         <div className="absolute bottom-0 left-0 right-0 pl-8 pb-9 pr-20">
//           <h3 className="text-blue-300 text-2xl font-light transition-all duration-500 leading-tight">
//             {project.title}
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// const FeaturedProjects = () => {
//   return (
//     <div className='p-1 w-screen overflow-hidden'>

//       <div className="w-full bg-white rounded-t-3xl font-serif px-4 md:px-6 lg:px-10 py-6">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="mt-5 text-4xl font-light text-gray-900">Featured Projects</h2>
//         </div>

//         {/* Grid layout for all screen sizes */}
//         <div className="mt-12 grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-7">
//           {projectData.map((project) => (
//             <ProjectCard key={project.id} project={project} />
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default FeaturedProjects;



// import { useRef, useCallback } from 'react';
// import { ArrowRight } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import gsap from 'gsap';

// // Project data
// const projectData = [
//   {
//     id: 1,
//     title: 'Thynkr',
//     image: "https://i.postimg.cc/k5zqttcn/Screenshot-2025-04-01-at-5-34-16-PM.png",
//     gradient: 'bg-gray-200'
//   },
//   {
//     id: 2,
//     title: 'Darth-Ai',
//     image: "https://i.ibb.co/zWdjQ5P6/Screenshot-2025-04-01-at-12-51-26-PM.png",
//     gradient: 'from-orange-300 via-purple-400 to-blue-500'
//   },
//   {
//     id: 3,
//     title: 'NoCaptcha',
//     image: "https://i.ibb.co/Z5Swpx6/Screenshot-2025-04-01-at-12-56-16-PM.png",
//     gradient: 'from-yellow-300 via-orange-200 to-yellow-400'
//   },
//   {
//     id: 4,
//     title: 'DarkVerse',
//     image: "https://i.postimg.cc/7YZWy4Dg/Screenshot-2025-04-03-at-6-53-43-PM.png",
//     gradient: 'bg-gray-200'
//   },
//   {
//     id: 5,
//     title: 'Farmer to Customer',
//     image: "https://i.ibb.co/7J3ZLzks/Screenshot-2025-04-01-at-3-23-17-PM.png",
//     gradient: 'bg-gray-200'
//   },
//   {
//     id: 6,
//     title: 'Saviskar',
//     image: "https://i.postimg.cc/KjM41whQ/Screenshot-2025-04-03-at-7-00-08-PM.png",
//     gradient: 'bg-gray-200'
//   },
// ];

// const ProjectCard = ({ project }) => {
//   const cardRef = useRef(null);
//   const exploreRef = useRef(null);
//   const navigate = useNavigate();

//   const handleMouseEnter = useCallback(() => {
//     if (!exploreRef.current) return;
//     gsap.to(exploreRef.current, {
//       scale: 1,
//       opacity: 1,
//       duration: 0.6,
//       ease: "power1.inOut",
//       overwrite: "auto",
//     });
//   }, []);

//   const handleMouseLeave = useCallback(() => {
//     if (!exploreRef.current) return;
//     gsap.to(exploreRef.current, {
//       scale: 0,
//       opacity: 0,
//       overwrite: "auto",
//     });
//   }, []);

//   const handleMouseMove = useCallback((e) => {
//     const card = cardRef.current;
//     const explore = exploreRef.current;
//     if (!card || !explore) return;

//     const rect = card.getBoundingClientRect();
//     const x = e.clientX - rect.left - 40;
//     const y = e.clientY - rect.top;

//     gsap.to(explore, {
//       x,
//       y,
//       force3D: true,
//       overwrite: "auto",
//     });
//   }, []);

//   return (
//     <div
//       onClick={() => navigate(`projects/${project.id}`)}
//       className="relative hover:scale-[0.96]  transition-all duration-500"
//     >
//       <div
//         ref={cardRef}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         onMouseMove={handleMouseMove}
//         className="border-2 cursor-none p-0.5 sm:p-1.5 transition-all duration-500 rounded-2xl border-[#efeeee] overflow-hidden"
//       >
//         {/* Floating Explore Effect */}
//         <div
//           ref={exploreRef}
//           className="fixed z-50 flex gap-2 top-0 left-0 bg-gray-200 px-3 pl-4 py-3 rounded-full opacity-0 scale-0 pointer-events-none"
//         >
//           Explore Now
//           <ArrowRight />
//         </div>

//         {/* Project Image */}
//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-[380px] sm:h-[420px] rounded-xl object-cover"
//         />

//         {/* Title */}
//         <div className="absolute z-10 bottom-0 left-0 right-0 pl-8 pb-9 pr-20">
//           <h3 className="text-blue-300 text-2xl font-light transition-all duration-500 leading-tight">
//             {project.title}
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// const FeaturedProjects = () => {
//   return (
//     <div className='p-1 w-screen overflow-hidden'>
//       <div className="w-full bg-white rounded-3xl font-serif px-4 md:px-6 lg:px-10 py-6 pb-16">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="mt-5 text-4xl font-light text-gray-900">Featured Projects</h2>
//         </div>

//         {/* Grid layout for all screen sizes */}
//         <div className="mt-12 grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-7">
//           {projectData.map((project) => (
//             <ProjectCard key={project.id} project={project} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturedProjects;


import React, { useRef, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { useScroll } from 'framer-motion';
import { tr } from 'framer-motion/client';
gsap.registerPlugin(ScrollTrigger);
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
    title: 'DarkVerse',
    image: "https://i.postimg.cc/7YZWy4Dg/Screenshot-2025-04-03-at-6-53-43-PM.png",
    gradient: 'bg-gray-200'
  },
  {
    id: 5,
    title: 'Farmer to Customer',
    image: "https://i.ibb.co/7J3ZLzks/Screenshot-2025-04-01-at-3-23-17-PM.png",
    gradient: 'bg-gray-200'
  },
  {
    id: 6,
    title: 'Saviskar',
    image: "https://i.postimg.cc/KjM41whQ/Screenshot-2025-04-03-at-7-00-08-PM.png",
    gradient: 'bg-gray-200'
  },
];

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const exploreRef = useRef(null);
  const navigate = useNavigate();

  const handleMouseEnter = useCallback(() => {
    if (!exploreRef.current) return;
    gsap.to(exploreRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      ease: "power1.inOut",
      overwrite: "auto",
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!exploreRef.current) return;
    gsap.to(exploreRef.current, {
      scale: 0,
      opacity: 0,
      overwrite: "auto",
    });
  }, []);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    const explore = exploreRef.current;
    if (!card || !explore) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - 40;
    const y = e.clientY - rect.top;

    gsap.to(explore, {
      x: x,
      y: y,
      force3D: true,
      overwrite: "auto",
    });
  }, []);
  
  return (
    <div
      onClick={() => navigate(`projects/${project.id}`)}
      className="relative feature-section hover:scale-[0.96] transition-all duration-500"
    >
      <div
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className="relative card cursor-none border-2 p-0.5 sm:p-1.5 transition-all duration-500 rounded-2xl border-[#efeeee] overflow-hidden"
      >
        {/* Floating Explore Effect */}
        <div
          ref={exploreRef}
          className="fixed z-50 flex gap-2 top-0 left-0 bg-gray-200 px-3 pl-4 py-3 rounded-full opacity-0 scale-0 pointer-events-none"
        >
          Explore Now
          <ArrowRight />
        </div>

        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[380px] sm:h-[420px] rounded-xl object-cover"
        />

        {/* Title */}
        <div className="absolute z-10 bottom-0 left-0 right-0 pl-8 pb-9 pr-20">
          <h3 className="text-blue-300 text-2xl font-light transition-all duration-500 leading-tight">
            {project.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

const FeaturedProjects = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.text-ani', // animate each paragraph inside the container
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        stagger: { amount: 0.5 },
        scrollTrigger: {
          trigger: '.feature-con',
          start: 'top 80%',
          end: '60% 60%',
          scrub: 1, // keep it responsive to scroll
          // markers: true,
        },
      }
    );
    
    gsap.utils.toArray('.card').forEach(card => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 30,        // slight upward motion
          scale: 0.95,  // subtle zoom effect
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,             // not too fast, not too slow
          ease: 'power2.inOut',        // smooth acceleration and soft landing
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 80%',
            toggleActions: 'play none none reverse',
            // markers:true,            // animates only once (optional, looks clean)
          },
        }
      );
    });
  }, []);

  return (
    // Added the "feature-section" class here
    <div className=" p-1 w-screen feature-con overflow-hidden">
      <div className="w-full bg-white rounded-3xl font-serif px-4 md:px-6 lg:px-10 py-6 pb-16">
        <div className=" overflow-hidden p-1 flex items-center justify-between mb-4">
          <h2 className="text-ani mt-5 text-4xl sm:text-5xl font-light text-gray-900">
            Featured Projects
          </h2>
        </div>

        {/* Grid layout for all screen sizes */}
        <div className="mt-12 cards grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-7">
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;