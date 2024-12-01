document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const searchInput = document.getElementById("search").value;
    window.location.href = `/search/${searchInput}`;
});

function loadFavorites() {
    var favoritesList = document.getElementById("favoritesList");
    var noFavorites = document.getElementById("noFavorites");

    try {
        var favorites = JSON.parse(localStorage.getItem("favoriteAnimes")) || [];

        if (favorites.length === 0) {
            noFavorites.style.display = "block";
            favoritesList.innerHTML = "";
            return;
        }

        noFavorites.style.display = "none";
        favoritesList.innerHTML = favorites
            .map(function (fav) {
                return (
                    "<li>" +
                    '<a href="' +
                    fav.url +
                    '" title="' +
                    fav.title +
                    '">' +
                    fav.title +
                    "</a>" +
                    '<button class="remove-favorite" onclick="removeFavorite(\'' +
                    fav.url +
                    "')\">Delete</button>" +
                    "</li>"
                );
            })
            .join("");
    } catch (e) {
        noFavorites.style.display = "block";
        favoritesList.innerHTML = "";
    }
}

function removeFavorite(url) {
    try {
        var favorites = JSON.parse(localStorage.getItem("favoriteAnimes")) || [];
        var newFavorites = [];

        for (var i = 0; i < favorites.length; i++) {
            if (favorites[i].url !== url) {
                newFavorites.push(favorites[i]);
            }
        }

        localStorage.setItem("favoriteAnimes", JSON.stringify(newFavorites));
        loadFavorites(); // Refresh the list
    } catch (e) {}
}

// Load favorites when the page loads
window.onload = loadFavorites;
