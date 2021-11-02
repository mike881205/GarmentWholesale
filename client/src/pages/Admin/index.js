import React, { Component } from "react";
import AdminJumbo from "../../components/Admin/AdminJumbo";
import { FormGroup, Input, Label, Small, FormBtn } from "../../components/Form";
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
        addBrand: false,
        addStyle: false,
        addColor: false,
        addSize: false,
        addStock: false
    }

    componentDidMount() {
        API.getGarments()
            .then(res => {
                this.setState({brands: res.data})
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
                />
            );
        }
    }
}




export default Admin;
