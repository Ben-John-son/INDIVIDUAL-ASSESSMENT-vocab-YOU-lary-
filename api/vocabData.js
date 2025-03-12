import client from '../utils/client';

const endpoint = client.databaseURL;

// const clearDom = () => {
//   document.querySelector('#app').innerHTML = '';
// };
const getLanguage = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/language.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getTech = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tech.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const languageBtn = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/language.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const languageOnly = Object.values(data).filter((item) => item.language);
      resolve(languageOnly);
    })
    .catch(reject);
});

const techButton = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tech.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const techOnly = Object.values(data).filter((item) => item.tech);
      resolve(techOnly);
    })
    .catch(reject);
});

const createLanguageCard = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/language.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createTechCard = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tech.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateCard = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/language/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const upddateTechCard = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tech/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getLanguage, getTech, languageBtn, techButton, createLanguageCard, updateCard, createTechCard, upddateTechCard
};
