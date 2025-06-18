/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./libs/data-generation/src/index.ts":
/*!*******************************************!*\
  !*** ./libs/data-generation/src/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.userCardGenerator = void 0;
var user_card_generator_1 = __webpack_require__(/*! ./user-card-generator */ "./libs/data-generation/src/user-card-generator.ts");
Object.defineProperty(exports, "userCardGenerator", ({ enumerable: true, get: function () { return user_card_generator_1.userCardGenerator; } }));


/***/ }),

/***/ "./libs/data-generation/src/user-card-generator.ts":
/*!*********************************************************!*\
  !*** ./libs/data-generation/src/user-card-generator.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.userCardGenerator = void 0;
const faker_1 = __webpack_require__(/*! @faker-js/faker */ "@faker-js/faker");
const settings_1 = __webpack_require__(/*! backendSettings/settings */ "./libs/settings/src/index.ts");
const helpers_1 = __webpack_require__(/*! helpers/helpers */ "./libs/helpers/src/index.ts");
const common_1 = __webpack_require__(/*! helpers/helpers/common */ "./libs/helpers/src/common.ts");
const userCardGenerator = (cardsCount, countries) => {
    const cards = [];
    for (let i = 0; i < cardsCount; i++) {
        const newUser = genearteUser(countries);
        cards.push(newUser);
    }
    return cards;
};
exports.userCardGenerator = userCardGenerator;
const genearteUser = (countries) => {
    return {
        id: faker_1.fakerRU.string.uuid(),
        name: faker_1.fakerRU.person.fullName(),
        countries: faker_1.fakerRU.helpers.arrayElements(countries, { min: 1, max: 5 }),
        hobby: faker_1.fakerRU.helpers.arrayElements(Object.values(settings_1.Hobby), { min: 0, max: 3 }),
        transport: faker_1.fakerRU.helpers.arrayElements(Object.values(settings_1.Vehicle), { min: 1, max: 4 }),
        music: faker_1.fakerRU.helpers.arrayElements(Object.values(settings_1.MusicStyle), { min: 0, max: 3 }),
        meal: (0, common_1.getRanndomElement)(Object.values(settings_1.Meal)),
        level: (0, helpers_1.getRandomInteger)(1, 100),
        tags: faker_1.fakerRU.lorem.words({ min: 0, max: 3 }).split(' '),
        likes: (0, helpers_1.getRandomInteger)(1, 9999),
    };
};


/***/ }),

/***/ "./libs/helpers/src/common.ts":
/*!************************************!*\
  !*** ./libs/helpers/src/common.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRanndomElement = exports.getRandomInteger = void 0;
exports.fillDto = fillDto;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const getRandomInteger = (a, b) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
};
exports.getRandomInteger = getRandomInteger;
const getRanndomElement = (arr) => arr[(0, exports.getRandomInteger)(0, arr.length - 1)];
exports.getRanndomElement = getRanndomElement;
function fillDto(DtoClass, plainObject, options) {
    return (0, class_transformer_1.plainToInstance)(DtoClass, plainObject, { excludeExtraneousValues: true, ...options, });
}


/***/ }),

/***/ "./libs/helpers/src/index.ts":
/*!***********************************!*\
  !*** ./libs/helpers/src/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fillDto = exports.getRandomInteger = void 0;
var common_1 = __webpack_require__(/*! ./common */ "./libs/helpers/src/common.ts");
Object.defineProperty(exports, "getRandomInteger", ({ enumerable: true, get: function () { return common_1.getRandomInteger; } }));
Object.defineProperty(exports, "fillDto", ({ enumerable: true, get: function () { return common_1.fillDto; } }));


/***/ }),

/***/ "./libs/settings/src/common.settings.ts":
/*!**********************************************!*\
  !*** ./libs/settings/src/common.settings.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vehicle = exports.Meal = exports.Hobby = exports.MusicStyle = exports.DEFAULT_CARDS_PER_PAGE = void 0;
exports.DEFAULT_CARDS_PER_PAGE = 4;
exports.MusicStyle = {
    ROCK: 'Тяжёлый рок',
    RAP: 'Русский рэп',
    DANCE: 'Евроденс',
};
exports.Hobby = {
    FITNESS: 'Спортзал',
    RAP: 'Кальян',
    LAZYBONE: 'Диван',
};
exports.Meal = {
    MEAT: 'Мясоед',
    HEALTH: 'Сидит на ПП',
    VEGAN: 'Веган-сыроед',
};
exports.Vehicle = {
    AIRPLANE: 'Самолёт',
    CAR: 'Автомобиль',
    BIKE: 'Велосипед',
    NONE: 'Пешком'
};


/***/ }),

