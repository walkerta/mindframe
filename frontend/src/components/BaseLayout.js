import React from 'react';
import ReactDOM from 'react-dom';
import Appbar from 'muicss/lib/react/appbar';
//import {Link} from 'react-router-dom';
import Panel from 'muicss/lib/react/panel';
import Container from 'muicss/lib/react/container';

export default class BaseLayout extends React.Component {
  render() {
    let s1 = {
      verticalAlign: 'middle'
    };
    let s2 = {
      textAlign: 'right'
    };

    return (


      <Appbar>

      <table width="100%">
        <tbody>
          <tr style={s1}>
            <td className="mui--appbar-height"></td>
            <td className="mui--appbar-height" style={s2}>

              <em>Home Theme Views</em>
            </td>
          </tr>
        </tbody>
        <h1><em>Mindframe</em></h1>
      </table>

      <Panel>
        {}
      </Panel>


    </Appbar>



    );
  }
}
