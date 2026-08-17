function FilterSection({ title, children }) {
  return (
    <div className="border-b pb-6 mb-6">

      <h2 className="text-lg font-bold mb-4">
        {title}
      </h2>

      {children}

    </div>
  );
}

export default FilterSection;