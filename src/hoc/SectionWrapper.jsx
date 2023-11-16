import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";




const SectionWrapper = (Component, idName) => 
 function HOC() {
  return (
    <motion.section
        // Will help animate cards
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        viewport={{ once: true, amount: 0.25 }}
        // Adds padding to cards so its away from the edge of the screen
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
         <Component />
   </motion.section>
  );
};

export default SectionWrapper;