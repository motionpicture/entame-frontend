/**
 * AppComponent
 */
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UtilService } from '../../services/util/util.service';
// import { environment } from '../../../environments/environment';

// declare const ga: Function;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    public isLoading: boolean;

    constructor(
        private router: Router,
        private util: UtilService
    ) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                // Googleアナリティクス pageview
                // try {
                //     ga('create', environment.ANALYTICS_ID, 'auto');
                //     ga('set', 'page', event.urlAfterRedirects);
                //     ga('send', 'pageview');
                // } catch (err) {
                //     console.error(err);
                // }
            }
        });
    }

    /**
     * 初期化
     * @method ngOnInit
     */
    public async ngOnInit() {
        this.isLoading = true;
        await this.util.imageLoader().catch((err) => {
            console.error(err);
        });
        await this.util.sleep(1000);
        this.isLoading = false;
    }
}
