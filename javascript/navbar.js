let searchForm = document.getElementById("header-search-form");
let searchButton = searchForm.querySelector("button");
let searchInput = searchForm.querySelector("input");


window.addEventListener("load", function(){
    changeItemsPlaces();

    window.addEventListener('resize', changeItemsPlaces);

    searchButton.addEventListener("click", dispalySearchBox);

    this.document.addEventListener("click", hideSearchBox);
    this.document.addEventListener("keydown", handleKeysActions);
}
)

function dispalySearchBox(e)
{
    e.preventDefault();
    searchInput.classList.remove("d-none");
    searchInput.focus();
}

function hideSearchBox(e)
{
    var isClickInsideSearchBox = searchInput.contains(e.target);
    
    if (!isClickInsideSearchBox) {
        if(!searchButton.contains(e.target))
            searchInput.classList.add("d-none");
    }
}

function handleKeysActions(e)
{
    if(e.key === "Escape")
        searchInput.classList.add("d-none");
}

function changeItemsPlaces()
{
    let navbar = document.getElementById("navbarSupportedContent");
    let headerRightSection = document.querySelector("#header-right-section")
    let rightSectionFormDiv = headerRightSection.querySelector("div:nth-child(1)");
    let loginBtn = document.getElementById("loginBtn");

    if(window.innerWidth < 992)
    {
        navbar.querySelector("ul>li:nth-child(6)").appendChild(loginBtn);
        //navbar.appendChild(loginBtn);
        navbar.appendChild(searchForm);
        console.log("appended");
    }

    else
    {
        headerRightSection.appendChild(loginBtn);
        rightSectionFormDiv.appendChild(searchForm);
        console.log("deleted");
    }



}