import RepoCard from "react-repo-card";

const contributions = [
  {
    username: "skydoves",
    repository: "android-developer-roadmap",
  },
  {
    username: "searleser97",
    repository: "kardex2pdf",
  },
  {
    username: "brandonhxrr",
    repository: "taller-pull-request",
  },
];

function Contributions() {
  return (
    <div className="h-auto w-screen bg-gray-950 text-center">
      <h1 className="text-6xl font-bold mt-20 p-3 bg-gradient-to-r from-blue-600 via-green-600 to-indigo-400 inline-block text-white rounded-md">
        Contributions
      </h1>
      <div className="flex p-5 md:p-10 justify-center flex-wrap">
        {contributions.map((contribution) => (
          <div
            className="w-2/3 sm:w-1/2 m-3 text-left"
            key={contribution.username + contribution.repository}
          >
            <RepoCard
              username={contribution.username}
              repository={contribution.repository}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export { Contributions };
