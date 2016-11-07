import React, { Component } from 'react';
import { observer } from 'mobx-react';
require("./style.scss");

@observer
class Content extends Component {
  constructor(props) {
    super(props);
  };
  
  render() {
    return (
      <div className="content">
        { this.props.content }
      </div>
    );
  }
}

export default Content;