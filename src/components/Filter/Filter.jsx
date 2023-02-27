import PropTypes from "prop-types";
import { FilterLabel, FilterInput } from "./Filter.styled";
export const Filter = ({onChange, value}) => {
    return <FilterLabel htmlFor="filter">Find contacts by name
    <FilterInput type='text' name="filter" onChange={onChange} value={value}/>
    </FilterLabel>
};

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};