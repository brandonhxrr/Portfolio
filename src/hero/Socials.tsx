import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const socials = [
  { href: "https://linkedin.com/in/brandonhxrr", icon: FaLinkedin },
  { href: "https://github.com/brandonhxrr", icon: FaGithub },
  { href: "https://x.com/brandonhxrr", icon: FaXTwitter },
];

function Socials() {
  const getItems = () =>
    socials.map(({ href, icon: Icon }) => (
      <li key={href}>
        <a href={href} target="_blank" rel="noreferrer">
          <Icon className="mx-4" />
        </a>
      </li>
    ));

  return <ul className="text-white flex pt-10 sm:p-10 text-2xl">{getItems()}</ul>;
}

export { Socials };
