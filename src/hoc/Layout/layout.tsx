import React from 'react';
import { Header } from '../../components/Header/header';


const Layout = (props: any) => {
    return(
        <div className="flex flex-1 flex-col">
           <Header />
           <div>{props.children}</div>
        </div>
    );
}


export default Layout;