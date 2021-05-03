import {useEffect, useState} from "react";
import axios from 'axios';
import Card from "./Card";

const Countries = () => {
    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const [playOnce, setPlayOnce] = useState(true);
    const [rangeValue, setRangeValue] = useState(100);
    const [selectedContinent, setSelectedContinent] = useState('World');
    const continents = ['Africa', 'America', 'Asia', 'Europe', 'Oceania', 'World'];

    useEffect(() => {
        if (playOnce) {
            axios
                .get("https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag")
                .then((res) => {
                    setData(res.data)
                    setPlayOnce(false)
                });
        }

        const sortedCountry = () => {
            const countryObj = Object.keys(data).map((i) => data[i]);
            const sortedArray = countryObj.sort((a, b) => {
                return b.population - a.population;
            });

            sortedArray.length = rangeValue;
            setSortedData(sortedArray);
        }

        sortedCountry();
    }, [data, rangeValue]);

    return (
        <div id="countries">
            <div id="sort-container">
                <div id="range-selector">
                    <p>Biggest:</p>
                    <input type="range"
                           min="1"
                           max="250"
                           value={rangeValue}
                           onChange={(e) => setRangeValue(e.target.value)}
                    />
                    <label htmlFor={rangeValue}>{rangeValue}</label>
                </div>

                <ul>
                    { continents.map((continent) => {
                        return (
                            <li key={continent}>
                                <input className="continent-selector" type="radio" value={continent} id={continent}
                                       checked={continent === selectedContinent}
                                       onChange={(e) => setSelectedContinent(e.target.value)}/>
                                <label htmlFor={continent}>{continent}</label>
                            </li>
                        )
                    }) }
                </ul>
            </div>

            <ul id="countries-list">
                {
                    sortedData
                    .filter((country) =>
                        (selectedContinent !== 'World') ? country.region.includes(selectedContinent): true
                    )
                    .map((country) => (
                        <Card country={country} key={country.name}/>
                    )) }
            </ul>
        </div>
    )
};

export default Countries;