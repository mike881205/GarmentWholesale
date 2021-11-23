import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../../Form";
import OptionChild from "./OptionChild";
// import './style.css'

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
        const { name, placeholder, handleInputChange, options, value, disabled } = this.props

        switch (this.state.loaded) {
            case true:
                return (
                    <div className='row'>
                        <div className='col-sm'>
                            <div className='row'>
                                <div className='col-sm'>
                                    <Input
                                        id={'myInput'}
                                        name={name}
                                        value={value}
                                        onChange={handleInputChange}
                                        placeholder={placeholder}
                                        type="text"
                                        disabled={disabled}
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                {
                                    !disabled ?
                                        <div className='col-sm' style={{ 'height': '26vh', 'overflowY': 'auto' }}>
                                            {/* ====Options==== */}
                                            {options}
                                        </div>
                                        :
                                        <div className='col-sm'></div>
                                }
                            </div>
                        </div>
                    </div>

                    // <div className="dropdown">
                    //     {/* ====Button==== */}
                    //     <Input
                    //         id={'myInput'}
                    //         name={name}
                    //         value={value}
                    //         onChange={handleInputChange}
                    //         placeholder={placeholder}
                    //         type="text"
                    //         disabled={disabled}
                    //     />
                    //     {
                    //         !disabled ?
                    //             <div id="myDropdown" className="dropdown-content" style={{ 'height': '26vh', 'overflowY': 'auto' }}>
                    //                 {/* ====Options==== */}
                    //                 {optionChildren}
                    //             </div>
                    //             :
                    //             ''
                    //     }
                    // </div>
                )
                break;
            default:
                return (<div></div>)
                break;
        }
    }
}

export default DropSearch;