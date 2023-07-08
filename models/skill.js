const skills = [
  { id: 1, name: "HTML", isExpert: false },
  { id: 2, name: "CSS", isExpert: false },
  { id: 3, name: "JavaScript", isExpert: false },
  { id: 4, name: "Node.js", isExpert: false },
  { id: 5, name: "Express", isExpert: false },
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
  skill.isExpert = false;
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
