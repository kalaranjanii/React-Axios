import axios from "axios";
import React, { useState } from "react";

function Search() {
  const [users, setusers] = useState([]);
  const [name, setname] = useState("");
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => setusers(res.data));
  return (
    <div>
      <h1>SEARCH RESULT</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
      />

      {name.length > 0 &&
        users.map((value) => (
          <div>
            {value.name.toLowerCase().includes(name.toLowerCase())
              ? value.name
              : ""}
          </div>
        ))}
    </div>
  );
}

export default Search;
