import { SERVER_IP } from '@/utils/GlobalConstants';

export function fetchData({ ...params }) {
  return fetch(`${SERVER_IP}/api/hello`, {
    method : 'GET',
    mode   : 'cors',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  }).then((res) => {
    return res.json();
  }).then((res) => {
    console.log(res[0]);
    return res;
  }).catch((err) => {
    console.log('error: ', err);
  });
}

export function uploadData({ ...params }) {
  return fetch(`${SERVER_IP}/api/hello`, {
    method : 'POST',
    mode   : 'cors',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body   : JSON.stringify(params)
  }).then((res) => {
    return res.json();
  }).then((res) => {
    return res;
  }).catch((err) => {
    console.log('error: ', err);
  });
}

export function modifyData({ ...params }) {
  return fetch(`${SERVER_IP}/api/hello`, {
    method : 'PUT',
    mode   : 'cors',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body   : JSON.stringify(params)
  }).then((res) => {
    return res.json();
  }).then((res) => {
    return res;
  }).catch((err) => {
    console.log('error: ', err);
  });
}
