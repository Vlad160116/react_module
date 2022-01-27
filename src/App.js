import './App.css';
import {useEffect, useState} from "react";
import Posts from "./components/posts";
import Comments from "./components/comments";


function App() {


    return (
        <div>
            <Users/>
            <hr/>
            <Posts/>
            <hr/>
            <Comments/>
        </div>
    );
}

export default App;

