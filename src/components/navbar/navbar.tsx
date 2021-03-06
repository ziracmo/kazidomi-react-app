import React, { Fragment } from 'react';

import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';

import { logout } from '../../redux/actions/main';
import CartButton from './cart-button';

const navigation = [{ name: 'Home', href: '/', current: true }];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

type Props = {
  isAuthenticated: boolean;
  logout?: any;
};

const Navbar = (props: Props) => {
  const { isAuthenticated } = props;
  const router = useRouter();

  return (
    <Disclosure as="nav" className="shadow fixed w-screen bg-white z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md hover:text-te">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://www.kazidomi.com/themes/detoxshop/img/icons/logo/logo-desktop.svg"
                    alt="Kazimodi"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://www.kazidomi.com/themes/detoxshop/img/icons/logo/logo-desktop.svg"
                    alt="Kazimodi"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link href={item.href} key={item.name} passHref={true}>
                        <span
                          className={classNames(
                            router.pathname === item.href
                              ? 'text-green-400'
                              : 'hover:text-green-400',
                            'px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <CartButton />
                {/* Profile dropdown */}
                {isAuthenticated ? (
                  <Menu as="div" className="ml-6 relative">
                    <div>
                      <Menu.Button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-400 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://picsum.photos/60"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 shadow-lg py-1 bg-white ring-1 ">
                        <Menu.Item>
                          <span
                            onClick={props.logout()}
                            className={'block px-4 py-2 text-sm text-black'}
                          >
                            Sign out
                          </span>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : null}
                <Link href="/login" passHref={true}>
                  <span
                    className={
                      'px-4 py-2 text-sm uppercase hover:text-green-400 hover:cursor-pointer'
                    }
                  >
                    Sign in
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'text-green-400' : ' hover:text-green-400',
                    'block px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

const mapStateToProps = (state: any): Props => {
  return { isAuthenticated: state.authReducer.total };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: () => {
      dispatch(logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
