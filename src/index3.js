import React, { Component } from 'react'
import Contacts from './components/contacts'

    class App extends Component {
      componentDidMount() {
        fetch('url here')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data });
        })
        .catch(console.log)
      }
    }
