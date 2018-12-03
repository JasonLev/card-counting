import React from 'react'

const Card = ({rank, suit, flipped}) => {
  let cardColor = (suit === "♣︎" || suit === "♠︎") ? "card-black": "card-red";
  let flipCard = flipped ? " flipped" : "";
  return (
    <div className={flipped ? "card-outline card-outline-flipped" : "card-outline"}>
      <div className={"card " + cardColor + flipCard}>
        <div className="front"></div>
        <div className="back">
          <div className="card-tl">
            <div className="card-rank">{rank}</div>
            <div className="card-suit">{suit}</div>
          </div>
          <div className="card-br">
            <div className="card-rank">{rank}</div>
            <div className="card-suit">{suit}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
