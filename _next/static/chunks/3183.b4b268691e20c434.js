"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3183],{43183:function(t,e,r){r.r(e),r.d(e,{EditionDrop:function(){return d}});var a=r(37498),i=r(125),n=r(2593);class s{constructor(t){(0,a._)(this,"events",void 0),this.events=t}async getAllClaimerAddresses(t){let e=(await this.events.getEvents("TokensClaimed")).filter(e=>!!(e.data&&n.O$.isBigNumber(e.data.tokenId))&&e.data.tokenId.eq(t));return Array.from(new Set(e.filter(t=>"string"==typeof t.data?.claimer).map(t=>t.data.claimer)))}}var c=r(22815),o=r(51083),h=r(9279);r(13550),r(2162),r(64063),r(77191),r(71770),r(54098);class d extends c.S{constructor(t,e,r){var n;let c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},h=arguments.length>4?arguments[4]:void 0,p=arguments.length>5?arguments[5]:void 0,l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new i.d6(t,e,h,c,r);super(l,r,p),n=this,(0,a._)(this,"abi",void 0),(0,a._)(this,"sales",void 0),(0,a._)(this,"platformFees",void 0),(0,a._)(this,"encoder",void 0),(0,a._)(this,"estimator",void 0),(0,a._)(this,"events",void 0),(0,a._)(this,"metadata",void 0),(0,a._)(this,"app",void 0),(0,a._)(this,"roles",void 0),(0,a._)(this,"royalties",void 0),(0,a._)(this,"claimConditions",void 0),(0,a._)(this,"checkout",void 0),(0,a._)(this,"history",void 0),(0,a._)(this,"interceptor",void 0),(0,a._)(this,"owner",void 0),(0,a._)(this,"createBatch",(0,i.dd)(async(t,e)=>this.erc1155.lazyMint.prepare(t,e))),(0,a._)(this,"claimTo",(0,i.dd)(async function(t,e,r){let a=!(arguments.length>3)||void 0===arguments[3]||arguments[3];return n.erc1155.claimTo.prepare(t,e,r,{checkERC20Allowance:a})})),(0,a._)(this,"claim",(0,i.dd)(async function(t,e){let r=!(arguments.length>2)||void 0===arguments[2]||arguments[2],a=await n.contractWrapper.getSignerAddress();return n.claimTo.prepare(a,t,e,r)})),(0,a._)(this,"burnTokens",(0,i.dd)(async(t,e)=>this.erc1155.burn.prepare(t,e))),this.abi=i.e.parse(h),this.metadata=new i.ag(this.contractWrapper,i.dp,this.storage),this.app=new i.a$(this.contractWrapper,this.metadata,this.storage),this.roles=new i.ah(this.contractWrapper,d.contractRoles),this.royalties=new i.ai(this.contractWrapper,this.metadata),this.sales=new i.aj(this.contractWrapper),this.claimConditions=new i.am(this.contractWrapper,this.metadata,this.storage),this.events=new i.aQ(this.contractWrapper),this.history=new s(this.events),this.encoder=new i.af(this.contractWrapper),this.estimator=new i.aP(this.contractWrapper),this.platformFees=new i.aS(this.contractWrapper),this.interceptor=new i.aR(this.contractWrapper),this.checkout=new o.a(this.contractWrapper),this.owner=new i.aU(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t){return this.erc1155.getOwned(t)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){let t=await this.contractWrapper.readContract.hasRole((0,i.bJ)("transfer"),h.d);return!t}async getClaimTransaction(t,e,r){let a=!(arguments.length>3)||void 0===arguments[3]||arguments[3];return this.erc1155.getClaimTransaction(t,e,r,{checkERC20Allowance:a})}async prepare(t,e,r){return i.aV.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:e,overrides:r})}async call(t,e,r){return this.contractWrapper.call(t,e,r)}}(0,a._)(d,"contractRoles",i.dq)},22815:function(t,e,r){r.d(e,{S:function(){return n}});var a=r(37498),i=r(125);class n{get chainId(){return this._chainId}constructor(t,e,r){var n=this;(0,a._)(this,"contractWrapper",void 0),(0,a._)(this,"storage",void 0),(0,a._)(this,"erc1155",void 0),(0,a._)(this,"_chainId",void 0),(0,a._)(this,"transfer",(0,i.dd)(async function(t,e,r){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0];return n.erc1155.transfer.prepare(t,e,r,a)})),(0,a._)(this,"setApprovalForAll",(0,i.dd)(async(t,e)=>this.erc1155.setApprovalForAll.prepare(t,e))),(0,a._)(this,"airdrop",(0,i.dd)(async function(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0];return n.erc1155.airdrop.prepare(t,e,r)})),this.contractWrapper=t,this.storage=e,this.erc1155=new i.aK(this.contractWrapper,this.storage,r),this._chainId=r}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async get(t){return this.erc1155.get(t)}async totalSupply(t){return this.erc1155.totalSupply(t)}async balanceOf(t,e){return this.erc1155.balanceOf(t,e)}async balance(t){return this.erc1155.balance(t)}async isApproved(t,e){return this.erc1155.isApproved(t,e)}}},51083:function(t,e,r){r.d(e,{a:function(){return p}});var a=r(37498),i=r(125),n=r(38776);let s="https://paper.xyz/api/2022-08-12/platform/thirdweb",c={[i.cA.Mainnet]:"Ethereum",[i.cA.Goerli]:"Goerli",[i.cA.Polygon]:"Polygon",[i.cA.Mumbai]:"Mumbai",[i.cA.Avalanche]:"Avalanche"};async function o(t,e){let r=((0,n.Z)(e in c,`chainId not supported by paper: ${e}`),c[e]),a=await fetch(`${s}/register-contract?contractAddress=${t}&chain=${r}`),i=await a.json();return(0,n.Z)(i.result.id,"Contract is not registered with paper"),i.result.id}let h={expiresInMinutes:15,feeBearer:"BUYER",sendEmailOnSuccess:!0,redirectAfterPayment:!1};async function d(t,e){let r=await fetch(`${s}/checkout-link-intent`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contractId:t,...h,...e,metadata:{...e.metadata,via_platform:"thirdweb"},hideNativeMint:!0,hidePaperWallet:!!e.walletAddress,hideExternalWallet:!0,hidePayWithCrypto:!0,usePaperKey:!1})}),a=await r.json();return(0,n.Z)(a.checkoutLinkIntentUrl,"Failed to create checkout link intent"),a.checkoutLinkIntentUrl}class p{constructor(t){(0,a._)(this,"contractWrapper",void 0),this.contractWrapper=t}async getCheckoutId(){return o(this.contractWrapper.readContract.address,await this.contractWrapper.getChainID())}async isEnabled(){try{return!!await this.getCheckoutId()}catch(t){return!1}}async createLinkIntent(t){return await d(await this.getCheckoutId(),t)}}}}]);