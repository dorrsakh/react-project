import { useState } from "react";
import ListGroup from "./components/ListGroup";
import ListGroupProps from "./components/ListGroupProps";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const cities = [
    "Tehran",
    "Paris",
    "New York",
    "Tokyo",
    "London",
    "California",
  ];

  const HandleOnSelectedItem = (item: string) => {
    console.log(item);
  };

  let [visibility, setVisibility] = useState(false);

  const handleOnClose = () => {
    setVisibility(!visibility);
  };

  return (
    <div className="container">
      <ListGroup />
      <br />
      <ListGroupProps
        items={cities}
        heading={"List (using props)"}
        onSelectedItem={HandleOnSelectedItem}
      />
      <br />
      {visibility && (
        <Alert onClose={handleOnClose}>
          <div>
            Lorem ipsum dolor sit amet{" "}
            <strong>consectetur adipisicing elit. Veniam, soluta.</strong>
          </div>
        </Alert>
      )}
      <Button
        onClicked={() => {
          setVisibility(!visibility);
        }}
      >
        My Button
      </Button>
    </div>
  );
}

export default App;
