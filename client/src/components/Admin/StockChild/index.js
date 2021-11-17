import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../../Form";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import API from "../../../utils/API";

class StockChild extends Component {

    state = {
        brand: '',
        style: '',
        color: '',
        size: '',
        warehouses: [
            { qty: 0, WarehouseId: 1 },
            { qty: 0, WarehouseId: 2 },
            { qty: 0, WarehouseId: 3 },
            { qty: 0, WarehouseId: 4 },
        ],
        options: {
            brands: [],
            styles: [],
            colors: [],
            sizes: []
        },
        complete: false,
        loaded: false
    }

    dropdownChange = event => {
        const { value } = event;
        const { name, id } = value

        let prodObj = this.props.productList[this.props.index]

        let options = {
            brands: this.state.options.brands,
            styles: this.state.options.styles,
            colors: this.state.options.colors,
            sizes: this.state.options.sizes
        }

        switch (name) {
            case 'brand':
                options.brands.forEach(brand => {
                    if (id === brand.value.id) {
                        options.styles = []
                        options.colors = []
                        options.sizes = []
                        API.getStyles(id)
                            .then(res => {
                                console.log(res.data)
                                res.data.forEach(style => {
                                    options.styles.push(
                                        {
                                            label: style.styleNum,
                                            value: {
                                                name: 'style',
                                                id: style.id
                                            }
                                        }
                                    )
                                })
                                this.setState({
                                    brand: brand,
                                    style: '',
                                    color: '',
                                    size: '',
                                    warehouses: [
                                        { qty: '', WarehouseId: 1 },
                                        { qty: '', WarehouseId: 2 },
                                        { qty: '', WarehouseId: 3 },
                                        { qty: '', WarehouseId: 4 },
                                    ],
                                    options: options
                                })
                            })
                            .catch(err => {
                                console.log(err)
                            })
                    }
                })
                break;
            case 'style':
                options.styles.forEach(style => {
                    if (id === style.value.id) {
                        console.log(style.value.id)
                        options.colors = []
                        options.sizes = []
                        API.getColors(id)
                            .then(res => {
                                console.log(res.data)
                                res.data.forEach(color => {
                                    options.colors.push(
                                        {
                                            label: color.color,
                                            value: {
                                                name: 'color',
                                                id: color.id
                                            }
                                        }
                                    )
                                })
                                this.setState({
                                    style: style,
                                    color: '',
                                    size: '',
                                    warehouses: [
                                        { qty: '', WarehouseId: 1 },
                                        { qty: '', WarehouseId: 2 },
                                        { qty: '', WarehouseId: 3 },
                                        { qty: '', WarehouseId: 4 },
                                    ],
                                    options: options
                                })
                            })
                            .catch(err => {
                                console.log(err)
                            })
                    }
                })
                break;
            case 'color':
                options.colors.forEach(color => {
                    if (id === color.value.id) {
                        console.log(color.value.id)
                        options.sizes = []
                        API.getSizes(id)
                            .then(res => {
                                console.log(res.data)
                                res.data.forEach(size => {
                                    options.sizes.push(
                                        {
                                            label: size.size,
                                            value: {
                                                name: 'size',
                                                id: size.id
                                            }
                                        }
                                    )
                                })
                                this.setState({
                                    color: color,
                                    size: '',
                                    warehouses: [
                                        { qty: '', WarehouseId: 1 },
                                        { qty: '', WarehouseId: 2 },
                                        { qty: '', WarehouseId: 3 },
                                        { qty: '', WarehouseId: 4 },
                                    ],
                                    options: options
                                })
                            })
                            .catch(err => {
                                console.log(err)
                            })
                    }
                })
                break;
            default:
                options.sizes.forEach(size => {
                    if (id === size.value.id) {
                        console.log(size.value.id)
                        this.setState({
                            size: size,
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
        }

        prodObj.complete = false

        this.props.updateProductList(prodObj, this.props.index)
    }

    handleInputChange = event => {
        console.log(this.state.size)
        const reg = /^\d+$/;
        const { name, value } = event.target;
        let warehouses = this.state.warehouses
        let count = 0
        let prodObj = this.props.productList[this.props.index]

        prodObj.totalQty = 0

        if (reg.test(value)) {
            warehouses[name].qty = parseInt(value)
        }
        else if (value === '') {
            warehouses[name].qty = ''
        }

        warehouses.forEach(warehouse => {
            if (warehouse.qty !== '') {
                prodObj.totalQty = prodObj.totalQty + warehouse.qty
            }
            else {
                count++
            }
        })

        if (count < 4) {
            prodObj.complete = true
        }
        else {
            prodObj.complete = false
        }

        prodObj.brand = this.state.brand
        prodObj.style = this.state.style
        prodObj.color = this.state.color
        prodObj.size = this.state.size
        prodObj.warehouses = warehouses

        this.props.updateProductList(prodObj, this.props.index)

        this.setState({
            warehouses: warehouses
        });
    };

    componentDidMount() {
        let options = this.state.options
        this.props.brands.forEach((brand, i) => {
            options.brands.push(
                {
                    label: brand.brandName,
                    value: {
                        name: 'brand',
                        id: brand.id
                    }
                }
            )
        });
        this.setState({
            options: options,
            loaded: true
        })
    }


    render() {
        return (
            this.state.loaded ?
                <div>
                    <div className="row" id={this.props.id} style={{ 'width': '100%' }}>
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
                                            value={this.state.style.label}
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
                                            value={this.state.color.label}
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
                                            value={this.state.size.label}
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
                                            disabled={!this.state.size ? true : false}
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
                                            disabled={!this.state.size ? true : false}
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
                                            disabled={!this.state.size ? true : false}
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
                                            disabled={!this.state.size ? true : false}
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