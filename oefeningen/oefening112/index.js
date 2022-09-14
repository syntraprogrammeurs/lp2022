let age = Number(prompt("Geef de leeftijd in:"));

if (age >= 18) {
    console.log("Je bent", age, " jaar oud je mag n aan de spelen van de Nationale Loterij.")
    let aantalVakjes = Number(prompt("Volledig bulletin?, tik 12 in anders 10, 8, 6, 4 of 2"));
    if (aantalVakjes === 12) {
        console.log("20 euro aub");
    } else if (aantalVakjes === 10) {
        console.log("18 euro aub");
    } else if (aantalVakjes === 8) {
        console.log("16 euro aub");
    } else if (aantalVakjes === 6) {
        console.log("12 euro aub");
    } else if (aantalVakjes === 4) {
        console.log("8 euro aub");
    } else {
        console.log("4 euro aub");
    }

} else {
    console.log("Om deel te nemen aan de spelen van de Nationale Loterij moet minimum 18 jaar oud zijn.")
}