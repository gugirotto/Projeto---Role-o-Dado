'use strict';

let pontosJ1 = 0, pontosJ2 = 0, current = 0, active = 0;

const updatePontos = (j, p) => {
    document.getElementById("score--" + j).textContent = String(p);
}

const updateTotal  = (j, p) => {
    document.getElementById("current--" + j).textContent = String(p);
}

updatePontos(0, pontosJ1);
updatePontos(1, pontosJ2);

document.querySelector(".btn--roll").addEventListener('click', () => {

    let roll = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.dice').src = 'dice-' + roll + '.png';

    if(roll == 1){
        current = 0;
        updateTotal (active, 0);
        document.querySelector(".player--" + active).classList.remove("player--active");
        document.querySelector(".player--" + ((active + 1) % 2)).classList.add("player--active");
        active = (active + 1) % 2;
    }else{
        current += roll;
        updateTotal (active, current);
    }
});

document.querySelector(".btn--hold").addEventListener('click', () => {

    if(active == 0){
        pontosJ1 += current;
        updatePontos(0, pontosJ1);

        if(pontosJ1 >= 100){
            document.querySelector(".player--0").classList.remove("player--active");
            document.querySelector(".player--0").classList.add("player--winner");
        }else{
            current = 0;
            updateTotal (0, 0);
            document.querySelector(".player--0").classList.remove("player--active");
            document.querySelector(".player--1").classList.add("player--active");
            active = 1;
        }
    }else{
        pontosJ2 += current;
        updatePontos(1, pontosJ2);

        if(pontosJ2 >= 100){
            document.querySelector(".player--1").classList.remove("player--active");
            document.querySelector(".player--1").classList.add("player--winner");
        }else{
            current = 0;
            updateTotal (1, 0);
            document.querySelector(".player--1").classList.remove("player--active");
            document.querySelector(".player--0").classList.add("player--active");
            active = 0;
        }
    }
});

document.querySelector('.btn--new').addEventListener('click', () => {
    active = 0;
    pontosJ1 = 0;
    pontosJ2 = 0;
    current = 0;
    document.querySelector(".player--0").classList.remove("player--winner");
    document.querySelector(".player--1").classList.remove("player--winner");
    document.querySelector(".player--1").classList.remove("player--active");
    document.querySelector(".player--0").classList.add("player--active");
    updatePontos(0, pontosJ1);
    updatePontos(1, pontosJ2);
    updateTotal (0, 0);
    updateTotal (1, 0);
})