import React from 'react'
import './Header.css';
import cr7 from '../pictures/cr7.jpg'
function Header() {
  return (
  <>
    <div className='headerwrapper' >
        <div className="header__main__box">
          <div className='main' >
            <h1 className='title' >
              Mon News
            </h1>
          </div>
        </div>
        <div className="main2">
          <h2 className='title2'>
            Why Cristiano Ronaldo is the G.O.A.T of FootBall
          </h2>
        <img src={cr7} alt="cr7"

        />
          <p className='para' >The greatest of all time, popularly known as G.O.A.T, is one of the most raging debates in football. Cristiano Ronaldo
            becomes the first player in HISTORY to qualify for his SIXTH UEFA European Championship. 𝐇𝐢𝐬𝐭𝐨𝐫𝐲 𝐦𝐚𝐝𝐞! 🐐
            Cristiano Ronaldo doesn't need to play just watch him, then he or make the team more powerful. He also the leads everyone in the team just Ronaldo present can make his team win any game he plays. He doesn't need to be even playing in a game. When Ronaldo decides to play, he doesn't use his full power just 1%
           </p>
            <div className=''>

            </div>
          
        </div>
      </div>
  </>
  )
}

export default Header