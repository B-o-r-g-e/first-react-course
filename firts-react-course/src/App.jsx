// import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


// import Header from "./Components/Header.jsx";
// import Footer from "./Footer.jsx";
// import Food from "./Food.jsx";
// import Card from "./Card.jsx";
// import Student from "./Student.jsx";
// import Button from "./Components/Button.jsx";
// import ModeToggle from "./Components/ModeToggle.jsx";
// import ColorPicker from "./Components/ColorPicker.jsx";
// import Body from "./Components/Body.jsx";


// import Blog from "./Components/Blog.jsx";
// import Create from "./Components/Create.jsx";
// import BlogDetails from "./Components/BlogDetails.jsx";
// import NotFound from "./Components/NotFound.jsx";

// import List from "./Components/List.jsx";

import FavoriteCar from "./Components/FavoriteCar.jsx";
import UpdateArray from "./Components/UpdateArray.jsx";
import FavoriteCarAnother from "./Components/FavCarAnother.jsx";

function App() {

    // const Fruits = [
    //     {name: 'apple', calories: 40, id: 1},
    //     {name: 'Banana', calories: 16, id: 2},
    //     {name: 'apple', calories: 10, id: 3},
    //     {name: 'apple', calories: 30, id: 4},
    //     {name: 'apple', calories: 90, id: 5}
    // ]
    //
    // const Vegetables = [
    //     {name: 'Bitter Leaf', calories: 40, id: 6},
    //     {name: 'Okra', calories: 16, id: 7},
    //     {name: 'Water leaf', calories: 10, id: 8},
    //     {name: 'Any Leaf', calories: 30, id: 9},
    //     {name: 'Leaf', calories: 90, id: 10}
    // ]

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
                {/*<ModeToggle />*/}
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
                {/*{*/}
                {/*    Fruits.length > 0*/}
                {/*        ? <List item={Fruits} category={'Fruits'} />*/}
                {/*        : null*/}
                {/*}*/}

                {/*{Fruits.length > 0 && <List item={Fruits} category={'Fruits'} />}*/}
                {/*<List item={Vegetables} category={'Vegetables'} />*/}
                {/*<ColorPicker />*/}
                <FavoriteCar />
                <UpdateArray />
                <FavoriteCarAnother />
            </>
        // </Router>
    );
}

export default App
