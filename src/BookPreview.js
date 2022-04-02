export function BookPreview() {
  return <div className="BookPreview">
    <h2>LE LIVRE DES DOUDOUS 3</h2>
    <p>
      Deux nouvelles pages<br />
      chaque soir à 18h<br />
      à partir du 28 avril<br />
      sur :
    </p>
    <ul className="BookPreview-link-list">
      <li>
        <a href="https://www.facebook.com/doudouverse" target="_blank" rel="noreferrer">
          Facebook
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/explore/tags/lesdoudous3/" target="_blank" rel="noreferrer">
          Instagram
        </a>
      </li>
      <li>
        <a href="https://twitter.com/ClementBourgoin" target="_blank" rel="noreferrer">
          Twitter
        </a>
      </li>
    </ul>

    <p>ou</p>

    <a href="https://app.mailjet.com/statics/widget/iframe/qWS/MHM" target="_blank" rel="noreferrer">
      dans votre boîte mail
    </a>
  </div>;
}
