import React, { Component } from 'react'

class HoverCounter extends Component {
    render() {
        const {count,handler} = this.props
        return (
            <div>
                <h1 onMouseOver={handler}>Hover {count} times</h1>
            </div>
        )
    }
}

export default HoverCounter
