"use client";

import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    num: "01",
    category: "Mobile Application Development",
    title: "Greenify",
    description:
      "An eco-conscious social platform that encourages users to engage in and share environmentally friendly activities. Users can upload photos of actions like planting trees, fostering a sense of community and motivation through shared impact. The app also provides a rich database of tree species from around the globe, allowing users to explore and learn more about the environment. To inspire continued participation, a new motivational quote is delivered each day, reinforcing the app’s mission to promote sustainability and green living.",
    stack: [{ name: "Flutter" }, { name: "Firebase" }, { name: "Dart" }],
    github: "https://github.com/Jaysukh-409/Greenify",
  },
  {
    num: "02",
    category: "Web Development",
    title: "Chat-Mate",
    description:
      "A real-time chat application that enables seamless and instant messaging between users through email-based connections. Users can send friend requests using the email address of another user, and once connected, engage in live one-on-one conversations. The platform ensures a smooth and responsive experience, with real-time updates and status synchronization. The project emphasizes both functionality and clean user interface design, focusing on efficient data handling and real-time communication to deliver a modern chat experience.",
    stack: [{ name: "NextJS" }, { name: "Redis" }, { name: "Tailwind CSS" }],
    github: "https://github.com/Jaysukh-409/Chat-Mate",
  },
  {
    num: "03",
    category: "Machine Learning",
    title: "Histopathologic Cancer Detection",
    description:
      "A deep learning project focused on detecting metastatic cancer in histopathologic tissue images. The solution involves building a fully convolutional Vision Transformer (ViT) from scratch using PyTorch, designed to classify over 220,000 microscopic RGB images with high precision. By leveraging the One Cycle Policy for optimized training and benchmarking against a ResNet-18 model, the custom ViT demonstrated competitive accuracy with significantly fewer parameters. The model learned to focus effectively on the image regions most indicative of cancerous cells, showcasing the potential of attention-based architectures in medical image analysis.",
    stack: [{ name: "Python" }, { name: "PyTorch" }, { name: "Tensorflow" }],
    github: "https://github.com/Jaysukh-409/Histopathologic-Cancer-Detection",
  }
];

const Work = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center px-10 mx-20 py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 gap-[60px]"
        >
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {project.num + " " + project.title}
                  </div>
                  <Link
                    href={project.github}
                    target="_blank"
                    className="w-[32px] h-[32px] border border-transparent rounded-full bg-transparent transition-all duration-500 flex justify-center items-center bg-accent group-hover:bg-accent"
                  >
                    <BsGithub className="text-3xl text-accent group-hover:text-primary transition-all duration-500" />
                  </Link>
                </div>
                <div className="text-lg text-white font-semibold">
                  {project.category}
                </div>
                <ul className="flex gap-4">
                  {project.stack.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-xl text-accent"
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
                <p className="text-white/60">{project.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
