import SearchSection from "../components/home/SearchSection";

// A dedicated, standalone search entry point (distinct from the Home page's
// hero section) that just shows the from/to/date search form.
function Search() {
  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">

        <h1 className="text-3xl font-bold text-center mb-10">
          Search Buses
        </h1>

        <SearchSection />

      </div>
    </div>
  );
}

export default Search;
