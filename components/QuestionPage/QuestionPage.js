'use strict'

class QuestionPage extends Component {
    constructor(props) {
        super(props);

        const questions = QuestionService.getQuestions();

        for (const questionData of questions) {
            const question = new Question(questionData);
            this.root.appendChild(question.root);
        }
    }

    render() {
        return `
            <div class='question-page'></div>
		`;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const body = document.getElementsByTagName('body')[0];

    const questionPage = new QuestionPage();
    body.appendChild(questionPage.root);
});
