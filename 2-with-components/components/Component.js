class Component {
    props;
    root;
    elements;

    constructor (props) {
        this.props = props;
        this.elements = {};

        const root = document.createElement('div');
        root.innerHTML = this.render().trim();
        this.root = root.firstChild;
    }

    render() {}
}
