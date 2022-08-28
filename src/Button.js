import { Link } from 'react-router-dom';

export default function Button({ to, children }) {
  return <Link to={to} className="Button">
    {children}
  </Link>;
}
