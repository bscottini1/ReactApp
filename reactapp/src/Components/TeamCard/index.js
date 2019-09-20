import React from "react";

function TeamCard(props) {
    return(
        <div className = "card">
            <div className = "img-container">
                <img alt = {props.name} src = {props.logo}></img>
            </div>
        </div>
    )
}

export default TeamCard;