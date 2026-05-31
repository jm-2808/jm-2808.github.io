/*=== Events ================================================================================================================*/
// On Open

let systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
Theme(systemDark ? "dark" : "light");

setTimeout(function(){ 
    lucide.createIcons(); 
    simpleicons.createIcons();
    miscicons.createIcons();
}, 5);

/*----------------------------------------------------------------*/
// On Load

window.onload = function()
{
    let display = document.getElementsByClassName("display");
    for (let i = 0; i < display.length; ++i) 
    {
        let details = display[i].getElementsByClassName("details")[0];
        let toggle = details.getElementsByClassName("toggle")[0];

        toggle.addEventListener("click", ()=>{ details.classList.toggle("open"); });
    }
}

/*----------------------------------------------------------------*/
// On Scroll

window.onscroll = function() 
{

}

/*=== Functions =============================================================================================================*/

function Theme(theme)
{
    const html = document.documentElement;
    html.setAttribute('data-theme', theme);
}

/*----------------------------------------------------------------*/

let menuOpen = false;
function Menu()
{
    menuOpen = !menuOpen;
    const header = document.getElementsByTagName("header")[0];
    header.classList.toggle("open");
}

/*----------------------------------------------------------------*/

function Focus(id)
{
    if(id == "top")
    {
        window.scrollTo(0, 0);
    }
    else
    {
        document.getElementById(id).firstElementChild.scrollIntoView({ block: 'center'});
    }

    if(menuOpen)
    {
        Menu();
    }
}

/*----------------------------------------------------------------*/

function Reel(slides)
{
    const script = document.currentScript;
    let html = "";

    for(let i = 0; i < slides.length; ++i)
    {
        html += "<img src='" + slides[i] + "'>";
    }

    html += html;

    script.insertAdjacentHTML("afterend", html);
    script.remove();
}

/*----------------------------------------------------------------*/

function Open()
{

}

/*===========================================================================================================================*/
