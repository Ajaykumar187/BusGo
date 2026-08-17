import PassengerCard from "./PassengerCard";

function PassengerForm({
  seats,
  passengers,
  handleChange,
}) {
  return (
    <>
      {seats.map((seat, index) => (
        <PassengerCard
          key={seat}
          index={index}
          seat={seat}
          passenger={passengers[index]}
          handleChange={handleChange}
        />
      ))}
    </>
  );
}

export default PassengerForm;