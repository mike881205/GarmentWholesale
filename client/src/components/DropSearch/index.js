import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../Form";
import './style.css'

class DropSearch extends Component {

    state = {
        optionChildren: [],
        filterOptions: []
    }

    dropSearchChange = (event) => {
        const options = this.props.options
        const { value, name, parentElement } = event.target
        const { id } = parentElement
        const filterVal = value.toUpperCase()
        let optionChildren = []

        switch (name) {
            case 'brand':
                options.forEach((option, i) => {
                    const filterOption = option.label.toUpperCase()
                    if (filterOption.includes(filterVal)) {
                        optionChildren.push(
                            <a key={i + this.props.name} id={i} href={'#' + option.label}>{option.label}</a>
                        )
                    }
                })

                this.setState({ optionChildren: optionChildren })

                // brands.forEach(brand => {
                //     console.log(brand)
                //     if (id === brand.value.id) {
                //         options.styles = []
                //         options.colors = []
                //         options.sizes = []
                //         API.getStyles(id)
                //             .then(res => {
                //                 console.log(res.data)
                //                 res.data.forEach(style => {
                //                     options.styles.push(
                //                         {
                //                             label: style.styleNum,
                //                             value: {
                //                                 name: 'style',
                //                                 id: style.id
                //                             }
                //                         }
                //                     )
                //                 })
                //                 this.setState({
                //                     brand: brand,
                //                     style: '',
                //                     color: '',
                //                     size: '',
                //                     warehouses: [
                //                         { qty: '', WarehouseId: 1 },
                //                         { qty: '', WarehouseId: 2 },
                //                         { qty: '', WarehouseId: 3 },
                //                         { qty: '', WarehouseId: 4 },
                //                     ],
                //                     options: options
                //                 })
                //             })
                //             .catch(err => {
                //                 console.log(err)
                //             })
                //     }
                // })
                break;
            case 'style':
                // options.styles.forEach(style => {
                //     if (id === style.value.id) {
                //         console.log(style.value.id)
                //         options.colors = []
                //         options.sizes = []
                //         API.getColors(id)
                //             .then(res => {
                //                 console.log(res.data)
                //                 res.data.forEach(color => {
                //                     options.colors.push(
                //                         {
                //                             label: color.color,
                //                             value: {
                //                                 name: 'color',
                //                                 id: color.id
                //                             }
                //                         }
                //                     )
                //                 })
                //                 this.setState({
                //                     style: style,
                //                     color: '',
                //                     size: '',
                //                     warehouses: [
                //                         { qty: '', WarehouseId: 1 },
                //                         { qty: '', WarehouseId: 2 },
                //                         { qty: '', WarehouseId: 3 },
                //                         { qty: '', WarehouseId: 4 },
                //                     ],
                //                     options: options
                //                 })
                //             })
                //             .catch(err => {
                //                 console.log(err)
                //             })
                //     }
                // })
                break;
            case 'color':
                // options.colors.forEach(color => {
                //     if (id === color.value.id) {
                //         console.log(color.value.id)
                //         options.sizes = []
                //         API.getSizes(id)
                //             .then(res => {
                //                 console.log(res.data)
                //                 res.data.forEach(size => {
                //                     options.sizes.push(
                //                         {
                //                             label: size.size,
                //                             value: {
                //                                 name: 'size',
                //                                 id: size.id
                //                             }
                //                         }
                //                     )
                //                 })
                //                 this.setState({
                //                     color: color,
                //                     size: '',
                //                     warehouses: [
                //                         { qty: '', WarehouseId: 1 },
                //                         { qty: '', WarehouseId: 2 },
                //                         { qty: '', WarehouseId: 3 },
                //                         { qty: '', WarehouseId: 4 },
                //                     ],
                //                     options: options
                //                 })
                //             })
                //             .catch(err => {
                //                 console.log(err)
                //             })
                //     }
                // })
                break;
            default:
                // options.sizes.forEach(size => {
                //     if (id === size.value.id) {
                //         console.log(size.value.id)
                //         this.setState({
                //             size: size,
                //             warehouses: [
                //                 { qty: '', WarehouseId: 1 },
                //                 { qty: '', WarehouseId: 2 },
                //                 { qty: '', WarehouseId: 3 },
                //                 { qty: '', WarehouseId: 4 },
                //             ]
                //         })
                //     }
                // })
                break;
        }
    }

    componentDidMount() {
        let optionChildren = []
        this.props.options.forEach((option, i) => {
            optionChildren.push(
                <a key={i + this.props.name} id={i} href={'#' + option.label}>{option.label}</a>
            )
        })
        this.setState({ optionChildren: optionChildren })
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
                <Input
                    id={'myInput'}
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.dropSearchChange}
                    placeholder={this.props.placeholder}
                    type="text"
                    disabled={false}
                />
                <div id="myDropdown" className="dropdown-content" style={{ 'height': '26vh', 'overflowY': 'auto' }}>
                    {/* ====Input==== */}
                    {/* ====Options==== */}
                    {this.state.optionChildren}
                </div>
            </div>
        )
    }
}

export default DropSearch;