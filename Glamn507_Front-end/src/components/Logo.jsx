import logoImg from '../assets/img/Logo_Default.png';

function Logo() {
  return (
    <div className="logo">
      <a href="/">
        <img src={logoImg} alt="Logo" style={{ height: '32px' }} />
      </a>
    </div>
  );
}

export default Logo;
