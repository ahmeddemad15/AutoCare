import React, { useState } from "react";

const Financial_Log = () => {
  const [isAddExpenceOpen, setIsAddexpenceOpen] = useState(false);
  const Addexpence = () => {
    setIsAddexpenceOpen(true);
  };

  const expenses = [
    {
      id: 201,
      date: "2026-10-15",
      car: "BMW 4M",
      type: "Fuel",
      desc: "Super 95 Gasoline",
      amount: 650,
    },
    {
      id: 202,
      date: "2026-10-05",
      car: "Toyota Fortuner",
      type: "Mechanical",
      desc: "Front brake pads replacement",
      amount: 2800,
    },
    {
      id: 203,
      date: "2026-09-28",
      car: "BMW 4M",
      type: "Detailing & Care",
      desc: "Interior & exterior nano wash",
      amount: 350,
    },
  ];

  const categoryBreakdown = [
    { label: "Mechanical", amount: 2800, percentage: 74 },
    { label: "Fuel", amount: 650, percentage: 17 },
    { label: "Detailing & Care", amount: 350, percentage: 9 },
  ];

  const totalAmount = expenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F0F9FF] py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-[#F0F9FF]">
              Immutable Expense Ledger
            </h2>
            <span className="text-sm font-semibold text-[#94A3B8]">
              Total:{" "}
              <strong className="text-[#22D3EE]">
                {totalAmount.toLocaleString()} EGP
              </strong>
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <select
              defaultValue=""
              className="bg-[#142037] text-[#F0F9FF] border border-[#243c63] rounded-xl px-4 py-2.5 text-sm font-semibold focus:outline-none focus:border-[#38BDF8]"
            >
              <option value="">All Vehicles</option>
              <option value="BMW 4M">BMW 4M</option>
              <option value="Toyota Fortuner">Toyota Fortuner</option>
            </select>

            <button
              type="button"
              onClick={Addexpence}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#38BDF8] to-[#1D4ED8] text-white font-extrabold px-4 py-2.5 rounded-xl text-sm shadow-lg shadow-blue-700/30 hover:brightness-110 transition-all cursor-pointer"
            >
              <span>➕</span>
              <span>Add Expense</span>
            </button>
          </div>
        </div>

        {isAddExpenceOpen && (
          <div className="fixed inset-0 z-50 bg-[#080d1a]/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#142037] border border-[#243c63] text-[#F0F9FF] rounded-2xl max-w-lg w-full p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-black">
                  ➕ Add Maintenance Expense
                </h3>
                <button
                  type="button"
                  onClick={() => setIsAddexpenceOpen(false)}
                  className="text-[#94A3B8] hover:text-white text-lg font-bold cursor-pointer"
                >
                  ✕
                </button>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsAddexpenceOpen(false);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-bold text-[#94A3B8] mb-1.5">
                    Vehicle
                  </label>
                  <select className="w-full bg-[#0F172A] border border-[#243c63] focus:outline-none focus:border-[#38BDF8] text-[#F0F9FF] rounded-xl px-3.5 py-2.5 text-sm font-semibold">
                    <option>BMW 4M</option>
                    <option>Toyota Fortuner</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#94A3B8] mb-1.5">
                      Category
                    </label>
                    <select className="w-full bg-[#0F172A] border border-[#243c63] focus:outline-none focus:border-[#38BDF8] text-[#F0F9FF] rounded-xl px-3.5 py-2.5 text-sm font-semibold">
                      <option>Fuel</option>
                      <option>Mechanical</option>
                      <option>Detailing &amp; Care</option>
                      <option>Insurance &amp; Fees</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#94A3B8] mb-1.5">
                      Amount (EGP)
                    </label>
                    <input
                      type="number"
                      min="1"
                      placeholder="500"
                      required
                      className="w-full bg-[#0F172A] border border-[#243c63] focus:outline-none focus:border-[#38BDF8] text-[#F0F9FF] rounded-xl px-3.5 py-2.5 text-sm font-semibold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#94A3B8] mb-1.5">
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full bg-[#0F172A] border border-[#243c63] focus:outline-none focus:border-[#38BDF8] text-[#F0F9FF] rounded-xl px-3.5 py-2.5 text-sm font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#94A3B8] mb-1.5">
                    Description
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Engine oil and filters"
                    required
                    className="w-full bg-[#0F172A] border border-[#243c63] focus:outline-none focus:border-[#38BDF8] text-[#F0F9FF] rounded-xl px-3.5 py-2.5 text-sm font-semibold"
                  />
                </div>
                <div className="flex justify-end gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsAddexpenceOpen(false)}
                    className="px-4 py-2 rounded-xl bg-[#1e2f4d] border border-[#243c63] text-[#94A3B8] hover:text-white text-sm font-bold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#1D4ED8] text-white text-sm font-extrabold shadow-lg shadow-blue-700/30 hover:brightness-110 cursor-pointer"
                  >
                    Record Expense
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="bg-[#142037] border border-[#243c63] rounded-2xl p-5 md:p-6 mb-6 space-y-3.5">
          {categoryBreakdown.map((item) => (
            <div
              key={item.label}
              className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm"
            >
              <span className="sm:w-36 text-[#F0F9FF] font-bold shrink-0">
                {item.label}
              </span>

              <div className="flex-1 h-2 bg-[#243c63] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#38BDF8]"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>

              <span className="sm:w-32 sm:text-right font-extrabold text-[#22D3EE] shrink-0">
                {item.amount.toLocaleString()} EGP ({item.percentage}%)
              </span>
            </div>
          ))}
        </div>
        <div className="bg-[#142037] border border-[#243c63] rounded-2xl overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-[#1e2f4d] text-[#bae6fd] border-b border-[#243c63]">
                <th className="py-3.5 px-5 font-extrabold text-xs uppercase tracking-wider">
                  Date
                </th>
                <th className="py-3.5 px-5 font-extrabold text-xs uppercase tracking-wider">
                  Vehicle
                </th>
                <th className="py-3.5 px-5 font-extrabold text-xs uppercase tracking-wider">
                  Category
                </th>
                <th className="py-3.5 px-5 font-extrabold text-xs uppercase tracking-wider">
                  Description
                </th>
                <th className="py-3.5 px-5 font-extrabold text-xs uppercase tracking-wider">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#243c63]">
              {expenses.map((expense) => (
                <tr
                  key={expense.id}
                  className="hover:bg-[#1e2f4d]/40 transition-colors"
                >
                  <td className="py-3.5 px-5 font-bold text-[#F0F9FF] whitespace-nowrap">
                    {expense.date}
                  </td>
                  <td className="py-3.5 px-5 text-[#F0F9FF] whitespace-nowrap">
                    {expense.car}
                  </td>
                  <td className="py-3.5 px-5 whitespace-nowrap">
                    <span className="inline-block bg-[#1e2f4d] text-[#22D3EE] px-3 py-1 rounded-md text-xs font-bold">
                      {expense.type}
                    </span>
                  </td>
                  <td className="py-3.5 px-5 text-[#F0F9FF]">{expense.desc}</td>
                  <td className="py-3.5 px-5 font-black text-[#38BDF8] whitespace-nowrap">
                    {expense.amount.toLocaleString()} EGP
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Financial_Log;
