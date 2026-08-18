function BoardingPoints() {
  return (
    <div className="glass-light rounded-2xl p-8">

      <h2 className="font-display text-2xl font-bold mb-6 text-ink">
        Boarding & Dropping Points
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div>

          <h3 className="font-bold mb-3">
            Boarding
          </h3>

          <ul className="space-y-2">
            <li>ISBT Kashmere Gate</li>
            <li>Anand Vihar</li>
            <li>RK Ashram Metro</li>
          </ul>

        </div>

        <div>

          <h3 className="font-bold mb-3">
            Dropping
          </h3>

          <ul className="space-y-2">
            <li>Sindhi Camp</li>
            <li>Jaipur Railway Station</li>
            <li>Narayan Singh Circle</li>
          </ul>

        </div>

      </div>

    </div>
  );
}

export default BoardingPoints;