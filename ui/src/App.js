import React from 'react'
import Json from './Json'
import { getPackageJSON } from './api'

class Package extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      data: null,
    }

    getPackageJSON(this.props.name,
      (result) => this.setState({
        loaded: true,
        data: result,
      }),
      (error) => {
        // wat willen we hier doen ?
      })
  }

  render() {
    if (this.state.loaded) {
      // toon de rest van de packageinfo
      // (name, description, homepage, dependencies...)
      return ( <div>
        
      <h1> {this.state.data.name} </h1>
      <p> {this.state.data.description}</p>
      <a href = {this.state.data.homepage}>{this.state.data.homepage}</a>

      <h2> {this.state.data.dependencie} </h2>

      
      ,<Json data={this.state.data} /></div>
      )
    } else {
      return <p>Loading...</p>
    } // nog een derde mogelijkheid ?
  }
}

const App = (props) => <Package name="react" />

export default App;