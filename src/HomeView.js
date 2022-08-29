import {Link} from "react-router-dom";

import Page from "./Page";
import ReadButton from "./ReadButton";
import DownloadButton from "./DownloadButton";

export default function HomeView() {
  const volumes = [1, 2, 3];

  return <div className="HomeView">
    <h1 className="HomeView-title">Le Livre<br />des doudous</h1>

    <div className="HomeView-presentation">
      <p>
        est un livre pour bébé<br />
        d'un nouveau genre<br />
      </p>
      <p>
        une fable humaniste et bienveillante
      </p>
      <p>
        dans lequel une galerie<br />
        de personnage mignons<br />
        et hauts en couleurs
      </p>
      <p>
        luttent pour leur survie<br />
        et s'affrontent jusqu'à la mort
      </p>
      <p>
        dans un univers post-apocalyptique<br />
        noir et ulta-violent
      </p>
    </div>

    <div className="HomeView-volumes">
      {volumes.map(volume => (
        <div>
          <Link key={volume} to={`/livre/${volume}`}>
            <Page bookVolume={volume} num={1} />
          </Link>
          <div className="button-row">
            <ReadButton volume={volume} />
            <DownloadButton volume={volume} />
          </div>
        </div>
      ))}
    </div>
  </div>;
}
