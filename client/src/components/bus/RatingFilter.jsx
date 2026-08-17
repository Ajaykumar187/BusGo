function RatingFilter({
  rating,
  setRating,
}) {
  const ratings = [5, 4, 3];

  return (
    <div className="space-y-3">

      {ratings.map((item) => (

        <label
          key={item}
          className="flex items-center gap-3"
        >

          <input
            type="radio"
            name="rating"
            checked={rating === item}
            onChange={() =>
              setRating(item)
            }
          />

          {item} ★ & Above

        </label>

      ))}

    </div>
  );
}

export default RatingFilter;