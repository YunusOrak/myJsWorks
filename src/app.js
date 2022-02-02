console.log("Merhaba Kodlama.io")

//JS type safe değildir


//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi", "Özel Konut Kredisi"]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>")
}
console.log("</ul>")

{
    /* <ul>
        <li>Konut kredisi</li>
        <li>Emlak Konut Kredisi</li>
        <li>Kamu Konut Kredisi</li>
    </ul> */
}

console.log(konutKredileri)