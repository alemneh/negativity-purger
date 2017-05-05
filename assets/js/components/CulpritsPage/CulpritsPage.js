import React, { Component } from 'react';
import axios from 'axios';
import CulpritsList from '../CulpritsList/CulpritsList';
import Loading  from '../LoadingPage/LoadingPage';
import styles from './CulpritsPage.css';
const data = [
  {
    name: 'Mike Tyson',
    number_of_tweets: 5,
    polarity: -0.733,
    pic_url: 'https://pbs.twimg.com/profile_images/823575372058923008/n4OSXsf9_normal.jpg',
  },
  {
    name: 'Mike Tyson',
    number_of_tweets: 5,
    polarity: -0.733,
    pic_url: 'https://pbs.twimg.com/profile_images/823575372058923008/n4OSXsf9_normal.jpg',
  },
  {
    name: 'Mike Tyson',
    number_of_tweets: 5,
    polarity: -0.733,
    pic_url: 'https://pbs.twimg.com/profile_images/823575372058923008/n4OSXsf9_normal.jpg',
  },
  {
    name: 'Mike Tyson',
    number_of_tweets: 5,
    polarity: -0.733,
    pic_url: 'https://pbs.twimg.com/profile_images/823575372058923008/n4OSXsf9_normal.jpg',
  },
  {
    name: 'Mike Tyson',
    number_of_tweets: 5,
    polarity: -0.733,
    pic_url: 'https://pbs.twimg.com/profile_images/823575372058923008/n4OSXsf9_normal.jpg',
  }
];

class CulpritsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      culprits: null
    }
  }

  componentWillMount() {
    this.fetchCulprits();
  }

  fetchCulprits() {
    axios.get('/api/purge/').then((res) => {
      console.log(res);
      this.setState({culprits: res.data});
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    const { culprits } = this.state;
    if (!culprits) return <Loading />

    return (
      <section className={styles.culpritsPage}>
        <div className={styles.stats}>
          <div className={styles.totalTweets}>
            <h2>Tweets Scrubed</h2>
            <p>{culprits.total_tweets}</p>
          </div>
          <div className={styles.totalNegativeTweets}>
            <h2>Negative Tweets</h2>
            <p>{culprits.total_negative_tweets}</p>
          </div>
        </div>

        <CulpritsList culprits={culprits}/>
      </section>
    )
  };
};


export default CulpritsPage;
