import React from 'react';

const LeadersUI = ({leaders}) => {
  return (
    <div>
    {leaders.map(player => (
      <div>
        <span>Name: {player.name}</span>
        <span>Capital: {player.capital}</span>
      </div>
    ))}
    </div>
  )

}

export default LeadersUI;
