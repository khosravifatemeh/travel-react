import React from 'react';
import Colors from '../../colors'


const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:Colors.iranRouteBlueColor1}} >
                {/* <a class="navbar-brand" href="#">Navbar</a> */}
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Tours <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Things to Do</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Tickets</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Hotels</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Visa</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Insurance</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;