"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1210],{55748:function(t,a,r){r.d(a,{S:function(){return n}});var e=r(37498),s=r(125);class n{get chainId(){return this._chainId}constructor(t,a,r){(0,e._)(this,"contractWrapper",void 0),(0,e._)(this,"storage",void 0),(0,e._)(this,"erc20",void 0),(0,e._)(this,"_chainId",void 0),(0,e._)(this,"transfer",(0,s.dd)(async(t,a)=>this.erc20.transfer.prepare(t,a))),(0,e._)(this,"transferFrom",(0,s.dd)(async(t,a,r)=>this.erc20.transferFrom.prepare(t,a,r))),(0,e._)(this,"setAllowance",(0,s.dd)(async(t,a)=>this.erc20.setAllowance.prepare(t,a))),(0,e._)(this,"transferBatch",(0,s.dd)(async t=>this.erc20.transferBatch.prepare(t))),this.contractWrapper=t,this.storage=a,this.erc20=new s.at(this.contractWrapper,this.storage,r),this._chainId=r}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async get(){return this.erc20.get()}async balance(){return await this.erc20.balance()}async balanceOf(t){return this.erc20.balanceOf(t)}async totalSupply(){return await this.erc20.totalSupply()}async allowance(t){return await this.erc20.allowance(t)}async allowanceOf(t,a){return await this.erc20.allowanceOf(t,a)}}},51210:function(t,a,r){r.r(a),r.d(a,{TokenDrop:function(){return c}});var e=r(37498),s=r(125),n=r(55748),i=r(9279);r(13550),r(2162),r(64063),r(77191),r(71770),r(54098);class c extends n.S{constructor(t,a,r){var n;let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4?arguments[4]:void 0,h=arguments.length>5?arguments[5]:void 0,p=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new s.d6(t,a,o,i,r);super(p,r,h),n=this,(0,e._)(this,"abi",void 0),(0,e._)(this,"metadata",void 0),(0,e._)(this,"app",void 0),(0,e._)(this,"roles",void 0),(0,e._)(this,"encoder",void 0),(0,e._)(this,"estimator",void 0),(0,e._)(this,"sales",void 0),(0,e._)(this,"platformFees",void 0),(0,e._)(this,"events",void 0),(0,e._)(this,"claimConditions",void 0),(0,e._)(this,"interceptor",void 0),(0,e._)(this,"claim",(0,s.dd)(async function(t){let a=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return n.claimTo.prepare(await n.contractWrapper.getSignerAddress(),t,a)})),(0,e._)(this,"claimTo",(0,s.dd)(async function(t,a){let r=!(arguments.length>2)||void 0===arguments[2]||arguments[2];return n.erc20.claimTo.prepare(t,a,{checkERC20Allowance:r})})),(0,e._)(this,"delegateTo",(0,s.dd)(async t=>s.aV.fromContractWrapper({contractWrapper:this.contractWrapper,method:"delegate",args:[await (0,s.cs)(t)]}))),(0,e._)(this,"burnTokens",(0,s.dd)(async t=>this.erc20.burn.prepare(t))),(0,e._)(this,"burnFrom",(0,s.dd)(async(t,a)=>this.erc20.burnFrom.prepare(t,a))),this.abi=s.e.parse(o||[]),this.metadata=new s.ag(this.contractWrapper,s.dI,this.storage),this.app=new s.a$(this.contractWrapper,this.metadata,this.storage),this.roles=new s.ah(this.contractWrapper,c.contractRoles),this.encoder=new s.af(this.contractWrapper),this.estimator=new s.aP(this.contractWrapper),this.events=new s.aQ(this.contractWrapper),this.sales=new s.aj(this.contractWrapper),this.platformFees=new s.aS(this.contractWrapper),this.interceptor=new s.aR(this.contractWrapper),this.claimConditions=new s.al(this.contractWrapper,this.metadata,this.storage)}async getVoteBalance(){return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress())}async getVoteBalanceOf(t){return await this.erc20.getValue(await this.contractWrapper.readContract.getVotes(await (0,s.cs)(t)))}async getDelegation(){return await this.getDelegationOf(await this.contractWrapper.getSignerAddress())}async getDelegationOf(t){return await this.contractWrapper.readContract.delegates(await (0,s.cs)(t))}async isTransferRestricted(){let t=await this.contractWrapper.readContract.hasRole((0,s.bJ)("transfer"),i.d);return!t}async prepare(t,a,r){return s.aV.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:a,overrides:r})}async call(t,a,r){return this.contractWrapper.call(t,a,r)}}(0,e._)(c,"contractRoles",s.dJ)}}]);