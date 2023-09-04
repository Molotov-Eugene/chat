import { useTranslation } from "react-i18next";
import { useRouteError, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();
  const { t } = useTranslation();

  console.error(error)
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-mainColor-1 dark:bg-mainColorDark-1 text-mainFontColor dark:text-mainFontColorDark">
      <h1 className="text-3xl p-4">{t('errorPage')}</h1>
      <p>
        {/* <i>{error.statusText || error.message}</i> */}
        <p className="p-2 text-xl italic">{t('notFound')}</p>
      </p>
      <div className="flex flex-row gap-5 mt-5">
        <button className='bg-blue-400 dark:bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition delay-75' onClick={() => navigate(-1)}>Go Back</button>
        <button className='bg-blue-400 dark:bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition delay-75' onClick={() => navigate('/')}>Go Home</button>
      </div>
    </div>
  );
}
