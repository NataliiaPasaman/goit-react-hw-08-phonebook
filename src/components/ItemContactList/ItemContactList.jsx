import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from "redux/contacts/selector";
import { selectFilter } from "redux/contacts/selector";
import { getFilterContacts } from 'helpers/filteredContacts';
import { deleteContact } from "redux/contacts/operations";
import { Notify } from 'notiflix';
import { MdDelete } from 'react-icons/md';
import { 
  ContactsItem, 
  Box, 
  ContactName, 
  Number, 
  ButtonDelete } from './ItemContactList.styled'

export const ItemContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleDelete = (id, name) => {
    dispatch(deleteContact(id));
    Notify.warning(`${name} deleted from your phonebook`, {
      position: 'center-top',
    })
  }

  const filteredContacts = getFilterContacts(contacts, filter);
  const addContactItem = filteredContacts.map(({ id, name, number }) => {
    return (
      <ContactsItem key={id}>
        <Box>
          <ContactName>{name}: </ContactName>
          <Number> {number}</Number>
        </Box>

        <ButtonDelete
          type="button"
          onClick={() => handleDelete(id, name)}
        >
          <MdDelete size={32} />
        </ButtonDelete>
      </ContactsItem>
    );
  });

return (contacts.length > 0 && addContactItem);
};


