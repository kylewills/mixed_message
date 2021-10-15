const generateRandomNumber = num => {
    return Math.floor(Math.random() * num)
  };
  //console.log(generateRandomNumber);

 const whatToDo = {
   day: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
   colourClothes: ['red', 'blue','green', 'yellow', 'black', 'orange', 'any colour'],
   activity: ['shopping', 'watch tv', 'play football', 'go for walk', 'swimming', 'vist friends', 'clean the house']
 }
//console.log(whatToDo[]);
 let activityChoices = [];

  for(let todo in whatToDo){
    let choice = generateRandomNumber(whatToDo[todo].length);
  
  switch(todo) {
    case 'day':
      activityChoices.push(`Today is "${whatToDo[todo][choice]}".`)
      break
    case 'colourClothes':
      activityChoices.push(`How about wearing : "${whatToDo[todo][choice]}" clothes.`)
      break
    case 'activity':
      activityChoices.push(`The best activity for you to do today is : "${whatToDo[todo][choice]}".`)
      break
    default:
      activityChoices.push('Maybe you should do something else???.')
  }
 }

function whatShallIDo() {
  const formatted = activityChoices.join('\n')
  //console.log(formatted)
  //console.log(document.getElementById('messageDisplay').innerHTML = whatShallIDo(activityChoices));
  document.getElementById('messageDisplay').innerHTML = formatted;
};

//whatShallIDo(activityChoices);

const newRandomMessage = () =>{
  //const formatted = activityChoices.join('\n')
  //let newMessage = Math.floor(Math.random() * (randMess.length));
  //alert("randMess[newMessage]");
  return document.getElementById('messageDisplay').innerHTML = whatShallIDo(activityChoices); 
};


/*const message = () =>{
  let newMessage = Math.floor(Math.random() * (randMess.length));
  //alert("randMess[newMessage]");
  document.getElementById('clickedMessageDisplay').innerHTML = randMess[newMessage];
};*/
