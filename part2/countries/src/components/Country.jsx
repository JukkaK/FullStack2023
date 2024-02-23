import { useEffect, useState } from "react"
import axios from 'axios'

const OneCountry = ({ country }) => {

  const [press, setPress] = useState(false);
  const [apiData, setApiData] = useState([]);  
  const api_key = import.meta.env.VITE_SOME_KEY;

  useEffect(() => {
    if (press) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${api_key}&units=metric`)            
        .then(response => {
          console.log(response.data)
          setApiData(response.data);
        })
        .catch(err => console.error(err));
    }
  }, [press]);
  
  return (
    <>
      {press ?
        <>
            <h2>{country.name.common}</h2>
            <p>capital {country.capital[0]}</p>
            <p>area {country.area}</p>
            <h3>languages:</h3>
            <ul>
                {Object.entries(country.languages).map(([key, value]) => <li key={key}>{value}</li>)}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt} />
            <h3>{`Weather in ${country.name.common}`}</h3>
            <p>{` Temperature ${JSON.stringify(apiData.main?.temp)} celsius`}</p>
            {/* The first query for icon still fails since the weather data is undefined. Can't fix this. */}
            {apiData.weather && apiData.weather[0] && (
                <>
                    <img src={`https://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png`} />
                    <p>{`Wind ${JSON.stringify(apiData.wind?.speed)}`}</p>
                </>
            )}
        </>
        : <>
            <span>{country.name.common}</span>
            <button onClick={() => setPress(!press)}>show</button>
            <br />
          </>}
    </>
  )
}

export default OneCountry