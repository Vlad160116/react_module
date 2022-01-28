import React, {useEffect, useState} from "react";
import Flight from "./Flight";

export default function Flights() {

    let [flightsList, setFlightsList] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(value => value.json())
            .then(flights => {
                let filter = flights.filter(flight => flight.launch_year !== '2020');
                setFlightsList(filter);
            });
    }, [])

    return (
        <div>
            {
                flightsList.map(value => <Flight  key={value.flight_number}
                                                  item={value}
                />)
            }
        </div>
    );
}