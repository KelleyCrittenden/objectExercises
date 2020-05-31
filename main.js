
//Exercise 1.1
const car= {
    make: "Ford",
    model: "Mustang",
    year: 2015,
    color: "red"
};

console.log(car);



//Exercise 1.2
const shelterAnimals = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]

console.log(shelterAnimals);



//Exercise 1.3
const dad= {
    name: "Austin",
    age: 52,
    hair: "brown",
    eyes: "green",
}

const mom= {
    name: "Annie",
    age: 48,
    hair: "blonde",
    eyes: "blue" 
}

const son= {
    name: "Ethan",
    age: 20,
    hair: "blonde",
    eyes: "green"
}

const daughter= {
    name: "Betty",
    age: 18,
    hair: "brown",
    eyes: "blue"
}

const familyMembers= [dad, mom, son, daughter];

console.log(familyMembers);



//Exercise 2.1

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log(`Wardrobe height ${wardrobe.height}`);
console.log(`Wardrobe manufacturer ${wardrobe.manufacturer}`);
console.log(`Wardrobe contents ${wardrobe.contents}`);
console.log(`Wardrobe depth ${wardrobe.depth}`);
console.log(`Wardrobe width ${wardrobe.width}`);

wardrobe.material = "Cedar";

console.log(wardrobe);



//Exercise 3.1
const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon" 
}

console.log(empireStateBuilding.height);
console.log(empireStateBuilding.eastWestLength);
console.log(empireStateBuilding.northSouthLength);
console.log(empireStateBuilding.stories);
console.log(empireStateBuilding.squareFeet);

//Exercise 3.2

const empireStateBuildingAddress = empireStateBuilding["address"];
const empireStateBuildingDate = empireStateBuilding["constructionDate"];
const empireStateBuildingCost = empireStateBuilding["cost"];
const empireStateBuildingOwner = empireStateBuilding["owner"];
const empireStateBuildingArchitect = empireStateBuilding["architect"];

console.log(empireStateBuildingAddress);
console.log(empireStateBuildingDate);
console.log(empireStateBuildingCost);
console.log(empireStateBuildingOwner);
console.log(empireStateBuildingArchitect);



//Exercise 4.1

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
};

const fullTimeTeachers = nashvilleSoftwareSchool.instructors.fullTime;

for (let i = 0; i < nashvilleSoftwareSchool.instructors.fullTime.length; i++) {
    console.log(fullTimeTeachers[i])
};

const partTimeTeachers = nashvilleSoftwareSchool.instructors.partTime;

for (let i = 0; i < nashvilleSoftwareSchool.instructors.partTime.length; i++) {
    console.log(partTimeTeachers[i])
};


//Exercise 4.2

console.log(nashvilleSoftwareSchool.instructors.fullTime[4]);
console.log(nashvilleSoftwareSchool.instructors.partTime[0]);


