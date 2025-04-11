// // components/PageTransition.jsx
// import { delay, motion } from "framer-motion";

// const easePower4InOut = [0.50, 0, 0.17, 1];

// const barVariants = {
//   initial: { height: "100%" },
//   animate: {
//     height: 0,
//     transition: { duration: 1, ease: easePower4InOut }
//   },
//   exit: {
//     scaleY: 0,
//     originY: "top",
//     transition: { duration: 1, ease: easePower4InOut }
//   },
// };

// const containerVariants = {
//   animate: {
//     transition: {
//       duration: 2,
//       staggerChildren: 0.06,
//       stagger: { amount: 0.5 },
//       ease: easePower4InOut,
//     },
//   },
//   exit: {
//     transition: {
//       duration: 0.8,                   // reduced overall exit duration
//       staggerChildren: 0.01,           // minimal delay between children
//       stagger: { amount: 0.1 }, 
//       staggerDirection: -1,
//       ease: easePower4InOut,
//     },
//   },
// };
// const PageTransition = () => {
//   return (
//     <motion.div
//       className="fixed top-0 left-0 w-full h-screen flex z-[9999] pointer-events-none"
//       variants={containerVariants}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//     >
//       {Array.from({ length: 10 }).map((_, index) => (
//         <motion.div
//           key={index}
//           variants={barVariants}
//           className="h-full w-[10vw] bg-black origin-top"
//         />
//       ))}
//     </motion.div>
//   );
// };

// export default PageTransition;


import { motion } from "framer-motion";

const easePower4InOut = [0.50, 0, 0.17, 1];

const barVariants = {
  initial: { height: "100%" },
  animate: {
    height: 0,
    transition: { duration: 1, ease: easePower4InOut }
  },
  exit: {
    scaleY: 0,
    originY: "top",
    transition: { duration: 1, ease: easePower4InOut }
  },
};

const containerVariants = {
  animate: {
    transition: {
      duration: 2,
      staggerChildren: 0.06,
      stagger: { amount: 0.5 },
      ease: easePower4InOut,
    },
  },
  exit: {
    transition: {
      duration: 0.8,
      staggerChildren: 0.01,
      stagger: { amount: 0.1 },
      staggerDirection: -1,
      ease: easePower4InOut,
    },
  },
};

const PageTransition = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen flex z-[9999] pointer-events-none"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {Array.from({ length: 10 }).map((_, index) => (
        <motion.div
          key={index}
          variants={barVariants}
          className="h-full w-[10vw] bg-black origin-top"
        />
      ))}
    </motion.div>
  );
};

export default PageTransition;