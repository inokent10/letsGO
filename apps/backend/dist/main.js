/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(3);
const app_controller_1 = __webpack_require__(4);
const app_service_1 = __webpack_require__(5);
const app_repository_1 = __webpack_require__(6);
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
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(3);
const app_service_1 = __webpack_require__(5);
const helpers_1 = __webpack_require__(12);
const country_rdo_1 = __webpack_require__(17);
const itinerary_dto_1 = __webpack_require__(19);
const user_rdo_1 = __webpack_require__(22);
const app_query_dto_1 = __webpack_require__(23);
const users_with_pagination_rdo_1 = __webpack_require__(24);
const swagger_1 = __webpack_require__(18);
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
    showUsersCards(query) {
        const paginatedUsers = this.appService.getUserCards(query);
        return (0, helpers_1.fillDto)(users_with_pagination_rdo_1.UsersWithPagaintionRdo, paginatedUsers);
    }
};
exports.AppController = AppController;
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Отправлен список стран', type: country_rdo_1.CountryRdo }),
    (0, common_1.Get)('/countries'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getCountries", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 201, description: 'План маршрута успешно сохранён', type: user_rdo_1.UserRdo }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Ошибка валидации отправленных данных' }),
    (0, swagger_1.ApiBody)({ type: itinerary_dto_1.ItineraryDto }),
    (0, common_1.Post)('/itinerary'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof itinerary_dto_1.ItineraryDto !== "undefined" && itinerary_dto_1.ItineraryDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof user_rdo_1.UserRdo !== "undefined" && user_rdo_1.UserRdo) === "function" ? _c : Object)
], AppController.prototype, "uploadItinerary", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Отправлен список карточек', type: users_with_pagination_rdo_1.UsersWithPagaintionRdo }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Ошибка валидации фильтров' }),
    (0, common_1.Get)('/catalog'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof app_query_dto_1.AppQueryDto !== "undefined" && app_query_dto_1.AppQueryDto) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "showUsersCards", null);
exports.AppController = AppController = __decorate([
    (0, swagger_1.ApiTags)('app'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
const common_1 = __webpack_require__(3);
const app_repository_1 = __webpack_require__(6);
const dayjs = __webpack_require__(16);
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
        console.log('dayjs(dto.startDate).isAfter(dto.finishDate)', dayjs(dto.startDate).isAfter(dto.finishDate));
        if (dayjs(dto.startDate).isBefore(dayjs(Date.now()))) {
            status = false;
            messages.push('Дата начала путешествия уже наступила или уже в прошлом');
        }
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
    getUserCards(query) {
        return this.repository.getUsers(query);
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_repository_1.AppRepository !== "undefined" && app_repository_1.AppRepository) === "function" ? _a : Object])
], AppService);


