(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[921],{9230:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/About",function(){return n(7959)}])},5631:function(e,t,n){"use strict";var r=n(5893),a=n(1664);t.Z=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("nav",{children:(0,r.jsxs)("div",{className:"flex flex-col md:flex-row p-4 container mx-auto lg:max-w-screen-md justify-between",children:[(0,r.jsx)("div",{className:"mt-1 pr-4 py-4",children:(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("a",{className:"text-gradient bg-gradient-to-r from-gray-700 to-supertext text-4xl font-banger font-semibold ",children:"Alexis Fraudita"})})}),(0,r.jsxs)("div",{className:" md:m-2 md:p-4 space-x-4 md:text-center",children:[(0,r.jsx)(a.default,{href:"/Posts",children:(0,r.jsx)("a",{className:"text-background font-semibold font-Roboto hover:underline hover:text-blue-500",children:"Posts"})}),(0,r.jsx)(a.default,{href:"/Projects",children:(0,r.jsx)("a",{className:"text-background font-semibold font-Roboto hover:underline hover:text-blue-500",children:"Projects"})}),(0,r.jsx)(a.default,{href:"/About",children:(0,r.jsx)("a",{className:"text-background font-semibold font-Roboto hover:underline hover:text-blue-500",children:"About"})})]})]})})})}},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,s=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(l){a=!0,s=l}finally{try{r||null==i.return||i.return()}finally{if(a)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var a,s=(a=n(7294))&&a.__esModule?a:{default:a},o=n(6273),i=n(387),l=n(7190);var c={};function u(e,t,n,r){if(e&&o.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,a=i.useRouter(),f=s.default.useMemo((function(){var t=r(o.resolveHref(a,e.href,!0),2),n=t[0],s=t[1];return{href:n,as:e.as?o.resolveHref(a,e.as):s||n}}),[a,e.href,e.as]),d=f.href,h=f.as,m=e.children,x=e.replace,p=e.shallow,v=e.scroll,g=e.locale;"string"===typeof m&&(m=s.default.createElement("a",null,m));var b=(t=s.default.Children.only(m))&&"object"===typeof t&&t.ref,j=r(l.useIntersection({rootMargin:"200px"}),2),y=j[0],w=j[1],N=s.default.useCallback((function(e){y(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,y]);s.default.useEffect((function(){var e=w&&n&&o.isLocalURL(d),t="undefined"!==typeof g?g:a&&a.locale,r=c[d+"%"+h+(t?"%"+t:"")];e&&!r&&u(a,d,h,{locale:t})}),[h,d,w,g,n,a]);var k={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,s,i,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[a?"replace":"push"](n,r,{shallow:s,locale:l,scroll:i}))}(e,a,d,h,x,p,v,g)},onMouseEnter:function(e){o.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(a,d,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof g?g:a&&a.locale,_=a&&a.isLocaleDomain&&o.getDomainLocale(h,E,a&&a.locales,a&&a.domainLocales);k.href=_||o.addBasePath(o.addLocale(h,E,a&&a.defaultLocale))}return s.default.cloneElement(t,k)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,s=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(l){a=!0,s=l}finally{try{r||null==i.return||i.return()}finally{if(a)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,l=a.useRef(),c=r(a.useState(!1),2),u=c[0],f=c[1],d=a.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||u||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,s=r.observer,o=r.elements;return o.set(e,t),s.observe(e),function(){o.delete(e),s.unobserve(e),0===o.size&&(s.disconnect(),i.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return a.useEffect((function(){if(!o&&!u){var e=s.requestIdleCallback((function(){return f(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[u]),[d,u]};var a=n(7294),s=n(9311),o="undefined"!==typeof IntersectionObserver;var i=new Map},7959:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(9008),s=n(5631),o=n(1664);t.default=function(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:"About | Alexis Fraudita"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"},"viewport"),(0,r.jsx)("style",{"data-href":"https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"}),(0,r.jsx)("style",{"data-href":"https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap"})]}),(0,r.jsx)(s.Z,{}),(0,r.jsxs)("main",{className:"container mx-auto p-5 lg:max-w-screen-md min-h-screen",children:[(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("div",{className:"p-4",children:(0,r.jsx)("h1",{className:" prose-xl text-center text-5xl text-background mb-4 font-bebasNue",children:"Who I am ?"})}),(0,r.jsxs)("div",{className:"flex flex-col lg:flex-row lg:space-x-10",children:[(0,r.jsx)("div",{className:"justify-center mb-10 mx-auto",children:(0,r.jsx)("img",{src:"/images/me.jpeg",className:"rounded-xl w-40 lg:w-80 ",alt:"me"})}),(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("p",{className:"md:mx-auto prose md:text-justify text-background font-nunito clear-left",children:"I am Electrical Engineer Student at Central University of Venezuela and software developer, interested in AI techniques specially in reinforcement learning for robotics applications. Currently, i am working on my Bachelor thesis that is about a framework for create smart controllers in robots manipulators using Reinforcement Learning."}),(0,r.jsx)("p",{className:"md:mx-auto prose md:text-justify font-nunito text-background mt-2",children:"I love technology in general and how it can be integrated for resolve real problems that people needs, so I decided to create this blog to share my projects and post about what i am learning."}),(0,r.jsx)("p",{className:"md:mx-auto prose md:text-justify font-nunito text-background mt-2",children:"Some others things and interests that I enjoy are sports like table tennis, compose music and watch movies that for me is a source of inspiration."})]})]})]}),(0,r.jsxs)("div",{className:"p-4 mt-10",children:[(0,r.jsx)("h1",{className:"prose text-supertext text-4xl font-bebasNue text-center ",children:"You can Find me On"}),(0,r.jsxs)("div",{className:"p-4 flex flex-row justify-center space-x-4",children:[(0,r.jsx)("div",{children:(0,r.jsx)(o.default,{href:"https://github.com/Alexfm101",passHref:!0,children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{alt:"github",src:"/images/github.svg",className:"w-8"})})})}),(0,r.jsx)("div",{children:(0,r.jsx)(o.default,{href:"https://www.linkedin.com/in/alexis-fraudita/",passHref:!0,children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{alt:"linkedin",src:"/images/linkedin.svg",className:"w-8"})})})}),(0,r.jsx)("div",{children:(0,r.jsx)(o.default,{href:"https://twitter.com/FrauditaAlexis",passHref:!0,children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{alt:"twitter",src:"/images/twitter.svg",className:"w-8"})})})})]})]})]})]})}},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=9230,e(e.s=t);var t}));var t=e.O();_N_E=t}]);