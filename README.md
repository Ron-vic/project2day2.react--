This is a To-Do-List app
Things noted
Additional Knowledge
1.use of useState
2.how to make a button that moves Tasks up and down e.g
1.Up
const updatedTasks = [...tasks];
 [updatedTasks[index],updatedTasks[index - 1]] = 
 [updatedTasks[index -1 ],updatedTasks[index]];
 setTasks(updatedTasks);
2.Down
const updatedTasks = [...tasks];
     [updatedTasks[index],updatedTasks[index + 1]] = 
     [updatedTasks[index +1],updatedTasks[index]];
      setTasks(updatedTasks);






reference Bro Code yt
Link:https://youtu.be/9wiWzu_tRB0?si=kVU7EvOWeaM1Id8E
