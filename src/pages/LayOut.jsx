import React from 'react';
import ToolBar from './components/ToolBar';
import {Outlet} from 'react-router-dom';

 function LayOut() {
    return (
        <div classname="flex min-h-screen  bg-gray-50">
        <ToolBar />
        <div classname="flex-1 p-8">
          <Outlet /> 
        </div>
        </div>
    );
    }

    export default LayOut;