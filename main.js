const { languagesAndUses, ideasToCode } = require("./data");

function randomIntFromInterval(max) {
  return Math.floor(Math.random() * max);
}

const rndLanguage = randomIntFromInterval(languagesAndUses.length);
console.log("-----------------------------------------------------");
console.log(
  `Language Selected      :  ${languagesAndUses[rndLanguage].language}`
);
if (languagesAndUses[rndLanguage].frameworks.length) {
  const rndFramework = randomIntFromInterval(
    languagesAndUses[rndLanguage].frameworks.length
  );
  console.log(
    `With/Without Framework :  ${languagesAndUses[rndLanguage].frameworks[rndFramework]}`
  );
}
if (languagesAndUses[rndLanguage].studySubjects.length) {
  const rndStudyCase = randomIntFromInterval(
    languagesAndUses[rndLanguage].studySubjects.length
  );
  console.log(
    `Study Subject          :  ${languagesAndUses[rndLanguage].studySubjects[rndStudyCase]}`
  );
  const rndIdea = randomIntFromInterval(
    ideasToCode[languagesAndUses[rndLanguage].studySubjects[rndStudyCase]]
      .length
  );
  console.log(
    `Project idea           :  ${
      ideasToCode[languagesAndUses[rndLanguage].studySubjects[rndStudyCase]][
        rndIdea
      ]
    }`
  );
}
console.log("-----------------------------------------------------");
