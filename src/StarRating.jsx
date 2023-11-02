export default function StarRating({ rating, count }) {
  const stars = [];
  const num = Math.round(rating);
  for (let i = 0; i < num; i++) {
    stars.push(<span key={`star-${i}`} className="fa fa-star checked"></span>);
  }
  for (let i = 0; i < 5 - num; i++) {
    stars.push(<span key={`star-empty-${i}`} className="fa fa-star"></span>);
  }

  return (
    <div className="rating">
      {stars} {count}
    </div>
  );
}
