let n = prompt("Ingrese un número:")
document.write("Cálculo del factorial del número: " + n + "<br><br>")
document.write("1. Primeramente multiplicamos a π por 2 y por " + n + "<br><br>")
let a = Math.PI * 2 * n
document.write("π * 2 * " + n + " = " + a + "<br><br>")
document.write("2. Despues, sacamos la raiz cuadrada al resultado anterior que es: " + a + "<br><br>")
let b = Math.sqrt(a)
document.write("√" + a + " = " + b + "<br><br>")
document.write("3. Consecuentemente multiplicamos el resultado anterior por la expresión (" + n + "/e) elevada al exponente " + n + "<br><br>")
let c = b * ((n / Math.E) ** n)
document.write(b+" * (" + n + " / e) ^ "+n+" = "+c+"<br><br>")
document.write("Por tanto el resultado obtenido por la aproximación de Stirling es: "+c+"<br><br>")
let d = 1
for (let i = 1; i <= n; i++){
    d = d * i
}
document.write("El factorial de " + n + " por función matemática es: " + d+"<br><br>")
document.write("4. El error resultante sería ( "+d+" - "+c+" )/"+d+"<br><br>")
let errorfac = (d-c)/d
document.write("El valor proporcional del error es de: "+errorfac)