import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


import Header from "./Components/Header.jsx";
// import Footer from "./Footer.jsx";
// import Food from "./Food.jsx";
// import Card from "./Card.jsx";
// import Student from "./Student.jsx";
// import Button from "./Components/Button.jsx";
// import ModeToggler from "./Components/ModeToggler.jsx";
// import Body from "./Components/Body.jsx";


import Blog from "./Components/Blog.jsx";
import Create from "./Components/Create.jsx";
import BlogDetails from "./Components/BlogDetails.jsx";
import NotFound from "./Components/NotFound.jsx";

function App() {
    return (
        <Router>
            <>
                <Header/>
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
                <div className={'content'}>
                    <Switch>
                        <Route exact path={'/'}>
                            <Blog />
                        </Route>
                        <Route path={'/create'}>
                            <Create />
                        </Route>
                        <Route path={'/blogs/:id'}>
                            <BlogDetails />
                        </Route>
                        <Route path={'*'}>
                            <NotFound />
                        </Route>
                    </Switch>
                </div>
            </>
        </Router>
    );
}

export default App
