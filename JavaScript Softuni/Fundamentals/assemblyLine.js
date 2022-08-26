
const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

function createAssemblyLine() {
    let library = {};

    library.hasClima = function (obj) {
        obj.temp = 21;
        obj.tempSettings = 21;
        obj.adjustTemp = function () {
            if (this.temp < this.tempSettings) {
                this.temp += 1;
            } else if (this.temp > this.tempSettings) {
                this.temp -= 1;
            }
        }
    }

    library.hasAudio = function (obj) {
        obj.currentTrack = null;
        obj.nowPlaying = function () {
            if (this.currentTrack !== null) {
                console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
            }
        }
    }

    library.hasParktronic = function (obj) {
        obj.checkDistance = function (distance) {
            if (distance < 0.1) {
                console.log('Beep! Beep! Beep!');
            } else if (distance >= 0.1 && distance < 0.25) {
                console.log('Beep! Beep!');
            } else if (distance >= 0.25 && distance < 0.5) {
                console.log('Beep!');
            }
        }
    }

    return library;
}
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);


