import React from 'react';
import NavLink from './NavLink';
import HomeLink from './HomeLink';

function Navigation() {
  return (
    <div >
      <header className="w-full " style={{height:"80px", padding:"37px 3.5% 20px 3.5%"}}>
        <nav>
          <HomeLink />
          <div className="inline-block" style={{minWidth:auto}} >
          <NavLink  path="/WhatWeDo" text="What We Do"/>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navigation;