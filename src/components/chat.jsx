import { useTranslation } from 'react-i18next';

function Chat() {
  const { t } = useTranslation();
  return (
    <div className="justify-center max-w-[1294px] max-h-[calc(100vh-100px)] w-full h-full m-5 rounded text-mainFontColor dark:text-mainFontColorDark shadow-lg dark:shadow-none dark:drop-shadow-dark bg-mainColor-2 dark:bg-mainColorDark-2">
      <div className="flex flex-row h-full">
        <div className="w-full max-w-[150px] border-r border-mainColor/50 dark:border-gray-500/50">
          <div className="flex flex-row justify-between items-center h-[60px] p-2">
            <p className='font-bold'>
              {t('channels')}
            </p>
            <button className='relative flex flex-row items-center justify-center border-2 p-[9px] bg-blue-400/10 border-blue-400/50 text-blue-400 hover:border-blue-500 hover:text-blue-500 hover:bg-blue-400/20'>
              <span className='absolute top-[-4px] font-semibold'>+</span>
            </button>
          </div>
          <div className="p-2">
            leftSide
          </div>
        </div>
        <div className="flex w-full flex-col justify-between">
          <div className="h-[60px] p-2 shadow-b">
            <p className='font-bold'>
              #ChatName
            </p>
            <p className='text-sm italic text-mainFontColor/80 dark:text-mainFontColorDark/80'>
              Count of messages
            </p>
          </div>
          <div className="h-full px-10 pt-5 pb-2 bg-white/40 dark:bg-white/5">
            messages
          </div>
          <div className="flex h-[70px] p-2 bg-white/40 dark:bg-white/5">
            <input type='text' placeholder={t('messageFormPlaceholder')} className='px-2 outline-none rounded h-[34px] bg-transparent border border-mainFontColor dark:border-mainFontColorDark w-full mx-10'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat;
