import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './common/input';
import Form from './common/form';


class LoginForm extends Form {
    state = {
        data: { username: "", password: "" },
        errors: { }
    };

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    };

    // username = React.createRef();

    // componentDidMount() {
    //      this.username.current.focus();
    // }

    // validate = () => {
    //     const options = { abortEarly: false };
    //     // const result = Joi.validate(this.state.data, this.schema, options);
    //     // console.log(result);
        
    //     const { error } = Joi.validate(this.state.data, this.schema, options);

    //     if (!error) {return null;}
    //     else {
    //         const errors = {};
    //         for (let item of error.details) {
    //             errors[item.path[0]] = item.message;
    //             // console.log(item.path[0]);
    //         }
    //         return errors;
    //     }



    //     // const errors = {};
    //     // const { data } = this.state;

    //     // if (data.username.trim() === '') {
    //     //     errors.username = "Username is required.";
    //     // } 
    //     // if (data.password.trim() === '') {
    //     //     errors.password = "Password is required.";
    //     // }

    //     // return Object.keys(errors).length === 0 ? null : errors;
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault();

    //     const errors = this.validate();
    //     // console.log(errors);
    //     this.setState({ errors: errors || {} });
    //     if (errors) {
    //         return ;
    //     }

    //     this.doSubmit();

    //     // Call the server
    //     // const username = document.getElementById('username').value;
    //     // const username = this.username.current.value; // good practice in dom ref
    //     // console.log("submitted");
    // }

    doSubmit = () => {
        // Call the server
        console.log("Login submitted");
    }

    // validateProperty = ({ name, value }) => {
    //     const obj = { [name]: value };
    //     const schema = { [name]: this.schema[name] };
    //     const { error } = Joi.validate(obj, schema);
    //     return error ? error.details[0].message : null;
        
    //     // if (!error) {return null;}
    //     // else {return error.details[0].message;}

        

    //     // if (name === 'username') {
    //     //     if (value.trim() === '') {
    //     //         return "Username is required.";                
    //     //     }
    //     //     if (value.trim() === '88') {
    //     //         return "Username is 88";                
    //     //     }
    //     //     //// other rules
    //     // }

    //     // if (name === 'password') {
    //     //     if (value.trim() === '') {
    //     //         return "Password is required.";                
    //     //     }
    //     //     //// other rules
    //     // }
    // }

    // handleChange = (e) => {
    //     const data = { ...this.state.data };
    //     // data.username = e.currentTarget.value;
    //     data[e.currentTarget.name] = e.currentTarget.value;
    //     this.setState({ data });
    // }

    // handleChange = ({ currentTarget: input }) => {
    //     const errors = {...this.state.errors};
    //     const errorMessage = this.validateProperty(input);
    //     if (errorMessage) {
    //         errors[input.name] = errorMessage;
    //     }
    //     else {
    //         delete errors[input.name];
    //     }

    //     const data = { ...this.state.data };
    //     data[input.name] = input.value;
    //     this.setState({ data, errors });
    // }

    render() { 
        // const { data, errors } = this.state;

        return (
            <div className="container">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    
                    {this.renderInput("username", "Username")}
                    {/* <Input
                        name="username" 
                        label="Username"
                        value={data.username}
                        onChange={this.handleChange}
                        error={errors.username}
                    /> */}
                    
                    {/* <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            // value={this.state.data.username} 
                            value={data.username} 
                            onChange={this.handleChange}
                            ref={this.username} 
                            id="username" 
                            name="username" 
                            type="text" 
                            className="form-control" 
                            autoFocus 
                        />
                    </div> */}
                    
                    {this.renderInput("password", "Password", "password")}
                    {/* <Input
                        name="password" 
                        label="Password"
                        value={data.password}
                        onChange={this.handleChange}
                        error={errors.password}
                    /> */}

                    {/* <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            // value={this.state.data.password} 
                            value={data.password} 
                            onChange={this.handleChange}
                            id="password" 
                            name="password" 
                            type="text" 
                            className="form-control" 
                        />
                    </div> */}

                    {this.renderButton("Login")}
                   
                    {/* <button 
                        className="btn btn-primary" 
                        disabled={this.validate()} 
                    >
                        Login
                    </button> */}
                </form>
            </div>
        );
    }
}
 
export default LoginForm;