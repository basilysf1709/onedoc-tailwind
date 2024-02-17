import { Tailwind } from "@onedoc/react-print";
import { Mulish } from 'next/font/google'

import { SiAndroid, SiTailwindcss, SiGo, SiCplusplus, SiTypescript, SiJavascript, SiPython, SiPostgresql, SiHtml5, SiCss3, SiReact, SiJquery, SiSpring, SiAmazonaws, SiMicrosoftazure, SiJenkins, SiKubernetes, SiDocker, SiGit, SiJira } from 'react-icons/si';
import { MdEmail, MdLocationOn, MdOutlineMail } from "react-icons/md";
import { FaExternalLinkAlt, FaJava, FaLinkedin } from "react-icons/fa";
 
const mulish = Mulish({ subsets: ['latin'] })

 const Page = () => { return (
        <div className={`main flex flex-col ${mulish.className}`}>
         <div className="starting-info flex flex-col p-[15px]  border-b-2 border-black">
                <span className="name text-3xl font-semibold text-[#0a66c2] mb-[5px]">John Doe</span>
                <span className="posn text-xl font-semibold text-[gray] mb-[5px]">Business Development Manager</span>
                <span className="description text-lg font-semibold">
                    Business Development Manager with more than four years of experience in the business development processes.
                    Involved in product testing , management and development of new business opportunities.
                </span>
         </div>
         <div className="contact flex p-[15px] justify-evenly border-black border-b-2 font-semibold">
             <div className="mail flex items-center ">
                 <MdEmail className="text-2xl text-[#0a66c2] mr-[4px]"/>
                 <span>johndoe@gmail.com</span>
             </div>
             <div className="location flex  items-center ">
                 <MdLocationOn className="text-2xl text-[#0a66c2] mr-[4px]" />
                 <span>New York,USA</span>
             </div>
             <div className="linkedin flex items-center ">
                 <FaLinkedin className="text-2xl text-[#0a66c2] mr-[4px]" />
                 <span>linkedin.com/in/johndoe</span>
             </div>
         </div>
         <div className="skills p-[15px] flex flex-col  border-black border-b-2">
             <span className="text-2xl text-[#0a66c2] font-bold">SKILLS</span>
             <div className="and-they-are flex flex-wrap  ">
                 {skillsArray.map((item) =>
                     (<SpecificSkill name={item} />))}
             </div>
         </div>
         <div className="work-exp p-[15px] flex flex-col ] border-black border-b-2">
             <span className="text-2xl text-[#0a66c2] font-bold mb-[7px]">WORK EXPERIENCE</span>
             <div className="wexp-1 flex flex-col ">
                 <span className="text-2xl font-bold mb-[5px]">Business Development Manager</span>
                 <span className="text-2xl  flex  items-center mb-[5px]">
                     <span className="mr-[6px]">AirState Solutions</span>
                     <a href="/"><FaExternalLinkAlt className="text-xl text-[#0a66c2]"/></a>
                 </span>
                 <div className="dates flex text-[gray] font-semibold mb-[5px]">
                     <span className="mr-[20px]"><i>09/2014-06/2017</i></span>
                     <span><i>New York , USA</i></span>
                 </div>
                 <div className="what-he-did flex flex-col  font-semibold mb-[20px]">
                     <div className="w1 flex mb-[5px]">
                         <span className="text-[#0a66c2]">-</span>
                         <span>Successfully managed 2-3 million dollar budget projects and successfully achieved the project scheduled goals.</span>
                     </div>
                     <div className="w2 flex mb-[5px]">
                         <span className="text-[#0a66c2]">-</span>
                         <span>Developed and implemented new amrketing and sales plans and defined the strategy for the next 5 years</span>
                     </div>
                     <div className="w3 flex mb-[5px]">
                         <span className="text-[#0a66c2]">-</span>
                         <span>Reviewed constantly the customer feedback and then suggested ways to improve the processes and customer service levels which increased the satisfaction rate from 81% to 95%</span>
                     </div>
                     <div className="w4 flex mb-[5px]">
                         <span className="text-[#0a66c2]">-</span>
                         <span>Ensured that new clients will grow into a loyal customer base in a specialist niche market by implementing a new loyalty program</span>
                     </div>
                 </div>
             </div>
             <div className="wexp-2 flex flex-col ">
                 <span className="text-2xl font-bold mb-[5px]">Business Development Manager</span>
                 <span className="text-2xl  flex  items-center mb-[5px]">
                     <span className="mr-[6px]">AirState Solutions</span>
                     <a href="/"><FaExternalLinkAlt className="text-xl text-[#0a66c2]"/></a>
                 </span>
                 <div className="dates flex text-[gray] mb-[5px] font-semibold">
                     <span className="mr-[20px]"><i>08/2012-09/2017</i></span>
                     <span><i>New York , USA</i></span>
                 </div>
                 <div className="what-he-did flex flex-col  font-semibold">
                     <div className="w1 flex mb-[5px]">
                         <span className="text-[#0a66c2]">-</span>
                         <span>Increased the customer satisfaction rate by 25% by improving the customer service.</span>
                     </div>
                     <div className="w2 flex mb-[5px]">
                         <span className="text-[#0a66c2]">-</span>
                         <span>Planned , supervised and coordinated daily activity of 3 junior business analysts.</span>
                     </div>
                     <div className="w3 flex mb-[5px]">
                         <span className="text-[#0a66c2]">-</span>
                         <span>Improved the communication with the Marketing department to betetr understand the competitive position.</span>
                     </div>
                     <div className="w4 flex mb-[5px]">
                         <span className="text-[#0a66c2]">-</span>
                         <span>Directed the creation and implemntation of a Business Continuity Plan and the management of audit programs.</span>
                     </div>
                 </div>
             </div>
         </div>
         <div className="education p-[15px] flex flex-col ] border-black border-b-2">
             <span className="text-2xl text-[#0a66c2] font-bold">EDUCATION</span>
             <div className="schooling flex flex-col" >
                 <span className="text-2xl font-bold">MSc in Economics and Business Administration</span>
                 <span className="text-2xl font-semibold">The University of Chicago</span>
                 <span className="text-[gray]"><i>09/2008-06/2010</i></span>
             </div>
         </div>
         <div className="organizations p-[15px] flex flex-col ] border-black border-b-2">
             <span className="text-2xl text-[#0a66c2] font-bold">ORGANIZATIONS</span>
             <div className="flex-wrap flex justify-between  font-semibold">
                 <div className="org1 flex flex-col mb-[5px]">
                     <span>American Management Association</span>
                     <span>(2015-Present)</span>
                 </div>
                 <div className="org2 flex flex-col">
                     <span>Association of Private Enterprise Education</span>
                     <span>(2014-Present)</span>
                 </div>
                 <div className="org3 flex flex-col">
                     <span>eBusiness Association (eBA)</span>
                     <span>(2013-Present)</span>
                 </div>
             </div>
         </div>
         <div className="languages p-[15px] flex flex-col">
             <span className="text-2xl text-[#0a66c2] font-bold">LANGUAGES</span>
             <div className="what-are-the-lang flex font-semibold justify-evenly">
                 <div className="lang1 flex flex-col">
                     <span>English</span>
                     <span className="text-md text-[#0a66c2]"><i>Native or Bilingual Proficiency</i></span>
                 </div>
                 <div className="lang2 flex flex-col">
                     <span>Spanish</span>
                     <span className="text-md text-[#0a66c2]"><i>Full Professional Proficiency</i></span>
                 </div>
                 <div className="lang3 flex flex-col">
                     <span>French</span>
                     <span className="text-md text-[#0a66c2]"><i>Limited Working Proficiency</i></span>
                 </div>
             </div>
         </div>
    </div>
)
};

export default Page;

const skillsArray = ["SEO", "Public Speaking", "Negotiation", "Teamwork", "Decision Making", "Research and Strategy", "Emotional Intelligence", "Outbound Marketing", "Email Marketing", "Google Analytics"];

const SpecificSkill = ({name}) => {
    return (
        <div className="p-1 px-2 w-fit rounded text-white bg-[#0a66c2] mr-[6px] mb-[6px]">
            {name}
        </div>
    )
}