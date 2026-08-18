// The site's signature motion element: thin light streaks sweeping across
// a dark surface, evoking headlights/taillights on a highway at night.
// Positions/timings are randomized once per mount so streaks don't feel
// mechanically repeated.
function LightStreaks({ count = 7 }) {
  const streaks = Array.from({ length: count }, (_, i) => ({
    id: i,
    top: `${8 + Math.random() * 80}%`,
    duration: `${5 + Math.random() * 6}s`,
    delay: `${Math.random() * 6}s`,
    variant: i % 3 === 0 ? "route" : "",
  }));

  return (
    <div className="light-streaks" aria-hidden="true">
      {streaks.map((s) => (
        <span
          key={s.id}
          className={`light-streak ${s.variant}`}
          style={{
            top: s.top,
            animationDuration: s.duration,
            animationDelay: s.delay,
          }}
        />
      ))}
    </div>
  );
}

export default LightStreaks;
