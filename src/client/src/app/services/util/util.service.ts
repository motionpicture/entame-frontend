import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

    constructor() { }

    public async sleep(time: number) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, time);
        });
    }

}
