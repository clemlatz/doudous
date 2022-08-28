import {Link} from "react-router-dom";

import Page from "./Page";
import ReadButton from "./ReadButton";
import DownloadButton from "./DownloadButton";

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
            <DownloadButton volume={volume} />
          </div>
        </div>
      ))}
    </div>
  </div>;
}
