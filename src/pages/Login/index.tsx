import React from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps, Form } from 'formik';
import { connect, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import Header from '../../components/Header';
import {
  Container, Main, WrapperField, FieldInput, Button,
} from './styles';
import { signin } from '../../store/middlewares/Auth/SignIn/signin.actions';

interface FormValues {
  email: string;
  password: string;
}

interface OtherProps {
  message: string;
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const {
    touched, errors, isSubmitting, message,
  } = props;
  return (
    <Form>
      <h1>{message}</h1>
      <div>
        <WrapperField>
          <label htmlFor="email">Email</label>
          <FieldInput type="email" name="email" />
          {touched.email && errors.email && <p>{errors.email}</p>}
        </WrapperField>
        <WrapperField>
          <label htmlFor="password">Password</label>
          <FieldInput type="password" name="password" />
          {touched.password && errors.password && <p>{errors.password}</p>}
        </WrapperField>
        <Button type="submit" disabled={isSubmitting}>
          Submit
        </Button>
      </div>
    </Form>
  );
};

interface LoginFormProps {
  initialEmail?: string;
  message: string;
  dispatch: Dispatch<any>
}

const LoginSchemaValidation = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const LoginForm = withFormik<LoginFormProps, FormValues>({
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
        <Main>
          <LoginForm message="Sign In" dispatch={dispatch} />
        </Main>
      </Container>
    </>
  );
};

export default connect()(Login);
