import React from "react";

export default function DateU(props) {
    
      let months = [
            "Jan",
            "Feb",
            "March",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ]; 
        
        let month = months[props.date.getMonth()];

        let days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ];
    
      let day = days[props.date.getDay()];

      let hours = props.date.getHours();
        if (hours < 10){
          hours = `0${hours}`;
        }
 
      let minutes = props.date.getMinutes();

      if (minutes < 10 ) {
        minutes = `0${minutes}`
      }
      return (`Today, ${day} ${month} , ${hours}:${minutes}`);
    }
        