import React from 'react';

const Input = ({ name, label, error, ...rest }) => {
    return (  
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
                {...rest}
                id={name} 
                name={name} 
                className="form-control my-2" 
                // autoFocus 
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default Input;


// const Input = ({ name, label, value, type, error, onChange }) => {
//     return (  
//         <div className="form-group">
//             <label htmlFor={name}>{label}</label>
//             <input 
//                 id={name} 
//                 name={name} 
//                 value={value} 
//                 type={type}
//                 onChange={onChange}
//                 className="form-control" 
//                 // autoFocus 
//             />
//             {error && <div className="alert alert-danger">{error}</div>}
//         </div>
//     );
// }
 
// export default Input;