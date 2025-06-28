import { makeAutoObservable } from 'mobx';

class CounterStore {
    count = 3;

    get total() {
        return this.count * 2;
    }

    constructor() {
        // makeObservable(this, {
        //     count: observable,
        //     increment: action,
        //     decrement: action,
        //     total: computed
        // });
        makeAutoObservable(this)
    }
    
    increment = (value: number) => {
        this.count += value;
    }

    decrement = (value: number) => {
        this.count -= value;
    }
}

export default new CounterStore()