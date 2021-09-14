import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const Drawer = () => {
  const lists = useSelector(({ list }) => list.lists);

  return (
    <div className="side-bar">
      <h2 className="side-bar__title">React Todo</h2>
      <ul className="side-bar__list">
        {[
          { title: 'Задачи', icon: 'home', to: '/' },
          { title: 'Важно', icon: 'star', to: '/important' },
          { title: 'Заплонировано', icon: 'event', to: '/planed' },
        ].map((item) => (
          <NavLink key={item.icon} to={item.to} className="side-bar__list-item-link">
            <li className="side-bar__list-item">
              <i className="material-icons side-bar__list-item-icon">{item.icon}</i>
              {item.title}
            </li>
          </NavLink>
        ))}
      </ul>
      <hr />
      <ul className="side-bar__list">
        {lists &&
          lists.map((list) => (
            <NavLink key={list.id} to={list.id} className="side-bar__list-item-link">
              <li className="side-bar__list-item">
                <i className="material-icons side-bar__list-item-icon">dehaze</i>
                {list.title}
              </li>
            </NavLink>
          ))}
      </ul>
    </div>
  );
};
