import Icon from './Icon';
import Button from "./Button";

export default function DownloadButton({ volume }) {
  return <Button>
      <a href={`/books/${volume}/le-livre-des-doudous-${volume}.pdf`} download>
        <Icon icon='download' />
        Télécharger
      </a>
    </Button>;
}
