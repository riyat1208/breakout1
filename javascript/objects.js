const darthvader = {

    allegiance: "Empire",
    weapon: "lightsabre", 
    sith: true,
    children: 2,
    childNames: ["Luke", "Leia"]

};

console.log(Object.keys(darthvader).length);
console.log(darthvader.children);
console.log(darthvader.childNames[0]);

for (const key in darthvader) {
if
(darthvader.hasOwnProperty(key)){
const value = darthvader[key];
console.log(key + ": " + value);
}

}

delete darthvader.children;

let{allegiance, weapon, sith, childNames} = darthvader;
console.log(darthvader.allegiance)
console.log(weapon)

