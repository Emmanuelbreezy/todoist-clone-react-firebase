import React from "react";
import { MainContent } from "./Layer/MainContent/main_content";
import { SideBar } from "./Layer/SideBar/sidebar";

const Content = () => {
    return(
        <div className="w-10/12 h-full mx-auto flex flex-1 bg-blue-500">
           <SideBar />
           <MainContent />
        </div>
    );
}

export default Content;