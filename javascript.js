const randMess = [
  "If you want to fly, give up everything that weighs you down.",
  "Do not tell someone about your good side to make them stay. Tell them your worst side and see who stays.",
  "Change is hard at first, messy in the middle and gorgeous at the end.",
  "Opinion is really the lowest form of human knowledge. It requires no accountability, no understanding. The highest form of knowledge is empathy, for it requires us to suspend our egos and live in another’s world. It requires profound purpose-larger-than-the-self kind of understanding.",
  "Life isn’t about finding yourself. Life is about creating yourself.",
  "Do everything with a good heart and expect nothing in return and you will never be disappointed.",
  "Psychology says: when you focus on problems you will have more problems. When you focus on possibilities you’ll have more opportunities.",
  "Trust what you feel, not what you hear.",
  "What’s meant to be will always find a way.",
  "Leaders become great not because of their power but, because of their ability to empower others.",
  "This year I want to go on more adventures.",
  "Strong people will automatically stop trying if they feel unwanted. They won’t fix it or beg. They will just walk away.",
  "No matter how you feel get up, dress up, show up and never give up.",
  "Always remember, someone’s effort is a reflection of their interest in you.",
  "In the middle of every difficulty lies opportunity.",
];

/*const newRandomMessage = () =>{
  let newMessage = Math.floor(Math.random() * (randMess.length));
  //alert("randMess[newMessage]");
  document.getElementById('messageDisplay').innerHTML = randMess[newMessage];
};*/

const message = () =>{
  let newMessage = Math.floor(Math.random() * (randMess.length));
  //alert("randMess[newMessage]");
  document.getElementById('clickedMessageDisplay').innerHTML = randMess[newMessage];
};

  /*const generateRandomNumber = num => {
    return Math.floor(Math.random() * num)
  };
  console.log(generateRandomNumber);

*/
