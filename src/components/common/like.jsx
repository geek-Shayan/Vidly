import React, { Component } from 'react';

// input: liked: boolean
// output: onclick

const Like = (props) => {
    let classes = "fa fa-heart";
        if (!props.liked) {
            classes += "-o";
        }
        return (
            <i 
                className={classes} 
                onClick={props.onClick} 
                style={{ cursor: 'pointer' }} 
                aria-hidden="true"
            />
        );
}
 
export default Like;



// class Like extends Component { 
//     render() { 
//         let classes = "fa fa-heart";
//         if (!this.props.liked) {
//             classes += "-o";
//         }
//         return (
//             <i 
//                 className={classes} 
//                 onClick={this.props.onClick} 
//                 style={{ cursor: 'pointer' }} 
//                 aria-hidden="true"
//             />
//         );
//     }
// }
 
// export default Like;