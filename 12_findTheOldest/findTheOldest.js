const findTheOldest = function (people) {
  people.sort((a, b) => {
    const aAge = a.yearOfDeath
      ? a.yearOfDeath - a.yearOfBirth
      : new Date().getFullYear() - a.yearOfBirth;
    const bAge = b.yearOfDeath
      ? b.yearOfDeath - b.yearOfBirth
      : new Date().getFullYear() - b.yearOfBirth;
    return bAge - aAge;
  });

  return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
