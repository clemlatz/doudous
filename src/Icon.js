import book from './icons/book.svg';
import download from './icons/download.svg';

export default function Icon({ icon }) {
  let iconImage = null;

  if (icon === 'book') {
    iconImage = book;
  }

  if (icon === 'download') {
    iconImage = download;
  }

  return <img src={iconImage} alt="" role="presentation" className="Button-icon"/>;
}