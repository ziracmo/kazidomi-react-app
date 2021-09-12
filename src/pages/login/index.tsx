import React from 'react';

import { RefreshIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';

import { Meta } from '../../layout/Meta';
import { LoginResponse, LoginResponseStatus } from '../../models/auth';
import { login } from '../../redux/actions/main';
import authService from '../../services/auth';
import { Main } from '../../templates/Main';

type Props = {
  login: any;
};

const Login = (props: Props) => {
  const router = useRouter();
  const [state, setState] = React.useState({
    username: '',
    password: '',
    errors: {},
    loading: false,
  });

  // Check if our form is valid
  const handleValidation = (): boolean => {
    let formIsValid = true;
    const errors: any = {};
    const { username, password } = state;

    // Check username input
    if (!username || username.length === 0) {
      formIsValid = false;
      errors.username = 'Username cannot be empty';
    }

    // Check password input
    if (!password || password.length === 0) {
      formIsValid = false;
      errors.password = 'Password cannot be empty';
    }

    // Update our component state
    setState({ ...state, errors });
    return formIsValid;
  };

  // Handle our form input changes
  const handleChange = (e: any) => {
    const { value } = e.target;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  // Login the user
  const signIn = async (e: any) => {
    // Set our loading to true
    setState({ ...state, loading: true });
    e.preventDefault();
    // Check if our form is valid
    if (handleValidation()) {
      const { username, password } = state;

      // Call the api to login
      const res: LoginResponse = await authService.login(username, password);
      // Set our redux state for login

      if (res.status === LoginResponseStatus.Success) {
        props.login(res);
        router.push('/');
      }
      // Set our loading to false
      setState({ ...state, loading: false });
    }
    // Set our loading to false
    setState({ ...state, loading: false });
  };

  return (
    <Main
      meta={
        <Meta title="Kazidomi React JS App - Login" description="Home Page" />
      }
    >
      <section className="text-gray-600 body-font mt-8">
        <div className="image-container container px-5 py-24 mx-auto flex flex-wrap items-center justify-center">
          <style jsx>{`
            .image-container {
              background: url('https://cdn.pixabay.com/photo/2017/08/19/19/43/nature-2659682_1280.jpg');
            }
          `}</style>
          <div className="lg:w-3/5 lg:pr-0 pr-0">
            <h1 className="title-font font-bold text-5xl text-white">
              Slow-carb next level shoindcgoitch ethical authentic, poko
              scenester
            </h1>
            <p className="leading-relaxed mt-4 text-white">
              Poke slow-carb mixtape knausgaard, typewriter street art gentrify
              hammock starladder roathse. Craies vegan tousled etsy austin.
            </p>
          </div>
          <div className="lg:w-2/6 xl:w-2/5 md:w-2/3 bg-gray-100 rounded-lg p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Sign In
            </h2>
            <div className="relative mb-4">
              <label
                htmlFor="username"
                className="leading-7 text-sm text-gray-600"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                className={`${
                  (state.errors as any).username ? 'error' : ''
                } input`}
                onChange={handleChange}
              ></input>
              <span className="text-red-500 text-xs">
                {(state.errors as any).username}
              </span>
            </div>
            <div className="relative mb-4">
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className={`${
                  (state.errors as any).username ? 'error' : ''
                } input`}
                onChange={handleChange}
              ></input>
              <span className="text-red-500 text-xs">
                {(state.errors as any).password}
              </span>
            </div>
            <button
              className={`${state.loading ? 'disabled' : ''} btn aligner`}
              onClick={signIn}
            >
              {state.loading
                ? `${(
                    <RefreshIcon className="animate-spin h-4 mr-4"></RefreshIcon>
                  )}Loading`
                : 'Sign in'}
            </button>
          </div>
        </div>
      </section>
    </Main>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    login: (token: string) => dispatch(login(token)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
