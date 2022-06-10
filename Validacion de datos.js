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

    }

    static get getListaGeneros(){
        return ["accion", "drama", "comedia", "terror", "romance", "psicologico", "ciencia ficcion"];
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

}

pelicula.generosAceptados();

const peli = new pelicula({
    id: "tt1234567",
    titulo: "titulo de la peli",
    director: "silverte escalon(o no se como se escribe xd)",
    estreno: 2014,
    pais: ["tu mama", "el pepe"],
    generos: ["comedia", "accion"]
})

