import React from "react"

function Minutes({minutes}){
    let emojis = "";

    if (minutes<30){
        for (let i=0; i<=minutes/5; i++){
            emojis += "☕️"
        }
    } else {
        for (let i=0; i<=minutes/10; i++){
            emojis += "🍱"
        }
    }

    return(
        <span>{emojis} - {minutes} min read</span>
    )
}

export default Minutes