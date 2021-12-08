function fancyBarcode(input) {
    let numBarcode = Number(input.shift());
    let pattern = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;

    for (let i = 0; i < numBarcode; i++) {
        let barcode = input[i];
        if (pattern.test(barcode)) {
            let productGroup = '';
            let barCodeGroup = pattern.exec(barcode);
            let group = barCodeGroup[1];
          
        for (const character of group) {
            let charCode = character.charCodeAt();
            if (charCode >= 48 && charCode <= 57) {
                productGroup += character;
            }
 
        }
        if (productGroup.length >= 1) {
            console.log(`Product group: ${productGroup}`);
        } else {
            console.log('Product group: 00');
        }
    
        } else {
            console.log('Invalid barcode');
        }

    }

}
fancyBarcode((["3",
"@#FreshFisH@#",
"@###Brea5D@###",
"@##Che4s6E@##"])


);