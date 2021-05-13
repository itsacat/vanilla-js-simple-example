class QuestionService {
    static getQuestions() {
        return [
            {
                comments: [
                    {author: 'Пётр Кубанцов', text: 'Привет из Владивостока!', date: new Date()},
                    {author: 'Вася Васильев', text: 'А я что-то не понял, как лучше это сделать?', date: new Date()}
                ],
                header: 'What\'s the difference between initialize and constructor on a backbone model',
                text: 'There is something to think about: the relationship diagrams, overcoming the current difficult economic situation, are functionally separated into independent elements. In particular, diluted with a fair share of empathy, rational thinking determines the high demand for thoughtful reasoning. The significance of these problems is so obvious that the constant information and propaganda support of our activities indicates the possibility of appropriate conditions for activation.'
            },
            {
                comments: [
                    {author: 'Владислав Соломин', text: 'Красивая погода', date: new Date()},
                    {author: 'Семён Ворошилов', text: 'Чем отличается java от javascript?', date: new Date()}
                ],
                header: 'Compare typescript objects and add diff to new object',
                text: 'Within my Angular application, I need to compare two typescript objects and create a new object that consists of key/value pairs where the value of the key is different in the second object.'
            }
        ];
    }
}
