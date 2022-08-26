function netherRealms(input) {
    let patternHealth = /([^0-9+\+\-\*\/\/.])/g;
    let patternDamage = /([\+\-]?\d+\.?\d*)/g;

    let health = patternHealth.exec(input);
    function totalHealth(patternHealth, input) {
        let totalHealth = 0;
        while (health !== null) {
            let charCodeHealth = health[1].charCodeAt();
            totalHealth += charCodeHealth;
            health = patternHealth.exec(input);
        }
        return totalHealth;
    }
    function damage(patternDamage, input) {
        let totalDamage = 0;
        let damageDemon = patternDamage.exec(input);
        while (damageDemon !== null) {
          
            totalDamage += Number(damageDemon[1]);
            damageDemon = patternDamage.exec(input);
        }
        return totalDamage;
    }
    let healthDemon = totalHealth(patternHealth, input);
    let totalDamage = damage(patternDamage, input); // must have * or / ???? answer 8
    console.log(totalDamage);
}
netherRealms('M3ph-0.5s-0.5t0.0**');