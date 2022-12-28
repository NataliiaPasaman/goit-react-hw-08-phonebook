import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from "redux/contacts/selector";
import { Notify } from 'notiflix';
import { MdAddCall, MdOutlinePeopleAlt } from 'react-icons/md';
import { AiFillPhone } from 'react-icons/ai';
import { Form, LabelPhone, InputPhone, BtnPhone, Box } from './ContactForm.styled';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const isfindContact = contacts.find(contact => contact.name === name);

    if(isfindContact) {
      form.reset();
      Notify.failure(`${name} is already in contacts`, {
        position: 'center-top',
        opacity: 0.9,
      });
      return;
    }

    dispatch(addContact({
      name,
      number: form.elements.number.value,
    }));
    Notify.success(`${name} add to your phonebook!`, {
      position: 'center-top',
    });
    form.reset();
  };

    return (
      <Form onSubmit={handleSubmit}>
        <Box>
        <LabelPhone>
          Name
          <MdOutlinePeopleAlt size={24} />
          <InputPhone
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </LabelPhone>
        <LabelPhone>
          Number
          <AiFillPhone size={24} />
          <InputPhone
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </LabelPhone>
        </Box>
        <BtnPhone type="submit">
          <MdAddCall size={16} />
          Add contact
        </BtnPhone>
      </Form>
    );
}