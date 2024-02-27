const modMenu = document.createElement('div');
modMenu.classList.add('mod-menu');
modMenu.innerHTML = `
<div class="header">@lemonscripting: AUTH</div>
<div class="navbar">
    <button onclick="showPage('page1')">Page 1</button>
    <button onclick="showPage('page2')">Page 2</button>
</div>
<div class="password-page active" id="password-page">
    <form class="password-form">
        <input type="password" id="password-input" class="password-input">
        <button type="button" onclick="checkPassword()" class="password-button">Verify</button>
    </form>
</div>
<div class="page" id="page1">
    <div class="menu-item">
        <input type="checkbox" id="mod1">
        <label for="mod1">Immortality</label>
    </div>

    <div class="menu-item">
        <input type="checkbox" id="mod2">
        <label for="mod2">Sky Run</label>
    </div>

    <!-- Add more menu items for page 1 as needed -->
</div>
<div class="page" id="page2">
<div class="menu-item">
<input type="checkbox" id="mod3">
<label for="mod3">Sprint</label>
</div>
    <div class="menu-item">
        <input type="checkbox" id="mod4">
        <label for="mod4">Auto Run</label>
    </div>
    <!-- Add more menu items for page 2 as needed -->
</div>
`;

document.body.appendChild(modMenu);

const style = document.createElement('style');
style.textContent = `
    .mod-menu {
        position: fixed;
        top: 20px;
        left: 20px;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 10px;
        border: 1px solid #707070;
        font-family: Arial, sans-serif;
        border-radius: 5px;
        z-index: 9999;
        cursor: move;
    }

    .menu-item {
        margin-bottom: 5px;
        padding: 5px;
        border-radius: 5px;
        transition: background-color 0.3s ease;
        display: flex;
        align-items: center;
    }

    .menu-item:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

    input[type="checkbox"] {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        width: 16px;
        height: 16px;
        border: 2px solid #707070;
        border-radius: 3px;
        margin-right: 10px;
        cursor: pointer;
    }

    input[type="checkbox"]:checked {
        background-color: #5CB85C;
    }

    input[type="checkbox"]:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

    label {
        cursor: pointer;
    }

    .navbar {
        margin-bottom: 10px;
        display: none;
    }

    .navbar button {
        background-color: transparent;
        border: none;
        color: white;
        cursor: pointer;
        margin-right: 10px;
        outline: none;
        padding: 5px 10px;
        border-radius: 5px;
        border: 2px solid transparent;
        transition: all 0.3s ease;
    }

    .navbar button:hover {
        border-color: white;
    }

    .page {
        display: none;
    }

    .page.active {
        display: block;
    }

    .header {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .password-page {
        display: none;
    }

    .password-page.active {
        display: block;
    }

    .password-form {
        margin-bottom: 10px;
    }

    .password-input {
        margin-right: 10px;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #707070;
    }

    .password-button {
        padding: 5px 10px;
        border-radius: 5px;
        border: 2px solid transparent;
        background-color: #5CB85C;
        color: white;
        cursor: pointer;
    }

    .password-button:hover {
        background-color: #4CAF50;
    }
`;

//only use listed stylings
/*
modMenu.querySelectorAll('*').forEach(element => {
    element.style.all = 'initial';
});
*/

document.head.appendChild(style);

const modMenuContainer = document.querySelector('.mod-menu');
const passwordPage = document.getElementById('password-page');
const passwordInput = document.getElementById('password-input');

let isDragging = false;
let offsetX, offsetY;

function handleMouseDown(event) {
    isDragging = true;
    offsetX = event.clientX - modMenuContainer.getBoundingClientRect().left;
    offsetY = event.clientY - modMenuContainer.getBoundingClientRect().top;
}

function handleMouseMove(event) {
    if (isDragging) {
        const newX = event.clientX - offsetX;
        const newY = event.clientY - offsetY;

        modMenuContainer.style.left = newX + 'px';
        modMenuContainer.style.top = newY + 'px';
    }
}

function handleMouseUp() {
    isDragging = false;
}

modMenuContainer.addEventListener('mousedown', handleMouseDown);
document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseup', handleMouseUp);

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        if (page.id === pageId) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });
}

function checkPassword() {
    const password = passwordInput.value.trim();
    const correctPassword = '123';
    if (password === correctPassword) {
        var navbar = document.querySelector('.navbar');
        navbar.style.display = "block";
        var header = document.querySelector('.header');
        header.textContent = "@lemonscripting: Dino V1";
        passwordPage.classList.remove('active');
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            page.classList.add('active');
            showPage('page1');
        });
    } else {
        alert('USER OR DEVICE NOT REGISTERED');
    }
}

//source codes

//predefined assets
var original = Runner.prototype.gameOver

function handleCheckbox1Change() {
    if (document.getElementById('mod1').checked) {
        Runner.prototype.gameOver = function () { }
        console.log("immortality activated");
    } else {
        Runner.prototype.gameOver = original;
        console.log("immortality deactivated");
    }
}

function handleCheckbox2Change() {
    if (document.getElementById('mod2').checked) {
        Runner.instance_.tRex.groundYPos = 0;
        console.log("sky run activated");
    } else {
        Runner.instance_.tRex.groundYPos = 93;
        console.log("sky run activated");
    }
}

function handleCheckbox3Change() {
    if (document.getElementById('mod3').checked) {
        Runner.instance_.setSpeed(1000)
        console.log("sprint activated");
    } else {
        Runner.instance_.setSpeed(10)
        console.log("sprint deactivated");
    }
}

function handleCheckbox4Change() {
    if (document.getElementById('mod4').checked) {
        function dispatchKey(type, key) {
            document.dispatchEvent(new KeyboardEvent(type, { keyCode: key }));
        }

        const AUTO_RUN = setInterval(function () {
            const KEY_CODE_SPACE_BAR = 32
            const KEY_CODE_ARROW_DOWN = 40
            const CANVAS_HEIGHT = Runner.instance_.dimensions.HEIGHT
            const DINO_HEIGHT = Runner.instance_.tRex.config.HEIGHT

            const obstacle = Runner.instance_.horizon.obstacles[0]
            const speed = Runner.instance_.currentSpeed

            if (obstacle) {
                const w = obstacle.width
                const x = obstacle.xPos
                const y = obstacle.yPos
                const yFromBottom = CANVAS_HEIGHT - y - obstacle.typeConfig.height
                const isObstacleNearby = x < 25 * speed - w / 2

                if (isObstacleNearby) {
                    if (yFromBottom > DINO_HEIGHT) {
                    } else if (y > CANVAS_HEIGHT / 2) {
                        dispatchKey("keyup", KEY_CODE_ARROW_DOWN)
                        dispatchKey("keydown", KEY_CODE_SPACE_BAR)
                    } else {
                        dispatchKey("keydown", KEY_CODE_ARROW_DOWN)
                    }
                }
            }
        }, Runner.instance_.msPerFrame);
        console.log("auto run activated");
    } else {
        clearInterval(AUTO_RUN);
        console.log("auto run deactivated");
    }
}

document.getElementById('mod1').addEventListener('change', handleCheckbox1Change);
document.getElementById('mod2').addEventListener('change', handleCheckbox2Change);
document.getElementById('mod3').addEventListener('change', handleCheckbox3Change);
document.getElementById('mod4').addEventListener('change', handleCheckbox4Change);