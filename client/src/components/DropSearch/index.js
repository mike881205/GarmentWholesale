import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../Form";
import OptionChild from "./OptionChild";
import './style.css'

class DropSearch extends Component {

    state = {
        loaded: false,
        input: ''
    }

    componentDidMount() {

        this.setState({
            loaded: true
        })
    }

    render() {
        const { name, placeholder, handleInputChange, options, value } = this.props
        const { optionChildren } = options

        switch (this.state.loaded) {
            case true:
                return (
                    <div className="dropdown">
                        {/* ====Button==== */}
                        <Input
                            id={'myInput'}
                            name={name}
                            value={value}
                            onChange={handleInputChange}
                            placeholder={placeholder}
                            type="text"
                        // disabled={disabled}
                        />
                        <div id="myDropdown" className="dropdown-content" style={{ 'height': '26vh', 'overflowY': 'auto' }}>
                            {/* ====Options==== */}
                            {optionChildren}
                        </div>
                    </div>
                )
                break;
            default:
                return (<div></div>)
                break;
        }
    }
}

export default DropSearch;