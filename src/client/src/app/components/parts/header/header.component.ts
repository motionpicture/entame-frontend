import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

interface IPage {
    url: string;
    title: string;
    prev: null | string;
}

/**
 * ページ情報
 * @const pages
 */
const pages: IPage[] = [
    { url: '/', title: 'TOP', prev: null },
    { url: '/coin', title: 'エンタメコイン', prev: '/' },
    { url: '/coin/payment/complete', title: 'エンタメコイン入金', prev: '/coin' },
    { url: '/coin/payment/input', title: 'エンタメコイン入金', prev: '/coin/payment/select' },
    { url: '/coin/payment/select', title: 'エンタメコイン入金', prev: '/coin' },
    { url: '/point-card', title: 'ポイント＆カード', prev: '/' },
    { url: '/point-card/transfer/complete', title: 'ポイント移動', prev: '/point-card' },
    { url: '/point-card/transfer/input', title: 'ポイント移動', prev: '/point-card' }
];

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

    public page: IPage;
    public isMenuOpen: boolean;

    constructor(
        private router: Router
    ) { }

    /**
     * 初期化
     * @method ngOnInit
     */
    public ngOnInit() {
        this.isMenuOpen = false;
        this.changePage(this.router.url);
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.changePage(event.url);
            }
        });
    }

    /**
     * メニューを開く
     * @method menuOpen
     */
    public menuOpen() {
        this.isMenuOpen = true;
    }

    /**
     * メニューを閉じる
     * @method menuClose
     */
    public menuClose() {
        this.isMenuOpen = false;
    }

    /**
     * ページ変更
     * @method changePage
     */
    private changePage(url: string): void {
        const page = pages.find((value) => {
            return (value.url === url);
        });
        if (page === undefined) {
            this.page = { url: '', title: 'NOT FOUND', prev: '/' };

            return;
        }
        this.page = page;
    }
}
