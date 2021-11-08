import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../../Form";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import API from "../../../utils/API";

class StockChild extends Component {

    state = {
        index: '',
        brand: '',
        style: '',
        color: '',
        size: '',
        warehouses: [
            { qty: '', WarehouseId: 1 },
            { qty: '', WarehouseId: 2 },
            { qty: '', WarehouseId: 3 },
            { qty: '', WarehouseId: 4 },
        ],
        quantity: '',
        options: {
            brands: [],
            styles: [],
            colors: [],
            sizes: [],
            warehouses: []
        },
        loaded: false
    }

    dropdownChange = event => {
        const { brands, styles, colors, sizes } = this.props.products
        const { label, value } = event;
        let id;
        let options = this.state.options
        let prodObj = {
            brand: this.state.brand,
            style: this.state.style,
            color: this.state.color,
            size: this.state.size
        }
        let labelObj;

        switch (value) {
            case 'brand':
                brands.forEach(brand => {
                    if (label === brand.brandName) {
                        id = brand.id
                        prodObj.brand = brand
                        labelObj = brand
                        this.setState({
                            style: '',
                            color: '',
                            size: '',
                            warehouses: [
                                { qty: '', WarehouseId: 1 },
                                { qty: '', WarehouseId: 2 },
                                { qty: '', WarehouseId: 3 },
                                { qty: '', WarehouseId: 4 },
                            ]
                        })
                    }
                })
                styles.forEach(style => {
                    if (id === style.BrandId) {
                        options.styles.push(
                            {
                                label: style.styleNum,
                                value: 'style'
                            }
                        )
                    }
                });
                break;
            case 'style':
                options = {
                    brands: this.state.options.brands,
                    styles: this.state.options.styles,
                    colors: [],
                    sizes: []
                }
                styles.forEach(style => {
                    if (label === style.styleNum) {
                        id = style.id
                        labelObj = style
                        prodObj = {
                            brand: this.state.brand,
                            style: style,
                            color: '',
                            size: ''
                        }
                        this.setState({
                            color: '',
                            size: '',
                            warehouses: [
                                { qty: '', WarehouseId: 1 },
                                { qty: '', WarehouseId: 2 },
                                { qty: '', WarehouseId: 3 },
                                { qty: '', WarehouseId: 4 },
                            ]
                        })
                    }
                })
                colors.forEach(color => {
                    if (id === color.StyleId) {
                        options.colors.push(
                            {
                                label: color.color,
                                value: 'color'
                            }
                        )
                    }
                });
                break;
            case 'color':
                options = {
                    brands: this.state.options.brands,
                    styles: this.state.options.styles,
                    colors: this.state.options.colors,
                    sizes: [],
                    warehouses: []
                }
                colors.forEach(color => {
                    if (label === color.color) {
                        id = color.id
                        labelObj = color
                        prodObj = {
                            brand: this.state.brand,
                            style: this.state.style,
                            color: color,
                            size: ''
                        }
                        this.setState({
                            size: '',
                            warehouses: [
                                { qty: '', WarehouseId: 1 },
                                { qty: '', WarehouseId: 2 },
                                { qty: '', WarehouseId: 3 },
                                { qty: '', WarehouseId: 4 },
                            ]
                        })
                    }
                })
                sizes.forEach(size => {
                    if (id === size.ColorId) {
                        options.sizes.push(
                            {
                                label: size.size,
                                value: 'size'
                            }
                        )
                    }
                });
                break;
            case 'size':
                options = {
                    brands: this.state.options.brands,
                    styles: this.state.options.styles,
                    colors: this.state.options.colors,
                    sizes: this.state.options.sizes,
                    warehouses: []
                }
                sizes.forEach(size => {
                    if (label === size.size) {
                        id = size.id
                        labelObj = size
                        prodObj = {
                            brand: this.state.brand,
                            style: this.state.style,
                            color: this.state.color,
                            size: size
                        }
                        this.setState({
                            warehouses: [
                                { qty: '', WarehouseId: 1 },
                                { qty: '', WarehouseId: 2 },
                                { qty: '', WarehouseId: 3 },
                                { qty: '', WarehouseId: 4 },
                            ]
                        })
                    }
                })
                break;
            default:

                break;
        }

        this.props.updateProductList(prodObj, this.state.index)

        this.setState({
            options: options,
            [value]: labelObj
        });
    }

