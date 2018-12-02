import React from 'react'

const Card = ({rank, suit}) => {
  let cardColor = (suit === "♣︎" || suit === "♠︎") ? "card-black": "card-red";
  return (
    <div className="card-outline">
      <div className={"card " + cardColor}>
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
