function arenaTier(input) {
    let arena = {}
    function gladiators(gladiator) {
        let [gladiatorName, technique, skill] = gladiator.split(' -> ');
        skill = Number(skill);
        let qualities = [];
        qualities[0] = technique;
        qualities[1] = skill;
        if (arena.hasOwnProperty(gladiatorName)) {
            let isExistsTechnique = undefined;
            let oldSkill = 0;
            let indexQualities = undefined;

            for (let i = 0; i < arena[gladiatorName].length; i++) {
                let el = arena[gladiatorName][i];
                let isExist = el.includes(technique);
                isExistsTechnique = isExist;
                indexQualities = i;
                if (isExist) {
                    let skill = el[1];
                    oldSkill = skill;
                }
            }
            if (isExistsTechnique && oldSkill < skill) {
                arena[gladiatorName][indexQualities][1] = skill;
            } else if (!isExistsTechnique) {
                arena[gladiatorName].push(qualities);
            }
        } else {
            arena[gladiatorName] = [qualities];
        }
    }
    function battle(gladiator) {
        let [firstGladiator, vs, secondGladiator] = gladiator.split(' ');
        let isExistsFirstGladiator = arena.hasOwnProperty(firstGladiator);
        let isExistsSecondGladiator = arena.hasOwnProperty(secondGladiator);
        let techniqueFirstGladiator = [];
        let techniqueSecondGladiator = [];
        if (isExistsFirstGladiator && isExistsSecondGladiator) {
            arena[firstGladiator].forEach(el => {
                techniqueFirstGladiator.push(el[0]);
            });

            arena[secondGladiator].forEach(el => {
                techniqueSecondGladiator.push(el[0]);
            });
        }
        let isBattle = false;
        let technique = [];

        techniqueSecondGladiator.forEach(el => {
          let isBattle = techniqueFirstGladiator.includes(el);
          if(isBattle) {
            technique.push(el);
          }
        });
       if (technique.length > 0) {
           isBattle = true;
       }
       
       
      
        if (isBattle) {
            let totalSkillFirstGladiator = 0;
            let totalSkillSecondGladiator = 0;
            for (let i = 0; i < technique.length; i++) {
                let skillFirstGladiator = surchSkill(arena, firstGladiator, technique[i]);
                let skilSecondGladiator = surchSkill(arena, secondGladiator, technique[i]);
                totalSkillFirstGladiator += skillFirstGladiator[0];
                totalSkillSecondGladiator += skilSecondGladiator[0]; 
            }
         
            if (totalSkillFirstGladiator > totalSkillSecondGladiator) {
                delete arena[secondGladiator];
            } else if (totalSkillFirstGladiator < totalSkillSecondGladiator) {
                delete arena[firstGladiator];
            }

        }


    }
    function surchSkill(arena, gladiator, technique) {
        let skill = [];
        for (let i = 0; i < arena[gladiator].length; i++) {
            let arr = arena[gladiator][i];
            let el = arr[0];
            if (el === technique) {
                skill.push(arr[1]);
                skill.push(i);
            }


        }
        return skill;
    }

    for (let gladiator of input) {
        let isBattle = gladiator.split(' ').includes('vs');
        if (gladiator === 'Ave Cesar') {
            break;
        } else if (isBattle) {
            battle(gladiator);
        } else {
            gladiators(gladiator);
        }
    }
    let sorted = Object.entries(arena);
    //sorted.sort((a, b) => a[0].localeCompare(b[0]));
    sorted.sort((a, b) => {
        let sumA = a[1].reduce((acc, el) => {
            acc += el[1];
            return acc;
        }, 0);
        let sumB = b[1].reduce((acc, el) => {
            acc += el[1];
            return acc;
        }, 0);
        return sumB - sumA;
    });

    sorted.forEach(el => {
        el[1].sort((a, b) => a[0].localeCompare(b[0]))
    });

    sorted.forEach(el => {
        el[1].sort((a, b) => {
            return b[1] - a[1];
        });
    });
    for (const gladiator of sorted) {
        let totalSkill = gladiator[1].reduce((acc, el) => {
            acc += el[1];
            return acc;
        }, 0);
        console.log(`${gladiator[0]}: ${totalSkill} skill`);
        gladiator[1].forEach(el => {
            console.log(`- ${el[0]} <!> ${el[1]}`);
        });
    }

}
arenaTier(
    [
        'Pesho -> Duck -> 400',
        'Julius -> Shield -> 150',
        'Julius -> Heal -> 350',
        'Gladius -> Heal -> 200',
        'Gladius -> Support -> 250',
        'Gladius -> Shield -> 250',
        'Peter vs Gladius',
        'Gladius vs Julius',
        'Gladius vs Maximilian',
        'Ave Cesar'
    ]

);