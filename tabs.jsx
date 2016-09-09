import React from 'react';
import merge from 'lodash/merge';

class Tabs extends React.Component {
  constructor (props) {
    super(props);
    this.state = {index: 0};
  }

  render() {

    return (
      <div className="tabs">
        <ul className="group">
          {this.props.tabData.map((tab, idx) => {
            return (
            <li onClick={this.select.bind(this, idx)} key={idx}>
              <h1 className={this.state.index === idx ? "selected" : "not-selected"} >{tab.title}</h1>
            </li>);
          })}
        </ul>
        <article>
          {this.props.tabData.map((tab, idx) => {
            if (this.state.index === idx){
              return <p>{tab.content}</p>;
            }
          })}
        </article>
      </div>

   );
  }

  select(idx) {
    this.setState({index: idx});
  }

}

export default Tabs;
