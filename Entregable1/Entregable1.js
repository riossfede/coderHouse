//Entregable 1 - Federico Rios

class Usuario{
    constructor({nombre, apellido, mascotas, libros}){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascotas = mascotas;
        this.libros = libros;
    }

    //Retorna nombre completo.
    getFullName = () => `${this.nombre} ${this.apellido}`;


    //Añade una mascota nueva al arreglo.
    addMascota = (mascota) => this.mascotas.push(mascota);

    //Retorna la cantidad de elementos del arreglo mascotas.   
    countMascotas = () => this.mascotas.length;

    //Añade un nuevo libro al arreglo.
    addBook = (bookName, autor) => this.libros.push({bookName, autor});

    //Retorna solo el nombre de cada libro que haya en el arreglo.
    getBookName = () => {
        const bookNameList = [];
        this.libros.map((libro) => bookNameList.push(this.libros.bookName));
        return bookNameList;    
    }
}

//Instancia de un Usuario.

let infoUser = {
    nombre: 'Federico', 
    apellido: 'Rios', 
    mascotas: ['Perro', 'Gato', 'Gato'], 
    libros: [ 
        {bookName: 'El señor de las moscas', autor: 'William'}, 
        {bookName: 'Venas abiertas', autor: 'Galeano'}]
}

let user1 = new Usuario(infoUser);


//Pruebas y vistas en consola.
console.log(user1.getFullName());
user1.addMascota('Jirafa');
console.log(user1.countMascotas());
user1.addBook('El principito', 'NataliaNatalia');
console.log(user1.getBookName());

