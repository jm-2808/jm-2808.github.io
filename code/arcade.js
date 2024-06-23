//=== Gamepad =========================================================================================

var GAMEPAD = GAMEPAD || {}; 
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

GAMEPAD.History = [ ];

GAMEPAD.Press = function(button)
{
    if(this.History.length > 15)
    {
        this.History.shift();
    }

    this.History.push(button);
}

GAMEPAD.Reset = function()
{
    this.History = [];
}

GAMEPAD.Combo = function(combo)
{
    for (let index = 0; index < combo.length; ++index) 
    {
        if(this.History[this.History.length - index] != combo[combo.length - index])
        {
            return false;
        }
    }
    return true;
}

//=== Blackjack ========================================================================================

var BLACKJACK = BLACKJACK || {};

BLACKJACK.Dealer = [];
BLACKJACK.Player = [];

BLACKJACK.Give = function(card)
{

}

BLACKJACK.Flip = function(id)
{

}

//=== Easter Eggs =====================================================================================

function CheckCombos()
{
    // Konami Code
    if(GAMEPAD.Combo([BUTTON.DPADUP, BUTTON.DPADUP, BUTTON.DPADDOWN, BUTTON.DPADDOWN, BUTTON.DPADLEFT, BUTTON.DPADRIGHT, BUTTON.DPADLEFT, BUTTON.DPADRIGHT, BUTTON.B, BUTTON.A, BUTTON.START]))
    {
        alert("Konami Code!");
    }
}
