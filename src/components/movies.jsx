import React, { Component } from 'react';
// import Like from './common/like';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import MoviesTable from './moviesTable';
// import MovieForm from './movieForm';
import SearchBox from './common/searchBox';
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from '../services/fakeGenreService';
import { paginate } from '../utils/paginate';
import { Link } from 'react-router-dom';
import _ from 'lodash';


class Movies extends Component {
    state = {
        // movies: getMovies(),
        movies: [],
        genres:[],
        pageSize: 4,
        searchQuery: "",
        selectedGenre: null,
        currentPage: 1,
        sortColumn: { path: 'title', order: 'asc' }
    };

    componentDidMount () {
        const genres = [{ _id:"", name: 'All Genres' }, ...getGenres()]
        this.setState({ movies: getMovies(), genres });
    }

    handleDelete = (movie) => {
        console.log(movie);
        const movies = this.state.movies.filter( m => m._id !== movie._id )
        this.setState({ movies : movies });
    }

    handleLike = (movie) => {
        console.log("like clicked", movie);
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    }

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    }

    handleGenreSelect = (genre) => {
        // console.log(genre);
        this.setState({ searchQuery: "", selectedGenre: genre, currentPage: 1 });
    }

    handleSearch = (query) => {
        this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
    }

    // handleSort = (path) => {
    //     // console.log(path);
    //     // this.setState({ sortColumn: { path, order: 'asc' } });
        
    //     const sortColumn = {...this.state.sortColumn};
    //     if (sortColumn.path === path) {
    //         sortColumn.order = (sortColumn.order === "asc") ? "desc" : "asc";
    //     }
    //     else {
    //         sortColumn.path = path;
    //         sortColumn.order = "asc";
    //     }
        
    //     this.setState({ sortColumn });
    // }

    handleSort = (sortColumn) => {
        this.setState({ sortColumn });
    }

    // getPagedData = () => {
    //     const { pageSize, currentPage, sortColumn, selectedGenre, movies: allMovies } = this.state;

    //     const filteredMovies = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;
        
    //     const sortedMovies = _.orderBy(filteredMovies, [sortColumn.path], [sortColumn.order]);
        
    //     const movies = paginate(sortedMovies, currentPage, pageSize);
        
    //     return { totalCount: filteredMovies.length, data: movies };

    // }

    getPagedData = () => {
        const { pageSize, currentPage, sortColumn, searchQuery, selectedGenre, movies: allMovies } = this.state;
        let filteredMovies = allMovies;

        if (searchQuery) {
            filteredMovies = allMovies.filter(m => m.title.toLowerCase().startsWith(searchQuery.toLowerCase()));
        }
        else if (selectedGenre && selectedGenre._id) {
            filteredMovies = allMovies.filter(m => m.genre._id === selectedGenre._id);    
        }
        
        const sortedMovies = _.orderBy(filteredMovies, [sortColumn.path], [sortColumn.order]);
        const movies = paginate(sortedMovies, currentPage, pageSize);
        return { totalCount: filteredMovies.length, data: movies };
    }

    render() { 
        const { length: count} = this.state.movies;
        const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
        // const { pageSize, currentPage, sortColumn, selectedGenre, movies: allMovies } = this.state;

        if(count === 0 ) {
            return <p><b>No movies in the list.</b></p>
        }
        
        else {
            const { totalCount, data: movies} = this.getPagedData();
            // const filteredMovies = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;
            
            // const sortedMovies = _.orderBy(filteredMovies, [sortColumn.path], [sortColumn.order])
            
            // // const movies = paginate(allMovies, currentPage, pageSize);
            // // const movies = paginate(filteredMovies, currentPage, pageSize);
            // const movies = paginate(sortedMovies, currentPage, pageSize);


            return (
                <div className='row'>
                    <div className="col-3">
                        <ListGroup
                            items={this.state.genres}
                            // textProperty="name"
                            // valueProperty="_id"
                            selectedItem={this.state.selectedGenre}
                            onItemSelect={this.handleGenreSelect}
                        />
                    </div>

                    <div className="col">
                        <Link to="/movies/new" className="btn btn-primary my-2">New Movie</Link>
                        
                        {/* <p><b>There are {count} movies.</b></p> */}
                        {/* <p><b>There are {filteredMovies.length} movies.</b></p> */}
                        <p><b>There are {totalCount} movies.</b></p>
                    
                        <SearchBox 
                            value={searchQuery} 
                            onChange={this.handleSearch}
                        />

                        <MoviesTable
                            movies={movies}
                            sortColumn={sortColumn}
                            onLike={this.handleLike}
                            onDelete={this.handleDelete}
                            onSort={this.handleSort}
                        />
                        {/* <table className="table">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Genre</th>
                                    <th>Stock</th>
                                    <th>Rate</th>
                                    <th>Like</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {movies.map(movie => (
                                    <tr key={movie._id}>
                                        <td>{movie.title}</td>
                                        <td>{movie.genre.name}</td>
                                        <td>{movie.numberInStock}</td>
                                        <td>{movie.dailyRentalRate}</td>
                                        <td>
                                            <Like 
                                                liked={movie.liked} 
                                                // onClick={this.handleLike}
                                                onClick={() => this.handleLike(movie)}
                                            />
                                        </td>
                                        <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                                    </tr>
                                ))}
                                
                            </tbody>
                        </table> */}

                        <Pagination
                            // itemsCount={this.state.movies.length} 
                            // itemsCount={count}
                            // itemsCount="abc"
                            // itemsCount={filteredMovies.length}
                            itemsCount={totalCount}
                            
                            // pageSize={this.state.pageSize}
                            // pageSize= {10}
                            pageSize={pageSize}
                            
                            // currentPage={this.state.currentPage}
                            currentPage={currentPage}
                            
                            onPageChange={this.handlePageChange}
                        />

                    </div>
                </div>
            );
        }
    }
}
 
export default Movies;  