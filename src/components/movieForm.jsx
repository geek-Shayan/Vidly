import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { max } from 'lodash';


class MovieForm extends Form {
    state = {  
        data: { title: "", genre: "", numberInStock: "", dailyRentalRate: "" },
        errors: { }
    };

    schema = {
        title: Joi.string().required().label("Title"),
        genre: Joi.string().required().label("Genre"),
        numberInStock: Joi.number().required().min(0).label("Number in Stock"),
        dailyRentalRate: Joi.number().required().min(0).max(10).label("Rate")
    };

    doSubmit = () => {
        // Call the server
        console.log("MovieForm submitted");
    }

    render() { 
        const {match, history}= this.props;
        return (
            <div className="container">
                <h1>MovieForm</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title", "Title", "text")}
                    {this.renderInput("genre", "Genre", "text")}
                    {this.renderInput("numberInStock", "Number in Stock", "number")}
                    {this.renderInput("dailyRentalRate", "Rate", "number")}
                    {this.renderButton("Save")}
                </form>

                <h1>MovieForm{match.params.id}</h1> 
                {/* <button className="btn btn-primary" onClick={() => history.push("/movies")}>Save</button> */}
            </div>
        );
    }
}
 
export default MovieForm;



// const MovieForm = ({ match, history }) => {
//     return ( 
//         <div>
//             <h1>MovieForm{match.params.id}</h1> 
//             <button className="btn btn-primary" onClick={() => history.push("/movies")}>Save</button>
//         </div>
//     );
// }
 
// export default MovieForm;