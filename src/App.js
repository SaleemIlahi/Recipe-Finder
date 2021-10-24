import React, { useState } from 'react'
import logo from './logo.svg'

const App = () => {

  let [search, setSearch] = useState("")

  const searchChange = (e) => {
    setSearch(search = e.target.value)
  }

  const searchBtn = () => {
    console.log(search)
    setSearch(setSearch = "")
  }
  return (
    <div className="container">
      <img src={logo} alt="logo" />
      <div className="search-box">
        <input type="text" placeholder="Search your Recipe" value={search} onChange={searchChange} />
        <button onClick={searchBtn}>Search</button>
      </div>
    </div>
  )
}

export default App