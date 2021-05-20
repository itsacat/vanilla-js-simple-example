import React from 'react';
import './Question.css';
import Comment from '../Comment/Comment';

export default class Question extends React.Component  {
    constructor(props) {
        super(props);

        this.state = {
            commentName: '',
            commentText: ''
        };

        this.onCreateCommentClick = this.onCreateCommentClick.bind(this);
        this.onCommentNameChange = this.onCommentNameChange.bind(this);
        this.onCommentTextChange = this.onCommentTextChange.bind(this);
    }

    onCommentNameChange(event) {
        this.setState({commentName: event.target.value});
    }

    onCommentTextChange(event) {
        this.setState({commentText: event.target.value});
    }

    onCreateCommentClick() {
        this.props.onCreateComment(
            this.props.id,
            this.state.commentName,
            this.state.commentText
        );

        this.setState({commentName: '', commentText: ''});
    }

    render() {
        return (
            <div className='question'>
                <div className='question__header'>{this.props.header}</div>
                <div className='question__text'>
                    <p>{this.props.text}</p>
                </div>
                <div className='question__comments'>
                    <div className='question__comments-header'>Comments</div>
                    <div className='question__comments-list'>
                        {this.props.comments.map(comment => (
                            <Comment key={comment.id} {...comment}/>
                        ))}
                    </div>
                    <div className='question__post-comment-container'>
                        <input className='question__post-comment-name'
                            placeholder='Ваше имя'
                            value={this.state.commentName}
                            onChange={this.onCommentNameChange}/>
                        <input className='question__post-comment-text'
                            placeholder='Ваш комментарий'
                            value={this.state.commentText}
                            onChange={this.onCommentTextChange}/>
                        <button className='question__post-comment'
                            onClick={this.onCreateCommentClick}>
                            Add Comment
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
