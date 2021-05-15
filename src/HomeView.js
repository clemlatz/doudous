export default function HomeView() {
  return <div className="HomeView">
    <h1 className="HomeView-title">Le Livre des doudous</h1>
    <div className="HomeView-volumes">
      {volumes.map(volume => (
        <Link key={volume} to={`/livre/${volume}`}>
          <Page bookVolume={volume} num={1} />
        </Link>
      ))}
    </div>
  </div>;
}
