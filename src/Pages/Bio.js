import React from "react";

export default function Bio({ dark, id }) {
    return (
        <div className={"section" + (dark ? " section-dark" : "")}>
        <div className="section-content" id={id}>
            
        </div>
        </div>
    );
}