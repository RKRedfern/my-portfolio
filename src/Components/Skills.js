import React from "react";

export default function Skills({ dark, id }) {
    return (
        <div className={"section" + (dark ? " section-dark" : "")}>
        <div className="section-content" id={id}>
            <h1> Skills </h1>
        </div>
        </div>
    );
}