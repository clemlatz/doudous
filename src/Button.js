import { Link } from 'react-router-dom';
import book from './icons/book.svg';
import download from './icons/download.svg';

export default function Button({to, icon, children}) {
  let iconImage = null;

  if (icon === 'book') {
    iconImage = <img src={book} alt="" role="presentation" class="Button-icon" />;
    return <Link to={to} className="Button">
      {iconImage}
      {children}
    </Link>;
  }

  if (icon === 'download') {
    iconImage = <img src={download} alt="" role="presentation" class="Button-icon" />;
    return <a href={to} className="Button" download>
      {iconImage}
      {children}
    </a>;
  }

  return <Link to={to} className="Button">
    {children}
  </Link>;
}
