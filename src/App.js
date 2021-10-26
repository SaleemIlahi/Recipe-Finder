import React, { useState } from 'react'
import logo from './logo.svg'
import Card from './Card'

const App = () => {

  let [search, setSearch] = useState("")
  let [recipe, setRecipe] = useState([])

  const APP_ID = 'a6946f91'
  const API_KEY = 'd23590bce39cd28e2c569f253b237bc8'
  const URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${APP_ID}&app_key=${API_KEY}`

  const apiFetch = async () => {
    const recipFetch = await fetch(URL)
    const fetchResp = await recipFetch.json()

    setRecipe(fetchResp.hits)
  }

  const searchChange = (e) => {
    setSearch(e.target.value)
  }

  const searchBtn = () => {
    apiFetch()
    setSearch("")
  }
  return (
    <div className="container">
      <img src={logo} alt="logo" />
      <div className="search-box">
        <input type="text" placeholder="Search your Recipe" value={search} onChange={searchChange} />
        <button onClick={searchBtn}>Search</button>
      </div>
      <div className="recipe-container">
        <Card recipe={recipe} />
      </div>
    </div>
  )
}

export default App