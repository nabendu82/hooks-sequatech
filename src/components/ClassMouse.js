import React, { Component } from 'react'

class ClassMouse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            x: 0,
            y: 0
        }
    }

    logMousePosition = e => {
        console.log('Class logMousePosition')
        this.setState({ x: e.clientX, y: e.clientY })
    }

    componentDidMount() {
        console.log('Class componentDidMount')
        window.addEventListener('mousemove', this.logMousePosition)
    }

    componentWillUnmount(){
        console.log('Class componentWillUnmount');
        window.removeEventListener('mousemove', this.logMousePosition);
    }

    render() {
        return (
            <>
                <h1>X - {this.state.x}, Y - {this.state.y}</h1>
            </>
        )
    }
}

export default ClassMouse
