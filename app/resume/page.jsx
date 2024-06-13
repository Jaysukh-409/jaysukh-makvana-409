"use client";

import {
  FaHtml5,
  FaPython,
  FaJs,
  FaReact,
  FaExternalLinkAlt,
  FaCss3,
} from "react-icons/fa";
import { TbBrandCpp, TbBrandFlutter } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import {
  SiDart,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Link from "next/link";

// About Data
const about = {
  title: "About Me",
  description: "Hello, This is about me.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Jaysukh Makvana",
    },
    {
      fieldName: "Location",
      fieldValue: "Surat, Gujarat",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, Gujarati",
    },
    {
      fieldName: "Current Status",
      fieldValue: "Final Year Student at IIT Jodhpur",
    },
  ],
};

// Experience Data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Experience",
  description: "Experience Description",
  items: [
    {
      company: "Google Summer of Code 2024 (Stdlib)",
      position: "Open Source Contributor",
      timeperiod: "May 2024 - August 2024",
      description:
        "I proposed adding support for boolean arrays in stdlib. Unlike complex64 array, boolean array will be backed by uint8Array and integrated throughout stdlib namespaces like array, strided and ndarray.",
    },
    {
      company: "Stdlib",
      position: "JavaScript Developer / Open Source Contributor",
      timeperiod: "December 2023 - Present",
      description:
        "Successfully opened 60+ PR for different type of prototypes that are present in any array/typed array for Complex64 and Complex128 array. Also, contributed some prototypes for the string.",
    },
    {
      company: "IIT Jodhpur",
      position: "Android Developer",
      timeperiod: "May 2023 - July 2023",
      description:
        "Developed a multi-platfrom app that tracks user's health data and predicts current activity via GyroSensor and Accelerometer of Galaxy Watch 4.",
    },
  ],
};

// Education Data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Education",
  description: "Education Description",
  items: [
    {
      institute: "Indian Institute of Technology, Jodhpur",
      degree: "B.Tech in Computer Science",
      grade: "7.08/10",
      timeperiod: "2021 - 2025",
    },
    {
      institute: "Ashadeep Science Bhavan",
      degree: "Higher Secondary (GSEB)",
      grade: "91.40 %",
      timeperiod: "2019 - 2021",
    },
    {
      institute: "Samarpan High School",
      degree: "Secondary (GSEB)",
      grade: "94.17 %",
      timeperiod: "2017 - 2019",
    },
  ],
};

// Skills Data
const skills = {
  title: "Skills",
  description: "Skills Description",
  skillList: [
    {
      icon: <TbBrandCpp />,
      name: "C++",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <SiDart />,
      name: "Dart",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <TbBrandFlutter />,
      name: "Flutter",
    },
    {
      icon: <IoLogoFirebase />,
      name: "Firebase",
    },
    {
      icon: <SiNumpy />,
      name: "Numpy",
    },
    {
      icon: <SiPandas />,
      name: "Pandas",
    },
    {
      icon: <SiScikitlearn />,
      name: "Scikit-Learn",
    },
    {
      icon: <SiTensorflow />,
      name: "Tensorflow",
    },
    {
      icon: <SiPytorch />,
      name: "Pytorch",
    },
  ],
};

// Achievements Data
const achievements = {
  title: "Achievements",
  description: "Achievements Description",
  achievementList: [
    {
      boldText: "Specialist",
      text: "on Codeforces with Maximum Rating : 1506",
    },
    {
      boldText: "4-Star",
      text: "on Codechef with Maximum Rating : 1938",
    },
    {
      boldText: "Global Top 1.97% Rated Knight",
      text: "on Leetcode with Maximum Rating : 2099",
    },
    {
      boldText: "Institute Rank 45",
      text: "on GeeksforGeeks",
    },
    {
      boldText: "All India Rank 2449 & 99.79 Percentile",
      text: "in JEE Mains 2021 among 1.1 Million+ Students",
    },
  ],
};

// Courses Data
const courses = {
  title: "Courses",
  description: "Courses Description",
  courseList: [
    {
      name: "Design and Analysis of Algorithms",
      platform: "IIT Jodhpur",
    },
    {
      name: "Pattern Recognition & Machine Learning",
      platform: "IIT Jodhpur",
    },
    {
      name: "Data Structures & Algorithms",
      platform: "IIT Jodhpur",
    },
    {
      name: "Maths for Computing",
      platform: "IIT Jodhpur",
    },
    {
      name: "Operating Systems",
      platform: "IIT Jodhpur",
    },
    {
      name: "Computer Networks",
      platform: "IIT Jodhpur",
    },
    {
      name: "Database Systems",
      platform: "IIT Jodhpur",
    },
    {
      name: "Computer Architecture",
      platform: "IIT Jodhpur",
    },
    {
      name: "Software Engineering",
      platform: "IIT Jodhpur",
    },
    {
      name: "Computer Vision",
      platform: "IIT Jodhpur",
    },
    {
      name: "Cyber Security",
      platform: "IIT Jodhpur",
    },
    {
      name: "Principles of Programming Languages",
      platform: "IIT Jodhpur",
    },
    {
      name: "Cryptography",
      platform: "IIT Jodhpur",
    },
    {
      name: "Introduction to Computer Science",
      platform: "IIT Jodhpur",
    },
    {
      name: "Linear Algebra & Calculus",
      platform: "IIT Jodhpur",
    },
    {
      name: "Probability Statistics & Stochastic Process",
      platform: "IIT Jodhpur",
    },
  ],
};

