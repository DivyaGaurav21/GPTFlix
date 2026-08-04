import { useState } from "react";
import { Outlet } from "react-router-dom";
import scanner from "./small/scanner.png"


const PaymentGate = () => {
  const [isPaid, setIsPaid] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFakePayment = async () => {
    setLoading(true);
    // yahan real gateway integrate hoga (Razorpay checkout, etc.)
    setTimeout(() => {
      setIsPaid(true);
      setLoading(false);
    }, 2000); // simulate delay
  };

  if (isPaid) {
    return <Outlet />; 
  }

  return (
    <div
      className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-black text-white"
      style={{
        backgroundImage: "url('/bannerImg.jpg')",
      }}
    >
      <h2 className="text-xl font-semibold bg-black p-2">pay ₹1 for this movie</h2>
      <img
        src={scanner}
        alt="Scan to pay"
        className="h-56 w-56 rounded-lg bg-white p-2"
      />
      <button
        onClick={handleFakePayment}
        disabled={loading}
        className="rounded-md bg-red-600 px-6 py-2 font-semibold hover:bg-red-700 disabled:opacity-50"
      >
        {loading ? "Verifying..." : "i have paid"}
      </button>
    </div>
  );
};

export default PaymentGate;
