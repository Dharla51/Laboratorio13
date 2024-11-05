const Num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
let SumTo = 0;

for (let i = 0; i < Num.length; i++) {
    SumTo += Num[i]; 
}

let Prom = SumTo / Num.length; 

console.log("SUMA TOTAL: ", SumTo);
document.write("SUMA TOTAL:  ", SumTo+"<br>");
console.log("PROMEDIO:", Prom);
document.write("PROMEDIO:  ", Prom);
