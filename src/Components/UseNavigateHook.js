import React from "react";

import {useNavigate} from "react-router-dom"

function UseNavigateHook()
{ 
    const navigate=useNavigate();   
    const gotoContacts=()=>{
             navigate("/Contacts")
    }
    return(
        <div>
            <h1>Use of UseNavigateHook</h1>
            <button
             onClick={gotoContacts}
            >Go to Contacts</button>
        </div>
    )
}

export default UseNavigateHook;