import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../../components/Form";
import API from "../../utils/API";

class Admin extends Component {

    state = {

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

    render() {
        return (
            <div className="container" align="center">

                Admin

            </div>
        );
    }
}




export default Admin;
