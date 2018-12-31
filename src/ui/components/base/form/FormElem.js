import React from "react";
import createReactClass from "create-react-class";
import ErrorBox from "../error/ErrorBox.js";
import Input from "./Input.js";

import { FormElements } from "./formEnum.js";

const _FormElem = createReactClass({
    focus(){
        this.input && this.input.focus();
    },

    render(){
        const {type} = this.props;
        switch(type){
            case FormElements.text:
                return <Input
                    ref = {(input) => this.input = input}
                    {...this.props} />
            default:
                return <ErrorBox errorText = {"errorUI"} />;
        }
    }

});

export default _FormElem;
