(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1194:function(e,t,n){"use strict";n.r(t);n(736);var a,o=n(735),c=n.n(o),l=n(3),i=n.n(l),r=n(6),s=n.n(r),u=n(2),m=n.n(u),d=n(5),p=n.n(d),h=n(1),E=n.n(h),g=n(23),w=n(795),_=n(731),k=n.n(_),v=(n(552),n(21),n(768)),y=n(935),f=n.n(y),b=Object(g.inject)("Store")(a=Object(g.observer)(a=function(e){function t(){i()(this,t);var e=m()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={loading:!1,data:v.a},e.getDetails=function(t){sessionStorage.dtkey=t.key,e.props.getDetails(t.key),console.log(t.key,0xca1c249de38e)},e.store=new w.a,e}return p()(t,e),s()(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return E.a.createElement("div",null,E.a.createElement("div",{className:"notice_top"},E.a.createElement("img",{src:f.a}),E.a.createElement("div",{className:"notice_top_input"},E.a.createElement("div",null,E.a.createElement("span",{className:"notice_top_msg"},"公告中心"),E.a.createElement("i",null),E.a.createElement("span",null,"Announcement center")))),E.a.createElement("div",{className:"notice_list"},E.a.createElement(c.a,{columns:[{dataIndex:"title",width:640,key:"key"},{dataIndex:"time",className:"table_row_right",width:180}],onRow:function(t){return{onClick:function(){e.getDetails(t)},onMouseEnter:function(){}}},dataSource:this.state.data,showHeader:!1,onChange:this.handleChange,locale:{emptyText:E.a.createElement("div",{className:"notice_nodata"},E.a.createElement("img",{src:k.a}),E.a.createElement("p",null,"暂无公告消息"))},rowKey:"key"})))}}]),t}(h.Component))||a)||a;t.default=b}}]);