import React from 'react';
import { Button } from 'reactstrap';


export default class CustomizePage extends React.Component{
  render () {
    return (

      <div>
        <h1>MindFrame</h1>
          <button>
            <img src={require('../images/Diary.png')} width='300' height='300' />
          </button>
      </div>

    )
  }


}
