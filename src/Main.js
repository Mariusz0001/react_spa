import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Stuff from "./components/Stuff/Stuff";
import HookTest from "./components/HookTest/HookTest";
import Register from "./components/Register/Register";
import NewYearCounter from "./components/NewYearCounter/NewYearCounter";

import { UserContext } from "./context/UserContext";

const Main = () => {
    const [user, setUser] = useState("");
    const [expanded, setExpanded] = useState(false);

    const show = expanded ? 'show navbar-expanded bg-light' : '';

    return (
        <Router>
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" onClick={() => setExpanded(!expanded)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={"collapse navbar-collapse " + show} id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="../" className='nav-link'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="../stuff" className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/hook" className="nav-link">Hook test</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/register" className="nav-link">Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/newyear" className="nav-link">New year!</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav >
                <div>
                    <UserContext.Provider value={{ user, setUser }}>
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
            </>
        </Router >
    );
}

export default Main;