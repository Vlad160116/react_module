import React, {useEffect, useState} from 'react';
import './App.css';


function App() {
    // function click2 ()  {
    //     console.log('click2 test');

    let counter = 0;
    const increment = () => {
        counter++;
        console.log(counter);
    }

    // let users = [
    //     {name: 'vasya', age: 31, status: false},
    //     {name: 'vlad', age: 19, status: true},
    //     {name: 'kolya', age: 21, status: false},
    //     {name: 'olya', age: 33, status: true},
    //     {name: 'viktor', age: 15, status: true}
    // ];


    return (
        <div>
            {/*<button onClick={() => console.log('click')}>click me 1</button>*/}
            {/*<button onClick={(click2) => console.log('click')}>click me 2</button>*/}

            <h1>{counter}</h1>
            <button onClick={increment}>increment me</button>

            {/*{*/}
            {/*    users.map((user) =>{*/}
            {/*        return <div>name - {user.name}; status - {user.status.toString()}; age - {user.age.toString()}</div>*/}
            {/*    })*/}
            {/*}*/}
        </div>
    );
}

export default App;

