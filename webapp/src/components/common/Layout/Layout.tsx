import React from 'react';
import './Layout.scss';
import Header from '../Header/Header';

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<IProps> = (props) => {
  return (
    <div className="todo-layout-wrapper">
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
