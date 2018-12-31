import React from "react";
import createReactClass from "create-react-class";

import { Form } from "native-base";
import FormElem from "./form/FormElem.js";

import _ from "lodash";

/**
Form element. I want to have my own Form component since React Native doesn't
provide one. Notice that we don't create a functional component for this one (we
need to do the "next field on enter" feature and it is complicated to do it with
a functional component)

@prop fields: Object
@prop onChange: Function
@prop onSubmit: Function
@prop autoFocus: Boolean
*/

const _Form = createReactClass({
    getInitialState(){
        this.inputs = [];
        this.values = {};
        return null;
    },
    componentDidMount(){
        if(this.props.autoFocus){
            this.focusElement(0);
        }
    },

    focusElement(index){
        const { onSubmit, values } = this.props;
        if(index < this.inputs.length){
            this.inputs[index].focus();
        } else {
            onSubmit(values);
        }
    },

    render(){
        const { fields, onChange, name, values } = this.props;
        const onSubmit = (index) => {
            this.focusElement(index + 1);
        }

        const onChangeField = (field, value) => {
            //this.values[field] = value;
            let toSet = {};
            toSet[field] = value;
            onChange(Object.assign(values, toSet));
        }

        return (
            <Form>
                {
                    _.toPairs(fields)
                    .map(([field, props], index) =>
                        <FormElem
                            ref = {(input) => this.inputs[index] = input}
                            key = {name ? name + "_" + index : index}
                            field = {field}
                            onChangeField = {(value) => onChangeField(field, value)}
                            value = {values[field]}
                            onSubmit = {() => onSubmit(index)}
                            {...props}
                            />
                        )
                }
            </Form>
        )
    }
});

export default _Form;
