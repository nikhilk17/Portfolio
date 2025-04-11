// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";

// // Project data - In a real application, this would typically be fetched from an API
// const projectsData = [
//   {
//     id: "1",
//     title: "Darth - AI Unified Chatbot",
//     date: "2025",
//     category: "AI Solutions",
//     subcategory: "Product Showcase",
//     background: "Darth is an AI-powered chatbot designed to provide seamless conversational experiences. It integrates multiple AI models to enhance memory, collaboration, and workflow automation.",
//     coreProblem: "Traditional chatbots lack context retention and seamless multi-model integration, making interactions feel robotic and disconnected.",
//     approach: {
//       steps: [
//         "Integrated multiple AI models to ensure seamless conversation flow.",
//         "Implemented memory retention for better contextual understanding.",
//         "Designed a unified chat experience across various platforms.",
//         "Enhanced collaboration features for teams and businesses."
//       ]
//     },
//     keyFeatures: [
//       "Multi-AI Model Integration",
//       "Persistent Memory for Context Retention",
//       "Seamless Cross-Platform Communication",
//       "Collaboration Tools for Team Workflow"
//     ],
//     impact: {
//       metrics: [
//         "30% increase in response accuracy",
//         "40% improvement in user engagement",
//         "Reduced redundant queries by 50%"
//       ]
//     },
//     cta: {
//       text: "Let's Build Something Amazing!",
//       link: "/contact"
//     },
//     image: "https://i.ibb.co/TB170nS9/Screenshot-2025-04-01-at-1-01-42-PM.png",
//     visualImages: [
//       "/images/darth-visual1.png",
//       "/images/darth-visual2.png",
//       "/images/darth-visual3.png",
//       "/images/darth-visual4.png"
//     ]
//   },
//   {
//     id: "2",
//     title: "Thynkr - AI Mock Interview & Learning Platform",
//     date: "2024",
//     category: "Education",
//     subcategory: "AI Platform",
//     background: "Thynkr is an AI-driven interview preparation platform that helps candidates hone their skills through mock interviews, expert-led courses, insightful blogs, and 1:1 mentoring.",
//     coreProblem: "Existing platforms fail to offer dynamic AI-driven questions, expert mentorship, and comprehensive resources in a single platform.",
//     approach: {
//       steps: [
//         "Developed AI-driven interview simulations with real-time feedback.",
//         "Introduced expert-led courses on DSA, System Design, and Behavioral Interviews.",
//         "Created a knowledge hub with insightful blogs and career resources.",
//         "Enabled 1:1 mentoring for personalized career guidance."
//       ]
//     },
//     keyFeatures: [
//       "AI-powered Interview Simulator",
//       "Industry-Specific Question Banks",
//       "Expert-Led Courses on DSA & System Design",
//       "Career Growth Blogs & 1:1 Mentorship"
//     ],
//     impact: {
//       metrics: [
//         "60% increase in interview success rates",
//         "40% improvement in response confidence",
//         "Higher retention through structured courses & mentorship"
//       ]
//     },
//     cta: {
//       text: "Start Your AI Mock Interview",
//       link: "/start-interview"
//     },
//     image: "path/to/thynkr-ai-mock-interview-image.jpg",
//     visualImages: [
//       "/images/thynkr-visual1.png",
//       "/images/thynkr-visual2.png",
//       "/images/thynkr-visual3.png",
//       "/images/thynkr-visual4.png"
//     ]
//   }
// ];

// const ProjectDetails = () => {
//   const { projectId } = useParams();
//   const [project, setProject] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Find project when component mounts or projectId changes
//   useEffect(() => {
//     const foundProject = projectsData.find(p => p.id === projectId);
//     setProject(foundProject);
//     setLoading(false);
//   }, [projectId]);

//   console.log("Project ID:", projectId);

//   if (loading) {
//     return (
//       <div className="bg-white text-black min-h-screen flex justify-center items-center">
//         <p>Loading project details...</p>
//       </div>
//     );
//   }

//   if (!project) {
//     return (
//       <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center py-16 px-6 md:px-12">
//         <h1 className="text-4xl font-bold">Project Not Found</h1>
//         <p className="mt-4">Sorry, we couldn't find the project you're looking for.</p>
//         <Link to="/" className="mt-8 bg-black text-white px-6 py-3 rounded-lg">
//           Return Home
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white text-black min-h-screen flex flex-col items-center py-16 px-6 md:px-12">
//       <div className="max-w-3xl text-center">
//         <p className="text-gray-500 text-sm mb-4">
//           In {project.date} · {project.category} · {project.subcategory}
//         </p>
//         <h1 className="text-4xl font-bold mt-2">{project.title}</h1>
//       </div>
      
