//const axios = require('axios');




//moeda = document.getElementById("Moeda").value;

axios.get(`https://economia.awesomeapi.com.br/all/`)
    .then(function (res) {

        var MoedasCode = Object.keys(res.data);
        var MoedasRes = Object.values(res.data);

        //console.log("DATA:", MoedasRes);

        var Tarray = Object.keys(MoedasRes).length

        //console.log('Quantidade de moedas:', Tarray);
        for (var x = 0; x < Tarray;) {
            var moedasCode = MoedasCode[x];
            var moedasV = MoedasRes[x].bid;
            var moedasName = MoedasRes[x].name;

            //  console.log(x, ":", "valor do ", moedasName, " Está: ", moedasV);


            var refNav = document.getElementById('refNav');
            var NavPai = refNav.parentNode;
            var li = document.createElement('li');
            var input = document.createElement('input');
            input.type = "radio";
            input.name = "tabs";
            input.className = "rd_tabs";
            input.id = "tab" + x;
            //input.setAttribute("checked", "");
            var label = document.createElement("label");
            label.setAttribute("for", "tab" + x);
            label.innerHTML = moedasCode + "<br> <a>" + moedasName + "</a>";
            var div = document.createElement("div");
            div.className = "content";
            var spanE = document.createElement("span");
            spanE.className = "Estrangeira";
            var spanSimbolE = document.createElement('span');
            spanSimbolE.innerHTML = "$";
            spanSimbolE.className = "symbol";
            var InputEstra = document.createElement('input');
            InputEstra.type = "text";
            InputEstra.id = "estrangeiro";
            InputEstra.value = 1;
            var spanN = document.createElement("span");
            spanN.className = "Nacional";
            var spanSimbolR = document.createElement('span');
            spanSimbolR.innerHTML = "R$";
            spanSimbolR.className = "symbol";
            var InputNacional = document.createElement('input');
            InputNacional.type = "text";
            InputNacional.id = "nacional";
            InputNacional.className = "nacional";
            InputNacional.value = moedasV;

            NavPai.appendChild(li);
            li.appendChild(input);
            li.appendChild(label);
            li.appendChild(div);
            div.appendChild(spanE);
            spanE.appendChild(spanSimbolE);
            spanE.appendChild(InputEstra);
            div.appendChild(spanN);
            spanN.appendChild(spanSimbolR);
            spanN.appendChild(InputNacional);

            NavPai.insertBefore(li, refNav);

            x++;
        }
    })
    .catch(function (error) {
        console.log(error);
    });

