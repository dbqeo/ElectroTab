import { Widget } from './widget';

 /**Array containing all declared widgets. 
    * Allowed variables include `id`, `name`, `template`, `menuTemplate` (optional), `height` (optional), `width` (optional), `defaultSetting` (optional). */
export const WIDGETS : Widget[] = 
[

    {
        id: -1,
        name: "Invalid",
        hidden: true,
        template:
        `<div class="red-text">Invalid ID!</div>`
    },

    {
        id: 0,
        name: "Get Started",
        height: 2,
        width: 2,
        hidden: true,
        template:
        `<img src="../../../assets/images/favicon.png" alt="" class="responsive-img size" />
            <h2 class="center-align" [ngClass] = "(authService.getSetting('modifier') === 'dark' || authService.getSetting('color') === 'black') ? 'white-text' : ''" > Welcome to ElectroTab! </h2>
            <button class="btn-large waves-effect waves-light center-align {{authService.getSetting('color')}}" type="submit" name="action" [routerLink]="['/customize/grid']"> Start Customizing</button>
        `
    },

    {
        id: 1,
        name: "ElectroTab Logo",
        icon: 'favicon.png',
        template: `
        <img src="../../../assets/images/favicon.png" alt="" class="responsive-img" />
        `
    },

    {
        id: 2,
        name: "Search Bar",
        width: 5,
        icon: 'search-icon.png',
        defaultSetting: 'Google',
        template: `
        <div id="searchform">
            <div class="input-field white center-align z-depth-2 card">
                <input #search id="search" ng-focus="true" (keyup.enter)="searchFor(search.value)" type="search" class="flow-text" placeholder="{{item.setting}} Search" required autofocus>
                <label class="label-icon" for="search" id="search-label"><i class="material-icons">search</i></label>
                <i id="search-label" class="material-icons">close</i>
            </div>
        </div>
        `,
        menuTemplate: `
        <form>
            <p *ngFor="let engine of engines">
                <input name="engineChoose" type="radio" id="{{engine + random}}" (click)="item.setting = engine" [checked]="engine === item.setting"/>
                <label for="{{engine + random}}" class="black-text">{{engine}}</label>
            </p>
        </form>`
    },

    {
        id: 3,
        name: "Clock",
        icon: 'clock.png',
        defaultSetting: 'AnalogWhite',
        template: `
        <!-- Green -->
        <iframe *ngIf="item.setting === 'AnalogGreen'" src="http://free.timeanddate.com/clock/i5u1qpwv/n283/szw160/szh160/hoc090/hbw4/hfc0c0/cf100/hnc0c0/fas20/facfff/fdi86/mqcfff/mqs2/mql3/mqw4/mqd70/mhcfff/mhs2/mhl3/mhw4/mhd70/mmv0/hhcfff/hhs2/hmcfff/hms2" frameborder="0" width="160" height="160"></iframe>
        <!-- Digital Blue -->
        <iframe  *ngIf="item.setting === 'DigitalBlue'" src="http://free.timeanddate.com/clock/i5u1qpwv/n283/fs16/fc06f/tc0ff/pc9ff/ftb/pa8/tt0/tw1/th1/ta1/tb4" frameborder="0" width="208" height="52"></iframe>
        <!-- White -->
        <iframe  *ngIf="item.setting === 'AnalogWhite'" src="http://free.timeanddate.com/clock/i5u1qpwv/n283/szw160/szh160/cf100/hncfff" frameborder="0" width="160" height="160"></iframe>
        `,
        menuTemplate: `
        <form>
            <p *ngFor="let clock of clocks">
                <input name="clockChoose" type="radio" id="{{clock + random}}" (click)="item.setting = clock" [checked]="clock === item.setting"/>
                <label for="{{clock + random}}" class="black-text">{{clock}}</label>
            </p>
        </form>`
    },

    {
        id: 4,
        name: "Speed Dial",
        icon: 'shortcut.png',
        template:`
        <div *ngIf="!item.setting" >
            <img src="../../../assets/images/favicon.png" alt="" class="responsive-img size" />
            <h2 class="center-align" [ngClass] = "(authService.getSetting('modifier') === 'dark' || authService.getSetting('color') === 'black') ? 'white-text' : ''" > ElectroTab SpeedDial </h2>
            <button class="btn-large waves-effect waves-light center-align {{authService.getSetting('color')}}" type="submit" name="action" (click)="openDialog()"> Set URL</button>
        </div>

        <div *ngIf="item.setting" (click)="navigate(item.setting)" class="fit">
            <div class="card horizontal fit" [ngClass]="(authService.getSetting('color') !== 'none' || authService.getSetting('color') === 'black') ? 'white' : authService.getSetting('color') + ' lighten-4'">
                <div class="card-content child">
                    <img id="p2i" class="responsive-img valign-wrapper" [src]=getURL(item.setting) />
                    <span class="webName">{{item.setting}}</span>
                </div>
            </div>
            
        </div>
        `,
        menuTemplate: `
        <div class="padded">
            <a class="waves-effect waves-light btn {{authService.getSetting('color')}}" (click)="openDialog()">Change URL</a>
            <ul>
            <li *ngIf="url">
                Your URL: <i>{{url}}</i>
            </li>
            </ul>
        `
    },


]
