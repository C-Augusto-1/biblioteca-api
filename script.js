async function buscarLivros() {

    const livro = document.getElementById("livro").value;

    const url = `https://openlibrary.org/search.json?q=${livro}`;

    const resposta = await fetch(url);

    const dados = await resposta.json();

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    dados.docs.slice(0, 12).forEach(item => {

        let capa = "";

        if(item.cover_i){
            capa = `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`;
        } else {
            capa = "https://via.placeholder.com/200x300?text=Sem+Capa";
        }

        resultado.innerHTML += `
            <div class="card">
                <img src="${capa}">
                <h3>${item.title}</h3>
                <p><strong>Autor:</strong> ${item.author_name ? item.author_name[0] : "Desconhecido"}</p>
                <p><strong>Ano:</strong> ${item.first_publish_year || "Não informado"}</p>
            </div>
        `;
    });
}