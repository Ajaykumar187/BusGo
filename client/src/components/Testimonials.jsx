import { FaStar } from "react-icons/fa";

function Testimonials() {

  const reviews = [
    {
      name: "Rahul Sharma",
      city: "Delhi",
      review:
        "The booking process was smooth and the bus was clean and comfortable.",
    },
    {
      name: "Priya Singh",
      city: "Lucknow",
      review:
        "Affordable fares with excellent customer support. Highly recommended!",
    },
    {
      name: "Amit Kumar",
      city: "Patna",
      review:
        "Easy seat selection and instant ticket confirmation. Great experience.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-20 px-6">

      <h2 className="text-4xl font-bold text-center mb-12">
        What Our Customers Say
      </h2>

      <div className="grid lg:grid-cols-3 gap-8">

        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8"
          >

            <div className="flex gap-1 text-yellow-500 mb-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="text-gray-600 italic">
              "{review.review}"
            </p>

            <h3 className="font-bold text-xl mt-6">
              {review.name}
            </h3>

            <span className="text-gray-500">
              {review.city}
            </span>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Testimonials;