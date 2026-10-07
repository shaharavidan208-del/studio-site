export default function ServiceCard({ number, type, title, text, pill }) {
  return (
    <div className="heroServiceCard">
      <span className="heroServiceIndex">
        {type} / {number}
      </span>

      <div className="heroServiceContent">
        <h3>{title}</h3>
        <p>{text}</p>
        <div className="heroServicePill">{pill}</div>
      </div>
    </div>
  );
}