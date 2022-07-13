import React, { Component } from 'react'

class SoftwareComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            software:''
        }
    }

    handleSoftwareChange = (e) => {
        this.setState({
            software: e.target.value
        })
    }

    render() {
        return (
            <>
            <br />
            <p>Select Which Software are you Using</p>
                <input type="radio" value="ios" id="ios" checked={true}
                    onChange={this.handleSoftwareChange} name="software" /><label for="ios">iOS</label>
                <input type="radio" value="windows" id="windows" checked={true}
                    onChange={this.handleSoftwareChange} name="software" /><label for="windows">Windows</label>
                <input type="radio" value="linux" id="linux" checked={true}
                    onChange={this.handleSoftwareChange} name="software" /><label for="linux">Linux</label>
            <br />
            </>
        )
    }
}

export default SoftwareComponent