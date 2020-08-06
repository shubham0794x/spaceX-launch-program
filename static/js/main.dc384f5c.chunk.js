(this.webpackJsonpspacexlauncher=this.webpackJsonpspacexlauncher||[]).push([[0],{18:function(e,a,t){e.exports=t(42)},23:function(e,a,t){},24:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),s=t(16),l=t.n(s),r=(t(23),t(3)),u=t(1),i=(t(24),{header:"SpaceX Launch Programs",filter:{year:"Launch Year",launchSuccess:"Launch Success",landSuccess:"Land Success"},launchItem:{missionIds:"Mission Ids:",launchYear:"Launch Year:",launchSuccess:"Successful Launch:",landSuccess:"Successful Land:"},developer:"Aakash Jha"}),o=t(17),m=(t(6),function(e){var a=e.title,t=e.isChecked,c=e.onClick;Object(o.a)(e,["title","isChecked","onClick"]);return n.a.createElement("div",{className:"checkbox-list__item ".concat(t?"checkbox-list__item--pressed":""),onClick:function(){c(a)}},n.a.createElement("span",null,a))}),h=[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020].map((function(e){return e.toString()})),d={True:!0,False:!1},f={true:"True",false:"False",none:""},E=function(e){var a=e.updateYears,t=n.a.useRef(!1),c=n.a.useState(f.none),s=Object(r.a)(c,2),l=s[0],u=s[1];n.a.useEffect((function(){t.current?a(l):t.current=!0}),[l]);var o=function(e){u(l===e?f.none:e)};return n.a.createElement("div",{className:"sub-filter"},n.a.createElement("span",{className:"sub-filter__text"},i.filter.year),n.a.createElement("p",{className:"divider"}),n.a.createElement("div",{className:"checkbox-list"},h.map((function(e){return n.a.createElement(m,{key:e,title:e,isChecked:l===e,onClick:o})}))))},_=function(e){var a=e.updateSuccessLaunch,t=n.a.useRef(!1),c=n.a.useState(f.none),s=Object(r.a)(c,2),l=s[0],u=s[1];n.a.useEffect((function(){t.current?a(l):t.current=!0}),[l]);var o=function(e){u(e===l?f.none:e)};return n.a.createElement("div",{className:"sub-filter"},n.a.createElement("span",{className:"sub-filter__text"},i.filter.launchSuccess),n.a.createElement("p",{className:"divider"}),n.a.createElement("div",{className:"checkbox-list"},n.a.createElement(m,{title:f.true,isChecked:l===f.true,onClick:o}),n.a.createElement(m,{title:f.false,isChecked:l===f.false,onClick:o})))},p=function(e){var a=e.updateSuccessLand,t=n.a.useRef(!1),c=n.a.useState(f.none),s=Object(r.a)(c,2),l=s[0],u=s[1];n.a.useEffect((function(){t.current?a(l):t.current=!0}),[l]);var o=function(e){u(e===l?f.none:e)};return n.a.createElement("div",{className:"sub-filter"},n.a.createElement("span",{className:"sub-filter__text"},i.filter.landSuccess),n.a.createElement("p",{className:"divider"}),n.a.createElement("div",{className:"checkbox-list"},n.a.createElement(m,{title:f.true,isChecked:l===f.true,onClick:o}),n.a.createElement(m,{title:f.false,isChecked:l===f.false,onClick:o})))},b=n.a.memo((function(e){var a=e.updateYears,t=e.updateSuccessLaunch,c=e.updateSuccessLand;return n.a.createElement("aside",{className:"page-filters"},n.a.createElement("h2",{className:"page-filters__header"},"Filters"),n.a.createElement(E,{updateYears:function(e){a(e)}}),n.a.createElement(_,{updateSuccessLaunch:function(e){t(e)}}),n.a.createElement(p,{updateSuccessLand:function(e){c(e)}}))})),S=(t(7),function(e){var a=e.src,t=e.missionName,c=e.flightNumber,s=e.missionIds,l=e.launchYear,r=e.launchSuccess,u=e.landSuccess;return n.a.createElement("div",{className:"launch-list__item"},n.a.createElement("img",{className:"launch-list__item__avatar",src:a,alt:"mission-patch"}),n.a.createElement("h3",{className:"launch-list__item__title"},"".concat(t," #").concat(c)),n.a.createElement("div",{className:"launch-list__item__list"},n.a.createElement("h3",{className:"subtitle__header"},i.launchItem.missionIds),n.a.createElement("ul",{className:"subtitle_list"},s.map((function(e,a){return n.a.createElement("li",{key:a},e)})))),n.a.createElement("div",{className:"launch-list__item__subtitle"},n.a.createElement("h3",{className:"subtitle__header"},i.launchItem.launchYear),n.a.createElement("p",{className:"subtitle__text"},l)),n.a.createElement("div",{className:"launch-list__item__subtitle"},n.a.createElement("h3",{className:"subtitle__header"},i.launchItem.launchSuccess),n.a.createElement("p",{className:"subtitle__text"},"object"!==typeof r?r.toString():"Unknown")),n.a.createElement("div",{className:"launch-list__item__subtitle"},n.a.createElement("h3",{className:"subtitle__header"},i.launchItem.landSuccess),n.a.createElement("p",{className:"subtitle__text"},"object"!==typeof u?u.toString():"Unknown")))}),v=t(4),N=t.n(v),g={loading:"Searching...",requestCancelled:"Searching for latest changes...",noItemsFounds:"No Launches to show!",serverError:"Unable to contact the server!",offline:"Connectivity lost!"},L={launches:"https://api.spacexdata.com/v3/launches"},k=N.a.CancelToken.source(),C=function(e){var a=e.filters,t=a.year,c=a.successLand,s=a.successLaunch,l=n.a.useState({launchList:[],isLoading:!1,hasError:""}),i=Object(r.a)(l,2),o=i[0],m=i[1];n.a.useEffect((function(){m(Object(u.a)(Object(u.a)({},o),{},{isLoading:!0,launchList:[],hasError:""})),function(e,a,t){return k.cancel(),k=N.a.CancelToken.source(),N.a.get(L.launches,{params:{launch_year:e||void 0,land_success:d[a]||void 0,launch_success:d[t]||void 0},cancelToken:k.token,timeout:7e3})}(t,c,s).then((function(e){var a=e.data;m(Object(u.a)(Object(u.a)({},o),{},{isLoading:!1,launchList:a.length?a:[],hasError:!a.length&&g.noItemsFounds}))})).catch((function(e){h(e)}))}),[t,c,s]);var h=function(e){N.a.isCancel(e)?m(Object(u.a)(Object(u.a)({},o),{},{isLoading:!1,hasError:g.requestCancelled})):navigator.onLine?m(Object(u.a)(Object(u.a)({},o),{},{isLoading:!1,hasError:g.serverError})):m(Object(u.a)(Object(u.a)({},o),{},{isLoading:!1,hasError:g.offline}))};return n.a.createElement("section",{className:"launch-list-wrapper"},n.a.createElement("div",{className:"launch-list"},o.isLoading&&n.a.createElement("p",null,g.loading),o.isLoading||o.hasError?n.a.createElement("p",null,o.hasError):o.launchList.map((function(e){return n.a.createElement(S,{key:e.mission_name+e.flight_number.toString(),src:e.links.mission_patch_small,missionName:e.mission_name,flightNumber:e.flight_number.toString(),missionIds:e.mission_id,launchYear:e.launch_year,landSuccess:e.rocket.first_stage.cores[0].land_success,launchSuccess:e.launch_success})}))))},y={year:f.none,successLand:f.none,successLaunch:f.none},j=function(e,a){switch(a.type){case"UPDATE_YEARS":return Object(u.a)(Object(u.a)({},e),{},{year:a.payload.year});case"UPDATE_SUCCESS_LAUNCH":return Object(u.a)(Object(u.a)({},e),{},{successLaunch:a.payload.successLaunch});case"UPDATE_SUCCESS_LAND":return Object(u.a)(Object(u.a)({},e),{},{successLand:a.payload.successLand});default:return Object(u.a)({},e)}};var O=function(){var e=n.a.useReducer(j,y),a=Object(r.a)(e,2),t=a[0],c=a[1],s=n.a.useCallback((function(e){return o(e)}),[]),l=n.a.useCallback((function(e){return m(e)}),[]),u=n.a.useCallback((function(e){return h(e)}),[]),o=function(e){c({type:"UPDATE_YEARS",payload:{year:e}})},m=function(e){c({type:"UPDATE_SUCCESS_LAUNCH",payload:{successLaunch:e}})},h=function(e){c({type:"UPDATE_SUCCESS_LAND",payload:{successLand:e}})};return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",{className:"page-title"},n.a.createElement("h1",{className:"page-title__text"},i.header)),n.a.createElement("section",{className:"page-content"},n.a.createElement(b,{updateYears:s,updateSuccessLaunch:l,updateSuccessLand:u}),n.a.createElement(C,{filters:t})),n.a.createElement("section",{className:"filler"}),n.a.createElement("footer",{className:"page-footer"},n.a.createElement("p",{className:"page-footer__text"},"Developed by:"),n.a.createElement("p",{className:"page-footer__name"},i.developer)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,a,t){},7:function(e,a,t){}},[[18,1,2]]]);
//# sourceMappingURL=main.dc384f5c.chunk.js.map