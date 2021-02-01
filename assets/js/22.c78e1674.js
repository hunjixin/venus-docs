(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{385:function(s,e,a){"use strict";a.r(e);var t=a(25),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"如何启动一个本地测试网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何启动一个本地测试网络"}},[s._v("#")]),s._v(" 如何启动一个本地测试网络")]),s._v(" "),a("p",[s._v("使用venus启动本地测试网络，目前工具链尚不完整，需要一些lotus组件，包括lotus-seed, lotus-miner")]),s._v(" "),a("h2",{attrs:{id:"环境准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[s._v("#")]),s._v(" 环境准备")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("yum install epel-release -y\nyum install ocl-icd-devel -y\nyum install opencl-headers -y\nyum install hwloc\n")])])]),a("h2",{attrs:{id:"生成创世节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成创世节点"}},[s._v("#")]),s._v(" 生成创世节点")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("生成pre-seal文件及数据")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("    ./lotus-seed pre-seal --sector-size "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v(" --num-sectors "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n    ./lotus-seed genesis new localnet.json\n    ./lotus-seed genesis add-miner localnet.json ~/.genesis-sectors/pre-seal-t01000.json\n")])])])]),s._v(" "),a("li",[a("p",[s._v("启动daemon")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("     ./venus daemon --make-genesis"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("dev.gen --genesis-template"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("localnet.json --bootstrap"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false\n     ./venus wallet "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" ~/.genesis-sectors/pre-seal-t01000.key\n")])])])]),s._v(" "),a("li",[a("p",[s._v("初始化矿工")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("    ./lotus-miner init --genesis-miner --actor"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("t01000 --sector-size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v(" --pre-sealed-sectors"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("~/.genesis-sectors --pre-sealed-metadata"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("~/.genesis-sectors/pre-seal-t01000.json --nosync\n")])])])]),s._v(" "),a("li",[a("p",[s._v("启动创世矿工")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("    ./lotus-miner run\n")])])])])]),s._v(" "),a("h2",{attrs:{id:"启动venus普通节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动venus普通节点"}},[s._v("#")]),s._v(" 启动venus普通节点")]),s._v(" "),a("ol",[a("li",[s._v("启动venus节点"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# first start, dev.car是创世节点生成")]),s._v("\n     ./venus daemon --genesisfile"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("dev.car --network"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("2k --offline"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# other")]),s._v("\n     ./venus daemon --offline"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n")])])])]),s._v(" "),a("li",[s._v("连接创世节点")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# genesis lotus执行")]),s._v("\n     ./lotus net listen\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# venus执行")]),s._v("\n     ./venus swarm connect "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("peer addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看peers")]),s._v("\n     ./lotus swarm peers\n")])])]),a("h2",{attrs:{id:"生成普通miner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成普通miner"}},[s._v("#")]),s._v(" 生成普通miner")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("```sh\n    # 创建钱包\n    ./venus wallet new --type=bls\n    # 转账,在genesis执行\n    ./lotus send $WALLET_T3_ADDR [value]\n    # 查询\n    ./venus wallet balance $WALLET_T3_ADDR\n    # 生成miner./lotus-miner init --owner=$WALLET_T3_ADDR --worker=$WALLET_T3_ADDR --sector-size=2048 --nosync\n```\n")])])]),a("h2",{attrs:{id:"启动miner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动miner"}},[s._v("#")]),s._v(" 启动miner")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动")]),s._v("\n     ./lotus-miner run\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 做一个 Sector")]),s._v("\n     ./lotus-miner sectors pledge\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v('{"base": "{bafy2bzacebbxwyicp4zjavswpeixe2pkaw6vc54ahrqd6dc7vucm7mwcgulru,bafy2bzacebv2awifkmvdgrk2gpnk7qj5pca57bc54pfsurmkekxiu5uwvublw,bafy2bzacedjtnpprzlmk5vhukc4wboxgtwvxh6kdjsskmhtopqs5gt2yh5lha,bafy2bzacedemqsqgpmqktieayjj4a3cxyedh6nak7vito22k25lro37ioqpqy,bafy2bzacebgpggug242sexq7luvn5armividdbksww6gh47df4cg3dkzjrkz6,bafy2bzaceb2jruetan7pjgn7c5ea2tv6nfibqmmtp7pl2s2aww6gxlc6hbsnw,bafy2bzacecrx3fnuoukr5z3lxwyixxdn4lhm5iwlyfxxnksvrli5l6crnk3ly,bafy2bzacearmqayjayn742kbgve7z57a2q36spnxnmntgy7mi27swkwm34urq,bafy2bzaceb27bs5kv7gl2sarv7m2qpgkyn7hvy2nh4n5my73tlivuu7vz4rpe,bafy2bzaced4wvfvdhmhsqkdqngz4boolhwavi7p6du3mnuczmhmzjwqy3r2ti,bafy2bzacecisgkx5utbvzl67uiteg6mifytt7lkkjld72jiigpswcfxaejpga}", "nullRounds": "0", "took": 4.072557004}')])])])])}),[],!1,null,null,null);e.default=n.exports}}]);