"use strict";(self.webpackChunkroomz_web_app=self.webpackChunkroomz_web_app||[]).push([[292],{579:(T,D,e)=>{e.d(D,{M:()=>l});var t=e(5e3),p=e(9113),g=e(6010),m=e(1062),i=e(3640),v=e(1894),o=e(4546),c=e(1047),U=e(3075),M=e(6042),E=e(2683),s=e(2643);function h(u,f){if(1&u){const _=t.EpF();t.TgZ(0,"div")(1,"button",4),t.NdJ("click",function(){return t.CHM(_),t.oxw().handleCancel()}),t.TgZ(2,"span"),t._uU(3),t.ALo(4,"translate"),t.qZA()(),t.TgZ(5,"button",5),t.NdJ("click",function(){return t.CHM(_),t.oxw().handleOk()}),t._uU(6),t.ALo(7,"translate"),t.qZA()()}if(2&u){const _=t.oxw();t.xp6(3),t.Oqu(t.lcZ(4,3,"ReservationPage.Cancel")),t.xp6(2),t.Q6J("nzLoading",_.loading),t.xp6(1),t.hij(" ",t.lcZ(7,5,"ReservationPage.ConfirmBtn")," ")}}let l=(()=>{class u{constructor(_,C,P,O){this.bookingsService=_,this.commonService=C,this.translateService=P,this.modalRef=O,this.loading=!1,this.helpMessage=""}ngOnInit(){console.log(this.bookingId)}handleOk(){this.helpMessage.length&&(this.loading=!0)}handleCancel(){this.modalRef.close()}}return u.\u0275fac=function(_){return new(_||u)(t.Y36(p.F),t.Y36(g.v),t.Y36(m.sK),t.Y36(i.Lf))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-help-booking"]],inputs:{bookingId:"bookingId"},decls:9,vars:5,consts:[[1,"title"],[3,"nzMaxCharacterCount"],["rows","5","nz-input","",3,"ngModel","ngModelChange"],[4,"nzModalFooter"],["nz-button","","nzType","link",1,"clear-btn",3,"click"],["nz-button","","nzType","primary",3,"nzLoading","click"]],template:function(_,C){1&_&&(t.TgZ(0,"section")(1,"p",0),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"nz-form-item")(5,"nz-form-control")(6,"nz-textarea-count",1)(7,"textarea",2),t.NdJ("ngModelChange",function(O){return C.helpMessage=O}),t.qZA()()()(),t.YNc(8,h,8,7,"div",3),t.qZA()),2&_&&(t.xp6(2),t.hij(" ",t.lcZ(3,3,"Booking.Message")," "),t.xp6(4),t.Q6J("nzMaxCharacterCount",500),t.xp6(1),t.Q6J("ngModel",C.helpMessage))},directives:[v.SK,o.Nx,v.t3,o.Fd,c.w,c.Zp,U.Fj,U.JJ,U.On,i.Uh,M.ix,E.w,s.dQ],pipes:[m.X$],styles:["textarea[_ngcontent-%COMP%]{resize:none}"]}),u})()},9113:(T,D,e)=>{e.d(D,{F:()=>m});var t=e(2340),p=e(5e3),g=e(520);let m=(()=>{class i{constructor(o){this.http=o}getBookingsData(o){return this.http.get(`${t.N.endPointUrl}/user/bookings`,{params:o})}getTravellerBookings(o){return this.http.get(`${t.N.endPointUrl}/user/bookings?user_type=booked_by`,{params:o})}getBookingDetails(o){return this.http.get(`${t.N.endPointUrl}/user/travelling/booking/details/${o}`)}cancelBooking(o,c){return this.http.put(`${t.N.endPointUrl}/user/travelling/booking/cancel-booking/${o}`,c)}getHostBookingDetails(o){return this.http.get(`${t.N.endPointUrl}/user/hosting/booking-details/${o}`)}addRate(o,c){return this.http.post(`${t.N.endPointUrl}/review-property/add-rate/${c}`,o)}addFeedBack(o,c){return this.http.post(`${t.N.endPointUrl}/review-property/add-feedback/${o}`,c)}addUserRate(o,c){return this.http.post(`${t.N.endPointUrl}/review-property/add-user-rate/${c}`,o)}acceptBooking(o){return this.http.put(`${t.N.endPointUrl}/user/hosting/change-booking-status/${o}`,{status:1})}rejectBooking(o){return this.http.post(`${t.N.endPointUrl}/user/hosting/change-booking-status/`,o)}}return i.\u0275fac=function(o){return new(o||i)(p.LFG(g.eN))},i.\u0275prov=p.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},1515:(T,D,e)=>{e.d(D,{v:()=>m});var t=e(2340),p=e(5e3),g=e(520);let m=(()=>{class i{constructor(o){this.http=o}fetchVatDetails(){return this.http.get(`${t.N.endPointUrl}/user/hosting/fixed_proportions`)}}return i.\u0275fac=function(o){return new(o||i)(p.LFG(g.eN))},i.\u0275prov=p.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},4971:(T,D,e)=>{e.d(D,{I:()=>E});var t=e(5e3),p=e(7484),g=e(1344),m=e(9808),i=e(6699),v=e(6761),o=e(3075);function c(s,h){1&s&&t._UZ(0,"nz-avatar",8),2&s&&t.Q6J("nzSize",48)}function U(s,h){if(1&s&&t._UZ(0,"nz-avatar",9),2&s){const l=t.oxw(2);t.Q6J("nzSize",48)("nzSrc",null==l.reviewData?null:l.reviewData.rateFrom.avatar)}}function M(s,h){if(1&s){const l=t.EpF();t.TgZ(0,"nz-comment",3),t.YNc(1,c,1,1,"nz-avatar",4),t.YNc(2,U,1,2,"nz-avatar",5),t.TgZ(3,"nz-comment-content")(4,"div",6)(5,"nz-rate",7),t.NdJ("ngModelChange",function(f){return t.CHM(l),t.oxw().reviewData.total_rate=f}),t.qZA()()()()}if(2&s){const l=t.oxw();t.Q6J("nzAuthor",(null==l.reviewData||null==l.reviewData.rateFrom?null:l.reviewData.rateFrom.first_name)+" "+(null==l.reviewData||null==l.reviewData.rateFrom?null:l.reviewData.rateFrom.last_name)),t.xp6(1),t.Q6J("ngIf",!(null!=l.reviewData&&null!=l.reviewData.rateFrom&&l.reviewData.rateFrom.avatar)),t.xp6(1),t.Q6J("ngIf",null==l.reviewData?null:l.reviewData.rateFrom.avatar),t.xp6(3),t.Q6J("ngModel",l.reviewData.total_rate)("nzAllowHalf",!0)}}let E=(()=>{class s{constructor(){}ngOnInit(){}}return s.\u0275fac=function(l){return new(l||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-review-card"]],inputs:{reviewData:"reviewData"},decls:4,vars:1,consts:[[1,"review-card-item"],[3,"nzDescription"],["descriptionTemplate",""],[3,"nzAuthor"],["nz-comment-avatar","","nzIcon","user","nzSrc","//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",3,"nzSize",4,"ngIf"],["nz-comment-avatar","","nzIcon","user",3,"nzSize","nzSrc",4,"ngIf"],[1,"comment-rate"],["nzDisabled","",3,"ngModel","nzAllowHalf","ngModelChange"],["nz-comment-avatar","","nzIcon","user","nzSrc","//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",3,"nzSize"],["nz-comment-avatar","","nzIcon","user",3,"nzSize","nzSrc"]],template:function(l,u){if(1&l&&(t.TgZ(0,"nz-card",0),t._UZ(1,"nz-card-meta",1),t.qZA(),t.YNc(2,M,6,5,"ng-template",null,2,t.W1O)),2&l){const f=t.MAs(3);t.xp6(1),t.Q6J("nzDescription",f)}},directives:[p.bd,p.l7,g.WE,m.O5,i.Dz,g.DA,g.Y4,v.sn,o.JJ,o.On],styles:[".review-card-item[_ngcontent-%COMP%]{border-radius:5px;cursor:pointer;text-align:start}.review-card-item[_ngcontent-%COMP%]   .review-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{color:var(--bs-gray-600);font-size:15px;padding-inline-end:10px}.review-card-item[_ngcontent-%COMP%]   .review-group[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{color:var(--bs-dark);font-size:15px;font-weight:600}.review-card-item[_ngcontent-%COMP%]   .review-group[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]{color:var(--font-rate);vertical-align:0;font-size:17px}  .review-card-item .ant-card-body{padding:12px}  .review-card-item .ant-comment-content-author-name{font-size:14px;text-transform:capitalize}  .review-card-item .ant-comment-avatar img{width:100%;height:100%}"]}),s})()},1357:(T,D,e)=>{e.d(D,{L:()=>A});var t=e(5e3),p=e(3640),g=e(1062),m=e(4239),i=e(9808),v=e(6042),o=e(2643),c=e(2683),U=e(2087),M=e(4971),E=e(5181),s=e(7413);function h(r,d){if(1&r&&t._UZ(0,"img",17),2&r){const a=t.oxw();t.Q6J("src",null==a.allUserData||null==a.allUserData.userDetails?null:a.allUserData.userDetails.avatar,t.LSH)}}function l(r,d){1&r&&t._UZ(0,"img",18)}function u(r,d){if(1&r){const a=t.EpF();t.TgZ(0,"button",19),t.NdJ("click",function(){return t.CHM(a),t.oxw().onViewAllReviews()}),t._uU(1),t.ALo(2,"translate"),t.qZA()}2&r&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"ReviewsPage.ViewAll")," "))}function f(r,d){if(1&r&&(t.TgZ(0,"div",25),t._UZ(1,"app-review-card",26),t.qZA()),2&r){const a=d.$implicit;t.xp6(1),t.Q6J("reviewData",a)}}function _(r,d){if(1&r&&(t.TgZ(0,"div",20)(1,"div",5)(2,"div",21),t.ynx(3),t.TgZ(4,"swiper",22)(5,"div",23),t.YNc(6,f,2,1,"div",24),t.qZA()(),t.BQk(),t.qZA()()()),2&r){const a=t.oxw();t.xp6(4),t.Q6J("config",a.placesSwiperConfig),t.xp6(2),t.Q6J("ngForOf",null==a.allUserData?null:a.allUserData.userRate.data)}}function C(r,d){if(1&r&&(t.TgZ(0,"div",27),t._UZ(1,"app-empty-state",28),t.qZA()),2&r){const a=t.oxw();t.xp6(1),t.Q6J("title",a.emptyData.title)("text",a.emptyData.text)("icon",a.emptyData.icon)}}function P(r,d){if(1&r&&(t.TgZ(0,"div",25),t._UZ(1,"app-place-card",29),t.qZA()),2&r){const a=d.$implicit;t.xp6(1),t.Q6J("cardData",a)}}function O(r,d){if(1&r){const a=t.EpF();t.TgZ(0,"div",9)(1,"div",20)(2,"div",10)(3,"h5",11),t._uU(4),t.ALo(5,"translate"),t.qZA(),t.TgZ(6,"button",19),t.NdJ("click",function(){return t.CHM(a),t.oxw().onViewAllProperties()}),t._uU(7),t.ALo(8,"translate"),t.qZA()(),t.TgZ(9,"div",5)(10,"div",21),t.ynx(11),t.TgZ(12,"swiper",22)(13,"div",23),t.YNc(14,P,2,1,"div",24),t.qZA()(),t.BQk(),t.qZA()()()()}if(2&r){const a=t.oxw();t.xp6(4),t.hij(" ",t.lcZ(5,4,"ReviewsPage.Properties")," "),t.xp6(3),t.hij(" ",t.lcZ(8,6,"ReviewsPage.ViewAll")," "),t.xp6(5),t.Q6J("config",a.placesSwiperConfig),t.xp6(2),t.Q6J("ngForOf",null==a.allUserData||null==a.allUserData.properties?null:a.allUserData.properties.data)}}function x(r,d){1&r&&t.GkF(0)}let A=(()=>{class r{constructor(a,n,z){this.modalRef=a,this.translateService=n,this.router=z,this.placesSwiperConfig={autoplay:{delay:2e3},loopFillGroupWithBlank:!1,loopPreventsSlide:!0,loop:!1,spaceBetween:15,slidesPerView:2.5},this.emptyData={title:"",text:"",icon:""}}ngOnInit(){this.handleEmptyData()}handleEmptyData(){this.emptyData={title:this.translateService.instant("General.NoData"),text:this.translateService.instant("General.NoReviewsFound"),icon:"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"}}onViewAllReviews(){var a,n;this.modalRef.close(),this.router.navigateByUrl("/user/all-reviews/"+(null===(n=null===(a=this.allUserData)||void 0===a?void 0:a.userDetails)||void 0===n?void 0:n.id)+"/"+this.userType)}onViewAllProperties(){var a,n;this.modalRef.close(),this.router.navigateByUrl("/host/all-properties/"+(null===(n=null===(a=this.allUserData)||void 0===a?void 0:a.userDetails)||void 0===n?void 0:n.id))}handleCancel(){this.modalRef.close()}}return r.\u0275fac=function(a){return new(a||r)(t.Y36(p.Lf),t.Y36(g.sK),t.Y36(m.F0))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-user-details"]],inputs:{allUserData:"allUserData",userType:"userType"},decls:34,vars:20,consts:[[1,"details-modal"],[1,"row","align-items-center"],[1,"col-md-8","mb-3"],[1,"modal-group","d-flex","align-items-center"],[1,"label"],[1,"content"],["width","80px","height","80px","class","img-fluid rounded-circle avatar-img",3,"src",4,"ngIf"],["src","assets/imgs/user-profile-img.svg","class","img-fluid avatar-img border-0","width","84px","height","79px",4,"ngIf"],[1,"col-md-6","mb-3"],[1,"col-md-12","mt-3","mb-3"],[1,"head","mb-2"],[1,"title"],["nz-button","","nzType","default","class","mr-1 ml-1",3,"click",4,"ngIf"],["class","modal-group",4,"ngIf"],["class","empty-state",4,"ngIf"],["class","col-md-12 mt-3 mb-3",4,"ngIf"],[4,"nzModalFooter"],["width","80px","height","80px",1,"img-fluid","rounded-circle","avatar-img",3,"src"],["src","assets/imgs/user-profile-img.svg","width","84px","height","79px",1,"img-fluid","avatar-img","border-0"],["nz-button","","nzType","default",1,"mr-1","ml-1",3,"click"],[1,"modal-group"],[1,"result-cards-wrapper","mt-3"],[1,"swiper-slides-container",3,"config"],[1,"swiper-wrapper"],["class","swiper-slide",4,"ngFor","ngForOf"],[1,"swiper-slide"],[3,"reviewData"],[1,"empty-state"],[3,"title","text","icon"],[3,"cardData"]],template:function(a,n){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span",4),t._uU(5),t.ALo(6,"translate"),t.qZA(),t.TgZ(7,"span",5),t.YNc(8,h,1,1,"img",6),t.YNc(9,l,1,0,"img",7),t.qZA()()(),t.TgZ(10,"div",8)(11,"div",3)(12,"span",4),t._uU(13),t.ALo(14,"translate"),t.qZA(),t.TgZ(15,"span",5),t._uU(16),t.qZA()()(),t.TgZ(17,"div",8)(18,"div",3)(19,"span",4),t._uU(20),t.ALo(21,"translate"),t.qZA(),t.TgZ(22,"span",5),t._uU(23),t.qZA()()(),t.TgZ(24,"div",9)(25,"div",10)(26,"h5",11),t._uU(27),t.ALo(28,"translate"),t.qZA(),t.YNc(29,u,3,3,"button",12),t.qZA(),t.YNc(30,_,7,2,"div",13),t.YNc(31,C,2,3,"div",14),t.qZA(),t.YNc(32,O,15,8,"div",15),t.qZA()(),t.YNc(33,x,1,0,"ng-container",16)),2&a&&(t.xp6(5),t.hij(" ",t.lcZ(6,12,"Profile.ProfileImg")," : "),t.xp6(3),t.Q6J("ngIf",null==n.allUserData||null==n.allUserData.userDetails?null:n.allUserData.userDetails.avatar),t.xp6(1),t.Q6J("ngIf",!(null!=n.allUserData&&null!=n.allUserData.userDetails&&n.allUserData.userDetails.avatar)),t.xp6(4),t.hij(" ",t.lcZ(14,14,"Auth.FirstName")," : "),t.xp6(3),t.hij(" ",null==n.allUserData||null==n.allUserData.userDetails?null:n.allUserData.userDetails.first_name," "),t.xp6(4),t.hij(" ",t.lcZ(21,16,"Auth.LastName")," : "),t.xp6(3),t.hij(" ",null==n.allUserData||null==n.allUserData.userDetails?null:n.allUserData.userDetails.last_name," "),t.xp6(4),t.hij(" ",t.lcZ(28,18,"ReviewsPage.UserReviews")," "),t.xp6(2),t.Q6J("ngIf",null==n.allUserData||null==n.allUserData.userRate||null==n.allUserData.userRate.data?null:n.allUserData.userRate.data.length),t.xp6(1),t.Q6J("ngIf",null==n.allUserData||null==n.allUserData.userRate||null==n.allUserData.userRate.data?null:n.allUserData.userRate.data.length),t.xp6(1),t.Q6J("ngIf",!(null!=n.allUserData&&null!=n.allUserData.userRate&&null!=n.allUserData.userRate.data&&n.allUserData.userRate.data.length)),t.xp6(1),t.Q6J("ngIf",null==n.allUserData||null==n.allUserData.properties||null==n.allUserData.properties.data?null:n.allUserData.properties.data.length))},directives:[i.O5,v.ix,o.dQ,c.w,U.n,i.sg,M.I,E.s,s.$,p.Uh],pipes:[g.X$],styles:[".details-modal[_ngcontent-%COMP%]   .modal-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{color:var(--bs-gray-600);font-size:15px;padding-inline-end:10px}.details-modal[_ngcontent-%COMP%]   .modal-group[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{color:var(--bs-dark);font-size:17px}.head[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.head[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:var(--bs-primary)}.head[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:var(--bs-primary);border-color:var(--bs-primary)}.head[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:var(--bs-white);border-color:var(--bs-primary);background-color:var(--bs-primary);transition:all .3s ease-in-out}"]}),r})()}}]);