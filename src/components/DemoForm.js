import React, { Component } from 'react'

class DemoForm extends Component {
    constructor(props) {
      super(props)
      this.state = {
         username:'',
         comment:'',
         language:'',
         software:''
      }
    }

    handleUserChange = e => {
        this.setState({
            username: e.target.value
        })
    }

    handleCommentChange = e => {
        this.setState({
            comment: e.target.value
        })
    } 

    handleLangChange = e => {
        this.setState({
            language: e.target.value
        })
    }

    handleSubmit = e => {
     e.preventDefault()
    console.log(e.this.state)
    }

    handleSoftwareChange = (e) => {
        this.setState({
            software: e.target.value
        })
    }

  render() {
    return ( 
        <form onSubmit={this.handleSubmit}>
            <div>
                <br /> 
                <label htmlFor="username">Username </label>
                <input type="text" id="username" value={this.state.username} onChange={this.handleUserChange}/>
            </div>
            <br />
            <div>
                <label htmlFor="comment">Comment </label>
                <textarea id="comment" value={this.state.comment} onChange={this.handleCommentChange}></textarea>
            </div>
            <br />
            <br />
            <div>
                <label htmlFor="language">Language </label>
                <select id="language" value={this.state.language} onChange={this.handleLangChange}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="reactnative">React Native</option>
                    <option value="java">Java</option>
                </select>
                
            <p>Select Which Software are you Using</p>
                <input type="radio" value="ios" id="ios" checked={true}
                    onChange={this.handleSoftwareChange} name="software" /><label for="ios">iOS</label>
                <input type="radio" value="windows" id="windows" checked={true}
                    onChange={this.handleSoftwareChange} name="software" /><label for="windows">Windows</label>
                <input type="radio" value="linux" id="linux" checked={true}
                    onChange={this.handleSoftwareChange} name="software" /><label for="linux">Linux</label>
            <br />
            <br />
            </div>
            <bl />
        <label htmlFor="checkbox">Interested in ?</label><br />
            <input type="checkbox" name="sports" onChange={(e) => this.updateCheckbox(e.target)}
       />
        <>
        Sports
        <br></br>
        <input
          type="checkbox"
          name="politics"
          onChange={(e) => this.updateCheckbox(e.target)}
        />
        Politics
        <br></br>
        <input
          type="checkbox"
          name="entertainment"
          onChange={(e) => this.updateCheckbox(e.target)}
        />
        Entertainment
        <br></br>
</>
            <button type="submit">Submit</button>
        </form>
    )
  }
}

export default DemoForm