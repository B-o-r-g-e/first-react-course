// import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


// import Header from "./Components/Header.jsx";
// import Footer from "./Footer.jsx";
// import Food from "./Food.jsx";
// import Card from "./Card.jsx";
// import Student from "./Student.jsx";
// import Button from "./Components/Button.jsx";
// import ModeToggler from "./Components/ModeToggler.jsx";
// import Body from "./Components/Body.jsx";


// import Blog from "./Components/Blog.jsx";
// import Create from "./Components/Create.jsx";
// import BlogDetails from "./Components/BlogDetails.jsx";
// import NotFound from "./Components/NotFound.jsx";

import List from "./Components/List.jsx";

function App() {

    const Fruits = [
        {name: 'apple', calories: 40, id: 1},
        {name: 'Banana', calories: 16, id: 2},
        {name: 'apple', calories: 10, id: 3},
        {name: 'apple', calories: 30, id: 4},
        {name: 'apple', calories: 90, id: 5}
    ]

    const Vegetables = [
        {name: 'apple', calories: 40, id: 6},
        {name: 'Banana', calories: 16, id: 7},
        {name: 'apple', calories: 10, id: 8},
        {name: 'apple', calories: 30, id: 9},
        {name: 'apple', calories: 90, id: 10}
    ]

    return (
        // <Router>
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
                {/*<Blog />*/}
                {/*<div className={'content'}>*/}
                {/*    <Switch>*/}
                {/*        <Route exact path={'/'}>*/}
                {/*            <Blog />*/}
                {/*        </Route>*/}
                {/*        <Route path={'/create'}>*/}
                {/*            <Create />*/}
                {/*        </Route>*/}
                {/*        <Route path={'/blogs/:id'}>*/}
                {/*            <BlogDetails />*/}
                {/*        </Route>*/}
                {/*        <Route path={'*'}>*/}
                {/*            <NotFound />*/}
                {/*        </Route>*/}
                {/*    </Switch>*/}
                {/*</div>*/}
                <List item={Fruits} category={'Fruits'} />
            </>
        // </Router>
    );
}

export default App
