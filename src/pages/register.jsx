import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Success from "../assets/sounds/success.mp3";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showModal, setShowModal] = useState(false);
  const playClick = () => {
    const audio = new Audio(Success);
    audio.volume = 0.4;
    audio.play();
  };
  const handleRegister = async () => {
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      if (!form.name || !form.email || !form.password) {
        setError("All fields are required");
        setLoading(false);
        return;
      }

      if (form.password.length < 6) {
        setError("Password must be at least 6 characters");
        setLoading(false);
        return;
      }

      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong");
      } else {
        playClick();

        setShowModal(true);
      }
    } catch (err) {
      setError("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-sm sm:max-w-md bg-white/80 backdrop-blur-md shadow-xl rounded-2xl px-6 sm:px-10 py-8 sm:py-10"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-pink-500 text-center mb-6">
          Create your account
        </h2>

        {error && (
          <p className="bg-red-100 text-red-500 p-2 rounded mb-3 text-sm">
            {error}
          </p>
        )}

        {success && (
          <p className="bg-green-100 text-green-600 p-2 rounded mb-3 text-sm">
            {success}
          </p>
        )}

        <div className="flex flex-col gap-4 sm:gap-5">
          <AnimatePresence>
            {showModal && (
              <motion.div
                className="fixed inset-0 flex items-center justify-center bg-pink/100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-6 rounded-xl shadow-xl w-64 text-center"
                >
                  <p className="mb-5 text-gray-600 font-poppins text-sm">
                    Account created successfully
                  </p>

                  <button
                    onClick={() => {
                      setShowModal(false);
                      window.location.href = "/login";
                    }}
                    className="bg-pink-500 text-white px-4 text-sm py-2 rounded-lg hover:bg-pink-600"
                  >
                    OK
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-pink-500">Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-pink-200 
              focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-pink-500">Email</label>
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-pink-200 
              focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-pink-500">Password</label>
            <input
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-pink-200 
              focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
              type="password"
            />
          </div>

          <button
            onClick={handleRegister}
            disabled={loading}
            className="w-full py-2 rounded-lg bg-pink-500 text-white
            hover:bg-pink-600 active:scale-95 transition font-semibold
            disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Sign up"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
