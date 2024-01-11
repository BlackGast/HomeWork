// Весь код здесь написан для тестирования.
// Файл может быть пустым.
import { DataManager } from "./DataManager/DataManager";
import Survey from "./Survey/Survey";

const dataManager = new DataManager();
const survey = new Survey(dataManager);
//survey.createModel(`{"title":"Title","description":"Description","pages":[{"id":1},"title":"TitlePages","description":"PagesDescription","panels":[{"id":1,"title":"TitlePanels","description":"PanelsDescription","columns":1,"questions":[{"id":1,"title":"QuestionText","type":"Text"},{"id":2,"title":"QuestionChoice","type":"Choice","choices":[{"id":1,"title":"Ch_1","checked":false,"disabled":false},{"id":2,"title":"Ch_2","checked":false,"disabled":false}]}]}]}]}`);
//survey.createModel('{"title":"Title","description":"Description","pages":[{"panels":[{"questions":[{"id":},"title":"QuestionText","type":"Text"},{"id":2,"title":"QuestionChoice","type":"Choice","choices":[{"id":1,"title":"Ch_1","checked":false,"disabled":false},{"id":2,"title":"Ch_2","checked":false,"disabled":false}]}]}]}]}');
console.log(survey);

// survey.createModel(
//     JSON.stringify({
//         title: 'Title',
//         description: 'Description',
//         pages: [{
//             title: 'Panel title',
//             description: 'Panel description',
//             panels: []
//         }]
//     })
// )
// const model = survey.getModel();
// console.log(model);
// model.pages.forEach(page => {
//     page.addPanel({
//         id: 1,
//         title: 'Вопрос',
//         description: 'Описание',
//         questions: [
//             { id: 1, title: 'Question 1', type: 'Text' },
//             { id: 2, title: 'Question 2', type: 'Choice' }
//         ]
//     });
//     console.log(page.getPanels());
//     console.log(model);
// })