//       <div className="max-w-8xl mt-8">
//         <img 
//           src={project.image} 
//           alt={`${project.title} Mockup`} 
//           className="w-full rounded-lg shadow-lg" 
//         />
//       </div>
      
//       <div className="max-w-6xl mt-12">
//         <h2 className="text-2xl font-semibold mb-4">Background</h2>
//         <p className="text-gray-700">
//           {project.background}
//         </p>
//       </div>
      
//       <div className="max-w-6xl mt-12">
//         <h2 className="text-2xl font-semibold mb-4">Core Problem</h2>
//         <p className="text-gray-700">
//           {project.coreProblem}
//         </p>
//       </div>
      
//       <div className="max-w-6xl mt-12">
//         <h2 className="text-2xl font-semibold mb-4">The Approach</h2>
//         <p className="text-gray-700">
//           Our goal was to create an innovative solution to address these challenges.
//         </p>
//       </div>
      
//       <div className="max-w-6xl mt-8">
//         <h2 className="text-2xl font-semibold mb-4">Steps Taken</h2>
//         <ul className="text-gray-700 list-disc list-inside space-y-2">
//           {project.approach.steps.map((step, index) => (
//             <li key={index}>{step}</li>
//           ))}
//         </ul>
//       </div>
      
//       <div className="max-w-3xl mt-12">
//         <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
//         <ul className="text-gray-700 list-disc list-inside space-y-2">
//           {project.keyFeatures.map((feature, index) => (
//             <li key={index}><span className="text-black font-semibold">{feature}</span></li>
//           ))}
//         </ul>
//       </div>
      
//       <div className="max-w-3xl mt-12">
//         <h2 className="text-2xl font-semibold mb-4">Results and Impact</h2>
//         <ul className="text-gray-700 list-disc list-inside space-y-2">
//           {project.impact.metrics.map((metric, index) => (
//             <li key={index}>{metric}</li>
//           ))}
//         </ul>
//       </div>
      
//       {project.visualImages && project.visualImages.length > 0 && (
//         <div className="max-w-4xl mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
//           {project.visualImages.map((img, index) => (
//             <img 
//               key={index}
//               src={img} 
//               alt={`${project.title} Visual ${index + 1}`} 
//               className="rounded-lg shadow-lg" 
//             />
//           ))}
//         </div>
//       )}
      
//       <div className="mt-12">
//         <Link to={project.cta.link}>
//           <button className="bg-black text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-800">
//             {project.cta.text}
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;



// import React, { useEffect, useState } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";

