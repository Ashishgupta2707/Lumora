import { useContext } from "react";
import { UserContext } from "../App";

function Child3() {
  const { user, setUser } = useContext(UserContext);

    const handleClick = () =>{
        setUser({name: 'Ashish Gupta'})
    }

  return (
    <>
      <div>{user.name}
        <button onClick={handleClick}>Show full name</button>
      </div>
    </>
  );
}

export default Child3;
