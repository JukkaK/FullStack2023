import OneCountry from "./Country"

const FilterSearch = ({ countries }) => {
  return (
    (countries.length > 10) ? <p>too many results, specify another filter</p>
    : (countries.length > 1) ? countries.map(country => (      
        <OneCountry country={country} />    ))
      : (countries.length) ? <OneCountry country={countries[0]} />
        : <p>no matches</p>
  )
}

export default FilterSearch