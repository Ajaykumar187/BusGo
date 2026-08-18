function FilterSection({ title, children }) {
  return (
    <div className="border-b border-ink/10 pb-6 mb-6 last:border-0 last:mb-0 last:pb-0">

      <h2 className="font-display text-lg font-bold mb-4 text-ink">
        {title}
      </h2>

      {children}

    </div>
  );
}

export default FilterSection;