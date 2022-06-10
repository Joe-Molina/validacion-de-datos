class pelicula{
    constructor({id, titulo, director, estreno, pais, generos, calificacion}){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;

        this.validarIMDB(id);//aca se va a ejecutar este metodo 
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.ValidarCalificacion(calificacion);

    }

    static get getListaGeneros(){
        return ["accion", "drama", "comedia","fantasia", "terror", "romance", "psicologico", "ciencia ficcion"];
    }

    static generosAceptados(){
        return console.info(`los generos aceptados son: ${pelicula.getListaGeneros.join(", ")}`)
    }

validarCadena(propiedad, valor){//valida que la informacion ingresada sea de tipo string y salte error si esta vacia 
    if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);

    if(typeof valor !== "string") return console.warn(`${propiedad} "${valor}", no es una cadena de texto`);

    return true;
}

validarLongitudCadena(propiedad, valor, longitud){//valida que la longitud de la cadena sea menor o igual al valor ingresado

    if(valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el numero de caracteres permitidos (${longitud})`);

    return true;
}

validarNumero(propiedad, valor){
    if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
    
    if(typeof valor !== "number") return console.warn(`${propiedad} "${valor}" no es un numero`);

    return true;
}

validarNumeroNegativo(propiedad, valor){
    if(Math.sign(valor) === -1){
        console.log(` no se permiten numeros negativos. su ${propiedad}: "${valor}"`)
    }
}

validarArreglo(propiedad, valor){
    if(!valor) return console.error(`${propiedad} "${valor} esta vacio"`);

    if(!(valor instanceof Array)) return console.warn(`${propiedad} "${valor}" no es un arreglo `);

    if(valor.length === 0) return console.warn(`${propiedad} "${valor}" no tiene datos`);

    for(let cadena of valor){
        if(typeof cadena !== "string") return console.error(`el valor "${cadena}" ingresado no es un arreglo`)
    }

    return true;
}

validarIMDB(id){
    if(this.validarCadena("IMDB id", id)){
        if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){//esta expresion regular valida que se cumplan las condiciones del id
            return console.error(`IMDB id "${id}" no es valido, debe tener 9 caracteres, los 2 primeros letras y los 7 restantes numeros`)
        }
    }
}

validarTitulo(titulo){
    if(this.validarCadena("Titulo", titulo)){
       this.validarLongitudCadena("titulo", titulo, 100);
    }
}

validarDirector(director){
    if(this.validarCadena("Director", director)){
       this.validarLongitudCadena("Director", director, 50);
    }
}

validarEstreno(estreno){
    if(this.validarNumero("estreno", estreno)){
       if(!(/^([0-9]){4}$/.test(estreno))) console.warn(`año de estreno ${estreno} no es una fecha de estreno valida`);
    }
}

validarPais(pais){
    this.validarArreglo("pais",pais)
}

validarGeneros(generos){
   if(this.validarArreglo("generos", generos)){
       for (let genero of generos) {
           if(!pelicula.getListaGeneros.includes(genero)){
               console.warn(`Genero(s) incorrecto(s) "${generos.join(", ")}"`);
               pelicula.generosAceptados();
           }
       }
   }
}

ValidarCalificacion(calificacion){
    this.validarNumero("calificacion", calificacion);

    this.validarNumeroNegativo("califcaion", calificacion);

    if(calificacion > 10){
        return console.warn("la calificacion no puede ser menor a 10")
    }      
}

fichaTecnica(){

    console.info(`Ficha tecnica:\nTitulo: "${this.titulo}"\nIMDB Id: "${this.id}"\ntitulo: "${this.titulo}"\nDirector: "${this.director}"\nEstreno: "${this.estreno}"\nPais: "${this.pais.join("-")}"\nGenero: "${this.generos.join(", ")}"\nCalificaion: "${this.calificacion}"`)

}

}
/*
const peli = new pelicula({
    id: "tt1234567",
    titulo: "titulo de la peli",
    director: "silverte escalon(o no se como se escribe xd)",
    estreno: 2014,
    pais: ["venezuela", "UK"],
    generos: ["comedia", "accion"],
    calificacion: 2.4
})

peli.fichaTecnica()
*/

const misPelis = [
    {
        id: "tt1234567",
        titulo: "pocajontas",
        director: "nombre ramdon 1",
        estreno: 1999,
        pais: ["USA"],
        generos: ["comedia","romance"],
        calificacion: 7
    },
    {
        id: "tt7654321",
        titulo: "pinocho",
        director: "alguien x2",
        estreno: 1994,
        pais: ["USA"],
        generos: ["comedia", "fantasia"],
        calificacion: 8
    },
    {
        id: "tt5671234",
        titulo: "blanca nieves",
        director: "no se chamo ya",
        estreno: 1980,
        pais: ["Australia"],
        generos: ["fantasia"],
        calificacion: 2
    }
]

misPelis.forEach(el => new pelicula(el).fichaTecnica())