//=== General =========================================================================================

var CurrentTheme = "dark";
var CurrentPage = "Home";
var DisplayHint = true;

window.onscroll = function() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    {
        document.getElementById("ScrollTop").style.display = "block";
    }
    else
    {
        document.getElementById("ScrollTop").style.display = "none";
    }
}

// Show the specified page and hide any other pages
function ShowPage(id)
{
    var setPageVisible = function(id, visible)
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

    if(id == CurrentPage)
        return;

    if(DisplayHint)
    {
        DisplayHint = false;
        document.getElementById("StartHint").style.display = "none";
    }

    if(CurrentPage == "Home")
    {
        setPageVisible(id, true);
    }
    else
    {
        setPageVisible(CurrentPage, false);
        setTimeout(function() { setPageVisible(id, true); }, 250);
    }

    SetTitle(id);
    CurrentPage = id;
}

// Set the title of the webpage 
function SetTitle(text)
{
    document.title = "JM | " + text;
}

// Set the website colour scheme
function SetTheme(theme)
{
    CurrentTheme = theme;
    const element = document.getElementById("theme");

    element.href = "style/theme-" + theme + ".css";
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

// Scroll the page up to the top
function ScrollToTop()
{
    window.scrollTo(0, 0);
}
