import React from "react";
import createReactClass from "create-react-class";

import {Input, Item, Label} from "native-base";

const _Input = createReactClass({
    focus(){
        //this.refs.input && this.refs.input.focus()
        this.input && this.input._root.focus();
    },

    render(){
        const {field, onSubmit, onChangeField} = this.props;
        return (
            <Item floatingLabel>
                <Label>{field}</Label>
                <Input
                    getRef = {(input) => this.input = input}
                    onChangeText = {(text) => onChangeField(text)}
                    onSubmitEditing = {onSubmit}
                    {...this.props}/>
            </Item>
        )
    }

})

export default _Input;
