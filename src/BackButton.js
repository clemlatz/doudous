import { Link } from 'react-router-dom';
import Button from "./Button";

export default function BackButton() {
  return <Button color="orange"><Link to="/">Retour</Link></Button>;
}
