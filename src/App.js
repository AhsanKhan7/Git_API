import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [Repos, setRepos] = useState("");
  // https://api.github.com/users/hacktivist123/repos
  useEffect(() => {
    const URL = "https://api.github.com/users/AhsanKhan7/repos";
    fetch(URL)
      .then((response) => response.json())
      .then((reponse) => setRepos(reponse));
  }, []);

  return (
    <div className="App">
      <h1>My Repositories</h1>
      <h2>{JSON.stringify(Repos)}</h2>
    </div>
  );
}

export default App;
