// import { useState } from "react";

// const [isloggedin, setisloggedin] = useState(false);
let isloggedin = false
function changestatus(status) {
    isloggedin = status;
}

export { isloggedin, changestatus };
