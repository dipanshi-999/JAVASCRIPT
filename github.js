// Dom refrences 

const usernameInput =
    document.getElementById("username");

const searchBtn =
    document.getElementById("searchBtn");

const profileDiv =
    document.getElementById("profile");


// Fetching the github Profile 

async function fetchProfile() {

    const username =
        usernameInput.value.trim();

    if (username === "") return;

    profileDiv.innerHTML =
        "<p>Loading...</p>";

    try {
        const response =
            await fetch(
                `https://api.github.com/users/${username}`
            );

        if (!response.ok) {
            throw new Error(
                "User Not Found"
            );
        }

        const data =
            await response.json();

        renderProfile(data);
    }

    catch (error) {
        profileDiv.innerHTML =
            `<p>${error.message}</p>`;
    }
}

// Render Profile UI 

function renderProfile(user) {
    profileDiv.innerHTML = `

        <div class="profile-card">

            <img src="${user.avatar_url}">

            <h2>${user.name}</h2>

            <p>${user.bio || "No bio"}</p>

            <p>

                Followers:

                ${user.followers}

            </p>

            <p>

                Public Repos:

                ${user.public_repos}

            </p>

            <a

                href="${user.html_url}"

                target="_blank"

            >

                Visit Profile

            </a>

        </div>

    `;

}

// Event listener

searchBtn.addEventListener(

    "click",

    fetchProfile

);

