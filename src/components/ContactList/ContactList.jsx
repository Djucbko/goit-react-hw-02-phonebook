import PropTypes from "prop-types";
import { ContactListItem } from "components/ContactListItem/ContactListItem";

export const ContactList = ({contacts, onDelete}) => {
    const isContactsEmpty = contacts.length > 0;
    return (
    isContactsEmpty ? 
    <ul>
        { contacts.map( contact => { 
        const {id, name, number} = contact;
        return <ContactListItem key={id} id={id} name={name} number={number} onDelete={onDelete}/>;})
        }
    </ul>
    : <p>You dont have any contacts or matches</p>
    
    )

};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.node.isRequired,
    })),

}