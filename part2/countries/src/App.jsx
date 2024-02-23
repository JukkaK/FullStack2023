import { useState, useEffect } from "react"
import axios from "axios"
import FilterSearch from "./components/FilterSearchBox";

const App = () => {
  const [countrySearch, setCountrySearch] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then(response => {
        console.log(response.data);
        setCountries(response.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <span>find countries</span>
      <input type="text" value={countrySearch} onChange={(event) => setCountrySearch(event.target.value)} />
      <br />
      {countrySearch ? <FilterSearch countries={countries.filter(country => country.name.common.toLowerCase().includes(countrySearch.toLowerCase()))} />
      : null}
    </div>
  )
}

export default App
