import {Link} from "react-router-dom";

import Page from "./Page";
import Button from "./Button";
import ReadButton from "./ReadButton";

export default function HomeView() {
  const volumes = [1, 2, 3];

  return <div className="HomeView">
    <h1 className="HomeView-title">Le Livre des doudous</h1>
    <div className="HomeView-volumes">
      {volumes.map(volume => (
        <div>
          <Link key={volume} to={`/livre/${volume}`}>
            <Page bookVolume={volume} num={1} />
          </Link>
          <div className="button-row">
            <ReadButton volume={volume} />
            <Button to={`/books/${volume}/le-livre-des-doudous-${volume}.pdf`} icon="download">
              Télécharger
            </Button>
          </div>
        </div>
      ))}
    </div>
  </div>;
}
