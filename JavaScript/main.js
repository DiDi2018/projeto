function pageLoading(){
    let pagina = document.querySelector(".loading");
    pagina.remove();
    console.log("loaded");
}

window.addEventListener("load", pageLoading);