const skills = [
  { id: 1, skill: "HTML", isExpert: false },
  { id: 2, skill: "CSS", isExpert: false },
  { id: 3, skill: "JavaScript", isExpert: false },
  { id: 4, skill: "Node.js", isExpert: false },
  { id: 5, skill: "Express", isExpert: false },
];

module.exports = {
  getAll,
  getOne,
};

function getAll() {
  return skills;
}

function getOne(id) {
  // URL params are strings - convert to int
  id = parseInt(id);

  return skills.find((skill) => skill.id === id);
}