/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
const data_generation_1 = __webpack_require__(7);
const common_1 = __webpack_require__(3);
const settings_1 = __webpack_require__(10);
const node_fs_1 = __webpack_require__(15);
let AppRepository = class AppRepository {
    users = [];
    countries = [];
    constructor() {
        const limit = 100;
        const countries = this.getCountries();
        this.users = (0, data_generation_1.userCardGenerator)(limit, countries);
    }
    filterUsers(query) {
        return this.users.filter((user) => {
            if (query.hobby && !user.hobby.some((item) => query.hobby?.includes(item))) {
                return false;
            }
            if (query.music && !user.music.some((item) => query.music?.includes(item))) {
                return false;
            }
            if (query.meal && !(user.meal === query.meal)) {
                return false;
            }
            if (query.transport && !user.transport.some((item) => query.transport?.includes(item))) {
                return false;
            }
            if (query.levelMin && !(user.level >= query.levelMin)) {
                return false;
            }
            if (query.levelMax && !(user.level <= query.levelMax)) {
                return false;
            }
            return true;
        });
    }
    getUsers(query) {
        console.log('query', query);
        const limit = query?.limit ?? settings_1.DEFAULT_CARDS_PER_PAGE;
        const count = query?.count ?? limit ?? settings_1.DEFAULT_CARDS_PER_PAGE;
        const page = query?.page ?? settings_1.DEFAULT_PAGE_NUMBER;
        const take = limit * page - count;
        const filteredUsers = (query) ? this.filterUsers(query) : this.users;
        const slicedUsers = filteredUsers.slice(take, limit * page);
        console.log('filteredUsers', filteredUsers);
        console.log(take, limit * page);
        return {
            entities: slicedUsers,
            totalPages: Math.ceil(filteredUsers.length / limit),
            currentPage: page,
            totalItems: filteredUsers.length,
            itemsPerPage: limit,
        };
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
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.userCardGenerator = void 0;
var user_card_generator_1 = __webpack_require__(8);
Object.defineProperty(exports, "userCardGenerator", ({ enumerable: true, get: function () { return user_card_generator_1.userCardGenerator; } }));


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.userCardGenerator = void 0;
const faker_1 = __webpack_require__(9);
const settings_1 = __webpack_require__(10);
const helpers_1 = __webpack_require__(12);
const common_1 = __webpack_require__(13);
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
/* 9 */
/***/ ((module) => {

module.exports = require("@faker-js/faker");

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DEFAULT_PAGE_NUMBER = exports.USER_MAX_LEVEL = exports.DEFAULT_CARDS_PER_PAGE = exports.Hobby = exports.Vehicle = exports.Meal = exports.MusicStyle = void 0;
var common_settings_1 = __webpack_require__(11);
Object.defineProperty(exports, "MusicStyle", ({ enumerable: true, get: function () { return common_settings_1.MusicStyle; } }));
Object.defineProperty(exports, "Meal", ({ enumerable: true, get: function () { return common_settings_1.Meal; } }));
Object.defineProperty(exports, "Vehicle", ({ enumerable: true, get: function () { return common_settings_1.Vehicle; } }));
Object.defineProperty(exports, "Hobby", ({ enumerable: true, get: function () { return common_settings_1.Hobby; } }));
Object.defineProperty(exports, "DEFAULT_CARDS_PER_PAGE", ({ enumerable: true, get: function () { return common_settings_1.DEFAULT_CARDS_PER_PAGE; } }));
Object.defineProperty(exports, "USER_MAX_LEVEL", ({ enumerable: true, get: function () { return common_settings_1.USER_MAX_LEVEL; } }));
Object.defineProperty(exports, "DEFAULT_PAGE_NUMBER", ({ enumerable: true, get: function () { return common_settings_1.DEFAULT_PAGE_NUMBER; } }));


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vehicle = exports.Meal = exports.Hobby = exports.MusicStyle = exports.DEFAULT_PAGE_NUMBER = exports.USER_MAX_LEVEL = exports.DEFAULT_CARDS_PER_PAGE = void 0;
exports.DEFAULT_CARDS_PER_PAGE = 4;
exports.USER_MAX_LEVEL = 100;
exports.DEFAULT_PAGE_NUMBER = 1;
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
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fillDto = exports.getRandomInteger = void 0;
var common_1 = __webpack_require__(13);
Object.defineProperty(exports, "getRandomInteger", ({ enumerable: true, get: function () { return common_1.getRandomInteger; } }));
Object.defineProperty(exports, "fillDto", ({ enumerable: true, get: function () { return common_1.fillDto; } }));


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRanndomElement = exports.getRandomInteger = void 0;
exports.fillDto = fillDto;
const class_transformer_1 = __webpack_require__(14);
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
/* 14 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),
/* 16 */
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
const swagger_1 = __webpack_require__(18);
const class_transformer_1 = __webpack_require__(14);
class CountryRdo {
    name;
    location;
}
exports.CountryRdo = CountryRdo;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Название страны', }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CountryRdo.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Континент', }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CountryRdo.prototype, "location", void 0);


/***/ }),
/* 18 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
const class_transformer_1 = __webpack_require__(14);
const class_validator_1 = __webpack_require__(20);
const user_itinerary_dto_1 = __webpack_require__(21);
const swagger_1 = __webpack_require__(18);
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
    (0, swagger_1.ApiProperty)({ description: 'Количество попутчиков', }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    __metadata("design:type", Number)
], ItineraryDto.prototype, "tripmatesCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Продолжительность путешествия', }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    __metadata("design:type", Number)
], ItineraryDto.prototype, "tripDuration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Флаг с детьми или нет', }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Transform)(({ value }) => {
        if (value === 'true' || value === 'false') {
            return value === 'true';
        }
    }),
    __metadata("design:type", Boolean)
], ItineraryDto.prototype, "isChildrenAccepted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Дата отправки в формате ISO 8601', }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], ItineraryDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Дата окончания в формате ISO 8601', }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], ItineraryDto.prototype, "finishDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'План маршрута', }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => user_itinerary_dto_1.UserItineraryDto),
    __metadata("design:type", Array)
], ItineraryDto.prototype, "itinerary", void 0);


/***/ }),
/* 20 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
const swagger_1 = __webpack_require__(18);
const class_transformer_1 = __webpack_require__(14);
const class_validator_1 = __webpack_require__(20);
class UserItineraryDto {
    country;
    description;
    position;
}
exports.UserItineraryDto = UserItineraryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Название страны для посещения', }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserItineraryDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Описание плана путешествия', }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UserItineraryDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Порядковый номер страны в выбранном маршруте', }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    __metadata("design:type", Number)
], UserItineraryDto.prototype, "position", void 0);


/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.UserRdo = void 0;
const class_transformer_1 = __webpack_require__(14);
const country_rdo_1 = __webpack_require__(17);
const swagger_1 = __webpack_require__(18);
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
}
exports.UserRdo = UserRdo;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserRdo.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Полное имя человека', }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserRdo.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Список стран, которые готов посетить человек', }),
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => country_rdo_1.CountryRdo),
    __metadata("design:type", Array)
], UserRdo.prototype, "countries", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Предпочитаемые виды передвижения', }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], UserRdo.prototype, "transport", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Предпочитаемая музыка', }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], UserRdo.prototype, "music", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Предпочитаемая еда', }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserRdo.prototype, "meal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Список хобби', }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], UserRdo.prototype, "hobby", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], UserRdo.prototype, "level", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Список произвольных тегов', }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], UserRdo.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Количество лайков профиля', }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], UserRdo.prototype, "likes", void 0);


/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.AppQueryDto = void 0;
const swagger_1 = __webpack_require__(18);
const settings_1 = __webpack_require__(10);
const class_transformer_1 = __webpack_require__(14);
const class_validator_1 = __webpack_require__(20);
class AppQueryDto {
    limit;
    count;
    page;
    hobby;
    music;
    meal;
    transport;
    levelMin;
    levelMax;
}
exports.AppQueryDto = AppQueryDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Количество карточек на странице',
        default: 4
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => (parseInt(value))),
    __metadata("design:type", Number)
], AppQueryDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Количество запрашиваемых карточек',
        default: 'Совпадает с limit'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => (parseInt(value))),
    __metadata("design:type", Number)
], AppQueryDto.prototype, "count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Номер страницы',
        default: 1
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => (parseInt(value))),
    __metadata("design:type", Number)
], AppQueryDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Список или строка с указанием хобби', }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_transformer_1.Transform)(({ value }) => ((0, class_validator_1.isString)(value) ? [value,] : value)),
    (0, class_validator_1.IsIn)(Object.values(settings_1.Hobby), { each: true }),
    __metadata("design:type", Array)
], AppQueryDto.prototype, "hobby", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Список или строка с указанием предпочитаемого стиля музыки', }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_transformer_1.Transform)(({ value }) => ((0, class_validator_1.isString)(value) ? [value,] : value)),
    (0, class_validator_1.IsIn)(Object.values(settings_1.MusicStyle), { each: true }),
    __metadata("design:type", Array)
], AppQueryDto.prototype, "music", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Предпочитаемый тип питания', }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(Object.values(settings_1.Meal)),
    __metadata("design:type", String)
], AppQueryDto.prototype, "meal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Список или строка с указанием возможных способов передвижения', }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_transformer_1.Transform)(({ value }) => ((0, class_validator_1.isString)(value) ? [value,] : value)),
    (0, class_validator_1.IsIn)(Object.values(settings_1.Vehicle), { each: true }),
    __metadata("design:type", Array)
], AppQueryDto.prototype, "transport", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Минимальный уровень. Значение не больше 100', }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Max)(settings_1.USER_MAX_LEVEL),
    (0, class_transformer_1.Transform)(({ value }) => (parseInt(value, 10))),
    __metadata("design:type", Number)
], AppQueryDto.prototype, "levelMin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Максимальный уровень. Значение не больше 100', }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Max)(settings_1.USER_MAX_LEVEL),
    (0, class_transformer_1.Transform)(({ value }) => (parseInt(value, 10))),
    __metadata("design:type", Number)
], AppQueryDto.prototype, "levelMax", void 0);


/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.UsersWithPagaintionRdo = void 0;
const class_transformer_1 = __webpack_require__(14);
const user_rdo_1 = __webpack_require__(22);
const swagger_1 = __webpack_require__(18);
class UsersWithPagaintionRdo {
    entities;
    totalPages;
    currentPage;
    totalItems;
    itemsPerPage;
}
exports.UsersWithPagaintionRdo = UsersWithPagaintionRdo;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Список карточек', }),
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => user_rdo_1.UserRdo),
    __metadata("design:type", Array)
], UsersWithPagaintionRdo.prototype, "entities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Общее количество страниц для выбранного лимита', }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], UsersWithPagaintionRdo.prototype, "totalPages", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Текущая страница', }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], UsersWithPagaintionRdo.prototype, "currentPage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Общее количество карточек соответствующих фильтру', }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], UsersWithPagaintionRdo.prototype, "totalItems", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Количество карточек на страницу', }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], UsersWithPagaintionRdo.prototype, "itemsPerPage", void 0);


/***/ })
/******/ 	]);
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const app_module_1 = __webpack_require__(2);
const common_1 = __webpack_require__(3);
const swagger_1 = __webpack_require__(18);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('LetsGO API')
        .setDescription('Сервис для поиска попутчиков в путешествия')
        .setVersion('1.0')
        .addTag('app')
        .build();
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, documentFactory);
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true, skipMissingProperties: true }));
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

})();

/******/ })()
;