// // Project data - In a real application, this would typically be fetched from an API
// const projectsData = [
//   {
//     id: "1",
//     title: "Darth - AI Unified Chatbot",
//     date: "2025",
//     category: "AI Solutions",
//     subcategory: "Product Showcase",
//     background: "Darth is an AI-powered chatbot designed to provide seamless conversational experiences. It integrates multiple AI models to enhance memory, collaboration, and workflow automation.",
//     coreProblem: "Traditional chatbots lack context retention and seamless multi-model integration, making interactions feel robotic and disconnected.",
//     approach: {
//       steps: [
//         "Integrated multiple AI models to ensure seamless conversation flow.",
//         "Implemented memory retention for better contextual understanding.",
//         "Designed a unified chat experience across various platforms.",
//         "Enhanced collaboration features for teams and businesses."
//       ]
//     },
//     keyFeatures: [
//       "Multi-AI Model Integration",
//       "Persistent Memory for Context Retention",
//       "Seamless Cross-Platform Communication",
//       "Collaboration Tools for Team Workflow"
//     ],
//     impact: {
//       metrics: [
//         "30% increase in response accuracy",
//         "40% improvement in user engagement",
//         "Reduced redundant queries by 50%"
//       ]
//     },
//     cta: {
//       text: "Let's Build Something Amazing!",
//       link: "/contact"
//     },
//     image: "https://i.ibb.co/TB170nS9/Screenshot-2025-04-01-at-1-01-42-PM.png",
//     visualImages: [
//       "/images/darth-visual1.png",
//       "/images/darth-visual2.png",
//       "/images/darth-visual3.png",
//       "/images/darth-visual4.png"
//     ]
//   },
//   {
//     id: "2",
//     title: "Thynkr - AI Mock Interview & Learning Platform",
//     date: "2024",
//     category: "Education",
//     subcategory: "AI Platform",
//     background: "Thynkr is an AI-driven interview preparation platform that helps candidates hone their skills through mock interviews, expert-led courses, insightful blogs, and 1:1 mentoring.",
//     coreProblem: "Existing platforms fail to offer dynamic AI-driven questions, expert mentorship, and comprehensive resources in a single platform.",
//     approach: {
//       steps: [
//         "Developed AI-driven interview simulations with real-time feedback.",
//         "Introduced expert-led courses on DSA, System Design, and Behavioral Interviews.",
//         "Created a knowledge hub with insightful blogs and career resources.",
//         "Enabled 1:1 mentoring for personalized career guidance."
//       ]
//     },
//     keyFeatures: [
//       "AI-powered Interview Simulator",
//       "Industry-Specific Question Banks",
//       "Expert-Led Courses on DSA & System Design",
//       "Career Growth Blogs & 1:1 Mentorship"
//     ],
//     impact: {
//       metrics: [
//         "60% increase in interview success rates",
//         "40% improvement in response confidence",
//         "Higher retention through structured courses & mentorship"
//       ]
//     },
//     cta: {
//       text: "Start Your AI Mock Interview",
//       link: "/start-interview"
//     },
//     image: "path/to/thynkr-ai-mock-interview-image.jpg",
//     visualImages: [
//       "/images/thynkr-visual1.png",
//       "/images/thynkr-visual2.png",
//       "/images/thynkr-visual3.png",
//       "/images/thynkr-visual4.png"
//     ]
//   }
// ];

// const ProjectDetails = () => {
//   const { projectId } = useParams();
//   const [project, setProject] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [activeSection, setActiveSection] = useState("overview");
//   const navigate = useNavigate();

//   // Find project when component mounts or projectId changes
//   useEffect(() => {
//     const foundProject = projectsData.find(p => p.id === projectId);
//     setProject(foundProject);
//     setLoading(false);
//   }, [projectId]);

//   // Get next and previous projects for navigation
//   const getAdjacentProjects = () => {
//     if (!project) return { next: null, prev: null };
    
//     const currentIndex = projectsData.findIndex(p => p.id === project.id);
//     const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
//     const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;
    
//     return { prev: prevProject, next: nextProject };
//   };

//   const { prev, next } = getAdjacentProjects();

//   // Handle keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === 'ArrowLeft' && prev) {
//         navigate(`/projects/${prev.id}`);
//       } else if (e.key === 'ArrowRight' && next) {
//         navigate(`/projects/${next.id}`);
//       }
//     };
    
//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [prev, next, navigate]);

//   // Scroll to top when project changes
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [projectId]);

//   if (loading) {
//     return (
//       <div className="bg-white text-black min-h-screen flex justify-center items-center">
//         <div className="animate-pulse flex flex-col items-center">
//           <div className="h-8 bg-gray-200 rounded w-60 mb-4"></div>
//           <div className="h-96 bg-gray-200 rounded w-full max-w-4xl"></div>
//         </div>
//       </div>
//     );
//   }

//   if (!project) {
//     return (
//       <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center py-16 px-6 md:px-12">
//         <h1 className="text-4xl font-bold">Project Not Found</h1>
//         <p className="mt-4">Sorry, we couldn't find the project you're looking for.</p>
//         <Link to="/projects" className="mt-8 bg-black text-white px-6 py-3 rounded-lg">
//           View All Projects
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white text-black min-h-screen">
//       {/* Header with fixed navigation */}
//       <nav className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
//         <div className="max-w-8xl mx-auto px-6 py-4 flex justify-between items-center">
//           <Link to="/projects" className="text-black hover:text-gray-600 transition">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M19 12H5M12 19l-7-7 7-7"/>
//             </svg>
//           </Link>
          
