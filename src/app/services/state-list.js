import ngCore from "@angular/core";
import _ from "lodash";
import { STATES } from "../mocks/state-list.mock";

class StateListService {
    constructor() {
    }
    getStates() {
        return Promise.resolve(STATES);
    }
    getStatesSlowly() {
        return new Promise((resolve, reject) => {
            setTimeout(() => { resolve(STATES);}, 2000)
        });
    }
    getState(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                var state = _.find(STATES, {'abbreviation' : id});
                console.log(id, state);
                resolve(state);
            }, 2000)
        });
    }
}


StateListService.annotations = new ngCore.Injectable();


export default StateListService;