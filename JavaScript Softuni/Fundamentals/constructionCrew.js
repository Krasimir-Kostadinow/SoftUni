function constructionCrew(object) {

    if (object.dizziness) {
        object.levelOfHydrated += (object.weight * 0.1) * object.experience; 
        object.dizziness = false;
    }

   return object; 
}
console.log(constructionCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  )); 