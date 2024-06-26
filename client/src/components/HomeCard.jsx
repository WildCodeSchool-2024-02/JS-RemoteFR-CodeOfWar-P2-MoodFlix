export default function HomeCard({ title, content }) {
  return (
    <div className="HomeCard">
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
    </div>
  );
}
