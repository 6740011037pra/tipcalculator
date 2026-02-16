"use client";
import { ChangeEvent, useState } from "react";

/* PROPS */

interface BillFormProps {
  bill: string;
  setBill: (value: string) => void;
}

interface HandleTipProps {
  tipSelected: boolean;
  setTipSelected: (value: boolean) => void;
}

interface ShowSummaryProps {
  tipTotal: number;
  billTotal: number;
}

/* MAIN */

export default function Home() {
  const [bill, setBill] = useState("");
  const [tipSelected, setTipSelected] = useState(false);
  const [tipTotal, setTipTotal] = useState(0);
  const [billTotal, setBillTotal] = useState(0);

  const calculate = () => {
    if (!tipSelected || bill === "") return;

    const amount = Number(bill);
    const tip = amount * 0.05;

    setTipTotal(tip);
    setBillTotal(amount + tip);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
      <div className="bg-white rounded-[32px] shadow-2xl w-full max-w-xl p-10 space-y-8">

        <h1 className="text-3xl font-bold text-center">
          Tip Calculator
        </h1>

        <BillForm bill={bill} setBill={setBill} />

        <HandleTip
          tipSelected={tipSelected}
          setTipSelected={setTipSelected}
        />

        <ShowSummary
          tipTotal={tipTotal}
          billTotal={billTotal}
        />

        <button
          onClick={calculate}
          className="w-full bg-slate-900 text-white py-4 rounded-2xl text-xl hover:bg-slate-800 transition"
        >
          Calculate
        </button>

      </div>
    </main>
  );
}

/* COMPONENTS */

const BillForm = ({ bill, setBill }: BillFormProps) => {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBill(event.target.value);
  };

  return (
    <div className="space-y-2">
      <label className="text-slate-600">Bill Amount</label>

      <input
        type="number"
        value={bill}
        onChange={handleChange}
        placeholder="Enter bill"
        className="w-full border rounded-2xl px-5 py-4 text-2xl
                   focus:outline-none focus:ring-2 focus:ring-purple-300"
      />
    </div>
  );
};

const HandleTip = ({ tipSelected, setTipSelected }: HandleTipProps) => {
  return (
    <div className="space-y-2">
      <p className="text-slate-600">Select Tip</p>

      <button
        onClick={() => setTipSelected(!tipSelected)}
        className={`px-8 py-4 rounded-2xl text-xl font-medium transition-all
          ${
            tipSelected
              ? "bg-purple-500 text-white shadow-lg scale-105"
              : "bg-purple-100 hover:bg-purple-200"
          }`}
      >
        5%
      </button>
    </div>
  );
};

const ShowSummary = ({ tipTotal, billTotal }: ShowSummaryProps) => {
  return (
    <div className="bg-slate-50 rounded-2xl p-6 grid grid-cols-2 gap-6 text-center">

      <div>
        <p className="text-slate-500">Tip Total</p>
        <p className="text-3xl font-semibold">{tipTotal}</p>
      </div>

      <div>
        <p className="text-slate-500">Bill Total</p>
        <p className="text-4xl font-bold">{billTotal}</p>
      </div>

    </div>
  );
};
