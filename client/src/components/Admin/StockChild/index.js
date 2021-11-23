import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../../Form";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import API from "../../../utils/API";
import DropSearch from "../DropSearch";
import OptionChild from "../DropSearch/OptionChild";

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
            brands: {
                info: [],
                optionChildren: [],
                input: ''
            },
            styles: {
                info: [],
                optionChildren: [],
                input: ''
            },
            colors: {
                info: [],
                optionChildren: [],
                input: ''
            },
            sizes: {
                info: [],
                optionChildren: [],
                input: ''
            }
        },
        complete: false,
        loaded: false
    }

    WHinputChange = event => {
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

    handleDropSelect = event => {

        let prodObj = this.props.productList[this.props.index]
        let options = this.state.options

        if (event.target) {
            this.handleInputChange(event)
            const { id, name } = event.target
            switch (name) {
                case 'brands':
                    options.brands.info.forEach(brand => {
                        if (parseInt(id) === brand.value.id) {
                            options.styles.info = []
                            options.styles.optionChildren = []
                            options.styles.input = ''
                            options.colors.info = []
                            options.colors.optionChildren = []
                            options.colors.input = ''
                            options.sizes.info = []
                            options.sizes.optionChildren = []
                            options.sizes.input = ''
                            API.getStylesById(id)
                                .then(res => {
                                    console.log(res.data)
                                    res.data.forEach((style, i) => {
                                        options.styles.info.push(
                                            {
                                                label: style.styleNum,
                                                value: {
                                                    name: 'styles',
                                                    id: style.id
                                                }
                                            }
                                        )
                                        options.styles.optionChildren.push(
                                            <OptionChild
                                                key={i + 'styles'}
                                                id={style.id}
                                                name={'styles'}
                                                text={style.styleNum}
                                                handleInputChange={this.handleInputChange}
                                                handleDropSelect={this.handleDropSelect}
                                            />
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
                case 'styles':
                    options.styles.info.forEach(style => {
                        if (parseInt(id) === style.value.id) {
                            options.colors.info = []
                            options.colors.optionChildren = []
                            options.colors.input = ''
                            options.sizes.info = []
                            options.sizes.optionChildren = []
                            options.sizes.input = ''
                            API.getColorsById(id)
                                .then(res => {
                                    console.log(res.data)
                                    res.data.forEach((color, i) => {
                                        options.colors.info.push(
                                            {
                                                label: color.color,
                                                value: {
                                                    name: 'colors',
                                                    id: color.id
                                                }
                                            }
                                        )
                                        options.colors.optionChildren.push(
                                            <OptionChild
                                                key={i + 'colors'}
                                                id={color.id}
                                                name={'colors'}
                                                text={color.color}
                                                handleInputChange={this.handleInputChange}
                                                handleDropSelect={this.handleDropSelect}
                                            />
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
                default:
                    options.colors.info.forEach(color => {
                        if (parseInt(id) === color.value.id) {
                            options.sizes.info = []
                            options.sizes.optionChildren = []
                            options.sizes.input = ''
                            API.getSizesById(id)
                                .then(res => {
                                    console.log(res.data)
                                    res.data.forEach((size, i) => {
                                        options.sizes.info.push(
                                            {
                                                label: size.size,
                                                value: {
                                                    name: 'sizes',
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
            }
        }
        else {
            options.sizes.info.forEach(size => {
                if (event.value.id === size.value.id) {
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
        }

        prodObj.complete = false

        this.props.updateProductList(prodObj, this.props.index)
    }

    handleInputChange = event => {
        const { name } = event.target
        let options = this.state.options
        const info = options[name].info
        let newOptions = []
        let filterVal;

        if (event.target.value) {
            filterVal = event.target.value.toUpperCase()
            options[name].input = event.target.value.trim()
        }
        else if (event.target.text) {
            filterVal = event.target.text.toUpperCase()
            options[name].input = event.target.text.trim()
        }
        else {
            filterVal = ''
            options[name].input = ''
        }

        info.forEach((option, i) => {
            const filterOption = option.label.toUpperCase()
            if (filterOption.includes(filterVal)) {
                newOptions.push(
                    <OptionChild
                        key={i + name}
                        id={option.value.id}
                        name={name}
                        text={option.label}
                        handleDropSelect={this.handleDropSelect}
                    />
                )
            }
        })
        options[name].optionChildren = newOptions

        this.setState({ options: options })
    };

    componentDidMount() {
        let options = this.state.options

        const { brands } = options

        this.props.brands.forEach((brand, i) => {
            brands.info.push(
                {
                    label: brand.brandName,
                    value: {
                        name: 'brands',
                        id: brand.id
                    }
                }
            )
        });

        brands.info.forEach((brand, i) => {
            brands.optionChildren.push(
                <OptionChild
                    key={i + 'brand'}
                    id={brand.value.id}
                    name={brand.value.name}
                    text={brand.label}
                    handleDropSelect={this.handleDropSelect}
                />
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
                                        <DropSearch
                                            name={'brands'}
                                            options={this.state.options.brands}
                                            value={this.state.options.brands.input}
                                            handleDropSelect={this.handleDropSelect}
                                            handleInputChange={this.handleInputChange}
                                            placeholder="Search Brand"
                                            disabled={false}
                                        />
                                    </FormGroup>
                                </div>
                                <div className='col-sm'>
                                    <FormGroup>
                                        <DropSearch
                                            name={'styles'}
                                            options={this.state.options.styles}
                                            value={this.state.options.styles.input}
                                            handleDropSelect={this.handleDropSelect}
                                            handleInputChange={this.handleInputChange}
                                            placeholder="Search Style"
                                            disabled={!this.state.brand ? true : false}
                                        />
                                    </FormGroup>
                                </div>
                                <div className='col-sm'>
                                    <FormGroup>
                                        <DropSearch
                                            name={'colors'}
                                            options={this.state.options.colors}
                                            value={this.state.options.colors.input}
                                            handleDropSelect={this.handleDropSelect}
                                            handleInputChange={this.handleInputChange}
                                            placeholder="Search Color"
                                            disabled={!this.state.style ? true : false}
                                        />
                                    </FormGroup>
                                </div>
                                <div className='col-sm'>
                                    <FormGroup>
                                        <Label text="Select Size" />
                                        <Dropdown
                                            options={this.state.options.sizes.info}
                                            onChange={this.handleDropSelect}
                                            value={this.state.size.label}
                                            disabled={!this.state.color ? true : false}
                                            placeholder="Size"
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
                                            onChange={this.WHinputChange}
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
                                            onChange={this.WHinputChange}
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
                                            onChange={this.WHinputChange}
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
                                            onChange={this.WHinputChange}
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