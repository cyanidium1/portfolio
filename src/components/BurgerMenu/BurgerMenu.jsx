import Navigation from 'components/Navigation/Navigation';
import s from './BurgerMenu.module.css';
import Logo from 'components/Logo/Logo';
import sprite from '../../images/icons.svg';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function BurgerMenu({
  showMenu,
  setShowMenu,
  closeModalMenu,
  isLoggedIn,
}) {
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [showMenu]);

  return (
    <div className={s.container}>
      <div className={s.box}>
        <Navigation
          showMenu={showMenu}
          closeMenu={closeModalMenu}
          isLoggedIn={!isLoggedIn}
        />
        <div onClick={() => setShowMenu(!showMenu)} className={s.mobile_btn}>
          {showMenu ? (
            <svg width={30} height={30}>
              <use href={sprite + '#icon-cross-small'} />
            </svg>
          ) : (
            <svg width={30} height={30}>
              <use href={sprite + '#icon-burger'} />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
