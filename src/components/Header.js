import './Header.css';
import littleRedImage from '../images/Little_Red_Riding_Hood.jpg';

function Header() {
  return (
    <header className="story-header">
      <img
        src={littleRedImage}
        alt="Little Red Riding Hood illustration"
        className="header-image"
      />
      <h1 className="story-title">Little Red Riding Hood</h1>
      <p className="story-subtitle">A Classic Fairy Tale</p>
    </header>
  );
}

export default Header;
