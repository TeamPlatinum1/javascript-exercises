function getAge(person){
    if("yearOfDeath" in person){
        return person.yearOfDeath - person.yearOfBirth;
    } else {
        return (new Date).getFullYear() - person.yearOfBirth;
    }
}

const findTheOldest = function(people) {
    return people.reduce((oldestPerson, person, index) => {
        return index === 0 ? person :
        getAge(oldestPerson) > getAge(person) ? oldestPerson : person;
    }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
