import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import icons from '../assets/icons';
import ru from '../assets/ru.png';
import en from '../assets/en.png';


export default function() {
  const { t, i18n } = useTranslation();
  const userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const [darkMode, setDarkMode] = useState(userTheme);
  const [lng, setLng] = useState(i18n.language);

  const handleDarkMode = () => {
    setDarkMode(darkMode === 'dark' ? 'light' : 'dark');
  }

  useEffect(() => {
    if (darkMode === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const handleLanguage = (lng) => () => {
    i18n.changeLanguage(lng);
    app.render();
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
                <button className={lng === 'ru' ? 'px-1' : 'px-1 opacity-30 hover:opacity-80 transition delay-100'} onClick={handleLanguage('ru')}><img className='h-6 w-fit' src={ru} alt='russian language' /></button>
                <button className={lng === 'en' ? 'px-1' : 'px-1 opacity-30 hover:opacity-80 transition delay-100'} onClick={handleLanguage('en')}><img className='h-6 w-fit' src={en} alt='english language' /></button>
              </div>
              <p>Button</p>
            </div>
          </div>
        </nav>
      </header>
      <main>
          <div className='flex p-2 content-center justify-center'>
            <Outlet />
        </div>
      </main>
    </div>
  )
}
