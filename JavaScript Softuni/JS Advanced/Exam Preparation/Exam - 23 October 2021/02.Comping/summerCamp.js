class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { child: 150, student: 300, collegian: 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {

        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        }
        if ((() => {
            let isExists = false;
            for (const participant of this.listOfParticipants) {
                if (participant.condition === condition) {
                    isExists = true;
                    break;
                }
            }
            return isExists;
        })()) {
            return `The ${name} is already registered at the camp.`
        }
        if (this.priceForTheCamp[condition] > money) {
            return 'The money is not enough to pay the stay at the camp.'
        } else {
            this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
            return `The ${name} was successfully registered.`
        }
    }

    unregisterParticipant(name) {
        let isExists = false;
        for (let i = 0; i < this.listOfParticipants.length; i++) {
            let participant = this.listOfParticipants[i];
            if (participant.name === name) {
                isExists = true;
                this.listOfParticipants.splice(i, 1);
                return `The ${name} removed successfully.`;
            }

        }
        if (!isExists) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }
    }

    timeToPlay(typeOfGame, firstParticipant, secondParticipant) {
        if (typeOfGame === 'WaterBalloonFights') {

            if ((() => {
                let firstPlayer;
                let secondPlayer;
                for (const participant of this.listOfParticipants) {

                    if (participant.name === firstParticipant) {
                        firstPlayer = participant.condition;
                    }
                    if (participant.name === secondParticipant) {
                        secondPlayer = participant.condition;
                    }

                }
                if (firstPlayer !== secondPlayer) {
                    return false;
                } else {
                    return true;
                }
            })()) {

                throw new Error('Choose players with equal condition.');

            }

        } else if (typeOfGame !== 'Battleship') {

        }
    }

}


const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));


