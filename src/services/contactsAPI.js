import axios from 'axios';

const Axios = axios.create({
  baseURL: 'http://localhost:3004',
});

const getContacts = async () => {
  const { data } = await Axios.get('/contacts');
  return data;
};

const addContact = async contact => {
  await Axios.post('/contacts', contact);
};

// addContact({ id: 1, name: 'first', number: '123456' });
// addContact({ id: 1, name: 'second', number: '123456' });

async function test() {
  const data = await getContacts();
  console.log(data);
}

test();
addContact({ id: 1, name: 'first', number: '123456' });
test();
