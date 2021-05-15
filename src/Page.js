export default function Page({ bookVolume, num }) {
  return <img
    src={`/books/${bookVolume}/page-${num}.jpg`}
    alt={`Page ${num}`}
    className="Page"
  />;
}
