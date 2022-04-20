import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import PaginationComponent from "../components/PaginationComponent";
import { movies$ } from "../movies";
import { Dropdown, Form } from "react-bootstrap";

function MoviesList() {
  // Declare our states
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerMovie] = useState(4);
  const [movies, setMovies] = useState([]);
  const [filtredCategories, setFiltredCategories] = useState([]);

  // Get current movies
  const index0fLastMovie = currentPage * moviesPerPage;
  const index0fFirstMovie = index0fLastMovie - moviesPerPage;
  const currentMovies = movies.slice(index0fFirstMovie, index0fLastMovie);

  // useEffect
  useEffect(() => {
    movies$.then((data) => {
      setMovies(data);
    });
  }, [movies]);

  // get categories and nb of movies
  let nbMovies = 0;
  const getUnique = () => {
    const arrayCateg = [];
    // eslint-disable-next-line array-callback-return
    movies.map((movie) => {
      nbMovies++;
      arrayCateg.push(movie.category);
    });
    return Array.from(new Set(arrayCateg)).sort();
  };
  const categoriesList = getUnique();

  //Actions
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const toLike = (id) => {
    setMovies((oldArray) => [
      ...oldArray,
      movies[id + index0fFirstMovie].likes++,
    ]);
  };
  const toDislike = (id) => {
    setMovies((oldArray) => [
      ...oldArray,
      movies[id + index0fFirstMovie].dislikes++,
    ]);
  };
  const toDelete = (id) => {
    setMovies((oldArray) => [
      ...oldArray,
      oldArray.splice(id + index0fFirstMovie, 1),
    ]);
  };



  return (
    <>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h6 className="h2">
              Found{" "}
              <span style={{ color: "#FF4F47" }}>
                {nbMovies === 1 ? nbMovies + " movie" : nbMovies + " movies"}{" "}
              </span>{" "}
              in total
            </h6>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="d-flex">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="outline-secondary"
                    id="dropdown-basic"
                  >
                    Select Categories
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {categoriesList.map((category, item) => (
                      <Form.Group className="m-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label={category} 
                        onChange={(event) => {
                          const value = event.target.checked;
                          console.log(value);
                          value ? setFiltredCategories(
                            filtredCategories.concat(category)
                          ): setFiltredCategories((oldArray) => [
                            ...oldArray,
                            oldArray.splice(oldArray.indexOf(category), 1),
                          ])
                            
                         
                      
                        }}
                        />
                      </Form.Group>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>

                <Form.Select
                  aria-label="Default select example"
                  className="btn-outline-secondary mx-3"
                  onChange={(e) => {
                    setMoviesPerMovie(e.target.value);
                  }}
                >
                  <option value="4">4 Movies Per Page</option>
                  <option value="8">8 Movies Per Page</option>
                  <option value="12">12 Movies Per Page</option>
                </Form.Select>
              </div>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
            {currentMovies.map((movie, item) =>
              filtredCategories.length === 0 ? (
                <MovieCard
                  id={item}
                  img_url={movie.img_url}
                  name={movie.title}
                  categories={movie.category}
                  like={movie.likes}
                  dislike={movie.dislikes}
                  toLike={toLike}
                  toDislike={toDislike}
                  toDelete={toDelete}
                ></MovieCard>
              ) : (
                filtredCategories.includes(movie.category) && (
                  <MovieCard
                    id={item}
                    img_url={movie.img_url}
                    name={movie.title}
                    categories={movie.category}
                    like={movie.likes}
                    dislike={movie.dislikes}
                    toLike={toLike}
                    toDislike={toDislike}
                    toDelete={toDelete}
                  ></MovieCard>
                )
              )
            )}
          </div>
          <div className="mt-5">
            <PaginationComponent
              moviesPerPage={moviesPerPage}
              totalMovies={movies.length}
              paginate={paginate}
              currentPage={currentPage}
            ></PaginationComponent>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoviesList;
