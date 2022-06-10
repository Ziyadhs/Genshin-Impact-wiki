//take the elment type from the user
let myForm = document.getElementById("form")
myForm.addEventListener('submit', generate)
function generate(event) {
    event.preventDefault();
    let x = document.getElementById("option").value;
    console.log(x);
    switch (x) {
        case "1":
            link("Pyro");
            break;
        case "2":
            link("Cryo");
            break;
        case "3":
            link("Hydro");
            break;
        case "4":
            link("Electro");
            break;
        case "5":
            link("Geo");
            break;
        case "6":
            link("Anemo");
            break;
        case "7":
            link("Dendro");
            break;
    }
}

function link(element) {
    console.log(element);
    let link = document.getElementById('generated_link')
    link.setAttribute('href', '#' + element)
    console.log(link);
}