import React, { Component } from "react";
import { FormGroup, Input, FormBtn } from "../../Form";
import StockChild from "../StockChild";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
// import API from "../../../utils/API";


class AdminJumbo extends Component {

    state = {
        frmChldCnt: 1,
        formChildren: [],
        headerTxt: '',
        backOnClick: '',
        stateKey: '',
        brands: [],
        styles: [],
        colors: [],
        sizes: [],
        productList: []
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    addChild = event => {
        event.preventDefault();
        const { addType, products } = this.props
        const { addBrand, addStyle, addColor, addSize } = addType
        const { brands, styles, colors, sizes } = products
        let formChildren = this.state.formChildren
        let frmChldCnt = this.state.frmChldCnt

        frmChldCnt++

        formChildren.push(
            <StockChild
                id={frmChldCnt}
                index={formChildren.length}
                key={frmChldCnt}
                products={products}
                warehouses={this.props.warehouses}
                updateProductList={this.updateProductList}
                removeChild={this.removeChild}
            />
        )

        this.setState({
            formChildren: formChildren,
            frmChldCnt: frmChldCnt
        })
    }

    removeChild = event => {
        event.preventDefault();
        let formChildren = this.state.formChildren;
        let productList = this.state.productList
        for (let i = 0; i < formChildren.length; i++) {
            if (parseInt(event.target.id) === formChildren[i].props.id) {
                formChildren.splice(i, 1);
                productList.splice(i, 1);
            };
        };
        this.setState({
            formChildren: formChildren,
            productList: productList
        });
    };

    dropdownChange = event => {
        const { label, value } = event;
        const { index, name } = value
        let product = this.state.products[index]
        console.log(product, name, label)
        this.setState({
            [product[name]]: label
        });
    }

    componentDidMount() {
        const { addType, products } = this.props
        const { addBrand, addStyle, addColor, addSize, addStock } = addType
        const { brands, styles, colors, sizes } = products
        let headerTxt;
        let name;
        let stateValue;
        let placeholder;
        let stateKey;
        let formChildren = []
        let inputChildren = []
        let frmChldCnt = this.state.frmChldCnt

        switch (true) {
            // case addBrand:
            //     headerTxt = 'Add Brand'
            //     stateKey = 'addBrand'
            //     name = 'brandName'
            //     stateValue = this.state.brands[0]
            //     placeholder = 'Brand Name'
            //     for (let i = 0; i < 2; i++) {
            //         switch (i) {
            //             case 0:
            //                 inputChildren.push(
            //                     <div className='col-sm' key={i + 1}>
            //                         <FormGroup>
            //                             <Input
            //                                 // style={{ 'width': '25%' }}
            //                                 name={name}
            //                                 value={stateValue}
            //                                 onChange={this.handleInputChange}
            //                                 placeholder={placeholder}
            //                                 type="text"
            //                             />
            //                         </FormGroup>
            //                     </div>
            //                 )
            //                 break;
            //             default:
            //                 inputChildren.push(
            //                     <div className="col-sm" key={i + 1} id={i}>
            //                         <FormBtn
            //                             // style={{ 'width': '25%' }}
            //                             text={'Add Another Brand'}
            //                             classes={"btn-info"}
            //                             disabled={false}
            //                             onClick={this.addChild}
            //                         />
            //                     </div>
            //                 )
            //                 break;
            //         }
            //     }
            //     break;
            // case addStyle:
            //     headerTxt = 'Add Style'
            //     stateKey = 'addStyle'
            //     for (let i = 0; i < 3; i++) {
            //         switch (i) {
            //             case 0:
            //                 name = 'brandName'
            //                 stateValue = this.state.brands[0]
            //                 placeholder = 'Brand Name'
            //                 inputChildren.push(
            //                     <div className='col-sm' key={i + 1}>
            //                         <FormGroup>
            //                             <Input
            //                                 // style={{ 'width': '25%' }}
            //                                 name={name}
            //                                 value={stateValue}
            //                                 onChange={this.handleInputChange}
            //                                 placeholder={placeholder}
            //                                 type="text"
            //                             />
            //                         </FormGroup>
            //                     </div>
            //                 )
            //                 break;
            //             case 1:
            //                 name = 'styleNumber'
            //                 stateValue = this.state.styles[0]
            //                 placeholder = 'Style Num'
            //                 inputChildren.push(
            //                     <div className='col-sm' key={i + 1}>
            //                         <FormGroup>
            //                             <Input
            //                                 // style={{ 'width': '25%' }}
            //                                 name={name}
            //                                 value={stateValue}
            //                                 onChange={this.handleInputChange}
            //                                 placeholder={placeholder}
            //                                 type="text"
            //                             />
            //                         </FormGroup>
            //                     </div>
            //                 )
            //                 break;
            //             default:
            //                 inputChildren.push(
            //                     <div className="col-sm" key={i + 1}>
            //                         <FormBtn
            //                             // style={{ 'width': '25%' }}
            //                             text={'Add Another Style'}
            //                             classes={"btn-info"}
            //                             disabled={false}
            //                             onClick={this.addChild}
            //                         />
            //                     </div>
            //                 )
            //                 break;
            //         }
            //     }
            //     break;
            // case addColor:
            //     headerTxt = 'Add Color'
            //     stateKey = 'addColor'
            //     for (let i = 0; i < 4; i++) {
            //         switch (i) {
            //             case 0:
            //                 name = 'brandName'
            //                 stateValue = this.state.brands[0]
            //                 placeholder = 'Brand Name'
            //                 inputChildren.push(
            //                     <div className='col-sm' key={i + 1}>
            //                         <FormGroup>
            //                             <Input
            //                                 // style={{ 'width': '25%' }}
            //                                 name={name}
            //                                 value={stateValue}
            //                                 onChange={this.handleInputChange}
            //                                 placeholder={placeholder}
            //                                 type="text"
            //                             />
            //                         </FormGroup>
            //                     </div>
            //                 )
            //                 break;
            //             case 1:
            //                 name = 'styleNumber'
            //                 stateValue = this.state.styles[0]
            //                 placeholder = 'Style Num'
            //                 inputChildren.push(
            //                     <div className='col-sm' key={i + 1}>
            //                         <FormGroup>
            //                             <Input
            //                                 // style={{ 'width': '25%' }}
            //                                 name={name}
            //                                 value={stateValue}
            //                                 onChange={this.handleInputChange}
            //                                 placeholder={placeholder}
            //                                 type="text"
            //                             />
            //                         </FormGroup>
            //                     </div>
            //                 )
            //                 break;
            //             case 2:
            //                 name = 'color'
            //                 stateValue = this.state.colors[0]
            //                 placeholder = 'Color'
            //                 inputChildren.push(
            //                     <div className='col-sm' key={i + 1}>
            //                         <FormGroup>
            //                             <Input
            //                                 // style={{ 'width': '25%' }}
            //                                 name={name}
            //                                 value={stateValue}
            //                                 onChange={this.handleInputChange}
            //                                 placeholder={placeholder}
            //                                 type="text"
            //                             />
            //                         </FormGroup>
            //                     </div>
            //                 )
            //                 break;
            //             default:
            //                 inputChildren.push(
            //                     <div className="col-sm" key={i + 1}>
            //                         <FormBtn
            //                             // style={{ 'width': '25%' }}
            //                             text={'Add Another Color'}
            //                             classes={"btn-info"}
            //                             disabled={false}
            //                             onClick={this.addChild}
            //                         />
            //                     </div>
            //                 )
            //                 break;
            //         }
            //     }
            //     break;
            // // =============
            // case addSize:
            //     headerTxt = 'Add Size'
            //     stateKey = 'addSize'
            //     for (let i = 0; i < 5; i++) {
            //         switch (i) {
            //             case 0:
            //                 name = 'brandName'
            //                 stateValue = this.state.brands[0]
            //                 placeholder = 'Brand Name'
            //                 inputChildren.push(
            //                     <div className='col-sm' key={i + 1}>
            //                         <FormGroup>
            //                             <Input
            //                                 // style={{ 'width': '25%' }}
            //                                 name={name}
            //                                 value={stateValue}
            //                                 onChange={this.handleInputChange}
            //                                 placeholder={placeholder}
            //                                 type="text"
            //                             />
            //                         </FormGroup>
            //                     </div>
            //                 )
            //                 break;
            //             case 1:
            //                 name = 'styleNumber'
            //                 stateValue = this.state.styles[0]
            //                 placeholder = 'Style Num'
            //                 inputChildren.push(
            //                     <div className='col-sm' key={i + 1}>
            //                         <FormGroup>
            //                             <Input
            //                                 // style={{ 'width': '25%' }}
            //                                 name={name}
            //                                 value={stateValue}
            //                                 onChange={this.handleInputChange}
            //                                 placeholder={placeholder}
            //                                 type="text"
            //                             />
            //                         </FormGroup>
            //                     </div>
            //                 )
            //                 break;
            //             case 2:
            //                 name = 'color'
            //                 stateValue = this.state.colors[0]
            //                 placeholder = 'Color'
            //                 inputChildren.push(
            //                     <div className='col-sm' key={i + 1}>
            //                         <FormGroup>
            //                             <Input
            //                                 // style={{ 'width': '25%' }}
            //                                 name={name}
            //                                 value={stateValue}
            //                                 onChange={this.handleInputChange}
            //                                 placeholder={placeholder}
            //                                 type="text"
            //                             />
            //                         </FormGroup>
            //                     </div>
            //                 )
            //                 break;
            //             case 3:
            //                 name = 'size'
            //                 stateValue = this.state.sizes[0]
            //                 placeholder = 'Size'
            //                 inputChildren.push(
            //                     <div className='col-sm' key={i + 1}>
            //                         <FormGroup>
            //                             <Input
            //                                 // style={{ 'width': '25%' }}
            //                                 name={name}
            //                                 value={stateValue}
            //                                 onChange={this.handleInputChange}
            //                                 placeholder={placeholder}
            //                                 type="text"
            //                             />
            //                         </FormGroup>
            //                     </div>
            //                 )
            //                 break;
            //             default:
            //                 inputChildren.push(
            //                     <div className="col-sm" key={i + 1} >
            //                         <FormBtn
            //                             // style={{ 'width': '25%' }}
            //                             text={'Add Another Size'}
            //                             classes={"btn-info"}
            //                             disabled={false}
            //                             onClick={this.addChild}
            //                         />
            //                     </div>
            //                 )
            //                 break;
            //         }
            //     }
            //     break;
            default:
                headerTxt = 'Add Stock'
                stateKey = 'addStock'
                formChildren.push(
                    <StockChild
                        index={0}
                        key={frmChldCnt}
                        products={products}
                        warehouses={this.props.warehouses}
                        updateProductList={this.updateProductList}
                        id={frmChldCnt}
                        removeChild={this.removeChild}
                    />
                )
                break;
        }

        this.setState({
            backOnClick: () => this.props.backOnClick({ [stateKey]: false }),
            headerTxt: headerTxt,
            formChildren: formChildren,
            stateKey: stateKey
        })
    }

    updateProductList = (obj, index) => {
        let productList = this.state.productList
        productList[index] = obj
        this.setState({ productList: productList })
    }

    render() {

        return (
            <div className="container" align="center">
                <div className="row">
                    <div className="col-sm">
                        <h1>{this.state.headerTxt}</h1>
                    </div>
                </div>
                <hr></hr>

                <div className="row">
                    <div className="col-sm" >
                        <FormBtn
                            // style={{ 'width': '25%' }}
                            text={'Add Another Product'}
                            classes={"btn-info"}
                            disabled={false}
                            onClick={this.addChild}
                        />
                    </div>
                </div>

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
                            onClick={() => console.log(this.state.productList)}
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