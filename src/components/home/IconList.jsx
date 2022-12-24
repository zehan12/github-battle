import PropTypes from 'prop-types';
import React from 'react';
export const ListItem = ({ Icon, text, count, color }) => (
    <li className='flex gap-4 items-center'>
        <Icon size={25} color={color} />
        <span
            className={`text-lg ${typeof (count) === "number" ? "" : "font-semibold"}`}>
            {
                typeof (count) === "number" ? count.toLocaleString()
                    : count.charAt(0).toUpperCase() + count.slice(1)
            } 
            {typeof (count) === "number" ? "  "+text : ""}
        </span>
    </li>
);

ListItem.propTypes = {
    Icon: PropTypes.elementType.isRequired,
    text: PropTypes.string,
    count: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]).isRequired,
    color: PropTypes.string,
};

ListItem.defaultProps = {
    color: '#000000',
};