// CP Profile
const cpProfile = {
  title: "Competitive Programming",
  description: "Competitive Programming Description",
  cpList: [
    {
      platform: "Codeforces",
      username: "jaysukh_409",
      link: "https://codeforces.com/profile/jaysukh_409",
    },
    {
      platform: "Leetcode",
      username: "jaysukh_409",
      link: "https://leetcode.com/u/jaysukh_409/",
    },
    {
      platform: "Codechef",
      username: "jaysukh_4_09",
      link: "https://www.codechef.com/users/jaysukh_4_09",
    },
    {
      platform: "GeeksforGeeks",
      username: "jaysukhmakvana2004",
      link: "https://www.geeksforgeeks.org/user/jaysukhmakvana2004/",
    },
    {
      platform: "AtCoder",
      username: "jaysukh_409",
      link: "https://atcoder.jp/users/jaysukh_409",
    },
    {
      platform: "Hackerearth",
      username: "jaysukh",
      link: "https://www.hackerearth.com/@jaysukh",
    },
  ],
};

// Certificate Data
const certificate = {
  title: "Certificates",
  description: "Certificates Description",
  certificateList: [
    {
      name: "Meta Hackercup 2023",
      description: "Secured Global rank 2018 in Meta Hackercup 2023 Round 2.",
      link: "https://www.facebook.com/codingcompetitions/hacker-cup/2023/certificate/1140493783215546",
    },
    {
      name: "Problem Solving (Intermediate)",
      description:
        "Completed Problem Solving (Intermediate) course on HackerRank.",
      link: "https://www.hackerrank.com/certificates/0af8ab51066e",
    },
    {
      name: "SQL (Basic)",
      description: "Completed the SQL (Basic) course on HackerRank.",
      link: "https://www.hackerrank.com/certificates/a09493006de3",
    },
    {
      name: "Python (Basic)",
      description: "Completed the Python (Basic) course on HackerRank.",
      link: "https://www.hackerrank.com/certificates/38376e0f1b4d",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="aboutme"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="aboutme">About Me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="cpprofile">CP Profiles</TabsTrigger>
            <TabsTrigger value="achievement">Achievements</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="certificate">Certificates</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* About Me */}
            <TabsContent
              value="aboutme"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p> */}
                <ul className="grid grid-cols-1 xl:grid-cols-1 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p> */}
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[300px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.timeperiod}</span>
                          <h3 className="text-2xl max-w-[564px] min-h-[40px] text-center lg:text-left">
                            {item.company}
                          </h3>
                          <span className="text-xl">{item.position}</span>
                          <span className="text-white/60">
                            {item.description}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p> */}
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.timeperiod}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.institute}
                          </h3>
                          <span>{item.degree}</span>
                          <span>Grade: {item.grade}</span>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p> */}
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Achievements */}
            <TabsContent value="achievement" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{achievements.title}</h3>
                {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {achievement.description}
                </p> */}
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                    {achievements.achievementList.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[62px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <p className="text-white/60">
                            <span className="text-accent">{item.boldText}</span>{" "}
                            {item.text}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Courses */}
            <TabsContent value="courses" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{courses.title}</h3>
                {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {courses.description}
                </p> */}
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                    {courses.courseList.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[62px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <p className="text-white/60">
                            <span className="text-accent">{item.name}</span>{" "}
                            {item.platform}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* CP Profiles */}
            <TabsContent value="cpprofile" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{cpProfile.title}</h3>
                {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {cpProfile.description}
                </p> */}
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                    {cpProfile.cpList.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[62px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <p className="text-white/60">
                            {item.platform + " "}
                            <Link className="text-accent" href={item.link}>
                              {item.username}
                            </Link>
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Certificates */}
            <TabsContent value="certificate" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{certificate.title}</h3>
                {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {certificate.description}
                </p> */}
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                    {certificate.certificateList.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[148px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <h3 className="text-xl max-w-[400px] min-h-[36px] text-center lg:text-left">
                            {item.name}
                          </h3>
                          <p className="text-white/60 min-h-[40px] text-center lg:text-left">
                            {item.description}
                          </p>
                          <Link href={item.link}>
                            <FaExternalLinkAlt />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
