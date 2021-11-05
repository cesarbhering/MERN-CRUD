const headersInfo = {
  Accept: 'application/json, text/plain, */*',
  'Content-Type': 'application/json',
};

const API_URL = 'http://localhost:3002/Activities';

async function postActivityToAPI(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  const options = {
    method: 'POST',
    headers: headersInfo,
    body: JSON.stringify(formProps),
  };
  await fetch(API_URL, options).then((response) => response.json());
}

async function deleteActivityToAPI(id) {
  const options = {
    method: 'DELETE',
    headers: headersInfo,
    body: JSON.stringify({ id }),
  };
  await fetch(API_URL, options).then((response) => response.json());
}

async function updateActivityToAPI(activityInfo) {
  const { _id, name, description, status } = activityInfo;
  const options = {
    method: 'PUT',
    headers: headersInfo,
    body: JSON.stringify({ _id, name, description, status }),
  };
  await fetch(API_URL, options).then((response) => response.json());
}
module.exports = { postActivityToAPI, deleteActivityToAPI, updateActivityToAPI };
