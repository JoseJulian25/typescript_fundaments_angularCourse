//Interface Libro que a su vez esta siendo exportada hacia otro archivo
export interface Libro{
    titulo: string
    autor: string
    anioPublicacion: number
    estaDisponible: boolean
}

//Variable biblioteca que almacenara libros
let biblioteca:Libro[] = [];

//Este contador sirve para indicar la posicion del arreglo Libro se va a acceder
let contador:number = 0;

function agregarLibro(titulo: string, autor: string, anioPublicacion: number, estaDisponible: boolean) : void{
    const libro : Libro =  {
        titulo: titulo,
        autor:autor,
        anioPublicacion: anioPublicacion,
        estaDisponible:estaDisponible
    }

    //Cada vez que se invoque esta funcion el contador se incrementara a 1, para que cada nuevo libro
    //se guarde en la siguiente posicion.
    biblioteca[contador++] = libro;
}

function buscarLibroPorTitulo(titulo:string) : Libro | null{
     //Se recorre el arreglo hasta que iguale a contador, ya que contador representa la cantidad de libros guardados.
    for(let i:number = 0; i <= contador; i++ ){
        if(titulo == biblioteca[i].titulo ){
            //Si el titulo ingresado es igual al titulo del libro que se esta accediendo, lo va a retornar.
            return biblioteca[i];
        }
    }
    return null;
}

//Recorre todo el array y lo imprime en consola.
function listarLibros(){
    for(let i:number = 0; i < contador; i++ ){
        console.log(biblioteca[i]);
    }
}

//Se exportan las funciones para tener un codigo mas organizado
export{agregarLibro, buscarLibroPorTitulo, listarLibros}