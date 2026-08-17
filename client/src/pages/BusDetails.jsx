import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getBusById } from "../api/busApi";

import BusDetailsCard from "../components/bus/BusDetailsCard";
import Amenities from "../components/bus/Amenities";
import BoardingPoints from "../components/bus/BoardingPoints";
import BusPolicies from "../components/bus/BusPolicies";

function BusDetails() {

  const { id } = useParams();

  const [bus, setBus] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    loadBus();

  }, []);

  const loadBus = async () => {

    try {

      const data = await getBusById(id);

      setBus(data.bus);

    } catch (err) {

      console.log(err);

    } finally {

      setLoading(false);

    }

  };

  if (loading) {

    return (

      <h1 className="text-center mt-20 text-3xl">

        Loading...

      </h1>

    );

  }

  return (

    <div className="bg-gray-100 py-10">

      <div className="max-w-7xl mx-auto px-5 space-y-8">

        <BusDetailsCard bus={bus} />

        <Amenities />

        <BoardingPoints />

        <BusPolicies />

      </div>

    </div>

  );

}

export default BusDetails;