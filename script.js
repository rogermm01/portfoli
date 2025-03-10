function openTab(event, tabName) {
    // Amaga tot el contingut de les pestanyes
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Desactiva totes les pestanyes
    let tablinks = document.getElementsByClassName("tablink");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Mostra la pestanya seleccionada i activa el botó corresponent
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}
