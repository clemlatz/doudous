import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function ReadButton({ volume }) {
    return <Link to={`/livre/${volume}`} className="Button">
      <Icon icon={'book'} /> Lire
    </Link>;
}
