function checkEgg(temperature) {
    if (temperature < 30) {
        return "Too cold!";
    } 
    else if (temperature > 35) {
        return "Too hot!";
    } 
    else {
        return "Ready to hatch!";
    }
}

let egg1 = checkEgg(25);
let egg2 = checkEgg(32);
let egg3 = checkEgg(40);

console.log("egg1: " + egg1);
console.log("egg2: " + egg2);
console.log("egg3: " + egg3);

const button = document.getElementById("myBtn");

button.addEventListener("click", () => {
    alert("Problem detected! Egg3 is too hot!");
    
});
