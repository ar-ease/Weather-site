import React, { useState } from "react";
import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";

const WeatherApp = () => {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "kolkata",
        feelsLike: 23.73,
        humidity: 50, 
        temp: 23.97,
        tempMax: 23.97,
        tempMin: 23.97,
        weather: "haze"
    });

    const updateInfo = (result) => {
        setWeatherInfo(result);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h2> Saxyy Weather App </h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
};

export default WeatherApp;
