import header from '../../assets/img/header.svg'
import './styles.css'

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={header} alt="logo" />
        <h1>DSMeta</h1>
        <p>
          <a href="https://github.com/joaogutierrre">
            https://github.com/joaogutierrre
          </a>
        </p>
      </div>
    </header>
  );
}

export default Header;
