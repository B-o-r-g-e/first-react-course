import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


// import Header from "./Header.jsx";
// import Footer from "./Footer.jsx";
// import Food from "./Food.jsx";
// import Card from "./Card.jsx";
// import Student from "./Student.jsx";
// import Button from "./Components/Button.jsx";
// import ModeToggler from "./Components/ModeToggler.jsx";
// import Body from "./Components/Body.jsx";


import Blog from "./Components/Blog.jsx";

function App() {
    return (
        <Router>
            <>
                {/*<Header/>*/}
                {/*<Food/>*/}
                {/*<Food/>*/}
                {/*<Footer/>*/}
                {/*<Card/>*/}
                {/*<Card/>*/}
                {/*<Button />*/}
                {/*<Student name = 'Borge' age = {30} isStudent = {true}/>*/}
                {/*<Student name = 'Patrick' age = {40} isStudent = {false}/>*/}
                {/*<Student name = 'Edward' age = {50} isStudent = {false}/>*/}
                {/*<Student name = 'Sandy' age = {27} isStudent = {true}/>*/}
                {/*<Student/>*/}
                {/*<ModeToggler />*/}
                {/*<Body />*/}
                <Blog />
            </>
        </Router>
    );
}

export default App
