import React from "react";
import { people } from "./data";

export default function DataUsage(){
    const listItems = people.map((person) =>
        <li key={person.id}>
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>

    );
    return (
        <>
            <p>Data Usage</p>
            <ul>{listItems}</ul>
        </>
    );
}