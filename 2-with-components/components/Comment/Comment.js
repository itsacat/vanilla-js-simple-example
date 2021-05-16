'use strict'

class Comment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const date = this.props.date;
        return `
            <div class='comment'>
                <div class='comment__author-and-date'>
                    <span class='comment__author'>${this.props.author}</span>
                    <span class='comment__date'>
                        (${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()})
                    </span>
                </div>
                <div class='comment__text'>${this.props.text}</div>
            </div>
        `;
    }
}
