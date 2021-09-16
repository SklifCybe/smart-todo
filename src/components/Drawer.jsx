import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { setActiveLists } from '../store/actions/lists';

export const Drawer = () => {
  const lists = useSelector(({ list }) => list.lists);
  const dispatch = useDispatch();

  return (
    <div className="side-bar">
      <h4 className="side-bar__title">React Todo</h4>
      <ul className="side-bar__list">
        {[
          { title: 'Задачи', icon: 'home', to: '/' },
          { title: 'Важно', icon: 'star', to: '/important' },
          { title: 'Заплонировано', icon: 'event', to: '/planed' },
        ].map((item) => (
          <NavLink
            key={item.icon}
            to={item.to}
            className="side-bar__list-link"
            activeClassName="side-bar__list-item-active"
            exact
            onClick={() => dispatch(setActiveLists(item.title))}>
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
            <NavLink
              key={list.id}
              to={list.id}
              className="side-bar__list-link"
              activeClassName="side-bar__list-item-active"
              onClick={() => dispatch(setActiveLists(list.title))}>
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
