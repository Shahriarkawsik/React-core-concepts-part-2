import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import User from './user';

function App() {
  // function handleClicked(){
  //   alert('Button is clicked.');
  // }
  // function handleClicked3(num){
  //   alert( `hello  ${num + 3}`);
  // }
  return (
    <>
      <h2>React Core Concepts Part 2</h2>
      <Friends></Friends>
      {/* <button onClick={handleClicked}>Click Me</button>
      <button onClick={() => alert('Button is clicked 2.')}>Click Me 2</button>
      <button onClick={() => handleClicked3(100)}>Click Me 3</button> */}
      <Counter></Counter>
      <Team></Team>
      <User></User>
    </>
  )
}

export default App;
