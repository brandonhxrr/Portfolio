import { useState, useEffect } from 'react';

const MainContent = () => {
  const [backgroundImage, setBackgroundImage] = useState(0);

  const imageList = [
    'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1576845304705-e95150fec467?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundImage(prev => (prev + 1) % imageList.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const backgroundImageUrl = ` linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${imageList[backgroundImage]}')`;

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8"
    style={{ backgroundImage: backgroundImageUrl, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
        <div className="relative isolate px-6 pt-14 lg:px-8 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-50 sm:text-7xl">
              Brandon Herrera
            </h1>
            <h2 className="text-xl font-bold text-slate-50 sm:text-4xl pt-4">
                Software engineer
            </h2>
            <h3 className="text-xs font-bold text-slate-50 sm:text-2xl m-1">
                @brandonhxrr
            </h3>
            <div className="mt-10 flex items-center justify-center">
              <a
                href="./files/Brandon_Herrera_resume.pdf"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Check my resume
              </a>
            </div>
          </div>
        </div>
        
    </div>
  );
};

export default MainContent;
