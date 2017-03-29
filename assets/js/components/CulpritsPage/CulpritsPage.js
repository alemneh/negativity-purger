import React, { Component } from 'react';
import axios from 'axios';
import CulpritsList from '../CulpritsList/CulpritsList';
import Loading  from '../LoadingPage/LoadingPage';


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
    axios.get('http://localhost:8000/api/purge/').then((res) => {
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
      <section>
        <h1>Culprits</h1>
        <h4>Number of tweets scrubed: {culprits.total_tweets}</h4>
        <h4>Number of negative tweets: {culprits.total_negative_tweets}</h4>
        <hr />
        <CulpritsList culprits={culprits}/>
      </section>
    )
  };
};


export default CulpritsPage;
