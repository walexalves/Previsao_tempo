//console.log("DEU BOA")


let chave = "99348d1a9a9c8e4c53fd06bfe280cab2"



function tela(dados) {

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".text-time").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-image-nuvem").innerHTML = dados.weather[0].description
    document.querySelector(".nuvem").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".text-umidade").innerHTML = "Umidade: " + Math.floor(dados.main.humidity) + "%"
}


async function buscarCidade(cidade) {

    let dados = await fetch(

        "https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + "&units=metric" + "&lang=pt_br")
        .then(response => response.json())

        tela(dados)

        console.log(dados)
      
   
}


function cliqueNobotao() {

    let cidade = document.querySelector(".campo-cidade").value

    buscarCidade(cidade)

    

}