/***/ "./libs/settings/src/index.ts":
/*!************************************!*\
  !*** ./libs/settings/src/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DEFAULT_CARDS_PER_PAGE = exports.Hobby = exports.Vehicle = exports.Meal = exports.MusicStyle = void 0;
var common_settings_1 = __webpack_require__(/*! ./common.settings */ "./libs/settings/src/common.settings.ts");
Object.defineProperty(exports, "MusicStyle", ({ enumerable: true, get: function () { return common_settings_1.MusicStyle; } }));
Object.defineProperty(exports, "Meal", ({ enumerable: true, get: function () { return common_settings_1.Meal; } }));
Object.defineProperty(exports, "Vehicle", ({ enumerable: true, get: function () { return common_settings_1.Vehicle; } }));
Object.defineProperty(exports, "Hobby", ({ enumerable: true, get: function () { return common_settings_1.Hobby; } }));
Object.defineProperty(exports, "DEFAULT_CARDS_PER_PAGE", ({ enumerable: true, get: function () { return common_settings_1.DEFAULT_CARDS_PER_PAGE; } }));


/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return b},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return a+1;case"MM":return b.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return b.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(s,u,!0);case"A":return $(s,u,!1);case"m":return String(u);case"mm":return b.s(u,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O}));

/***/ }),

/***/ "./src/app.controller.ts":
/*!*******************************!*\
  !*** ./src/app.controller.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./src/app.service.ts");
const helpers_1 = __webpack_require__(/*! helpers/helpers */ "./libs/helpers/src/index.ts");
const country_rdo_1 = __webpack_require__(/*! ./rdo/country.rdo */ "./src/rdo/country.rdo.ts");
const itinerary_dto_1 = __webpack_require__(/*! ./dto/itinerary.dto */ "./src/dto/itinerary.dto.ts");
const user_rdo_1 = __webpack_require__(/*! ./rdo/user.rdo */ "./src/rdo/user.rdo.ts");
let AppController = class AppController {
    appService;
    constructor(appService) {
        this.appService = appService;
    }
    getCountries() {
        const countries = this.appService.getCountries();
        return (0, helpers_1.fillDto)(country_rdo_1.CountryRdo, countries);
    }
    uploadItinerary(dto) {
        const users = this.appService.saveItinerary(dto);
        return (0, helpers_1.fillDto)(user_rdo_1.UserRdo, users);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)('/countries'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getCountries", null);
__decorate([
    (0, common_1.Post)('/itinerary'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof itinerary_dto_1.ItineraryDto !== "undefined" && itinerary_dto_1.ItineraryDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "uploadItinerary", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./src/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./src/app.service.ts");
const app_repository_1 = __webpack_require__(/*! ./app.repository */ "./src/app.repository.ts");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, app_repository_1.AppRepository],
    })
], AppModule);


/***/ }),

/***/ "./src/app.repository.ts":
/*!*******************************!*\
  !*** ./src/app.repository.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppRepository = void 0;
const data_generation_1 = __webpack_require__(/*! @data-generation/data-generation */ "./libs/data-generation/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const settings_1 = __webpack_require__(/*! backendSettings/settings */ "./libs/settings/src/index.ts");
const node_fs_1 = __webpack_require__(/*! node:fs */ "node:fs");
let AppRepository = class AppRepository {
    users = [];
    countries = [];
    constructor() {
        const limit = 100;
        const countries = this.getCountries();
        this.users = (0, data_generation_1.userCardGenerator)(limit, countries);
    }
    getUsers() {
        return this.users;
    }
    getCountries() {
        try {
            const data = (0, node_fs_1.readFileSync)('libs/data-generation/src/countries.json', { encoding: 'utf8' });
            const countriesJson = JSON.parse(data);
            this.countries = [...Object.values(countriesJson)];
            return this.countries;
        }
        catch (err) {
            console.log('An error occured', err);
            throw new common_1.InternalServerErrorException(err);
        }
    }
    saveItinerary(_dto) {
        return this.users.slice(0, settings_1.DEFAULT_CARDS_PER_PAGE);
    }
};
exports.AppRepository = AppRepository;
exports.AppRepository = AppRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AppRepository);


/***/ }),

/***/ "./src/app.service.ts":
/*!****************************!*\
  !*** ./src/app.service.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_repository_1 = __webpack_require__(/*! ./app.repository */ "./src/app.repository.ts");
const dayjs = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
let AppService = class AppService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    getCountries() {
        return this.repository.getCountries();
    }
    validateItinerary(dto) {
        const messages = [];
        let status = true;
        console.log('dto.startDate', dto.startDate);
        console.log('dto.finishDate', dto.finishDate);
        if (dayjs(dto.startDate).isAfter(dto.finishDate)) {
            status = false;
            messages.push('Дата начала путешествия не должна быть позже даты окончания');
        }
        if (dayjs(dto.finishDate).diff(dayjs(dto.startDate), 'day') !== dto.tripDuration) {
            status = false;
            messages.push('Указанная продолжительность путешествия не соответствует выбранным датам');
        }
        return [status, messages];
    }
    saveItinerary(dto) {
        const result = this.validateItinerary(dto);
        if (!result.at(0)) {
            throw new common_1.BadRequestException(result.at(1));
        }
        return this.repository.saveItinerary(dto);
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_repository_1.AppRepository !== "undefined" && app_repository_1.AppRepository) === "function" ? _a : Object])
], AppService);


