(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"318":function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(2),c=a(3),i=a(10),l=a(11),r=a(4),s=a(82),o=a.n(s),d=a(23),m=a.n(d),h=a(317),p=(a(319),function(e){Object(i.a)(DocsHeader,e);var t=Object(l.a)(DocsHeader);function DocsHeader(){return Object(n.a)(this,DocsHeader),t.apply(this,arguments)}return Object(c.a)(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return m.a.createElement(h.View,{"className":"doc-header"},m.a.createElement(h.View,{"className":"doc-header__title"},e))}}]),DocsHeader}(m.a.Component));Object(r.a)(p,"defaultProps",void 0),Object(r.a)(p,"propTypes",void 0),p.defaultProps={"title":"标题"},p.propTypes={"title":o.a.string}},"319":function(e,t,a){},"380":function(e,t,a){},"432":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return k}));var n=a(2),c=a(3),i=a(18),l=a(10),r=a(11),s=a(4),o=a(23),d=a.n(o),m=a(320),h=a(317),p=a(83),u=a(318),k=(a(380),function(e){Object(l.a)(Index,e);var t=Object(r.a)(Index);function Index(){var e;Object(n.a)(this,Index);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return e=t.call.apply(t,[this].concat(c)),Object(s.a)(Object(i.a)(e),"config",{"navigationBarTitleText":"Taro UI"}),e}return Object(c.a)(Index,[{"key":"handleClick","value":function handleClick(e){Object(p.showToast)({"title":e,"duration":2e3,"icon":"success"})}},{"key":"clickReturn","value":function clickReturn(){Object(p.showToast)({"title":"返回","duration":2e3,"icon":"success"})}},{"key":"clickMy","value":function clickMy(){Object(p.showToast)({"title":"我的","duration":2e3,"icon":"success"})}},{"key":"clickList","value":function clickList(){Object(p.showToast)({"title":"功能列表","duration":2e3,"icon":"success"})}},{"key":"render","value":function render(){return d.a.createElement(h.View,{"className":"page"},d.a.createElement(u.a,{"title":"NavBar 导航栏"}),d.a.createElement(h.View,{"className":"doc-body"},d.a.createElement(h.View,{"className":"panel"},d.a.createElement(h.View,{"className":"panel__title"},"基础用法"),d.a.createElement(h.View,{"className":"panel__content no-padding"},d.a.createElement(h.View,{"className":"example-item"},d.a.createElement(m.AtNavBar,{"onClickLeftIcon":this.handleClick.bind(this,"返回"),"title":"NavBar 导航栏示例","leftIconType":"chevron-left"})),d.a.createElement(h.View,{"className":"example-item"},d.a.createElement(m.AtNavBar,{"onClickLeftIcon":this.handleClick.bind(this,"返回"),"title":"NavBar 导航栏示例","leftIconType":"chevron-left","rightFirstIconType":"bullet-list","rightSecondIconType":"user"})),d.a.createElement(h.View,{"className":"example-item"},d.a.createElement(m.AtNavBar,{"onClickLeftIcon":this.handleClick.bind(this,"返回"),"title":"NavBar 导航栏示例","leftIconType":"chevron-left","rightFirstIconType":"user"})))),d.a.createElement(h.View,{"className":"panel"},d.a.createElement(h.View,{"className":"panel__title"},"自定义左上角文案"),d.a.createElement(h.View,{"className":"panel__content no-padding"},d.a.createElement(h.View,{"className":"example-item"},d.a.createElement(m.AtNavBar,{"onClickLeftIcon":this.handleClick.bind(this,"返回"),"title":"NavBar 导航栏示例","leftText":"返回","leftIconType":"chevron-left","rightFirstIconType":"bullet-list","rightSecondIconType":"user"})),d.a.createElement(h.View,{"className":"example-item"},d.a.createElement(m.AtNavBar,{"onClickLeftIcon":this.handleClick.bind(this,"返回"),"title":"NavBar 导航栏示例","leftText":"返回","rightFirstIconType":"bullet-list","rightSecondIconType":"user"})))),d.a.createElement(h.View,{"className":"panel"},d.a.createElement(h.View,{"className":"panel__title"},"自定义颜色"),d.a.createElement(h.View,{"className":"panel__content no-padding"},d.a.createElement(m.AtNavBar,{"onClickRgIconSt":this.clickList.bind(this),"onClickRgIconNd":this.clickMy.bind(this),"onClickLeftIcon":this.clickReturn.bind(this),"color":"#333","title":"NavBar 导航栏示例","leftText":"返回","rightFirstIconType":"bullet-list","rightSecondIconType":"user"}))),d.a.createElement(h.View,{"className":"panel"},d.a.createElement(h.View,{"className":"panel__title"},"自定义图标样式"),d.a.createElement(h.View,{"className":"panel__content no-padding"},d.a.createElement(m.AtNavBar,{"onClickRgIconSt":this.clickList.bind(this),"onClickRgIconNd":this.clickMy.bind(this),"onClickLeftIcon":this.clickReturn.bind(this),"color":"#333","title":"NavBar 导航栏示例","leftText":"返回","rightFirstIconType":"bullet-list","rightSecondIconType":{"value":"user","size":36,"color":"red"}}))),d.a.createElement(h.View,{"className":"panel"},d.a.createElement(h.View,{"className":"panel__title"},"无下划线"),d.a.createElement(h.View,{"className":"panel__content no-padding"},d.a.createElement(m.AtNavBar,{"border":!1,"onClickRgIconSt":this.clickList.bind(this),"onClickRgIconNd":this.clickMy.bind(this),"onClickLeftIcon":this.clickReturn.bind(this),"color":"#333","title":"NavBar 导航栏示例","leftText":"返回","rightFirstIconType":"bullet-list","rightSecondIconType":"user"})))))}}]),Index}(d.a.Component))}}]);