import React from 'react'
import "./ReachOut.css"
import bg from "../../assets/reachoutbg.png"
import sendicon from "../../assets/sendicon.png"

export const ReachOut = () => {
  return (
    <div className='reachout-container'>
      <div className='reachout-background'>
        <img width={"100%"} src={bg} id={"bgImage"} />
      </div>
      <div className='reachout-content'>
        <div className='reachout-title'>Reach Out</div>
        <div className='reachout-mainContent'>
          <div className='form reachout-name'>
            <label htmlFor='nameInput'> Name </label>
            <input className={"input-text"} name="nameInput" type="text" />
          </div>
          <div className='form reachout-email'>
            <label htmlFor='emailInput'> Email </label>
            <input className={"input-text"} name="emailnput" type="email" />
          </div>
          <div className='form reachout-message'>
            <label htmlFor='messageInput'> Message </label>
            <input className={"input-text"} name="messageInput" type="text" id="messageInput" />
          </div>
          <div className='reachout-selection'>
            <div>HOW CAN I HELP?</div>
            <br />
            <div className='reachout-checkbox-container'>
              <div>
                <input name="check1" type="checkbox" id="check1" />
                <label htmlFor='check1'> UX Design </label>
              </div>
              <div>
                <input name="check2" type="checkbox" id="check2" />
                <label htmlFor='check2'> Research </label>
              </div>
              <div>
                <input name="check3" type="checkbox" id="check3" />
                <label htmlFor='check3'> Digital Strategy </label>
              </div>
              <div>
                <input name="check4" type="checkbox" id="check4" />
                <label htmlFor='check4'> Bag & Accessories Design </label>
              </div>
              <div>
                <input name="check5" type="checkbox" id="check5" />
                <label htmlFor='check5'> Branding </label>
              </div>
            </div>

          </div>
          <div className='reachout-submit-container'>
            <div className='reachout-submit-button'> SEND
              <img src={sendicon} />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
