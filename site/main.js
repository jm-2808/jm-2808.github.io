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
    // General
    "This loading screen is purely aesthetic",
    "Cannot find 'Package McPackageface'",
    "&#8593; &#8593; &#8595; &#8595; &#8592; &#8594; &#8592; &#8594; B A",
    // Games
    "Press A to jump",
    "Gotta go fast",
    "Where's that damn fourth Chaos Emerald",
    "&#8593; &#8594; &#8595; &#8595; &#8595;",
    "*ping* WE'RE RICH *ping* WE'RE RICH *ping* WE'RE RICH",
    // TV
    "Secret material: HIDEN Metal [ METAL CLUSTER HOPPER ] It's high quality",
    "Get ready for BOOST and MAGNUM! Ready? Fight!",
    // Pop Culture
    "The Robotniks have entered the chat",
    "<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>Never gonna give you up</a>",
    "<a href='https://www.youtube.com/watch?v=Nk6tzVF1wQc' target='_blank'>idonevenevenwannasellittyouanyway</a>",
    "transcendental cha-cha time"
]);

//-----------------------------------------------------------------

SITE.SetTitle = function(title)
{
    document.title = "JM | " + title.toUpperCase();
}

//-----------------------------------------------------------------

SITE.ShuffleHint = function()
{
    const element = document.getElementById("loading-hint");

    var hint = "";
    do
    {
        const index = Math.floor(Math.random() * SITE.Hints.length);
        var hint = SITE.Hints[index];
    } 
    while(hint == element.innerHTML)
    
    element.innerHTML = hint;
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
    style.href = "site/Themes/" + theme + ".css";
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

SITE.GenerateBanner = function(id, data)
{
    const script = document.getElementById(id);

    var content = "<div class='banner'>";

    if(data.image != undefined) { content += "<img class='icon' src='" + data.image + "'>"; }
    if(data.icon != undefined)  { content += "<i class='icon'><i data-lucide='" + data.icon + "'></i></i>"; }

    content += "<div class='row title'><h1>" + data.title + "</h1>";
    if(data.subtitle != undefined) { content += "<span class='text-small'>" + data.subtitle + "</span>"; }
    content += "</div>"
    
    content += "<div class='row subtitle'>";
    for (let index = 0; index < data.tags.length; ++index) 
    {
        if(index > 0) { content += "<div class='vr'></div>" };
        content += "<span class='highlight'>" + data.tags[index].text + "</span>" + data.tags[index].info;
    }
    content += "</div>"

    content += "</div>"

    script.insertAdjacentHTML("afterend", content);
    script.remove();
}

//-----------------------------------------------------------------

SITE.GenerateProject = function(id, data)
{
    const project = document.getElementById("project-" + id);
    const script = project.getElementsByTagName("script")[0];
    
    var content = "";
    
    var media = "<div class='media'>"
    
    if(data.video != undefined)
    {
        media += "<iframe class='video' src='" + data.video + "' title='Trailer' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>";
    }

    if(data.placeholder == undefined)   { media += "<img class='image' src='site/Projects/project-" + id + ".png'>"; }
    else                                { media += "<div class='image'><i data-lucide='" + data.placeholder + "'></i></div>"; }

    if(data.website != undefined)     { media += "<a class='button' href='" + data.website + "' title='Visit Website' target='_blank'><i data-lucide='external-link'></i></a>"; }
    else if(data.github != undefined) { media += "<a class='button' href='" + data.github + "' title='View Source Files' target='_blank'><i data-lucide='github'></i></a>"; }

    content += media + "</div>";

    content += "<div class='row header'><h2 class='title'>" + data.title + "</h2><span class='subtitle'>" + data.timespan + "</span></div>";
    content += "<div class='row quote'>\"" + data.quote + "\"</div>";
    
    var skills = "<div class='row skills'>";
    for (let index = 0; index < data.skills.length; ++index) 
    {
        skills += "<i data-skill='" + data.skills[index] + "'></i>";
    }
    content += skills + "</div>";

    content += "<div class='toggle'><button class='button' onClick='SITE.ToggleProject(\""+ id +"\");'>Open</button></div>"
    
    script.insertAdjacentHTML("afterend", content);
    script.remove();
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
