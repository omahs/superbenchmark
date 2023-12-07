"use strict";(self.webpackChunksuperbench_website=self.webpackChunksuperbench_website||[]).push([[6143],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,h=u["".concat(p,".").concat(d)]||u[d]||c[d]||l;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},395:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return s}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={id:"model-benchmarks"},p="Model Benchmarks",m={unversionedId:"user-tutorial/benchmarks/model-benchmarks",id:"user-tutorial/benchmarks/model-benchmarks",isDocsHomePage:!1,title:"Model Benchmarks",description:"PyTorch Model Benchmarks",source:"@site/../docs/user-tutorial/benchmarks/model-benchmarks.md",sourceDirName:"user-tutorial/benchmarks",slug:"/user-tutorial/benchmarks/model-benchmarks",permalink:"/superbenchmark/docs/user-tutorial/benchmarks/model-benchmarks",editUrl:"https://github.com/microsoft/superbenchmark/edit/main/website/../docs/user-tutorial/benchmarks/model-benchmarks.md",version:"current",frontMatter:{id:"model-benchmarks"},sidebar:"docs",previous:{title:"Micro Benchmarks",permalink:"/superbenchmark/docs/user-tutorial/benchmarks/micro-benchmarks"},next:{title:"Docker Benchmarks",permalink:"/superbenchmark/docs/user-tutorial/benchmarks/docker-benchmarks"}},s=[{value:"PyTorch Model Benchmarks",id:"pytorch-model-benchmarks",children:[{value:"<code>model-benchmarks</code>",id:"model-benchmarks-1",children:[]}]},{value:"Megatron Model benchmarks",id:"megatron-model-benchmarks",children:[{value:"<code>megatron-gpt</code>",id:"megatron-gpt",children:[]}]}],c={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"model-benchmarks"},"Model Benchmarks"),(0,l.kt)("h2",{id:"pytorch-model-benchmarks"},"PyTorch Model Benchmarks"),(0,l.kt)("h3",{id:"model-benchmarks-1"},(0,l.kt)("inlineCode",{parentName:"h3"},"model-benchmarks")),(0,l.kt)("h4",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"Run training or inference tasks with single or half precision for deep learning models,\nincluding the following categories:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GPT: gpt2-small, gpt2-medium, gpt2-large and gpt2-xl"),(0,l.kt)("li",{parentName:"ul"},"BERT: bert-base and bert-large"),(0,l.kt)("li",{parentName:"ul"},"LSTM"),(0,l.kt)("li",{parentName:"ul"},"CNN, listed in ",(0,l.kt)("a",{parentName:"li",href:"https://pytorch.org/vision/0.8/models.html"},(0,l.kt)("inlineCode",{parentName:"a"},"torchvision.models")),", including:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"resnet: resnet18, resnet34, resnet50, resnet101, resnet152"),(0,l.kt)("li",{parentName:"ul"},"resnext: resnext50_32x4d, resnext101_32x8d"),(0,l.kt)("li",{parentName:"ul"},"wide_resnet: wide_resnet50_2, wide_resnet101_2"),(0,l.kt)("li",{parentName:"ul"},"densenet: densenet121, densenet169, densenet201, densenet161"),(0,l.kt)("li",{parentName:"ul"},"vgg: vgg11, vgg11_bn, vgg13, vgg13_bn, vgg16, vgg16_bn, vgg19_bn, vgg19"),(0,l.kt)("li",{parentName:"ul"},"mnasnet: mnasnet0_5, mnasnet0_75, mnasnet1_0, mnasnet1_3"),(0,l.kt)("li",{parentName:"ul"},"mobilenet: mobilenet_v2"),(0,l.kt)("li",{parentName:"ul"},"shufflenet: shufflenet_v2_x0_5, shufflenet_v2_x1_0, shufflenet_v2_x1_5, shufflenet_v2_x2_0"),(0,l.kt)("li",{parentName:"ul"},"squeezenet: squeezenet1_0, squeezenet1_1"),(0,l.kt)("li",{parentName:"ul"},"others: alexnet, googlenet, inception_v3")))),(0,l.kt)("p",null,"For inference, supported percentiles include\n50",(0,l.kt)("sup",null,"th"),", 90",(0,l.kt)("sup",null,"th"),", 95",(0,l.kt)("sup",null,"th"),", 99",(0,l.kt)("sup",null,"th"),", and 99.9",(0,l.kt)("sup",null,"th"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"New: Support fp8_hybrid and fp8_e4m3 precision for BERT models.")),(0,l.kt)("h4",{id:"metrics"},"Metrics"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Unit"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"model-benchmarks/pytorch-${model_name}/${precision}_train_step_time"),(0,l.kt)("td",{parentName:"tr",align:null},"time (ms)"),(0,l.kt)("td",{parentName:"tr",align:null},"The average training step time with fp32/fp16 precision.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"model-benchmarks/pytorch-${model_name}/${precision}_train_throughput"),(0,l.kt)("td",{parentName:"tr",align:null},"throughput (samples/s)"),(0,l.kt)("td",{parentName:"tr",align:null},"The average training throughput with fp32/fp16 precision per GPU.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"model-benchmarks/pytorch-${model_name}/${precision}_inference_step_time"),(0,l.kt)("td",{parentName:"tr",align:null},"time (ms)"),(0,l.kt)("td",{parentName:"tr",align:null},"The average inference step time with fp32/fp16 precision.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"model-benchmarks/pytorch-${model_name}/${precision}_inference_throughput"),(0,l.kt)("td",{parentName:"tr",align:null},"throughput (samples/s)"),(0,l.kt)("td",{parentName:"tr",align:null},"The average inference throughput with fp32/fp16 precision.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"model-benchmarks/pytorch-${model_name}/${precision}_inference_step_time","_","${percentile}"),(0,l.kt)("td",{parentName:"tr",align:null},"time (ms)"),(0,l.kt)("td",{parentName:"tr",align:null},"The n",(0,l.kt)("sup",null,"th")," percentile inference step time with fp32/fp16 precision.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"model-benchmarks/pytorch-${model_name}/${precision}_inference_throughput","_","${percentile}"),(0,l.kt)("td",{parentName:"tr",align:null},"throughput (samples/s)"),(0,l.kt)("td",{parentName:"tr",align:null},"The n",(0,l.kt)("sup",null,"th")," percentile inference throughput with fp32/fp16 precision.")))),(0,l.kt)("h2",{id:"megatron-model-benchmarks"},"Megatron Model benchmarks"),(0,l.kt)("h3",{id:"megatron-gpt"},(0,l.kt)("inlineCode",{parentName:"h3"},"megatron-gpt")),(0,l.kt)("h4",{id:"introduction-1"},"Introduction"),(0,l.kt)("p",null,"Run GPT pretrain tasks with float32, float16, bfloat16 precisions with ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/NVIDIA/Megatron-LM"},"Megatron-LM")," or ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/microsoft/Megatron-DeepSpeed"},"Megatron-DeepSpeed"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"tips: batch_size in this benchmark represents global batch size, the batch size on each GPU instance is micro_batch_size.")),(0,l.kt)("h4",{id:"metrics-1"},"Metrics"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Unit"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"megatron-gpt/${precision}_train_step_time"),(0,l.kt)("td",{parentName:"tr",align:null},"time (ms)"),(0,l.kt)("td",{parentName:"tr",align:null},"The average training step time per iteration.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"megatron-gpt/${precision}_train_throughput"),(0,l.kt)("td",{parentName:"tr",align:null},"throughput (samples/s)"),(0,l.kt)("td",{parentName:"tr",align:null},"The average training throughput per iteration.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"megatron-gpt/${precision}_train_tflops"),(0,l.kt)("td",{parentName:"tr",align:null},"tflops/s"),(0,l.kt)("td",{parentName:"tr",align:null},"The average training tflops per second per iteration.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"megatron-gpt/${precision}_train_mem_allocated"),(0,l.kt)("td",{parentName:"tr",align:null},"GB"),(0,l.kt)("td",{parentName:"tr",align:null},"The average GPU memory allocated per iteration.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"megatron-gpt/${precision}_train_max_mem_allocated"),(0,l.kt)("td",{parentName:"tr",align:null},"GB"),(0,l.kt)("td",{parentName:"tr",align:null},"The average maximum GPU memory allocated per iteration.")))))}u.isMDXComponent=!0}}]);