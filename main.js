//=== General =========================================================================================

var CurrentTheme = "light";
var CurrentPage = "Home";

// Toggle between light and dark themes
function ToggleTheme()
{
    SetTheme((CurrentTheme == "light" ? "dark" : "light"));
}

// Show the specified page and hide any other pages
function ShowPage(id)
{
    if(id == CurrentPage)
        return;

    if(CurrentPage == "Home")
    {
        SetPageVisibility(id, true);
    }
    else
    {
        SetPageVisibility(CurrentPage, false);
        setTimeout(function() { SetPageVisibility(id, true); }, 250);
    }

    SetTitle(id);
    GamepadHistory = [];
    CurrentPage = id;
}

// Scroll the page down to a block, accounting for the header
function ScrollToBlock(id)
{
    const header = document.getElementsByTagName("header")[0];
    const project = document.getElementById(id);

    const rect = project.getBoundingClientRect();
    var pos = (rect.top - (header.offsetHeight + 10));

    window.scrollTo(0, pos);
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
    CurrentTheme = theme;
    const root = document.querySelector(':root');
    root.style.setProperty("--primary", "var(--" + theme + "-primary)");
    root.style.setProperty("--secondary", "var(--" + theme + "-secondary)");
    root.style.setProperty("--tertiary", "var(--" + theme + "-tertiary)");
    root.style.setProperty("--text", "var(--" + theme + "-text)");
    root.style.setProperty("--border", "var(--" + theme + "-border)");
}


//=== Gamepad =========================================================================================

const BUTTON = Object.freeze({
    DPADUP: 0,
    DPADDOWN: 1,
    DPADLEFT: 2,
    DPADRIGHT: 3,
    DPADCENTER: 4,
    A: 5,
    B: 6,
    X: 7,
    Y: 8,
    START: 9,
    SELECT: 10
});
var GamepadHistory = [ ];

function RegisterPress(button)
{
    if(GamepadHistory.length > 15)
    {
        GamepadHistory.shift();
    }

    GamepadHistory.push(button);

    if(EvaluateCombo([BUTTON.DPADUP, BUTTON.DPADUP, BUTTON.DPADDOWN, BUTTON.DPADDOWN, BUTTON.DPADLEFT, BUTTON.DPADRIGHT, BUTTON.DPADLEFT, BUTTON.DPADRIGHT, BUTTON.B, BUTTON.A, BUTTON.START])) // Konami Code
    {
        const element = document.getElementById("Gamepad-Output");
        element.textContent = "Konami Code!";
    }
    else
    {
        const element = document.getElementById("Gamepad-Output");
        element.textContent = "";
    }
}

function EvaluateCombo(combo)
{
    for (let index = 0; index < combo.length; ++index) 
    {
        if(GamepadHistory[GamepadHistory.length - index] != combo[combo.length - index])
        {
            return false;
        }
    }

    return true;
}