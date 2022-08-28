import Icon from './Icon';

export default function DownloadButton({ volume }) {
  return <a href={`/books/${volume}/le-livre-des-doudous-${volume}.pdf`} className="Button" download>
    <Icon icon='download' />
    Télécharger
  </a>;
}
