import React, { Component } from "react";

class OptionChild extends Component {

    state = {
        style: 'none'
    }

    componentDidMount() {

    }

    render() {
        const { id, handleDropSelect, style, name, text } = this.props
        return (
            <div className='row'>
                <a className='col-sm' id={id}
                    // onClick={e => handleDropSelect(e)}
                    style={{ 'backgroundColor': style }}
                    name={name}
                >
                    {text}
                </a>
            </div>
        )
    }
}

export default OptionChild;