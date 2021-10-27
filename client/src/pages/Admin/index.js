import React, { Component } from "react";
import AdminJumbo from "../../components/Admin/Jumbotron";
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
        API.getWarehouses()
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err);
            });
    }

    addBrand = event => {
        event.preventDefault();
        let brandName = this.state.brandName
        API.addBrand(brandName)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err);
            });
    }

    addStyle = event => {
        event.preventDefault();
        let styleInfo = {
            styleNum: this.state.styleObj.styleNum,
            styleName: this.state.styleObj.styleName,
            img: this.state.styleObj.img,
            type: this.state.styleObj.type,
            description: this.state.styleObj.description,
            BrandId: this.state.styleObj.BrandId
        }
        API.addStyle(styleInfo)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err);
            });
    }

    addColor = event => {
        event.preventDefault();
        let colorInfo = {
            color: this.state.colorObj.color,
            hexCode: this.state.colorObj.hexCode,
            BrandId: this.state.colorObj.BrandId,
            StyleId: this.state.colorObj.StyleId
        }
        API.addColor(colorInfo)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err);
            });
    }

    addSize = event => {
        event.preventDefault();
        let sizeInfo = {
            size: this.state.sizeObj.size,
            cost: this.state.sizeObj.cost,
            BrandId: this.state.sizeObj.BrandId,
            StyleId: this.state.sizeObj.StyleId,
            ColorId: this.state.sizeObj.ColorId
        }
        API.addSize(sizeInfo)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err);
            });
    }

    addStock = event => {
        event.preventDefault();
        let stockInfo = {
            name: this.state.stockObj.name,
            qty: this.state.stockObj.qty,
            WarehouseId: this.state.stockObj.WarehouseId,
            SizeId: this.state.stockObj.SizeId
        }
        API.addStock(stockInfo)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {

        const { addBrand, addStyle, addColor, addSize } = this.state

        if (!addBrand && !addStyle && !addColor && !addSize) {
            return (
                <div className="container jumbotron" align="center">
                    <div className="row">
                        <div className="col-sm">
                            <h1>Admin</h1>
                        </div>
                    </div>
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
                                disabled={true}
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
                    onClick={
                        () => {
                            let key;
                            switch (true) {
                                case this.state.addBrand:
                                    key = 'addBrand';
                                    break;
                                case this.state.addStyle:
                                    key = 'addStyle'
                                    break;
                                case this.state.addColor:
                                    key = 'addColor'
                                    break;
                                default:
                                    key = 'addSize'
                                    break;
                            }
                            this.setState({ [key]: false })
                        }
                    }
                    text={
                        this.state.addBrand ?
                            'Add Brand'
                            :
                            this.state.addStyle ?
                                'Add Style'
                                :
                                this.state.addColor ?
                                    'Add Color'
                                    :
                                    this.state.addSize ?
                                        'Add Size'
                                        :
                                        ''
                    }
                />
            );
        }
    }
}




export default Admin;
