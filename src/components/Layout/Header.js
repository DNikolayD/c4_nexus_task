import { Fragment } from 'react';

import './Header.css';
import Menu from './Menu';


const Header = ({onSaveTypeHandler, className}) => {
  return (
    <div className={className}>
      <header className="header" id='header'>
        <Menu onSaveTypeHandler={onSaveTypeHandler} />
      </header>
    </div>
  );
};

export default Header;