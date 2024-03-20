import { agregarLibro, buscarLibroPorTitulo, listarLibros, Libro } from "./funcionesBiblioteca.ts";

//El uso de las funciones hacia otro archivos para dividir las responsabilidades haciendo el codigo mas limpio.
agregarLibro("Cenicienta", "Ramon", 2023, true);
agregarLibro("Pepito", "Juan", 1998, true);
agregarLibro("Blanca Nieves", "Walt Disney", 1889, false);
agregarLibro("Romeo y Julieta", "shakespeare", 1888, false);
listarLibros(); 

let libroEncontrado : Libro | null = buscarLibroPorTitulo("Pepito");
console.log(libroEncontrado);