//           <div className="flex space-x-6">
//             <button 
//               onClick={() => setActiveSection("overview")}
//               className={`${activeSection === "overview" ? "text-black font-semibold" : "text-gray-500"} hover:text-black transition`}
//             >
//               Overview
//             </button>
//             <button 
//               onClick={() => setActiveSection("features")}
//               className={`${activeSection === "features" ? "text-black font-semibold" : "text-gray-500"} hover:text-black transition`}
//             >
//               Features
//             </button>
//             <button 
//               onClick={() => setActiveSection("results")}
//               className={`${activeSection === "results" ? "text-black font-semibold" : "text-gray-500"} hover:text-black transition`}
//             >
//               Results
//             </button>
//             <button 
//               onClick={() => setActiveSection("visuals")}
//               className={`${activeSection === "visuals" ? "text-black font-semibold" : "text-gray-500"} hover:text-black transition`}
//             >
//               Visuals
//             </button>
//           </div>
          
//           <div className="flex space-x-2">
//             {prev && (
//               <Link to={`/projects/${prev.id}`} className="text-gray-500 hover:text-black transition p-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M15 18l-6-6 6-6"/>
//                 </svg>
//               </Link>
//             )}
//             {next && (
//               <Link to={`/projects/${next.id}`} className="text-gray-500 hover:text-black transition p-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M9 18l6-6-6-6"/>
//                 </svg>
//               </Link>
//             )}
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="max-w-8xl mx-auto px-6 py-8 md:px-12 lg:px-16">
//         {/* Project Meta */}
//         <div className="max-w-3xl mx-auto text-center mb-12">
//           <div className="flex justify-center items-center space-x-2 mb-4">
//             <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
//               {project.category}
//             </span>
//             <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
//               {project.subcategory}
//             </span>
//             <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
//               {project.date}
//             </span>
//           </div>
//           <h1 className="text-5xl font-bold mb-6">{project.title}</h1>
//         </div>

//         {/* Hero Image */}
//         <div className="max-w-6xl mx-auto mb-16 relative group">
//           <img 
//             src={project.image} 
//             alt={`${project.title} Mockup`} 
//             className="w-full rounded-xl shadow-lg object-cover" 
//             style={{ maxHeight: "600px" }}
//             onError={(e) => {
//               e.target.onerror = null;
//               e.target.src = "/api/placeholder/1200/600"; // Fallback image
//             }}
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-xl"></div>
//         </div>

//         {/* Content Sections */}
//         <div className="max-w-4xl mx-auto">
//           {/* Overview Section */}
//           <section className={`mb-20 ${activeSection !== "overview" && activeSection !== "all" ? "hidden" : ""}`} id="overview">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//               <div>
//                 <h2 className="text-2xl font-semibold mb-4 inline-block relative">
//                   Background
//                   <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-200"></span>
//                 </h2>
//                 <p className="text-gray-700 leading-relaxed">
//                   {project.background}
//                 </p>
//               </div>
              
//               <div>
//                 <h2 className="text-2xl font-semibold mb-4 inline-block relative">
//                   Core Problem
//                   <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-200"></span>
//                 </h2>
//                 <p className="text-gray-700 leading-relaxed">
//                   {project.coreProblem}
//                 </p>
//               </div>
//             </div>

//             <div className="mt-16">
//               <h2 className="text-2xl font-semibold mb-6 inline-block relative">
//                 The Approach
//                 <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-200"></span>
//               </h2>
//               <p className="text-gray-700 mb-8 leading-relaxed">
//                 Our goal was to create an innovative solution to address these challenges.
//               </p>
              
