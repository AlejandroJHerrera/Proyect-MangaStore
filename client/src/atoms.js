import axios from './config';
import { atom, selector } from 'recoil';

export const mangasState = atom({
  key: 'mangasState',
  default: '',
});

export const isLoged = atom({
  key: 'isLoged',
  default: '',
});

export const userLogged = atom({
  key: 'userLogged',
  default: '',
});

export const userInfoSelector = selector({
  key: 'userInfoSelector',
  get: async ({ get }) => {
    const user = get(userLogged);
    let reply;
    if (user) {
      let url = `/user/${user}`;
      const info = await axios
        .get(url)
        .then((res) => {
          reply = res.data;
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error + 'this is error');
        });
    }

    return reply;
  },
});
