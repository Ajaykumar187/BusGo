import { useState } from "react";

import FilterSection from "./FilterSection";
import PriceFilter from "./PriceFilter";
import TimeFilter from "./TimeFilter";
import RatingFilter from "./RatingFilter";
import OperationFilter from "./OperationFilter";

function FilterSidebar({
  filters,
  setFilters,
  operators = [],
}) {

  return (

    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">

      <h2 className="text-2xl font-bold mb-6">

        Filters

      </h2>

      {/* Bus Type */}

      <FilterSection title="Bus Type">

        <label className="block mb-2">

          <input
            type="checkbox"
            checked={filters.ac}
            onChange={(e)=>
              setFilters({
                ...filters,
                ac:e.target.checked
              })
            }
          />

          <span className="ml-2">

            AC

          </span>

        </label>

        <label className="block mb-2">

          <input
            type="checkbox"
            checked={filters.sleeper}
            onChange={(e)=>
              setFilters({
                ...filters,
                sleeper:e.target.checked
              })
            }
          />

          <span className="ml-2">

            Sleeper

          </span>

        </label>

        <label>

          <input
            type="checkbox"
            checked={filters.volvo}
            onChange={(e)=>
              setFilters({
                ...filters,
                volvo:e.target.checked
              })
            }
          />

          <span className="ml-2">

            Volvo

          </span>

        </label>

      </FilterSection>

      <FilterSection title="Maximum Price">

        <PriceFilter
          maxPrice={filters.maxPrice}
          setMaxPrice={(value)=>
            setFilters({
              ...filters,
              maxPrice:value
            })
          }
        />

      </FilterSection>

      <FilterSection title="Departure">

        <TimeFilter
          departure={filters.departure}
          setDeparture={(value)=>
            setFilters({
              ...filters,
              departure:value
            })
          }
        />

      </FilterSection>

      <FilterSection title="Rating">

        <RatingFilter
          rating={filters.rating}
          setRating={(value)=>
            setFilters({
              ...filters,
              rating:value
            })
          }
        />

      </FilterSection>

      <FilterSection title="Operator">

        <OperationFilter
          operators={operators}
          selectedOperators={filters.operators || []}
          setSelectedOperators={(value) =>
            setFilters({
              ...filters,
              operators: value,
            })
          }
        />

      </FilterSection>

    </div>

  );

}

export default FilterSidebar;