import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';

// Creates a service card using framer motion
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5*index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
        {/* Inserts an icon in the service card */}
          <img src={icon} alt={title}
          className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

        </div>

      </motion.div>
    </Tilt>
   )
}

// Creates the About component user framer motion
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Innovative and ambitious biology graduate transitioning into tech.  
        Hands-on project experience building both front-end and back-end applications using JavaScript, React, Python, and SQL. 
        Looking to work full-time, part-time, or as an intern at a reputable and growing tech organization. I'm a skilled software developer with experience in HTMl, CSS,
        JavaScript, Python, and SQL. Expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. 
      </motion.p>
     <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
      <ServiceCard key={service.title} index={index} {...service} />
      ))}
     </div>
    </>
  );
};

// Wraps the About component with the SectionWrapper HOC
export default SectionWrapper(About, "about");