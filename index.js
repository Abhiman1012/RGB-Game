const har = document.querySelector('#hard');
const easy = document.querySelector('#easy');
const reset = document.querySelector('#reset');

function rgb() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

var ans = -1;
var cor = 0;
har.addEventListener('click', function () {
    ans = 0;
    cor = 0;
    var col = document.querySelectorAll('.last');
    for (let i of col) {
        i.style.backgroundColor = rgb();
    }
    ans = Math.floor(Math.random() * 6);
    cor = col[ans].style.backgroundColor;
    document.querySelector('#all').innerText = cor;
    console.log(ans);
});

easy.addEventListener('click', function () {
    ans = 0;
    cor = 0;
    var col = document.querySelectorAll('.last');
    var temp = 0;
    for (let i of col) {
        if (temp < 3) {
            i.style.backgroundColor = rgb();
            temp++;
        }
        else {
            i.style.backgroundColor = 'black'
        }
    }
    ans = Math.floor(Math.random() * 3);
    cor = col[ans].style.backgroundColor;
    document.querySelector('#all').innerText = cor;
});
const div1 = document.querySelector('#a');
const div2 = document.querySelector('#b');
const div3 = document.querySelector('#c');
const div4 = document.querySelector('#d');
const div5 = document.querySelector('#e');
const div6 = document.querySelector('#f');

var f = true;
div1.addEventListener("click", function () {
    if (f === true) {
        if (ans === 0) {
            var k = document.querySelector('#all');
            k.innerText = "CORRECT";
            document.querySelector('#top').style.backgroundColor = cor;
        }
        else {
            var k = document.querySelector('#all');
            k.innerText = "WRONG";
        }
        f = false;
    }
})
div2.addEventListener("click", function () {
    if (f === true) {
        if (ans === 1) {
            var k = document.querySelector('#all');
            k.innerText = "CORRECT";
            document.querySelector('#top').style.backgroundColor = cor;
        }
        else {
            var k = document.querySelector('#all');
            k.innerText = "WRONG";
        }
        f = false;
    }
})
div3.addEventListener("click", function () {
    if (f === true) {
        if (ans === 2) {
            var k = document.querySelector('#all');
            k.innerText = "CORRECT";
            document.querySelector('#top').style.backgroundColor = cor;
        }
        else {
            var k = document.querySelector('#all');
            k.innerText = "WRONG";
        }
        f = false;
    }
})
div4.addEventListener("click", function () {
    if (f === true) {
        if (ans === 3) {
            var k = document.querySelector('#all');
            k.innerText = "CORRECT";
            document.querySelector('#top').style.backgroundColor = cor;
        }
        else {
            var k = document.querySelector('#all');
            k.innerText = "WRONG";
        }
        f = false;
    }
})
div5.addEventListener("click", function () {
    if (f === true) {
        if (ans === 4) {
            var k = document.querySelector('#all');
            k.innerText = "CORRECT";
            document.querySelector('#top').style.backgroundColor = cor;
        }
        else {
            var k = document.querySelector('#all');
            k.innerText = "WRONG";
        }
        f = false;
    }
})
div6.addEventListener("click", function () {
    if (f === true) {
        if (ans === 5) {
            var k = document.querySelector('#all');
            k.innerText = "CORRECT";
            document.querySelector('#top').style.backgroundColor = cor;
        }
        else {
            var k = document.querySelector('#all');
            k.innerText = "WRONG";
        }
        f = false;
    }
})
 reset.addEventListener("click",( ) => {
   f = true;
   document.querySelector('#top').style.backgroundColor = 'blueviolet';
   document.querySelector('#all').innerText = "rgb(r,g,b)";
   var col = document.querySelectorAll('.last');
   for (let i of col) {
       i.style.backgroundColor = 'rgb(15, 173, 179)';
   }
 })