    handleInputChange = event => {
        let prodObj = {
            brand: this.state.brand,
            style: this.state.style,
            color: this.state.color,
            size: this.state.size,
            totalQty: 0,
            warehouses: {}
        }
        let warehouses = this.state.warehouses
        var reg = /^\d+$/;
        const { name, value } = event.target;
        if (reg.test(value)) {
            warehouses[name].qty = parseInt(value)
            prodObj.warehouses = warehouses
            warehouses.forEach(warehouse => {
                prodObj.totalQty = prodObj.totalQty + warehouse.qty
            })
            this.props.updateProductList(prodObj, this.state.index)
            this.setState({
                warehouses: warehouses
            });
        }
    };

    componentDidMount() {
        const { brands, styles, colors, sizes } = this.props.products
        let options = this.state.options
        brands.forEach((brand, i) => {
            options.brands.push(
                {
                    label: brand.brandName,
                    value: 'brand'
                }
            )
        });
        this.setState({
            index: this.props.index,
            options: options,
            loaded: true
        })
    }

    render() {
        return (
            this.state.loaded ?
                <div>
                    <div className="row" id={this.props.id}>
                        <div className="col-sm">
                            <div className="row">
                                <div className='col-sm'>
                                    <FormGroup>
                                        <Dropdown
                                            options={this.state.options.brands}
                                            onChange={this.dropdownChange}
                                            value={this.state.brand.brandName}
                                            placeholder="Select Brand"
                                        />
                                    </FormGroup>
                                </div>
                                <div className='col-sm'>
                                    <FormGroup>
                                        <Dropdown
                                            options={this.state.options.styles ? this.state.options.styles : []}
                                            onChange={this.dropdownChange}
                                            value={this.state.style.styleNum}
                                            disabled={!this.state.brand ? true : false}
                                            placeholder="Select Style"
                                        />
                                    </FormGroup>
                                </div>
                                <div className='col-sm'>
                                    <FormGroup>
                                        <Dropdown
                                            options={this.state.options.colors ? this.state.options.colors : []}
                                            onChange={this.dropdownChange}
                                            value={this.state.color.color}
                                            disabled={!this.state.style ? true : false}
                                            placeholder="Select Color"
                                        />
                                    </FormGroup>
                                </div>
                                <div className='col-sm'>
                                    <FormGroup>
                                        <Dropdown
                                            options={this.state.options.sizes ? this.state.options.sizes : []}
                                            onChange={this.dropdownChange}
                                            value={this.state.size.size}
                                            disabled={!this.state.color ? true : false}
                                            placeholder="Select Size"
                                        />
                                    </FormGroup>
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-sm'>
                                    <FormGroup>
                                        <Label text={this.props.warehouses[0].city + ', ' + this.props.warehouses[0].state} />
                                        <Input
                                            // style={{ 'width': '25%' }}
                                            name={0}
                                            value={this.state.warehouses[0].qty}
                                            onChange={this.handleInputChange}
                                            placeholder={'Enter Stock Qty'}
                                            type="number"
                                        />
                                    </FormGroup>
                                </div>
                                <div className='col-sm'>
                                    <FormGroup>
                                        <Label text={this.props.warehouses[1].city + ', ' + this.props.warehouses[1].state} />
                                        <Input
                                            // style={{ 'width': '25%' }}
                                            name={1}
                                            value={this.state.warehouses[1].qty}
                                            onChange={this.handleInputChange}
                                            placeholder={'Enter Stock Qty'}
                                            type="text"
                                        />
                                    </FormGroup>
                                </div>
                                <div className='col-sm'>
                                    <FormGroup>
                                        <Label text={this.props.warehouses[2].city + ', ' + this.props.warehouses[2].state} />
                                        <Input
                                            // style={{ 'width': '25%' }}
                                            name={2}
                                            value={this.state.warehouses[2].qty}
                                            onChange={this.handleInputChange}
                                            placeholder={'Enter Stock Qty'}
                                            type="text"
                                        />
                                    </FormGroup>
                                </div>
                                <div className='col-sm'>
                                    <FormGroup>
                                        <Label text={this.props.warehouses[3].city + ', ' + this.props.warehouses[3].state} />
                                        <Input
                                            // style={{ 'width': '25%' }}
                                            name={3}
                                            value={this.state.warehouses[3].qty}
                                            onChange={this.handleInputChange}
                                            placeholder={'Enter Stock Qty'}
                                            type="text"
                                        />
                                    </FormGroup>
                                </div>
                            </div>
                        </div>
                        < div className="col-sm-1">
                            <FormBtn
                                id={this.props.id}
                                text={'X'}
                                classes={"btn-danger"}
                                disabled={false}
                                onClick={this.props.removeChild}
                            />
                        </div >
                    </div>
                    <hr></hr>
                </div>
                :
                <div>

                </div>
        );
    }
}

export default StockChild;