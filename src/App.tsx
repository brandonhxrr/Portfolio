import { useState } from 'react';
import Header from './hero/Header';
import MainContent from './hero/MainContent';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Community', href: '#community' },
  { name: 'Contact', href: '#contact' },
];

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <Header navigation={navigation} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <MainContent />
    </div>
  );
};

export default App;
