// import { createContext, useState } from "react";
// import Child1 from "./components/Child1";
import { useRef } from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

// const UserContext = createContext({name: 'ashish'});

function App() {
  const profileRef = useRef(null);

  // console.log(UserContext);

  // const [user, setUser] = useState({name : 'ashish'});

  // const steps = {
  //   "step01" : 'create context api using' ,
  //   "step02" : 'create provider wrap in provider',
  //   "step03" : 'prop as value={} pass to component from provider wrapper',
  //   "step04" : 'in component using useContext hook use the value of context'
  // }

  return (
    <>
      {/* <UserContext value={{user, setUser}}>
      <Child1/>
    </UserContext> */}
      <UserContextProvider>
        <Login profileRef={profileRef}/>
        <Profile profileRef={profileRef}/>
      </UserContextProvider>
    </>
  );
}

export default App;
// export {UserContext};
