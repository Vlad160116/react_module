// import React, {useEffect, useState} from 'react';
// import './App.css';
// import L2 from "./components/L2";
//
// function App() {
//     const user = {name:'Vlad', age: 25}
//     return (
//         <div>
//             <L2>
//                 {user} years old
//             </L2>
//         </div>
//     );
// }
//
// export default App;

// import React, {useState} from 'react';
//
// const App = () => {
//
//     // let greeting = 'hello';
//     const [greeting, setGreeting] = useState('hello')
//     const adder = () => {
//         // greeting+='!'
//         setGreeting(greeting+'!')
//         console.log(greeting);
//     }
//     return (
//         <div>
//             <button onClick={adder}>Click</button>
//             {greeting}
//         </div>
//     );
// };
//
// export default App;

// import Users from './components/Users';
//
// const App = () => {
//     return (
//         <div>
//             <users/>
//         </div>
//     );
// };
//
// export default App;

import Users from './components/Users';

const App = () => {

    return (
        <div>
            <Users/>
        </div>
    );
};

export default App;