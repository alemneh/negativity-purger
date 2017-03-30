import React, { Component } from 'react';
import axios from 'axios';
import AnimatedHeader from '../AnimatedHomePageHeader/AnimatedHomePageHeader';
import styles from './HomePage.css';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: ''
    }
    this.loadHeader = this.loadHeader.bind(this);
  }

  componentDidMount() {
    let _this = this;
    setTimeout(function () {
      _this.loadHeader()
    }, 1000);

  }

  loadHeader() {
    this.setState({loaded: 'loaded'});
  }

  handleTwitterLogin() {
    axios.get('http://localhost:8000/accounts/twitter/login').then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }
  render() {
    return (
      <section>
          <AnimatedHeader loaded={this.state.loaded}/>
          <div className={styles.homeBody + ' ' + styles.fadeIn}>
            <p>Scrub your twitter account and identify
              account that you follow who polluting your
              timeline with negativity.
            </p>
            <a href="accounts/twitter/login">Twitter Login</a>
          </div>
      </section>
    )
  }
}


export default Home;
