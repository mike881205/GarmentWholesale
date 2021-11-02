import React, { Component } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { FormGroup, Input, Label, Small, FormBtn } from "../../Form";
import API from "../../../utils/API";


class AdminJumbo extends Component {

    state = {
        frmChldCnt: 0,
        formChildren: [],
        headerTxt: '',
        backOnClick: '',
        stateKey: '',
        brands: [],
        styles: [],
        colors: [],
        sizes: []
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    addChild = event => {
        event.preventDefault();
        let formChildren = this.state.formChildren
        let frmChldCnt = this.state.frmChldCnt
        let inputChildren = []
        let stateName;
        let stateValue;
        let placeholder;

        frmChldCnt++

        stateName = 'brandName'
        stateValue = this.state.brands[frmChldCnt]
        placeholder = 'Brand Name'

        inputChildren.push(
            <div className='col-sm' key={inputChildren.length + 'A'}>
                <FormGroup>
                    <Input
                        // style={{ 'width': '25%' }}
                        name={stateName}
                        value={stateValue}
                        onChange={this.handleInputChange}
                        placeholder={placeholder}
                        type="text"
                    />
                </FormGroup>
            </div>,
            <div className="col-sm" key={inputChildren.length + 'B'}>
                <FormBtn
                    id={frmChldCnt}
                    text={'X'}
                    style={{ 'width': '10%' }}
                    classes={"btn-danger"}
                    disabled={false}
                    onClick={this.removeChild}
                />
            </div>
        )

        formChildren.push(
            <div className='row' key={'key' + frmChldCnt} id={frmChldCnt}>
                {inputChildren}
            </div>
        )

        console.log(formChildren)

        this.setState({ formChildren: formChildren, frmChldCnt: frmChldCnt })
    }

    removeChild = event => {
        event.preventDefault();
        let formChildren = this.state.formChildren;
        for (let i = 0; i < formChildren.length; i++) {
            if (parseInt(event.target.id) === formChildren[i].props.id) {
                formChildren.splice(i, 1);
            };
        };
        this.setState({ formChildren: formChildren });
    };

    componentDidMount() {
        const { addType, dbInfo } = this.props
        const { addBrand, addStyle, addColor, addSize, addStock } = addType
        console.log(this.props.dbInfo[0].brandName)
        let headerTxt;
        let stateName;
        let stateValue;
        let placeholder;
        let stateKey;
        let formChildren = []
        let inputChildren = []


        switch (true) {
            case addBrand:
                headerTxt = 'Add Brand'
                stateKey = 'addBrand'
                stateName = 'brandName'
                stateValue = this.state.brands[0]
                placeholder = 'Brand Name'
                for (let i = 0; i < 2; i++) {
                    switch (i) {
                        case 0:
                            inputChildren.push(
                                <div className='col-sm' key={i + 1}>
                                    <FormGroup>
                                        <Input
                                            // style={{ 'width': '25%' }}
                                            name={stateName}
                                            value={stateValue}
                                            onChange={this.handleInputChange}
                                            placeholder={placeholder}
                                            type="text"
                                        />
                                    </FormGroup>
                                </div>
                            )
                            break;
                        default:
                            inputChildren.push(
                                <div className="col-sm" key={i + 1} id={i}>
                                    <FormBtn
                                        // style={{ 'width': '25%' }}
                                        text={'Add Another Brand'}
                                        classes={"btn-info"}
                                        disabled={false}
                                        onClick={this.addChild}
                                    />
                                </div>
                            )
                            break;
                    }
                }
                break;
            case addStyle:
                headerTxt = 'Add Style'
                stateKey = 'addStyle'
                for (let i = 0; i < 3; i++) {
                    switch (i) {
                        case 0:
                            stateName = 'brandName'
                            stateValue = this.state.brands[0]
                            placeholder = 'Brand Name'
                            inputChildren.push(
                                <div className='col-sm' key={i + 1}>
                                    <FormGroup>
                                        <Input
                                            // style={{ 'width': '25%' }}
                                            name={stateName}
                                            value={stateValue}
                                            onChange={this.handleInputChange}
                                            placeholder={placeholder}
                                            type="text"
                                        />
                                    </FormGroup>
                                </div>
                            )
                            break;
                        case 1:
                            stateName = 'styleNumber'
                            stateValue = this.state.styles[0]
                            placeholder = 'Style Num'
                            inputChildren.push(
                                <div className='col-sm' key={i + 1}>
                                    <FormGroup>
                                        <Input
                                            // style={{ 'width': '25%' }}
                                            name={stateName}
                                            value={stateValue}
                                            onChange={this.handleInputChange}
                                            placeholder={placeholder}
                                            type="text"
                                        />
                                    </FormGroup>
                                </div>
                            )
                            break;
                        default:
                            inputChildren.push(
                                <div className="col-sm" key={i + 1}>
                                    <FormBtn
                                        // style={{ 'width': '25%' }}
                                        text={'Add Another Style'}
                                        classes={"btn-info"}
                                        disabled={false}
                                        onClick={this.addChild}
                                    />
                                </div>
                            )
                            break;
                    }
                }
                break;
            case addColor:
                headerTxt = 'Add Color'
                stateKey = 'addColor'
                for (let i = 0; i < 4; i++) {
                    switch (i) {
                        case 0:
                            stateName = 'brandName'
                            stateValue = this.state.brands[0]
                            placeholder = 'Brand Name'
                            inputChildren.push(
                                <div className='col-sm' key={i + 1}>
                                    <FormGroup>
                                        <Input
                                            // style={{ 'width': '25%' }}
                                            name={stateName}
                                            value={stateValue}
                                            onChange={this.handleInputChange}
                                            placeholder={placeholder}
                                            type="text"
                                        />
                                    </FormGroup>
                                </div>
                            )
                            break;
                        case 1:
                            stateName = 'styleNumber'
                            stateValue = this.state.styles[0]
                            placeholder = 'Style Num'
                            inputChildren.push(
                                <div className='col-sm' key={i + 1}>
                                    <FormGroup>
                                        <Input
                                            // style={{ 'width': '25%' }}
                                            name={stateName}
                                            value={stateValue}
                                            onChange={this.handleInputChange}
                                            placeholder={placeholder}
                                            type="text"
                                        />
                                    </FormGroup>
                                </div>
                            )
                            break;
                        case 2:
                            stateName = 'color'
                            stateValue = this.state.colors[0]
                            placeholder = 'Color'
                            inputChildren.push(
                                <div className='col-sm' key={i + 1}>
                                    <FormGroup>
                                        <Input
                                            // style={{ 'width': '25%' }}
                                            name={stateName}
                                            value={stateValue}
                                            onChange={this.handleInputChange}
                                            placeholder={placeholder}
                                            type="text"
                                        />
                                    </FormGroup>
                                </div>
                            )
                            break;
                        default:
                            inputChildren.push(
                                <div className="col-sm" key={i + 1}>
                                    <FormBtn
                                        // style={{ 'width': '25%' }}
                                        text={'Add Another Color'}
                                        classes={"btn-info"}
                                        disabled={false}
                                        onClick={this.addChild}
                                    />
                                </div>
                            )
                            break;
                    }
                }
                break;
            // =============
            case addSize:
                headerTxt = 'Add Size'
                stateKey = 'addSize'
                for (let i = 0; i < 5; i++) {
                    switch (i) {
                        case 0:
                            stateName = 'brandName'
                            stateValue = this.state.brands[0]
                            placeholder = 'Brand Name'
                            inputChildren.push(
                                <div className='col-sm' key={i + 1}>
                                    <FormGroup>
                                        <Input
                                            // style={{ 'width': '25%' }}
                                            name={stateName}
                                            value={stateValue}
                                            onChange={this.handleInputChange}
                                            placeholder={placeholder}
                                            type="text"
                                        />
                                    </FormGroup>
                                </div>
                            )
                            break;
                        case 1:
                            stateName = 'styleNumber'
                            stateValue = this.state.styles[0]
                            placeholder = 'Style Num'
                            inputChildren.push(
                                <div className='col-sm' key={i + 1}>
                                    <FormGroup>
                                        <Input
                                            // style={{ 'width': '25%' }}
                                            name={stateName}
                                            value={stateValue}
                                            onChange={this.handleInputChange}
                                            placeholder={placeholder}
                                            type="text"
                                        />
                                    </FormGroup>
                                </div>
                            )
                            break;
                        case 2:
                            stateName = 'color'
                            stateValue = this.state.colors[0]
                            placeholder = 'Color'
                            inputChildren.push(
                                <div className='col-sm' key={i + 1}>
                                    <FormGroup>
                                        <Input
                                            // style={{ 'width': '25%' }}
                                            name={stateName}
                                            value={stateValue}
                                            onChange={this.handleInputChange}
                                            placeholder={placeholder}
                                            type="text"
                                        />
                                    </FormGroup>
                                </div>
                            )
                            break;
                        case 3:
                            stateName = 'size'
                            stateValue = this.state.sizes[0]
                            placeholder = 'Size'
                            inputChildren.push(
                                <div className='col-sm' key={i + 1}>
                                    <FormGroup>
                                        <Input
                                            // style={{ 'width': '25%' }}
                                            name={stateName}
                                            value={stateValue}
                                            onChange={this.handleInputChange}
                                            placeholder={placeholder}
                                            type="text"
                                        />
                                    </FormGroup>
                                </div>
                            )
                            break;
                        default:
                            inputChildren.push(
                                <div className="col-sm" key={i + 1} >
                                    <FormBtn
                                        // style={{ 'width': '25%' }}
                                        text={'Add Another Size'}
                                        classes={"btn-info"}
                                        disabled={false}
                                        onClick={this.addChild}
                                    />
                                </div>
                            )
                            break;
                    }
                }
                break;
            default:
                headerTxt = 'Add Stock'
                stateKey = 'addStock'
                for (let i = 0; i < 5; i++) {
                    switch (i) {
                        case 0:
                            stateName = 'brandName'
                            stateValue = this.state.brands[0]
                            placeholder = 'Brand Name'
                            inputChildren.push(
                                <div className='col-sm' key={i + 1}>
                                    <FormGroup>
                                        <Dropdown
                                            options={[]}
                                            // onChange={this._onSelect} 
                                            // value={defaultOption} 
                                            placeholder="Select a Brand"
                                        />
                                    </FormGroup>
                                </div>
                            )
                            break;
                        case 1:
                            stateName = 'styleNumber'
                            stateValue = this.state.styles[0]
                            placeholder = 'Style Num'
                            inputChildren.push(
                                <div className='col-sm' key={i + 1}>
                                    <FormGroup>
                                        <Dropdown
                                            options={[]}
                                            // onChange={this._onSelect} 
                                            // value={defaultOption} 
                                            placeholder="Select a Style"
                                        />
                                    </FormGroup>
                                </div>
                            )
                            break;
                        case 2:
                            stateName = 'color'
                            stateValue = this.state.colors[0]
                            placeholder = 'Color'
                            inputChildren.push(
                                <div className='col-sm' key={i + 1}>
                                    <FormGroup>
                                        <Dropdown
                                            options={[]}
                                            // onChange={this._onSelect} 
                                            // value={defaultOption} 
                                            placeholder="Select a Color"
                                        />
                                    </FormGroup>
                                </div>
                            )
                            break;
                        case 3:
                            stateName = 'size'
                            stateValue = this.state.sizes[0]
                            placeholder = 'Size'
                            inputChildren.push(
                                <div className='col-sm' key={i + 1}>
                                    <FormGroup>
                                        <Dropdown
                                            options={[]}
                                            // onChange={this._onSelect} 
                                            // value={defaultOption} 
                                            placeholder="Select a Size"
                                        />
                                    </FormGroup>
                                </div>
                            )
                            break;
                        default:
                            inputChildren.push(
                                <div className="col-sm" key={i + 1} >
                                    <FormBtn
                                        // style={{ 'width': '25%' }}
                                        text={'Add Another Size'}
                                        classes={"btn-info"}
                                        disabled={false}
                                        onClick={this.addChild}
                                    />
                                </div>
                            )
                            break;
                    }
                }
                break;
        }

        formChildren.push(
            <div className='row' key={1} id={0}>
                {inputChildren}
            </div>
        )

        this.setState({
            backOnClick: () => this.props.backOnClick({ [stateKey]: false }),
            headerTxt: headerTxt,
            formChildren: formChildren,
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

                <form>
                    {this.state.formChildren}
                </form>

                <div className="row">
                    <div className="col-sm">
                        <FormBtn
                            style={{ 'width': '25%' }}
                            text={'Submit'}
                            classes={"btn-warning"}
                            disabled={false}
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