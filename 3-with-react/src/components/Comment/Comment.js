import React from 'react';
import './Comment.css';

export default function Comment(props) {
    return (
        <div className='comment'>
            <div className='comment__author-and-date'>
                <span className='comment__author'>{props.author}</span>
                <span className='comment__date'>
                        ({props.date.getDate()}.{props.date.getMonth() + 1}.{props.date.getFullYear()})
                    </span>
            </div>
            <div className='comment__text'>{props.text}</div>
        </div>
    );
}
