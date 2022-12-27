import React from 'react';
import { Box, Description } from './Home.styled';

export default function Home() {
  return (
    <Box>
    <img
        src="https://media.istockphoto.com/id/1313901506/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BE%D0%B1%D1%80%D0%B5%D0%B7%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9-%D1%81%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA-%D0%B0%D1%84%D1%80%D0%BE-%D0%B0%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0%D0%BD%D1%81%D0%BA%D0%BE%D0%B9-%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D1%8B-%D1%81-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%D1%8E-%D1%81%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD%D0%B0-%D1%83-%D1%81%D0%B5%D0%B1%D1%8F-%D0%B4%D0%BE%D0%BC%D0%B0-%D1%83%D0%BB%D1%8B%D0%B1%D0%B0%D1%8F%D1%81%D1%8C.jpg?s=612x612&w=0&k=20&c=yghYFX46vTRIIS-_HA7Iv_8WTEjzR0AQqzDxrEwl1ZM="
        alt='PhoneBook'
        width="480"
      />
      <Description>
        Welcome to the contact manager client application. Now you can save an
        unlimited number of contacts in one place. Contacts can be easily added
        and removed from your phonebook. Just register and go!
      </Description>
    </Box>
  );
}
