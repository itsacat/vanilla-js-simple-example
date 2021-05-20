import React from 'react';
import './QuestionPage.css';
import QuestionService from '../../QuestionService';
import Question from '../Question/Question';

export default class QuestionPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.onCreateComment = this.onCreateComment.bind(this);
    }

    componentDidMount() {
        const questions = QuestionService.getQuestions();
        this.setState({questions});
    }

    onCreateComment(questionId, commentName, commentText) {
        QuestionService.addComment(questionId, commentName, commentText);

        const questions = QuestionService.getQuestions();
        this.setState({questions});
    }

    render() {
        if (!this.state.questions) {
            return <div/>
        }

        return <div className='question-page'>
            {this.state.questions.map((question) => (
                <Question key={question.id} onCreateComment={this.onCreateComment} {...question}/>
            ))}
        </div>
    }
}
