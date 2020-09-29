import React from 'react'
import {Link} from 'react-router-dom'
function NavLink(props){
    return(
        <div className="text-white-t inline-block">   
            <Link
                to={`${props.path}`}>
                {props.text}
            </Link>
        </div>
    );
}

export default NavLink;