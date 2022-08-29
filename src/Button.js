export default function Button({ children, color = 'blue' }) {
  return <span className={`Button Button-${color}`}>{children}</span>;
}
