canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");




car_width = 120;
car_height = 70;
car_image = "car1.png";
car_X = 10;
car_Y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_X = 10;
car2_Y = 100;

background_image = "racing_canvas_BG.jpg"



function add() {
    background_imgtag = new Image();
    background_imgtag.onload = uploadbackground;
    background_imgtag.src = background_image;

    car_imgtag = new Image();
    car_imgtag.onload = uploadcar;
    car_imgtag.src = car_image;

    car2_imgtag = new Image();
    car2_imgtag.onload = uploadcar2;
    car2_imgtag.src = car2_image;
}

function uploadbackground() {
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);

}
function uploadcar() {
    ctx.drawImage(car_imgtag, car_X, car_Y, car_width, car_height);

}
function uploadcar2() {
    ctx.drawImage(car2_imgtag, car2_X, car2_Y, car2_width, car2_height);

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);

    if (keypressed == '38') {
        up();
        console.log("up");
    }
    if (keypressed == '37') {
        left();
        console.log("left");
    }
    if (keypressed == '39') {
        right();
        console.log("right");
    }
    if (keypressed == '40') {
        down();
        console.log("down");
    }
    if (keypressed == '65') {
        left2();
        console.log("a");
    }

    if (keypressed == '87') {
        up2();
        console.log("w");
    }

    if (keypressed == '68') {
        right2();
        console.log("d");
    }

    if (keypressed == '83') {
        down2();
        console.log("s");
    }
    if(car_X>700){
        console.log("car1_Won");
        document.getElementById('game_status').innerHTML="Car 1 Won!!"
    }
    
    if(car2_X>700){
        console.log("car2_Won");
        document.getElementById('game_status').innerHTML="Car 2 Won!!"
    }
}

function up() {
    if (car_Y >= 0) {
        car_Y = car_Y - 10;
        uploadbackground();
        uploadcar();
        uploadcar2();
    }
}

function down() {
    if (car_Y <= 500) {
        car_Y = car_Y + 10;
        uploadbackground();
        uploadcar();
        uploadcar2();
    }
}

function left() {
    if (car_X >= 0) {
        car_X = car_X - 10;
        uploadbackground();
        uploadcar();
        uploadcar2();
    }
}

function right() {
    if (car_X <= 700) {
        car_X = car_X + 10;
        uploadbackground();
        uploadcar();
        uploadcar2();
    }
}









function up2() {
    if (car2_Y >= 0) {
        car2_Y = car2_Y - 10;
        uploadbackground();
        uploadcar2();
        uploadcar();
    }
}

function down2() {
    if (car2_Y <= 500) {
        car2_Y = car2_Y + 10;
        uploadbackground();
        uploadcar2();
        uploadcar();
    }
}

function left2() {
    if (car2_X >= 0) {
        car2_X = car2_X - 10;
        uploadbackground();
        uploadcar2();
        uploadcar();
    }
}

function right2() {
    if (car2_X <= 700) {
        car2_X = car2_X + 10;
        uploadbackground();
        uploadcar2();
        uploadcar();
    }
}


