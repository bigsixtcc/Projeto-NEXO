fetch("navbar.html")
.then(res => res.text())
.then(data => {
    document.getElementById("navbar").innerHTML = data;

    // Só executa depois que a navbar carregar
    const links = document.querySelectorAll(".nav-links a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if(link.getAttribute("href") === currentPage){
            link.classList.add("ativo");
        }
    });
});