// import React, { useEffect, useState} from 'react';
// import './App.css';
// import axios from "axios"

// function App() {
//   const [users, setUsers] = useState([])
//   useEffect(async () => {
//     console.log(process.env)
//     const response  = await axios.get("http://api.domain.dev.local:8080/index.php/wp-json/wp/v2/users")
//     setUsers(response.data)
//   }, [])

//   return (
//     <div className="App">
//       <div> 
//         <div>Users</div>
//         {users.map((u) => {
//           return (
//             <div>{JSON.stringify(u)}</div>
//           )
//         })}
//         </div>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from "@components/Navbar/Navbar"
import { Home, NotFound } from '..'
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="app_container">
        <Navbar></Navbar>
        <div className="container mt-4">
          <Routes >
            <Route component={NotFound} />
          </Routes >
        </div>
      </div>
    )
  }
}

export default App