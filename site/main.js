//=== Site ============================================================================================

var SITE = SITE || {}; 

//-----------------------------------------------------------------

SITE.Page = "blank";

//=== Events ==========================================================================================
// Delayed Page Open

setTimeout(function(){

    lucide.createIcons();

}, 5);

//-----------------------------------------------------------------
// On Load

window.onload = function()
{
    SITE.LoadPage("home");
}

//-----------------------------------------------------------------
// On Scroll

window.onscroll = function() 
{
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 50)
    {
        document.getElementById("scroll-top-button").style.display = "";
    }
    else
    {
        document.getElementById("scroll-top-button").style.display = "none";
    }
}

//=== Design ==========================================================================================

SITE.Generate = function(type, data)
{
    const script = document.currentScript;
    var content = "";

    if(type === "banner") //------------------------------------------------
    {
        var icon = "<i class='icon'></i>";
        if(data.icon)
        {
            icon = (data.icon.startsWith("lucide-") ? "<i class='icon'><i data-lucide='" + data.icon.replace("lucide-", "") + "'></i></i>" : "<img class='icon' src='" + data.icon + "'>");
        }

        var title = "<h1>" + data.title + "</h1>" + ( data.subtitle ? "<span class='text-small'>" + data.subtitle + "</span>" : "" );

        var notes = "";
        for (let index = 0; index < data.notes.length; ++index) 
        {
            notes += ((index > 0) ? "<div class='vr'></div>" : "") + "<span class='highlight'>" + data.notes[index].tag + "</span>" + data.notes[index].text;
        }

        content = "<div class='banner'>" + icon + "<div class='row title'>" + title + "</div><div class='row subtitle'>" + notes + "</div></div>";
    }
    else if(type === "project") //------------------------------------------
    {
        var website = "";
        if(data.website)
        {
            var title = (data.website.includes("github.com") ? "View Source Files" : "Visit Website" );
            var icon = (data.website.includes("github.com") ? "github" : "external-link" );
            website = "<a class='button' href='" + data.website + "' title='" + title + "' target='_blank'><i data-lucide='" + icon + "'></i></a>";
        }

        var video = "";
        if(data.video)
        {
            video = "<iframe class='video' src='" + data.video + "' title='Trailer'></iframe>";
            //video = "<iframe class='video' src='" + data.video + "' title='Trailer' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>";
        }

        var image = "<div class='image'><i data-lucide='cog'></i></div>";
        if(data.image)
        {
            image = (data.image.startsWith("lucide-") ? "<i class='image'><i data-lucide='" + data.image.replace("lucide-", "") + "'></i></i>" : "<img class='image' src='" + data.image + "'>");
        }

        var header = "<div class='row header'><h2 class='title'>" + data.title + "</h2><span class='subtitle'>" + data.duration + "</span></div>";
        var tagline = "<div class='row quote'>\"" + data.tagline + "\"</div>";

        var skills = "<div class='row skills'>";
        for (let index = 0; index < data.skills.length; ++index) 
        {
            skills += "<i data-skill='" + data.skills[index] + "'></i>";
        }
        skills += "</div>";

        content = "<div class='media'>" + website + video + image + "</div>" + header + tagline + skills + "<div class='toggle'><button class='button' onClick='SITE.ToggleProject(this);'>Open</button></div>";
    }
    else //-----------------------------------------------------------------
    {
        content += "<h1 class='title'>ERROR</h1>";
    }

    script.insertAdjacentHTML("afterend", content);
    script.remove();
}

//=== Function ========================================================================================

SITE.SetTitle = function(title)
{
    document.title = "JM | " + title.toUpperCase();
}

//-----------------------------------------------------------------

SITE.SetTheme = function(theme)
{
    if(theme == "toggle")
    {
        const toggle = document.getElementById("theme-toggle");
        theme = (toggle.checked ? "light" : "dark");
    }

    const style = document.getElementById("theme-style");
    style.href = "site/Themes/" + theme + ".css";
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

SITE.ShuffleHint = function()
{
    const element = document.getElementById("loading-hint");

    var hint = "";
    do
    {
        const index = Math.floor(Math.random() * DATA.Hints.length);
        var hint = DATA.Hints[index];
    } 
    while(hint == element.innerHTML)
    
    element.innerHTML = hint;
}

//-----------------------------------------------------------------

SITE.LoadPage = function(page)
{
    if(SITE.Page == page)        { return; }
    if(SITE.Page == "loading")   { return; }

    const loadAnim = 500;

    const screen = document.getElementById("loading-screen");
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
    duration += ( (SITE.Page != "blank") ? 500 : 250 );
    setTimeout(function(){

        screen.style.opacity = 0;

    }, duration);

    // Change title and page when fully loaded
    duration += loadAnim;
    setTimeout(function(){

        SITE.Page = page;
        SITE.SetTitle(SITE.Page);

        screen.style.pointerEvents = "";

    }, duration);

    // Set properties to begin animation
    SITE.Page = "loading";
    SITE.SetTitle("loading...");
    SITE.ShuffleHint();
    SITE.ScrollTo("top");

    screen.style.opacity = 1;
    screen.style.pointerEvents = "auto";
}

//-----------------------------------------------------------------

SITE.ToggleProject = function(toggle)
{
    const outer = toggle.parentElement;
    const project = outer.parentElement;

    if(!project.classList.contains("open"))
    {
        project.classList.add("open");
        
        project.style.height = project.scrollHeight + "px";
        project.style.paddingBottom = toggle.scrollHeight + "px";
        outer.style.height = toggle.scrollHeight + "px";
        toggle.textContent = "Close";
    }
    else
    {
        project.classList.remove("open");
        
        project.style.height = "";
        project.style.paddingBottom = "";
        outer.style.height = "";
        toggle.textContent = "Open";
    }
}

//=====================================================================================================
