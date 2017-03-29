import react, { Component } from 'react';
import axios from 'axios';
import CulpritsList from '../CulpritsList/CulpritsList';


class CulpritsList extends Component {
  render() {
    <section>
      <h1>Culprits</h1>
      <hr />
      <CulpritsList culprits={culprits}/>
    </section>
  };
};


export default CulpritsList;
