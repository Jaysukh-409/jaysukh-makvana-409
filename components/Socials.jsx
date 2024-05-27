import Link from "next/link";
import { FaGithub, FaYoutube } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Jaysukh-409" },
  {
    icon: <FaYoutube />,
    path: "https://www.youtube.com/channel/UCV7MEJplFhl549xVHDvgwyw",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
