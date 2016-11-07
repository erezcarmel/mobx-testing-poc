import React, { Component } from 'react';
import { observer } from 'mobx-react';
require("./style.scss");

@observer
class Sidebar extends Component {
  
  constructor(props) {
    super(props);
    this.sections = this.props.sections;
  };
  
  changeSection = (section) => {
    this.props.actions.loadData(section);
  };
  
  render() {
    return (
      <aside className="sidebar">
        {
          this.sections.map(
            (section, idx) =>
              <div className="section" key={ idx } id={idx} onClick={() => this.changeSection(idx)}>{ section }</div>
          )
        }
      </aside>
    );
  }
}

export default Sidebar;