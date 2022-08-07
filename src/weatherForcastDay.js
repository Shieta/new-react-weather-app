import React from "react";
import Weathericon from "./Weathericon";

export default function WeatherForcastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
    return days[day];
  }
  return (
    <div>
      <div> {day()} </div>
      <Weathericon code={props.data.weather[0].icon} size={36} />
      <div className="weatherforcast-temprature">
        <span className="temprature-max">
          {Math.round(props.data.temp.max)}°
        </span>{" "}
        <span className="temprature-min">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
