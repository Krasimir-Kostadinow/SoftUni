function phoneBook(input) {

    let phonebook = {};
    input.forEach(el => {
        element = el.split(' ');
        let [name, number] = element;
        phonebook[name] = number;
    });
      
for (const key in phonebook) {
console.log(`${key} -> ${phonebook[key]}`);
}



}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);