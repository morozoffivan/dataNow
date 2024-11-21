'use strict';

document.addEventListener('DOMContentLoaded', ()=>{
    const btn = document.querySelector('button'),
          p = document.querySelector('p');

    btn.addEventListener('click', () => {
        const time = new Date(),
              hours = time.getHours(),
              minutes = time.getMinutes(),
              seconds = time.getSeconds(),
              fullTime = `${hours}:${minutes}:${seconds}`;

        p.innerText = fullTime;
    });
});
