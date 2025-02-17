//=== Buttons =========================================================================================

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

//=== Combos ==========================================================================================

const COMBO = Object.freeze({
    KONAMI: [BUTTON.DPADUP, BUTTON.DPADUP, BUTTON.DPADDOWN, BUTTON.DPADDOWN, BUTTON.DPADLEFT, BUTTON.DPADRIGHT, BUTTON.DPADLEFT, BUTTON.DPADRIGHT, BUTTON.B, BUTTON.A, BUTTON.START]
});

//=== Gamepad =========================================================================================

var GAMEPAD = GAMEPAD || {};

//-----------------------------------------------------------------

GAMEPAD.History = [ ];

//-----------------------------------------------------------------

GAMEPAD.Generate = function(root)
{
    const element = document.getElementById(root);
    element.innerHTML += 
        "<div class='gamepad'> \
            <div class='body'> \
                <div class='grip'> \
                    <div class='ring'></div> \
                    <div class='dpad'> \
                        <button onClick='GAMEPAD.Press(BUTTON.DPADUP);'></button> \
                        <button onClick='GAMEPAD.Press(BUTTON.DPADRIGHT);'></button> \
                        <button onClick='GAMEPAD.Press(BUTTON.DPADDOWN);'></button> \
                        <button onClick='GAMEPAD.Press(BUTTON.DPADLEFT);'></button> \
                        <button onClick='GAMEPAD.Press(BUTTON.DPADCENTER);'><div class='indent'></div></button> \
                    </div> \
                </div> \
                <div class='grip right'> \
                    <div class='buttonpad xy'> \
                        <button onClick='GAMEPAD.Press(BUTTON.Y);'>Y</button> \
                        <button onClick='GAMEPAD.Press(BUTTON.X);'>X</button> \
                    </div> \
                    <div class='buttonpad ab'> \
                        <button onClick='GAMEPAD.Press(BUTTON.B);'>B</button> \
                        <button onClick='GAMEPAD.Press(BUTTON.A);'>A</button> \
                    </div> \
                </div> \
                <div class='cable'></div> \
                <div class='light'></div> \
                <div class='center'> \
                    <button onClick='GAMEPAD.Press(BUTTON.SELECT);'>Select</button> \
                    <button onClick='GAMEPAD.Press(BUTTON.START); CheckCombos();'>Start</button> \
                </div> \
            </div> \
        </div>";
}

//-----------------------------------------------------------------

GAMEPAD.Press = function(button)
{
    if(this.History.length > 15)
    {
        this.History.shift();
    }

    this.History.push(button);
}

//-----------------------------------------------------------------

GAMEPAD.Reset = function()
{
    this.History = [];
}

//-----------------------------------------------------------------

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

//=== Easter Eggs =====================================================================================

function CheckCombos()
{
    // Konami Code
    if(GAMEPAD.Combo(COMBO.KONAMI))
    {
        alert("Konami Code!");
    }
}

//=====================================================================================================
