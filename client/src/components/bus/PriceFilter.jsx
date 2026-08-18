function PriceFilter({
  maxPrice,
  setMaxPrice,
}) {
  return (
    <div>

      <input
        type="range"
        min="200"
        max="10000"
        step="100"
        value={maxPrice}
        onChange={(e) =>
          setMaxPrice(Number(e.target.value))
        }
        className="w-full accent-ember"
      />

      <div className="flex justify-between mt-2 text-ink/60">

        <span>₹200</span>

        <span className="font-semibold text-ember">

          ₹{maxPrice}

        </span>

      </div>

    </div>
  );
}

export default PriceFilter;