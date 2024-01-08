import React from 'react';
import './SideMenu.scss';
import Logo from 'public/assets/images/idenbrid-logo.svg';
import { useTranslation } from 'react-i18next';
// import footerlogo from 'public/assets/images/side-logo.png';
import Link from 'next/link';
import Image from 'next/image';

const SideMenu = ({ isOpen, closeNavbar, toggleTranslator, isEnglish }) => {
  const menuClass = isOpen ? 'open' : '';
  const { t } = useTranslation('common');

  return (
    <div className={`side-menu-wrapper ${menuClass}`}>
      <div className={`side-menu ${menuClass}`}>
        <div className='menu-content'>
          <div className='row'>
            <div className='col-md-6 col-sm-6  col-6 '>
              <Link href='/' className={'mobilenav-link'} onClick={closeNavbar}>
                <Image loading='lazy' src={Logo} alt='footerlogo' className='footerlogo' />
              </Link>
            </div>
            <div className='col-md-6 col-sm-6 col-6 text-right'>
              <button className='sidelang-button' disabled onClick={toggleTranslator}>
                <span className={'sidelang-en ' + (isEnglish && 'active')}>EN </span>
                <span className='sidelang-slash'> / </span>
                <span className={'sidelang-jp ' + (!isEnglish && 'active')}> JA</span>
              </button>
            </div>
          </div>
          {/* Add your menu items here */}
          <ul className='side-menu-list'>
            <li>
              <div className='mobilemenu-item'>
                <Link href='/' className={'mobilenav-link'} onClick={closeNavbar}>
                  <span className='menu-name'>Top</span>
                </Link>
              </div>
            </li>
            <li>
              <div className='mobilemenu-item'>
                <Link href='/services' className={'mobilenav-link'} onClick={closeNavbar}>
                  <span className='menu-name'>Services</span>
                </Link>
                <div className='sub-nav'>
                  <Link href='/services/dsp' className={'mobilenav-link'} onClick={closeNavbar}>
                    DSP
                  </Link>
                  <Link href='/services/poa' className={'mobilenav-link'} onClick={closeNavbar}>
                    POA
                  </Link>
                  <Link href='/digitalpeer' className={'mobilenav-link'} onClick={closeNavbar}>
                    DigitalPeer
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className='mobilemenu-item'>
                <Link href='/comingsoon' className={'mobilenav-link'} onClick={closeNavbar}>
                  <span className='menu-name'>Work</span>
                  {/* <span className="jp-text">実績</span> */}
                </Link>
              </div>
            </li>
            <li>
              <div className='mobilemenu-item'>
                <Link href='/aboutus' className={'mobilenav-link'} onClick={closeNavbar}>
                  <span className='menu-name'>About</span>
                </Link>
                <div className='sub-nav'>
                  <Link href='/aboutus/message' className={'mobilenav-link'} onClick={closeNavbar}>
                    Message
                  </Link>
                  <Link href='/aboutus' className={'mobilenav-link'} onClick={closeNavbar}>
                    About
                  </Link>
                  <Link href='/aboutus/company' className={'mobilenav-link'} onClick={closeNavbar}>
                    Company
                  </Link>
                  <Link href='/aboutus/member' className={'mobilenav-link'} onClick={closeNavbar}>
                    Member
                  </Link>
                  <Link href='/aboutus/officeaccess' className={'mobilenav-link'} onClick={closeNavbar}>
                    Office Environment
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className='mobilemenu-item'>
                <Link href='/comingsoon' className={'mobilenav-link'} onClick={closeNavbar}>
                  <span className='menu-name'>Blog</span>
                </Link>
              </div>
            </li>
            <li>
              <div className='mobilemenu-item'>
                <Link href='/comingsoon' className={'mobilenav-link'} onClick={closeNavbar}>
                  <span className='menu-name'>News</span>
                  {/* <span className="jp-text">お知らせ</span> */}
                </Link>
              </div>
            </li>
            <li>
              <div className='mobilemenu-item'>
                <Link href='/careers' className={'mobilenav-link'} onClick={closeNavbar}>
                  <span className='menu-name'>Careers</span>
                </Link>
              </div>
            </li>
          </ul>
          <div className='btns-group'>
            <Link href='/contactus' className='sidebar-contact-btn' onClick={closeNavbar}>
              {t('navbar.inquiry')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