/***/ }),

/***/ "./src/dto/itinerary.dto.ts":
/*!**********************************!*\
  !*** ./src/dto/itinerary.dto.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ItineraryDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const user_itinerary_dto_1 = __webpack_require__(/*! ./user-itinerary.dto */ "./src/dto/user-itinerary.dto.ts");
class ItineraryDto {
    tripmatesCount;
    tripDuration;
    isChildrenAccepted;
    startDate;
    finishDate;
    itinerary;
}
exports.ItineraryDto = ItineraryDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    __metadata("design:type", Number)
], ItineraryDto.prototype, "tripmatesCount", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    __metadata("design:type", Number)
], ItineraryDto.prototype, "tripDuration", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Transform)(({ value }) => {
        if (value === 'true' || value === 'false') {
            return value === 'true';
        }
    }),
    __metadata("design:type", Boolean)
], ItineraryDto.prototype, "isChildrenAccepted", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], ItineraryDto.prototype, "startDate", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], ItineraryDto.prototype, "finishDate", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => user_itinerary_dto_1.UserItineraryDto),
    __metadata("design:type", Array)
], ItineraryDto.prototype, "itinerary", void 0);


/***/ }),

/***/ "./src/dto/user-itinerary.dto.ts":
/*!***************************************!*\
  !*** ./src/dto/user-itinerary.dto.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserItineraryDto = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UserItineraryDto {
    country;
    description;
    position;
}
exports.UserItineraryDto = UserItineraryDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserItineraryDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, common_1.Optional)(),
    __metadata("design:type", String)
], UserItineraryDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    __metadata("design:type", Number)
], UserItineraryDto.prototype, "position", void 0);


/***/ }),

/***/ "./src/rdo/country.rdo.ts":
/*!********************************!*\
  !*** ./src/rdo/country.rdo.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CountryRdo = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
class CountryRdo {
    name;
    location;
}
exports.CountryRdo = CountryRdo;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CountryRdo.prototype, "name", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CountryRdo.prototype, "location", void 0);


/***/ }),

/***/ "./src/rdo/itinerary.rdo.ts":
/*!**********************************!*\
  !*** ./src/rdo/itinerary.rdo.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ItineraryRdo = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
class ItineraryRdo {
    tripmatesCount;
    tripDuration;
    isChildrenAccepted;
    startDate;
    finishDate;
    itinerary;
}
exports.ItineraryRdo = ItineraryRdo;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], ItineraryRdo.prototype, "tripmatesCount", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], ItineraryRdo.prototype, "tripDuration", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], ItineraryRdo.prototype, "isChildrenAccepted", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ItineraryRdo.prototype, "startDate", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ItineraryRdo.prototype, "finishDate", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], ItineraryRdo.prototype, "itinerary", void 0);


/***/ }),

/***/ "./src/rdo/user.rdo.ts":
/*!*****************************!*\
  !*** ./src/rdo/user.rdo.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRdo = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const itinerary_rdo_1 = __webpack_require__(/*! ./itinerary.rdo */ "./src/rdo/itinerary.rdo.ts");
const country_rdo_1 = __webpack_require__(/*! ./country.rdo */ "./src/rdo/country.rdo.ts");
class UserRdo {
    id;
    name;
    countries;
    transport;
    music;
    meal;
    hobby;
    level;
    tags;
    likes;
    itineraryRequest;
}
exports.UserRdo = UserRdo;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserRdo.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserRdo.prototype, "name", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => country_rdo_1.CountryRdo),
    __metadata("design:type", Array)
], UserRdo.prototype, "countries", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], UserRdo.prototype, "transport", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], UserRdo.prototype, "music", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserRdo.prototype, "meal", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], UserRdo.prototype, "hobby", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], UserRdo.prototype, "level", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], UserRdo.prototype, "tags", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], UserRdo.prototype, "likes", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => itinerary_rdo_1.ItineraryRdo),
    __metadata("design:type", typeof (_a = typeof itinerary_rdo_1.ItineraryRdo !== "undefined" && itinerary_rdo_1.ItineraryRdo) === "function" ? _a : Object)
], UserRdo.prototype, "itineraryRequest", void 0);


/***/ }),

/***/ "@faker-js/faker":
/*!**********************************!*\
  !*** external "@faker-js/faker" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@faker-js/faker");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/core");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("class-validator");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true, skipMissingProperties: true }));
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

})();

/******/ })()
;