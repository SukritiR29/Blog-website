import { useState } from "react";

const Home = () => {
const [age, setAge] = useState(25);
const [name, setName] = useState('mario');

  const handleClick = () => {
      setName('louis');
      setAge(30);
  }
    
    return ( 
        <div className="Home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
           
        </div>
     );
}
 
export default Home;