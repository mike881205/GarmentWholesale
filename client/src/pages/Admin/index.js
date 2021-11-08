import React, { Component } from "react";
import AdminJumbo from "../../components/Admin/AdminJumbo";
import { FormBtn } from "../../components/Form";
import API from "../../utils/API";

class Admin extends Component {

    state = {
        brandChildren: [],
        styleChildren: [],
        colorChildren: [],
        sizeChildren: [],
        brands: [],
        styles: [],
        colors: [],
        sizes: [],
        warehouses: [],
        addBrand: false,
        addStyle: false,
        addColor: false,
        addSize: false,
        addStock: false,
        loading: true
    }

    componentDidMount() {
        console.log("loading")
        API.getWarehouses()
            .then(res => {
                console.log(res.data)
                this.setState({ warehouses: res.data })
                API.getBrands()
                    .then(res => {
                        console.log(res.data)
                        this.setState({ brands: res.data })
                        API.getStyles()
                            .then(res => {
                                console.log(res.data)
                                this.setState({ styles: res.data })
                                API.getColors()
                                    .then(res => {
                                        console.log(res.data)
                                        this.setState({ colors: res.data })
                                        API.getSizes()
                                            .then(res => {
                                                console.log(res.data)
                                                this.setState({
                                                    sizes: res.data,
                                                    loading: false
                                                })
                                            })
                                            .catch(err => {
                                                console.log(err);
                                            });
                                    })
                                    .catch(err => {
                                        console.log(err);
                                    });
                            })
                            .catch(err => {
                                console.log(err);
                            });
                    })
                    .catch(err => {
                        console.log(err);
                    });
            })
            .catch(err => {
                console.log(err);
            });

    }

    addStock = event => {
        event.preventDefault();
        let prodInfo = {
            prodNum: this.state.prodObj.prodNum,
            qty: this.state.prodObj.qty,
            WarehouseId: this.state.prodObj.WarehouseId
        }
        API.addStock(prodInfo)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {

        const { addBrand, addStyle, addColor, addSize, addStock } = this.state

        if (!this.state.loading) {
            if (!addBrand && !addStyle && !addColor && !addSize && !addStock) {
                return (
                    <div className="container jumbotron" align="center">
                        <div className="row">
                            <div className="col-sm">
                                <h1>Admin</h1>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <div className="col-sm">
                                <FormBtn
                                    text={'Add Brand'}
                                    classes={"btn-primary"}
                                    onClick={() => this.setState({ addBrand: true })}
                                />
                            </div>
                            <div className="col-sm">
                                <FormBtn
                                    text={'Add Style'}
                                    classes={"btn-primary"}
                                    disabled={this.state.brands.length > 0 ? '' : 'disabled'}
                                    onClick={() => this.setState({ addStyle: true })}
                                />
                            </div>
                            <div className="col-sm">
                                <FormBtn
                                    text={'Add Color'}
                                    classes={"btn-primary"}
                                    disabled={this.state.styles.length > 0 ? '' : 'disabled'}
                                    onClick={() => this.setState({ addColor: true })}
                                />
                            </div>
                            <div className="col-sm">
                                <FormBtn
                                    text={'Add Size'}
                                    classes={"btn-primary"}
                                    disabled={this.state.colors.length > 0 ? '' : 'disabled'}
                                    onClick={() => this.setState({ addSize: true })}
                                />
                            </div>
                            <div className="col-sm">
                                <FormBtn
                                    text={'Add Stock'}
                                    classes={"btn-primary"}
                                    disabled={false}
                                    onClick={() => this.setState({ addStock: true })}
                                />
                            </div>
                        </div>
                    </div>
                );
            }
            else {
                return (
                    <AdminJumbo
                        dbInfo={this.state.brands}
                        backOnClick={obj => this.setState(obj)}
                        addType={{
                            addBrand: this.state.addBrand,
                            addStyle: this.state.addStyle,
                            addColor: this.state.addColor,
                            addSize: this.state.addSize,
                            addStock: this.state.addStock
                        }}
                        products={{
                            brands: this.state.brands,
                            styles: this.state.styles,
                            colors: this.state.colors,
                            sizes: this.state.sizes
                        }}
                        warehouses={this.state.warehouses}
                    // warehouses={{

                    // }}
                    />
                );
            }
        }
        else {
            return (
                <div>
                    Loading...
                </div>
            )
        }

    }
}




export default Admin;
