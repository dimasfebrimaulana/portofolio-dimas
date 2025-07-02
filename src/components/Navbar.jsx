import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav>
        <div className="wrapper">
            <div className="logo"><a href=''>Dimas Febri</a></div>
            <div className="menu">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#courses">About Me</a></li>
                    <li><a href="#tutors">Tools</a></li>
                    <li><a href="#partners">Partners</a></li>
                    <li><a href="#contact">Resume</a></li>
                    <li><a href="" className="tbl-biru">Sign Up</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar