import { ISurveyModel } from "../model/ISurveyModel";

class Survey {
    public model: ISurveyModel
    
    public fromJSONString() {
        const data: string = JSON.stringify(this.model);
        console.log(data);
    }

    public fromStringJSON(data: string) {
        const tmp = JSON.parse(this.model);
        console.log(tmp);
    }

}