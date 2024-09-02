function pegarregioes() {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
        .then((response) => response.json())
        .then((response) => {
            for (let i = 0; i < response.length; i++) {
                regiao.innerHTML += `<option value="${response[i].id}">${response[i].nome}</option>`

            }
        })
}
pegarregioes()

function pegarEstados(idregiao) {
    estado.innerHTML = "<option selected disabled>selecionar estado</option>"
     cidades.innerHTML = ""

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${idregiao}/estados`)
        .then((response) => response.json())
        .then((response) => {
            for (let i = 0; i < response.length; i++) {
                estado.innerHTML += `<option value="${response[i].id}">${response[i].nome}</option>`

            }
        })
}
regiao.onchange = (event) =>{
    pegarEstados(event.target.value);
}


function pegarCidades(idEstado) {
    cidades.innerHTML = ""
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idEstado}/municipios`)
        .then((response) => response.json())
        .then((response) => {
            for (let i = 0; i < response.length; i++) {
                cidades.innerHTML += `<option >${response[i].nome}</option>`

            }
        })
}
estado.onchange = (event) =>{
    pegarCidades(event.target.value)
}

