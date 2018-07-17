import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

    constructor(
        private http: HttpClient
    ) { }

    public async sleep(time: number) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, time);
        });
    }

    public async imageLoader() {
        const url = '/api/assets/getImages';
        const options = {
            headers: new HttpHeaders({
                'Pragma': 'no-cache',
                'Cache-Control': 'no-cache',
                'If-Modified-Since': new Date(0).toUTCString()
            })
        };
        const result = await this.http.get<{
            dir: string;
            files: string[];
        }>(url, options).toPromise();

        const pathList = result.files.map((file) => {
            return `${result.dir}/${file}`;
        });

        for (const path of pathList) {
            const image = new Image();
            image.src = path;
        }
    }

}
