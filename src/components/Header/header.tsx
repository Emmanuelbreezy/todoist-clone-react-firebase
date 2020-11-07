import React from 'react';

export const Header = () => {
    return(
       <div className="flex items-center justify-between px-8 py-4 bg-red-600 text-white" data-testid="header">
            <div className="logo">
              <a>Todist logo</a>
            </div>
            <div className="setting">
               <a>icon</a>
            </div>
       </div>
    );
}