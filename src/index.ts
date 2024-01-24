// Весь код здесь написан для тестирования.
// Файл может быть пустым.
import { DataManager } from "./DataManager/DataManager";
import Survey from "./Survey/Survey";

const dataManager = new DataManager();
const survey = new Survey(dataManager);
//survey.createModel(`{"title":"Title","description":"Description","pages":[{"id":1},"title":"TitlePages","description":"PagesDescription","panels":[{"id":1,"title":"TitlePanels","description":"PanelsDescription","columns":1,"questions":[{"id":1,"title":"QuestionText","type":"Text"},{"id":2,"title":"QuestionChoice","type":"Choice","choices":[{"id":1,"title":"Ch_1","checked":false,"disabled":false},{"id":2,"title":"Ch_2","checked":false,"disabled":false}]}]}]}]}`);
//survey.createModel('{"title":"Title","description":"Description","pages":[{"panels":[{"questions":[{"id":},"title":"QuestionText","type":"Text"},{"id":2,"title":"QuestionChoice","type":"Choice","choices":[{"id":1,"title":"Ch_1","checked":false,"disabled":false},{"id":2,"title":"Ch_2","checked":false,"disabled":false}]}]}]}]}');
survey.createModel('{"title":"Title","description":"Description","pages":[{"id":1,"title":"TitlePages","description":"PagesDescription","panels":[{"id":1,"title":"TitlePanels","description":"PanelsDescription","columns":1,"questions":[{"title":"QuestionText","type":"Text","placeholder":"enter"},{"id":2,"title":"QuestionChoice","type":"Choice","choices":[{"id":1,"title":"Ch_1","checked":false,"disabled":false},{"id":2,"title":"Ch_2","checked":false,"disabled":false}]},{"id":3,"title":"QuestionDate","type":"Date"},{"id":4,"title":"QuestionSelect","type":"Select","selects":[{"id":1,"title":"S_1","checked":false,"selected":false},{"id":2,"title":"S_2","checked":false,"selected":false}]},{"id":5,"title":"QuestionNumber","type":"Number"}]}]}]}');
console.log(survey);
//console.log(survey.getModel().pages[0].panels[0].questions[1].getValue());
//survey.getModel().pages[0].panels[0].questions[1].setValue('answer');
//console.log(survey.getModel().pages[0].panels[0].questions[1].setFieldByName('title', 'texttt', 0));

survey.getModel().pages[0].panels[0].questions[1].setFieldByName('title', 'texttt', 1);
console.log(survey.getModel().pages[0].panels[0].questions[1]);
//survey.getModel().pages[0].panels[0].questions[2].setValue('answer');
// survey.getModel().pages[0].panels[0].questions[2].setValue('02.01.2024');
// survey.getModel().pages[0].panels[0].questions[2].setValue('02.01.2024');
// console.log(survey.getModel().pages[0].panels[0].questions[2]);

// const objSurvey = dataManager.stringToJSON('{"title":"Title","description":"Description","pages":[{"id":1,"title":"TitlePages","description":"PagesDescription","panels":[{"id":1,"title":"TitlePanels","description":"PanelsDescription","columns":1,"questions":[{"id":1,"title":"QuestionText","type":"Text","placeholder":"enter"},{"id":2,"title":"QuestionChoice","type":"Choice","choices":[{"id":1,"title":"Ch_1","checked":false,"disabled":false},{"id":2,"title":"Ch_2","checked":false,"disabled":false}]},{"id":3,"title":"QuestionDate","type":"Date"},{"id":4,"title":"QuestionSelect","type":"Select","selects":[{"id":1,"title":"S_1","checked":false,"selected":false},{"id":2,"title":"S_2","checked":false,"selected":false}]},{"id":5,"title":"QuestionNumber","type":"Number"}]}]}]}');
// console.log(objSurvey);