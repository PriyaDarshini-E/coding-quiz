import { useState } from "react";

const AddReview = () => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const currentUser = JSON.parse(
    localStorage.getItem("wcq_currentUser")
  );

  const handleSubmit = () => {
    if (!review.trim() || rating === 0) {
      alert("Please give a rating and write a review");
      return;
    }

    const reviews =
      JSON.parse(localStorage.getItem("wcq_reviews")) || [];

    const newReview = {
      name: currentUser?.name || "Anonymous",
      text: review,
      rating,
      date: new Date().toLocaleDateString(),
    };

    reviews.push(newReview);
    localStorage.setItem("wcq_reviews", JSON.stringify(reviews));

    alert("Thanks for your review ⭐");
    setReview("");
    setRating(0);
  };

  return (
    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 max-w-xl mx-auto">
      <h3 className="text-lg font-semibold text-teal-400 mb-3 text-center">
        Rate Your Experience
      </h3>

      {/* STAR RATING */}
      <div className="flex justify-center gap-2 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            className={`text-3xl cursor-pointer transition
              ${star <= rating ? "text-yellow-400" : "text-slate-500"}
            `}
          >
            ★
          </span>
        ))}
      </div>

      {/* REVIEW TEXT */}
      <textarea
        rows="4"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write your honest review..."
        className="w-full p-3 rounded-lg bg-slate-900 text-slate-200
        border border-slate-600 focus:outline-none focus:border-teal-400"
      />

      <button
        onClick={handleSubmit}
        className="mt-4 w-full py-2 rounded-lg
        bg-teal-500 text-slate-900 font-semibold
        hover:bg-teal-400 transition"
      >
        Submit Review
      </button>
    </div>
  );
};

export default AddReview;
