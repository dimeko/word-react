import React, { useEffect, useState} from 'react';
import './App.css';
import axios from "axios"

function App() {
  const [users, setUsers] = useState([])
  useEffect(async () => {
    const response  = await axios.get("http://api.domain.dev.local:8080/index.php/wp-json/wp/v2/users")
    setUsers(response.data)
  }, [])
  
  return (
    <div className="App">
      <div> 
        <div>Users</div>
        {users.map((u) => {
          return (
            <div>{JSON.stringify(u)}</div>
          )
        })}
        </div>
    </div>
  );
}

export default App;
