import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../../../components/Form";
import API from "../../../utils/API";

class AdminJumbo extends Component {

    state = {

    }

    render() {
        return (
            <div className="container jumbotron" align="center">
                <div className="row">
                    <div className="col-sm">
                        <h1>{this.props.text}</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm">
                        <FormBtn
                            text={'Back'}
                            classes={"btn-primary"}
                            onClick={this.props.onClick}
                        />
                    </div>
                </div>

                <div>

                </div>

            </div>
        );
    }
}




export default AdminJumbo;
