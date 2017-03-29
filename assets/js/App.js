import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        {this.props.children}
      </section>
    )
  }
}

export default App;
