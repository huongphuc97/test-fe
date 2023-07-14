import { useState } from "react"
import { useNavigate, useLocation } from 'react-router-dom'

import OutsideClickHandler from "../../hooks/clickOutside"
import { headerItems, menuCollapse } from "../../utils/Variables"
import Logo from '../../assets/icons/logo.svg'
import Menu from '../../assets/icons/icon-menu.svg'
import Close from '../../assets/icons/icon-close.svg'

const Header = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [menuShowing, setMenuShowing] = useState(false)

  const showMenu = () => {
    setMenuShowing(!menuShowing)
  }

  const redirectPage = (path) => {
    if (path) {
      navigate(path)
      setMenuShowing(false)
    }
  }

  return (
    <div className="header">
      <div className="header-left">
        <img
          src={Logo}
          alt={Logo}
          onClick={() => redirectPage('/')}
        />
      </div>
      <div className="header-right">
        {headerItems.map((item, index) => (
          <div
            className="header-right__item"
            key={index}
            onClick={() => redirectPage(item.path)}
          >
            <img
              src={item.icon}
              alt={item.icon}
            />
            <span className={pathname === item.path ? "header-right__text font-custom header-right__active" : "header-right__text font-custom"}>
              {item.label}
            </span>
          </div>
        ))}
        <div className="header-right__notification">1</div>
        <img
          className="header-right__menu"
          src={!menuShowing ? Menu : Close}
          alt={Menu}
          onClick={showMenu}
        />
      </div>

      {menuShowing && (
        <OutsideClickHandler
          className="header-collapse"
          onOutsideClick={() => setMenuShowing(false)}
        >
          {menuCollapse.map((item, index) => (
            <span
              className={pathname === item.path ? "header-collapse__text header-right__active font-custom" : "header-collapse__text font-custom"}
              onClick={() => redirectPage(item.path)} key={index}>{item.label}
            </span>
          ))}
        </OutsideClickHandler>
      )}
    </div>
  )
}

export default Header