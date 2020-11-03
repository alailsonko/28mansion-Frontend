import React from 'react';
import * as Yup from 'yup';
import {
  Form, Field, FormikProps, withFormik,
} from 'formik';
import { connect, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import Header from '../../components/Header';
import {
  Container,
} from './styles';
import { signin } from '../../store/middlewares/Auth/SignIn/signin.actions';

interface FormValues {
  email: string
  password: string
}

interface OtherProps {
  message: string
}

const LoginSchemaValidation = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const InnerForm = ({ ...props }: OtherProps & FormikProps<FormValues>) => {
  const {
    touched, errors, isSubmitting, message,
  } = props;
  return (
    <Form>
      <h1>{message}</h1>
      <Field type="email" name="email" />
      { touched.email && errors.email && (
      <div>
        {errors.email}
      </div>
      ) }
      <Field type="password" name="password" />
      { touched.password && errors.password && (
      <div>
        {errors.password}
      </div>
      ) }
      <button type="submit" disabled={isSubmitting}>SignIn</button>

    </Form>
  );
};

interface MyFormProps {
  initialEmail?: string
  message: string
  dispatch: Dispatch<any>
}

const MyForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => ({
    email: props.initialEmail || '',
    password: '',
  }),
  validationSchema: LoginSchemaValidation,
  handleSubmit: async (values, { props, setSubmitting }) => {
    props.dispatch(signin(values));
    setSubmitting(false);
  },
})(InnerForm);

const Login: React.FC = () => {
  console.log('hello');
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <Container>
        <MyForm message="Login" dispatch={dispatch} />
      </Container>
    </>
  );
};

export default connect()(Login);
