import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import formImg from '../assets/formImg.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from '../utils/hooks';


export default function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const authData = useAuth();
  const [error, setError] = useState('');
  const [fieldDisabled, setFieldDisabled] = useState(false);

  const loginSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, t('min'))
      .max(20, t('max'))
      .required(t('required')),
    password: Yup.string().required(t('required')),
  });

  const errorClassess = 'text-red-500 text-center mx-auto text-xs italic';
  const fieldClassess = `appearence-none rounded-md border-[1px] border-mainColor-1/50 dark:border-mainColorDark-1/30 bg-transparent/10 focus:outline-none p-1 ml-2 disabled=${fieldDisabled}`;
  const handleSubmit = async (user) => {
    setFieldDisabled(true);
    setError('');
    axios.post('api/v1/login', user).then((response) => {
      authData.setUserId(response);
      authData.setLogged(true);
      navigate('/')
    }).catch(({ response }) => {
      setFieldDisabled(false);
      if (response.status === 401) setError(t('noValidUsername'));
      console.warn(response.status);
    });
  };

  useEffect(() => {
    if (localStorage.getItem('userID')) {
      navigate('/')
    }
  }, []);

  return (
    <>
      <div className='drop-shadow-md dark:drop-shadow-dark'>
        <div className='bg-mainColor-2 dark:bg-mainColorDark-2 p-[50px] mt-9'>
          <div className='max-w-[512px]'>
            <img src={formImg} alt='cats' className='border rounded-full' />
          </div>

          <div className='flex flex-col justify-between'>
            <h1 className='text-center mt-4 font-semibold text-xl'>{t('signInForm')}</h1>
            <Formik
              initialValues={{
                username: '',
                password: '',
              }}
              validationSchema={loginSchema}
              onSubmit={async (user) => handleSubmit(user)}
            >
              {({ errors, touched }) => (
                <Form className="flex flex-col gap-2 mt-4 mx-auto">
                  <div className='text-right'>
                    <label htmlFor='username'>{t('username')}</label>
                    <Field className={fieldClassess} name="username" />
                    <div className={errorClassess}>
                      {errors.username && touched.username ? <>{errors.username}</> : <div className='h-4'></div>}
                    </div>
                  </div>
                  <div className='text-right'>
                    <label htmlFor='password'>{t('password')}</label>
                    <Field className={fieldClassess} name="password" type="password" />
                    <div className={errorClassess}>
                      {errors.password && touched.password ? <>{errors.password}</> : <div className='h-4'></div>}
                    </div>
                  </div>
                  {error ? <div className='text-red-500 text-center mx-auto text-s my-[-12px]'>{error}</div> : null}
                  <button className='bg-blue-400/80 text-black/50 font-semibold dark:bg-blue-600/80 dark:text-mainFontColorDark rounded-lg w-fit my-4 py-2 px-6 self-center' type='submit'>{t('signIn')}</button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className='border-t-[1px] p-[24px] justify-center text-center border-mainFontColor/20 bg-mainColor-2/60 dark:bg-mainColorDark-2/40 dark:border-mainFontColorDark/50 w-full'>
          <p className='opacity-60 italic'>{t('notAccount')}</p>
          <a className='text-blue-500 hover:text-blue-700/80' href='#'>{t('signUp')}</a>
        </div>
      </div>
    </>
  )
}
