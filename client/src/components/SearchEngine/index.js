import React, { Component } from "react";
import API from "../../utils/API";
import DropSearch from "../Admin/DropSearch";
import OptionChild from "../Admin/DropSearch/OptionChild";

class SearchEngine extends Component {

    state = {
        options: [],
        input: ''
    }

    componentDidMount() {
        // <OptionChild />
    }

    handleInputChange = event => {

        const { name, value } = event.target;
        const filterVal = event.target.value.toUpperCase()
        let newOptions = []
        let filterOption;

        if (value !== '') {
            API.getAllStyles()
            .then(res => {
                res.data.forEach((style, i) => {
                    filterOption = style.styleNum.toUpperCase()
                    if (filterOption.includes(filterVal)) {
                        console.log(filterVal)
                        newOptions.push(
                            <OptionChild
                                key={i + 'style'}
                                id={style.id}
                                name={'styles'}
                                text={style.styleNum}
                                handleDropSelect={''}
                                style={'none'}
                            />
                        )
                    }
                })
                console.log('styles updated')

                API.getAllBrands()
                    .then(res => {
                        res.data.forEach((brand, i) => {
                            filterOption = brand.brandName.toUpperCase()
                            if (filterOption.includes(filterVal)) {
                                console.log(filterVal)
                                newOptions.push(
                                    <OptionChild
                                        key={i + 'brand'}
                                        id={brand.id}
                                        name={'brands'}
                                        text={brand.brandName}
                                        handleDropSelect={''}
                                    />
                                )
                            }
                        })
                        console.log('brands updated')

                        this.setState({
                            input: value.trim(),
                            options: newOptions
                        });
                    })
                    .catch(err => console.log(err))

            })
            .catch(err => console.log(err))
        }
        else {
            this.setState({
                input: value.trim(),
                options: []
            });
        }
    };

    render() {
        return (
            <div className='row'>
                <div className='col-sm'>
                    <DropSearch
                        name={'input'}
                        options={this.state.options}
                        value={this.state.input}
                        // handleDropSelect={this.handleDropSelect}
                        handleInputChange={this.handleInputChange}
                        placeholder="Search All Garments"
                        disabled={false}
                    />
                </div>
            </div>
        )
    }
}

export default SearchEngine;