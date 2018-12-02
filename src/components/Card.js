import React from 'react'

const Card = ({rank, suit}) => {
  if (suit === "♣︎" || suit === "♠︎") {
    return (
      <div className="card card-black">
        <div className="card-tl">
          <div className="card-rank">{rank}</div>
          <div className="card-suit">{suit}</div>
        </div>
        <div className="card-br">
          <div className="card-rank">{rank}</div>
          <div className="card-suit">{suit}</div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="card card-red">
        <div className="card-tl">
          <div className="card-rank">{rank}</div>
          <div className="card-suit">{suit}</div>
        </div>
        <div className="card-br">
          <div className="card-rank">{rank}</div>
          <div className="card-suit">{suit}</div>
        </div>
      </div>
    )
  }
}

export default Card
