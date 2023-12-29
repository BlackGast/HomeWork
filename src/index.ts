// Весь код здесь написан для тестирования.
// Файл может быть пустым.
import { DataManager } from "./DataManager/DataManager";
import Survey from "./Survey/Survey";

const dataManager = new DataManager();
const survey = new Survey(dataManager);
survey.createModel(
    JSON.stringify({
        title: 'Title',
        description: 'Description',
        pages: [{
            title: 'Panel title',
            description: 'Panel description',
            panels: []
        }]
    })
)
const model = survey.getModel();
console.log(model);
model.pages.forEach(page => {
    page.addPanel({
        id: 1,
        title: '',
        description: '',
        questions: [
            { id: 1, title: 'Question 1', type: 'Text' }
        ]
    });
    console.log(page);
    page.addPanel({
        id: 2,
        title: 'Вопрос',
        description: 'Описание',
        questions: [
            { id: 1, title: 'Question 1', type: 'Text' }
        ]
    });
    console.log(page);

})
