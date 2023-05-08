import React from "react";
import PropTypes from "prop-types";
import { Button as BaseButton } from "antd";
import classNames from "classnames";

import "./Message.scss";

const Message = ({avatar, user, text, date}) => (
    <div className='message'>
    <div className='message_avatar'>
        <img scr={avatar} alt={`Avatar ${user.fullname}`}/>
    </div>
        <div className='message_content' >
            <div className='message_buble' >
            <p className='message_text'>
                {text}</p>
            </div>
            <span className='message_date'>
                {date}</span>
        </div>
    </div>
);

Message.defaultProps = {
    user: {}
}

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object
};

export default Message;