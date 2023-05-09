import React from "react";
import "./App.css";

const App = () => {
  const [imageURL, setImageURL] = React.useState("");
  const [isDataLoaded, setIsDataLoaded] = React.useState(false);

  React.useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((json) => {
        setImageURL(json.message);
        setIsDataLoaded(true);
      });
  }, []);

  if (!isDataLoaded) {
    return (
      <div>
        <h1> Loading...</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <h1 id="title"> Dog Pictures UwU</h1>
      <img width={500} src={imageURL} alt="dog" />
    </div>
  );
};

export default App;