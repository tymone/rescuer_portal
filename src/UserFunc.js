import axios from 'axios';

export const addWorker = newUser => {
  return axios
    .post('/dodaj_ratownika', { newUser })
    .then(console.log(newUser))
}