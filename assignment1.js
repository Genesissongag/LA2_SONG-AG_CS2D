// Declare variables and constants for each persona
const student = {
  firstName: "Genesis",
  middleName: "Coplanga",
  lastName: "Song-ag",
  birthdate: "May 25, 2004",
  birthplace: "Lamag, Quirino, ILocos Sur, Philippines, 2721",
  address: "Cayus, Quirino, ILocos Sur, Philippines, 2721",
  course: "Bachelor Of Science In Computer Science",
  year: "2nd Year",
  dreamJob: "Carpenter"
};

const classmate1 = {
  firstName: "Bridgette",
  middleName: "Gabuyo",
  lastName: "Cayusa",
  birthdate: "March 27, 2005",
  birthplace: "Malideg, Quirino, ILocos Sur, Philippines, 2721",
  address: "Malideg, Quirino, ILocos Sur, Philippines, 2721",
  course: "Bachelor Of Hotel Management",
  year: "2nd Year",
  dreamJob: "chef"
};

const classmate2 = {
  firstName: "Lorena",
  middleName: "Galangey",
  lastName: "Copio",
  birthdate: "January  8, 2005",
  birthplace: "Suagayan, Quirino, ILocos Sur, Philippines, 2721",
  address: "Barangay Poblacion, Makati City, Philippines, 2721",
  course: "Bachelor Of Nursing Student",
  year: "2nd Year",
  dreamJob: "Doctor"
};

// Function to print persona information using string concatenation and formatting
function printPersonaInfo(persona) {
  const sentence = `My name is ${persona.firstName} ${persona.middleName} ${persona.lastName}, born on ${persona.birthdate} in ${persona.birthplace}. I live at ${persona.address} and I'm a ${persona.year} student taking up ${persona.course}. My dream job after graduation is to become a ${persona.dreamJob}.`;
  console.log(sentence);
}

// Print persona information for each student
printPersonaInfo(student);
printPersonaInfo(classmate1);
printPersonaInfo(classmate2);

  
