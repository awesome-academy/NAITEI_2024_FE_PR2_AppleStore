import React from 'react';
import Navbar from './components/Navbar';
import LanguageSwitcher from './components/LanguageSwitcher';
import NewGen from './components/Newgen';
import StoreTitle from './components/StoreTitle';
import Advertise from './components/Advertise';
import Footer from './components/Footer';
import Headphone from './components/Headphone';
import Support from './components/Support';
import Ad2 from './components/Ad2';
import Acs from './components/Acs';
import Tag from './components/Tag';
import Login from './components/Login';
import { useTranslation } from 'react-i18next';
import './assets/css/global.css';
import'./assets/scripts/i18n';

function Home() {
  const {t} = useTranslation();

  return (
    <div>
      <Navbar />
      <LanguageSwitcher />
      <StoreTitle/>
      <Advertise/>
      <div className="whitespace-nowrap flex mx-36 mt-20 font text-2xl">
                <p><strong>{t('lastgen')}.</strong><b className="b" >{t('lastgenQote')}</b></p>
      </div>
      <div>
        <NewGen/>
        <div className="whitespace-nowrap flex mx-36 mt-4 font text-2xl">
                <p><strong>{t('supportTitle')}.</strong><b className="b" >{t('supportQote')}</b></p>
        </div>
        <Support/>
        <div className="whitespace-nowrap flex mx-36 mt-14 font text-2xl">
                <p><strong>{t('ad2Title')}.</strong><b className="b" >{t('ad2Qote')}</b></p>
        </div>
        <Ad2/>
        <div className="whitespace-nowrap flex mx-36 mt-14 font text-2xl">
                <p><strong>{t('acsTitle')}.</strong><b className="b" >{t('acsQote')}</b></p>
        </div>
        <Acs/>
        <div className="whitespace-nowrap flex mx-36 mt-14 font text-2xl">
                <p><strong>{t('headphoneTitle')}.</strong><b className="b" >{t('headphoneQote')}</b></p>
        </div>
        <Headphone/>
        <div className="mx-36">
          <strong className="whitespace-nowrap mb-4 flex mt-14 font text-2xl">
            {t('tagTitle')}
          </strong>
          <Tag/>
        </div>
        
        <div className="md:border-t-2 mx-0 lg:mx-40 mt-14">
          <Footer/>
        </div>
        <Login/>
      </div>
    </div>
  );
}

export default Home;

