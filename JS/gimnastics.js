function gimnastics(input) {
    let cuntry = input[0];
    let device = input[1];
    let point = 0;

    switch (cuntry) {
        case 'Russia':
            if (device === 'ribbon') {
                point = 18.5;
            } else if (device === 'hoop') {
                point = 19.1;
            } else if (device === 'rope') {
                point = 18.6;
            }
            break;
        case 'Bulgaria':
            if (device === 'ribbon') {
                point = 19;
            } else if (device === 'hoop') {
                point = 19.3;
            } else if (device === 'rope') {
                point = 18.9;
            }
            break;
        case 'Italy':
            if (device === 'ribbon') {
                point = 18.7;
            } else if (device === 'hoop') {
                point = 18.8;
            } else if (device === 'rope') {
                point = 18.850;
            }
            break;
    }
    
    let residueParcent = ((20 - point) / 20) * 100;

    console.log(`The team of ${cuntry} get ${point.toFixed(3)} on ${device}.`);
    console.log(`${residueParcent.toFixed(2)}%`);


}

gimnastics(["Italy", "hoop"]);


     