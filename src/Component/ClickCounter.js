import React, { Component } from 'react'

class ClickCounter extends Component {
    render() {
        const {count,handler} = this.props
        return (
            <div>
                <button onClick= {handler}>Click {count} times</button>
            </div>
        )
    }
}

export default ClickCounter
