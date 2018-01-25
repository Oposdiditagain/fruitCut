/**
 * Created by mwj on 2018/1/22.
 */
import React, { Component } from 'react';




class Screen extends Component {

  render() {

    return(
      <div className="screen">
        <div className="header">
          <img className="logo" src="logo.png" alt="logo" />
          <img className="ninja" src="ninja.png" alt="ninja"  />
        </div>
        <img className="homeDesc" src="home-desc.png" alt="home" style={{marginTop: '-40px'}} />
        <img className="new" src="new.png" alt="new" />

          <div className="content">
            <div className="btn1">
              <img src="peach.png" alt="dojo" />
            </div>
            <div className="btn2">
              <img src="sandia.png" alt="start" />
            </div>
            <div className="btn3">
              <img src="boom.png" alt="quit" />
            </div>
          </div>
          <div className="footer">
            <h2>
              CopyRight@Joy for Enjoy!
              <a href="https://github.com/Oposdiditagain/">git@github.com</a>
            </h2>
          </div>
      </div>
    )
  }
}



export default Screen;