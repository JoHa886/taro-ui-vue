(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"318":function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var n=t(2),l=t(3),c=t(10),s=t(11),r=t(4),i=t(82),o=t.n(i),u=t(23),m=t.n(u),d=t(317),p=(t(319),function(e){Object(c.a)(DocsHeader,e);var a=Object(s.a)(DocsHeader);function DocsHeader(){return Object(n.a)(this,DocsHeader),a.apply(this,arguments)}return Object(l.a)(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return m.a.createElement(d.View,{"className":"doc-header"},m.a.createElement(d.View,{"className":"doc-header__title"},e))}}]),DocsHeader}(m.a.Component));Object(r.a)(p,"defaultProps",void 0),Object(r.a)(p,"propTypes",void 0),p.defaultProps={"title":"标题"},p.propTypes={"title":o.a.string}},"319":function(e,a,t){},"401":function(e,a,t){},"452":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return h}));var n=t(2),l=t(3),c=t(18),s=t(10),r=t(11),i=t(4),o=t(23),u=t.n(o),m=t(320),d=t(317),p=t(318),h=(t(401),function(e){Object(s.a)(Index,e);var a=Object(r.a)(Index);function Index(e){var t;return Object(n.a)(this,Index),t=a.call(this,e),Object(i.a)(Object(c.a)(t),"config",{"navigationBarTitleText":"Taro UI"}),t.state={"value1":[50,60],"value2":[50,60]},t}return Object(l.a)(Index,[{"key":"handleChange","value":function handleChange(e,a){this.setState(Object(i.a)({},e,a))}},{"key":"render","value":function render(){return u.a.createElement(d.View,{"className":"page"},u.a.createElement(p.a,{"title":"Range 范围选择器"}),u.a.createElement(d.View,{"className":"doc-body"},u.a.createElement(d.View,{"className":"panel"},u.a.createElement(d.View,{"className":"panel__title"},"基础用法"),u.a.createElement(d.View,{"className":"panel__content"},u.a.createElement(d.View,{"className":"example-item"},"数值范围：",this.state.value1[0],"~",this.state.value1[1]),u.a.createElement(m.AtRange,{"min":30,"max":90,"value":this.state.value1,"onChange":this.handleChange.bind(this,"value1")}))),u.a.createElement(d.View,{"className":"panel"},u.a.createElement(d.View,{"className":"panel__title"},"自定义样式"),u.a.createElement(d.View,{"className":"panel__content"},u.a.createElement(d.View,{"className":"example-item"},"数值范围：",this.state.value2[0],"~",this.state.value2[1]),u.a.createElement(m.AtRange,{"sliderStyle":{"backgroundColor":"#6190E8"},"value":this.state.value2,"onChange":this.handleChange.bind(this,"value2")}))),u.a.createElement(d.View,{"className":"panel"},u.a.createElement(d.View,{"className":"panel__title"},"禁止状态"),u.a.createElement(d.View,{"className":"panel__content"},u.a.createElement(m.AtRange,{"value":[30,50],"disabled":!0})))))}}]),Index}(u.a.Component))}}]);