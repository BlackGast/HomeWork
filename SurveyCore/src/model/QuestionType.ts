/*
Text - текстовое поле, <input type="text"/> или <textarea></textarea>.
Choice - один или группа checkbox
Select - аналог <select></select>
Date - пикер даты с календарем
Number - аналог <input type="number" />
Dropdown - выбор из выпадающего списка
Ranging - ранжирование ответов
*/
export type QuestionType = 'Text' | 'Number' | 'Choice' | 'Select' | 'Date' | 'Dropdown' | 'Ranging';