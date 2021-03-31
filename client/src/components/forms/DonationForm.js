import React, { useState } from 'react'

const DonationForm = () => {

  const [currentTotal, setCurrentTotal] = useState(2586)
  const [randomNumber, setRandomNumber] = useState(0)

  const handleDonation = (event) => {
    setCurrentTotal(currentTotal + parseInt(event.target.value))
  }

  const handleRandomDonation = () => {
    const randomDonation = Math.floor(Math.random() * 250) + 1
    setRandomNumber(randomDonation)
  }


  return (
    <div className="donation-grid">
      <p>Please donate to help us support the Global Alliance of National Parks</p>
      <div className="donation-buttons-group">
        <button onClick={handleDonation} className="ui basic button donation-button" value="10">£10</button>
        <button onClick={handleDonation} className="ui basic button donation-button" value="20">£20</button>
        <button onClick={handleRandomDonation} className="ui basic button donation-button" value="random">Feeling lucky? Generate a random amount! (You can amend if it is not quite right)</button>
      </div>
      <p>Your random donation today is: {randomNumber}</p><p>Happy to proceed?</p>
      <p>£<span className="current-total">{currentTotal}</span>...and counting. Thank you!</p>


    </div>
  )
}

export default DonationForm