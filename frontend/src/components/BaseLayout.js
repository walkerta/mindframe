import React from 'react';
import { Link } from 'react-router-dom';



  export default class BaseLayout extends React.Component {
    render(){
      return(
        <div>

          <ul>
            <li><Link to="/">Home </Link></li>
              <li><Link to="/customize">Customize</Link></li>
          </ul>


          {this.props.children}
        </div>
      )
    }
  }
