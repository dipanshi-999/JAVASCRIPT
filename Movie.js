// DOM references

const searchInput =
    document.getElementById("searchInput");

const searchBtn =
    document.getElementById("searchBtn");

const moviesDiv =
    document.getElementById("movies");


// Fetch movies

async function searchMovies() {

    const query =
        searchInput.value.trim();

    if (query === "") return;

    moviesDiv.innerHTML =
        "<h2>Loading...</h2>";

    try {

        const response =
            await fetch(
                `https://www.omdbapi.com/?s=${query}&apikey=f48e9f2f`
            );

        const data =
            await response.json();

        if (data.Response === "False") {

            moviesDiv.innerHTML =
                `<h2>No movies found</h2>`;

            return;
        }

        renderMovies(data.Search);

    }
    catch (error) {

        moviesDiv.innerHTML =
            `<h2>Error fetching data</h2>`;
    }
}


// Render movies

function renderMovies(movies) {

    moviesDiv.innerHTML = "";

    movies.forEach(movie => {

        moviesDiv.innerHTML += `

            <div class="movie-card">

                <img
                    src="${movie.Poster}"
                    alt="${movie.Title}"
                >

                <div class="movie-info">

                    <h3>${movie.Title}</h3>

                    <p>
                        Year:
                        ${movie.Year}
                    </p>

                </div>

            </div>
        `;
    });
}


// Event listener

searchBtn.addEventListener(
    "click",
    searchMovies
);