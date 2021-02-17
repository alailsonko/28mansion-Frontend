import React from 'react';
import * as Yup from 'yup';
import {
  withFormik, FormikProps, Form,
} from 'formik';
import { connect, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import Header from '../../components/Header';
import {
  Container, Main, WrapperField, FieldInput, Button,
} from './styles';
import { signup } from '../../store/middlewares/Auth/SignUp/signup.actions';

interface FormValues {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
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
          <label htmlFor="username">Username</label>
          <FieldInput type="username" name="username" />
          { touched.username && errors.username && (
          <p>
            {errors.username}
          </p>
          )}
        </WrapperField>
        <WrapperField>
          <label htmlFor="email">Email</label>
          <FieldInput type="email" name="email" />
          { touched.email && errors.email && (
          <p>
            {errors.email}
          </p>
          )}
        </WrapperField>
        <WrapperField>
          <label htmlFor="password">Password</label>
          <FieldInput type="password" name="password" />
          { touched.password && errors.password && (
          <p>
            {errors.password}
          </p>
          )}
        </WrapperField>
        <WrapperField>
          <label htmlFor="passwordConfirm">Confirm Password</label>
          <FieldInput type="password" name="passwordConfirm" />
          { touched.passwordConfirm && errors.passwordConfirm && (
          <p>
            {errors.passwordConfirm}
          </p>
          )}
        </WrapperField>
        <Button type="submit" disabled={isSubmitting}>
          Submit
        </Button>
      </div>
    </Form>
  );
};

interface RegisterFormProps {
  initialEmail?: string;
  message: string;
  dispatch: Dispatch<any>
}

const RegisterSchemaValidation = Yup.object({
  username: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), 'null'], 'Passwords must match'),
});

const RegisterForm = withFormik<RegisterFormProps, FormValues>({
  mapPropsToValues: (props) => ({
    username: '',
    email: props.initialEmail || '',
    password: '',
    passwordConfirm: '',
  }),
  validationSchema: RegisterSchemaValidation,
  handleSubmit: async (values, { props, setSubmitting }) => {
    props.dispatch(signup(values));
    setSubmitting(false);
  },
})(InnerForm);

const Register: React.FC = () => {
  console.log('hello');
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <Container>
        <Main>

          <RegisterForm message="Sign Up" dispatch={dispatch} />
        </Main>
      </Container>
    </>
  );
};

export default connect()(Register);
