import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function Button({to, icon, children}) {
  if (icon === 'book') {
    return <Link to={to} className="Button">
      {<Icon icon={icon} />}
      {children}
    </Link>;
  }

  if (icon === 'download') {
    return <a href={to} className="Button" download>
      {<Icon icon={icon} />}
      {children}
    </a>;
  }

  return <Link to={to} className="Button">
    {children}
  </Link>;
}
