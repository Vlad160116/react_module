import React from "react";


export default function Flight({value:item}) {

    return (
        <div>
            {item.mission_name} - {item.launch_year}
            <img src={item.links.mission_patch} alt="mission_patch"/>
        </div>
    );
}