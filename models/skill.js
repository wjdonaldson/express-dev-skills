const skills = [
  { id: 865414, 
    name: "Time Management", 
    isExpert: true, 
    desc: "Time management is the process of planning and exercising conscious control of time spent on specific activities - especially to increase effectiveness, efficiency, and productivity." },
  { id: 351364, 
    name: "HTML", 
    isExpert: false, 
    desc: "The HyperText Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser." },
  { id: 265487, 
    name: "CSS", 
    isExpert: false, 
    desc: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML." },
  { id: 332586, 
    name: "JavaScript", 
    isExpert: false, 
    desc: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS." },
  { id: 432561, 
    name: "Node.js", 
    isExpert: false, 
    desc: "Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more." },
  { id: 816565, 
    name: "Express.js", 
    isExpert: false, 
    desc: "Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js." },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update,
};

function getAll() {
  return skills;
}

function getOne(id) {
  // URL params are strings - convert to int
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  // skill.isExpert = false;
  skills.push(skill);
}

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex((skill) => skill.id === id);
  skills.splice(idx, 1);
}

function update(skill) {
  id = parseInt(skill.id);
  const idx = skills.findIndex((skill) => skill.id === id);
  skills[idx].name = skill.name;
  skills[idx].isExpert = skill.isExpert;
}

// function update(id, skill) {
//   id = parseInt(id);
//   const idx = skills.findIndex((skill) => skill.id === id);
//   skills[idx].name = skill.name;
//   skills[idx].isExpert = skill.isExpert;
// }
