import React from 'react';
import { useLocation } from 'react-router-dom';


function ErrorPage() {
    let location = useLocation();
  return (
    <div>
        Sorry!!! the page '{location.pathname}' doesn't exist. Try again.
    </div>
  )
}

export default ErrorPage