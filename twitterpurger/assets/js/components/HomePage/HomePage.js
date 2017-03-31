import React, { Component } from 'react';
import axios from 'axios';
import AnimatedHeader from '../AnimatedHomePageHeader/AnimatedHomePageHeader';
import SocialMediaList from '../SocialMediaList/SocialMediaList';
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

  render() {
    return (
      <section>
          <AnimatedHeader loaded={this.state.loaded}/>
          <div className={styles.homeBody + ' ' + styles.fadeIn}>
            <p>Scrub your twitter account and identify
              accounts, that you
            </p>
            <p>follow, who are polluting your
            timeline with negativity.</p>
            <SocialMediaList />
          </div>
      </section>
    )
  }
}


export default Home;
