require('normalize.css/normalize.css');
require('styles/App.css');

import $ from 'jquery';
import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {

  componentDidMount() {
    console.log("22");
    console.log($.getJSON)
    $.getJSON('../sources/test/case1.json', function (data) {
      console.log("success");
      console.log(data);
    });
  }


  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
