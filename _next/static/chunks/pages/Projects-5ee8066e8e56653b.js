(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[375],{9156:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Projects",function(){return r(7002)}])},6124:function(e,t,r){"use strict";var n=r(5893),a=r(1664);t.Z=function(){var e=(new Date).getFullYear();return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("footer",{className:"py-12",children:[(0,n.jsxs)("div",{className:"flex justify-center space-x-4 mt-4",children:[(0,n.jsx)(a.default,{href:"https://github.com/alefram",children:(0,n.jsx)("a",{children:(0,n.jsx)("img",{alt:"githubFooter",src:"/images/github.svg",className:"w-8"})})}),(0,n.jsx)(a.default,{href:"https://twitter.com/FrauditaAlexis",children:(0,n.jsx)("a",{children:(0,n.jsx)("img",{alt:"twitterFooter",src:"/images/twitter.svg",className:"w-8"})})})]}),(0,n.jsx)("div",{className:"text-center text-lg text-background",children:(0,n.jsxs)("small",{children:["Make with \ud83d\udc99 \xa9",e," All rights reserved"]})})]})})}},5631:function(e,t,r){"use strict";var n=r(5893),a=r(1664);t.Z=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("nav",{children:(0,n.jsxs)("div",{className:"flex flex-col md:flex-row p-4 container mx-auto lg:max-w-screen-md justify-between md:items-center",children:[(0,n.jsx)("div",{className:"mt-1",children:(0,n.jsx)(a.default,{href:"/",children:(0,n.jsx)("a",{className:" text-background font-bold text-4xl font-square-peg",children:"AleBlog"})})}),(0,n.jsxs)("div",{className:"mt-2 md:m-2 md:p-4 space-x-4 md:text-center",children:[(0,n.jsx)(a.default,{href:"/Projects",children:(0,n.jsx)("a",{className:"text-background font-bold hover:underline hover:text-blue-500 font-nunito",children:"Projects"})}),(0,n.jsx)(a.default,{href:"/About",children:(0,n.jsx)("a",{className:"text-background font-bold hover:underline hover:text-blue-500 font-nunito",children:"About"})})]})]})})})}},8418:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(l){a=!0,o=l}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var a,o=(a=r(7294))&&a.__esModule?a:{default:a},i=r(6273),c=r(387),l=r(7190);var s={};function u(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,a=c.useRouter(),f=o.default.useMemo((function(){var t=n(i.resolveHref(a,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?i.resolveHref(a,e.as):o||r}}),[a,e.href,e.as]),d=f.href,m=f.as,x=e.children,h=e.replace,p=e.shallow,v=e.scroll,j=e.locale;"string"===typeof x&&(x=o.default.createElement("a",null,x));var g=(t=o.default.Children.only(x))&&"object"===typeof t&&t.ref,y=n(l.useIntersection({rootMargin:"200px"}),2),b=y[0],w=y[1],N=o.default.useCallback((function(e){b(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,b]);o.default.useEffect((function(){var e=w&&r&&i.isLocalURL(d),t="undefined"!==typeof j?j:a&&a.locale,n=s[d+"%"+m+(t?"%"+t:"")];e&&!n&&u(a,d,m,{locale:t})}),[m,d,w,j,r,a]);var E={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,c,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==c&&n.indexOf("#")>=0&&(c=!1),t[a?"replace":"push"](r,n,{shallow:o,locale:l,scroll:c}))}(e,a,d,m,h,p,v,j)},onMouseEnter:function(e){i.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(a,d,m,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var _="undefined"!==typeof j?j:a&&a.locale,k=a&&a.isLocaleDomain&&i.getDomainLocale(m,_,a&&a.locales,a&&a.domainLocales);E.href=k||i.addBasePath(i.addLocale(m,_,a&&a.defaultLocale))}return o.default.cloneElement(t,E)};t.default=f},7190:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(l){a=!0,o=l}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,l=a.useRef(),s=n(a.useState(!1),2),u=s[0],f=s[1],d=a.useCallback((function(e){l.current&&(l.current(),l.current=void 0),r||u||e&&e.tagName&&(l.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,o=n.observer,i=n.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),c.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,u]);return a.useEffect((function(){if(!i&&!u){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[u]),[d,u]};var a=r(7294),o=r(9311),i="undefined"!==typeof IntersectionObserver;var c=new Map},7002:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return s},default:function(){return u}});var n=r(5893),a=r(9008),o=r(6124),i=r(5631),c=r(1664);function l(e){var t=e.id,r=e.title,a=e.description,o=e.image,i=e.altImage;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"flex flex-col p-0 content-center m-2 md:flex-row md:space-x-5 mt-5",children:[(0,n.jsx)("img",{src:o,alt:i,className:"rounded-xl md:w-40 md:rounded-xl"}),(0,n.jsxs)("div",{className:" flex flex-col",children:[(0,n.jsx)(c.default,{href:"/projects/".concat(t),children:(0,n.jsx)("a",{className:"mt-2 md:mt-0 font-bold text-background text-lg lg:text-2xl font-nunito",children:r})}),(0,n.jsx)("small",{className:"mt-1 font-Roboto text-gray-600 text-base",children:a})]})]})})}var s=!0;function u(e){var t=e.allProjectsData;return(0,n.jsxs)("div",{children:[(0,n.jsxs)(a.default,{children:[(0,n.jsx)("title",{children:"Projects | Alexis Fraudita"}),(0,n.jsx)("meta",{name:"description",content:"Here There are my projects about Machine Learning, Robotics and Electronics that are my personal portfolio"}),(0,n.jsx)("meta",{name:"author",content:"Alexis Fraudita"}),(0,n.jsx)("meta",{name:"keywords",content:"Machine Learning, Robotics, Electronics, Reinforcement Learning, Blog, Portfolio, Alexis, Fraudita, Alexis Fraudita, Python, Pytorch"}),(0,n.jsx)("meta",{property:"og:title",content:"Projects | Alexis Fraudita"}),(0,n.jsx)("meta",{property:"og:description",content:"Here There are my projects about Machine Learning, Robotics and Electronics that are my personal portfolio"}),(0,n.jsx)("meta",{property:"og:url",content:"https://alefram.github.io/Projects"}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"},"viewport")]}),(0,n.jsx)(i.Z,{}),(0,n.jsxs)("main",{className:"mx-auto px-5 lg:max-w-screen-md",children:[(0,n.jsx)("div",{className:"m-2 p-4 mt-10",children:(0,n.jsx)("h1",{className:"text-4xl text-center text-background font-bold font-nunito",children:"Projects"})}),(0,n.jsx)("div",{children:(0,n.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.title,a=e.description,o=e.image,i=e.altImage;return(0,n.jsx)("li",{children:(0,n.jsx)(l,{title:r,id:t,description:a,image:o,altImage:i})},t)}))})})]}),(0,n.jsx)(o.Z,{})]})}},9008:function(e,t,r){e.exports=r(5443)},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=9156,e(e.s=t);var t}));var t=e.O();_N_E=t}]);