(self.webpackChunksuperbench_website=self.webpackChunksuperbench_website||[]).push([[143],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return s},kt:function(){return h}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),p=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,s=m(t,["components","mdxType","originalType","parentName"]),d=p(n),h=a,c=d["".concat(o,".").concat(h)]||d[h]||u[h]||l;return n?r.createElement(c,i(i({ref:e},s),{},{components:n})):r.createElement(c,i({ref:e},s))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=d;var m={};for(var o in e)hasOwnProperty.call(e,o)&&(m[o]=e[o]);m.originalType=t,m.mdxType="string"==typeof t?t:a,i[1]=m;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},395:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return m},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(2122),a=n(9756),l=(n(7294),n(3905)),i=["components"],m={id:"model-benchmarks"},o="Model Benchmarks",p={unversionedId:"user-tutorial/benchmarks/model-benchmarks",id:"user-tutorial/benchmarks/model-benchmarks",isDocsHomePage:!1,title:"Model Benchmarks",description:"PyTorch Model Benchmarks",source:"@site/../docs/user-tutorial/benchmarks/model-benchmarks.md",sourceDirName:"user-tutorial/benchmarks",slug:"/user-tutorial/benchmarks/model-benchmarks",permalink:"/superbenchmark/docs/user-tutorial/benchmarks/model-benchmarks",editUrl:"https://github.com/microsoft/superbenchmark/edit/main/website/../docs/user-tutorial/benchmarks/model-benchmarks.md",version:"current",frontMatter:{id:"model-benchmarks"},sidebar:"docs",previous:{title:"Micro Benchmarks",permalink:"/superbenchmark/docs/user-tutorial/benchmarks/micro-benchmarks"},next:{title:"Docker Benchmarks",permalink:"/superbenchmark/docs/user-tutorial/benchmarks/docker-benchmarks"}},s=[{value:"PyTorch Model Benchmarks",id:"pytorch-model-benchmarks",children:[{value:"<code>gpt_models</code>",id:"gpt_models",children:[]},{value:"<code>bert_models</code>",id:"bert_models",children:[]},{value:"<code>lstm_models</code>",id:"lstm_models",children:[]},{value:"<code>cnn_models</code>",id:"cnn_models",children:[]}]}],u={toc:s};function d(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"model-benchmarks"},"Model Benchmarks"),(0,l.kt)("h2",{id:"pytorch-model-benchmarks"},"PyTorch Model Benchmarks"),(0,l.kt)("h3",{id:"gpt_models"},(0,l.kt)("inlineCode",{parentName:"h3"},"gpt_models")),(0,l.kt)("h4",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"Run training or inference tasks with single or half precision for GPT models,\nincluding gpt2-small, gpt2-medium, gpt2-large and gpt2-xl."),(0,l.kt)("h4",{id:"metrics"},"Metrics"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Unit"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gpt_models/pytorch-${model_name}/steptime_train_float32"),(0,l.kt)("td",{parentName:"tr",align:null},"time (ms)"),(0,l.kt)("td",{parentName:"tr",align:null},"Train step time with single precision.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gpt_models/pytorch-${model_name}/throughput_train_float32"),(0,l.kt)("td",{parentName:"tr",align:null},"throughput (samples/s)"),(0,l.kt)("td",{parentName:"tr",align:null},"Train throughput with single precision.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gpt_models/pytorch-${model_name}/steptime_inference_float32"),(0,l.kt)("td",{parentName:"tr",align:null},"time (ms)"),(0,l.kt)("td",{parentName:"tr",align:null},"Inference step time with single precision.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gpt_models/pytorch-${model_name}/throughput_inference_float32"),(0,l.kt)("td",{parentName:"tr",align:null},"throughput (samples/s)"),(0,l.kt)("td",{parentName:"tr",align:null},"Inference throughput with single precision.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gpt_models/pytorch-${model_name}/steptime_train_float16"),(0,l.kt)("td",{parentName:"tr",align:null},"time (ms)"),(0,l.kt)("td",{parentName:"tr",align:null},"Train step time with half precision.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gpt_models/pytorch-${model_name}/throughput_train_float16"),(0,l.kt)("td",{parentName:"tr",align:null},"throughput (samples/s)"),(0,l.kt)("td",{parentName:"tr",align:null},"Train throughput with half precision.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gpt_models/pytorch-${model_name}/steptime_inference_float16"),(0,l.kt)("td",{parentName:"tr",align:null},"time (ms)"),(0,l.kt)("td",{parentName:"tr",align:null},"Inference step time with half precision.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gpt_models/pytorch-${model_name}/throughput_inference_float16"),(0,l.kt)("td",{parentName:"tr",align:null},"throughput (samples/s)"),(0,l.kt)("td",{parentName:"tr",align:null},"Inference throughput with half precision.")))),(0,l.kt)("h3",{id:"bert_models"},(0,l.kt)("inlineCode",{parentName:"h3"},"bert_models")),(0,l.kt)("h4",{id:"introduction-1"},"Introduction"),(0,l.kt)("p",null,"Run training or inference tasks with single or half precision for BERT models, including bert-base and bert-large."),(0,l.kt)("h4",{id:"metrics-1"},"Metrics"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Unit"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bert_models/pytorch-${model_name}/steptime_train_float32"),(0,l.kt)("td",{parentName:"tr",align:null},"time (ms)"),(0,l.kt)("td",{parentName:"tr",align:null},"Train step time with single precision.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bert_models/pytorch-${model_name}/throughput_train_float32"),(0,l.kt)("td",{parentName:"tr",align:null},"throughput (samples/s)"),(0,l.kt)("td",{parentName:"tr",align:null},"Train throughput with single precision.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bert_models/pytorch-${model_name}/steptime_inference_float32"),(0,l.kt)("td",{parentName:"tr",align:null},"time (ms)"),(0,l.kt)("td",{parentName:"tr",align:null},"Inference step time with single precision.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bert_models/pytorch-${model_name}/throughput_inference_float32"),(0,l.kt)("td",{parentName:"tr",align:null},"throughput (samples/s)"),(0,l.kt)("td",{parentName:"tr",align:null},"Inference throughput with single precision.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bert_models/pytorch-${model_name}/steptime_train_float16"),(0,l.kt)("td",{parentName:"tr",align:null},"time (ms)"),(0,l.kt)("td",{parentName:"tr",align:null},"Train step time with half precision.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bert_models/pytorch-${model_name}/throughput_train_float16"),(0,l.kt)("td",{parentName:"tr",align:null},"throughput (samples/s)"),(0,l.kt)("td",{parentName:"tr",align:null},"Train throughput with half precision.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bert_models/pytorch-${model_name}/steptime_inference_float16"),(0,l.kt)("td",{parentName:"tr",align:null},"time (ms)"),(0,l.kt)("td",{parentName:"tr",align:null},"Inference step time with half precision.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bert_models/pytorch-${model_name}/throughput_inference_float16"),(0,l.kt)("td",{parentName:"tr",align:null},"throughput (samples/s)"),(0,l.kt)("td",{parentName:"tr",align:null},"Inference throughput with half precision.")))),(0,l.kt)("h3",{id:"lstm_models"},(0,l.kt)("inlineCode",{parentName:"h3"},"lstm_models")),(0,l.kt)("h4",{id:"introduction-2"},"Introduction"),(0,l.kt)("p",null,"Run training or inference tasks with single or half precision for one bidirectional LSTM model."),(0,l.kt)("h4",{id:"metrics-2"},"Metrics"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Unit"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lstm_models/pytorch-lstm/steptime_train_float32"),(0,l.kt)("td",{parentName:"tr",align:null},"time (ms)"),(0,l.kt)("td",{parentName:"tr",align:null},"Train step time with single precision.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lstm_models/pytorch-lstm/throughput_train_float32"),(0,l.kt)("td",{parentName:"tr",align:null},"throughput (samples/s)"),(0,l.kt)("td",{parentName:"tr",align:null},"Train throughput with single precision.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lstm_models/pytorch-lstm/steptime_inference_float32"),(0,l.kt)("td",{parentName:"tr",align:null},"time (ms)"),(0,l.kt)("td",{parentName:"tr",align:null},"Inference step time with single precision.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lstm_models/pytorch-lstm/throughput_inference_float32"),(0,l.kt)("td",{parentName:"tr",align:null},"throughput (samples/s)"),(0,l.kt)("td",{parentName:"tr",align:null},"Inference throughput with single precision.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lstm_models/pytorch-lstm/steptime_train_float16"),(0,l.kt)("td",{parentName:"tr",align:null},"time (ms)"),(0,l.kt)("td",{parentName:"tr",align:null},"Train step time with half precision.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lstm_models/pytorch-lstm/throughput_train_float16"),(0,l.kt)("td",{parentName:"tr",align:null},"throughput (samples/s)"),(0,l.kt)("td",{parentName:"tr",align:null},"Train throughput with half precision.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lstm_models/pytorch-lstm/steptime_inference_float16"),(0,l.kt)("td",{parentName:"tr",align:null},"time (ms)"),(0,l.kt)("td",{parentName:"tr",align:null},"Inference step time with half precision.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lstm_models/pytorch-lstm/throughput_inference_float16"),(0,l.kt)("td",{parentName:"tr",align:null},"throughput (samples/s)"),(0,l.kt)("td",{parentName:"tr",align:null},"Inference throughput with half precision.")))),(0,l.kt)("h3",{id:"cnn_models"},(0,l.kt)("inlineCode",{parentName:"h3"},"cnn_models")),(0,l.kt)("h4",{id:"introduction-3"},"Introduction"),(0,l.kt)("p",null,"Run training or inference tasks with single or half precision for CNN models listed in\n",(0,l.kt)("a",{parentName:"p",href:"https://pytorch.org/vision/0.8/models.html"},(0,l.kt)("inlineCode",{parentName:"a"},"torchvision.models")),", including:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"resnet: resnet18, resnet34, resnet50, resnet101, resnet152"),(0,l.kt)("li",{parentName:"ul"},"resnext: resnext50_32x4d, resnext101_32x8d"),(0,l.kt)("li",{parentName:"ul"},"wide_resnet: wide_resnet50_2, wide_resnet101_2"),(0,l.kt)("li",{parentName:"ul"},"densenet: densenet121, densenet169, densenet201, densenet161"),(0,l.kt)("li",{parentName:"ul"},"vgg: vgg11, vgg11_bn, vgg13, vgg13_bn, vgg16, vgg16_bn, vgg19_bn, vgg19"),(0,l.kt)("li",{parentName:"ul"},"mnasnet: mnasnet0_5, mnasnet0_75, mnasnet1_0, mnasnet1_3"),(0,l.kt)("li",{parentName:"ul"},"mobilenet: mobilenet_v2"),(0,l.kt)("li",{parentName:"ul"},"shufflenet: shufflenet_v2_x0_5, shufflenet_v2_x1_0, shufflenet_v2_x1_5, shufflenet_v2_x2_0"),(0,l.kt)("li",{parentName:"ul"},"squeezenet: squeezenet1_0, squeezenet1_1"),(0,l.kt)("li",{parentName:"ul"},"others: alexnet, googlenet, inception_v3")),(0,l.kt)("h4",{id:"metrics-3"},"Metrics"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Unit"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cnn_models/pytorch-${model_name}/steptime_train_float32"),(0,l.kt)("td",{parentName:"tr",align:null},"time (ms)"),(0,l.kt)("td",{parentName:"tr",align:null},"Train step time with single precision.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cnn_models/pytorch-${model_name}/throughput_train_float32"),(0,l.kt)("td",{parentName:"tr",align:null},"throughput (samples/s)"),(0,l.kt)("td",{parentName:"tr",align:null},"Train throughput with single precision.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cnn_models/pytorch-${model_name}/steptime_inference_float32"),(0,l.kt)("td",{parentName:"tr",align:null},"time (ms)"),(0,l.kt)("td",{parentName:"tr",align:null},"Inference step time with single precision.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cnn_models/pytorch-${model_name}/throughput_inference_float32"),(0,l.kt)("td",{parentName:"tr",align:null},"throughput (samples/s)"),(0,l.kt)("td",{parentName:"tr",align:null},"Inference throughput with single precision.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cnn_models/pytorch-${model_name}/steptime_train_float16"),(0,l.kt)("td",{parentName:"tr",align:null},"time (ms)"),(0,l.kt)("td",{parentName:"tr",align:null},"Train step time with half precision.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cnn_models/pytorch-${model_name}/throughput_train_float16"),(0,l.kt)("td",{parentName:"tr",align:null},"throughput (samples/s)"),(0,l.kt)("td",{parentName:"tr",align:null},"Train throughput with half precision.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cnn_models/pytorch-${model_name}/steptime_inference_float16"),(0,l.kt)("td",{parentName:"tr",align:null},"time (ms)"),(0,l.kt)("td",{parentName:"tr",align:null},"Inference step time with half precision.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cnn_models/pytorch-${model_name}/throughput_inference_float16"),(0,l.kt)("td",{parentName:"tr",align:null},"throughput (samples/s)"),(0,l.kt)("td",{parentName:"tr",align:null},"Inference throughput with half precision.")))))}d.isMDXComponent=!0}}]);