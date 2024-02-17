import { useState } from "react";
import Header from "./hero/Header";
import MainContent from "./hero/MainContent";
import Description from "./about/Description";
import { Skills } from "./skills/Skills";
import { Projects } from "./projects/Projects";
import { Contributions } from "./contributions/Contributions";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Community", href: "#community" },
  { name: "Contact", href: "#contact" },
];

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="">
      <Header
        navigation={navigation}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <MainContent />
      <Description />
      <Skills />
      <Projects />
      <Contributions />
    </div>
  );
};

export default App;
