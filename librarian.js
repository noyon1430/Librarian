var library = [
  { title: "Norse Mythology", year: "2017", author: "Neil Gaiman", publisher: "W. W. Norton & Company" },
  { title: "The Old Man and the Sea", year: "1952", author: "Ernest Hemingway", publisher: "Charles Scribner's Sons" },
  { title: "Mythos: A Retelling of the Myths of Ancient Greece", year: "1981", author: "Stephen Fry", publisher: "Penguin" },
  { title: "The Mythical Man-Month", year: "1975", author: "Fred Brooks", publisher: "Addison-Wesley" },
  { title: "The Pragmatic Programmer", year: "1999", author: "Andy Hunt and Dave Thomas", publisher: "The Pragmatic Bookshelf	" },
  {title: "The Lessons of History",year:"1968 ",author:" Will Durant and Ariel Durant.",publisher:"Prothoma"}


  /* Task 2 */
];

/* Task 1 */
function getBookTitle( index ){

return library[index].title;
}

console.log(getBookTitle(2));
console.log(getBookTitle(5));


/* Task 3 */
function addBook( book ){
library.push(book);
return library;

}

var newBook = {title: "Wireless communications and networking",year:"2009 ",author:" Vijay K. Garg",publisher:"Morgan Kaufmann"};
console.log(addBook(newBook));

/* Task 4 */
function bookByAuthor(){
  //add code
  library.sort(function(a,b)
{
return (b.author) -(a.author);
});
  return library;
}

console.log(bookByAuthor());

/* Task 5 */
function findByTitle(title)
{
  //add code
     for(var i=0; i<library.length; i++)
 {
	   var list = [];
  library.map(function(v,i){
    if(v.title.toLowerCase().includes(title)) list.push(v);
  });
  return list;
  }
}


console.log(findByTitle("man"));
console.log(findByTitle("myth"));
