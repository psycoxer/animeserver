function favoriteAnime(AnimeTitle) {
    // Safely check for localStorage support
    if (typeof Storage === "undefined") {
        alert("Your browser does not support favorites.");
        return;
    }

    // Get the current page's title and URL
    var title = AnimeTitle;
    var currentUrl = window.location.href;

    // Create an object to store anime details
    var animeToFavorite = {
        title: title,
        url: currentUrl,
    };

    // Retrieve existing favorites from local storage
    var favorites = [];
    try {
        favorites = JSON.parse(localStorage.getItem("favoriteAnimes")) || [];
    } catch (e) {
        favorites = [];
    }

    // Check if this anime is already in favorites
    var isDuplicate = false;
    for (var i = 0; i < favorites.length; i++) {
        if (favorites[i].url === currentUrl) {
            isDuplicate = true;
            break;
        }
    }

    if (!isDuplicate) {
        // Add the new favorite
        favorites.push(animeToFavorite);

        // Save back to local storage
        try {
            localStorage.setItem("favoriteAnimes", JSON.stringify(favorites));
            alert("Anime added to favorites!");
        } catch (e) {
            // Handle quota exceeded error
            if (e.name === "QuotaExceededError") {
                alert("Favorites storage is full. Please remove some favorites.");
            } else {
                alert("Unable to save favorite.");
            }
        }
    } else {
        alert("This anime is already in your favorites!");
    }
}

// Function to get favorites
function getFavoriteAnimes() {
    try {
        return JSON.parse(localStorage.getItem("favoriteAnimes")) || [];
    } catch (e) {
        return [];
    }
}

// Function to remove a favorite
// function removeFavorite(url) {
//     try {
//         var favorites = JSON.parse(localStorage.getItem("favoriteAnimes")) || [];
//         var newFavorites = [];

//         for (var i = 0; i < favorites.length; i++) {
//             if (favorites[i].url !== url) {
//                 newFavorites.push(favorites[i]);
//             }
//         }

//         localStorage.setItem("favoriteAnimes", JSON.stringify(newFavorites));
//     } catch (e) {}
// }
