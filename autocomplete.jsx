import React from 'react';

class AutoComplete extends React.Component {
  constructor(){
    super();
    this.state = { searchName: ""};
    this.updateName = this.updateName.bind(this);
    this.updateSearchName = this.updateSearchName.bind(this);
  }

  componentDidMount() {
    let that = this;
    this.interval = setInterval(that.tick.bind(that), 1000);
  }

  updateName(e) {
    e.preventDefault();
    const searchName = e.target.value ? e.target.value : "";
    this.setState({searchName});
  }

  updateSearchName(e) {
    e.preventDefault();
    const name = e.target.id ? e.target.id : "";
    this.setState({searchName: name});
  }

  render() {
    const searchName = this.state.searchName;
    return (
    <section>
      <input className="auto-complete"
        type="text"
        onChange={this.updateName}
        value={searchName}></input>
      <ul className="name-list">
        {this.props.names.map((name, idx) => {
          console.log(this.state.searchName);
          if (name.includes(this.state.searchName)) {
            return (<li key={idx} onClick={this.updateSearchName} id={name}>{name}</li>);
          }

        })}
      </ul>
    </section>
  );}

}

export default AutoComplete;
