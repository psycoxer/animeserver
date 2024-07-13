document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const searchInput = document.getElementById("search").value;
    window.location.href = `/search/${searchInput}`;
  });
