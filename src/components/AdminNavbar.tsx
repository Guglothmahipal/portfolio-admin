const AdminNavbar = () => {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold">Admin Dashboard</h1>

      <button className="bg-gray-900 text-white px-4 py-2 rounded-lg">
        Logout
      </button>
    </header>
  );
};

export default AdminNavbar;
