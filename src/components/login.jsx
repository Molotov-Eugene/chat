import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import formImg from '../assets/formImg.jpg';

export default function Login() {
  const { t } = useTranslation();

  const loginSchema = Yup.object().shape({
    userName: Yup.string()
      .min(3, t('min'))
      .max(20, t('max'))
      .required(t('required')),
    password: Yup.string().required(t('required')),
  });

  const errorClassess = 'text-red-500 text-center mx-auto text-xs italic';
  const fieldClassess = 'appearence-none rounded-md border-[1px] border-mainColor-1/50 dark:border-mainColorDark-1/30 bg-transparent/10 focus:outline-none p-1 ml-2 ';
  const handleSubmit = (values) => console.log(values);

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
                userName: '',
                password: '',
              }}
              validationSchema={loginSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form className="flex flex-col gap-2 mt-4 mx-auto">
                  <div className='text-right'>
                    <label htmlFor='userName'>{t('username')}</label>
                    <Field className={fieldClassess} name="userName" />
                    <div className={errorClassess}>
                      {errors.userName && touched.userName ? <>{errors.userName}</> : null}
                    </div>
                  </div>
                  <div className='text-right'>
                    <label htmlFor='password'>{t('password')}</label>
                    <Field className={fieldClassess} name="password" type="password" />
                    <div className={errorClassess}>
                      {errors.password && touched.password ? <>{errors.password}</> : null}
                    </div>
                  </div>
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
