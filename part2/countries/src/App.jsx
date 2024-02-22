// App component
import React, { useState, useEffect } from 'react';

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => response.json())
      .then(data => setCountries(data));
  }, []);

  return (
    <div>
      <h1>Countries</h1>
      <ul>
        {countries.map(country => 
          <li>{country.name.common}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
