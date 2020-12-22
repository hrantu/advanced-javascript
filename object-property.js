const students = [
    {id: 21, name: 'Omar sunny'},
    {id: 31, name: 'Maanaaaaa'},
    {id: 41, name: 'Moyuri'},
    {id: 71, name: 'DeepJol'}
];

//my way
// let array = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     array.push(element.name);    
// }
// console.log(array);

// Jhankar's way
const names = students.map(s =>s.name);
const ids = students.map(s =>s.id);
const bigger = students.filter(s=> s.id>40);
const bigger1 = students.find(s=> s.id>40);

console.log(names);
console.log(ids);
console.log(bigger);
console.log(bigger1);