// Ejercicio 1G.1

const numeros = [1,2,3,4,5]

function sumaNumerosPares(numeros){
    let suma = 0

    for(const numero of numeros){
        if(numero % 2 == 0){
            suma += numero
        }
    }

    return suma
}

console.log('Ejercicio 1G.1 = ', sumaNumerosPares(numeros))

// Ejercicio 1G.2


const cadena = 'Hola Mundo'

function eliminarConsonantes(cadenaInput){
    let vocales = ''

    const cadenaArray = cadenaInput.toLowerCase().split('')

    for(const letra of cadenaArray){
        if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u')
            vocales += letra
    }

    return vocales
}

console.log('Ejercicio 1G.2 = ', eliminarConsonantes(cadena))


// Ejercicio 1G.3


function celsiusAFahrenheit(gradoCelsius){
    return (gradoCelsius * (9/5) + 32)
}

console.log('Ejercicio 1G.3 = ', celsiusAFahrenheit(20))

// Ejercicio 1G.4

function checkNumber(numero){
    if( numero % 2 == 0){
        return 'Numero Par'
    } else{
        return 'Numero Impar'
    }
}

// Ejercicio 1G.5

const promptUsuario = prompt('Escribe la cadena a evaluar')

function mayusOMinus(cadenaDeTexto){
    if(promptUsuario == promptUsuario.toUpperCase()){
        return alert('La cadena está en mayúsculas')
    } else if (promptUsuario == promptUsuario.toLowerCase()){
        return alert('La cadena está en minúsculas')
    } else {
        return alert('La cadena tiene mayúsculas y minúsculas')
    }
}

mayusOMinus(promptUsuario)


// Ejercicio 1G.6

const topics = ['JavaScript', 'Variables', 'funciones', 'condicionales', 'bucles']

function invertirMayus(array){
    const arrayMayus = array.map((topic)=>{
        return topic.toUpperCase()
    })

    arrayMayus.reverse()
    return arrayMayus
}

console.log('Ejercicio 1G.6 =', invertirMayus(topics))

