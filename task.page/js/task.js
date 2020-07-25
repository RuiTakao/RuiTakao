'use strict';

const axios = require("axios");

axios.get("/jsmix")
    .then(res => {
        console.log(res);
        const getDatas = res.data;
        console.log(getDatas);

        const container = document.getElementById("container");
        const ul = document.createElement("ul");

        getDatas.map( data => {
            const li = document.createElement("li");
            li.innerHTML = data.id + ": " + data.title;
            ul.appendChild(li);
        });
        container.appendChild(ul);
    })
    .error(err => {
        console.log(err);
    });