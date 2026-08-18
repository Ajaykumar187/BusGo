function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center page-wash">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-ember/20 border-t-ember animate-spin" />
        <p className="font-display text-sm font-semibold text-ink/50 tracking-wide">
          Loading...
        </p>
      </div>
    </div>
  );
}

export default Loader;
