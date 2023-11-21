import React from "react";

const LogOut = () => {
  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="border shadow-lg hover:shadow-xl p-6 mr-3 relative flex flex-col gap-5 items-center">
      <h1 className="text-lg font-serif font-bold text-indigo-500">Signed In</h1>
      <button onClick={handleLogOut} className="w-33 h-10 bg-indigo-900 p-5 flex items-center shadow-xl text-xl font-serif text-white">LogOut</button>
    </div>
  );
};

export default LogOut;
