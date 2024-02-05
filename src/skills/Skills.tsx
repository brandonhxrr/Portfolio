const skillsData = [
  { icon: "https://img.icons8.com/color/100/kotlin.png", name: "Kotlin" },
  {
    icon: "https://3.bp.blogspot.com/-VVp3WvJvl84/X0Vu6EjYqDI/AAAAAAAAPjU/ZOMKiUlgfg8ok8DY8Hc-ocOvGdB0z86AgCLcBGAsYHQ/s1600/jetpack%2Bcompose%2Bicon_RGB.png",
    name: "Jetpack Compose",
  },
  { icon: "https://img.icons8.com/color/100/python.png", name: "Python" },
  {
    icon: "https://img.icons8.com/color/100/null/java-coffee-cup-logo--v1.png",
    name: "Java",
  },
  { icon: "https://img.icons8.com/color/100/html-5--v1.png", name: "HTML" },
  { icon: "https://img.icons8.com/color/100/css3.png", name: "CSS" },
  {
    icon: "https://img.icons8.com/color/100/javascript.png",
    name: "JavaScript",
  },
  { icon: "https://img.icons8.com/color/100/c-programming.png", name: "C" },
  {
    icon: "https://img.icons8.com/color/100/c-plus-plus-logo.png",
    name: "C++",
  },
  { icon: "https://img.icons8.com/color/100/dart.png", name: "Dart" },
  { icon: "https://img.icons8.com/color/100/react-native.png", name: "React" },
  { icon: "https://img.icons8.com/color/100/django.png", name: "Django" },
  {
    icon: "https://img.icons8.com/color/100/intellij-idea.png",
    name: "IntelliJ IDEA",
  },
  {
    icon: "https://img.icons8.com/color/100/visual-studio-code-2019.png",
    name: "Visual Studio Code",
  },
  {
    icon: "https://img.icons8.com/color/100/android-studio--v3.png",
    name: "Android Studio",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Apache_NetBeans_Logo.svg/1776px-Apache_NetBeans_Logo.svg.png",
    name: "NetBeans",
  },
  { icon: "https://img.icons8.com/color/100/linux--v1.png", name: "Linux" },
  { icon: "https://img.icons8.com/color/100/bash.png", name: "Shell Script" },
  { icon: "https://img.icons8.com/color/100/git.png", name: "Git" },
  { icon: "https://img.icons8.com/fluency/100/github.png", name: "GitHub" },
  { icon: "https://img.icons8.com/fluency/100/my-sql.png", name: "MySQL" },
  { icon: "https://img.icons8.com/color/100/oracle-logo.png", name: "Oracle" },
  { icon: "https://img.icons8.com/color/100/figma.png", name: "Figma" },
  { icon: "https://img.icons8.com/color/100/adobe-xd.png", name: "Adobe Xd" },
  { icon: "https://img.icons8.com/color/100/azure-1.png", name: "Azure" },
  {
    icon: "https://img.icons8.com/color/100/google-cloud.png",
    name: "Google Cloud",
  },
  { icon: "https://img.icons8.com/color/100/firebase.png", name: "Firebase" },
];

function Skills() {
  return (
    <div className="h-screen w-screen bg-gray-950 text-center">
      <h1 className="text-6xl font-bold pt-20 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
        Skills
      </h1>
      <div className="flex p-10 sm:p-20 justify-center flex-wrap">
        {skillsData.map((skill, index) => (
          <div key={index} className="inline-flex p-3 sm:p-5">
            <img
              src={skill.icon}
              alt={`${skill.name} icon`}
              className="inline-block w-10 sm:w-10 pe-0 sm:pe-2"
            />
            <p className="text-lg text-white sm:inline-block self-center font-bold hidden">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Skills };
