const{components:r}=window.enmity;r.Alert;const Qe=r.Button;r.FlatList;const Ze=r.Image;r.ImageBackground,r.KeyboardAvoidingView,r.Modal,r.Pressable,r.RefreshControl;const ue=r.ScrollView;r.SectionList,r.StatusBar,r.StyleSheet,r.Switch;const _=r.Text;r.TextInput,r.TouchableHighlight;const N=r.TouchableOpacity;r.TouchableWithoutFeedback,r.Touchable;const U=r.View;r.VirtualizedList,r.Form,r.FormArrow,r.FormCTA,r.FormCTAButton,r.FormCardSection,r.FormCheckbox;const q=r.FormDivider;r.FormHint,r.FormIcon,r.FormInput,r.FormLabel,r.FormRadio;const m=r.FormRow,Q=r.FormSection;r.FormSelect,r.FormSubLabel;const et=r.FormSwitch;r.FormTernaryCheckBox,r.FormText,r.FormTextColors,r.FormTextSizes;function tt(e){window.enmity.plugins.registerPlugin(e)}const D={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,t)=>window.enmity.modules.filters.byName(e,t),byTypeName:(e,t)=>window.enmity.modules.filters.byTypeName(e,t),byDisplayName:(e,t)=>window.enmity.modules.filters.byDisplayName(e,t)};function Z(...e){return window.enmity.modules.bulk(...e)}function xe(...e){return window.enmity.modules.getByProps(...e)}function Le(...e){return window.enmity.modules.getByName(...e)}window.enmity.modules.common;const k=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets;const ee=window.enmity.modules.common.Messages;window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars;const V=window.enmity.modules.common.Native,o=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher;const I=window.enmity.modules.common.Storage,f=window.enmity.modules.common.Toasts,O=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token;const Re=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const $=window.enmity.modules.common.Navigation,nt=window.enmity.modules.common.NavigationNative,Ce=window.enmity.modules.common.NavigationStack;window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const Y=window.enmity.modules.common.StyleSheet,at=window.enmity.modules.common.ColorMap;window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function ot(e){return window.enmity.patcher.create(e)}var c="Dislate",L="1.1.7",it="Translates text into a desired language.",me="stable",Fe=[{name:"Acquite <3",id:"581573474296791211"}],p={download:"https://raw.githubusercontent.com/acquitelol/dislate/main/dist/Dislate.js",repo:"https://github.com/acquitelol/dislate",user:"https://github.com/acquitelol/",build:"patch-1.2.2"},rt="#ff1f84",d={name:c,version:L,description:it,release:me,authors:Fe,plugin:p,color:rt};const Pe=Ce.createStackNavigator(),{ThemeColorMap:M}=at;var de=({name:e="Page",component:t=U,close_button:n={name:"Close",functionality:()=>{$.pop()}}}={})=>{const i=Y.createThemedStyleSheet({container:{backgroundColor:M.BACKGROUND_MOBILE_SECONDARY,flex:1},cardStyle:{backgroundColor:M.BACKGROUND_MOBILE_PRIMARY,color:M.TEXT_NORMAL},header:{backgroundColor:M.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},headerTitleContainer:{color:M.HEADER_PRIMARY},close:{color:M.HEADER_PRIMARY}});return o.createElement(nt.NavigationContainer,null,o.createElement(Pe.Navigator,{initialRouteName:e,style:i.container,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:i.cardStyle,headerStyle:i.header,headerTitleContainerStyle:i.headerTitleContainer,headerTitleAlign:"center",safeAreaInsets:{top:0}}},o.createElement(Pe.Screen,{name:e,component:t,options:{headerTitleStyle:{color:"white"},headerLeft:()=>o.createElement(Qe,{color:i.close.color,title:n.name,onPress:n.functionality}),...Ce.TransitionPresets.ModalSlideFromBottomIOS}})))},R={detect:"auto",afar:"aa",abkhazian:"ab",afrikaans:"af",akan:"ak",albanian:"sq",amharic:"am",arabic:"ar",aragonese:"an",armenian:"hy",assamese:"as",avaric:"av",avestan:"ae",aymara:"ay",azerbaijani:"az",bashkir:"ba",bambara:"bm",basque:"eu",belarusian:"be",bengali:"bn","bihari languages":"bh",bislama:"bi",tibetan:"bo",bosnian:"bs",breton:"br",bulgarian:"bg",burmese:"my",catalan:"ca",valencian:"ca",czech:"cs",chamorro:"ch",chechen:"ce",chinese_simplified:"zh-cn",chinese_traditional:"zh-tw",church_slavic:"cu",old_slavonic:"cu",church_slavonic:"cu",old_bulgarian:"cu",old_church_slavonic:"cu",chuvash:"cv",cornish:"kw",corsican:"co",cree:"cr",welsh:"cy",danish:"da",german:"de",divehi:"dv",dhivehi:"dv",maldivian:"dv",dutch:"nl",flemish:"nl",dzongkha:"dz",greek:"el",english:"en",esperanto:"eo",estonian:"et",ewe:"ee",faroese:"fo",persian:"fa",fijian:"fj",finnish:"fi",french:"fr",western_frisian:"fy",fulah:"ff",georgian:"ka",gaelic:"gd",scottish_gaelic:"gd",irish:"ga",galician:"gl",manx:"gv",guarani:"gn",gujarati:"gu",haitian:"ht",haitian_creole:"ht",hausa:"ha",hebrew:"he",herero:"hz",hindi:"hi",hiri_motu:"ho",croatian:"hr",hungarian:"hu",igbo:"ig",icelandic:"is",ido:"io",sichuan_yi:"ii",nuosu:"ii",inuktitut:"iu",interlingue:"ie",occidental:"ie",interlingua:"ia",indonesian:"id",inupiaq:"ik",italian:"it",javanese:"jv",japanese:"ja",kalaallisut:"kl",greenlandic:"kl",kannada:"kn",kashmiri:"ks",kanuri:"kr",kazakh:"kk",central_khmer:"km",kikuyu:"ki",gikuyu:"ki",kinyarwanda:"rw",kirghiz:"ky",kyrgyz:"ky",komi:"kv",kongo:"kg",korean:"ko",kuanyama:"kj",kwanyama:"kj",kurdish:"ku",lao:"lo",latin:"la",latvian:"lv",limburgan:"li",limburger:"li",limburgish:"li",lingala:"ln",lithuanian:"lt",luxembourgish:"lb",letzeburgesch:"lb","luba-katanga":"lu",ganda:"lg",macedonian:"mk",marshallese:"mh",malayalam:"ml",maori:"mi",marathi:"mr",malay:"ms",malagasy:"mg",maltese:"mt",mongolian:"mn",nauru:"na",navajo:"nv",navaho:"nv",south_ndebele:"nr",north_ndebele:"nd",ndonga:"ng",nepali:"ne",norwegian_nynorsk:"nn",norwegian_bokm\u00E5l:"nb",norwegian:"no",chichewa:"ny",chewa:"ny",nyanja:"ny",occitan:"oc",ojibwa:"oj",oriya:"or",oromo:"om",ossetian:"os",ossetic:"os",panjabi:"pa",punjabi:"pa",pali:"pi",polish:"pl",portuguese:"pt",pushto:"ps",pashto:"ps",quechua:"qu",romansh:"rm",romanian:"ro",moldavian:"ro",moldovan:"ro",rundi:"rn",russian:"ru",sango:"sg",sanskrit:"sa",sinhala:"si",sinhalese:"si",slovak:"sk",slovenian:"sl",northern_sami:"se",samoan:"sm",shona:"sn",sindhi:"sd",somali:"so","sotho, Southern":"st",spanish:"es",castilian:"es",sardinian:"sc",serbian:"sr",swati:"ss",sundanese:"su",swahili:"sw",swedish:"sv",tahitian:"ty",tamil:"ta",tatar:"tt",telugu:"te",tajik:"tg",tagalog:"tl",thai:"th",tigrinya:"ti",tonga:"to",tswana:"tn",tsonga:"ts",turkmen:"tk",turkish:"tr",twi:"tw",uighur:"ug",uyghur:"ug",ukrainian:"uk",urdu:"ur",uzbek:"uz",venda:"ve",vietnamese:"vi",volap\u00FCk:"vo",walloon:"wa",wolof:"wo",xhosa:"xh",yiddish:"yi",yoruba:"yo",zhuang:"za",chuang:"za",zulu:"zu"};function j(e,t,n){window.enmity.settings.set(e,t,n)}function S(e,t,n){return window.enmity.settings.get(e,t,n)}function C(e,t,n){return window.enmity.settings.getBoolean(e,t,n)}var st=["auto","aa","ab","ae","af","ak","am","an","ar","as","av","ay","az","ba","be","bg","bh","bi","bm","bn","bo","br","bs","ca","ce","ch","co","cr","cs","cu","cv","cy","da","de","dv","dz","ee","el","en","eo","es","et","eu","fa","ff","fi","fj","fo","fr","fy","ga","gd","gl","gn","gu","gv","ha","he","hi","ho","hr","ht","hu","hy","hz","ia","id","ie","ig","ii","ik","io","is","it","iu","ja","jv","ka","kg","ki","kj","kk","kl","km","kn","ko","kr","ks","ku","kv","kw","ky","la","lb","lg","li","ln","lo","lt","lu","lv","mg","mh","mi","mk","ml","mn","mr","ms","mt","my","na","nb","nd","ne","ng","nl","nn","no","nr","nv","ny","oc","oj","om","or","os","pa","pi","pl","ps","pt","qu","rm","rn","ro","ru","rw","sa","sc","sd","se","sg","si","sk","sl","sm","sn","so","sq","sr","ss","st","su","sv","sw","ta","te","tg","th","ti","tk","tl","tn","to","tr","ts","tt","tw","ty","ug","uk","ur","uz","ve","vi","vo","wa","wo","xh","yi","yo","za","zh-cn","zh-tw","zu"],lt={auto:"auto",aar:"aa",abk:"ab",afr:"af",aka:"ak",alb:"sq",amh:"am",ara:"ar",arg:"an",arm:"hy",asm:"as",ava:"av",ave:"ae",aym:"ay",aze:"az",bak:"ba",bam:"bm",baq:"eu",bel:"be",ben:"bn",bih:"bh",bis:"bi",bos:"bs",bre:"br",bul:"bg",bur:"my",cat:"ca",cha:"ch",che:"ce",chi:"zh",chis:"zh-cn",chit:"zh-tw",chu:"cu",chv:"cv",cor:"kw",cos:"co",cre:"cr",cze:"cs",dan:"da",div:"dv",dut:"nl",dzo:"dz",eng:"en",epo:"eo",est:"et",ewe:"ee",fao:"fo",fij:"fj",fin:"fi",fre:"fr",fry:"fy",ful:"ff",geo:"ka",ger:"de",gla:"gd",gle:"ga",glg:"gl",glv:"gv",gre:"el",grn:"gn",guj:"gu",hat:"ht",hau:"ha",heb:"he",her:"hz",hin:"hi",hmo:"ho",hrv:"hr",hun:"hu",ibo:"ig",ice:"is",ido:"io",iii:"ii",iku:"iu",ile:"ie",ina:"ia",ind:"id",ipk:"ik",ita:"it",jav:"jv",jpn:"ja",kal:"kl",kan:"kn",kas:"ks",kau:"kr",kaz:"kk",khm:"km",kik:"ki",kin:"rw",kir:"ky",kom:"kv",kon:"kg",kor:"ko",kua:"kj",kur:"ku",lao:"lo",lat:"la",lav:"lv",lim:"li",lin:"ln",lit:"lt",ltz:"lb",lub:"lu",lug:"lg",mac:"mk",mah:"mh",mal:"ml",mao:"mi",mar:"mr",may:"ms",mlg:"mg",mlt:"mt",mon:"mn",nau:"na",nav:"nv",nbl:"nr",nde:"nd",ndo:"ng",nep:"ne",nno:"nn",nob:"nb",nor:"no",nya:"ny",oci:"oc",oji:"oj",ori:"or",orm:"om",oss:"os",pan:"pa",per:"fa",pli:"pi",pol:"pl",por:"pt",pus:"ps",que:"qu",roh:"rm",rum:"ro",run:"rn",rus:"ru",sag:"sg",san:"sa",sin:"si",slo:"sk",slv:"sl",sme:"se",smo:"sm",sna:"sn",snd:"sd",som:"so",sot:"st",spa:"es",srd:"sc",srp:"sr",ssw:"ss",sun:"su",swa:"sw",swe:"sv",tah:"ty",tam:"ta",tat:"tt",tel:"te",tgk:"tg",tgl:"tl",tha:"th",tib:"bo",tir:"ti",ton:"to",tsn:"tn",tso:"ts",tuk:"tk",tur:"tr",twi:"tw",uig:"ug",ukr:"uk",urd:"ur",uzb:"uz",ven:"ve",vie:"vi",vol:"vo",wel:"cy",wln:"wa",wol:"wo",xho:"xh",yid:"yi",yor:"yo",zha:"za",zul:"zu"},ge=e=>{if(typeof e!="string")throw new Error(`The "language" must be a string, received ${typeof e}`);if(e.length>100)throw new Error(`The "language" is too long at ${e.length} characters`);if(e=e.toLowerCase(),e=R[e]||lt[e]||e,!st.includes(e))throw new Error(`The language "${e}" is not part of the ISO 639-1`);return e};function Ne(){var e=Object.create(null);this.put=function(n,i,a,s){if(typeof a!="undefined"&&(typeof a!="number"||isNaN(a)||a<=0))throw new Error("Cache timeout must be a positive number");if(typeof s!="undefined"&&typeof s!="function")throw new Error("Cache timeout callback must be a function");var l=e[n];l&&clearTimeout(l.timeout);var w={value:i,expire:a+Date.now()};return isNaN(w.expire)||(w.timeout=setTimeout(function(){t(n),s&&s(n,i)}.bind(this),a)),e[n]=w,i},this.del=function(n){var i=!0,a=e[n];return a?(clearTimeout(a.timeout),!isNaN(a.expire)&&a.expire<Date.now()&&(i=!1)):i=!1,i&&t(n),i};function t(n){delete e[n]}this.clear=function(){for(var n in e)clearTimeout(e[n].timeout);e=Object.create(null)},this.get=function(n){var i=e[n];if(typeof i!="undefined"){if(isNaN(i.expire)||i.expire>=Date.now())return i.value;delete e[n]}return null}}const he=new Ne;he.Cache=Ne;const ct="https://translate.googleapis.com/translate_a/single";var ut={fetch:({key:e,from:t,to:n,text:i})=>[`${ct}?client=gtx&sl=${t}&tl=${n}&dt=t&q=${encodeURI(i)}`],parse:e=>e.json().then(t=>{if(t=t&&t[0]&&t[0][0]&&t[0].map(n=>n[0]).join(""),!t)throw new Error("Translation not found");return t})},mt={google:ut};if(typeof fetch=="undefined")try{global.fetch=require("node-fetch")}catch{console.warn("Please make sure node-fetch is available")}const te=function(e={}){if(!(this instanceof te))return new te(e);const t={from:"auto",to:"ja",cache:void 0,languages:ge,engines:mt,engine:"google",keys:{}},n=(i,a={})=>{typeof a=="string"&&(a={to:a}),a.text=i,a.from=ge(a.from||n.from),a.to=ge(a.to||n.to),a.cache=a.cache||n.cache,a.engines=a.engines||{},a.engine=a.engine||n.engine,a.url=a.url||n.url,a.id=a.id||`${a.url}:${a.from}:${a.to}:${a.engine}:${a.text}`,a.keys=a.keys||n.keys||{};for(let E in n.keys)a.keys[E]=a.keys[E]||n.keys[E];a.key=a.key||n.key||a.keys[a.engine];const s=a.engines[a.engine]||n.engines[a.engine],l=he.get(a.id);if(l)return Promise.resolve(l);if(a.to===a.from)return Promise.resolve(a.text);if(s.needkey&&!a.key)throw new Error(`The engine "${a.engine}" needs a key, please provide it`);const w=s.fetch(a);return fetch(...w).then(s.parse).then(E=>he.put(a.id,E,a.cache))};for(let i in t)n[i]=typeof e[i]=="undefined"?t[i]:e[i];return n},fe=new te;fe.Translate=te;async function Ie(e,t,n){return t?await fe(e,{from:R[t],to:R[n]}):await fe(e,R[n])}const v=e=>e.split("_").map(t=>t[0].toUpperCase()+t.slice(1)).join(" "),z=e=>{let t=0;for(let n in e)t++;return t},dt=e=>{let t=e.split(`
`).map(n=>{if(n!="")return`"${n.replaceAll(":",'":"').replace(" ","")}",`});return t[0]=`{${t[0]}`,t[z(t)]=`${t[z(t)]}}`,t=t.join(""),t=t.replaceAll("undefined",""),t=t.split("").reverse().join("").replace(",","").split("").reverse().join(""),t};async function Me(){try{let e=await I.getItem("device_list");if(e)return JSON.parse(e);let t=(await Re.get("https://gist.githubusercontent.com/adamawolf/3048717/raw/1ee7e1a93dff9416f6ff34dd36b0ffbad9b956e9/Apple_mobile_device_types.txt")).text,n=dt(t);await I.setItem("device_list",n);let i=await I.getItem("device_list");return JSON.parse(i)}catch(e){console.warn(`[${c} Local Error \u2014 Issue when getting devices: ${e}]`);return}}async function G(){let e=await Me();return{"Plugin Version":L,"Plugin Build":p.build.split("-")[1],"Release Channel":me,"Discord Build":V.InfoDictionaryManager.Version,"Software Version":V.DCDDeviceManager.systemVersion,Device:e[V.DCDDeviceManager.device]}}async function H(e){const t=[`**[${c}] Debug Information**`],n=await G();return e.forEach(i=>{n[i]&&t.push(`> **${i}**: ${n[i]}`)}),t.join(`
`)}function y(e){return window.enmity.assets.getIDByName(e)}const u={Translate:y("img_nitro_star"),Revert:y("ic_highlight"),Debug:y("debug"),Retry:y("ic_message_retry"),Failed:y("Small"),Cancel:y("ic_megaphone_nsfw_16px"),Delete:y("ic_message_delete"),Copy:y("toast_copy_link"),Open:y("ic_leave_stage"),Clipboard:y("pending-alert"),Debug_Command:{Clock:y("clock")},Settings:{Toasts:{Context:y("toast_image_saved"),Settings:y("ic_selection_checked_24px"),Failed:y("ic_close_circle_24px")},Translate_From:y("ic_raised_hand"),Translate_To:y("ic_activity_24px"),Debug:y("ic_rulebook_16px")}},ye=e=>{f.open({content:`Copied ${e} to clipboard.`,source:u.Clipboard})},gt=()=>({message_spoofer:"69",copy_embed:"1337",invis_chat:"420",cut_message:"512",dislate:"1002"}),F=(e,t,n)=>{try{if(!e)return;let i=z(e);for(let a=0;a<i;a++)if(n(e[a],a,n))return e[a];return}catch(i){console.warn(`[${c}] The following error happened when trying to find an item in ${t}: ${i}`)}},ht=(e,t,n,i)=>{try{if(!e)return;let a=z(e),s=t,l=n;a++,l++;for(let w=a-1;w>=l;w--)e[w]=e[w-1];e[l-1]=s;return}catch(a){console.warn(`[${c}] The following error happened when trying to use the insert method at ${i}: ${a}`);return}},ft=(e,t)=>{let n=e.length;return e[n]=t,n++,e.length=n,n},yt=(e,t)=>{for(let n=0;n<z(e);n++)t(e[n],n,e)},wt=(e,t)=>{const n=[];for(let i=0;i<z(e);i++)ft(n,t(e[i],i,e));return n};async function bt(){let e=V.DCDDeviceManager.device,t=await Me();e.includes("iPhone")&&(e=e.replace("iPhone",""),e=e.replace(",","."),parseFloat(e)<10.6&&parseFloat(e)!=10.3||parseFloat(e)==14.6||parseFloat(e)==12.8)&&(I.getItem("__dislate_incompatible_dialog__")!=null||O.show({title:"Incompatible iPhone",body:`Please note that you're on an${t[V.DCDDeviceManager.device]}.
Some features of ${c} may behave in an unexpected manner.`,confirmText:"I understand",onConfirm:I.setItem("__dislate_incompatible_dialog__",!0)}))}const vt=Le("StaticSearchBarContainer"),pt=m.Arrow;var je=()=>{const[e,t]=o.useState([]),[n,i]=o.useState([]);o.useEffect(()=>{let s=Object.keys(R);t(s)},[]);const a=s=>{S(c,"DislateLangFilter")?j(c,"DislateLangTo",s):j(c,"DislateLangFrom",s),f.open({content:`Set ${R[s].toUpperCase()} as Language to Translate ${S("Dislate","DislateLangFilter")?"to":"from"}.`,source:S(c,"DislateLangFilter")?u.Settings.Translate_To:u.Settings.Translate_From}),$.pop()};return o.createElement(o.Fragment,null,o.createElement(vt,{placeholder:"Search Language",onChangeText:s=>i(s)}),o.createElement(ue,null,e.filter(s=>s.includes(n)).map(s=>S(c,"DislateLangFilter")&&s=="detect"?o.createElement(o.Fragment,null):o.createElement(m,{label:v(s),trailing:pt,onPress:()=>a(s),onLongPress:()=>a(s)}))))};const ne=window.enmity.modules.common.Components.General.Animated,[we,kt]=Z(D.byProps("transitionToGuild"),D.byProps("setString"));var St=()=>{const e=Y.createThemedStyleSheet({container:{paddingTop:30,paddingLeft:20,marginBottom:-5,flexDirection:"row"},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},image:{width:75,height:75,borderRadius:10},main_text:{opacity:.975,letterSpacing:.25},header:{color:k.ThemeColorMap.HEADER_PRIMARY,fontFamily:k.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:k.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}}),t=o.useRef(new ne.Value(1)).current,n=()=>{ne.spring(t,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},i=()=>{ne.spring(t,{toValue:1,duration:250,useNativeDriver:!0}).start()},a=()=>{we.openURL(p.repo)},s={transform:[{scale:t}]};return o.createElement(o.Fragment,null,o.createElement(U,{style:e.container},o.createElement(N,{onPress:a,onPressIn:n,onPressOut:i},o.createElement(ne.View,{style:[s]},o.createElement(Ze,{style:[e.image],source:{uri:"https://i.imgur.com/rl1ga06.png"}}))),o.createElement(U,{style:e.text_container},o.createElement(N,{onPress:()=>{we.openURL(p.repo)}},o.createElement(_,{style:[e.main_text,e.header]},c," ")),o.createElement(U,{style:{flexDirection:"row"}},o.createElement(_,{style:[e.main_text,e.sub_header]},"A project by"),o.createElement(N,{onPress:()=>{we.openURL(p.user)}},o.createElement(_,{style:[e.main_text,e.sub_header,{paddingLeft:4,fontFamily:k.Fonts.DISPLAY_BOLD}]},Fe[0].name))),o.createElement(U,null,o.createElement(N,{style:{flexDirection:"row"},onPress:async function(){const l=await G();kt.setString(H(Object.keys(l))),ye("debug information")}},o.createElement(_,{style:[e.main_text,e.sub_header]},"Version:"),o.createElement(_,{style:[e.main_text,e.sub_header,{paddingLeft:4,fontFamily:k.Fonts.DISPLAY_BOLD}]},L," "))))))};const{native:X}=window.enmity;function Et(){X.reload()}X.version,X.build,X.device,X.version;async function _t(){const e=`${p.download}?${Math.floor(Math.random()*1001)}.js`,t=await(await Re.get(e)).text;let n=t.match(/\d\.\d\.\d+/g),i=t.match(/patch\-\d\.\d\.\d+/g);return!n||!i?Be(c,L):(n=n[0],i=i[0],n!=L?ze(e,n,i.split("-")[1],!1):i!=p.build?ze(e,n,i.split("-")[1],!0):Be(c,L))}const ze=(e,t,n,i)=>{const a=i?n:t;O.show({title:"Update found",body:`A newer ${i?"build":"version"} is available for ${c}. ${i?`
The version will remain at ${t}, but the build will update to ${n}.`:""}
Would you like to install ${i?`build \`${n}\``:`version \`${t}\``}  now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>$t(e,a,i)})},Be=(e,t)=>{console.log(`[${e}] Plugin is on the latest version, which is ${t}`),f.open({content:`${e} is on latest version (${t})`,source:u.Translate})};async function $t(e,t,n){window.enmity.plugins.installPlugin(e,({data:i})=>{i=="installed_plugin"||i=="overridden_plugin"?O.show({title:`Updated ${c}`,body:`Successfully updated to ${n?"build":"version"} \`${t}\`. 
Would you like to reload Discord now?`,confirmText:"Reload",cancelText:"Not now",onConfirm:()=>{Et()}}):console.log(`[Dislate] Plugin failed to update to ${n?"build":"version"} ${t}.`)})}const[Tt,Dt]=Z(D.byProps("transitionToGuild"),D.byProps("setString"));var xt=({settings:e})=>{const t=Y.createThemedStyleSheet({icon:{color:k.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:k.ThemeColorMap.TEXT_MUTED}}),[n,i]=o.useState(),[a,s]=o.useState();return o.createElement(o.Fragment,null,o.createElement(ue,{onTouchStart:l=>{i(l.nativeEvent.pageX),s(l.nativeEvent.pageY)},onTouchEnd:l=>{n-l.nativeEvent.pageX<-100&&a-l.nativeEvent.pageY<40&&a-l.nativeEvent.pageY>-40&&$.pop()}},o.createElement(St,null),o.createElement(Q,{title:"Language"},o.createElement(m,{label:"Translate From",leading:o.createElement(m.Icon,{style:t.icon,source:u.Settings.Translate_From}),trailing:()=>{var l;return o.createElement(_,{style:t.item},(l=v(S(c,"DislateLangFrom","detect")))!=null?l:"N/A")},onPress:()=>{j(c,"DislateLangFilter",!1),$.push(de,{component:je,name:`${c}: Language From`})}}),o.createElement(q,null),o.createElement(m,{label:"Translate To",leading:o.createElement(m.Icon,{style:t.icon,source:u.Settings.Translate_To}),trailing:()=>{var l;return o.createElement(_,{style:t.item},(l=v(S(c,"DislateLangTo","english")))!=null?l:"N/A")},onPress:()=>{j(c,"DislateLangFilter",!0),$.push(de,{component:je,name:"Dislate: Language To"})}})),o.createElement(Q,{title:"Utility"},o.createElement(m,{label:"Initialisation Toasts",leading:o.createElement(m.Icon,{style:t.icon,source:u.Settings.Toasts.Context}),subLabel:`Enable Toasts to display Loading State of ${c}`,trailing:o.createElement(et,{value:e.getBoolean("toastEnable",!1),onValueChange:()=>{e.toggle("toastEnable",!1),f.open({content:`Successfully ${e.getBoolean("toastEnable",!1)?"enabled":"disabled"} Load Toasts.`,source:u.Settings.Toasts.Settings})}})}),o.createElement(q,null),o.createElement(m,{label:"Copy Debug Info",subLabel:`Copy useful debug information of ${c} to clipboard.`,leading:o.createElement(m.Icon,{style:t.icon,source:u.Settings.Debug}),trailing:m.Arrow,onPress:async function(){const l=await G();Dt.setString(await H(Object.keys(l))),ye("debug information")}}),o.createElement(q,null),o.createElement(m,{label:"Clear Device Cache",subLabel:"Void the fetched device list storage.",leading:o.createElement(m.Icon,{style:t.icon,source:u.Delete}),trailing:m.Arrow,onPress:async function(){await I.removeItem("device_list"),f.open({content:"Cleared device list storage.",source:u.Settings.Toasts.Settings})}})),o.createElement(Q,{title:"Source"},o.createElement(m,{label:"Check for Updates",subLabel:`Search for any ${c} updates`,leading:o.createElement(m.Icon,{style:t.icon,source:u.Copy}),trailing:m.Arrow,onPress:()=>{_t()}}),o.createElement(q,null),o.createElement(m,{label:"Source",subLabel:`Open the Repo of ${c} Externally`,leading:o.createElement(m.Icon,{style:t.icon,source:u.Open}),trailing:m.Arrow,onPress:()=>{Tt.openURL(p.repo)}})),o.createElement(m,{label:`[Plugin] Version: ${L}; Build: ${p.build.split("-")[1]}
Release Channel: ${me}`})))};function Lt(e,t,n,i){window.enmity.clyde.sendReply(e,t,n,i)}var Ae;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(Ae||(Ae={}));var ae;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(ae||(ae={}));var oe;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(oe||(oe={}));var Ue;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(Ue||(Ue={}));var K;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number",e[e.Attachment=11]="Attachment"})(K||(K={}));var qe;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(qe||(qe={}));let Rt=wt(Object.keys(R),e=>({name:v(e),displayName:v(e),value:e}));const Ct={id:"translate",name:"translate",displayName:"translate",description:"Send a message in the language chosen.",displayDescription:"Send a message in the language chosen.",type:ae.Chat,inputType:oe.BuiltInText,options:[{name:"text",displayName:"text",description:"Text to send translated",displayDescription:"Text to send translated",type:K.String,required:!0},{name:"language",displayName:"language",description:"Language that it will translate to.",displayDescription:"The Language that Dislate will translate into.",type:K.String,choices:[...Rt.filter(e=>e.name!=="Detect")],required:!0}],execute:async function(e,t){let n=F(e,"translate text",a=>a.name=="text").value,i=F(e,"translate language",a=>a.name=="language").value;Ie(n,S(c,"DislateLangFrom","detect"),i).then(a=>a?(O.show({title:"Are you sure?",body:`The message about to be sent is:
\`${a}\`
Are you sure you want to send this?`,confirmText:"Yeah, send it",cancelText:"Nope, don't send it",onConfirm:()=>{ee.sendMessage(t.channel.id,{content:a}),f.open({content:`Sent message in ${v(i)}.`,source:u.Translate})},onCancel:()=>{f.open({content:"Cancelled translated message request.",source:u.Cancel})}}),{}):(Lt(t.channel.id,"Failed to send Translated Message."),{}))}};var Ft=({option:e,channel:t})=>{const[n,i]=o.useState(C(c,e,!1)),a=Y.createThemedStyleSheet({icon:{color:k.ThemeColorMap.INTERACTIVE_NORMAL}});return o.createElement(m,{key:e,label:e,trailing:o.createElement(m.Icon,{style:a.icon,source:n?u.Settings.Toasts.Settings:u.Settings.Toasts.Failed}),onPress:()=>{C(c,e,!1)?j(c,e,!1):j(c,e,!0),i(C(c,e,!1))},onLongPress:async function(){$.pop(),ee.sendMessage(t,{content:await H([e])}),f.open({content:"Sent debug info in current channel.",source:u.Settings.Toasts.Settings})}})};const Pt=Le("StaticSearchBarContainer");var Nt=({channel_id:e})=>{const[t,n]=o.useState([]),[i,a]=o.useState([]);o.useEffect(async function(){n(Object.keys(await G()))},[]);const s=Y.createThemedStyleSheet({button:{width:"90%",height:50,justifyContent:"center",alignItems:"center",backgroundColor:k.ThemeColorMap.HEADER_PRIMARY,borderRadius:10,marginLeft:"5%",marginRight:"5%",marginTop:20},text:{color:"#fff",textAlign:"center",paddingLeft:10,paddingRight:10,fontSize:16,letterSpacing:.25,fontFamily:k.Fonts.PRIMARY_BOLD}}),l=async function(h){$.pop(),ee.sendMessage(e,{content:await H(h)}),f.open({content:"Sent debug info in current channel.",source:u.Settings.Toasts.Settings})},[w,E]=o.useState(),[re,B]=o.useState();return o.createElement(o.Fragment,null,o.createElement(Pt,{placeholder:"Search Options",onChangeText:h=>a(h)}),o.createElement(ue,{onTouchStart:h=>{E(h.nativeEvent.pageX),B(h.nativeEvent.pageY)},onTouchEnd:h=>{w-h.nativeEvent.pageX<-100&&re-h.nativeEvent.pageY<40&&re-h.nativeEvent.pageY>-40&&$.pop()}},o.createElement(Q,{title:"Options"},t.filter(h=>h.includes(i)).map(h=>o.createElement(Ft,{option:h,channel:e})),o.createElement(q,null)),o.createElement(N,{style:s.button,onPress:async function(){await l(t)},underlayColor:"#fff"},o.createElement(_,{style:s.text},"Send All")),o.createElement(N,{style:s.button,onPress:async function(){let h=t.map(A=>{if(C(c,A,!1))return A});await l(h)},underlayColor:"#fff"},o.createElement(_,{style:s.text},"Send Message"))))};const[It,Mt]=Z(D.byProps("transitionToGuild"),D.byProps("setString"));let be=c.toLowerCase();const jt={id:`${be}`,name:`${be}`,displayName:`${be}`,description:`Choose from a list of options for debugging in ${c}`,displayDescription:`Choose from a list of options for debugging in ${c}`,type:ae.Chat,inputType:oe.BuiltInText,options:[{name:"type",displayName:"type",description:"The type of command to execute",displayDescription:"The type of command to execute",type:K.String,choices:[{name:v("debug"),displayName:v("debug"),value:"debug"},{name:v("download"),displayName:v("download"),value:"download"},{name:v("repo"),displayName:v("repo"),value:"repo"}],required:!0}],execute:async function(e,t){var n;let i=e.find(l=>l.name=="type").value;const a={debug:()=>{O.show({title:"Choose extra options",body:'You can customize the information sent with this command. If you dont want to customize the debug log, press "`Ignore`" instead to send the full log.',confirmText:"Customize",cancelText:"Ignore",onConfirm:async function(){const l=()=>o.createElement(Nt,{channel_id:t.channel.id});$.push(de,{component:l,name:"Dislate: Customize"})},onCancel:async function(){const l=await G();ee.sendMessage(t.channel.id,{content:await H(Object.keys(l))}),f.open({content:"Sent debug info in current channel.",source:u.Settings.Toasts.Settings})}})},download:()=>{Mt.setString(`${p.download}?${Math.floor(Math.random()*1001)}.js`),ye("download link")},repo:()=>{It.openURL(p.repo)}},s=()=>{f.open({content:"Invalid command argument.",source:u.Debug_Command.Clock})};return((n=a[i])!=null?n:s)(),{}}},[ve,Ve]=Z(D.byProps("openLazy","hideActionSheet"),D.byProps("getChannel","getDMFromUserId")),pe=ot("dislate");var zt=(e=>(e[e.Translate=0]="Translate",e[e.Revert=1]="Revert",e))(zt||{});let ie=[{invalid_id:"acquite sucks"}];const Bt={...d,commands:[],patches:[],onStart(){this.commands=[Ct,jt];let e=0;const t=3;async function n(){try{e++;let i=C(d.name,"toastEnable",!1);const a=xe("getMessage","getMessages");await bt();const s=xe("_currentDispatchActionType","_subscriptions","_actionHandlers","_waitQueue");for(const l of["MESSAGE_UPDATE"])try{s.dispatch({type:l,message:{}})}catch(w){console.log(`[${d.name} Local Error ${w}]`)}console.log(`[${d.name}] delayed start attempt ${e}/${t}.`),i&&f.open({content:`[${d.name}] start attempt ${e}/${t}.`,source:u.Debug});try{pe.before(ve,"openLazy",(l,[w,E],re)=>{E==="MessageLongPressActionSheet"&&w.then(B=>{let h=B.default;return B.default=({message:A,user:Oe,channel:ke,canAddNewReactions:Ye},Ge)=>{var Se,Ee,_e,$e,Te;let x=h({message:A,user:Oe,channel:ke,canAddNewReactions:Ye},Ge);const W=gt(),[J,De]=o.useState(0);if(!x.props)return console.log(`[${d.name} Local Error: Property "Props" Does not Exist on "res"]`),x;let P=(Te=($e=(_e=(Ee=(Se=x==null?void 0:x.props)==null?void 0:Se.children)==null?void 0:Ee.props)==null?void 0:_e.children)==null?void 0:$e.props)==null?void 0:Te.children[1];if(!P)return console.log(`[${d.name} Local Error: 'finalLocation' seems to be undefined!]`),x;const[He,se]=o.useState(0);o.useEffect(()=>{yt(Object.values(W),g=>{F(P,"external plugin list",b=>{if(b.key!==W.dislate)return b.key===g})&&se(b=>b+1)}),F(P,"reply button",g=>{var b;return((b=g.props)==null?void 0:b.message)==="Reply"})&&se(g=>g+1),F(P,"edit message button",g=>{var b;return((b=g.props)==null?void 0:b.message)==="Edit Message"})&&se(g=>g+1)},[]);const T=a.getMessage(ke.id,A.id);if(!T.content)return console.log(`[${d.name}] No message content.`),x;const le=T.id,Xe=T.content,ce=F(ie,"cache object",g=>Object.keys(g)[0]===le);o.useEffect(()=>{De(ce?1:0)},De);const Ke=o.createElement(m,{key:W.dislate,label:`${J===0?"Translate":"Revert"}`,leading:o.createElement(m.Icon,{source:J===0?u.Translate:u.Revert}),onPress:()=>{try{if(J===0){const g=S(d.name,"DislateLangFrom","detect"),b=S(d.name,"DislateLangTo","english");Ie(T.content,g,b).then(We=>{const Je={type:"MESSAGE_UPDATE",message:{...T,content:`${We} \`[${v(b)}]\``,guild_id:Ve.getChannel(T.channel_id).guild_id},log_edit:!1};s.dispatch(Je),f.open({content:`Modified message to ${v(S(d.name,"DislateLangTo","english"))}.`,source:u.Translate}),ie.unshift({[le]:Xe})}),ve.hideActionSheet()}else if(J===1){const g={type:"MESSAGE_UPDATE",message:{...T,content:ce[le],guild_id:Ve.getChannel(T.channel_id).guild_id},log_edit:!1};s.dispatch(g),f.open({content:"Reverted message back to original state.",source:u.Translate}),ie=ie.filter(b=>b!==ce),ve.hideActionSheet()}}catch(g){console.log(`[Dislate Local Error ${g}]`)}}});return F(P,"existing key of dislate",g=>g.key===W.dislate)||ht(P,Ke,He,"insert translate button"),x},B})})}catch(l){console.log(`[${d.name} Local Error ${l}]`),C(d.name,"toastEnable",!1)&&f.open({content:`[${d.name}] failed to open action sheet.`,source:u.Retry})}}catch(i){console.log(`[${d.name} Local Error ${i}]`);let a=C(d.name,"toastEnable",!1);e<t?(console.warn(`[${d.name}] failed to start. Trying again in ${e}0s.`),a&&f.open({content:`[${d.name}] failed to start. Trying again in ${e}0s.`,source:u.Retry}),setTimeout(n,e*1e4)):(console.error(`[${d.name}] failed to start. Giving up.`),a&&f.open({content:`[${d.name}] failed to start. Giving up.`,source:u.Failed}))}}setTimeout(()=>{n(),this.patches.push(pe)},500)},onStop(){this.commands=[],this.patches=[],pe.unpatchAll()},getSettingsPanel({settings:e}){return o.createElement(xt,{settings:e})}};tt(Bt);
