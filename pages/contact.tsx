import { Component } from 'react'
// import Page from '../components/Page'

import * as ga from '../lib/ga'

export default class Contact extends Component {
  state = { message: '' }

  handleInput = (e: { target: { value: any } }) => {
    this.setState({ message: e.target.value })
  }

  handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    gtag('event', 'submit_form', {
      category: 'Contact',
      label: this.state.message,
    })

    this.setState({ message: '' })
  }

  render() {
    return (
      <>
        <h1>This is the Contact page</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <span>Message:</span>
            <textarea onChange={this.handleInput} value={this.state.message} />
          </label>
          <button type="submit">submit</button>
        </form>
      </>
    )
  }
}