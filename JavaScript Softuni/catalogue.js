function catalogue(input) {
    let catalogue = [];
    class Groups {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
 
    }


    let products = input.map(el => el.split(' : '));

    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        let nameProduct = product[0];
        let priceProduct = Number(product[1]);
        let object = new Groups(nameProduct, priceProduct);
        catalogue.push(object);
    }
    catalogue.sort((a, b) => a.name.localeCompare(b.name));
    let currentGroup = '';
  for (const obj of catalogue) {
  
      if (currentGroup === obj.name.charAt(0)) {
        console.log(`  ${obj.name}: ${obj.price}`);
    }
    else if (currentGroup !== obj.name.charAt(0)) {
        currentGroup = obj.name.charAt(0);
        console.log(obj.name.charAt(0));
        console.log(`  ${obj.name}: ${obj.price}`);
    }
  }

}
catalogue(
    [
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
        ]
        
);