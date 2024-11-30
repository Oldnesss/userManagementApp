import React from "react";

import UserForm from "./components/User/UserForm";
import UserList from "./components/User/UserList";
import UserDetails from "./components/User/UserDetails";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-6">
        <div>
          <UserForm />
        </div>
        <div className="space-y-6">
          <UserList />
          <UserDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
