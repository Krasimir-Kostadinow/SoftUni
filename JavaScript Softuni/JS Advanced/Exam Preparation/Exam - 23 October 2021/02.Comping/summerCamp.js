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
                if (participant.name === name) {
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
        function nameExists(firstName, secondName, listOfParticipants) {
            let firstNameExists = false;
            let secondNameExists = false;
            for (const participant of listOfParticipants) {
                if (participant.name === firstName && !firstNameExists) {
                    firstNameExists = true;
                }
                if (participant.name === secondName && !secondNameExists) {
                    secondNameExists = true;
                }
            }
            if (firstNameExists && secondNameExists) {
                return false;
            } else {
                return true;
            }
        }

        if (typeOfGame === 'WaterBalloonFights') {
            
            if (nameExists(firstParticipant, secondParticipant, this.listOfParticipants)) {
                throw new Error('Invalid entered name/s.');
            }

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
                    return true;
                } else {
                    return false;
                }
            })()) {

                throw new Error('Choose players with equal condition.');

            }

         
            let powerFirstPlayer = [];
            let powerSecondPlayer = [];
            for (const participant of this.listOfParticipants) {

                if (participant.name === firstParticipant) {
                    powerFirstPlayer.push(participant.name, participant.power);
                }
                if (participant.name === secondParticipant) {
                    powerSecondPlayer.push(participant.name, participant.power);
                }

            }

            if (Number(powerFirstPlayer[1]) > Number(powerSecondPlayer[1])) {

                for (const participant of this.listOfParticipants) {
                    if (participant.name === powerFirstPlayer[0]) {
                        participant.wins += 1;
                    }
                }
                return `The ${powerFirstPlayer[0]} is winner in the game ${typeOfGame}.`
            } else if ((Number(powerFirstPlayer[1]) < Number(powerSecondPlayer[1]))) {
                for (const participant of this.listOfParticipants) {
                    if (participant.name === powerSecondPlayer[0]) {
                        participant.wins += 1;
                    }
                }
                return `The ${powerSecondPlayer[0]} is winner in the game ${typeOfGame}.`
            } else {
                return 'There is no winner.'
            }

        } else if (typeOfGame === 'Battleship') {
            let isExists = false;
            for (const participant of this.listOfParticipants) {
                if (participant.name === firstParticipant) {
                    isExists = true;
                    participant.power += 20;
                    return `The ${participant.name} successfully completed the game ${typeOfGame}.`;
                }
            }
            if (!isExists) {
                throw new Error('Invalid entered name/s.');
            }

        }
    }

    toString() {
        let output = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];
        this.listOfParticipants.sort((a, b) => {
            return b.wins - a.wins;
        });
        for (const participant of this.listOfParticipants) {
            output.push(`${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`);
        }
        return output.join('\n');
    }

}




const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());

