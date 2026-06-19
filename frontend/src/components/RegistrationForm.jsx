import { useState } from "react";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!name || !email || !phone) {
      setError("All fields are required");
      return;
    }

    if (phone.length !== 10) {
      setError("Phone number must be 10 digits");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "https://workshop-backend-fato.onrender.com/api/enquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setSuccess(data.message);

        setName("");
        setEmail("");
        setPhone("");
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="register"
      className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            🚀 Enrollment Open
          </span>

          <h2 className="text-5xl font-bold mt-5 mb-4">
            Register Now
          </h2>

          <p className="text-gray-600 text-lg">
            Limited seats available. Reserve your spot today and begin your AI &
            Robotics journey.
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl border border-gray-100 rounded-3xl p-8 md:p-10 space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition"
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-xl font-medium">
              ❌ {error}
            </p>
          )}

          {/* Success Message */}
          {success && (
            <p className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-xl font-medium">
              ✅ {success}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 hover:scale-[1.02] disabled:opacity-70"
          >
            {loading ? "⏳ Submitting..." : "🚀 Reserve My Seat"}
          </button>

          {/* Trust Indicators */}
          <div className="flex flex-col md:flex-row justify-center gap-6 text-sm text-gray-500 pt-4 text-center">
            <span>🎓 Certificate Included</span>
            <span>👨‍🏫 Expert Mentors</span>
            <span>🤖 Hands-on Projects</span>
          </div>
        </form>
      </div>
    </section>
  );
}

export default RegistrationForm;