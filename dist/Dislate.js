const{components:r}=window.enmity;r.Alert;const Ke=r.Button;r.FlatList;const We=r.Image;r.ImageBackground,r.KeyboardAvoidingView,r.Modal,r.Pressable,r.RefreshControl;const Ee=r.ScrollView;r.SectionList,r.StatusBar,r.StyleSheet,r.Switch;const D=r.Text;r.TextInput,r.TouchableHighlight;const U=r.TouchableOpacity;r.TouchableWithoutFeedback,r.Touchable;const P=r.View;r.VirtualizedList,r.Form,r.FormArrow,r.FormCTA,r.FormCTAButton,r.FormCardSection,r.FormCheckbox;const A=r.FormDivider;r.FormHint,r.FormIcon,r.FormInput,r.FormLabel,r.FormRadio;const u=r.FormRow,ne=r.FormSection;r.FormSelect,r.FormSubLabel;const Je=r.FormSwitch;r.FormTernaryCheckBox,r.FormText,r.FormTextColors,r.FormTextSizes;function Qe(e){window.enmity.plugins.registerPlugin(e)}const S={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,t)=>window.enmity.modules.filters.byName(e,t),byTypeName:(e,t)=>window.enmity.modules.filters.byTypeName(e,t),byDisplayName:(e,t)=>window.enmity.modules.filters.byDisplayName(e,t)};function q(...e){return window.enmity.modules.bulk(...e)}function Se(...e){return window.enmity.modules.getByProps(...e)}function Ze(...e){return window.enmity.modules.getByName(...e)}window.enmity.modules.common;const T=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets;const _e=window.enmity.modules.common.Messages;window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars;const V=window.enmity.modules.common.Native,o=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher;const G=window.enmity.modules.common.Storage,y=window.enmity.modules.common.Toasts,Y=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token;const $e=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const C=window.enmity.modules.common.Navigation,et=window.enmity.modules.common.NavigationNative,De=window.enmity.modules.common.NavigationStack;window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const ae=window.enmity.modules.common.StyleSheet,tt=window.enmity.modules.common.ColorMap;window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function nt(e){return window.enmity.patcher.create(e)}var c="Dislate",k="1.1.6",at="Translates text into a desired language.",M="stable",Te=[{name:"Acquite <3",id:"581573474296791211"}],p={download:"https://raw.githubusercontent.com/acquitelol/dislate/main/dist/Dislate.js",repo:"https://github.com/acquitelol/dislate",user:"https://github.com/acquitelol/",build:"patch-1.0.5"},ot="#ff1f84",d={name:c,version:k,description:at,release:M,authors:Te,plugin:p,color:ot};const xe=De.createStackNavigator(),{ThemeColorMap:F}=tt;var Le=({name:e="Page",component:t=P}={})=>{const n=ae.createThemedStyleSheet({container:{backgroundColor:F.BACKGROUND_MOBILE_SECONDARY,flex:1},cardStyle:{backgroundColor:F.BACKGROUND_MOBILE_PRIMARY,color:F.TEXT_NORMAL},header:{backgroundColor:F.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},headerTitleContainer:{color:F.HEADER_PRIMARY},close:{color:F.HEADER_PRIMARY}});return o.createElement(et.NavigationContainer,null,o.createElement(xe.Navigator,{initialRouteName:e,style:n.container,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:n.cardStyle,headerStyle:n.header,headerTitleContainerStyle:n.headerTitleContainer,headerTitleAlign:"center",safeAreaInsets:{top:0}}},o.createElement(xe.Screen,{name:e,component:t,options:{headerTitleStyle:{color:"white"},headerLeft:()=>o.createElement(Ke,{color:n.close.color,title:"Close",onPress:()=>{C.pop()}}),...De.TransitionPresets.ModalSlideFromBottomIOS}})))},x={detect:"auto",afar:"aa",abkhazian:"ab",afrikaans:"af",akan:"ak",albanian:"sq",amharic:"am",arabic:"ar",aragonese:"an",armenian:"hy",assamese:"as",avaric:"av",avestan:"ae",aymara:"ay",azerbaijani:"az",bashkir:"ba",bambara:"bm",basque:"eu",belarusian:"be",bengali:"bn","bihari languages":"bh",bislama:"bi",tibetan:"bo",bosnian:"bs",breton:"br",bulgarian:"bg",burmese:"my",catalan:"ca",valencian:"ca",czech:"cs",chamorro:"ch",chechen:"ce",chinese_simplified:"zh-cn",chinese_traditional:"zh-tw",church_slavic:"cu",old_slavonic:"cu",church_slavonic:"cu",old_bulgarian:"cu",old_church_slavonic:"cu",chuvash:"cv",cornish:"kw",corsican:"co",cree:"cr",welsh:"cy",danish:"da",german:"de",divehi:"dv",dhivehi:"dv",maldivian:"dv",dutch:"nl",flemish:"nl",dzongkha:"dz",greek:"el",english:"en",esperanto:"eo",estonian:"et",ewe:"ee",faroese:"fo",persian:"fa",fijian:"fj",finnish:"fi",french:"fr",western_frisian:"fy",fulah:"ff",georgian:"ka",gaelic:"gd",scottish_gaelic:"gd",irish:"ga",galician:"gl",manx:"gv",guarani:"gn",gujarati:"gu",haitian:"ht",haitian_creole:"ht",hausa:"ha",hebrew:"he",herero:"hz",hindi:"hi",hiri_motu:"ho",croatian:"hr",hungarian:"hu",igbo:"ig",icelandic:"is",ido:"io",sichuan_yi:"ii",nuosu:"ii",inuktitut:"iu",interlingue:"ie",occidental:"ie",interlingua:"ia",indonesian:"id",inupiaq:"ik",italian:"it",javanese:"jv",japanese:"ja",kalaallisut:"kl",greenlandic:"kl",kannada:"kn",kashmiri:"ks",kanuri:"kr",kazakh:"kk",central_khmer:"km",kikuyu:"ki",gikuyu:"ki",kinyarwanda:"rw",kirghiz:"ky",kyrgyz:"ky",komi:"kv",kongo:"kg",korean:"ko",kuanyama:"kj",kwanyama:"kj",kurdish:"ku",lao:"lo",latin:"la",latvian:"lv",limburgan:"li",limburger:"li",limburgish:"li",lingala:"ln",lithuanian:"lt",luxembourgish:"lb",letzeburgesch:"lb","luba-katanga":"lu",ganda:"lg",macedonian:"mk",marshallese:"mh",malayalam:"ml",maori:"mi",marathi:"mr",malay:"ms",malagasy:"mg",maltese:"mt",mongolian:"mn",nauru:"na",navajo:"nv",navaho:"nv",south_ndebele:"nr",north_ndebele:"nd",ndonga:"ng",nepali:"ne",norwegian_nynorsk:"nn",norwegian_bokm\u00E5l:"nb",norwegian:"no",chichewa:"ny",chewa:"ny",nyanja:"ny",occitan:"oc",ojibwa:"oj",oriya:"or",oromo:"om",ossetian:"os",ossetic:"os",panjabi:"pa",punjabi:"pa",pali:"pi",polish:"pl",portuguese:"pt",pushto:"ps",pashto:"ps",quechua:"qu",romansh:"rm",romanian:"ro",moldavian:"ro",moldovan:"ro",rundi:"rn",russian:"ru",sango:"sg",sanskrit:"sa",sinhala:"si",sinhalese:"si",slovak:"sk",slovenian:"sl",northern_sami:"se",samoan:"sm",shona:"sn",sindhi:"sd",somali:"so","sotho, Southern":"st",spanish:"es",castilian:"es",sardinian:"sc",serbian:"sr",swati:"ss",sundanese:"su",swahili:"sw",swedish:"sv",tahitian:"ty",tamil:"ta",tatar:"tt",telugu:"te",tajik:"tg",tagalog:"tl",thai:"th",tigrinya:"ti",tonga:"to",tswana:"tn",tsonga:"ts",turkmen:"tk",turkish:"tr",twi:"tw",uighur:"ug",uyghur:"ug",ukrainian:"uk",urdu:"ur",uzbek:"uz",venda:"ve",vietnamese:"vi",volap\u00FCk:"vo",walloon:"wa",wolof:"wo",xhosa:"xh",yiddish:"yi",yoruba:"yo",zhuang:"za",chuang:"za",zulu:"zu"};function O(e,t,n){window.enmity.settings.set(e,t,n)}function v(e,t,n){return window.enmity.settings.get(e,t,n)}function oe(e,t,n){return window.enmity.settings.getBoolean(e,t,n)}var it=["auto","aa","ab","ae","af","ak","am","an","ar","as","av","ay","az","ba","be","bg","bh","bi","bm","bn","bo","br","bs","ca","ce","ch","co","cr","cs","cu","cv","cy","da","de","dv","dz","ee","el","en","eo","es","et","eu","fa","ff","fi","fj","fo","fr","fy","ga","gd","gl","gn","gu","gv","ha","he","hi","ho","hr","ht","hu","hy","hz","ia","id","ie","ig","ii","ik","io","is","it","iu","ja","jv","ka","kg","ki","kj","kk","kl","km","kn","ko","kr","ks","ku","kv","kw","ky","la","lb","lg","li","ln","lo","lt","lu","lv","mg","mh","mi","mk","ml","mn","mr","ms","mt","my","na","nb","nd","ne","ng","nl","nn","no","nr","nv","ny","oc","oj","om","or","os","pa","pi","pl","ps","pt","qu","rm","rn","ro","ru","rw","sa","sc","sd","se","sg","si","sk","sl","sm","sn","so","sq","sr","ss","st","su","sv","sw","ta","te","tg","th","ti","tk","tl","tn","to","tr","ts","tt","tw","ty","ug","uk","ur","uz","ve","vi","vo","wa","wo","xh","yi","yo","za","zh-cn","zh-tw","zu"],rt={auto:"auto",aar:"aa",abk:"ab",afr:"af",aka:"ak",alb:"sq",amh:"am",ara:"ar",arg:"an",arm:"hy",asm:"as",ava:"av",ave:"ae",aym:"ay",aze:"az",bak:"ba",bam:"bm",baq:"eu",bel:"be",ben:"bn",bih:"bh",bis:"bi",bos:"bs",bre:"br",bul:"bg",bur:"my",cat:"ca",cha:"ch",che:"ce",chi:"zh",chis:"zh-cn",chit:"zh-tw",chu:"cu",chv:"cv",cor:"kw",cos:"co",cre:"cr",cze:"cs",dan:"da",div:"dv",dut:"nl",dzo:"dz",eng:"en",epo:"eo",est:"et",ewe:"ee",fao:"fo",fij:"fj",fin:"fi",fre:"fr",fry:"fy",ful:"ff",geo:"ka",ger:"de",gla:"gd",gle:"ga",glg:"gl",glv:"gv",gre:"el",grn:"gn",guj:"gu",hat:"ht",hau:"ha",heb:"he",her:"hz",hin:"hi",hmo:"ho",hrv:"hr",hun:"hu",ibo:"ig",ice:"is",ido:"io",iii:"ii",iku:"iu",ile:"ie",ina:"ia",ind:"id",ipk:"ik",ita:"it",jav:"jv",jpn:"ja",kal:"kl",kan:"kn",kas:"ks",kau:"kr",kaz:"kk",khm:"km",kik:"ki",kin:"rw",kir:"ky",kom:"kv",kon:"kg",kor:"ko",kua:"kj",kur:"ku",lao:"lo",lat:"la",lav:"lv",lim:"li",lin:"ln",lit:"lt",ltz:"lb",lub:"lu",lug:"lg",mac:"mk",mah:"mh",mal:"ml",mao:"mi",mar:"mr",may:"ms",mlg:"mg",mlt:"mt",mon:"mn",nau:"na",nav:"nv",nbl:"nr",nde:"nd",ndo:"ng",nep:"ne",nno:"nn",nob:"nb",nor:"no",nya:"ny",oci:"oc",oji:"oj",ori:"or",orm:"om",oss:"os",pan:"pa",per:"fa",pli:"pi",pol:"pl",por:"pt",pus:"ps",que:"qu",roh:"rm",rum:"ro",run:"rn",rus:"ru",sag:"sg",san:"sa",sin:"si",slo:"sk",slv:"sl",sme:"se",smo:"sm",sna:"sn",snd:"sd",som:"so",sot:"st",spa:"es",srd:"sc",srp:"sr",ssw:"ss",sun:"su",swa:"sw",swe:"sv",tah:"ty",tam:"ta",tat:"tt",tel:"te",tgk:"tg",tgl:"tl",tha:"th",tib:"bo",tir:"ti",ton:"to",tsn:"tn",tso:"ts",tuk:"tk",tur:"tr",twi:"tw",uig:"ug",ukr:"uk",urd:"ur",uzb:"uz",ven:"ve",vie:"vi",vol:"vo",wel:"cy",wln:"wa",wol:"wo",xho:"xh",yid:"yi",yor:"yo",zha:"za",zul:"zu"},ie=e=>{if(typeof e!="string")throw new Error(`The "language" must be a string, received ${typeof e}`);if(e.length>100)throw new Error(`The "language" is too long at ${e.length} characters`);if(e=e.toLowerCase(),e=x[e]||rt[e]||e,!it.includes(e))throw new Error(`The language "${e}" is not part of the ISO 639-1`);return e};function Ne(){var e=Object.create(null);this.put=function(n,i,a,m){if(typeof a!="undefined"&&(typeof a!="number"||isNaN(a)||a<=0))throw new Error("Cache timeout must be a positive number");if(typeof m!="undefined"&&typeof m!="function")throw new Error("Cache timeout callback must be a function");var s=e[n];s&&clearTimeout(s.timeout);var w={value:i,expire:a+Date.now()};return isNaN(w.expire)||(w.timeout=setTimeout(function(){t(n),m&&m(n,i)}.bind(this),a)),e[n]=w,i},this.del=function(n){var i=!0,a=e[n];return a?(clearTimeout(a.timeout),!isNaN(a.expire)&&a.expire<Date.now()&&(i=!1)):i=!1,i&&t(n),i};function t(n){delete e[n]}this.clear=function(){for(var n in e)clearTimeout(e[n].timeout);e=Object.create(null)},this.get=function(n){var i=e[n];if(typeof i!="undefined"){if(isNaN(i.expire)||i.expire>=Date.now())return i.value;delete e[n]}return null}}const re=new Ne;re.Cache=Ne;const st="https://translate.googleapis.com/translate_a/single";var lt={fetch:({key:e,from:t,to:n,text:i})=>[`${st}?client=gtx&sl=${t}&tl=${n}&dt=t&q=${encodeURI(i)}`],parse:e=>e.json().then(t=>{if(t=t&&t[0]&&t[0][0]&&t[0].map(n=>n[0]).join(""),!t)throw new Error("Translation not found");return t})},ct={google:lt};if(typeof fetch=="undefined")try{global.fetch=require("node-fetch")}catch{console.warn("Please make sure node-fetch is available")}const H=function(e={}){if(!(this instanceof H))return new H(e);const t={from:"auto",to:"ja",cache:void 0,languages:ie,engines:ct,engine:"google",keys:{}},n=(i,a={})=>{typeof a=="string"&&(a={to:a}),a.text=i,a.from=ie(a.from||n.from),a.to=ie(a.to||n.to),a.cache=a.cache||n.cache,a.engines=a.engines||{},a.engine=a.engine||n.engine,a.url=a.url||n.url,a.id=a.id||`${a.url}:${a.from}:${a.to}:${a.engine}:${a.text}`,a.keys=a.keys||n.keys||{};for(let _ in n.keys)a.keys[_]=a.keys[_]||n.keys[_];a.key=a.key||n.key||a.keys[a.engine];const m=a.engines[a.engine]||n.engines[a.engine],s=re.get(a.id);if(s)return Promise.resolve(s);if(a.to===a.from)return Promise.resolve(a.text);if(m.needkey&&!a.key)throw new Error(`The engine "${a.engine}" needs a key, please provide it`);const w=m.fetch(a);return fetch(...w).then(m.parse).then(_=>re.put(a.id,_,a.cache))};for(let i in t)n[i]=typeof e[i]=="undefined"?t[i]:e[i];return n},se=new H;se.Translate=H;async function Fe(e,t,n){return t?await se(e,{from:x[t],to:x[n]}):await se(e,x[n])}const b=e=>e.split("_").map(t=>t[0].toUpperCase()+t.slice(1)).join(" "),R=e=>{let t=0;for(let n in e)t++;return t},ut=e=>{let t=e.split(`
`).map(n=>{if(n!="")return`"${n.replaceAll(":",'":"').replace(" ","")}",`});return t[0]=`{${t[0]}`,t[R(t)]=`${t[R(t)]}}`,t=t.join(""),t=t.replaceAll("undefined",""),t=t.split("").reverse().join("").replace(",","").split("").reverse().join(""),t};async function Re(){try{let e=await G.getItem("device_list");if(e)return JSON.parse(e);let t=(await $e.get("https://gist.githubusercontent.com/adamawolf/3048717/raw/1ee7e1a93dff9416f6ff34dd36b0ffbad9b956e9/Apple_mobile_device_types.txt")).text,n=ut(t);await G.setItem("device_list",n);let i=await G.getItem("device_list");return JSON.parse(i)}catch(e){console.warn(`[${c} Local Error \u2014 Issue when getting devices: ${e}]`);return}}async function le(e,t){let n=await Re();return`**[${c}] Debug Information**
> **Plugin Version:** ${e}
> **Release Channel:** ${t}
> **Software Version:** ${V.DCDDeviceManager.systemVersion}
> **Device:** ${n[V.DCDDeviceManager.device]}`}function h(e){return window.enmity.assets.getIDByName(e)}const l={Translate:h("img_nitro_star"),Revert:h("ic_highlight"),Debug:h("debug"),Retry:h("ic_message_retry"),Failed:h("Small"),Cancel:h("ic_megaphone_nsfw_16px"),Delete:h("ic_message_delete"),Copy:h("toast_copy_link"),Open:h("ic_leave_stage"),Clipboard:h("pending-alert"),Debug_Command:{Sent:h("ic_application_command_24px"),Clock:h("clock")},Settings:{Toasts:{Context:h("toast_image_saved"),Settings:h("ic_selection_checked_24px")},Translate_From:h("ic_raised_hand"),Translate_To:h("ic_activity_24px"),Debug:h("ic_rulebook_16px")}},ce=e=>{y.open({content:`Copied ${e} to clipboard.`,source:l.Clipboard})},mt=()=>({message_spoofer:"69",copy_embed:"1337",invis_chat:"420",dislate:"1002"}),L=(e,t,n)=>{try{if(!e)return;let i=R(e);for(let a=0;a<i;a++)if(n(e[a],a,n))return e[a];return}catch(i){console.warn(`[${c}] The following error happened when trying to find an item in ${t}: ${i}`)}},dt=(e,t,n,i)=>{try{if(!e)return;let a=R(e),m=t,s=n;a++,s++;for(let w=a-1;w>=s;w--)e[w]=e[w-1];e[s-1]=m;return}catch(a){console.warn(`[${c}] The following error happened when trying to use the insert method at ${i}: ${a}`);return}},gt=(e,t)=>{let n=e.length;return e[n]=t,n++,e.length=n,n},ht=(e,t)=>{for(let n=0;n<R(e);n++)t(e[n],n,e)},ft=(e,t)=>{const n=[];for(let i=0;i<R(e);i++)gt(n,t(e[i],i,e));return n};async function yt(){let e=V.DCDDeviceManager.device,t=await Re();e.includes("iPhone")&&(e=e.replace("iPhone",""),e=e.replace(",","."),(parseFloat(e)<10.6&&parseFloat(e)!=10.3||parseFloat(e)==14.6||parseFloat(e)==12.8)&&Y.show({title:"Incompatible iPhone",body:`Please note that you're on an${t[V.DCDDeviceManager.device]}.
Some features of ${c} may behave in an unexpected manner.`,confirmText:"I understand"}))}const wt=Ze("StaticSearchBarContainer"),bt=u.Arrow;var Pe=()=>{const[e,t]=o.useState([]),[n,i]=o.useState([]);return o.useEffect(()=>{let a=Object.keys(x);t(a)},[]),o.createElement(o.Fragment,null,o.createElement(wt,{placeholder:"Search Language",onChangeText:a=>i(a)}),o.createElement(Ee,null,e.filter(a=>a.includes(n)).map(a=>v("Dislate","DislateLangFilter")&&a=="detect"?o.createElement(o.Fragment,null):o.createElement(u,{label:b(a),trailing:bt,onPress:()=>{v(c,"DislateLangFilter")?O("Dislate","DislateLangTo",a):O("Dislate","DislateLangFrom",a),y.open({content:`Set ${x[a].toUpperCase()} as Language to Translate ${v("Dislate","DislateLangFilter")?"to":"from"}.`,source:v("Dislate","DislateLangFilter")?l.Settings.Translate_To:l.Settings.Translate_From}),C.pop()}}))))};const X=window.enmity.modules.common.Components.General.Animated,[ue,vt]=q(S.byProps("transitionToGuild"),S.byProps("setString"));var kt=()=>{const e=ae.createThemedStyleSheet({container:{paddingTop:30,paddingLeft:20,marginBottom:-5,flexDirection:"row"},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},image:{width:75,height:75,borderRadius:10},main_text:{opacity:.975,letterSpacing:.25},header:{color:T.ThemeColorMap.HEADER_PRIMARY,fontFamily:T.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:T.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}}),t=o.useRef(new X.Value(1)).current,n=()=>{X.spring(t,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},i=()=>{X.spring(t,{toValue:1,duration:250,useNativeDriver:!0}).start()},a=()=>{ue.openURL(p.repo)},m={transform:[{scale:t}]};return o.createElement(o.Fragment,null,o.createElement(P,{style:e.container},o.createElement(U,{onPress:a,onPressIn:n,onPressOut:i},o.createElement(X.View,{style:[m]},o.createElement(We,{style:[e.image],source:{uri:"https://i.imgur.com/rl1ga06.png"}}))),o.createElement(P,{style:e.text_container},o.createElement(U,{onPress:()=>{ue.openURL(p.repo)}},o.createElement(D,{style:[e.main_text,e.header]},c," ")),o.createElement(P,{style:{flexDirection:"row"}},o.createElement(D,{style:[e.main_text,e.sub_header]},"A project by"),o.createElement(U,{onPress:()=>{ue.openURL(p.user)}},o.createElement(D,{style:[e.main_text,e.sub_header,{paddingLeft:4,fontFamily:T.Fonts.DISPLAY_BOLD}]},Te[0].name))),o.createElement(P,null,o.createElement(U,{style:{flexDirection:"row"},onPress:()=>{vt.setString(le(k,M)),ce("debug information")}},o.createElement(D,{style:[e.main_text,e.sub_header]},"Version:"),o.createElement(D,{style:[e.main_text,e.sub_header,{paddingLeft:4,fontFamily:T.Fonts.DISPLAY_BOLD}]},k," "))))))};const{native:j}=window.enmity;function pt(){j.reload()}j.version,j.build,j.device,j.version;async function Et(){const e=`${p.download}?${Math.floor(Math.random()*1001)}.js`,t=await(await $e.get(e)).text;let n=t.match(/\d\.\d\.\d+/g),i=t.match(/patch\-\d\.\d\.\d+/g);return!n||!i?Me(c,k):(n=n[0],i=i[0],n!=k?Ce(e,n,i.split("-")[1],!1):i!=p.build?Ce(e,n,i.split("-")[1],!0):Me(c,k))}const Ce=(e,t,n,i)=>{const a=i?n:t;Y.show({title:"Update found",body:`A newer ${i?"build":"version"} is available for ${c}. ${i?`
The version will remain at \`${t}\`, but the build will update to \`${n}\`.`:""}
Would you like to install ${i?"build":"version"} \`${t}\` now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>St(e,a,i)})},Me=(e,t)=>{console.log(`[${e}] Plugin is on the latest version, which is ${t}`),y.open({content:`${e} is on latest version (${t})`,source:l.Translate})};async function St(e,t,n){window.enmity.plugins.installPlugin(e,({data:i})=>{i=="installed_plugin"||i=="overridden_plugin"?Y.show({title:`Updated ${c}`,body:`Successfully updated to ${n?"build":"version"} \`${t}\`. 
Would you like to reload Discord now?`,confirmText:"Reload",cancelText:"Not now",onConfirm:()=>{pt()}}):console.log(`[Dislate] Plugin failed to update to ${n?"build":"version"} ${t}.`)})}const[_t,$t]=q(S.byProps("transitionToGuild"),S.byProps("setString"));var Dt=({settings:e})=>{const t=ae.createThemedStyleSheet({icon:{color:T.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:T.ThemeColorMap.TEXT_MUTED}}),[n,i]=o.useState(),[a,m]=o.useState();return o.createElement(o.Fragment,null,o.createElement(Ee,{onTouchStart:s=>{i(s.nativeEvent.pageX),m(s.nativeEvent.pageY)},onTouchEnd:s=>{n-s.nativeEvent.pageX<-100&&a-s.nativeEvent.pageY<40&&a-s.nativeEvent.pageY>-40&&C.pop()}},o.createElement(kt,null),o.createElement(ne,{title:"Language"},o.createElement(u,{label:"Translate From",leading:o.createElement(u.Icon,{style:t.icon,source:l.Settings.Translate_From}),trailing:()=>{var s;return o.createElement(D,{style:t.item},(s=b(v(c,"DislateLangFrom","detect")))!=null?s:"N/A")},onPress:()=>{O(c,"DislateLangFilter",!1),C.push(Le,{component:Pe,name:"Dislate: Language From"})}}),o.createElement(A,null),o.createElement(u,{label:"Translate To",leading:o.createElement(u.Icon,{style:t.icon,source:l.Settings.Translate_To}),trailing:()=>{var s;return o.createElement(D,{style:t.item},(s=b(v(c,"DislateLangTo","english")))!=null?s:"N/A")},onPress:()=>{O(c,"DislateLangFilter",!0),C.push(Le,{component:Pe,name:"Dislate: Language To"})}})),o.createElement(ne,{title:"Utility"},o.createElement(u,{label:"Initialisation Toasts",leading:o.createElement(u.Icon,{style:t.icon,source:l.Settings.Toasts.Context}),subLabel:`Enable Toasts to display Loading State of ${c}`,trailing:o.createElement(Je,{value:e.getBoolean("toastEnable",!1),onValueChange:()=>{e.toggle("toastEnable",!1),y.open({content:`Successfully ${e.getBoolean("toastEnable",!1)?"enabled":"disabled"} Load Toasts.`,source:l.Settings.Toasts.Settings})}})}),o.createElement(A,null),o.createElement(u,{label:"Copy Debug Info",subLabel:`Copy useful debug information of ${c} to clipboard.`,leading:o.createElement(u.Icon,{style:t.icon,source:l.Settings.Debug}),trailing:u.Arrow,onPress:async function(){$t.setString(await le(k,M)),ce("debug information")}}),o.createElement(A,null),o.createElement(u,{label:"Clear Device Cache",subLabel:"Void the fetched device list storage.",leading:o.createElement(u.Icon,{style:t.icon,source:l.Delete}),trailing:u.Arrow,onPress:async function(){await G.removeItem("device_list"),y.open({content:"Cleared device list storage.",source:l.Settings.Toasts.Settings})}})),o.createElement(ne,{title:"Source"},o.createElement(u,{label:"Check for Updates",subLabel:`Search for any ${c} updates`,leading:o.createElement(u.Icon,{style:t.icon,source:l.Copy}),trailing:u.Arrow,onPress:()=>{Et()}}),o.createElement(A,null),o.createElement(u,{label:"Source",subLabel:`Open the Repo of ${c} Externally`,leading:o.createElement(u.Icon,{style:t.icon,source:l.Open}),trailing:u.Arrow,onPress:()=>{_t.openURL(p.repo)}})),o.createElement(u,{label:`Plugin Version: ${k}
Release Channel: ${M}`})))};function Tt(e,t,n,i){window.enmity.clyde.sendReply(e,t,n,i)}var je;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(je||(je={}));var K;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(K||(K={}));var W;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(W||(W={}));var ze;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(ze||(ze={}));var z;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number",e[e.Attachment=11]="Attachment"})(z||(z={}));var Ie;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(Ie||(Ie={}));let xt=ft(Object.keys(x),e=>({name:b(e),displayName:b(e),value:e}));const Lt={id:"translate",name:"translate",displayName:"translate",description:"Send a message in the language chosen.",displayDescription:"Send a message in the language chosen.",type:K.Chat,inputType:W.BuiltInText,options:[{name:"text",displayName:"text",description:"Text to send translated",displayDescription:"Text to send translated",type:z.String,required:!0},{name:"language",displayName:"language",description:"Language that it will translate to.",displayDescription:"The Language that Dislate will translate into.",type:z.String,choices:[...xt.filter(e=>e.name!=="Detect")],required:!0}],execute:async function(e,t){let n=L(e,"translate text",a=>a.name=="text").value,i=L(e,"translate language",a=>a.name=="language").value;Fe(n,v(c,"DislateLangFrom","detect"),i).then(a=>a?(Y.show({title:"Are you sure?",body:`The message about to be sent is:
\`${a}\`
Are you sure you want to send this?`,confirmText:"Yeah, send it",cancelText:"Nope, don't send it",onConfirm:()=>{_e.sendMessage(t.channel.id,{content:a}),y.open({content:`Sent message in ${b(i)}.`,source:l.Translate})},onCancel:()=>{y.open({content:"Cancelled translated message request.",source:l.Cancel})}}),{}):(Tt(t.channel.id,"Failed to send Translated Message."),{}))}},[Nt,Ft]=q(S.byProps("transitionToGuild"),S.byProps("setString"));let me=c.toLowerCase();const Rt={id:`${me}`,name:`${me}`,displayName:`${me}`,description:`Choose from a list of options for debugging in ${c}`,displayDescription:`Choose from a list of options for debugging in ${c}`,type:K.Chat,inputType:W.BuiltInText,options:[{name:"type",displayName:"type",description:"The type of command to execute",displayDescription:"The type of command to execute",type:z.String,choices:[{name:b("debug"),displayName:b("debug"),value:"debug"},{name:b("download"),displayName:b("download"),value:"download"},{name:b("repo"),displayName:b("repo"),value:"repo"}],required:!0}],execute:async function(e,t){var n;let i=e.find(s=>s.name=="type").value;const a={debug:async function(){_e.sendMessage(t.channel.id,{content:await le(k,M)}),y.open({content:"Sent debug info in current channel.",source:l.Debug_Command.Sent})},download:()=>{Ft.setString(`${p.download}?${Math.floor(Math.random()*1001)}.js`),ce("download link")},repo:()=>{Nt.openURL(p.repo)}},m=()=>{y.open({content:"Invalid command argument.",source:l.Debug_Command.Clock})};return((n=a[i])!=null?n:m)(),{}}},[de,Be]=q(S.byProps("openLazy","hideActionSheet"),S.byProps("getChannel","getDMFromUserId")),ge=nt("dislate");var Pt=(e=>(e[e.Translate=0]="Translate",e[e.Revert=1]="Revert",e))(Pt||{});let J=[{invalid_id:"acquite sucks"}];const Ct={...d,commands:[],patches:[],onStart(){this.commands=[Lt,Rt];let e=0,t=3;async function n(){try{e++;let i=oe(d.name,"toastEnable",!1);const a=Se("getMessage","getMessages");await yt();const m=Se("_currentDispatchActionType","_subscriptions","_actionHandlers","_waitQueue");for(const s of["MESSAGE_UPDATE"])try{m.dispatch({type:s,message:{}})}catch(w){console.log(`[${d.name} Local Error ${w}]`)}console.log(`[${d.name}] delayed start attempt ${e}/${t}.`),i&&y.open({content:`[${d.name}] start attempt ${e}/${t}.`,source:l.Debug});try{ge.before(de,"openLazy",(s,[w,_],Mt)=>{_==="MessageLongPressActionSheet"&&w.then(Q=>{let Ue=Q.default;return Q.default=({message:he,user:Ae,channel:fe,canAddNewReactions:qe},Ve)=>{var ye,we,be,ve,ke;let $=Ue({message:he,user:Ae,channel:fe,canAddNewReactions:qe},Ve);const I=mt(),[B,pe]=o.useState(0);if(!$.props)return console.log(`[${d.name} Local Error: Property "Props" Does not Exist on "res"]`),$;let N=(ke=(ve=(be=(we=(ye=$==null?void 0:$.props)==null?void 0:ye.children)==null?void 0:we.props)==null?void 0:be.children)==null?void 0:ve.props)==null?void 0:ke.children[1];if(!N)return console.log(`[${d.name} Local Error: 'finalLocation' seems to be undefined!]`),$;const[Ge,Z]=o.useState(0);o.useEffect(()=>{ht(Object.values(I),g=>{L(N,"external plugin list",f=>{if(f.key!==I.dislate)return f.key===g})&&Z(f=>f+1)}),L(N,"reply button",g=>{var f;return((f=g.props)==null?void 0:f.message)==="Reply"})&&Z(g=>g+1),L(N,"edit message button",g=>{var f;return((f=g.props)==null?void 0:f.message)==="Edit Message"})&&Z(g=>g+1)},[]);const E=a.getMessage(fe.id,he.id);if(!E.content)return console.log(`[${d.name}] No message content.`),$;const ee=E.id,Ye=E.content,te=L(J,"cache object",g=>Object.keys(g)[0]===ee);o.useEffect(()=>{pe(te?1:0)},pe);const Oe=o.createElement(u,{key:I.dislate,label:`${B===0?"Translate":"Revert"}`,leading:o.createElement(u.Icon,{source:B===0?l.Translate:l.Revert}),onPress:()=>{try{if(B===0){const g=v(d.name,"DislateLangFrom","detect"),f=v(d.name,"DislateLangTo","english");Fe(E.content,g,f).then(He=>{const Xe={type:"MESSAGE_UPDATE",message:{...E,content:`${He} \`[${b(f)}]\``,guild_id:Be.getChannel(E.channel_id).guild_id},log_edit:!1};m.dispatch(Xe),y.open({content:`Modified message to ${b(v(d.name,"DislateLangTo","english"))}.`,source:l.Translate}),J.unshift({[ee]:Ye})}),de.hideActionSheet()}else if(B===1){const g={type:"MESSAGE_UPDATE",message:{...E,content:te[ee],guild_id:Be.getChannel(E.channel_id).guild_id},log_edit:!1};m.dispatch(g),y.open({content:"Reverted message back to original state.",source:l.Translate}),J=J.filter(f=>f!==te),de.hideActionSheet()}}catch(g){console.log(`[Dislate Local Error ${g}]`)}}});return L(N,"existing key of dislate",g=>g.key===I.dislate)||dt(N,Oe,Ge,"insert translate button"),$},Q})})}catch(s){console.log(`[${d.name} Local Error ${s}]`),oe(d.name,"toastEnable",!1)&&y.open({content:`[${d.name}] failed to open action sheet.`,source:l.Retry})}}catch(i){console.log(`[${d.name} Local Error ${i}]`);let a=oe(d.name,"toastEnable",!1);e<t?(console.warn(`[${d.name}] failed to start. Trying again in ${e}0s.`),a&&y.open({content:`[${d.name}] failed to start. Trying again in ${e}0s.`,source:l.Retry}),setTimeout(n,e*1e4)):(console.error(`[${d.name}] failed to start. Giving up.`),a&&y.open({content:`[${d.name}] failed to start. Giving up.`,source:l.Failed}))}}setTimeout(()=>{n(),this.patches.push(ge)},500)},onStop(){this.commands=[],this.patches=[],ge.unpatchAll()},getSettingsPanel({settings:e}){return o.createElement(Dt,{settings:e})}};Qe(Ct);
