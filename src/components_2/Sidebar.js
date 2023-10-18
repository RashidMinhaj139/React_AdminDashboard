import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import "./sidebar.css"

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        {/* <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <img  className="mainlogo" src='https://i.ebayimg.com/images/g/uGgAAOSwzPRj79D5/s-l400.jpg'/>
            </div>
        </div> */}

        <ul className='sidebar-list'>
            <li className='sidebar-list-item1'>
                <a href="">
                    Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                     Products
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                     Adjustments
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                     Quotations 
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                     purchases
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    sales
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                     transfer
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                     expenses
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    people
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                  role
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                     warehiouse
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    cuurencies
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                     Inventory
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                     Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                     Setting
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar