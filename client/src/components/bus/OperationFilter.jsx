function OperationFilter({ operators, selectedOperators, setSelectedOperators }) {
  const toggleOperator = (operator) => {
    if (selectedOperators.includes(operator)) {
      setSelectedOperators(
        selectedOperators.filter((op) => op !== operator)
      );
    } else {
      setSelectedOperators([...selectedOperators, operator]);
    }
  };

  if (!operators || operators.length === 0) {
    return (
      <p className="text-sm text-gray-400">
        No operators to filter
      </p>
    );
  }

  return (
    <div className="space-y-2 max-h-48 overflow-y-auto">
      {operators.map((operator) => (
        <label key={operator} className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={selectedOperators.includes(operator)}
            onChange={() => toggleOperator(operator)}
          />
          <span>{operator}</span>
        </label>
      ))}
    </div>
  );
}

export default OperationFilter;
