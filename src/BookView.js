import { useParams } from "react-router-dom";

import Book from "./Book";

export default function BookView() {
  let {volume} = useParams();
  return <Book volume={volume}/>;
}
