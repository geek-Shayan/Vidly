import React, { Component } from 'react';
// import TableHeader from './common/tableHeader';
// import TableBody from './common/tableBody';
import Table from './common/table';
import Like from './common/like';
import { Link } from 'react-router-dom';

// const x =  <Like></Like> // React Element {}

class MoviesTable extends Component {
    columns = [
        { path: 'title', label: 'Title', content: (movie) => (<Link to={`/movies/${movie._id}`}>{movie.title}</Link>) },
        { path: 'genre.name', label: 'Genre' },
        { path: 'numberInStock', label: 'Stock' },
        { path: 'dailyRentalRate', label: 'Rate' },
        { key: "like", content: (movie) => (<Like liked={movie.liked} onClick={() => this.props.onLike(movie)}/>) },
        { key: "delete", content: (movie) => (<button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-sm">Delete</button>) }
    ];
    
    // raiseSort = (path) => {
    //     const sortColumn = {...this.props.sortColumn};
    //     if (sortColumn.path === path) {
    //         sortColumn.order = (sortColumn.order === "asc") ? "desc" : "asc";
    //     }
    //     else {
    //         sortColumn.path = path;
    //         sortColumn.order = "asc";
    //     }
    //     this. props.onSort(sortColumn);
    // }

    render() { 
        // const { movies, onDelete, onLike, onSort, sortColumn } = this.props;
        const { movies, onSort, sortColumn } = this.props;

        return (
            <Table
                columns={this.columns}
                sortColumn={sortColumn}
                onSort={onSort}
                data={movies}
            />
        );

        // return (
        //     <table className="table">
        //         <TableHeader
        //             columns={this.columns}
        //             sortColumn={sortColumn}
        //             onSort={onSort}
        //         />
        //         {/* <thead>
        //             <tr>
        //                 <th onClick={() => this.raiseSort("title")}>Title</th>
        //                 <th onClick={() => this.raiseSort("genre.name")}>Genre</th>
        //                 <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
        //                 <th onClick={() => this.raiseSort("dailyRentalRate")}>Rate</th>
        //                 <th>Like</th>
        //                 <th></th>
        //             </tr>
        //         </thead> */}

        //         <TableBody
        //             columns={this.columns}
        //             data={movies}
        //         />
        //         {/* <tbody>
        //             {movies.map(movie => (
        //                 <tr key={movie._id}>
        //                     <td>{movie.title}</td>
        //                     <td>{movie.genre.name}</td>
        //                     <td>{movie.numberInStock}</td>
        //                     <td>{movie.dailyRentalRate}</td>
        //                     <td>
        //                         <Like 
        //                             liked={movie.liked} 
        //                             // onClick={this.handleLike}
        //                             onClick={() => onLike(movie)}
        //                         />
        //                     </td>
        //                     <td><button onClick={() => onDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
        //                 </tr>
        //             ))}
                    
        //         </tbody> */}
        //     </table>
        // );
    }
}
 
export default MoviesTable;




// const MoviesTable = (props) => {
//     const { movies, onDelete, onLike, onSort } = props;

//     return (
//         <table className="table">
//             <thead>
//                 <tr>
//                     <th onClick={() => onSort("title")}>Title</th>
//                     <th onClick={() => onSort("genre.name")}>Genre</th>
//                     <th onClick={() => onSort("numberInStock")}>Stock</th>
//                     <th onClick={() => onSort("dailyRentalRate")}>Rate</th>
//                     <th>Like</th>
//                     <th></th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {movies.map(movie => (
//                     <tr key={movie._id}>
//                         <td>{movie.title}</td>
//                         <td>{movie.genre.name}</td>
//                         <td>{movie.numberInStock}</td>
//                         <td>{movie.dailyRentalRate}</td>
//                         <td>
//                             <Like 
//                                 liked={movie.liked} 
//                                 // onClick={this.handleLike}
//                                 onClick={() => onLike(movie)}
//                             />
//                         </td>
//                         <td><button onClick={() => onDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
//                     </tr>
//                 ))}
                
//             </tbody>
//         </table>
//     );
// }
 
// export default MoviesTable;