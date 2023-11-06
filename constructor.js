//constructor
function Book(title, author,year){
    this.title = title;
    this.author = author;
    this.year = year;
}

//Instatiate an Object
const book1 = new Book('Book One' , 'John Doe', '2013');
const book2 = new Book('Book Two' , 'John Dw', '2019');

console.log(book2);