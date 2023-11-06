class Book{
    constructor(title ,author ,year){
        this.title = title;
        this.author = author;
        this.year = year;
    }


getSummary(){
    return `${this.title} was written by 
       ${this.author} in ${this.year}`;   
}

getAge(){
    const years = new Date().getFullYear()-this.year;
    return `${this.title} is ${this.years} years old`;
}

revise(newYear){
    this.year = newYear;
    this.revised =true;
}

static toBookStore(){
    return 'Barnes & Noble';
}
}

//Instatiate an Object
const book1 = new Book('Book One' , 'John Doe', '2013');
const book2 = new Book('Book Two' , 'John Dw', '2019');

console.log(book2);
book2.revise('2020');
console.log(book2)