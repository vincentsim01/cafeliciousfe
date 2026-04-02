function StarRating({ rating }) {

  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <span className="text-xl md:text-4xl text-yellow-500">
      {[...Array(fullStars)].map((_, i) => (
        <span key={"full"+i}><i class="fa-solid fa-star"></i></span>
      ))}

      {hasHalf && <span><i class="fa-solid fa-star-half"></i></span>}

      {[...Array(emptyStars)].map((_, i) => (
        <span key={"empty"+i}><i class="fa-regular fa-star"></i></span>
      ))}
    </span>
  );
}

export default StarRating;