import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../Form";
import './style.css'

class DropSearch extends Component {

    state = {
        options: [],
        optionChildren: []
    }

    componentDidMount() {
        let options = []
        let optionChildren = []
        this.props.options.forEach((option, i) => {
            options.push(option)
            // console.log(option.label)
            optionChildren.push(
                <a key={i + this.props.name} href={'#' + option.label}>{option.label}</a>
            )
        })
        this.setState({ 
            options: options,
            optionChildren: optionChildren
         })
    }

    render() {
        return (
            <div className="dropdown">
                {/* ====Button==== */}
                {/* <FormBtn
                    // onClick={''}
                    classes={'dropbtn'}
                    text={'Dropdown'}
                /> */}
                <div id="myDropdown" className="dropdown-content">
                    {/* ====Input==== */}
                    <Input
                        id={'myInput'}
                        name={this.props.name}
                        value={this.props.value}
                        onChange={this.props.inputChange}
                        placeholder={this.props.placeholder}
                        type="text"
                        disabled={false}
                    />
                    {/* ====Options==== */}
                    {this.state.optionChildren}
                </div>
            </div>
        )
    }
}

export default DropSearch;