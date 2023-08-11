import axios from "axios";
import React, { useEffect, useState } from "react";

var id = 11;
function App() {
  const [users, setusers] = useState([]);
  const [name, setname] = useState("");
  const [trigger, settrigger] = useState(false);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users/1").then((res) => {
      setusers(res.data);
    });
  }, []);

  // const postUsers = () => {
  //   axios
  //     .post("https://jsonplaceholder.typicode.com/users", {
  //       id: id++,
  //       name: name,
  //     })
  //     .then((res) => setusers([...users, res.data]))
  //   .then(() => {
  //     settrigger(!trigger);
  //   });
  //   setname("");
  // };

  // const updateUsers = () => {
  //   axios
  //     .put(`https://jsonplaceholder.typicode.com/users/${1}`, { name: name })
  //     .then((res) => setusers(res.data));
  // };

  const deleteUsers = () => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${1}`)
      .then((res) => setusers(res.data));
  };
  return (
    <>
      <div>
        {/* {users.map((val, index) => {
          return <div key={index}>{val.name}</div>;
        })} */}
        {users.name}
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        {/* <button onClick={postUsers}>Post</button> */}
        {/* <button onClick={updateUsers}>Update</button>  */}
        <button onClick={deleteUsers}>delete</button> 
      </div>
    </>
  );
}

export default App;
