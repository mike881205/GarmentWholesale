import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../../Form";
import API from "../../../utils/API";

class AdminJumbo extends Component {

    state = {
        children: [],
        headerTxt: '',
        backOnClick: '',
        stateKey: ''
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    componentDidMount() {
        const { addBrand, addStyle, addColor, addSize } = this.props.addType
        let headerTxt;
        let labelTxt;
        let stateName;
        let stateValue;
        let placeholder;
        let stateKey;
        let children = []

        switch (true) {
            case addBrand:
                headerTxt = 'Add Brand'
                stateKey = 'addBrand'
                labelTxt = 'Brand Name'
                stateName = 'brandName'
                stateValue = this.state.brandName
                placeholder = 'Enter Brand Name'
                break;
            case addStyle:
                headerTxt = 'Add Style'
                stateKey = 'addStyle'
                labelTxt = ''
                stateName = ''
                stateValue = ''
                placeholder = ''
                break;
            case addColor:
                headerTxt = 'Add Color'
                stateKey = 'addColor'
                labelTxt = ''
                stateName = ''
                stateValue = ''
                placeholder = ''
                break;
            default:
                headerTxt = 'Add Size'
                stateKey = 'addSize'
                labelTxt = ''
                stateName = ''
                stateValue = ''
                placeholder = ''
                break;
        }

        children.push(
            <div className='row' key={1}>
                <div className='col-sm'>
                    <form>
                        <FormGroup>
                            <Label text={labelTxt} />
                            <Input
                                style={{ 'width': '25%' }}
                                name={stateName}
                                value={stateValue}
                                onChange={this.handleInputChange}
                                placeholder={placeholder}
                                type="text"
                            />
                        </FormGroup>
                    </form>
                </div>
            </div>
        )

        this.setState({
            backOnClick: () => this.props.backOnClick({ [stateKey]: false }),
            headerTxt: headerTxt,
            children: children,
            stateKey: stateKey
        })
    }

    render() {

        return (
            <div className="container jumbotron" align="center">
                <div className="row">
                    <div className="col-sm">
                        <h1>{this.state.headerTxt}</h1>
                    </div>
                </div>
                <hr></hr>

                <div className="row">
                    <div className="col-sm">
                        <FormBtn
                            style={{ 'width': '25%' }}
                            text={'Add Another Brand'}
                            classes={"btn-info"}
                            disabled={true}
                        // onClick={this.props.onClick}
                        />
                    </div>
                </div>

                {this.state.children}

                <div className="row">
                    <div className="col-sm">
                        <FormBtn
                            style={{ 'width': '25%' }}
                            text={'Submit'}
                            classes={"btn-warning"}
                            disabled={true}
                        // onClick={this.props.onClick}
                        />
                    </div>
                </div>

                <hr></hr>
                <div className="row">
                    <div className="col-sm">
                        <FormBtn
                            style={{ 'width': '25%' }}
                            text={'Back'}
                            classes={"btn-primary"}
                            onClick={() => this.state.backOnClick()}
                        />
                    </div>
                </div>

                <div>

                </div>

            </div>
        );
    }
}

export default AdminJumbo;