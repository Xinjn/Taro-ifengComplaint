(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"164":function(e,t,n){"use strict";n.d(t,"g",(function(){return m})),n.d(t,"f",(function(){return d})),n.d(t,"h",(function(){return p})),n.d(t,"a",(function(){return _})),n.d(t,"b",(function(){return j})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return b})),n.d(t,"e",(function(){return x}));var a=n(5),o=n(2),c=n.n(o),r=n(10),s=n(16),i=n(3),l=n(26),u=function(){var e=Object(r.a)(c.a.mark((function _callee(){var e;return c.a.wrap((function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(i.getStorageSync)("Authorization");case 3:if(!(e=t.sent)){t.next=6;break}return t.abrupt("return",e);case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),_callee,null,[[0,8]])})));return function getToken(){return e.apply(this,arguments)}}(),m=function(){var e=Object(r.a)(c.a.mark((function _callee2(e){var t,n,o,r=arguments;return c.a.wrap((function _callee2$(c){for(;;)switch(c.prev=c.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:"PUT",c.next=3,u();case 3:return n=c.sent,c.next=6,Object(s.a)({"header":{"Authorization":"Bearer ".concat(n)},"method":t,"url":"".concat(l.m,"/complaint-process-write/complaint"),"data":{"body":Object(a.a)({},e)}});case 6:return o=c.sent,c.abrupt("return",o);case 8:case"end":return c.stop()}}),_callee2)})));return function sendComplainData(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(r.a)(c.a.mark((function _callee3(e){var t,n;return c.a.wrap((function _callee3$(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,u();case 2:return t=o.sent,o.next=5,Object(s.a)({"header":{"Authorization":"Bearer ".concat(t)},"method":"PUT","url":"".concat(l.m,"/complaint-process-write/add/addition/content"),"data":{"body":Object(a.a)({},e)}});case 5:return n=o.sent,o.abrupt("return",n);case 7:case"end":return o.stop()}}),_callee3)})));return function sendComplainAddDetailsData(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(r.a)(c.a.mark((function _callee4(e){var t,n;return c.a.wrap((function _callee4$(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,u();case 2:return t=o.sent,o.next=5,Object(s.a)({"header":{"Authorization":"Bearer ".concat(t)},"method":"POST","url":"".concat(l.m,"/complaint-process-write/submit/complete"),"data":{"body":Object(a.a)({},e)}});case 5:return n=o.sent,o.abrupt("return",n);case 7:case"end":return o.stop()}}),_callee4)})));return function sendComplainResolveData(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(r.a)(c.a.mark((function _callee5(e){var t,n;return c.a.wrap((function _callee5$(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u();case 2:return t=a.sent,a.next=5,Object(s.a)({"header":{"Authorization":"Bearer ".concat(t)},"url":"".concat(l.m,"/complaint-process-read/complaint?guid=").concat(e)});case 5:return n=a.sent,a.abrupt("return",n);case 7:case"end":return a.stop()}}),_callee5)})));return function getCompanyInfo(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(r.a)(c.a.mark((function _callee6(){var e;return c.a.wrap((function _callee6$(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.a)({"method":"GET","url":"".concat(l.m,"/complaint-process-read/public/hot-enterprise")});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),_callee6)})));return function getHotComplain(){return e.apply(this,arguments)}}(),h=function(){var e=Object(r.a)(c.a.mark((function _callee7(){var e;return c.a.wrap((function _callee7$(t){for(;;)switch(t.prev=t.next){case 0:return e={"code":1,"msg":"ok","data":"发布投诉前，请您仔细阅读以下内容，点击“同意”即视为接受以下条款。平台将保留追究法律责任的权利：||关于我们：||风投诉平台（以下简称“平台”）是凤凰网旗下消费者服务平台，旨在为消费者与商家建立理性沟通平台，不干涉双方沟通结果。通过平台，消费者能够随时反馈消费过程中遇到的各种问题。依靠平台海量的企业库，消费者的诉求可以得到快速的反馈。||您发布投诉时，请注意不要违反以下条例：||1、为了建立公平健康的投诉环境，请依法、据实发布投诉内容，不要填写虚假投诉信息。不得捏造事实、诬陷诽谤他人、泄露他人隐私。||2、已经发布的投诉无法删除、撤销。投诉方不得利用“删除、撤销投诉”作为条件要求被投诉方解决投诉问题。被投诉方不得以“删除、撤销投诉”为前提条件解决投诉方所投诉问题。一经发现有类似行为，平台将对投诉双方做出严肃处理。||3、所有网络用户，不得复制、发布、传播含有下列内容的信息：危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一；煽动民族仇恨、民族歧视，破坏民族团结；宣扬邪教和封建迷信；散布谣言，扰乱社会秩序，破坏社会稳定；散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪；其他含有法律、行政法规禁止的内容。||如果您违反以上条例，平台有权作出处罚，情节严重的平台会将投诉人相关信息提交公安部门，不排除公开曝光投诉人的相关身份信息||为了您更好的完成投诉，请仔细阅读以下内容：||1、平台为投诉方与被投诉方搭建沟通的桥梁，不干涉双方沟通结果。平台作为非主管部门，不承诺一定会解决消费者的投诉问题。||2、为避免泄露个人隐私信息，请不要在公开发布的内容填写个人信息，请将联系方式、银行卡号、身份证件等填写在隐私内容区。以防骗子假冒身份对您行骗。||（同意本协议视为知悉并同意：如由于用户自己公开隐私信息造成的相关损失，由用户自身承担。）||3、请填写真实联系方式。便于平台在需要时与您取得联系。||4、填写投诉信息时，请注意严谨措辞，不要填写不文明用语。用词不当平台可能不会通过审核。||5、为便于被投诉方回应，请提供准确的被投诉方名称、与投诉相关所必需的地址、订单号、账号、快递单号等信息。||6、发布投诉时建议提交有合法来源的图片、视频，作为投诉最关键的证据。||7、请勿重复发帖。后续相关信息请点击“补充投诉”填写文字、图片或视频内容。||8、为了更高效的解决投诉及提升消费者维权意识，提交投诉即视为授权平台使用该投诉内容（使用范围包括但不限于平台及合作方官方网站、新闻客户端、微博、微信、视频、海报、新闻稿件等）。||投诉审核通过后，您可以在投诉页面上使用多个实用的功能。同时，您亦可通过以下途径自助推动投诉的解决：||1、随时补充信息。通过审核的投诉可以随时在投诉贴下发布 “补充投诉”，完善投诉信息、同步与商家的沟通处理进展。||2、为投诉处理结果打分。您可以在投诉帖上为商家评分并确认完成。||投诉操作时如有任何问题，可以联系风投诉：||1、电子信箱：tousu@ifeng.com||发起投诉即表示同意用户协议、隐私政策"},t.abrupt("return",e);case 2:case"end":return t.stop()}}),_callee7)})));return function getProtocolH5Data(){return e.apply(this,arguments)}}(),b=function(){var e=Object(r.a)(c.a.mark((function _callee8(){var e;return c.a.wrap((function _callee8$(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.a)({"method":"GET","url":"https://shankapi.ifeng.com/feedflow/ifengComplaint/useragreement"});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),_callee8)})));return function getProtocolAppData(){return e.apply(this,arguments)}}(),x=function(){var e=Object(r.a)(c.a.mark((function _callee9(){var e;return c.a.wrap((function _callee9$(t){for(;;)switch(t.prev=t.next){case 0:return e={"code":200,"level":200,"message":"success","data":{"aliBinding":"nothing","appId":"ifeng-complaint","createTime":1654505031839,"id":null,"ifengBinding":"6937230926338330678","nickName":"一丝不苟de娜塔莉_重雁","phoneNumberBinding":"15010502539","registerFrom":"ifeng","roleType":"common","roleTypes":["common"],"status":1,"unionId":"6841299663685951530","updateTime":1657466449613,"userAvatar":"https://x0.ifengimg.com/cmpp/2020/1201/d0b4cef558ca6a2size25_w360_h360.jpg","userDescription":"nothing","userId":"6841299663685951530","userName":"6841299663685951530","weChatBinding":"nothing"}},t.abrupt("return",new Promise((function(t,n){t(e)})));case 2:case"end":return t.stop()}}),_callee9)})));return function getUserPhoneNumber(){return e.apply(this,arguments)}}()},"175":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAADuUlEQVRYR+1YTYhbVRQ+595kIpnE/mq1dqFUsdAOhrl5782QTUSw6IBKK4KgIoKL6kLQhSshWxdduBIXSvEHF7VFhdEyID4Ywsy8Ny8TZ8BWKFqQto5/ndJJdF5y75EzvEAqM323OCBKsjpw/r6cnJNzvotg90Gl1C4hxGFjzEEAyNu4CSH+IKJvtdZnFhYWfgUASvPDNAPWK6XyiPg0ABwiIiufXlxEZBBn4zj+aHFxsZWWzyq44zh3ENGrRDQkhPiJiC6lBU707LcXALr5fP749PT05TQ/K0Ce593X7XZf5mBCiBNhGDbTArPecZyDxpgXWSaidxqNxtk0P+6N/QCwHxHlZsaIuNMY4ySAmkS0nBY40e8mIsUyIkYAwH204YeINBF9j47jvEFEO2+2NywBWZtxryHiFQb0kjFmH3+JvkbMEZFARENEazbTYZkZEbE/9p/9zS+E+BE9z7s1juN9UkrRF/QoEe0AgGUimgKAtmXCNDOe1ocBYI8Q4net9cmegxDCFAqFixs2tVLqdQC4Uwjxw9DQ0Hv1ev1aWiYbfaVSKcZx/IIx5h4AuBxF0Zt/9xsA+v9WqFKp7O10OkeI6Jfh4eHPfN9fn5BSqbQ9k8kcZbnb7Z5qNpsrLFer1VtardbjiHhbNps9Xa/XL21pDzmO8xARTfDEGWNONBqN85zY8zyltX4q+dM8GQTBPMujo6P3CiGe50WMiJNhGH61pYCUUjyujyJii4g+iKLoXAJoTGt9hGUp5em5ublZlpVSBxDxWSIaBoAvoiiaGgAaVGjQQ729stEuG0xZ/9YdVKivGtbnx6CH/pM9hIiPJPf1+/Pz898lS9RDxPXzg4hORVE0x3K5XL4fAJ7jbU9EX275ci2Xy4cA4EkAWCkUCh/6vr/OscbGxu7WWjPN5m3/8ezs7IXkHtq9urr6TEIWPomiaGlLt321Ws202+1tcRzrZrN5tY8aifHx8e0MYmZmho8zk/z8WCqVtkkpM8ViccX3/e4/BoSIF3K53Lv/OutwHOcVpiqI+PPa2trbS0tLV2xoTprNyMjIjlwud4yIbmeKFYbhW1Y0yHXdJ7TWVWauiDgVhuGZtGQ2etd1+X3pMLNiKaUfBMGnVoD4cM9ms68ZY4rJrbzM1UreemxyX2fD7wZcFWPMniTetU6nc7xHCPqNN32OcV33Aa31YwCw66YR3NjhNynl50EQfLOR2aaAarWamJycvAsRH9RaH7B9xrsBlraU8hwRfT0xMXGxVqv1pvE6l78AW8MvDhRLm1UAAAAASUVORK5CYII="},"185":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(8),o=n(9),c=n(17),r=n(18),s=n(22),i=n(140),l=n(186),u=n.n(l),m=n(139),d=function(e){Object(c.a)(Progress,e);var t=Object(r.a)(Progress);function Progress(){return Object(a.a)(this,Progress),t.apply(this,arguments)}return Object(o.a)(Progress,[{"key":"render","value":function render(){var e=this.props.step;return Object(m.jsxs)(i.o,{"className":u.a.progress,"children":[Object(m.jsx)(i.o,{"className":"".concat(u.a.progressOne," ").concat(1===e||2===e?u.a.active:""),"children":"投诉企业"}),Object(m.jsx)(i.o,{"className":"".concat(u.a.progressTwo," ").concat(2===e?u.a.active:""),"children":"投诉详情"}),Object(m.jsxs)(i.o,{"className":"".concat(u.a.progressThree),"children":[Object(m.jsx)(i.o,{"className":"".concat(u.a.icon)}),"完成投诉"]}),Object(m.jsx)(i.o,{"className":"".concat(u.a.progressLine)})]})}}]),Progress}(s.Component)},"186":function(e,t,n){e.exports={"progress":"index-module__progress___2qQNV","progressLine":"index-module__progressLine___2tmBL","progressOne":"index-module__progressOne___2_I-e","progressTwo":"index-module__progressTwo___uGXc4","progressThree":"index-module__progressThree___1eMGt","icon":"index-module__icon___1RGS7","active":"index-module__active___2dyuO"}},"226":function(e,t,n){e.exports={"popup":"index-module__popup___2zI35","popupBox":"index-module__popupBox___2UPpN","popupTitle":"index-module__popupTitle___1fqM3","popupButton":"index-module__popupButton___32gBq","popupCancel":"index-module__popupCancel___3XDNT","popupAgree":"index-module__popupAgree___1xK5-"}},"227":function(e,t,n){e.exports={"selectQuestion":"index-module__selectQuestion___3UpJG","questionBox":"index-module__questionBox___P2MHD","question":"index-module__question___2PyTH","active":"index-module__active___8tcNp","confirmBox":"index-module__confirmBox___hXFg-","confirm":"index-module__confirm___3pX26","customBox":"index-module__customBox___qpd1w","customTitleBox":"index-module__customTitleBox___1b4I6","customTitleRight":"index-module__customTitleRight___2MCXK","customTitle":"index-module__customTitle___1aJg2","customTitleText":"index-module__customTitleText___1lDe5","customTitleImage":"index-module__customTitleImage___3jEs0","custom":"index-module__custom___3wW_p","customImg":"index-module__customImg___18Hk8","customText":"index-module__customText___Zf9pM","customForm":"index-module__customForm___3G4C-","customInput":"index-module__customInput___1SPUK","weui-input":"index-module__weui-input___2tBlp","customButton":"index-module__customButton___3sFIW","customList":"index-module__customList___175tq","showDeleteAllQuestionList":"index-module__showDeleteAllQuestionList___2Vw7M","showDeleteAllQuestionListLeft":"index-module__showDeleteAllQuestionListLeft___1cuFz","showDeleteAllQuestionListCancel":"index-module__showDeleteAllQuestionListCancel___RN4uU","showDeleteAllQuestionListText":"index-module__showDeleteAllQuestionListText___36sAy","customDelete":"index-module__customDelete___1iTY5","deleteQuestion":"index-module__deleteQuestion___2KSvp","close":"index-module__close___2KHdw"}},"228":function(e,t,n){e.exports={"selectObject":"index-module__selectObject___GMD-Q","search":"index-module__search___1M7fB","searchInput":"index-module__searchInput___3B4rl","searchButton":"index-module__searchButton___KMpW7","listBox":"index-module__listBox___2z9H_","listTh":"index-module__listTh___1qzGm","listBd":"index-module__listBd___1bUfe","firm":"index-module__firm___yORXQ","keywordBox":"index-module__keywordBox___3p431","keywordName":"index-module__keywordName___1aDij","addKeyword":"index-module__addKeyword___5UOv9","keyWordEdit":"index-module__keyWordEdit___2PMeX","addButton":"index-module__addButton___4LztG","keywordInfo":"index-module__keywordInfo___1bBkc","deleteList":"index-module__deleteList___25gap"}},"229":function(e,t,n){e.exports={"company":"index-module__company___2vtEV","companyBox":"index-module__companyBox___1oZYl","formSelect":"index-module__formSelect___3C89K","formItem":"index-module__formItem___3XnZA","formTitle":"index-module__formTitle___1AzXY","formTitleRed":"index-module__formTitleRed___i4RQ_","errorTip":"index-module__errorTip___1UznW","picker":"index-module__picker___3EmiV","formInput":"index-module__formInput___2H8wZ","formInputBox":"index-module__formInputBox___1GKbJ","formInputText":"index-module__formInputText___37OWi","formInputPrice":"index-module__formInputPrice___1lsaL","formInputOrder":"index-module__formInputOrder___nUX-X","info":"index-module__info___3BL9c","nextButtonBox":"index-module__nextButtonBox___1yslG","nextButton":"index-module__nextButton___15NeZ"}},"299":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var a=n(2),o=n.n(a),c=n(10),r=n(8),s=n(9),i=n(20),l=n(17),u=n(18),m=n(11),d=n(22),p=n(140),_=n(3),j=n(185),h=n(226),b=n.n(h),x=n(139),f=function(e){Object(l.a)(Popup,e);var t=Object(u.a)(Popup);function Popup(){return Object(r.a)(this,Popup),t.apply(this,arguments)}return Object(s.a)(Popup,[{"key":"render","value":function render(){var e=this.props.popupChange;return Object(x.jsx)(p.o,{"className":b.a.popup,"children":Object(x.jsxs)(p.o,{"className":b.a.popupBox,"children":[Object(x.jsx)(p.o,{"className":b.a.popupTitle,"children":"是否继续上次编辑的信息"}),Object(x.jsxs)(p.o,{"className":b.a.popupButton,"children":[Object(x.jsx)(p.o,{"className":b.a.popupCancel,"onClick":e.bind(this,!1),"children":"取消"}),Object(x.jsx)(p.o,{"className":b.a.popupAgree,"onClick":e.bind(this,!0),"children":"确认"})]})]})})}}]),Popup}(d.Component),O=n(227),y=n.n(O),v=function(e){Object(l.a)(selectQuestion,e);var t,a=Object(u.a)(selectQuestion);function selectQuestion(){var e;Object(r.a)(this,selectQuestion);for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return e=a.call.apply(a,[this].concat(n)),Object(m.a)(Object(i.a)(e),"state",{"questionList":[{"name":"","active":!1}],"isShowCustom":!1,"customWord":"","customList":[],"showDeleteAllQuestionList":!1}),Object(m.a)(Object(i.a)(e),"questionDataInit",Object(c.a)(o.a.mark((function _callee(){return o.a.wrap((function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({"questionList":[{"name":"客服不处理","active":!1},{"name":"不予退款","active":!1},{"name":"服务不到位","active":!1},{"name":"虚假宣传","active":!1},{"name":"账号问题","active":!1},{"name":"拒不发货","active":!1},{"name":"假货","active":!1},{"name":"逾期未发货","active":!1},{"name":"价格问题","active":!1},{"name":"未履行7天无理由退货","active":!1},{"name":"优惠券问题","active":!1},{"name":"未履行保价承诺","active":!1},{"name":"三包问题","active":!1},{"name":"漏发商品","active":!1},{"name":"刷单","active":!1},{"name":"发票问题","active":!1},{"name":"赠品问题","active":!1},{"name":"快件丢失","active":!1}]});case 2:case"end":return t.stop()}}),_callee)})))),Object(m.a)(Object(i.a)(e),"requireDataInit",Object(c.a)(o.a.mark((function _callee2(){return o.a.wrap((function _callee2$(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({"questionList":[{"name":"退款","active":!1},{"name":"赔偿","active":!1},{"name":"道歉","active":!1},{"name":"作出处罚","active":!1},{"name":"改善服务","active":!1},{"name":"解释","active":!1},{"name":"发货","active":!1},{"name":"恢复账号","active":!1},{"name":"退货","active":!1},{"name":"撤销处罚","active":!1},{"name":"换货","active":!1},{"name":"下架商品","active":!1},{"name":"恢复优惠券","active":!1},{"name":"修改宣传内容","active":!1},{"name":"补发赠品","active":!1},{"name":"维修","active":!1},{"name":"开发票","active":!1}]});case 2:case"end":return t.stop()}}),_callee2)})))),Object(m.a)(Object(i.a)(e),"customSwitch",(function(t){e.setState({"isShowCustom":t})})),Object(m.a)(Object(i.a)(e),"inputChange",(function(t){e.setState({"customWord":t.detail.value})})),Object(m.a)(Object(i.a)(e),"addCustomWord",(function(){var t=e.state,n=(t.questionList,t.customWord),a=t.customList,o=e.props.type;if(n&&n.toString().trim()){if(n.length>10)return Object(_.showToast)({"title":"自定义内容不能超过10个字","icon":"none","duration":1e3}),!1;console.log(a);var c=a.concat([{"name":n,"active":!0}]);console.log(c);var r=Object(_.getStorageSync)("complain".concat(o,"Word1"));Object(_.setStorageSync)("complain".concat(o,"Word1"),"".concat(r+n,",")),e.setState({"customList":c},(function(){e.setState({"customWord":""})}))}})),Object(m.a)(Object(i.a)(e),"clickActive",(function(t){var n=e.state.questionList;n[t].active=!n[t].active,e.setState({"questionList":n})})),Object(m.a)(Object(i.a)(e),"submitHanld",(function(){var t=e.state,n=t.questionList,a=t.customList,o=n.filter((function(e){return!0===e.active})).map((function(e){return e.name})).join(","),c="";a.length>0&&(c=a.filter((function(e){return!0===e.active})).map((function(e){return e.name})).join(","),console.log(o)),c&&o&&(o+=","),e.props.questionSubmit(!1,o+c)})),Object(m.a)(Object(i.a)(e),"deleteAllQuestionList",(function(){e.setState({"showDeleteAllQuestionList":!e.state.showDeleteAllQuestionList})})),Object(m.a)(Object(i.a)(e),"clearAll",Object(c.a)(o.a.mark((function _callee3(){var t;return o.a.wrap((function _callee3$(n){for(;;)switch(n.prev=n.next){case 0:return t=e.props.type,n.prev=1,n.next=4,Object(_.showModal)({"cancelText":"取消","confirmColor":"#F54343","cancelColor":"#9E9E9E","confirmText":"删除","content":"确定删除全部自定义投诉问题吗？","success":function success(n){n.confirm?(Object(_.removeStorageSync)("complain".concat(t,"Word1")),e.setState({"customList":[]})):n.cancel&&console.log("用户点击取消")}});case 4:n.next=8;break;case 6:n.prev=6,n.t0=n.catch(1);case 8:case"end":return n.stop()}}),_callee3,null,[[1,6]])})))),Object(m.a)(Object(i.a)(e),"deleteSingleItem",(function(t){var n=e.props.type,a=e.state.customList;a.splice(t,1);var o=Object(_.getStorageSync)("complain".concat(n,"Word1")).split(",");console.log(o),o.splice(t,1),console.log(o);var c=o.join(",");console.log(c),Object(_.setStorageSync)("complain".concat(n,"Word1"),"".concat(c)),e.setState({"customList":a})})),Object(m.a)(Object(i.a)(e),"clickActiveCustom",(function(t){var n=e.state.customList;n[t].active=!n[t].active,e.setState({"customList":n})})),e}return Object(s.a)(selectQuestion,[{"key":"componentWillMount","value":(t=Object(c.a)(o.a.mark((function _callee4(){var e,t,n,a,c,r,s,i,l,u,m;return o.a.wrap((function _callee4$(o){for(;;)switch(o.prev=o.next){case 0:if(e=this.props,t=e.questionWords,"question"!==(n=e.type)){o.next=4;break}return o.next=4,this.questionDataInit();case 4:if("require"!==n){o.next=7;break}return o.next=7,this.requireDataInit();case 7:a=this.state,c=a.customList,r=a.questionList,s=t.split(","),i=r,l=c,u=Object(_.getStorageSync)("complain".concat(n,"Word")),m=Object(_.getStorageSync)("complain".concat(n,"Word1")),u&&(u=(u=u.substring(0,u.length-1).split(",")).map((function(e){return{"name":e,"active":!1}})),i=r.concat(u)),i=i.map((function(e){return{"name":e.name,"active":s.includes(e.name)}})),m&&(this.setState({"isShowCustom":!0}),m=(m=m.substring(0,m.length-1).split(",")).map((function(e){return{"name":e,"active":!1}})),l=c.concat(m)),l=l.map((function(e){return{"name":e.name,"active":s.includes(e.name)}})),console.log(i),this.setState({"customList":l,"questionList":i});case 19:case"end":return o.stop()}}),_callee4,this)}))),function componentWillMount(){return t.apply(this,arguments)})},{"key":"render","value":function render(){var e=this,t=this.state,a=t.questionList,o=t.isShowCustom,c=t.customWord,r=t.customList,s=t.showDeleteAllQuestionList;return Object(x.jsxs)(p.o,{"className":y.a.selectQuestion,"children":[Object(x.jsx)(p.o,{"className":y.a.questionBox,"children":a.map((function(t,n){return Object(x.jsx)(p.o,{"className":"".concat(y.a.question," ").concat(t.active?y.a.active:""),"onClick":e.clickActive.bind(e,n),"children":t.name},n)}))}),Object(x.jsxs)(p.o,{"className":y.a.customTitleBox,"children":[Object(x.jsxs)(p.o,{"className":y.a.customTitle,"children":[Object(x.jsx)(p.o,{"className":y.a.customTitleText,"children":"自定义"}),r.length>0&&Object(x.jsxs)(p.o,{"className":y.a.customTitleRight,"children":[!s&&Object(x.jsx)(p.e,{"onClick":function onClick(){e.deleteAllQuestionList()},"className":y.a.customTitleImage,"src":n(175)}),s&&Object(x.jsxs)(p.o,{"className":y.a.showDeleteAllQuestionList,"children":[Object(x.jsxs)(p.o,{"className":y.a.showDeleteAllQuestionListLeft,"children":[Object(x.jsx)(p.e,{"className":y.a.customTitleImage,"src":n(175)}),Object(x.jsx)(p.o,{"onClick":function onClick(){e.clearAll()},"className":y.a.showDeleteAllQuestionListText,"children":"全部删除"})]}),Object(x.jsx)(p.o,{"onClick":function onClick(){e.deleteAllQuestionList()},"className":y.a.showDeleteAllQuestionListCancel,"children":"取消"})]})]})]}),!o&&Object(x.jsxs)(p.o,{"className":y.a.custom,"onClick":this.customSwitch.bind(this,!0),"children":[Object(x.jsx)(p.e,{"className":y.a.customImg,"src":"https://x0.ifengimg.com/ucms/2021_12/51089207FD0D43D0886BD15CFC198C6F90DD9CC7_size0_w56_h56.png"}),Object(x.jsx)(p.o,{"className":y.a.customText,"children":" 自定义"})]}),o&&Object(x.jsxs)(p.o,{"className":y.a.customList,"children":[Object(x.jsx)(p.o,{"children":r.length>0&&r.map((function(t,n){return Object(x.jsx)(p.o,{"children":Object(x.jsxs)(p.o,{"className":"".concat(y.a.question," ").concat(t.active?y.a.active:""," ").concat(y.a.customDelete),"children":[Object(x.jsx)(p.o,{"onClick":e.clickActiveCustom.bind(e,n),"children":t.name}),s&&Object(x.jsx)(p.o,{"onClick":function onClick(){e.deleteSingleItem(n)},"className":y.a.deleteQuestion,"children":Object(x.jsx)(p.o,{"className":y.a.close})})]},n)})}))}),Object(x.jsx)(p.o,{"className":y.a.customBox,"children":Object(x.jsxs)(p.o,{"className":y.a.customForm,"children":[Object(x.jsx)(p.f,{"className":y.a.customInput,"type":"text","placeholder":"输入自定义名称","value":c,"onInput":this.inputChange}),Object(x.jsx)(p.o,{"className":"".concat(y.a.customButton," ").concat(c&&y.a.active),"onClick":this.addCustomWord,"children":"添加"})]})})]})]}),Object(x.jsx)(p.o,{"className":"".concat(y.a.confirmBox),"children":Object(x.jsx)(p.o,{"className":"".concat(y.a.confirm),"onClick":this.submitHanld,"children":"确认"})})]})}}]),selectQuestion}(d.Component),g=n(228),N=n.n(g),w=n(157),C=n(164),S=n(26),k=n(160),I=function(e){Object(l.a)(selectObject,e);var t=Object(u.a)(selectObject);function selectObject(){var e;Object(r.a)(this,selectObject);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return e=t.call.apply(t,[this].concat(a)),Object(m.a)(Object(i.a)(e),"state",{"filterKeyWordList":[{"companyName":"","companyId":"","tagName":[]}],"historyComplainGroup":[{"companyName":"","companyId":""}],"hotComplainGroup":[{"companyName":"","companyId":""}],"searchKeyWord":"","isShowAddButton":!0,"isSougou":!1}),Object(m.a)(Object(i.a)(e),"initHistroyData",(function(){var t=Object(_.getStorageSync)("historyComplainGroup")||[];e.setState({"historyComplainGroup":t})})),Object(m.a)(Object(i.a)(e),"initHotData",Object(c.a)(o.a.mark((function _callee(){var t,n;return o.a.wrap((function _callee$(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(C.b)();case 3:(t=a.sent)&&t.data&&t.data.length>0&&(n=t.data.filter((function(e){return e.enterpriseName&&e.enterpriseId})).map((function(e){return{"companyName":e.enterpriseName,"companyId":e.enterpriseId}})),e.setState({"hotComplainGroup":n})),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.log("获取热门投诉对象接口有误");case 10:case"end":return a.stop()}}),_callee,null,[[0,7]])})))),Object(m.a)(Object(i.a)(e),"keySingleRender",(function(e,t){if(t&&e&&"string"==typeof e&&"string"==typeof t){var n=e.split("").map((function(e){return t.toLowerCase().indexOf(e.toLowerCase())>-1?{"red":!0,"t":e}:{"red":!1,"t":e}}));return console.log(n),n}return e})),Object(m.a)(Object(i.a)(e),"inputChange",function(){var t=Object(c.a)(o.a.mark((function _callee2(t){var n,a,c,r,s;return o.a.wrap((function _callee2$(o){for(;;)switch(o.prev=o.next){case 0:return n=t.detail.value,a={},c=[],r=[],s=!0,o.prev=5,o.next=8,Object(w.u)(n);case 8:a=o.sent,o.next=14;break;case 11:o.prev=11,o.t0=o.catch(5),console.log("搜索接口异常");case 14:a&&a.list&&a.list.length>0&&(c=a.list.map((function(t){return r.push(t.platformName),{"companyName":t.platformName,"companyId":t.enterpriseId,"tagName":e.keySingleRender(t.platformName,n)}}))),s=!r.includes(n),e.setState({"searchKeyWord":n,"filterKeyWordList":c,"isShowAddButton":s});case 17:case"end":return o.stop()}}),_callee2,null,[[5,11]])})));return function(e){return t.apply(this,arguments)}}()),Object(m.a)(Object(i.a)(e),"setSearchKeyWord",(function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return!1;var a=e.props.objectChange;n&&t&&e.storeHistroyData(t,n),e.setState({"searchKeyWord":t}),a(!1,t,n)})),Object(m.a)(Object(i.a)(e),"storeHistroyData",(function(e,t){var n=Object(_.getStorageSync)("historyComplainGroup")||[],a=n.map((function(e){return e.companyName})).indexOf(e);-1!==a&&n.splice(a,1),n.unshift({"companyName":e,"companyId":t}),n.splice(10),Object(_.setStorageSync)("historyComplainGroup",n)})),Object(m.a)(Object(i.a)(e),"deleteHistoryComplain",(function(){Object(_.removeStorageSync)("historyComplainGroup"),e.setState({"historyComplainGroup":[]})})),e}return Object(s.a)(selectObject,[{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentWillMount","value":function componentWillMount(){Object(_.setNavigationBarTitle)({"title":"投诉对象"}),this.initHistroyData(),this.initHotData()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){Object(_.setNavigationBarTitle)({"title":"我要投诉"})}},{"key":"render","value":function render(){var e=this,t=this.props.objectChange,n=this.state,a=n.historyComplainGroup,o=n.hotComplainGroup,c=n.searchKeyWord,r=n.filterKeyWordList,s=n.isShowAddButton;return Object(x.jsxs)(p.o,{"className":N.a.selectObject,"children":[Object(x.jsxs)(p.o,{"className":N.a.search,"children":[Object(x.jsx)(p.f,{"className":k(N.a.searchInput,"search1"),"type":"text","placeholder":"请输入关键词搜索","onInput":Object(S.f)(this.inputChange,500),"value":c}),Object(x.jsx)(p.o,{"className":N.a.searchButton,"onClick":function onClick(){t(!1,"","")},"children":"取消"})]}),!c&&Object(x.jsxs)(p.o,{"className":N.a.listBox,"children":[a.length>0&&Object(x.jsxs)(p.o,{"className":N.a.listItem,"children":[Object(x.jsxs)(p.o,{"className":N.a.listTh,"children":["历史投诉对象",Object(x.jsx)(p.o,{"className":N.a.deleteList,"onClick":this.deleteHistoryComplain,"children":"清空"})]}),Object(x.jsx)(p.o,{"className":N.a.listBd,"children":a.slice(0,10).map((function(t,n){return t.companyName&&Object(x.jsx)(p.o,{"className":N.a.firm,"onClick":e.setSearchKeyWord.bind(e,t.companyName,t.companyId),"children":t.companyName},n)}))})]}),o&&o[0]&&o[0].companyName&&Object(x.jsxs)(p.o,{"className":N.a.listItem,"children":[Object(x.jsx)(p.o,{"className":N.a.listTh,"children":"热门投诉对象"}),Object(x.jsx)(p.o,{"className":N.a.listBd,"children":o.map((function(t,n){return t.companyName&&Object(x.jsx)(p.o,{"className":N.a.firm,"onClick":e.setSearchKeyWord.bind(e,t.companyName,t.companyId),"children":t.companyName},n)}))})]})]}),c&&Object(x.jsxs)(p.o,{"className":N.a.keyword,"children":[r.length>0&&Object(x.jsx)(p.o,{"className":N.a.keywordBox,"children":r.map((function(t,n){return Object(x.jsx)(p.o,{"className":N.a.keywordName,"onClick":e.setSearchKeyWord.bind(e,t.companyName,t.companyId),"children":Object(x.jsx)(p.o,{"style":{"display":"flex"},"children":t.tagName.map((function(e,t){return Object(x.jsx)(p.o,{"style":e.red?{"color":"red"}:{},"children":e.t})}))})},n)}))}),s&&Object(x.jsxs)(p.o,{"className":N.a.addKeyword,"children":[Object(x.jsx)(p.f,{"className":N.a.keyWordEdit,"type":"text","placeholder":"可直接添加“".concat(c,"”"),"disabled":!0}),Object(x.jsx)(p.o,{"className":N.a.addButton,"onClick":this.setSearchKeyWord.bind(this,c,""),"children":"添加"})]}),Object(x.jsx)(p.o,{"className":N.a.keywordInfo,"children":"*为方便把投诉第一时间通知给商家，列表显示的是商家微博名，比如，“京东”这里显示的是“京东客服”"})]})]})}}]),selectObject}(d.Component),T=n(229),B=n.n(T),W=n(159),A=function(e){Object(l.a)(Company,e);var t,n=Object(u.a)(Company);function Company(){var e;Object(r.a)(this,Company);for(var t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];return e=n.call.apply(n,[this].concat(a)),Object(m.a)(Object(i.a)(e),"$instance",_.default.getCurrentInstance()),Object(m.a)(Object(i.a)(e),"state",{"isOpenObject":!1,"isOpenQuestion":!1,"isShowPopup":!1,"isOpenRequire":!1,"questionWords":"","requireWords":"","objectWord":{"companyName":"","companyId":""},"moneyNo":0,"orderNo":"","type":"","errorWaring":{"objectWord":"","questionWords":"","requireWords":"","moneyNo":"","orderNo":""}}),Object(m.a)(Object(i.a)(e),"errorTipSwitch",!1),Object(m.a)(Object(i.a)(e),"iphoneSpecialHandle",(function(){var e=navigator.userAgent.toLowerCase();(e.indexOf("iphone")>0||e.indexOf("ipad")>0)&&document.addEventListener("focusout",(function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}))})),Object(m.a)(Object(i.a)(e),"storageDataInit",(function(t){var n=Object(_.getStorageSync)(t);n&&n.length>0&&n.forEach((function(t){var n={};n[t.name]=t.data,e.setState(n)}))})),Object(m.a)(Object(i.a)(e),"updateDateInit",Object(c.a)(o.a.mark((function _callee(){var t,n,a,c;return o.a.wrap((function _callee$(o){for(;;)switch(o.prev=o.next){case 0:if(t=e.$instance&&e.$instance.router&&e.$instance.router.path||"",n=Object(S.j)(t),a=n.domainId,c={},!a){o.next=16;break}return o.prev=4,o.next=7,Object(w.r)(a,!0);case 7:c=o.sent,o.next=13;break;case 10:o.prev=10,o.t0=o.catch(4),console.log("请求投诉接口异常");case 13:if(!c||!c.guid){o.next=16;break}return o.next=16,e.setState({"questionWords":c.question||"","requireWords":c.requirement||"","objectWord":{"companyName":c.enterpriseName,"companyId":c.enterpriseId||""},"moneyNo":c.relatedMoney||0,"orderNo":c.relatedOrder||""});case 16:case"end":return o.stop()}}),_callee,null,[[4,10]])})))),Object(m.a)(Object(i.a)(e),"objectChange",(function(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";e.setState({"isOpenObject":t}),n&&e.setState({"objectWord":{"companyName":n,"companyId":a}})})),Object(m.a)(Object(i.a)(e),"questionSubmit",(function(t,n){var a=e.state.type;"question"===a&&e.setState({"questionWords":n||""}),"require"===a&&e.setState({"requireWords":n||""}),e.questionSwitch(t,a)})),Object(m.a)(Object(i.a)(e),"questionSwitch",(function(t,n){console.log("跳转页面"),e.setState({"isOpenQuestion":t,"type":n})})),Object(m.a)(Object(i.a)(e),"showToast",(function(e,t){Object(_.showToast)({"title":e,"icon":"none","duration":t||1e3})})),Object(m.a)(Object(i.a)(e),"formCheckHandle",(function(){e.errorTipSwitch=!1;var t=e.state,n=[{"name":"objectWord","data":t.objectWord,"errorTip":"请选择投诉对象"},{"name":"questionWords","data":t.questionWords,"errorTip":"请选择投诉问题"},{"name":"requireWords","data":t.requireWords,"errorTip":"请选择投诉要求"},{"name":"moneyNo","data":t.moneyNo,"errorTip":"请输入投诉金额"},{"name":"orderNo","data":t.orderNo,"errorTip":"请填写涉诉单号"}],a={"objectWord":"","questionWords":"","requireWords":"","moneyNo":"","orderNo":""},o=e.$instance&&e.$instance.router&&e.$instance.router.path||"",c=Object(S.j)(o).domainId;n.forEach((function(t){""===("objectWord"===t.name?t.data.companyName:t.data)&&(a[t.name]=t.errorTip,e.errorTipSwitch=!0),t.data&&"moneyNo"===t.name&&t.data.toString().split(".")&&t.data.toString().length>9&&(a.moneyNo="涉诉金额不能超过9位",e.errorTipSwitch=!0),t.data&&"moneyNo"===t.name&&!t.data.toString().match(/^[0-9]*$/)&&(t.data.toString().match(/^(([1-9]\d*)|\d)(\.\d{1,2})?$/)?(a.moneyNo="涉诉金额只能为数字",e.errorTipSwitch=!0):(a.moneyNo="涉诉金额格式不正确",e.errorTipSwitch=!0))})),e.setState({"errorWaring":a}),e.errorTipSwitch||(c?Object(_.setStorageSync)("updateComplainCompanyData",n):Object(_.setStorageSync)("complainCompanyData",n))})),Object(m.a)(Object(i.a)(e),"nextStepHandle",(function(){if(Object(W.a)({"datatype":"news_fts","behavior":"action","type":"fts_next","url":window.location.href}),e.formCheckHandle(),!e.errorTipSwitch){var t=e.$instance&&e.$instance.router&&e.$instance.router.path||"",n=Object(S.j)(t).domainId,a="/pages/complain/details/index";n&&(a="".concat(a,"?domainId=").concat(n)),Object(S.l)(a)}})),Object(m.a)(Object(i.a)(e),"moneyNoChangeHandle",(function(t){e.setState({"moneyNo":t.detail.value||0})})),Object(m.a)(Object(i.a)(e),"orderNoChangeHandle",(function(t){console.log(t),e.setState({"orderNo":t.detail.value})})),Object(m.a)(Object(i.a)(e),"popupChange",(function(t){e.setState({"isShowPopup":!1}),t?e.storageDataInit("complainCompanyData"):(Object(_.removeStorageSync)("complainCompanyData"),Object(_.removeStorageSync)("updateComplainCompanyData"),Object(_.removeStorageSync)("complainDetailData"),Object(_.removeStorageSync)("updateComplainDetailData"))})),e}return Object(s.a)(Company,[{"key":"componentDidShow","value":(t=Object(c.a)(o.a.mark((function _callee2(){var e,t,n,a,c;return o.a.wrap((function _callee2$(o){for(;;)switch(o.prev=o.next){case 0:if(Object(_.setNavigationBarTitle)({"title":"我要投诉"}),e=Object(_.getStorageSync)("complainCompanyData"),t=this.$instance&&this.$instance.router&&this.$instance.router.path||"",n=Object(S.j)(t),a=n.domainId,c=n.from,!a){o.next=9;break}return o.next=7,this.updateDateInit();case 7:return this.storageDataInit("updateComplainCompanyData"),o.abrupt("return",!1);case 9:if(!(c&&"protocol"===c&&e&&e.length>0)){o.next=12;break}return this.setState({"isShowPopup":!0}),o.abrupt("return",!1);case 12:this.iphoneSpecialHandle(),this.storageDataInit("complainCompanyData");case 14:case"end":return o.stop()}}),_callee2,this)}))),function componentDidShow(){return t.apply(this,arguments)})},{"key":"render","value":function render(){var e=this.state,t=e.isOpenObject,n=e.isShowPopup,a=e.isOpenQuestion,o=e.questionWords,c=e.requireWords,r=e.objectWord,s=e.moneyNo,i=e.orderNo,l=e.type,u=e.errorWaring,m="question"===l?o:c;return Object(x.jsxs)(p.o,{"className":B.a.company,"children":[t&&Object(x.jsx)(I,{"objectChange":this.objectChange}),a&&Object(x.jsx)(v,{"type":l,"questionWords":m,"questionSubmit":this.questionSubmit}),Object(x.jsxs)(p.o,{"className":B.a.companyBox,"children":[Object(x.jsx)(j.a,{"step":1}),Object(x.jsxs)(p.o,{"className":B.a.formList,"children":[Object(x.jsxs)(p.o,{"className":B.a.formSelect,"children":[Object(x.jsxs)(p.o,{"onClick":function onClick(){Object(W.a)({"datatype":"news_fts","behavior":"action","type":"fts_tsdx","url":window.location.href})},"className":B.a.formItem,"children":[Object(x.jsx)(p.l,{"className":B.a.formTitle,"children":"投诉对象"}),Object(x.jsx)(p.f,{"className":B.a.picker,"placeholder":"请选择投诉对象","type":"text","disabled":!0,"value":r.companyName,"onClick":this.objectChange.bind(this,!0,"")})]}),u.objectWord&&Object(x.jsx)(p.o,{"className":B.a.errorTip,"children":u.objectWord}),Object(x.jsxs)(p.o,{"onClick":function onClick(){Object(W.a)({"datatype":"news_fts","behavior":"action","type":"fts_tswt","url":window.location.href})},"className":B.a.formItem,"children":[Object(x.jsx)(p.l,{"className":B.a.formTitle,"children":"投诉问题"}),Object(x.jsx)(p.f,{"className":B.a.picker,"placeholder":"请选择投诉问题","type":"text","disabled":!0,"value":o,"onClick":this.questionSwitch.bind(this,!0,"question")})]}),u.questionWords&&Object(x.jsx)(p.o,{"className":B.a.errorTip,"children":u.questionWords}),Object(x.jsxs)(p.o,{"onClick":function onClick(){Object(W.a)({"datatype":"news_fts","behavior":"action","type":"fts_tsyq","url":window.location.href})},"className":B.a.formItem,"children":[Object(x.jsx)(p.l,{"className":B.a.formTitle,"children":"投诉要求"}),Object(x.jsx)(p.f,{"className":B.a.picker,"placeholder":"请选择投诉要求","type":"text","disabled":!0,"value":c,"onClick":this.questionSwitch.bind(this,!0,"require")})]}),u.requireWords&&Object(x.jsx)(p.o,{"className":B.a.errorTip,"children":u.requireWords})]}),Object(x.jsxs)(p.o,{"className":B.a.formInput,"children":[Object(x.jsxs)(p.o,{"className":B.a.formItem,"children":[Object(x.jsx)(p.l,{"className":"".concat(B.a.formTitle),"children":"涉诉金额"}),Object(x.jsxs)(p.o,{"className":B.a.formInputBox,"children":[Object(x.jsx)(p.f,{"className":B.a.formInputText,"placeholder":0,"type":"text","onInput":this.moneyNoChangeHandle,"value":0===s?"":s}),Object(x.jsx)(p.o,{"className":B.a.formInputPrice,"children":"元"})]})]}),u.moneyNo&&Object(x.jsx)(p.o,{"className":B.a.errorTip,"children":u.moneyNo}),Object(x.jsxs)(p.o,{"className":B.a.formItem,"children":[Object(x.jsx)(p.l,{"className":"".concat(B.a.formTitle),"children":"涉诉单号 (保密)"}),Object(x.jsx)(p.o,{"onClick":function onClick(){Object(W.a)({"datatype":"news_fts","behavior":"action","type":"fts_tsdh","url":window.location.href})},"className":B.a.formInputBox,"children":Object(x.jsx)(p.f,{"className":B.a.formInputOrder,"type":"text","placeholder":"订单号、账号、手机号、银行卡号等","onInput":this.orderNoChangeHandle,"value":i})})]}),u.orderNo&&Object(x.jsx)(p.o,{"className":B.a.errorTip,"children":u.orderNo})]})]}),Object(x.jsx)(p.o,{"className":B.a.info,"children":"*涉诉单号为您在消费过程中产生的交易单号或合同号等，请根据您投诉的具体内容提供相应的有效信息。"}),Object(x.jsx)(p.o,{"className":B.a.info,"children":"**涉诉单号仅自己，投诉平台，被投诉人可见。"})]}),Object(x.jsx)(p.o,{"className":B.a.nextButtonBox,"children":Object(x.jsx)(p.o,{"className":B.a.nextButton,"onClick":this.nextStepHandle,"children":"下一步"})}),n&&Object(x.jsx)(f,{"popupChange":this.popupChange})]})}}]),Company}(d.Component)}}]);