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
        warehouse: '',
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
        let stateObj = {
            brand: this.state.brand,
            style: this.state.style,
            color: this.state.color,
            size: this.state.size,
            warehouse: ''
        }
        let labelObj;

        switch (value) {
            case 'brand':
                brands.forEach(brand => {
                    if (label === brand.brandName) {
                        id = brand.id
                        stateObj.brand = brand
                        labelObj = brand
                        this.setState({
                            brand: brand,
                            style: '',
                            color: '',
                            size: '',
                            warehouse: ''
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
                    sizes: [],
                    warehouses: []
                }
                styles.forEach(style => {
                    if (label === style.styleNum) {
                        id = style.id
                        labelObj = style
                        stateObj = {
                            brand: this.state.brand,
                            style: style,
                            color: '',
                            size: '',
                            warehouse: ''
                        }
                        this.setState({
                            style: style,
                            color: '',
                            size: '',
                            warehouse: ''
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
                        stateObj = {
                            brand: this.state.brand,
                            style: this.state.style,
                            color: color,
                            size: '',
                            warehouse: ''
                        }
                        this.setState({
                            color: color,
                            size: '',
                            warehouse: ''
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
                        stateObj = {
                            brand: this.state.brand,
                            style: this.state.style,
                            color: this.state.color,
                            size: size,
                            warehouse: ''
                        }
                        this.setState({
                            size: size,
                            warehouse: ''
                        })
                    }
                })
                this.props.warehouses.forEach(warehouse => {
                    options.warehouses.push(
                        {
                            label: warehouse.city + ', ' + warehouse.state,
                            value: 'warehouse'
                        }
                    )
                });
                break;
            default:

                break;
        }

        this.props.updateProductList(stateObj, this.state.index)

        this.setState({
            options: options,
            [value]: labelObj
        });
    }



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
        if (this.state.loaded) {
            return (
                <div className="row" id={this.props.id}>
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
                    <div className='col-sm'>
                        <FormGroup>
                            <Dropdown
                                options={this.state.options.warehouses}
                                onChange={this.dropdownChange}
                                value={this.state.warehouse ? this.state.warehouse.city + ', ' + this.state.warehouse.state : ''}
                                disabled={!this.state.size ? true : false}
                                placeholder="Select Warehouse"
                            />
                        </FormGroup>
                    </div>
                    < div className="col-sm">
                        <FormBtn
                            id={this.props.id}
                            text={'X'}
                            // style={{ 'width': '10%' }}
                            classes={"btn-danger"}
                            disabled={false}
                            onClick={this.props.removeChild}
                        />
                    </div >
                </div>
            );
        }
        else {
            return (
                <div>

                </div>
            )
        }

    }
}

export default StockChild;