/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

let cat = {
    appearance: "cat",
    name: "Garfield",
    legs: 4,
    hands: 0,
    gender: "male",
    shout: "I love lazagna!",
    friends:['Selina', 'Jeremy']
};
let cat_woman = {
    appearance:"cat-woman",
    name:"Selina",
    legs:2,
    hands:2,
    gender: "female",
    shout:cat['shout'],
    friends: [cat['shout'],'Sansa']
};
let dog = {
    appearance:"dog",
    name: "Jerry",
    gender: "male",
    legs: 4,
    hands: 0,
    shout: "Woof!",
    friends: ["Sansa","Snoop Dog", "Balto", "Goofy"]
};
let human = {
    appearance:"human",
    name:"Sansa",
    gender:"female",
    legs:2,
    hands:2,
    shout:"Winter is coming",
    friends:[dog['name'], "Robb", "Arya", "Bran", "Rickon"]
};


let arr = [cat, dog, human,cat_woman];
// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */

for(let i = 0;i<arr.length;i++){
    let obj = arr[i];
    let friends = obj['friends'].join(', ');
    console.log(obj);
    print(`Hi, my name is <strong>${obj['name']}</strong>. I am <em>${obj['gender']} ${obj['appearance']}</em>.I have ${obj['legs']} legs and ${obj['hands']} hands. My friends are ${friends}. And you know what? ${obj['shout']}`);
}


