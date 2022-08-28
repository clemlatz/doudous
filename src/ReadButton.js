import { Link } from 'react-router-dom';
import Icon from './Icon';
import Button from "./Button";

export default function ReadButton({ volume }) {
    return <Button>
      <Link to={`/livre/${volume}`}>
        <Icon icon={'book'} /> Lire
      </Link>
    </Button>;
}
