import './nav.css'

function Nav(){
    return(
        <>
        <nav>
        <a href="/"><h1>vpm</h1></a>
        <ul className='list-ul'>
            <a href="/"><li>Home</li></a>
            <a href="Discover"><li>Discover</li></a>
            <a href="About"><li>About</li></a>
        </ul>
        <h1>💿</h1>
        </nav>
        </>
    )
}

export  default Nav