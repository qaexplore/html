(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1212:function(e,t,a){"use strict";a.r(t);a(135);var n,l,r,o,i=a(79),s=a.n(i),c=(a(63),a(31)),m=a.n(c),u=(a(45),a(14)),d=a.n(u),p=a(4),h=a.n(p),f=a(6),g=a.n(f),E=a(3),C=a.n(E),v=a(5),b=a.n(v),y=(a(76),a(25)),w=a.n(y),B=(a(74),a(28)),S=a.n(B),N=a(1),_=a.n(N),k=a(23),T=(a(22),a(103),a(53)),D=a.n(T),P=(a(681),a(673)),j=a.n(P),O=(a(136),a(101)),G=a.n(O),x=(a(98),a(20)),F=a.n(x),L=a(24),z=a(17),A=w.a.Item,V=(S.a.Search,Object(k.inject)("store")(n=Object(k.observer)(n=function(e){function t(){h()(this,t);var e=C()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={codeHtml:"获取邮箱验证码",codeDisType:!1,timeAll:60,confirmDirty:!1,passGrade:"",grade:"",gradeStr:"",btnDisType:!0,codeLoading:!1},e.countDown=function(){var t=e.state.timeAll,a=e;setTimeout(function(){t?(a.setState({codeHtml:t+"秒后重新获取",codeDisType:!0}),a.state.timeAll=t-1,a.countDown()):(a.setState({codeHtml:"获取邮箱验证码",codeDisType:!1}),a.state.timeAll=60)},1e3)},e.drawingImg=function(t,a){var n=e;e.props.form.validateFields(["email"],{first:!0},function(t,a){t||(e.setState({codeLoading:!0}),new TencentCaptcha("2038116476",function(e){if(0===e.ret){var t={username:n.props.form.getFieldValue("email"),type:"reg",userip:e.appid,ticket:e.ticket,randstr:e.randstr};n.setState({codeLoading:!0}),n.getAuthCode(t)}}).show(),setTimeout(function(){e.setState({codeLoading:!1})},3e3))})},e.getAuthCode=function(t){var a=e;Object(z.c)("/api/v1/visitor/email-code",t,function(e){console.log(e),0===e.code?(d.a.success("验证码已发送到您的邮箱上，请注意查收"),a.countDown()):d.a.error(Object(z.f)(e))}),setTimeout(function(){e.setState({codeLoading:!1})},3e3)},e.CheckboxChange=function(t){e.setState({btnDisType:t.target.checked})},e.handleConfirmBlur=function(t){var a=t.target.value;e.setState({confirmDirty:e.state.confirmDirty||!!a})},e.compareToFirstPassword=function(t,a,n){var l=e.props.form;a&&a!==l.getFieldValue("password")?n("两次密码输入不一致！"):n()},e.validateToNextPassword=function(t,a,n){var l=e.props.form,r=l.getFieldValue("password");if(r&&/\s/.test(r))return n("非法格式，密码不能存在空格"),void e.setState({passGrade:"",grade:""});a&&e.state.confirmDirty&&l.validateFields(["confPassword"],{force:!0}),r&&r.length>=6&&!e.getPassGrade("",r)?n("密码不能全为数字！"):n()},e.codeType=function(t,a,n){var l=e.props.form.getFieldValue("emailCode");l&&!/^[0-9]*$/.test(l)&&n("验证码只能为数字！"),n()},e.getPassGrade=function(t,a){var n=t?t.target.value:a,l=!1,r=!1,o=!1;if(n){for(var i=0;i<n.length;i++){var s=n.charCodeAt(i);s>=48&&s<=57?l=!0:s>=65&&s<=90||s>=97&&s<=122?r=!0:o=!0}n.length>=6&&n.length<=8&&(r||o)&&e.setState({passGrade:"lowGrade",grade:"低",gradeStr:"low"}),n.length>=9&&n.length<=20&&(l&&r||r&&o||l&&o)&&e.setState({passGrade:"middleGrade",grade:"中",gradeStr:"medium"}),n.length>=9&&n.length<=20&&l&&r&&o&&e.setState({passGrade:"highGrade",grade:"高",gradeStr:"high"}),n.length<6&&e.setState({passGrade:"",grade:""})}return!(!r&&!o)||(e.setState({passGrade:"",grade:""}),!1)},e.agreement=function(t){t.preventDefault(),e.props.userContract()},e.handleSubmit=function(t){t.preventDefault();var a=e.props.store.updateLoading,n=e.props.form;e.props.submit(n,a,e.state.gradeStr)},e}return b()(t,e),g()(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.props.store.loading;return _.a.createElement(w.a,{onSubmit:this.handleSubmit,autocomplete:"off"},_.a.createElement(A,null,e("email",{rules:[{type:"email",message:"邮箱地址非法!"},{required:!0,message:"请输入邮箱!"}]})(_.a.createElement(S.a,{autocomplete:"off",prefix:_.a.createElement(F.a,{type:"mail"}),placeholder:"邮箱"}))),_.a.createElement(A,null,e("emailCode",{validateFirst:!0,rules:[{required:!0,message:"请输入邮箱验证码!"},{validator:this.codeType},{len:6,message:"验证码的长度为6!"}]})(_.a.createElement(S.a,{className:"searchInput",prefix:_.a.createElement(F.a,{type:"safety"}),onChange:this.codeChange,addonAfter:_.a.createElement(m.a,{disabled:this.state.codeDisType,className:"searchInBtn",onClick:this.drawingImg,loading:this.state.codeLoading},this.state.codeHtml),type:"text",placeholder:"输入6位短信验证码"}))),_.a.createElement(A,null,_.a.createElement(G.a,{overlayClassName:"inputTip",placement:"topLeft",trigger:"focus",title:_.a.createElement("div",null,_.a.createElement("ul",{className:this.state.passGrade},_.a.createElement("li",null,_.a.createElement("span",null)),_.a.createElement("li",null,_.a.createElement("span",null)),_.a.createElement("li",{className:"grade-hight"},_.a.createElement("span",null)),_.a.createElement("li",{className:"gradeMsg"},_.a.createElement("span",null,this.state.grade))),_.a.createElement("div",{className:"msgTip"},_.a.createElement(F.a,{type:"warning"})," 密码由6-20位字符组成，可包含大小写字母、数字和特殊符号，且不能全为数字"))},e("password",{validateFirst:!0,rules:[{validator:this.validateToNextPassword},{min:6,message:"密码长度不能少于6位"},{max:20,message:"密码长度不能大于20位"},{required:!0,message:"请输入密码"}]})(_.a.createElement(S.a,{autocomplete:"new-password off",onChange:this.getPassGrade,prefix:_.a.createElement(F.a,{type:"lock"}),type:"password",placeholder:"设置登录密码"})))),_.a.createElement(A,null,e("confPassword",{rules:[{required:!0,message:"请输入确认密码"},{validator:this.compareToFirstPassword}]})(_.a.createElement(S.a,{autocomplete:"new-password off",onBlur:this.handleConfirmBlur,prefix:_.a.createElement(F.a,{type:"lock"}),type:"password",placeholder:"确认密码"}))),_.a.createElement(A,null,e("inviteCode",{initialValue:this.props.invitCode})(_.a.createElement(S.a,{prefix:_.a.createElement(F.a,{type:"user-add"}),placeholder:"邀请码（选填）"}))),_.a.createElement(A,{className:"agreement-check"},e("agreement",{valuePropName:"checked",initialValue:!0})(_.a.createElement(j.a,{onChange:this.CheckboxChange},"已阅读并同意",_.a.createElement("a",{href:"javascript:;",onClick:this.agreement},"《BitCoCo用户服务协议》")))),_.a.createElement(A,null,_.a.createElement(m.a,{type:"primary",disabled:!this.state.btnDisType,htmlType:"submit",className:"l_button",loading:t},"注册")),_.a.createElement("p",{className:"toLogin"},"没有BitCoCo账号？",_.a.createElement(L.Link,{to:"/login"},"立即登录")))}}]),t}(N.Component))||n)||n),I=w.a.create()(V),q=a(19),H=a.n(q),M=a(12);function J(e,t,a,n){a&&Object.defineProperty(e,t,{enumerable:a.enumerable,configurable:a.configurable,writable:a.writable,value:a.initializer?a.initializer.call(n):void 0})}function R(e,t,a,n,l){var r={};return Object.keys(n).forEach(function(e){r[e]=n[e]}),r.enumerable=!!r.enumerable,r.configurable=!!r.configurable,("value"in r||r.initializer)&&(r.writable=!0),r=a.slice().reverse().reduce(function(a,n){return n(e,t,a)||a},r),l&&void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(l):void 0,r.initializer=void 0),void 0===r.initializer&&(Object.defineProperty(e,t,r),r=null),r}var K,U=(r=R((l=function e(){h()(this,e),J(this,"loading",r,this),J(this,"updateLoading",o,this)}).prototype,"loading",[M.observable],{enumerable:!0,initializer:function(){return!1}}),o=R(l.prototype,"updateLoading",[M.action],{enumerable:!0,initializer:function(){var e=this;return function(t){e.loading=t}}}),l),W=(a(482),function(e){function t(){return h()(this,t),C()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b()(t,e),g()(t,[{key:"render",value:function(){return _.a.createElement("div",{className:"deal_main"},_.a.createElement("p",{className:"deal_section"},'欢迎申请使用BitCoCo（www.wanlian.com）提供的服务。本协议由服务使用人（以下称"用户"）与BitCoCo共同缔结的协议，在您注册成为本平台用户前请务必仔细阅读以下条款。若您一旦注册，则表示您同意接受本平台的服务并受以下条款的约束。若您不接受以下条款，请您立即停止注册或主动停止使用本平台的服务。如用户一经注册即视为认可及接受本协议所有条款。此后，用户不得以未阅读本服务条款内容作任何形式的抗辩。用户注册成功后，BitCoCo将给予每个用户一个用户帐号及相应的密码，该用户帐号和密码由用户自行负责保管；用户应当对以其用户帐号进行的所有活动和事件负法律责任'),_.a.createElement("h3",null,"一、适用范围"),_.a.createElement("p",{className:"deal_section"},"本服务仅适用于18岁或以上的用户。通过访问或使用我们的服务，您声明并确保您至少年满18岁，没有被剥夺过适用本服务的权利。您也保证您不在任何恐怖活动组织及恐怖活动人员名单中，如联合国安理会决议中所列的恐怖活动组织及恐怖活动人员名单，也不受中国人民银行等行政执法机构限制或禁止适用任何交易平台。因此，如果您不符合这些要求，请勿使用我们的服务，否则本平台有权随时中止或终止您的用户资格。"),_.a.createElement("h3",null,"二、服务内容"),_.a.createElement("p",{className:"deal_section"},"我们提供一个包含数字资产的在线交易平台，用户有权在本网站浏览数字资产各项产品的实时行情及交易信息有权通过本网站提交数字资产交易指令并完成数字资产交易。您有权在本网站查看其本网站会员账号下的信息，有权应用本网站提供的功能进行操作。您有权按照本网站发布的活动规则参与本网站组织的网站活动。BitCoCo的服务若涉及收费的网络交易服务，我们会在用户使用之前给予用户明确的提示，只有用户根据提示确认其愿意支付相关交易费用，用户才能使用该收费的网络交易服务。如用户拒绝支付相关交易费用，则BitCoCo有权不向用户提供该收费的网络交易服务。"),_.a.createElement("p",{className:"deal_section"},"BitCoCo会尽力确保网站上信息的准确性。网站上的信息和内容如有更改，恕不另行通知，且仅为协助用户以做出独立决定。BitCoCo已采取合理措施确保网站信息的准确性。但是，我们不保证本网站所提供的任何服务或产品内容的准确性，适用性，可靠性，完整性和恰当性，且不对任何直接或间接造成的损失或损害，信息传递的延迟或失败承担责任。BitCoCo对此类信息的使用或解释不承担任何责任。"),_.a.createElement("p",{className:"deal_section"},"用户同意，基于运行和交易安全的需要，本网站可以暂时停止提供或者限制本服务部分功能, 或提供新的功能，在任何功能减少、增加或者变化时，只要用户仍然使用本服务，表示用户仍然同意本协议或者变更后的协议。 本网站有权了解用户使用本网站产品或服务的真实交易背景及目的，用户应如实提供本网站所需的真实、全面、准确的信息；如果本网站有合理理由怀疑用户提供虚假交易信息的，本公司有权暂时或永久限制用户所使用的产品或服务的部分或全部功能。"),_.a.createElement("h3",null,"三、使用规则"),_.a.createElement("h5",null,"3.1账户资料内容规范"),_.a.createElement("p",null,"（1）您在申请使用平台网络服务时，应按照本平台相关规则要求提供准确的个人资料，如个人资料有任何变动，用户应及时更新。"),_.a.createElement("p",null,"（2）您不应将其账号、密码转让或出借予他人使用。如用户发现其账号遭他人非法使用，应立即通知平台。因病毒、黑客行为或用户的保管疏忽导致账号、密码遭他人非法使用，本平台不承担任何责任。"),_.a.createElement("h5",null,"3.2服务运营规范"),_.a.createElement("h5",null,"3.2.1除非法律允许或本平台书面许可，您使用平台及相关服务过程中不得从事下列行为："),_.a.createElement("p",null,"（1）用户应当遵守法律法规、规章、规范性文件及政策要求的规定，保证账户中所有数字货币来源的合法性；"),_.a.createElement("p",null,"（2）利用本平台网络服务进行任何可能对互联网或移动网络正常运转造成不利影响的行为；"),_.a.createElement("p",null,"（3）利用平台提供的网络服务上传、展示或传播任何虚假的、骚扰性的、中伤他人的、辱骂性的、恐吓性的、庸俗淫秽、暴力的或其他任何违反国家法律法规规定的信息资料、言论；"),_.a.createElement("p",null,"（4）利用平台网络服务系统进行任何不利于本平台的行为；"),_.a.createElement("p",null,"（5）诱导其他用户点击链接页面或分享信息；"),_.a.createElement("p",null,"（6）侵害他人名誉权、肖像权、知识产权、商业秘密等合法权利的；"),_.a.createElement("p",null,"（7）未经平台书面许可利用平台账号和任何功能，以及第三方运营平台进行推广或互相推广的；"),_.a.createElement("p",null,"（8）制作、发布与以上行为相关的方式、工具，或对此方式、工具进行运营或传播，无论这些行为是否为商业目的；"),_.a.createElement("p",null,"（9）以任何形式使用本平台网络服务侵犯任何人的商业利益，包括并不限于发布非经本平台许可的商业广告；"),_.a.createElement("p",null,"（10）其他违反法律法规的规定、侵犯任何第三方的在先权利或其他合法权益、干扰产品正常运营或本平台未明示授权的行为。"),_.a.createElement("h5",null,"3.2.2用户承诺在其进入本平台交易，通过平台与其他用户进行数字货币交易的过程中遵守包括但不限于如下所有本平台数字货币交易规则："),_.a.createElement("p",null,"（1）浏览交易信息"),_.a.createElement("p",{className:"deal_section"},"用户在本平台浏览数字货币交易信息时，应当仔细阅读交易信息中包含的全部内容，包括但不限于数字货币价格、委托量、手续费、买入或卖出方向，用户完全接受交易信息中包含的全部内容后方可点击按钮进行交易。"),_.a.createElement("p",null,"（2）提交委托"),_.a.createElement("p",{className:"deal_section"},"在浏览完交易信息确认无误之后用户可以提交交易委托。用户提交交易委托后，即用户授权本平台代理用户进行相应的交易撮合，本平台在有满足用户委托价格的交易时将会自动完成撮合交易而无需提前通知用户。"),_.a.createElement("p",null,"（3）查看交易明细"),_.a.createElement("p",{className:"deal_section"},"用户可以通过账户交易明细查看相应的成交记录，确认自己的详情交易记录。"),_.a.createElement("p",null,"（4）撤销/修改委托"),_.a.createElement("p",{className:"deal_section"},"在委托未达成交易之前，用户有权随时撤销或修改委托。"),_.a.createElement("p",null,"3.3本平台有权对您使用平台网络服务的情况进行审查和监督(包括但不限于对用户存储在平台的内容进行审核)，如您在使用网络服务时违反任何上述规定，本平台或其授权人有权要求您改正或直接采取一切必要的措施（包括但不限于更改或删除您张贴的内容、暂停或终止您使用网络服务的权利），以减轻用户的不当行为造成的影响。"),_.a.createElement("h3",null,"四、免责声明"),_.a.createElement("h5",null,"4.1用户明确同意其使用BitCoCo服务所存在的风险将完全由其自己承担，因其使用BitCoCo服务而产生的一切后果也由其自己承担，BitCoCo对用户不承担任何责任；"),_.a.createElement("h5",null,"4.2BitCoCo所提供的任何信息（包括但不限于BitCoCo官方提供的、外部获取的、BitCoCo邀请的他人发布的），BitCoCo并不能保证其完全实时或完全准确，也不表明BitCoCo证实其描述或赞同其观点。所有内容仅供参考，不构成投资建议或者其他实际的操作意见，用户据此操作所造成的后果自行负责；"),_.a.createElement("h5",null,"4.3BitCoCo不保证服务一定能满足用户的要求，也不保证服务不会中断，对服务的及时性、安全性、准确性也都不作保证。对于各种原因造成的网络服务中断、资料丢失、数据损毁或其他缺陷，BitCoCo不承担任何责任；"),_.a.createElement("h5",null,"4.4用户明确同意使用BitCoCo的风险由用户个人承担。对于所有的用户注册资料、姓名、身份、手机以及其他行为，BitCoCo拒绝提供任何担保；"),_.a.createElement("h5",null,"4.5用户同意，对于BitCoCo因为黑客攻击、水灾、风灾、旱灾、地震、战争、封锁、政府禁令等不可抗力事件，而导致用户资料意外泄漏，BitCoCo并不对此负责；"),_.a.createElement("h5",null,"4.6您通过本平台与其他第三方进行任何形式的通讯或商业往来，或参与促销活动、购买相关的商品或服务等，为您与第三方的交易行为。您因前述交易行为与第三方发生纠纷的，应由您及第三方自行解决，必要时，本平台也居间协调处理但对此不承担任何责任。"),_.a.createElement("h3",null,"五、知识产权"),_.a.createElement("h5",null,"5.1 本网站所包含的全部智力成果包括但不限于网站标志、数据库、网站设计、文字和图表、软件、照片、录像、音乐、声音及其前述组合，软件编译、相关源代码和软件 (包括小应用程序和脚本) 的知识产权权利均归本网站所有。您不得为商业目的复制、更改、拷贝、发送或使用前述任何材料或内容；"),_.a.createElement("h5",null,"5.2 本网站名称中包含的所有权利 (包括但不限于商誉和商标、标志) 均归公司所有；"),_.a.createElement("h5",null,"5.3 您接受本协议即视为您主动将其在本网站发表的任何形式的信息的著作权， 包括但不限于：复制权、发行权、出租权、展览权、表演权、放映权、广播权、信息网络传播权、摄制权、改编权、翻译权、汇编权 以及应当由著作权人享有的其他可转让权利无偿独家转让给本网站所有，本网站有权利就任何主体侵权单独提起诉讼并获得全部赔偿。 本协议效力及于您在本网站发布的任何受著作权法保护的作品内容， 无论该内容形成于本协议签订前还是本协议签订后；"),_.a.createElement("h5",null,"5.4 您在使用本网站服务过程中不得非法使用或处分本网站或他人的知识产权权利。您不得将已发表于本网站的信息以任何形式发布或授权其它网站（及媒体）使用；"),_.a.createElement("h5",null,"5.5 您登陆本网站或使用本网站提供的任何服务均不视为我们向您转让任何知识产权；"),_.a.createElement("h5",null,"5.6“BitCoCo”为本平台的商标，未经平台的书面授权，任何用户或者第三方不得擅自使用，或以此牟取任何商业利益。"),_.a.createElement("h3",null,"六、其他约定"),_.a.createElement("p",{className:"deal_section"},"本平台对本协议在法律许可的范围内拥有最终的解释权。本协议及本平台有关页面的相关名词可互相引用参照，如有不同理解，则以本协议条款为准。此外，若本协议的部分条款被认定为无效或者无法实施时，本协议中的其他条款仍然有效。"))}}]),t}(N.Component)),$=(a(143),S.a.Search,w.a.Item,Object(k.inject)("Store")(K=Object(k.observer)(K=function(e){function t(){h()(this,t);var e=C()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={loading:!1,visibleContract:!1,pwKey:"fdec3af2f062f9d5893d22ffb46164d7ffcbee648cffb96af79121e7b274d979"},e.codeChange=function(t){e.state.codeValue=t.target.value},e.userContract=function(){e.setState({visibleContract:!0})},e.handleCancel=function(){e.setState({visibleContract:!1})},e.submit=function(t,a,n){t.validateFields(function(t,a){if(!t){var l=a.email,r=a.emailCode,o=a.password,i=(a.inviteCode,{username:l,password:D()(o),code:r,level:n}),s=e;Object(z.c)("/api/v1/visitor/email-register",i,function(e){0===e.code?(d.a.success("注册成功！"),H.a.set("account",e.result.account),s.state.account=e.result.account,s.props.history.push("/home")):d.a.error(Object(z.f)(e))})}})},e.store=new U,console.log(e.store),e}return b()(t,e),g()(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillMount",value:function(){H.a.get("account")&&(this.props.history.length<3?this.props.history.push("/home"):this.props.history.goBack())}},{key:"render",value:function(){var e=this.state,t=e.visibleContract,a=(e.loading,new URLSearchParams(this.props.location.search).get("code"));return _.a.createElement(k.Provider,{store:this.store},_.a.createElement("div",{className:"Regist_wrap clearFix"},_.a.createElement("div",{className:"form P_auto"},_.a.createElement("h3",null,"注册"),_.a.createElement(I,{submit:this.submit,userContract:this.userContract,invitCode:a})),_.a.createElement(s.a,{wrapClassName:"infobox",visible:t,title:"用户服务协议",maskClosable:!1,closable:!1,onCancel:this.handleCancel,footer:[_.a.createElement(m.a,{key:"back",onClick:this.handleCancel},"关闭")]},_.a.createElement(W,null))))}}]),t}(N.Component))||K)||K);t.default=$}}]);