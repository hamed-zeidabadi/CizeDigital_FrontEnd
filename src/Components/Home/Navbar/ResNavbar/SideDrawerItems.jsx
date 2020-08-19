import React, { useState, useEffect, useRef } from 'react';
import './SideDrawerItems.scss'
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import { CSSTransition } from 'react-transition-group';



const SideDrawerItems = () => {
    return (
        
            <SideDrawerNavbar>
                
              {/* <NavItem icon={<PlusIcon />} />
              <NavItem icon={<BellIcon />} />
              <NavItem icon={<MessengerIcon />} /> 
        
                 <NavItem icon={<CaretIcon />}>
                <DropdownMenu></DropdownMenu>
                </NavItem> */}

                <SideDrawerDropdownMenu/>
              
            </SideDrawerNavbar>
        
      );
}


function SideDrawerNavbar(props) {
    return (
      <nav >
        <ul >{props.children}</ul>
      </nav>
    );
  }
  
  // function NavItem(props) {
  //   const [open, setOpen] = useState(false);
  
  //   return (
  //     <li className="side_drawer_items_nav_item">
  //       <a href="#" className="side_drawer_items_icon_button" onClick={() => setOpen(!open)}>
  //         {props.icon}
  //       </a>
  
  //       {open && props.children}
  //     </li>
  //   );
  // }
  
  function SideDrawerDropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('side_drawer_items_main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
  
    // useEffect(() => {
    //   setMenuHeight(dropdownRef.current? FirstChild.offsetHeight:null)
    // }, [])
  
    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }
  
    function DropdownItem(props) {
      return (
        <a href="#" className="side_drawer_items_menu_item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
          <span className="side_drawer_items_icon_button">{props.leftIcon}</span>
          {props.children}
          <span className="side_drawer_items_icon_right">{props.rightIcon}</span>
        </a>
      );
    }
  
    return (
      <div className="side_drawer_items_dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
  
        <CSSTransition
          in={activeMenu === 'side_drawer_items_main'}
          timeout={500}
          classNames="side_drawer_items_menu_primary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="side_drawer_items_menu">
            <DropdownItem>My Profile</DropdownItem>
            <DropdownItem
              leftIcon={<CogIcon />}
              rightIcon={<ChevronIcon />}
              goToMenu="side_drawer_items_settings">
              Settings
            </DropdownItem>
            <DropdownItem
              leftIcon="🦧"
              rightIcon={<ChevronIcon />}
              goToMenu="side_drawer_items_animals">
              Animals
            </DropdownItem>
  
          </div>
        </CSSTransition>
  
        <CSSTransition
          in={activeMenu === 'side_drawer_items_settings'}
          timeout={500}
          classNames="side_drawer_items_menu_secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="side_drawer_items_menu">
            <DropdownItem goToMenu="side_drawer_items_main" leftIcon={<ArrowIcon />}>
              <h2>Menu</h2>
            </DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
          </div>
        </CSSTransition>
  
        <CSSTransition
          in={activeMenu === 'side_drawer_items_animals'}
          timeout={500}
          classNames="side_drawer_items_menu_secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="side_drawer_items_menu">
            <DropdownItem goToMenu="side_drawer_items_main" leftIcon={<ArrowIcon />}>
              <h2>Menu</h2>
            </DropdownItem>
            <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
            <DropdownItem leftIcon="🐸">Frog</DropdownItem>
            <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
            <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
          </div>
        </CSSTransition>
      </div>
    );
  }

export default SideDrawerItems
