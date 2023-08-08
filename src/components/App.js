
// import React from "react";
// import './../styles/App.css';

// const App = () => {
//   return (
//     <div>
//         {/* Do not remove the main div */}
//     </div>
//   )
// }

// export default App


// App.js (or any component file where you want to use the store)
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from './store'; // Update the import path as needed

function App() {
  const user = useSelector(state => state);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    const newName = 'John Doe';
    const newEmail = 'john@example.com';
    dispatch(updateUser(newName, newEmail));
  };

  return (
    <div>
      <h1>User Information</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={handleUpdate}>Update User</button>
    </div>
  );
}

export default App;
