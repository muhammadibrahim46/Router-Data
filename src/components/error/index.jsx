// import ProgressBar from 'react-bootstrap/ProgressBar';
import React from "react";
import { Link } from "react-router-dom";
function Error() {
  return (
    
    <> 
    <h1>this is the 404 error</h1>
   <p>this page  is not found </p>
   <Link to="/">
   go back home 
   </Link>
    </>
    
  );
}

export default Error;