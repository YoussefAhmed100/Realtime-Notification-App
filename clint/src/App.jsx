import React, { useEffect, useState } from "react";
import "./App.css";
import { posts } from "./data";
import { io } from "socket.io-client";

//componants
import NavBar from "./componants/navbar/NavBar";
import Card from "./componants/card/Card";

const App = () => {
  const [usaename, setUsername] = useState("");
  const [user, setUser] = useState("");
  const [socket ,setSocket] =useState(null)

  useEffect (()=>{
    setSocket( io("http://localhost:3000"));


   

  },[])

  useEffect (()=>{
    socket?.emit("newUser",user);

  },[socket,user]);

  return (
    <div className="container">
      {user ? (
        <>
          <NavBar  socket={socket}/>
          {posts.map((post) => (
            <Card key={post.id} post={post} socket={socket} user={user} />
          ))}

          <span className="username">{user}</span>
        </>
      ) : (
        <div className="login">
          <input
            type="text"
            placeholder="Username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => setUser(usaename)}> Login</button>
        </div>
      )}
    </div>
  );
};

export default App;
