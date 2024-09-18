const data = [
    {
        id: 1,
        title: "Plano A",
        valor: 100,
        beneficios: [
            "Beneficio 1",
            "Beneficio 2"
        ]
    },
    {
        id: 2,
        title: "Plano B",
        valor: 180,
        beneficios: [
            "Beneficio 1",
            "Beneficio 2",
            "Beneficio 3",
            "Beneficio 4"
        ]
    },
    {
        id: 3,
        title: "Plano B",
        valor: 180,
        beneficios: [
            "Beneficio 1",
            "Beneficio 2",
            "Beneficio 3",
            "Beneficio 4",
            "Beneficio 5",
            "Beneficio 6",
            "Beneficio 7"
        ]
    }
];

const divPlanos = document.getElementById('div-planos');
for (const element of data) {
    divPlanos.innerHTML += `
        <div class="div-plano">
            <h3>${element.title}</h3>
            <p>${element.valor}</p>
            <div class="plano"></div>
        </div>
    `
};

const divPlano = document.querySelectorAll('.plano');
for (let index = 0; index < data.length; index++) {
    const { beneficios } = data[index];
    // const beneficios = data[index].beneficios;

    for (const beneficio of beneficios) {
        divPlano[index].innerHTML += `
            <p>${beneficio}</p>
        `
    };

    // Criando botões dinâmicos
    const btn = document.createElement('button');
    btn.textContent = "Comprar";
    btn.addEventListener('click', () => alert(''));
    divPlano[index].appendChild(btn)
};