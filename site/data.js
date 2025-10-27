//=== Data ============================================================================================

var DATA = DATA || {}; 

//-----------------------------------------------------------------

DATA.Hints = Object.freeze([
    "This loading screen is purely aesthetic",
    "Cannot find 'Package McPackageface'",
    "&#8593; &#8593; &#8595; &#8595; &#8592; &#8594; &#8592; &#8594; [B] [A]", // Konami Code
    "<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>Never gonna give you up</a>", // Rick Roll

    "Press [A] to jump",
    "Gotta go fast", // Sonic the Hedgehog
    "Where's that damn fourth Chaos Emerald", // Shadow the Hedgehog
    "&#8593; &#8594; &#8595; &#8595; &#8595;", // Helldivers 2
    "*ping* WE'RE RICH *ping* WE'RE RICH *ping* WE'RE RICH", // Deep Rock Galactic

    "Secret material: HIDEN Metal [ METAL CLUSTER HOPPER ] It's high quality", // Kamen Rider Zero-One
    "Get ready for BOOST and MAGNUM! Ready? Fight!", // Kamen Rider Geats

    "Hello Nicholas, hows the hand?", // Hot Fuzz
    "The Robotniks have entered the chat", // Sonic the Hedgehog 3 (Movie)
    
    "<a href='https://www.youtube.com/watch?v=Nk6tzVF1wQc' target='_blank'>idonevenevenwannasellittyouanyway</a>", // Tom Cardy
    "transcendental cha-cha time" // Tom Cardy
]);

//-----------------------------------------------------------------

DATA.Banners = Object.freeze({
    News: function(title, date)
    {
        return { title: "NEWS", subtitle: title, icon: "lucide-newspaper", notes: [ { tag: "Posted", text: date } ]}
    },

    Independent: {
        title: "INDEPENDENT PROJECTS", subtitle: "192.168.0.1", icon: "site/logo.png",
        notes: [ { tag: "Jack of All Trades", text: "01000001 - 01011010" } ]
    },

    University: {
        title: "UNIVERSITY ASSIGNMENTS", subtitle: "Sheffield Hallam University", icon: "site/Banners/university.png",
        notes: [ { tag: "BSc Computer Science for Games", text: "09/2016 - 08/2020" } ]
    },

    SumoDigital: {
        title: "SUMO DIGITAL", subtitle: "Sheffield, England", icon: "site/Banners/sumodigital.png",
        notes: [ { tag: "Hybrid/On-Site", text: "" }, { tag: "Gameplay Programmer", text: "06/2022 - 07/2024" }, { tag: "Junior Programmer", text: "08/2020 - 06/2022" }, { tag: "Placement Programmer", text: "07/2018 - 08/2019" } ]
    },

    BlackTower: {
        title: "BLACK TOWER STUDIOS", subtitle: "Tokyo, Japan", icon: "site/Banners/blacktower.png",
        notes: [ { tag: "Remote", text: "" }, { tag: "Gameplay Programmer", text: "10/2024 - 02/2025" } ]
    },
 
    BlazingGriffin: {
        title: "BLAZING GRIFFIN", subtitle: "Glasgow, Scotland", icon: "site/Banners/blazinggriffin.png",
        notes: [ { tag: "Remote", text: "" }, { tag: "Gameplay Programmer", text: "10/2025 - Current" } ]
    }
});

//-----------------------------------------------------------------

