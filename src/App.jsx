import { createContext, useState } from "react";
import Child1 from "./components/Child1";

const UserContext = createContext({name: 'ashish'});

function App() {

  // console.log(UserContext);

  const [user, setUser] = useState({name : 'ashish'});

  const steps = {
    "step01" : 'create context api using' ,
    "step02" : 'create provider wrap in provider',
    "step03" : 'prop as value={} pass to component from provider wrapper',
    "step04" : 'in component using useContext hook use the value of context'
  }

  return (
    <>
    <UserContext value={{user, setUser}}>
      <Child1/>
    </UserContext>
    </>
  );
}

export default App;
export {UserContext};
