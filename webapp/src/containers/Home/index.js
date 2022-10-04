import React, {Component} from 'react'
import Navbar from "@components/Navbar/Navbar"

class Home extends Component {
  render() {
    return (
      <div className="home mt-5">
        <Navbar></Navbar>
        <div className="row">
          <div className="col-12">
            <h2 className="mb-3">Compare Products</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Home