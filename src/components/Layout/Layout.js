import React from 'react';
import Aux from '../../HoC/Aux';
import LayoutStyle from './Layout.css';

const layout =( props ) => {
   return(
           <Aux>
               <div>Toolbar, Sidedrawer, backdrop</div>
               <main className="content">
                   {props.children}
               </main>
           </Aux>
       );
};

export default layout;