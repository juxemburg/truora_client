import store from '@/store';

export const authGuardFn = (to: any, from: any, next: any) => {
  if (store.state.isUserLoggedIn) {
    next();
  } else {
    next('/login');
  }
};
