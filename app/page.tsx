"use client";
import { useState } from "react";

export default function Home() {
  const [bill, setBill] = useState("");
  const [tipSelected, setTipSelected] = useState(false);
  const [tipTotal, setTipTotal] = useState(0);
  const [billTotal, setBillTotal] = useState(0);

  const tipPercent = 0.05;

const calculate = () => {
  if (!tipSelected || bill === "") return;

  const amount = Number(bill);
  const tip = amount * 0.05;

  setTipTotal(tip);
  setBillTotal(amount + tip);
};


  return (
    <main className="min-h-screen flex items-center justify-center p-6
      bg-gradient-to-br from-sky-100 via-purple-100 to-pink-100">

      {/* COLORED CARD */}
      <div className="bg-gradient-to-br from-white to-slate-100 
                      border border-white/60 rounded-3xl shadow-2xl 
                      max-w-2xl w-full p-10 space-y-10">

        <h1 className="text-3xl font-semibold text-center text-slate-800">
          Tip Calculator
        </h1>

        {/* BILL */}
        <div className="space-y-3">
          <label className="text-slate-600">Bill Amount</label>
          <input
            type="number"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            placeholder="Enter bill amount"
            className="w-full bg-white rounded-xl px-5 py-4 text-2xl border shadow-sm
             focus:ring-2 focus:ring-purple-300 outline-none"
          />

        </div>

        {/* TIP */}
        <div className="space-y-3">
          <p className="text-slate-600">Select Tip</p>

          <button
            onClick={() => setTipSelected(!tipSelected)}
            className={`px-8 py-4 rounded-xl text-xl font-medium transition-all
              ${
                tipSelected
                  ? "bg-purple-400 text-white shadow-lg scale-105"
                  : "bg-purple-100 hover:bg-purple-200"
              }`}
          >
            5%
          </button>
        </div>

        {/* RESULTS */}
        <div className="grid grid-cols-2 gap-6 bg-white/70 rounded-2xl p-6">

          <div className="text-center space-y-2">
            <p className="text-slate-500">Tip Total</p>
            <p className="text-3xl font-semibold">{tipTotal}</p>
          </div>

          <div className="text-center space-y-2">
            <p className="text-slate-500">Bill Total</p>
            <p className="text-4xl font-bold">{billTotal}</p>
          </div>

        </div>

        {/* BUTTON */}
        <button
          onClick={calculate}
          className="w-full bg-slate-800 text-white py-4 rounded-2xl 
                     text-xl hover:bg-slate-700 transition"
        >
          Calculate
        </button>

      </div>
    </main>
  );
}
