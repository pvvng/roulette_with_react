
export default function Navbar(){
    return(
        <nav className='navbar mb-3 p-3' style={{width:'100%', background:'#eee'}}>
            {/* Logo */}
            <span className="navbar-brand mx-lg-5">
                <img src={process.env.PUBLIC_URL + '/MobilioLogo.png' } alt="LOGO" height="48"/>
            </span>


        </nav>
    )
}