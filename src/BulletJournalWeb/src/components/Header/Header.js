import React from 'react';

import './index.css';

export default function Header() {
  return (
    <div className="header pure-menu pure-menu-horizontal pure-menu-fixed">
      <a href="/"><img className="logo" src={require("./img/simbolo.jpg")} /></a>
      <h4 className="label">Bullet Journal</h4>
    </div>
  )
}