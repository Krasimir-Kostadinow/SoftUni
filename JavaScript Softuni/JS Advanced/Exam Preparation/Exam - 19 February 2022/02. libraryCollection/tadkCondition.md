JS Advanced Regular Exam – 19 Feb 2022
Problem 2. Library Collection
 
Write a class LibraryCollection, which implements the following functionality:
Functionality
Constructor
Should have these 2 properties:
•	capacity – Number
•	books – Array (empty)
At the initialization of the LibraryCollection class, the constructor accepts the capacity.
Hint: You can add more properties to help you finish the task.  

addBook (bookName, bookAuthor)
The bookName and bookAuthor are of type string. 
•	If there's not enough space in the collection for the book, throw an Error:
              "Not enough space in the collection."
•	Otherwise, this function should add the book, with the properties: bookName, bookAuthor, payed: default false, to the books array and return:
"The {bookName}, with an author {bookAuthor}, collect."

payBook( bookName ) 
•	If the book is not found, throw an Error:
"{bookName} is not in the collection."
•	If the book has already paid, throw an Error:
"{bookName} has already been paid."
•	Otherwise, this function set paid to true on the found book and return:
"{bookName} has been successfully paid."

removeBook(bookName) 
•	If the book is not found, throw an Error:
"The book, you're looking for, is not found."
•	If the book hasn't paid, throw an Error:
"{bookName} need to be paid before removing from the collection."
•	Otherwise, this function should remove the book from the array and return:
"{bookName} remove from the collection."

getStatistics(bookAuthor)
This method can be called with one parameter or without any.
 If no parameter is provided, the method should return the full information of the library 
•	At the first line:
"The book collection has { emptySlots } empty spots left."
•	On the lines, display information about each book, sorted alphabetically ascending, by their bookName:
"{bookName} == {bookAuthor} - {Has Paid / Not Paid}."
If the method is called with a parameter for bookAuthor:
•	Return only the information about the book from the given bookAuthor:
"{bookName} == {bookAuthor} - {Has Paid / Not Paid}."
•	If there is no such author’s book found, throw an Error:
"{bookAuthor} is not in the collection."


Example
Input 1
const library = new LibraryCollection(2)
console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.addBook('Ulysses', 'James Joyce'));

Output 1
The In Search of Lost Time, with an author Marcel Proust, collect.
The Don Quixote, with an author Miguel de Cervantes, collect.
Not enough space in the collection.

Input 2
const library = new LibraryCollection(2)
library.addBook('In Search of Lost Time', 'Marcel Proust');
console.log(library.payBook('In Search of Lost Time'));
console.log(library.payBook('Don Quixote'));

Output 2
In Search of Lost Time has been successfully paid.
Don Quixote is not in the collection.

Input 3
const library = new LibraryCollection(2)
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
console.log(library.removeBook('Don Quixote'));
console.log(library.removeBook('In Search of Lost Time'));

Output 3
Don Quixote remove from the collection.
In Search of Lost Time need to be paid before removing from the collection.


Input 4
const library = new LibraryCollection(2)
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.getStatistics('Miguel de Cervantes'));

Output 4
The Don Quixote, with an author Miguel de Cervantes, collect.
Don Quixote == Miguel de Cervantes - Not Paid.

Input 5
const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());

Output 5
The book collection has 2 empty spots left.
Don Quixote == Miguel de Cervantes - Has Paid.
In Search of Lost Time == Marcel Proust - Not Paid.
Ulysses == James Joyce - Not Paid.
