"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Survey {
    model;
    fromJSONString() {
        const data = JSON.stringify(this.model);
        console.log(data);
    }
    fromStringJSON(data) {
        const tmp = JSON.parse(this.model);
        console.log(tmp);
    }
}
//# sourceMappingURL=Survey.js.map