//               <div className="bg-gray-50 p-8 rounded-xl">
//                 <h3 className="text-xl font-semibold mb-6">Steps Taken</h3>
//                 <div className="space-y-6">
//                   {project.approach.steps.map((step, index) => (
//                     <div key={index} className="flex items-start">
//                       <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
//                         {index + 1}
//                       </div>
//                       <p className="text-gray-700 mt-1">{step}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Features Section */}
//           <section className={`mb-20 ${activeSection !== "features" && activeSection !== "all" ? "hidden" : ""}`} id="features">
//             <h2 className="text-3xl font-bold mb-10 text-center">Key Features</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {project.keyFeatures.map((feature, index) => (
//                 <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300">
//                   <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-4">
//                     {index + 1}
//                   </div>
//                   <h3 className="text-xl font-semibold mb-3">{feature}</h3>
//                   <p className="text-gray-600">
//                     {/* Feature description would go here if available in the data */}
//                     Enhancing user experience through innovative technology solutions.
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Results Section */}
//           <section className={`mb-20 ${activeSection !== "results" && activeSection !== "all" ? "hidden" : ""}`} id="results">
//             <h2 className="text-3xl font-bold mb-10 text-center">Results & Impact</h2>
//             <div className="bg-gray-50 p-8 rounded-xl">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {project.impact.metrics.map((metric, index) => (
//                   <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
//                     <h3 className="text-2xl font-bold mb-2 text-gray-800">{metric.split(' ')[0]}</h3>
//                     <p className="text-gray-600">{metric.split(' ').slice(1).join(' ')}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Visuals Section */}
//           <section className={`mb-20 ${activeSection !== "visuals" && activeSection !== "all" ? "hidden" : ""}`} id="visuals">
//             <h2 className="text-3xl font-bold mb-10 text-center">Project Visuals</h2>
//             {project.visualImages && project.visualImages.length > 0 ? (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {project.visualImages.map((img, index) => (
//                   <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
//                     <img 
//                       src={img} 
//                       alt={`${project.title} Visual ${index + 1}`}
//                       className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
//                       onError={(e) => {
//                         e.target.onerror = null;
//                         e.target.src = "/api/placeholder/600/400"; // Fallback image
//                       }}
//                     />
//                     <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="text-center text-gray-500">
//                 <p>No visual assets available for this project.</p>
//               </div>
//             )}
//           </section>
//         </div>

//         {/* Call to Action */}
//         <div className="max-w-3xl mx-auto text-center mt-12 mb-16 bg-gray-50 p-12 rounded-xl">
//           <h2 className="text-3xl font-bold mb-6">Ready to Collaborate?</h2>
//           <p className="text-gray-700 mb-8 max-w-xl mx-auto">
//             Let's work together to build something extraordinary that meets your business needs.
//           </p>
//           <Link to={project.cta.link}>
//             <button className="bg-black text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-300">
//               {project.cta.text}
//             </button>
//           </Link>
//         </div>

//         {/* Navigation between projects */}
//         <div className="max-w-6xl mx-auto flex justify-between items-center border-t border-gray-200 pt-8 mt-12">
//           {prev ? (
//             <Link to={`/projects/${prev.id}`} className="flex items-center group">
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 group-hover:-translate-x-1 transition-transform duration-300">
//                 <path d="M15 18l-6-6 6-6"/>
//               </svg>
//               <div>
//                 <p className="text-sm text-gray-500">Previous Project</p>
//                 <p className="font-medium group-hover:text-black transition-colors">{prev.title}</p>
//               </div>
//             </Link>
//           ) : (
//             <div></div>
//           )}
          
//           <Link to="/projects" className="text-gray-500 hover:text-black transition-colors">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <rect x="3" y="3" width="7" height="7" />
//               <rect x="14" y="3" width="7" height="7" />
//               <rect x="14" y="14" width="7" height="7" />
//               <rect x="3" y="14" width="7" height="7" />
//             </svg>
//           </Link>
          
//           {next ? (
//             <Link to={`/projects/${next.id}`} className="flex items-center text-right group">
//               <div>
//                 <p className="text-sm text-gray-500">Next Project</p>
//                 <p className="font-medium group-hover:text-black transition-colors">{next.title}</p>
//               </div>
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
//                 <path d="M9 18l6-6-6-6"/>
//               </svg>
//             </Link>
//           ) : (
//             <div></div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;


