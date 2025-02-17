//=== Events ==========================================================================================

window.onload = function()
{
    SITE.LoadPage("home");
}

//-----------------------------------------------------------------

window.onscroll = function() 
{
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    {
        document.getElementById("scroll-top-button").style.display = "";
    }
    else
    {
        document.getElementById("scroll-top-button").style.display = "none";
    }
}

//=== Site ============================================================================================

var SITE = SITE || {}; 

//-----------------------------------------------------------------

SITE.Page = "blank";

//-----------------------------------------------------------------

SITE.Hints = Object.freeze([
    "This loading screen doesn't need to be here, but it looks nicer than the new page instantly appearing",
    "Cannot find 'Package McPackageface'",
    "transcendental cha-cha time",
    "&#8593; &#8593; &#8595; &#8595; &#8592; &#8594; &#8592; &#8594; B A",
    "Press A to jump",
    "The Robotniks have entered the chat",
    "<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>Never gonna give you up</a>"
]);

//-----------------------------------------------------------------

SITE.SetTitle = function(title)
{
    document.title = "JM | " + title.toUpperCase();
}

//-----------------------------------------------------------------

SITE.ScrollTo = function(id)
{
    var pos = 0;
    if(id == "top")
    {
        pos = 0;
    }
    else
    {
        const main = getComputedStyle(document.getElementsByTagName("main")[0]);
        const element = document.getElementById(id);
        const rect = element.getBoundingClientRect();

        pos = rect.top - parseInt(main.gap);

        console.log(pos);
    }

    window.scrollTo(0, pos);
}

//-----------------------------------------------------------------

SITE.LoadTheme = function(theme)
{
    if(theme == "toggle")
    {
        const toggle = document.getElementById("theme-toggle");
        theme = (toggle.checked ? "light" : "dark");
    }

    const style = document.getElementById("theme-style");
    style.href = "site/themes/" + theme + ".css";
}

//-----------------------------------------------------------------

SITE.LoadPage = function(page)
{
    if(SITE.Page == page)        { return; }
    if(SITE.Page == "loading")   { return; }

    const loadAnim = 500;
    const loadTime = 1000;

    const screen = document.getElementById("loading-screen");
    const hint = document.getElementById("loading-hint");
    const oldPage = document.getElementById(SITE.Page);
    const newPage = document.getElementById(page);

    var duration = 0;
    if(SITE.Page != "blank")
    {
        // Switch pages when loading screen is opaque
        duration += loadAnim;
        setTimeout(function(){

            if(oldPage != null) { oldPage.hidden = true; }
            if(newPage != null) { newPage.hidden = false; }

        }, duration + 50); // Add a slight delay to ensure user doesn't see it
    }
    
    // Switch opacity when loading duration has elapsed
    duration += ( (SITE.Page != "blank") ? loadTime : 500 );
    setTimeout(function(){

        screen.style.opacity = 0;

    }, duration);

    // Change title and page when fully loaded
    duration += loadAnim;
    setTimeout(function(){

        SITE.Page = page;
        SITE.SetTitle(SITE.Page);

        screen.style.pointerEvents = "none";

        hint.innerHTML = "";

    }, duration);

    // Set properties to begin animation
    SITE.Page = "loading";
    SITE.SetTitle("loading...");
    SITE.ScrollTo("top");

    screen.style.opacity = 1;
    screen.style.pointerEvents = "auto";

    const index = Math.floor(Math.random() * SITE.Hints.length);
    hint.innerHTML = SITE.Hints[index];
}

//-----------------------------------------------------------------

SITE.ToggleProject = function(id)
{
    const project = document.getElementById("project-" + id);
    const toggle = project.getElementsByClassName("toggle")[0];
    const button = toggle.firstElementChild;
    
    if(!project.classList.contains("open"))
    {
        project.classList.add("open");
        
        project.style.height = project.scrollHeight + "px";
        project.style.paddingBottom = button.scrollHeight + "px";
        toggle.style.height = button.scrollHeight + "px";
        button.innerHTML = "Close";
    }
    else
    {
        project.classList.remove("open");
        
        project.style.height = "";
        project.style.paddingBottom = "";
        toggle.style.height = "";
        button.innerHTML = "Open";
    }
}

//=====================================================================================================