DATA.Projects = Object.freeze({
    Portfolio: {
        title: "Portfolio Website", duration: "Started 06/2024", tagline: "You're looking at it",
        image: "lucide-code", video: "", website: "",
        skills: [ "html", "css", "js", "vsc", "github" ]
    },
    Independent: {
        Blackjack: {
            title: "Blackjack", duration: "2018 / 2020", tagline: "Hit, Stand or Surrender",
            image: "site/Projects/blackjack.png", video: "", website: "https://github.com/jm-2808/sample-blackjack",
            skills: [ "cpp", "vs" ]
        },
        Arcana: {
            title: "Arcana VR", duration: "Started 04/2022", tagline: "What ho, Muscle Wizard! Might you cast us a spell?",
            image: "lucide-rectangle-goggles", video: "", website: "",
            skills: [ "ue4", "cpp", "uebp", "openxr", "vs", "github" ]
        },
        Azimov: {
            title: "Azimov", duration: "Started 07/2024", tagline: "Sir, the drones appear to have formed a union",
            image: "lucide-bot", video: "", website: "",
            skills: [ "gd4", "cs", "blend4", "github", "obsidian", "md" ]
        }
    },
    University: {
        Dungeon: {
            title: "Dungeon Hunt", duration: "09/2019 - 12/2019", tagline: "They say the dungeon contains a huge room full of ... nothing!",
            image: "site/Projects/dungeon.png", video: "", website: "https://github.com/jm-2808/sample-dungeon_hunt",
            skills: [ "dx11", "cpp", "vs", "github" ]
        },
        Rambler: {
            title: "Stealing Stuff", duration: "01/2020 - 05/2020", tagline: "You know what they say about 'if it ain't nailed down', but if it is ... find a claw hammer",
            image: "site/Projects/rambler.png", video: "https://www.youtube.com/embed/tQ39e2bVUx4", website: "https://github.com/jm-2808/sample-stealing_stuff",
            skills: [ "ue4", "cpp", "uebp", "vs", "github" ]
        },
        Niobium: {
            title: "Modular Weapon System", duration: "09/2019 - 05/2020", tagline: "Weapons charged and ready",
            image: "site/Projects/niobium.png", video: "", website: "https://github.com/jm-2808/sample-project_niobium",
            skills: [ "ue4", "cpp", "uebp", "vs", "github" ]
        }
    },
    SumoDigital: {
        Gingerbread: {
            title: "Sackboy: A Big Adventure", duration: "08/2020 - 11/2020 | 07/2018 - 08/2019", 
            tagline: "Iconic PlayStation® hero Sackboy bursts back into breathtaking action with a huge, fun and frantic 3D multiplayer platforming adventure - and a whole new edgy sackitude!",
            image: "site/Projects/gingerbread.png", video: "https://www.youtube.com/embed/ZOk3fj5ujNM", website: "https://www.playstation.com/en-gb/games/sackboy-a-big-adventure/",
            skills: [ "ue4", "cpp", "uebp", "vs", "pfv", "cs", "html", "css", "js", "nodejs" ]
        },
        Cadillac: {
            title: "Unannounced Project", duration: "11/2020 - 06/2022", tagline: "An unannounced sports game developed in an in-house engine",
            image: "lucide-trophy", video: "", website: "",
            skills: [ "cpp", "lua", "vs", "pfv" ]
        },
        Firebird: {
            title: "Unannounced Project", duration: "06/2022 - 07/2023", tagline: "An unannounced third-person shooter developed in Unreal Engine 5",
            image: "lucide-rocket", video: "", website: "",
            skills: [ "ue5", "cpp", "uebp", "vs", "pfv" ]
        },
        Scramble: {
            title: "Project D5", duration: "08/2023 - 07/2024", 
            tagline: "A slapstick party-platformer royale set in a weird and wonderful alien galaxy deep in the farthest reaches of space where you compete for fame and glory in the galaxy's most popular gameshow!",
            image: "lucide-package-open", video: "", website: "https://store.steampowered.com/app/3734070/Project_D5/",
            skills: [ "ue5", "cpp", "uebp", "vs", "pfv" ]
        }
    },
    BlackTower: {
        Chainsaw: {
            title: "The Texas Chainsaw Massacre", duration: "10/2024 - 02/2025", tagline: "An asymmetrical horror experience based on the groundbreaking and iconic 1974 horror film",
            image: "site/Projects/chainsaw.png", video: "https://www.youtube.com/embed/ISCbJ9RlDgU", website: "https://www.txchainsawgame.com/",
            skills: [ "ue4", "cpp", "uebp", "vs", "pfv" ]
        }
    }
});

//=====================================================================================================
