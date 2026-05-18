function convertTemp() {

    let celsius =
        Number(document.getElementById("celsius").value);

    let fahrenheit =
        (celsius * 9 / 5) + 32

    document.getElementById("output").innerHTML =
        fahrenheit + "F";

}