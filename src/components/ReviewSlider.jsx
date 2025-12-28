import { useEffect, useState } from "react";

const ReviewSlider = () => {
  const [reviews, setReviews] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("wcq_reviews")) || [];
    setReviews(stored);
  }, []);

  if (reviews.length === 0) {
    return (
      <p className="text-slate-400 text-center">
        No reviews yet. Be the first one ⭐
      </p>
    );
  }

  const prev = () =>
    setIndex((index - 1 + reviews.length) % reviews.length);

  const next = () =>
    setIndex((index + 1) % reviews.length);

  const { name, text, rating, date } = reviews[index];

  return (
    <div className="relative bg-slate-800 p-8 rounded-2xl
      border border-slate-700 max-w-2xl mx-auto text-center">

      {/* STARS */}
      <div className="flex justify-center mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-xl ${
              star <= rating ? "text-yellow-400" : "text-slate-500"
            }`}
          >
            ★
          </span>
        ))}
      </div>

      {/* REVIEW */}
      <p className="text-slate-200 italic mb-4">
        “{text}”
      </p>

      <h4 className="text-teal-400 font-semibold">
        {name}
      </h4>

      <p className="text-xs text-slate-500">
        {date}
      </p>

      {/* ARROWS */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2
        text-2xl text-slate-400 hover:text-teal-400 transition"
      >
        ⬅️
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2
        text-2xl text-slate-400 hover:text-teal-400 transition"
      >
        ➡️
      </button>
    </div>
  );
};

export default ReviewSlider;
