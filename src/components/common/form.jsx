import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
import Select from './select';

class Form extends Component {
    state = {  
        data: { },
        errors: { }
    } 

    validate = () => {
        const options = { abortEarly: false };
        // const result = Joi.validate(this.state.data, this.schema, options);
        // console.log(result);
        
        const { error } = Joi.validate(this.state.data, this.schema, options);

        if (!error) {return null;}
        else {
            const errors = {};
            for (let item of error.details) {
                errors[item.path[0]] = item.message;
                // console.log(item.path[0]);
            }
            return errors;
        }
    }

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate();
        // console.log(errors);
        this.setState({ errors: errors || {} });
        if (errors) {
            return ;
        }

        this.doSubmit();
    }

    handleChange = ({ currentTarget: input }) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if (errorMessage) {
            errors[input.name] = errorMessage;
        }
        else {
            delete errors[input.name];
        }

        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data, errors });
    }

    renderInput = (name, label, type) => {
        const { data, errors } = this.state;
        return (
            <Input
                type={type}
                name={name} 
                label={label}
                value={data[name]}
                onChange={this.handleChange}
                error={errors[name]}
            />
        );
    }

    renderSelect = (name, label, options) => {
        const { data, errors } = this.state;

        return (
            <Select
               name={name}
               label={label}
               value={data[name]}
               options={options}
               onChange={this.handleChange}
               error={errors[name]}
            />
        );
    }

    renderButton = (label) => {
        return (
            <button 
            className="btn btn-primary my-3" 
            disabled={this.validate()} 
            >
                {label}
            </button>
        );
    }

}
 
export default Form;