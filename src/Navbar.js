import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from './img/logo.jpg';
import './style.css'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <a href="" className="navbar-brand"><img src={logo} className="logo" alt="" /> Know Your Weather</a>
                    <button  className="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navid" aria-controls="navbarSupportedContent">
                        <span className="navbar-toggler-icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAb0lEQVRIS+2VyQ3AIBADTWeURjqDyoL2sR+OKA8rIGIX4JFGhg1YlLCIC4E/My/VrjoBuIner7ZrppoJNWbH2Q5MtDyu0qrdSySvumjVs3GZambyW9VM6LBLz8m1/O+vtrPITNencTH1PnZJ9fmqKyfUDB8mdaD4AAAAAElFTkSuQmCC" /></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navid">
                        <ul className="nav navbar-nav text-center ml-auto">
                            <li className="nav-item">
                                <a href="#" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="https://openweathermap.org/" className="nav-link">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;