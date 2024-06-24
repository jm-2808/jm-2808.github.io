//=== General =========================================================================================

var currentTheme = "light";
var currentPage = "Home";

// Toggle between light and dark themes
function ToggleTheme()
{
    SetTheme((currentTheme == "light" ? "dark" : "light"));
}

// Show the specified page and hide any other pages
function ShowPage(id)
{
    if(id == currentPage)
        return;

    if(currentPage == "Home")
    {
        SetPageVisibility(id, true);
    }
    else
    {
        SetPageVisibility(currentPage, false);
        setTimeout(function() { SetPageVisibility(id, true); }, 250);
    }

    SetTitle(id);
    currentPage = id;
}

//--- Helper Functions ----------------------------------------

// Set the title of the webpage 
function SetTitle(text)
{
    document.title = "JM | " + text;
}

// Set the visibility of a page (make sure delays match the transition duration of the page class in css file)
function SetPageVisibility(id, visible)
{
    const element = document.getElementById(id);

    if(visible)
    {
        element.style.width = "70%";
        setTimeout(function() { element.style.maxHeight = element.scrollHeight + "px"; }, 250);
    }
    else
    {
        element.style.maxHeight = "0";
        setTimeout(function() { element.style.width = 0; }, 250);
    }
}

// Set the website colour scheme
function SetTheme(theme)
{
    currentTheme = theme;
    const root = document.querySelector(':root');
    root.style.setProperty("--primary", "var(--" + theme + "-primary)");
    root.style.setProperty("--secondary", "var(--" + theme + "-secondary)");
    root.style.setProperty("--tertiary", "var(--" + theme + "-tertiary)");
    root.style.setProperty("--text", "var(--" + theme + "-text)");
    root.style.setProperty("--border", "var(--" + theme + "-border)");
}


//=== Easter Eggs =====================================================================================