import { Link2} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  duration: 0.4
};
const projectsData = [
  {
    id: "1",
    title: "Thynkr - AI Mock Interview & Learning Platform",
    date: "2024",
    category: "Education",
    subcategory: "AI Platform",
    background: "Thynkr is an AI-driven interview preparation platform that helps candidates hone their skills through mock interviews, expert-led courses, insightful blogs, and 1:1 mentoring.",
    coreProblem: "Existing platforms fail to offer dynamic AI-driven questions, expert mentorship, and comprehensive resources in a single platform.",
    approach: {
      steps: [
        "Developed AI-driven interview simulations with real-time feedback.",
        "Introducing expert-led courses",
        "Created a knowledge hub with insightful blogs and career resources.",
        "Enabled 1:1 mentoring for personalized career guidance."
      ]
    },
    keyFeatures: [
      "AI-powered Mock Interview",
      "Insightful Blogs & Resources",
      "Expert-Led Courses",
      "Personalized Career Guidance with 1:1 Mentorship"
    ],
    impact: {
      metrics: [
        "60% increase in interview success rates",
        "40% improvement in response confidence",
        "Higher retention through structured courses & mentorship"
      ]
    },
    cta: {
      text: "Start Your AI Mock Interview",
      link: "https://www.codenetra.com/"
    },
    image:"https://i.postimg.cc/k5zqttcn/Screenshot-2025-04-01-at-5-34-16-PM.png" ,
    visualImages: [

    ]
  },
  {
    id: "2",
    title: "Darth - AI Unified Chatbot",
    date: "2025",
    category: "AI Solutions",
    subcategory: "Product Showcase",
    background: "Darth is an AI-powered chatbot designed to provide seamless conversational experiences. It integrates multiple AI models to enhance memory, collaboration, and workflow automation.",
    coreProblem: "Traditional chatbots lack context retention and seamless multi-model integration, making interactions feel robotic and disconnected.",
    approach: {
      steps: [
        "Integrated multiple AI models to ensure seamless conversation flow.",
        "Implemented memory retention for better contextual understanding.",
        "Designed a unified chat experience across various platforms.",
        "Enhanced collaboration features for teams and businesses."
      ]
    },
    keyFeatures: [
      "Multi-AI Model Integration",
      "Persistent Memory for Context Retention",
      "Seamless Cross-Platform Communication",
      "Collaboration Tools for Team Workflow"
    ],
    impact: {
      metrics: [
        "30% increase in response accuracy",
        "40% improvement in user engagement",
        "Reduced redundant queries by 50%"
      ]
    },
    cta: {
      text: "Let's Build Something Amazing!",
      link: "https://darthai.tech/"
    },
    image: "https://i.ibb.co/zWdjQ5P6/Screenshot-2025-04-01-at-12-51-26-PM.png",
    visualImages: [
    ]
  },
  {
    id: "3",
    title: "NoCaptcha - Human Verification Reinvented",
    date: "2025",
    category: "Cybersecurity",
    subcategory: "Bot Detection & Fraud Prevention",
    background: "NoCaptcha is an advanced human verification system that replaces traditional CAPTCHAs with behavioral analysis, AI-driven detection, and seamless user experience.",
    coreProblem: "Traditional CAPTCHAs are frustrating for users and often bypassed by bots using automation, leading to security risks and poor accessibility.",
    approach: {
      steps: [
        "Implemented AI-based behavioral analysis to differentiate humans from bots.",
        "Analyzed mouse movements, keyboard input, and interaction patterns.",
        "Developed a frictionless verification process for real users.",
        "Integrated with multiple platforms to prevent bot attacks."
      ]
    },
    keyFeatures: [
      "AI-powered Behavioral Analysis",
      "Real-Time Human vs. Bot Detection",
      "Seamless and Frictionless User Experience",
      "Multi-Platform Security Integration"
    ],
    impact: {
      metrics: [
        "90% reduction in bot-driven fraud attempts",
        "50% improvement in user experience vs. traditional CAPTCHAs",
        "Increased security for online services and transactions"
      ]
    },
    cta: {
      text: "Enhance Your Security Today!",
      link: "https://www.nocaptcha.tech/"
    },
    image: "https://i.ibb.co/Z5Swpx6/Screenshot-2025-04-01-at-12-56-16-PM.png",
    visualImages: [

    ]
  },
  {
    id: "4",
    title: "DarkVerse - An Immersive Digital Experience",
    date: 2024,
    category: "Web & UI/UX",
    subcategory: "Immersive Design & Animations",
    background: "DarkVerse is an award-winning website that leverages immersive animations and seamless transitions to enhance user experience. It secured 1st place among 50+ teams in a design challenge.",
    coreProblem: "Traditional websites often lack engaging animations and smooth transitions, leading to a static and unappealing user experience. Additionally, poor performance optimization can result in slow load times.",
    approach: {
      steps: [
        "Developed a fully immersive experience using React.js and GSAP animations.",
        "Optimized performance with code-splitting and WebP image formats to reduce load time.",
        "Designed and validated user interactions using Figma prototypes before implementation.",
        "Ensured smooth transitions and animations to improve usability and engagement."
      ]
    },
    keyFeatures: [
      "GSAP-powered animations for fluid interactions",
      "Optimized media assets for faster load times",
      "Seamless page transitions for a dynamic experience",
      "User-validated designs with Figma prototypes"
    ],
    impact: {
      metrics: [
        "35% improved usability",
        "20% higher task completion rates",
        "15% faster load times"
      ]
    },
    cta: {
      text: "Visit DarkVerse",
      link: "https://dark-verse-six.vercel.app/"
    },
    image: "https://i.postimg.cc/7YZWy4Dg/Screenshot-2025-04-03-at-6-53-43-PM.png",
    visualImages: []
  },
  {
    id: "5",
    title: "Farmer To Customer - Bridging the Gap",
    date: "2025",
    category: "AgriTech",
    subcategory: "E-commerce & Supply Chain",
    background: "Farmer To Customer is a direct farm-to-table platform that connects farmers with consumers, eliminating middlemen and ensuring fresh, organic produce at fair prices.",
    coreProblem: "Farmers struggle with low profit margins due to middlemen, while consumers face high prices and limited access to fresh, organic produce.",
    approach: {
      steps: [
        "Developed a direct marketplace for farmers to sell produce without intermediaries.",
        "Implemented AI-powered demand prediction for optimized supply management.",
        "Integrated digital payments and logistics tracking for seamless transactions.",
        "Created a rating & review system for transparency and trust."
      ]
    },
    keyFeatures: [
      "Direct Farmer-to-Customer Marketplace",
      "Fresh Produstc Directly From Farms",
      "Secure Digital Payments & Logistics Integration",
      "Quality Assurance with Reviews & Ratings"
    ],
    impact: {
      metrics: [
        "30% increase in farmer earnings by eliminating middlemen",
        "20% reduction in consumer costs for fresh produce",
        "Enhanced food quality & traceability for customers"
      ]
    },
    cta: {
      text: "Support Farmers & Enjoy Fresh Produce!",
      link: "https://farmer2customer.vercel.app/"
    },
    image: "https://i.ibb.co/7J3ZLzks/Screenshot-2025-04-01-at-3-23-17-PM.png",
    visualImages: [
      
    ]
  },
  {
    id: "6",
    title: "Saviskar - The Ultimate Fest",
    date: 2025,
    category: "Event Management & Tech Festival",
    subcategory: "Web Development, UI/UX, and Animations",
    background: "Saviskar is a dynamic event management platform designed for tech festivals. It streamlines event registrations, schedules, and real-time updates while integrating immersive animations for an engaging user experience.",
    coreProblem: "Managing a large-scale tech fest involves handling registrations, schedules, and announcements efficiently. Traditional methods often lead to delays, miscommunication, and poor user experience.",
    approach: {
      steps: [
        "Developed a feature-rich platform using React.js and Tailwind CSS for a sleek UI.",
        "Integrated real-time updates and notifications for event schedules and changes.",
        "Implemented a user-friendly registration system with automated confirmation emails.",
        "Utilized Framer Motion & GSAP for immersive animations and interactive UI elements.",
        "Designed a dedicated hackathon section to manage registrations, teams, and submissions."
      ]
    },
    keyFeatures: [
      "Real-time event updates and notifications",
      "Seamless participant registration system",
      "Dedicated hackathon management module",
      "Visually engaging UI with Framer Motion & GSAP animations",
      "Fully responsive design for all devices"
    ],
    impact: {
      metrics: [
        "40% increase in event registrations due to seamless UX",
        "30% faster event updates and announcements",
        "20% higher engagement in hackathons due to interactive features",
        "Enhanced participant experience through smooth animations and transitions"
      ]
    },
    cta: {
      text: "Explore Saviskar",
      link: "https://saviskar.vercel.app/"
    },
    image: "https://i.postimg.cc/KjM41whQ/Screenshot-2025-04-03-at-7-00-08-PM.png",
    visualImages: []
  }
];

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(null);
  
  // Find project when component mounts or projectId changes
  useEffect(() => {
    const foundProject = projectsData.find(p => p.id === projectId);
    setProject(foundProject);
    setLoading(false);
  }, [projectId]);

  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // Delay slightly
  
    return () => clearTimeout(timeout);
  }, [projectId]);

  if (loading) {
    return (
      <div className="bg-white text-black min-h-screen flex justify-center items-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 bg-gray-200 rounded w-60 mb-4"></div>
          <div className="h-96 bg-gray-200 rounded w-full max-w-4xl"></div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center py-16 px-6 md:px-12">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <p className="mt-4">Sorry, we couldn't find the project you're looking for.</p>
        <Link to="/projects" className="mt-8 bg-black text-white px-6 py-3 rounded-lg">
          View All Projects
        </Link>
      </div>
    );
  }

  return (
    <motion.div
    variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
     className="bg-white w-screen text-black min-h-screen">
      {/* Header with fixed navigation */}
      <nav className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="sm:max-w-8xl w-full mx-auto sm:px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-black hover:text-gray-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </Link>
          
          <div className="flex space-x-3 pl-1 text-xs sm:text-base sm:space-x-6">
            <a 
              href="#overview"
              className="text-gray-500 hover:text-black transition"
            >
              Overview
            </a>
            <a 
              href="#features"
              className="text-gray-500 hover:text-black transition"
            >
              Features
            </a>
            <a 
              href="#results"
              className="text-gray-500 hover:text-black transition"
            >
              Results
            </a>
            <a 
              href="#visuals"
              className="text-gray-500 hover:text-black transition"
            >
              Website Link
            </a>
          </div>
          
          <div className="w-8">
            {/* Empty div for flex spacing */}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-8xl mx-auto px-6 py-8 md:px-12 lg:px-16">
        {/* Project Meta */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
              {project.category}
            </span>
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
              {project.subcategory}
            </span>
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
              {project.date}
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-6">{project.title}</h1>
          <div className="flex justify-center items-center space-x-2">
          <div className="bg-gray-100 flex gap-3 rounded-full py-1 px-3">
          <Link2/>
         <a href={project.cta.link} target="_blank">
           <p className="text-gray-900 cursor-pointer">Visit Website</p>
         </a>
          </div>
        </div>
        </div>
        {/* Hero Image */}
        <div className="max-w-6xl mx-auto mb-16 rounded-3xl relative group">
          <img 
            src={project.image} 
            alt={`${project.title} Mockup`} 
            className="w-full h-full object-contain" 
            style={{ maxHeight: "600px" }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/api/placeholder/1200/600"; // Fallback image
            }}
          />
          <div className=""></div>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto">
          {/* Overview Section */}
          <section className="mb-20" id="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4 inline-block relative">
                  Background
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-200"></span>
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {project.background}
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4 inline-block relative">
                  Core Problem
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-200"></span>
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {project.coreProblem}
                </p>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-semibold mb-6 inline-block relative">
                The Approach
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-200"></span>
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Our goal was to create an innovative solution to address these challenges.
              </p>
              
              <div className="bg-gray-100 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-6">Steps Taken</h3>
                <div className="space-y-6">
                  {project.approach.steps.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 mt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-20" id="features">
            <h2 className="text-3xl font-bold mb-10 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.keyFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature}</h3>
                  <p className="text-gray-600">
                    {/* Feature description would go here if available in the data */}
                    Enhancing user experience through innovative technology solutions.
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Results Section */}
          <section className="mb-20" id="results">
            <h2 className="text-3xl font-bold mb-10 text-center">Results & Impact</h2>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.impact.metrics.map((metric, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">{metric.split(' ')[0]}</h3>
                    <p className="text-gray-600">{metric.split(' ').slice(1).join(' ')}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Visuals Section */}
          {/* <section className="mb-20" id="visuals">
            <h2 className="text-3xl font-bold mb-10 text-center">Project Visuals</h2>
            {project.visualImages && project.visualImages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.visualImages.map((img, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
                    <img 
                      src={img} 
                      alt={`${project.title} Visual ${index + 1}`}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/api/placeholder/600/400"; // Fallback image
                      }}
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500">
                <p>No visual assets available for this project.</p>
              </div>
            )}
          </section> */}
        </div>

        {/* Call to Action */}
        <div className="max-w-3xl mx-auto text-center mt-12 mb-16 bg-gray-50 p-12 rounded-xl">
          <h2 className="text-3xl font-bold mb-6">Visit Website</h2>
          <p className="text-gray-700 mb-8 max-w-xl mx-auto">
            Let's work together to build something extraordinary that meets your business needs.
          </p>
          <Link to={project.cta.link}>
            <button className="bg-black text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-300">
              {project.cta.text}
            </button>
          </Link>
        </div>

        {/* Back to Projects button */}
        {/* <div className="max-w-6xl mx-auto flex justify-center border-t border-gray-200 pt-8 mt-12">
          <Link to="/projects" className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            View All Projects
          </Link>
        </div> */}
      </div>
    </motion.div>
  );
};

export default ProjectDetails;





