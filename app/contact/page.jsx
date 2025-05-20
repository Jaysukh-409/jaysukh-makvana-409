"use client";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";

import Link from "next/link";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91 96629 53264",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "jaysukhmakvana2004@gmail.com",
    link: "mailto:jaysukhmakvana2004@gmail.com",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    description: "jaysukh-makvana",
    link: "https://www.linkedin.com/in/jaysukh-makvana/",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Surat, Gujarat, India",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Information */}
          <div className="flex-1 flex items-center justify-center order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {/* Phone */}
              <li className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:h-[72px] xl:w-[72px] text-2xl bg-#272727 text-accent rounded-md flex items-center justify-center">
                  <div className="text-[28px]">{info[0].icon}</div>
                </div>
                <div className="flex-1">
                  <p className="text-white/60">{info[0].title}</p>
                  <h3 className="text-xl">{info[0].description}</h3>
                </div>
              </li>
              {/* E-Mail */}
              <li className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:h-[72px] xl:w-[72px] text-2xl bg-#272727 text-accent rounded-md flex items-center justify-center">
                  <div className="text-[28px]">{info[1].icon}</div>
                </div>
                <div className="flex-1">
                  <p className="text-white/60">{info[1].title}</p>
                  <Link href={info[1].link} target="_blank">
                    <h3 className="text-xl">{info[1].description}</h3>
                  </Link>
                </div>
              </li>
              {/* LinkedIn */}
              <li className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:h-[72px] xl:w-[72px] text-2xl bg-#272727 text-accent rounded-md flex items-center justify-center">
                  <div className="text-[28px]">{info[2].icon}</div>
                </div>
                <div className="flex-1">
                  <p className="text-white/60">{info[2].title}</p>
                  <Link href={info[2].link} target="_blank">
                    <h3 className="text-xl">{info[2].description}</h3>
                  </Link>
                </div>
              </li>
              {/* Address */}
              <li className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:h-[72px] xl:w-[72px] text-2xl bg-#272727 text-accent rounded-md flex items-center justify-center">
                  <div className="text-[28px]">{info[3].icon}</div>
                </div>
                <div className="flex-1">
                  <p className="text-white/60">{info[3].title}</p>
                  <h3 className="text-xl">{info[3].description}</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
