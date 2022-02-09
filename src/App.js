import Users from "./components/Users/Users";
import UsersDetails from "./components/UsersDetails/UsersDetails";
import Posts from "./components/Posts/Posts";
import style from "./App.module.css";

const App = () => {

    return (
        <div>
            <div className={style.wrap}>
                <Users/>
                <UsersDetails/>
            </div>
            <Posts/>
        </div>
    );
};

export default App;