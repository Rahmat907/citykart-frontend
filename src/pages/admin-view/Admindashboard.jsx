import React from "react";

const AdminDashboard = () => {
  return (
    <div className="p-6 space-y-6">

      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        <div className="p-4 border rounded-lg text-center">
          <h2 className="text-sm text-gray-600">Total Orders</h2>
          <p className="text-xl font-bold">120</p>
        </div>

        <div className="p-4 border rounded-lg text-center">
          <h2 className="text-sm text-gray-600">Total Users</h2>
          <p className="text-xl font-bold">350</p>
        </div>

        <div className="p-4 border rounded-lg text-center">
          <h2 className="text-sm text-gray-600">Total Products</h2>
          <p className="text-xl font-bold">58</p>
        </div>

        <div className="p-4 border rounded-lg text-center">
          <h2 className="text-sm text-gray-600">Revenue</h2>
          <p className="text-xl font-bold">₹45,000</p>
        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;
