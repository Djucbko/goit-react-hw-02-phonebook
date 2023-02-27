import PropTypes from "prop-types";
import { P, Li, DelButton } from "./ContactListItem.styled";

export const ContactListItem = ({id, name, number, onDelete}) => {
    return (
    <Li>
        <P>{name}: {number}</P>
        <DelButton type="button" onClick={() => onDelete(id)}>Delete</DelButton> 
    </Li>
    )

};

ContactListItem.propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.node.isRequired,
    };