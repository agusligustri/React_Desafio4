import 'bootstrap/dist/css/bootstrap.min.css'
import CartWidget from './CartWidget'

let background = { background: 'black' }

const NavBar = () => {
  return (
    <>
        <nav style={background} className="navbar navbar-expand-md navbar-dark">
            <div className="container">
                <img src="/images/logoscott.png" className="navbar-logo" alt="scott_logo"/>
                <button type="button" className="navbar-toggler collapsed" data-toggle="collapse" data-target="#main-nav">
                    <span className="menu-icon-bar"></span>
                    <span className="menu-icon-bar"></span>
                    <span className="menu-icon-bar"></span>
                </button>
                <div id="main-nav" className="collapse navbar-collapse">
                    <ul class="navbar-nav ml-auto">
                        <li><a href="index.html" className="nav-item nav-link active">Inicio</a></li>
                        <li><a href="bicicletas.html" className="nav-item nav-link">Bicicletas</a></li>
                        <li><a href="accesorios.html" className="nav-item nav-link">Accesorios</a></li>
                        <li><a href="indumentaria.html" className="nav-item nav-link">Indumentaria</a></li>
                        <li><a href="contacto.html" className="nav-item nav-link">Contacto</a></li>
                        <CartWidget />
                    </ul>
                </div>
            </div>
        </nav>
    </>
  );
}

export default NavBar;