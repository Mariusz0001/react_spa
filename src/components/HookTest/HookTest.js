import React, { useEffect, useState, useRef } from "react";
import Hookref from "./HookRef";

function HookTest() {
    const [email, setEmail] = useState("bob@example.com");
    const [firstName, setFirstName] = useState("Bob");

    return(
        <div>
            <Hookref/>

            <h1>{email}</h1>
            <hr></hr>
            <h1>{firstName}</h1>

            <br></br>

            <button onClick={() => setEmail("alice@example.com")}>Change e-mail</button>
            <button onClick={() => setFirstName("alice")}>Change FirstName</button>

            <button onClick={() => setEmail(prevEmail => prevEmail + " =====> tak jest!")}>prev Email tak jest</button>
        </div>
    );
}

export default HookTest;