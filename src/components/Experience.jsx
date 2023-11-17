import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import {SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion'



const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff'}}
    contentArrowStyle={{ borderRight: '7px solid #232631'}}
    date={experience.date}
    iconStyle={{background: experience.iconBg}}
      //  Creates icon for each experience
    icon={
      // centers icon
      <div className="flex justify-center mt-3">
        <img 
          src={experience.icon}
          alt={experience.company}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text=[20px] font-bold"></h3>
      <p className="text-secondary text-[16px] font-semibold">{experience.company_name}</p>
      {/* Creates a list of points for each experience */}
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {/* // Maps through each point in the experience */}
        {experience.points.map((point, index) => (
          <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>

        ))}


      </ul>

    </div>

  </VerticalTimelineElement>
)

const Experience = () => {
  return (
  <>
  {/* This motion div animates the p-[tag] and the h2-tag */}
   <motion.div
   variants={textVariant()}>
     <p className={styles.sectionSubText}>What I Have Done So Far</p>
      <h2 className={styles.sectionHeadText}>Work Experience</h2>

   </motion.div>

  {/* This creates the vertical timeline which is a component from react-vertical-timeline-component */}
   <div className="mt-20 flex flex-col">
    <VerticalTimeline>
      {experiences.map((experience, index) => (
        <ExperienceCard 
        key={index} 
        experience={experience} 
        />
      ))}
    </VerticalTimeline>
   </div>
  </>
  );
};

export default SectionWrapper(Experience, "work");