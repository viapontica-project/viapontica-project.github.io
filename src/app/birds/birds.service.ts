import { Injectable, Output } from '@angular/core';
import { Bird } from "./bird.model";

export class BirdsService {
    birds: Bird[] = [
        {
            id: 1,
            name: "Черна рибарка",
            infoLink: "https://bg.wikipedia.org/wiki/%D0%A7%D0%B5%D1%80%D0%BD%D0%B0_%D1%80%D0%B8%D0%B1%D0%B0%D1%80%D0%BA%D0%B0",
            species: "Дъждосвирцоподобни",
            description: "Дължината на тялото е от 22 до 26 см. Размахът на крилата от 56 до 62 см.Главата, шията, гърдите и коремът са черни. Гърбът, кръстът, горната и долната страна на крилата и опашката са сиви. Храни се с насекоми, ракообразни, дребни рибки и земноводни. Обитава блата, рибарници и други.",
            area: "Блата, рибарници и други водоеми.",
            image: "./../assets/pictures/5-cherna-ribarka.jpg"
        },
        {
            id: 2,
            name: "Черен Щъркел",
            infoLink: "https://bg.wikipedia.org/wiki/%D0%A7%D0%B5%D1%80%D0%B5%D0%BD_%D1%89%D1%8A%D1%80%D0%BA%D0%B5%D0%BB",
            species: "Щъркелоподобни",
            description: "Дължината на тялото е от 90 до 105 см. Размахът на крилата е от 173 до 205 см. Оперението е черно, с изключение на корема, който е бял. Клюнът и краката са червени. Храни се предимно с риба, но също така с земноводни, насекоми. Обитава поречия на реки и влажни зони, богати на риба.",
            area: "Влажни зони, богати на риба.",
            image: "./../assets/pictures/165-cheren-shturkel.jpg"
        },
        {
            id: 3,
            name: "Селска лястовица",
            infoLink: "https://bg.wikipedia.org/wiki/%D0%A1%D0%B5%D0%BB%D1%81%D0%BA%D0%B0_%D0%BB%D1%8F%D1%81%D1%82%D0%BE%D0%B2%D0%B8%D1%86%D0%B0",
            species: "Врабчоподобни",
            description: "Дължината на тялото е от 17 до 21 см.Размахът на крилете й е от 32 до 35 см.Гърлото е ръждиво, гърдите и коремът са бели, а гушата е черна с ясно очертана граница. Опашката е рязко врязана. Храни се с насекоми, които улавя във въздуха. Обитава села, градове и постройки в земеделски райони. Гнездото е изградено от кал и сламки. Разположени са във вътрешността на селскостопански сгради, навеси на къщи и др. Снася от 4 до 6 яйца и има от 2 до 3 поколения годишно.",
            area: "Цялата страна, с изключение на някои високопланински райони",
            image: "./../assets/pictures/4-selska-lqstovica-vrabchopodobni.jpg"
        },
        {
            id: 4,
            name: "Малка бяла чапла",
            infoLink: "https://bg.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BB%D0%BA%D0%B0_%D0%B1%D1%8F%D0%BB%D0%B0_%D1%87%D0%B0%D0%BF%D0%BB%D0%B0",
            species: "Щъркелоподобни",
            description: "Дължината на тялото е от 55 до 65 см. Размахът на крилата е от 88 до 106 см.Изцяло бяла птица. Може да се сгреши с голямата бяла чапла. Основните различия са по-малкият размер, тъмният клюн и крака с жълти стъпала.",
            area: "Обитава блата, езера, реки, бракични водоеми и солени лагуни.",
            image: "./../assets/pictures/162-chapla.jpg"
        },
        {
            id: 5,
            name: "Пепеляв брегобегач",
            infoLink: "https://bg.wikipedia.org/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB%D1%8F%D0%B2_%D0%B1%D1%80%D0%B5%D0%B3%D0%BE%D0%B1%D0%B5%D0%B3%D0%B0%D1%87",
            species: "Дъждосвирцоподобни",
            description: "Дължина на тялото e 23 см, размахът на крилата е 58 см. Оперението е с малки сезонни и възрастови различия. Възрастните през есенно-зимния период отгоре са сиви, а отдолу белезникави. През размножителния период са с бели вежди, а краката са жълто-оранжеви. Младите наподобяват възрастните в брачно оперение, но краката са жълто-кафяви. Лесно се отличава по дългия и леко извит нагоре клюн. Биотоп: Среща се на ята по речни и соленоводни крайбрежия, понякога в смесени групи с други видове дъждосвирцови птици.",
            area: "Среща се на ята по речни и соленоводни крайбрежия, понякога в смесени групи с други видове дъждосвирцови птици.",
            image: "./../assets/pictures/166-pepelqv-bregobegach.jpg"
        },
        {
            id: 6,
            name: "Ливадна бъбрица",
            infoLink: "https://bg.wikipedia.org/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB%D1%8F%D0%B2_%D0%B1%D1%80%D0%B5%D0%B3%D0%BE%D0%B1%D0%B5%D0%B3%D0%B0%D1%87",
            species: "Врабчоподобни",
            description: "Дължината на тялото е 17 см. оперението отгоре е зеленикавокафяво с многобройни удължени петна, които по гърба образуват ивици, гърлото е бяло, гушата и гърдите са изпъстрени с черни капковидни петна, краката са кафяви. Среща се в ливади и други открити пространства.",
            area: "Среща се в ливади и други открити пространства.",
            image: "./../assets/pictures/6-livadna-b.jpg"
        },
        {
            id: 7,
            name: "Ушата чучулига",
            infoLink: "https://bg.wikipedia.org/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB%D1%8F%D0%B2_%D0%B1%D1%80%D0%B5%D0%B3%D0%BE%D0%B1%D0%B5%D0%B3%D0%B0%D1%87",
            species: "Врабчоподобни",
            description: "Води наземен начин на живот, въпреки че лети добре. Храни се предимно с насекоми, които търси по земята. Гнезди, подобно на другите Чучулиги, направо на земята. Снася 2–5 изпъстрени с кафяви и сиви петънца яйца. Малките, подобно на останалите видове Чучулиги, се излюпват покрити с рядък пух и напълно безпомощни, но се развиват изключително бързо и след около 10 дни напускат гнездото. Родителите ги хранят с насекоми.",
            area: "Oткрити равнинни и планински местности",
            image: "./../assets/pictures/7 ушата чучулига.jpg"
        },
        {
            id: 8,
            name: "Кос",
            infoLink: "https://bg.wikipedia.org/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB%D1%8F%D0%B2_%D0%B1%D1%80%D0%B5%D0%B3%D0%BE%D0%B1%D0%B5%D0%B3%D0%B0%D1%87",
            species: "Врабчоподобни",
            description: "Представителите на вида са с дължина от около 23,5 до 29 cm, имат дълга опашка и тежат 80 – 125 грама. Възрастният мъжки е с лъскаво черно оперение, чернокафеникави крака, оранжево околоочие и оранжев клюн. Клюнът потъмнява до известна степен през зимата. Възрастната женска е с опушенокафява окраска, тъп жълтеникавокафяв клюн, кафеникавобяла гушка и слаба петнистост по гърдите. Младият екземпляр е подобен на женския, но бледите петънца покриват и по-горните му части.",
            area: "Почти навсякъде, където успее да намери храна и подходящи условия за гнездене и размножаване.",
            image: "./../assets/pictures/8-kos.jpg"
        },
        {
            id: 9,
            name: "Воден кос",
            infoLink: "https://bg.wikipedia.org/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB%D1%8F%D0%B2_%D0%B1%D1%80%D0%B5%D0%B3%D0%BE%D0%B1%D0%B5%D0%B3%D0%B0%D1%87",
            species: "Врабчоподобни",
            description: "Гнездовият период започва през април. Гнездото се прави в дупки между камъни, под туфи по стръмни брегове, в цепнатини по зидове и мостове. То е изградено от клончета, трева, сухи листа, мъх и лишеи, а вътре е застлано с листа. Снася 4 – 7 чисто бели яйца. Женската мъти яйцата сама от 15 до 18 дни. Малките остават в гнездото 19 – 24 дни и се изхранват от двамата родители. След напускане на гнездото те дълго време се движат на ято. Отглежда по две поколения годишно. През август семействата се разпадат и през зимните месеци се срещат отделни птици.",
            area: "Среща се в планините до алпийската зона. През зимата слиза ниско в предпланинските склонове",
            image: "./../assets/pictures/9-vodenkos.jpg"
        },
        {
            id: 10,
            name: "Розов скорец",
            infoLink: "https://bg.wikipedia.org/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB%D1%8F%D0%B2_%D0%B1%D1%80%D0%B5%D0%B3%D0%BE%D0%B1%D0%B5%D0%B3%D0%B0%D1%87",
            species: "Врабчоподобни",
            description: "Дължината на тялото на розовия скорец е 19 – 22 см. На цвят той е розов, с черни глава, крила и опашка. При женската цветовете са по-малко ярки. Розовият скорец е разпространен в Средиземноморието, Югоизточна Европа, Предна и Средна Азия. През зимата достига до Индия. Живее в многобройни колонии, достигащи хиляди, а в миналото – и стотици хиляди птици. Предпочита да гнезди сред скалисти сипеи. Тъй като основната храна на розовия скорец са различни видове прелетни скакалци.",
            area: "Обитава степи и сухи пасища с каменисти хълмове, скални сипеи и стени и кариери.",
            image: "./../assets/pictures/10-rozov.jpg"
        },
        {
            id: 11,
            name: "Черна каня",
            infoLink: "https://bg.wikipedia.org/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB%D1%8F%D0%B2_%D0%B1%D1%80%D0%B5%D0%B3%D0%BE%D0%B1%D0%B5%D0%B3%D0%B0%D1%87",
            species: "Ястребоподобни",
            description: "Черната каня е малко контрастна, почти еднакво оцветена в тъмнокафяво. Средно голяма граблива птица.Дължината на тялото e 55-59 cm. Размаха на крилете e135-155 cm. Теглото е 900 гр, като женските са по-едри.Излюпването не става едновременно, а през 3-4 дни, дори и до 8 дни.",
            area: "Среща се в равнинни гори в открити пространства.",
            image: "./../assets/pictures/12-chernakanq.jpg"
        },
        {
            id: 12,
            name: "Египетски лешояд",
            infoLink: "https://bg.wikipedia.org/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB%D1%8F%D0%B2_%D0%B1%D1%80%D0%B5%D0%B3%D0%BE%D0%B1%D0%B5%D0%B3%D0%B0%D1%87",
            species: "Ястребоподобни",
            description: "Дължината на тялото е 60 – 85 cm, а размахът на крилете от 150 до 170 cm. Теглото му достига 1,6 – 2,5 kg. Разпространен е в Европа (включително България), Африка и Азия. Обитава степи, полупустини, пустини, скалисти райони (подходящи за гнездата му) и всякакъв тип равнини. Понякога в близост до сметища. Лешоядите са санитарите на природата и египетският лешояд не прави изключение. Храни се предимно с мърша, но понякога улавя дребни гръбначни и безгръбначни като жаби, охлюви и всякакъв вид яйца.",
            area: "Обитава степи, полупустини, пустини, скалисти райони и всякакъв тип равнини.",
            image: "./../assets/pictures/13-egypt-leshoqd.jpg"
        },
        {
            id: 13,
            name: "Розов пеликан",
            infoLink: "https://bg.wikipedia.org/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB%D1%8F%D0%B2_%D0%B1%D1%80%D0%B5%D0%B3%D0%BE%D0%B1%D0%B5%D0%B3%D0%B0%D1%87",
            species: "Пеликаноподобни",
            description: "Гнездата и малките им колонии са сред тръстиките в езера, блата и делти на реки. Гнездото е голямо и се намира върху туфи тръстика или малки островчета, често в близост до гнездата на други видове. Снася 2-3 яйца. Възрастният розов пеликан в началото на размножителния период е с нежно розово оперение.",
            area: "Обитава блата, езера, рибарници, язовири и полусолени водоеми.",
            image: "./../assets/pictures/15 розов пеликан.jpg"
        },
        {
            id: 14,
            name: "Средна бекасина",
            infoLink: "https://bg.wikipedia.org/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB%D1%8F%D0%B2_%D0%B1%D1%80%D0%B5%D0%B3%D0%BE%D0%B1%D0%B5%D0%B3%D0%B0%D1%87",
            species: "Дъждосвирцоподобни",
            description: "Дължината на тялото e 26 см, Размах на крилата: 46 см. Оперение: Възрастните и младите през цялата година наподобяват голямата бекасина по окраската на главата и горната част на тялото; гърлото е белезникаво, а гушата – жълтеникава с дребни кафяви щрихи; останалото оперение отдолу е бяло с тъмнокафяви препаски по слабините; крайните опашни пера са кафяви със светли върхове. ",
            area: "При миграции и зимуване се среща край блата, мочурища, разливи на реки.",
            image: "./../assets/pictures/17 Средна бекасина.jpg"
        },
        {
            id: 15,
            name: "Тъмногръд брегобегач",
            infoLink: "https://bg.wikipedia.org/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB%D1%8F%D0%B2_%D0%B1%D1%80%D0%B5%D0%B3%D0%BE%D0%B1%D0%B5%D0%B3%D0%B0%D1%87",
            species: "Дъждосвирцоподобни",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            area: "",
            image: "./../assets/pictures/18 тъмногръд брегобегач.jpg"
        },
        {
            id: 16,
            name: "Горска улулица",
            infoLink: "https://bg.wikipedia.org/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB%D1%8F%D0%B2_%D0%B1%D1%80%D0%B5%D0%B3%D0%BE%D0%B1%D0%B5%D0%B3%D0%B0%D1%87",
            species: "Совоподобни",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            area: "Среща се по-често в широколистни планински гори и сравнително рядко в равнините. През зимата посещава паркове, градини и населени места",
            image: "./../assets/pictures/19 Горска улулица.jpg"
        },
        {
            id: 17,
            name: "Голям корморан",
            infoLink: "https://bg.wikipedia.org/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB%D1%8F%D0%B2_%D0%B1%D1%80%D0%B5%D0%B3%D0%BE%D0%B1%D0%B5%D0%B3%D0%B0%D1%87",
            species: "Пеликаноподобни",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            area: "Обитава морски крайбрежия и вътрешни водоеми. При миграции и зимуване се среща в разнообразни влажни зони.",
            image: "./../assets/pictures/20 Голям корморан.jpg"
        },
        {
            id: 18,
            name: "Сива чапла",
            infoLink: "https://bg.wikipedia.org/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB%D1%8F%D0%B2_%D0%B1%D1%80%D0%B5%D0%B3%D0%BE%D0%B1%D0%B5%D0%B3%D0%B0%D1%87",
            species: "Щъркелоподобни",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            area: "Обитава блата и езера с гъсти тръстикови масиви, долни и средни течения на големи реки, богати на риба, равнинни, дъбови и влажни гори. При миграции и зимуване се среща и в язовири, оризища, канали, рибарници.",
            image: "./../assets/pictures/21 Сива чапла.jpg"
        },
        {
            id: 19,
            name: "Земеродно рибарче",
            infoLink: "https://bg.wikipedia.org/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB%D1%8F%D0%B2_%D0%B1%D1%80%D0%B5%D0%B3%D0%BE%D0%B1%D0%B5%D0%B3%D0%B0%D1%87",
            species: "Синявицоподобни",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            area: "Обитава реки, езера, блата, язовири и морски крайбрежия, в близост до отвесни земни брегове.",
            image: "./../assets/pictures/23 Земеродно рибарче.jpg"
        },
        {
            id: 20,
            name: "Планинска стърчиопашка",
            infoLink: "https://bg.wikipedia.org/wiki/%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB%D1%8F%D0%B2_%D0%B1%D1%80%D0%B5%D0%B3%D0%BE%D0%B1%D0%B5%D0%B3%D0%B0%D1%87",
            species: "Врабчоподобни",
            description: "Дължината на тялото е 15–17 см. Главата е сива, гърбът е сиво-кафяв с надлъжни щрихи, краката са черни. По гърдите има бледорозов оттенък. От всички стърчиопоашки тя има най-дългата опашка. Гнездовият период започва праз май и началото на юни. Те правят гнездата си в дупки по бреговете между камъни, цепнатини на скали. Изградено е от трева, листа, мъх и коренчета, а от вътре е обилно застлано с косми.",
            area: "Обитава планински потоци и реки, включително и в населените места.",
            image: "./../assets/pictures/24 Планинска стърчиопашка.jpg"
        }
    ];

    constructor() { }

    getBirds() {
        return this.birds.slice();
    }

    getBird(id: number) {
        return this.birds.filter(bird => bird.id === id)[0];
    }

}