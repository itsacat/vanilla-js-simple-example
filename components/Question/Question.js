'use strict'

class Question extends Component {
    constructor(props) {
        super(props);
        this.elements.postCommentElement = this.root.getElementsByClassName('question__post-comment')[0];
        this.elements.commentsElement = this.root.getElementsByClassName('question__comments-list')[0];
        this.elements.postCommentNameElement = this.root.getElementsByClassName('question__post-comment-name')[0];
        this.elements.postCommentTextElement = this.root.getElementsByClassName('question__post-comment-text')[0];

        for (const commentData of this.props.comments) {
            let comment = new Comment(commentData);
            this.elements.commentsElement.appendChild(comment.root);
        }

        this.elements.postCommentElement.addEventListener('click', this.postCommentClickHandler.bind(this));
    }

    postCommentClickHandler(event) {
        event.preventDefault();

        const commentData = {
            date: new Date(),
            text: this.elements.postCommentTextElement.value,
            author: this.elements.postCommentNameElement.value
        }

        this.elements.postCommentNameElement.value = '';
        this.elements.postCommentTextElement.value = '';

        let comment = new Comment(commentData);
        this.elements.commentsElement.appendChild(comment.root);
    }

    render() {
        return `
			<div class='question'>
				<div class='question__header'>${this.props.header}</div>
				<div class='question__text'>
					<p>${this.props.text}</p>
				</div>
				<div class='question__comments'>
					<div class='question__comments-header'>Comments</div>
					<div class='question__comments-list'></div>
					<div class='question__post-comment-container'>
                        <input class='question__post-comment-name' placeholder='Ваше имя' />
                        <input class='question__post-comment-text' placeholder='Ваш комментарий' />
                        <button class='question__post-comment'>Add Comment</button>
					</div>
				</div>
			</div>
		`;
    }
}
