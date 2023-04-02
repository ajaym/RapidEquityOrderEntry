import React from 'react';

const EquityOrderEntry = () => {
  return (
    <div className="min-h-screen bg-black p-4 flex items-center justify-center">
      <form
        action="#"
        method="post"
        className="w-full max-w-xl bg-black shadow-md rounded p-6"
      >
        <h2 className="text-2xl font-bold text-green-500 mb-6">Equity Order Entry</h2>

        <div className="mb-4">
          <label htmlFor="symbol" className="block text-green-500 mb-2">Symbol</label>
          <input
            type="text"
            id="symbol"
            name="symbol"
            placeholder="Enter Symbol"
            className="input w-full bg-gray-900 text-green-500 border-green-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="orderType" className="block text-green-500 mb-2">Order Type</label>
          <select name="orderType" id="orderType" className="input w-full bg-gray-900 text-green-500 border-green-500" required>
            <option value=""></option>
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="block text-green-500 mb-2">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            placeholder="100"
            className="input w-full bg-gray-900 text-green-500 border-green-500"
            min="1"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-green-500 mb-2">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="100.00"
            className="input w-full bg-gray-900 text-green-500 border-green-500"
            min="0.01"
            step="0.01"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="orderDuration" className="block text-green-500 mb-2">Order Duration</label>
          <select name="orderDuration" id="orderDuration" className="input w-full bg-gray-900 text-green-500 border-green-500" required>
            <option value="day">Day</option>
            <option value="gtc">Good Till Cancelled (GTC)</option>
            <option value="fok">Fill or Kill (FOK)</option>
          </select>
        </div>

        <button type="submit" className="btn w-full bg-green-500 text-white">Submit</button>
      </form>
    </div>
  );
};

export default EquityOrderEntry;
