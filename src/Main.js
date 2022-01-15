import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Stuff from "./components/Stuff/Stuff";
import HookTest from "./components/HookTest/HookTest";
import Register from "./components/Register/Register";
import NewYearCounter from "./components/NewYearCounter/NewYearCounter";

import {UserContext} from "./context/UserContext";

const Main = () => {

    const [user, setUser] = useState("");

    return  (
        <Router>
            <div>
                <h1>Single Page Application</h1>
                <ul className="header">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/stuff">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/hook">Hook test</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/newyear">New year!</Link></li>
                </ul>

                <div className="content">
                    
                <UserContext.Provider value={{user, setUser}}>
                        <Routes>
                                <Route exact path="/" element={<Home />} />
                                <Route path="/stuff" element={<Stuff />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/hook" element={<HookTest />} />
                                <Route path="/register" element={<Register />} />
                                <Route path="/newyear" element={<NewYearCounter />} />
                        </Routes>
                </UserContext.Provider>
                </div>
            </div>
        </Router>
    );
}

export default Main;