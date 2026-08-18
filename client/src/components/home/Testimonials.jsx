import { FaStar } from "react-icons/fa";

function Testimonials() {

  const reviews = [

    {
      name: "Rahul Sharma",
      city: "Delhi",
      review:
        "Excellent booking experience. The bus arrived on time and the seats were comfortable.",
    },

    {
      name: "Priya Singh",
      city: "Lucknow",
      review:
        "Very easy booking process. Customer support was really helpful.",
    },

    {
      name: "Amit Kumar",
      city: "Patna",
      review:
        "Affordable fares and smooth payment. Highly recommended.",
    },

  ];

  return (

    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <h2 className="font-display text-4xl font-bold text-ink">
            What Our Customers Say
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review, index) => (

            <div
              key={index}
              className="glass-light rounded-2xl p-8"
            >

              <div className="flex gap-1 text-amber-400 mb-4">

                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}

              </div>

              <p className="text-ink/60 italic">

                "{review.review}"

              </p>

              <div className="mt-6">

                <h3 className="font-display font-bold text-ink">
                  {review.name}
                </h3>

                <p className="text-ink/40">
                  {review.city}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default Testimonials;