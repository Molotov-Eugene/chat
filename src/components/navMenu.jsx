import { Outlet, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import icons from '../assets/icons';
import ru from '../assets/ru.png';
import en from '../assets/en.png';
import { useAuth } from '../utils/hooks';
import Chat from './chat';

export default function() {
  const { t, i18n } = useTranslation();

  const [lng, setLng] = useState(i18n.language);
  const navigate = useNavigate();
  const authData = useAuth();


  const handleDarkMode = () => {
    authData.setTheme(authData.theme === 'dark' ? 'light' : 'dark');
  }

  useEffect(() => {
    authData.theme === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [authData.theme])

  useEffect(() => {
    if (!authData.isLogged) navigate('/login')
  }, [authData.isLogged])

  const handleLanguage = (lng) => () => {
    i18n.changeLanguage(lng);
    setLng(lng);
  }



  return (
    <div className='h-screen bg-mainColor-1 dark:bg-mainColorDark-1  font-roboto text-mainFontColor dark:text-mainFontColorDark overflow-auto'>
      <header>
        <nav className="h-[56px] py-2 drop-shadow-md dark:drop-shadow-dark bg-mainColor-2 dark:bg-mainColorDark-2">
          <div className="h-full w-full flex flex-row justify-between px-6">
            <div className="flex flex-row space-x-2">
              {icons.logo()}
              <span className='align-middle text-2xl'>Speak</span>
            </div>
            <div className='flex gap-2 items-center'>
              <button className='dark:hover:bg-mainColor-2/10 hover:bg-mainColorDark-2/10 hover:rounded-full' onClick={handleDarkMode}>{icons.theme()}</button>
              <div className='flex flex-row rounded-full h-fit'>
                <button className={lng === 'ru' ? 'px-1' : 'px-1 opacity-30 hover:opacity-80 transition delay-100'} onClick={handleLanguage('ru')}><img className='h-6 w-6' src={ru} alt='russian language' /></button>
                <button className={lng === 'en' ? 'px-1' : 'px-1 opacity-30 hover:opacity-80 transition delay-100'} onClick={handleLanguage('en')}><img className='h-6 w-6' src={en} alt='english language' /></button>
              </div>
              {
                authData.isLogged
                  ? <button onClick={authData.logOut} className='py-1 px-2 text-mainFontColorDark/80 bg-blue-500 rounded-lg hover:bg-blue-600 transition delay-100'>{t('logOut')}</button>
                  : null
              }
            </div>
          </div>
        </nav>
      </header>
      <main className='h-[calc(100vh-56px)] w-full'>
        <div className='flex h-full w-full content-center justify-center'>
          {authData.isLogged ? <Chat /> : <Outlet />}
        </div>
      </main>
    </div >
  )
}
