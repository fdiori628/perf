import React, { Component } from 'react'
import "./index.css"
import Container from './Container'

export default class Body extends Component {
  render() {
    return (
      <div>
        <Container data={this.props.data}/>
      </div>
    )
  }
}
