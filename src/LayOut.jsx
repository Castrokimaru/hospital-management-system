import React from 'react';
import ToolBar from './ToolBar';
import { Outlet } from 'react-router-dom';



 function LayOut() {
    return (
    <div className="flex">
      {/* Sidebar Container */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-blue-300 shadow-lg">
        <ToolBar />
      </aside>

      {/* Main content area */}
      <main className="ml-64 w-[calc(100%-16rem)] min-h-screen bg-white p-10 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
    }

    export default LayOut;