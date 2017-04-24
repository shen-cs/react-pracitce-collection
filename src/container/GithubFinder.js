import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
class GithubFinder extends Component {
  render() {
    return (
      <div>
          <AppBar
          	 title="Github Finder"
          	 showMenuIconButton={false}
          	 onRightIconButtonTouchTap={()=>console.log('wow')}
          	 iconElementRight={<FlatButton label="Home" onClick={()=>{browserHistory.push("/")}}/>}/> 
          {this.props.children}
      </div>
    );
  }
}

export default GithubFinder;
