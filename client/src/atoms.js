import { atom } from 'recoil';

export const mangasState = atom({
  key: 'mangasState',
  default: '',
});

export const isLoged = atom({
  key: 'isLoged',
  default: false,
});

export const userLogged = atom({
  key: 'userLogged',
  default: '',
});
