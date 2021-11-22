import React, { Component } from "react";

class OptionChild extends Component {

    state = {
        style: 'none'
    }

    componentDidMount() {

    }

    render() {
        const {id, handleDropSelect, style, name, text} = this.props
        return (
            <a id={id}
                onClick={e => handleDropSelect(e)}
                style={{ 'backgroundColor': style }}
                name={name}
                >
                {text}
            </a>
        )
    }
}

export default OptionChild;