"use strict";(self.webpackChunkroomz_web_app=self.webpackChunkroomz_web_app||[]).push([[961],{9961:(Ct,z,r)=>{r.r(z),r.d(z,{HomeModule:()=>_t});var g=r(9808),h=r(3075),H=r(9897),t=r(5e3),m=r(3640),v=r(9592),S=r(6952),_=r(727),d=r(2340),b=r(5439),c=r(1062),C=r(6010),u=r(7152),U=r(520);let f=(()=>{class n{constructor(e){this.http=e}getSliderPhotos(){return this.http.get(`${d.N.endPointUrl}/admin/header-slider-list`)}getVideoTypes(){return this.http.get(`${d.N.endPointUrl}/video/video-type`)}getWebsiteVideo(e){return this.http.get(`${d.N.endPointUrl}/video/${e}`)}getListSpaceData(){return this.http.get(`${d.N.endPointUrl}/admin/list-space`)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(U.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var l=r(1894),y=r(4973),P=r(107),Y=r(7484),T=r(8054),Z=r(2905),M=r(6042),O=r(2643),w=r(2683);function I(n,o){if(1&n&&(t.TgZ(0,"div",16),t._UZ(1,"img",17),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Q6J("src",e,t.LSH)}}function k(n,o){if(1&n&&t._UZ(0,"nz-option",18),2&n){const e=o.$implicit,i=t.oxw();t.Q6J("nzValue",e[i.lang])("nzLabel",e[i.lang])}}function J(n,o){if(1&n&&t._UZ(0,"nz-option",18),2&n){const e=o.$implicit,i=t.oxw();t.Q6J("nzValue",null==e?null:e.id)("nzLabel","ar"===i.lang?e.name_ar:e.name_en)}}const N=function(){return{span:24}},Q=function(){return{span:20}},V=function(n,o){return[n,o]};let F=(()=>{class n{constructor(e,i,a,s,p){this.translateService=e,this.commonService=i,this.router=a,this.homeService=s,this.cookieService=p,this.imgs=[],this.selectedCity=null,this.selectedPropertyType=null,this.selectedDate="",this.date=null,this.startDatePlaceholder="",this.endDatePlaceholder="",this.citiesData=[],this.citiesDataClone=[],this.lang=d.N.lang,this.propertyTypesData=[],this.subscriptions=new _.w0,this.disabledDate=x=>x<new Date}ngOnInit(){this.lang=this.cookieService.get("lang"),this.handleDatePlaceholder(),this.fetchAllCities(),this.fetchAllPropertyTypes(),this.fetchSliderPhotos()}handleDatePlaceholder(){this.startDatePlaceholder=this.translateService.instant("HomePage.CheckIn"),this.endDatePlaceholder=this.translateService.instant("HomePage.CheckOut")}fetchSliderPhotos(){this.subscriptions.add(this.homeService.getSliderPhotos().subscribe({next:e=>{var i;e.successful&&(this.imgs=null==e?void 0:e.headerSlider.map(a=>a.url),(null===(i=this.imgs)||void 0===i?void 0:i.length)||(this.imgs=["assets/imgs/header-slider-img.png"]))},error:e=>{var i;this.commonService.showErrorAlert(this.translateService.instant("General.Error"),null===(i=null==e?void 0:e.error)||void 0===i?void 0:i.message)}}))}fetchAllCities(){this.subscriptions.add(this.commonService.fetchAllCities().subscribe({next:e=>{e.successful&&(this.citiesData=null==e?void 0:e.cities,this.citiesDataClone=e.cities)},error:e=>{var i;this.commonService.showErrorAlert(this.translateService.instant("General.Error"),null===(i=null==e?void 0:e.error)||void 0===i?void 0:i.message)}}))}onSearchInCities(e){var i;this.citiesData=this.citiesDataClone,(null===(i=null==e?void 0:e.trim())||void 0===i?void 0:i.length)>1&&(this.citiesData=this.citiesData.filter(a=>{var s,p;return(null===(s=null==a?void 0:a.ar)||void 0===s?void 0:s.toLowerCase().includes(e.toLowerCase()))||(null===(p=null==a?void 0:a.en)||void 0===p?void 0:p.toLowerCase().includes(e.toLowerCase()))}))}fetchAllPropertyTypes(){this.subscriptions.add(this.commonService.fetchAllPropertyTypes().subscribe({next:e=>{(null==e?void 0:e.successful)&&(this.propertyTypesData=e.data)},error:e=>{var i;this.commonService.showErrorAlert(this.translateService.instant("General.Error"),null===(i=null==e?void 0:e.error)||void 0===i?void 0:i.message)}}))}onChange(e){console.log("onChange: ",e)}onSearch(){let e={city:this.selectedCity?this.selectedCity:void 0,property_type:this.selectedPropertyType?this.selectedPropertyType:void 0,start_date:this.selectedDate[0]?b(this.selectedDate[0]).format("DD-MM-YYYY"):void 0,end_date:this.selectedDate[1]?b(this.selectedDate[1]).format("DD-MM-YYYY"):void 0};this.router.navigate(["/search-result"],{queryParams:e})}ngOnDestroy(){this.subscriptions.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.sK),t.Y36(C.v),t.Y36(u.F0),t.Y36(f),t.Y36(v.N_))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-header"]],decls:32,vars:40,consts:[["nz-row","",1,"mt-2","mb-4"],["nz-col","",1,"m-auto",3,"nzXs","nzLg"],[1,"carousel-wrapper"],["nzAutoPlay","true","nzEffect","fade","nzAutoPlaySpeed","5000"],["nz-carousel-content","",4,"ngFor","ngForOf"],[1,"content-wrapper"],["nz-typography","",1,"head"],[1,"text"],[1,"inputs-card"],[1,"inputs-wrapper"],["nzBorderless","","nzAllowClear","","nzShowSearch","","nzServerSearch","",3,"ngModel","nzPlaceHolder","ngModelChange","nzOnSearch"],["nzValue","",3,"nzLabel"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],["nzBorderless","","nzAllowClear","",3,"ngModel","nzPlaceHolder","ngModelChange"],["nzBorderless","","nzFormat","dd-MM-YYYY",3,"nzDisabledDate","ngModel","nzPlaceHolder","ngModelChange"],["nz-button","",1,"search-btn",3,"click"],["nz-carousel-content",""],["alt","",1,"carousel-img","img-fluid",3,"src"],[3,"nzValue","nzLabel"]],template:function(e,i){1&e&&(t.TgZ(0,"header",0)(1,"div",1)(2,"div",2)(3,"nz-carousel",3),t.YNc(4,I,2,1,"div",4),t.qZA(),t.TgZ(5,"div",5)(6,"h1",6),t._uU(7),t.ALo(8,"translate"),t.qZA(),t.TgZ(9,"p",7),t._uU(10),t.ALo(11,"translate"),t.qZA(),t.TgZ(12,"nz-card",8)(13,"div",9)(14,"nz-select",10),t.NdJ("ngModelChange",function(s){return i.selectedCity=s})("nzOnSearch",function(s){return i.onSearchInCities(s)}),t.ALo(15,"translate"),t._UZ(16,"nz-option",11),t.ALo(17,"translate"),t.YNc(18,k,1,2,"nz-option",12),t.qZA(),t._UZ(19,"span"),t.TgZ(20,"nz-select",13),t.NdJ("ngModelChange",function(s){return i.selectedPropertyType=s}),t.ALo(21,"translate"),t._UZ(22,"nz-option",11),t.ALo(23,"translate"),t.YNc(24,J,1,2,"nz-option",12),t.qZA(),t._UZ(25,"span"),t.TgZ(26,"nz-range-picker",14),t.NdJ("ngModelChange",function(s){return i.selectedDate=s}),t.ALo(27,"translate"),t.ALo(28,"translate"),t.qZA(),t.TgZ(29,"button",15),t.NdJ("click",function(){return i.onSearch()}),t._uU(30),t.ALo(31,"translate"),t.qZA()()()()()()()),2&e&&(t.xp6(1),t.Q6J("nzXs",t.DdM(35,N))("nzLg",t.DdM(36,Q)),t.xp6(3),t.Q6J("ngForOf",i.imgs),t.xp6(3),t.hij(" ",t.lcZ(8,17,"HomePage.HeaderTitle")," "),t.xp6(3),t.Oqu(t.lcZ(11,19,"HomePage.HeaderSubTitle")),t.xp6(4),t.s9C("nzPlaceHolder",t.lcZ(15,21,"HomePage.ChooseCity")),t.Q6J("ngModel",i.selectedCity),t.xp6(2),t.s9C("nzLabel",t.lcZ(17,23,"HomePage.AllCities")),t.xp6(2),t.Q6J("ngForOf",i.citiesData),t.xp6(2),t.s9C("nzPlaceHolder",t.lcZ(21,25,"HomePage.PropertyType")),t.Q6J("ngModel",i.selectedPropertyType),t.xp6(2),t.s9C("nzLabel",t.lcZ(23,27,"HomePage.AllTypes")),t.xp6(2),t.Q6J("ngForOf",i.propertyTypesData),t.xp6(2),t.Q6J("nzDisabledDate",i.disabledDate)("ngModel",i.selectedDate)("nzPlaceHolder",t.WLB(37,V,t.lcZ(27,29,"HomePage.CheckIn"),t.lcZ(28,31,"HomePage.CheckOut"))),t.xp6(4),t.hij(" ",t.lcZ(31,33,"HomePage.Search")," "))},directives:[l.SK,l.t3,y.QZ,g.sg,y.pA,P.ZU,Y.bd,T.Vq,h.JJ,h.On,T.Ip,Z.uw,Z.wS,M.ix,O.dQ,w.w],pipes:[c.X$],styles:[".carousel-wrapper[_ngcontent-%COMP%]{height:68vh;padding:5px;border-radius:10px;position:relative;overflow:hidden}@media (max-width: 1024px){.carousel-wrapper[_ngcontent-%COMP%]{height:50vh}}@media (max-width: 768px){.carousel-wrapper[_ngcontent-%COMP%]{padding:0;border-radius:0}}.carousel-wrapper[_ngcontent-%COMP%]   .carousel-img[_ngcontent-%COMP%]{border-radius:10px;width:100%;height:65vh;object-fit:cover;filter:brightness(.7)}@media (max-width: 1024px){.carousel-wrapper[_ngcontent-%COMP%]   .carousel-img[_ngcontent-%COMP%]{height:50vh}}@media (max-width: 768px){.carousel-wrapper[_ngcontent-%COMP%]   .carousel-img[_ngcontent-%COMP%]{border-radius:0;height:80vh}}.carousel-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{position:absolute;top:15%;right:0;left:0;z-index:1;justify-content:center;text-align:center}@media (max-width: 1024px){.carousel-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{top:10%}}@media (max-width: 768px){.carousel-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;top:0}}.carousel-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{color:var(--bs-white);font-weight:600;width:50%;margin:auto}@media (max-width: 1200px){.carousel-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{width:75%;font-size:35px}}@media (max-width: 768px){.carousel-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{width:80%;font-size:30px;margin:50px auto 0}}@media (max-width: 673px){.carousel-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{margin:auto;width:90%}}@media (max-width: 598px){.carousel-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{width:70%}}@media (max-width: 463px){.carousel-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{width:90%}}.carousel-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin-top:2%;color:var(--bs-white);font-size:18px;margin-bottom:4%}@media (max-width: 575px){.carousel-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:14px}}.carousel-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .inputs-card[_ngcontent-%COMP%]{width:60%;margin:auto;border-radius:10px}@media (max-width: 1200px){.carousel-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .inputs-card[_ngcontent-%COMP%]{width:80%}}@media (max-width: 768px){.carousel-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .inputs-card[_ngcontent-%COMP%]{width:94%;margin-top:0!important}}@media (max-width: 576px){.carousel-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .inputs-card[_ngcontent-%COMP%]{width:90%}}.carousel-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .inputs-card[_ngcontent-%COMP%]   .inputs-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}@media (max-width: 576px){.carousel-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .inputs-card[_ngcontent-%COMP%]   .inputs-wrapper[_ngcontent-%COMP%]{flex-direction:row;flex-wrap:wrap;align-items:center}}.carousel-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .inputs-card[_ngcontent-%COMP%]   .inputs-wrapper[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%]{width:170px;padding-inline-end:10px;padding-inline-start:10px}@media (max-width: 1200px){.carousel-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .inputs-card[_ngcontent-%COMP%]   .inputs-wrapper[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%]{text-align:start}}@media (max-width: 768px){.carousel-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .inputs-card[_ngcontent-%COMP%]   .inputs-wrapper[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%]{width:150px;padding-inline:0;display:flex;align-items:center;justify-content:space-between}}@media (max-width: 576px){.carousel-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .inputs-card[_ngcontent-%COMP%]   .inputs-wrapper[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%]{width:45%;margin-bottom:1em}}.carousel-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .inputs-card[_ngcontent-%COMP%]   .inputs-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:1px;background-color:var(--bs-gray-600)}@media (max-width: 768px){.carousel-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .inputs-card[_ngcontent-%COMP%]   .inputs-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}}.carousel-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .inputs-card[_ngcontent-%COMP%]   .inputs-wrapper[_ngcontent-%COMP%]   nz-range-picker[_ngcontent-%COMP%]{padding-inline-end:10px;padding-inline-start:10px;padding-bottom:10px}@media (max-width: 768px){.carousel-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .inputs-card[_ngcontent-%COMP%]   .inputs-wrapper[_ngcontent-%COMP%]   nz-range-picker[_ngcontent-%COMP%]{width:40%;padding-inline:0}}@media (max-width: 576px){.carousel-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .inputs-card[_ngcontent-%COMP%]   .inputs-wrapper[_ngcontent-%COMP%]   nz-range-picker[_ngcontent-%COMP%]{width:65%}}.carousel-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .inputs-card[_ngcontent-%COMP%]   .inputs-wrapper[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%]{border-color:var(--bs-primary)!important;font-size:16px;height:2.5em;color:var(--bs-white)!important;background-color:var(--bs-primary)!important}  [lang=ar] nz-option-item{text-align:end}  .ant-carousel .slick-dots{display:none!important}  .slick-slider{border-radius:10px;overflow:hidden}@media (max-width: 768px){  .slick-slider{border-radius:0}}@media (max-width: 768px){  .ant-card-body{padding:20px 5px}  .ant-picker-input>input{padding:0 12px}}@media (max-width: 768px) and (max-width: 576px){  .ant-picker-input>input{padding:0}}@media (max-width: 768px){  .ant-picker-input>input::placeholder{font-weight:500;font-size:15px}}@media (max-width: 768px){  .ant-select:not(.ant-select-customize-input) .ant-select-selector{padding:0}}@media (max-width: 768px){  .ant-select-arrow .anticon:not(.ant-select-suffix){padding-inline-start:5px}}@media (max-width: 768px){  .ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder{font-weight:500;font-size:14px}}@media (max-width: 1200px){  .ant-card-body{padding:20px}}"]}),n})();var D=r(2087),L=r(3087),A=r(9590);function E(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",8),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw(2).onCityClicked(s)}),t.TgZ(1,"div",9),t._UZ(2,"img",10),t.qZA(),t.TgZ(3,"h3",11),t._uU(4),t.qZA()()}if(2&n){const e=o.$implicit,i=t.oxw(2);t.xp6(2),t.Q6J("src",e.image_url,t.LSH)("alt",null==e?null:e.en),t.xp6(2),t.hij(" ","ar"===i.lang?null==e?null:e.ar:null==e?null:e.en," ")}}function R(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"swiper",5),t.NdJ("swiperTransitionEnd",function(){return t.CHM(e),t.oxw().onSwiperEvent("transitionEnd")}),t.TgZ(1,"div",6),t.YNc(2,E,5,3,"div",7),t.qZA()()}if(2&n){const e=t.oxw();t.Q6J("config",e.placesConfig),t.xp6(2),t.Q6J("ngForOf",e.placesSliderData)}}function B(n,o){1&n&&t._UZ(0,"span",15)}function X(n,o){if(1&n&&(t.TgZ(0,"div",12),t.YNc(1,B,1,0,"ng-template",null,13,t.W1O),t._UZ(3,"nz-spin",14),t.qZA()),2&n){const e=t.MAs(2);t.xp6(3),t.Q6J("nzIndicator",e)}}const j=function(){return{span:24}},$=function(){return{span:20}};let G=(()=>{class n{constructor(e,i,a){this.translateService=e,this.commonService=i,this.router=a,this.placesSliderData=[],this.loading=!1,this.placesConfig={autoplay:{delay:2e3},loopedSlides:6,loopFillGroupWithBlank:!0,loopPreventsSlide:!0,loop:!0,spaceBetween:15,slidesPerView:"auto",breakpoints:{425:{slidesPerView:1,spaceBetween:10},576:{slidesPerView:1,spaceBetween:10},768:{slidesPerView:3,spaceBetween:10},992:{slidesPerView:3,spaceBetween:20},1200:{slidesPerView:4,spaceBetween:20}}},this.lang=d.N.lang,this.subscriptions=new _.w0}ngOnInit(){this.fetchAllCities()}onSwiperEvent(e){console.log(e)}fetchAllCities(){this.loading=!0,this.subscriptions.add(this.commonService.fetchAllCities().subscribe({next:e=>{console.log(e),e.successful&&(this.placesSliderData=null==e?void 0:e.cities),this.loading=!1},error:e=>{this.commonService.showErrorAlert("Error","Failed to get cities, Please try again")}}))}onCityClicked(e){this.router.navigate(["/search-result"],{queryParams:{city:e[this.lang]}})}ngOnDestroy(){this.subscriptions.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.sK),t.Y36(C.v),t.Y36(u.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-popular-places-slider"]],decls:7,vars:9,consts:[["nz-row","",1,"places-slider-wrapper","mb-5"],["nz-col","",1,"m-auto",3,"nzXs","nzLg"],["nz-typography",""],["class","swiper-slides-container",3,"config","swiperTransitionEnd",4,"ngIf"],["class","loader-wrapper mt-3",4,"ngIf"],[1,"swiper-slides-container",3,"config","swiperTransitionEnd"],[1,"swiper-wrapper"],["class","swiper-slide",3,"click",4,"ngFor","ngForOf"],[1,"swiper-slide",3,"click"],[1,"img-wrapper"],[3,"src","alt"],["nz-typography","",1,"slide-name"],[1,"loader-wrapper","mt-3"],["indicatorTemplate",""],["nzSimple","",3,"nzIndicator"],["nz-icon","","nzType","loading"]],template:function(e,i){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h2",2),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.YNc(5,R,3,2,"swiper",3),t.YNc(6,X,4,1,"div",4),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("nzXs",t.DdM(7,j))("nzLg",t.DdM(8,$)),t.xp6(2),t.Oqu(t.lcZ(4,5,"HomePage.PopularPlaces")),t.xp6(2),t.Q6J("ngIf",!i.loading),t.xp6(1),t.Q6J("ngIf",i.loading))},directives:[l.SK,l.t3,P.ZU,g.O5,D.n,g.sg,w.w,L.Ls,A.W],pipes:[c.X$],styles:[".places-slider-wrapper[_ngcontent-%COMP%]{text-align:center;justify-content:center}@media (max-width: 768px){.places-slider-wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:1em;margin-bottom:1em}}.places-slider-wrapper[_ngcontent-%COMP%]   .swiper-slides-container[_ngcontent-%COMP%]{justify-content:center;text-align:center;margin-top:2%}.places-slider-wrapper[_ngcontent-%COMP%]   .swiper-slides-container[_ngcontent-%COMP%]   swiper[_ngcontent-%COMP%]{width:100%;overflow:hidden}.places-slider-wrapper[_ngcontent-%COMP%]   .swiper-slides-container[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{cursor:pointer;position:relative}.places-slider-wrapper[_ngcontent-%COMP%]   .swiper-slides-container[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]{width:100%;height:15em;border-radius:5px}.places-slider-wrapper[_ngcontent-%COMP%]   .swiper-slides-container[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:5px;object-fit:cover;filter:brightness(.7)}.places-slider-wrapper[_ngcontent-%COMP%]   .swiper-slides-container[_ngcontent-%COMP%]   .slide-name[_ngcontent-%COMP%]{position:absolute;top:45%;right:0;left:0;z-index:1;color:var(--bs-white)}"]}),n})();function W(n,o){1&n&&t._UZ(0,"img",13)}function K(n,o){if(1&n&&t._UZ(0,"img",14),2&n){const e=t.oxw(2);t.Q6J("src",null==e.listSpaceData?null:e.listSpaceData.imag_url,t.LSH)}}function q(n,o){1&n&&(t.TgZ(0,"span"),t._uU(1,"....."),t.qZA())}const tt=function(){return{span:24}},et=function(){return{span:20}};function nt(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"section",3),t._UZ(1,"div",4),t.YNc(2,W,1,0,"img",5),t.YNc(3,K,1,1,"img",6),t.TgZ(4,"div",7)(5,"div",8)(6,"div",9)(7,"p",10),t._uU(8),t.ALo(9,"slice"),t.YNc(10,q,2,0,"span",11),t.qZA(),t.TgZ(11,"button",12),t.NdJ("click",function(){return t.CHM(e),t.oxw().onListSpace()}),t._uU(12),t.ALo(13,"translate"),t.qZA()()()()()}if(2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngIf",!(null!=e.listSpaceData&&e.listSpaceData.imag_url)),t.xp6(1),t.Q6J("ngIf",null==e.listSpaceData?null:e.listSpaceData.imag_url),t.xp6(2),t.Q6J("nzXs",t.DdM(13,tt))("nzLg",t.DdM(14,et)),t.xp6(3),t.hij(" ",t.Dn7(9,7,"ar"===e.lang?e.listSpaceData.text_ar:e.listSpaceData.text_en,0,400)," "),t.xp6(2),t.Q6J("ngIf",(null==e.listSpaceData.text_ar?null:e.listSpaceData.text_ar.length)>400||(null==e.listSpaceData.text_en?null:e.listSpaceData.text_en.length)>400),t.xp6(2),t.Oqu(t.lcZ(13,11,"HomePage.ListYourSpace"))}}function it(n,o){1&n&&t._UZ(0,"span",18)}function ot(n,o){if(1&n&&(t.TgZ(0,"div",15),t.YNc(1,it,1,0,"ng-template",null,16,t.W1O),t._UZ(3,"nz-spin",17),t.qZA()),2&n){const e=t.MAs(2);t.xp6(3),t.Q6J("nzIndicator",e)}}let at=(()=>{class n{constructor(e,i,a,s,p,x){this.cookieService=e,this.commonService=i,this.authService=a,this.translateService=s,this.homeService=p,this.router=x,this.isLoggedIn=!1,this.userRole="",this.loading=!1,this.lang=d.N.lang,this.subscriptions=new _.w0}ngOnInit(){this.getUserData(),this.checkIfUserIsLoggedIn(),this.getUserRole(),this.fetchSpaceData()}checkIfUserIsLoggedIn(){this.authService.userLoggedIn.subscribe(e=>{e&&(this.getUserData(),this.getUserRole())})}getUserData(){this.cookieService.get("userData")&&(this.userData=JSON.parse(this.cookieService.get("userData")))}getUserRole(){this.commonService.userRole.subscribe(e=>{this.userRole=e})}onListSpace(){var e;(null===(e=this.userData)||void 0===e?void 0:e.id)?"TRAVELLER"===this.userRole?this.commonService.showInfoAlert(this.translateService.instant("General.Warning"),this.translateService.instant("General.SwitchToHosting")):this.router.navigateByUrl("host/listing"):this.commonService.showInfoAlert(this.translateService.instant("General.Warning"),this.translateService.instant("General.LoginFirst"))}fetchSpaceData(){this.loading=!0,this.subscriptions.add(this.homeService.getListSpaceData().subscribe({next:e=>{this.loading=!1,e.successful&&(this.listSpaceData=e.listSpaces[0])},error:e=>{var i;this.loading=!1,this.commonService.showErrorAlert(this.translateService.instant("General.Error"),null===(i=null==e?void 0:e.error)||void 0===i?void 0:i.message)}}))}ngOnDestroy(){this.subscriptions.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(v.N_),t.Y36(C.v),t.Y36(S.e),t.Y36(c.sK),t.Y36(f),t.Y36(u.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-list-place-section"]],decls:5,vars:5,consts:[["nz-typography","",1,"text-center"],["class","list-place-section",4,"ngIf"],["class","loader-wrapper mt-3",4,"ngIf"],[1,"list-place-section"],[1,"layer"],["class","bg-img","src","/assets/imgs/list-place-bg.png","alt","",4,"ngIf"],["class","bg-img","alt","",3,"src",4,"ngIf"],["nz-row","",1,"content-row"],["nz-col","",1,"mx-auto",3,"nzXs","nzLg"],[1,"content"],[1,"text"],[4,"ngIf"],["nz-button","",1,"btn",3,"click"],["src","/assets/imgs/list-place-bg.png","alt","",1,"bg-img"],["alt","",1,"bg-img",3,"src"],[1,"loader-wrapper","mt-3"],["indicatorTemplate",""],["nzSimple","",3,"nzIndicator"],["nz-icon","","nzType","loading"]],template:function(e,i){1&e&&(t.TgZ(0,"h2",0),t._uU(1),t.ALo(2,"translate"),t.qZA(),t.YNc(3,nt,14,15,"section",1),t.YNc(4,ot,4,1,"div",2)),2&e&&(t.xp6(1),t.Oqu(t.lcZ(2,3,"HomePage.ListYourSpace")),t.xp6(2),t.Q6J("ngIf",!i.loading),t.xp6(1),t.Q6J("ngIf",i.loading))},directives:[P.ZU,g.O5,l.SK,l.t3,M.ix,O.dQ,w.w,L.Ls,A.W],pipes:[c.X$,g.OU],styles:["@media (max-width: 768px){h2[_ngcontent-%COMP%]{margin-top:1em;margin-bottom:1em}}.list-place-section[_ngcontent-%COMP%]{position:relative;margin-bottom:50px}@media (max-width: 768px){.list-place-section[_ngcontent-%COMP%]{padding-inline:20px}}.list-place-section[_ngcontent-%COMP%]   .bg-img[_ngcontent-%COMP%]{width:100%;height:27em;object-fit:cover}.list-place-section[_ngcontent-%COMP%]   .content-row[_ngcontent-%COMP%]{position:absolute;top:15%;left:0;right:0}.list-place-section[_ngcontent-%COMP%]   .layer[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;inset:0 0 0 0;filter:brightness(.5);background-color:#000000b3}.list-place-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{text-align:start;position:absolute;top:0;right:0;left:0;bottom:0;z-index:1}@media (max-width: 768px){.list-place-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{text-align:center}}.list-place-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{line-height:1.7em;font-size:16px;color:var(--bs-white);padding:30px 0;width:65%}@media (max-width: 1200px){.list-place-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{width:85%}}@media (max-width: 768px){.list-place-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{width:100%;padding:0;font-size:14px}}.list-place-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{border-color:var(--bs-primary)!important;font-size:16px;height:2.5em;color:var(--bs-white)!important;background-color:var(--bs-primary)!important}@media (max-width: 768px){.list-place-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{font-size:14px}}.loader-wrapper[_ngcontent-%COMP%]{justify-content:center;text-align:center;height:27em;display:flex;align-items:center}.loader-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:2em}"]}),n})();var rt=r(2313);function st(n,o){if(1&n&&(t.ynx(0),t._UZ(1,"iframe",9),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("src",e.videoLink,t.uOi)}}function ct(n,o){1&n&&t._UZ(0,"div")}const lt=function(){return{span:22}},pt=function(){return{span:20}},dt=function(){return{top:"5%"}};let gt=(()=>{class n{constructor(e,i,a,s){this.translateService=e,this.commonService=i,this.homeService=a,this.sanitizer=s,this.isVisible=!1,this.subscriptions=new _.w0}ngOnInit(){this.fetchVideoTypes()}fetchVideoTypes(){this.subscriptions.add(this.homeService.getVideoTypes().subscribe(e=>{var i;console.log(e),e.successful&&(this.videoTypes=null==e?void 0:e.videosType,this.videoTypeId=null===(i=this.videoTypes.filter(a=>"web_video"===a.type)[0])||void 0===i?void 0:i.id,this.fetchVideoLink())},e=>{var i;this.commonService.showErrorAlert(this.translateService.instant("General.Error"),null===(i=null==e?void 0:e.error)||void 0===i?void 0:i.message)}))}fetchVideoLink(){this.subscriptions.add(this.homeService.getWebsiteVideo(this.videoTypeId).subscribe(e=>{var i;console.log(e),e.successful&&(this.videoLink=this.sanitizer.bypassSecurityTrustResourceUrl(null===(i=null==e?void 0:e.video)||void 0===i?void 0:i.video_url))},e=>{var i;this.commonService.showErrorAlert(this.translateService.instant("General.Error"),null===(i=null==e?void 0:e.error)||void 0===i?void 0:i.message)}))}showModal(){this.isVisible=!0}handleOk(){console.log("Button ok clicked!"),this.isVisible=!1}handleCancel(){console.log("Button cancel clicked!"),this.isVisible=!1}ngOnDestroy(){this.subscriptions.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.sK),t.Y36(C.v),t.Y36(f),t.Y36(rt.H7))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-tutorial-section"]],decls:11,vars:10,consts:[["nz-row","",1,"tutorial-section","mb-5"],["nz-typography",""],["nz-col","",1,"content","m-auto",3,"nzXs","nzLg"],["src","/assets/imgs/tutorial-section-bg.png","alt","",1,"bg-img"],["nz-button","",1,"btn",3,"click"],[1,"fa-solid","fa-play"],["nzWidth","80%","nzTitle","Help Tutorial","nzOkText","Ok","nzCancelText","",3,"nzVisible","nzStyle","nzVisibleChange","nzOnCancel","nzOnOk"],[4,"nzModalContent"],[4,"nzModalFooter"],["title","YouTube video player","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",3,"src"]],template:function(e,i){1&e&&(t.TgZ(0,"section",0)(1,"h2",1),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"div",2),t._UZ(5,"img",3),t.TgZ(6,"button",4),t.NdJ("click",function(){return i.showModal()}),t._UZ(7,"i",5),t.qZA()()(),t.TgZ(8,"nz-modal",6),t.NdJ("nzVisibleChange",function(s){return i.isVisible=s})("nzOnCancel",function(){return i.handleCancel()})("nzOnOk",function(){return i.handleOk()}),t.YNc(9,st,2,1,"ng-container",7),t.YNc(10,ct,1,0,"div",8),t.qZA()),2&e&&(t.xp6(2),t.Oqu(t.lcZ(3,5,"HomePage.Tutorial")),t.xp6(2),t.Q6J("nzXs",t.DdM(7,lt))("nzLg",t.DdM(8,pt)),t.xp6(4),t.Q6J("nzVisible",i.isVisible)("nzStyle",t.DdM(9,dt)))},directives:[l.SK,P.ZU,l.t3,M.ix,O.dQ,w.w,m.du,m.Hf,m.Uh],pipes:[c.X$],styles:[".tutorial-section[_ngcontent-%COMP%]{justify-content:center;text-align:center}.tutorial-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{display:block;width:100%}@media (max-width: 576px){.tutorial-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:0}}.tutorial-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:block;border-radius:5px;position:relative}.tutorial-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .bg-img[_ngcontent-%COMP%]{margin-top:1em;border-radius:5px;width:100%;height:25em;object-fit:cover;filter:brightness(.5)}.tutorial-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{position:absolute;z-index:1;top:50%;inset-inline-start:50%;transform:translate(-50%,-50%);color:var(--bs-white)!important;background-color:transparent!important;border:0}.tutorial-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{color:var(--bs-primary);transition:all .3s ease-in-out}.tutorial-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:4em}@media (max-width: 768px){.tutorial-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:2em}}iframe[_ngcontent-%COMP%]{width:100%;height:35em}@media (max-width: 768px){iframe[_ngcontent-%COMP%]{height:25em}}"]}),n})();const ut=[{path:"",component:(()=>{class n{constructor(e,i,a,s){this.modal=e,this.viewContainerRef=i,this.cookieService=a,this.authService=s}ngOnInit(){this.handleCompleteRegistration(),this.checkIfUserIsLoggedIn()}checkIfUserIsLoggedIn(){this.cookieService.get("userToken")&&this.authService.userLoggedIn.next(!0)}handleCompleteRegistration(){this.cookieService.get("registerData")&&this.openCompleteRegistrationModal()}openCompleteRegistrationModal(){this.modal.create({nzTitle:"Add you info",nzContent:H._,nzViewContainerRef:this.viewContainerRef,nzClosable:!0,nzCancelDisabled:!0,nzKeyboard:!0,nzMaskClosable:!0,nzWidth:"50%",nzOkDisabled:!1})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.Sf),t.Y36(t.s_b),t.Y36(v.N_),t.Y36(S.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],decls:4,vars:0,template:function(e,i){1&e&&t._UZ(0,"app-header")(1,"app-popular-places-slider")(2,"app-list-place-section")(3,"app-tutorial-section")},directives:[F,G,at,gt],styles:[""]}),n})()}];let ht=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[u.Bz.forChild(ut)],u.Bz]}),n})();var mt=r(978);let _t=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[],imports:[[g.ez,ht,h.u5,h.UX,mt.P,D.X,c.aw]]}),n})()}}]);