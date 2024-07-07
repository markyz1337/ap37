// Garden Gnome Software - Skin
// Pano2VR 6.1.13/18080
// Filename: 1bbackuup.ggsk
// Generated 2024-07-07T18:23:41

function pano2vrSkin(player,base) {
	player.addVariable('opt_zoom', 2, true);
	player.addVariable('opt_autorotate', 2, true);
	player.addVariable('opt_gyro', 2, true);
	player.addVariable('opt_fullscreen', 2, true);
	player.addVariable('opt_loader', 2, true);
	player.addVariable('opt_loader_mulires', 2, true);
	player.addVariable('vis_info_popup', 2, false);
	player.addVariable('vis_timer', 2, true);
	player.addVariable('maps', 2, false);
	player.addVariable('POLIGON', 2, false);
	player.addVariable('vis_info_popup_1', 2, false);
	player.addVariable('poly_target', 0, "");
	player.addVariable('poly_target2', 0, "");
	player.addVariable('stertscreen_pc', 2, false);
	player.addVariable('startscreen_ios', 2, false);
	player.addVariable('var_compass', 2, false);
	player.addVariable('var_compass_1', 2, false);
	player.addVariable('vis_loader', 2, true);
	player.addVariable('var_compass_2', 2, false);
	player.addVariable('detalii', 2, false);
	player.addVariable('vis_testing', 2, false);
	player.addVariable('vis_close', 2, false);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._rectangle_1);
		el=me._auto_rotate=document.createElement('div');
		el.ggId="Auto Rotate";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._auto_rotate.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._auto_rotate.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._dreapta=document.createElement('div');
		el.ggId="dreapta";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 75%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 120px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dreapta.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dreapta.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getOS() == 1)) || 
				((player.getOS() == 2)) || 
				((player.getOS() == 3)) || 
				((player.getOS() == 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._dreapta.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._dreapta.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._dreapta.style[domTransition]='';
				if (me._dreapta.ggCurrentLogicStateVisible == 0) {
					me._dreapta.style.visibility=(Number(me._dreapta.style.opacity)>0||!me._dreapta.style.opacity)?'inherit':'hidden';
					me._dreapta.ggVisible=true;
				}
				else {
					me._dreapta.style.visibility="hidden";
					me._dreapta.ggVisible=false;
				}
			}
		}
		me._dreapta.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_74=document.createElement('div');
		el.ggId="Rectangle 7";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_74.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_74.onmouseover=function (e) {
			me.elementMouseOver['rectangle_74']=true;
		}
		me._rectangle_74.onmouseout=function (e) {
			me.elementMouseOver['rectangle_74']=false;
		}
		me._rectangle_74.ontouchend=function (e) {
			me.elementMouseOver['rectangle_74']=false;
		}
		me._rectangle_74.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._dreapta.appendChild(me._rectangle_74);
		el=me._rectangle_73=document.createElement('div');
		el.ggId="Rectangle 7";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_73.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_73.onmouseover=function (e) {
			me.elementMouseOver['rectangle_73']=true;
		}
		me._rectangle_73.onmouseout=function (e) {
			me.elementMouseOver['rectangle_73']=false;
		}
		me._rectangle_73.ontouchend=function (e) {
			me.elementMouseOver['rectangle_73']=false;
		}
		me._rectangle_73.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._dreapta.appendChild(me._rectangle_73);
		el=me._rectangle_72=document.createElement('div');
		el.ggId="Rectangle 7";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 60px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_72.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_72.onmouseover=function (e) {
			me.elementMouseOver['rectangle_72']=true;
		}
		me._rectangle_72.onmouseout=function (e) {
			me.elementMouseOver['rectangle_72']=false;
		}
		me._rectangle_72.ontouchend=function (e) {
			me.elementMouseOver['rectangle_72']=false;
		}
		me._rectangle_72.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._dreapta.appendChild(me._rectangle_72);
		me._auto_rotate.appendChild(me._dreapta);
		el=me._stanga_pc=document.createElement('div');
		el.ggId="stanga pc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 75%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 120px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._stanga_pc.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._stanga_pc.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getOS() == 1)) || 
				((player.getOS() == 2)) || 
				((player.getOS() == 3)) || 
				((player.getOS() == 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._stanga_pc.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._stanga_pc.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._stanga_pc.style[domTransition]='';
				if (me._stanga_pc.ggCurrentLogicStateVisible == 0) {
					me._stanga_pc.style.visibility=(Number(me._stanga_pc.style.opacity)>0||!me._stanga_pc.style.opacity)?'inherit':'hidden';
					me._stanga_pc.ggVisible=true;
				}
				else {
					me._stanga_pc.style.visibility="hidden";
					me._stanga_pc.ggVisible=false;
				}
			}
		}
		me._stanga_pc.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_71=document.createElement('div');
		el.ggId="Rectangle 7";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 60px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_71.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_71.onmouseover=function (e) {
			me.elementMouseOver['rectangle_71']=true;
		}
		me._rectangle_71.onmouseout=function (e) {
			me.elementMouseOver['rectangle_71']=false;
		}
		me._rectangle_71.ontouchend=function (e) {
			me.elementMouseOver['rectangle_71']=false;
		}
		me._rectangle_71.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._stanga_pc.appendChild(me._rectangle_71);
		el=me._rectangle_70=document.createElement('div');
		el.ggId="Rectangle 7";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_70.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_70.onmouseover=function (e) {
			me.elementMouseOver['rectangle_70']=true;
		}
		me._rectangle_70.onmouseout=function (e) {
			me.elementMouseOver['rectangle_70']=false;
		}
		me._rectangle_70.ontouchend=function (e) {
			me.elementMouseOver['rectangle_70']=false;
		}
		me._rectangle_70.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._stanga_pc.appendChild(me._rectangle_70);
		el=me._mere0=document.createElement('div');
		el.ggId="mere";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mere0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mere0.onmouseover=function (e) {
			me.elementMouseOver['mere0']=true;
		}
		me._mere0.onmouseout=function (e) {
			me.elementMouseOver['mere0']=false;
		}
		me._mere0.ontouchend=function (e) {
			me.elementMouseOver['mere0']=false;
		}
		me._mere0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._stanga_pc.appendChild(me._mere0);
		me._auto_rotate.appendChild(me._stanga_pc);
		el=me._dreapta_telefon=document.createElement('div');
		el.ggId="dreapta telefon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 85%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dreapta_telefon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dreapta_telefon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._dreapta_telefon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._dreapta_telefon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._dreapta_telefon.style[domTransition]='';
				if (me._dreapta_telefon.ggCurrentLogicStateVisible == 0) {
					me._dreapta_telefon.style.visibility=(Number(me._dreapta_telefon.style.opacity)>0||!me._dreapta_telefon.style.opacity)?'inherit':'hidden';
					me._dreapta_telefon.ggVisible=true;
				}
				else {
					me._dreapta_telefon.style.visibility="hidden";
					me._dreapta_telefon.ggVisible=false;
				}
			}
		}
		me._dreapta_telefon.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_7=document.createElement('div');
		el.ggId="Rectangle 7";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_7.onmouseout=function (e) {
			me.elementMouseDown['rectangle_7']=false;
		}
		me._rectangle_7.onmousedown=function (e) {
			me.elementMouseDown['rectangle_7']=true;
		}
		me._rectangle_7.onmouseup=function (e) {
			me.elementMouseDown['rectangle_7']=false;
		}
		me._rectangle_7.ontouchend=function (e) {
			me.elementMouseDown['rectangle_7']=false;
		}
		me._rectangle_7.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._dreapta_telefon.appendChild(me._rectangle_7);
		me._auto_rotate.appendChild(me._dreapta_telefon);
		el=me._stanga_telefon=document.createElement('div');
		el.ggId="stanga telefon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 85%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._stanga_telefon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._stanga_telefon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._stanga_telefon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._stanga_telefon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._stanga_telefon.style[domTransition]='';
				if (me._stanga_telefon.ggCurrentLogicStateVisible == 0) {
					me._stanga_telefon.style.visibility=(Number(me._stanga_telefon.style.opacity)>0||!me._stanga_telefon.style.opacity)?'inherit':'hidden';
					me._stanga_telefon.ggVisible=true;
				}
				else {
					me._stanga_telefon.style.visibility="hidden";
					me._stanga_telefon.ggVisible=false;
				}
			}
		}
		me._stanga_telefon.ggUpdatePosition=function (useTransition) {
		}
		el=me._mere=document.createElement('div');
		el.ggId="mere";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mere.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mere.onmouseout=function (e) {
			me.elementMouseDown['mere']=false;
		}
		me._mere.onmousedown=function (e) {
			me.elementMouseDown['mere']=true;
		}
		me._mere.onmouseup=function (e) {
			me.elementMouseDown['mere']=false;
		}
		me._mere.ontouchend=function (e) {
			me.elementMouseDown['mere']=false;
		}
		me._mere.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._stanga_telefon.appendChild(me._mere);
		me._auto_rotate.appendChild(me._stanga_telefon);
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=10000;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 580px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 710px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._timer_1.ggDeactivate=function () {
			player.startAutorotate("0.008");
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me._auto_rotate.appendChild(me._timer_1);
		me.divSkin.appendChild(me._auto_rotate);
		el=me.__3d_mouse=document.createElement('div');
		el.ggId="3D Mouse";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__3d_mouse.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__3d_mouse.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._float_cursor=document.createElement('div');
		el.ggId="float_cursor";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 100px;';
		hs+='position : absolute;';
		hs+='top : 100px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		hs+='transform-style: preserve-3d; cursor: none !important;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._float_cursor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._float_cursor.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.hotspot.title == "hide")) && 
				((player.getOS() == 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._float_cursor.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._float_cursor.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._float_cursor.style[domTransition]='';
				if (me._float_cursor.ggCurrentLogicStateVisible == 0) {
					me._float_cursor.style.visibility=(Number(me._float_cursor.style.opacity)>0||!me._float_cursor.style.opacity)?'inherit':'hidden';
					me._float_cursor.ggVisible=true;
				}
				else {
					me._float_cursor.style.visibility="hidden";
					me._float_cursor.ggVisible=false;
				}
			}
		}
		me._float_cursor.ggUpdatePosition=function (useTransition) {
		}
		el=me._ring_white=document.createElement('div');
		el.ggId="ring_white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 8px solid rgba(225,225,225,0.607843);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : -25px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		hs+='transform:translate3d(0px,0px,0px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ring_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ring_white.ggUpdatePosition=function (useTransition) {
		}
		me._float_cursor.appendChild(me._ring_white);
		me.__3d_mouse.appendChild(me._float_cursor);
		el=me._hide_system_cursor=document.createElement('div');
		el.ggId="hide_system_cursor";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='cursor: none !important; pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hide_system_cursor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hide_system_cursor.ggUpdatePosition=function (useTransition) {
		}
		me.__3d_mouse.appendChild(me._hide_system_cursor);
		el=me.__code=document.createElement('div');
		els=me.__code__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 37px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 68px;';
		hs+='height: 39px;';
		hs+='pointer-events: none;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
me._float_cursor.ggMousePos={ x: -1, y:0 };
me._float_cursor.ggUpdateCursor=function() {
	let el=me._float_cursor;
	let pt=player.getPositionAngles(el.ggMousePos.x,el.ggMousePos.y);
	let style=el.style;
	if ((pt.tilt>=0) || (el.ggMousePos.x<0)) {
		style.visibility="hidden";
	} else {
		let vs=player.getViewerSize();
		let dist=200; // size of the graphic
		let x=-dist*Math.tan((pt.tilt-90.0) * Math.PI/180.0);
		let hs="";
		let cp=player.getCurrentPerspective();
		hs += 'translate3d(0px,0px,-1000px) perspective(' + cp + 'px) ';
		hs += 'translate3d(0px,0px,' + cp + 'px) '; // move camera to the center
		hs += 'rotateX(' + (90.0+player.getTilt()).toFixed(10) + 'deg) ';
		hs += 'rotateZ(' + (player.getPan()+pt.pan).toFixed(10)  + 'deg) ';
		hs += 'translate3d(' + 0 + 'px,' + x + 'px,' + (-dist) + 'px) ';
		style.transform=hs;
		style.transformOrigin = '0% 0%';
		style.left = vs.width / 2 + "px";
		style.top = vs.height / 2 + "px";
		style.visibility=el.ggVisible?'inherit':'hidden';
	}
    if (me._hide_system_cursor) me._hide_system_cursor.style.visibility=style.visibility=='hidden'?'hidden':'inherit';
}
me.divSkin.addEventListener('mousemove', e => {
	let el=me._float_cursor;
	let rect = me.divSkin.getBoundingClientRect();
	el.ggMousePos.x=e.clientX - rect.left;
	el.ggMousePos.y=e.clientY - rect.top;
	el.ggUpdateCursor();
});
me.player.on("positionchanged", () => {
	me._float_cursor.ggUpdateCursor();
});
		el.appendChild(els);
		me.__code.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__code.ggUpdatePosition=function (useTransition) {
		}
		me.__3d_mouse.appendChild(me.__code);
		me.divSkin.appendChild(me.__3d_mouse);
		el=me._poligon_open_ferestre_usi=document.createElement('div');
		el.ggId="Poligon open (ferestre usi)";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._poligon_open_ferestre_usi.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._poligon_open_ferestre_usi.onmouseover=function (e) {
			me.elementMouseOver['poligon_open_ferestre_usi']=true;
		}
		me._poligon_open_ferestre_usi.onmouseout=function (e) {
			me.elementMouseOver['poligon_open_ferestre_usi']=false;
		}
		me._poligon_open_ferestre_usi.ontouchend=function (e) {
			me.elementMouseOver['poligon_open_ferestre_usi']=false;
		}
		me._poligon_open_ferestre_usi.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._poligon_enter_ferestre_usi=document.createElement('div');
		el.ggId="Poligon Enter (ferestre usi)";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._poligon_enter_ferestre_usi.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._poligon_enter_ferestre_usi.onclick=function (e) {
			player.openNext(player.hotspot.url,"$(fwd)");
		}
		me._poligon_enter_ferestre_usi.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._poligon_open_ferestre_usi.appendChild(me._poligon_enter_ferestre_usi);
		me.divSkin.appendChild(me._poligon_open_ferestre_usi);
		el=me._poligon_info_dialog=document.createElement('div');
		el.ggId="Poligon Info Dialog";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._poligon_info_dialog.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._poligon_info_dialog.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._poligoane=document.createElement('div');
		el.ggId="Poligoane";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._poligoane.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._poligoane.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('POLIGON') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('POLIGON') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._poligoane.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._poligoane.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._poligoane.style[domTransition]='';
				if (me._poligoane.ggCurrentLogicStateVisible == 0) {
					me._poligoane.style.visibility=(Number(me._poligoane.style.opacity)>0||!me._poligoane.style.opacity)?'inherit':'hidden';
					me._poligoane.ggVisible=true;
				}
				else if (me._poligoane.ggCurrentLogicStateVisible == 1) {
					me._poligoane.style.visibility="hidden";
					me._poligoane.ggVisible=false;
				}
				else {
					me._poligoane.style.visibility="hidden";
					me._poligoane.ggVisible=false;
				}
			}
		}
		me._poligoane.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._rectangle_50=document.createElement('div');
		el.ggId="Rectangle 5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(0,0,0,0.615686);';
		hs+='border : 1px solid rgba(0,0,0,0.568627);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_50.onclick=function (e) {
			player.setVariableValue('POLIGON', false);
		}
		me._rectangle_50.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._poligoane.appendChild(me._rectangle_50);
		el=me._rectangle_30=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : rgba(129,129,129,0.521569);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_30.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getOS() == 5)) || 
				((player.getOS() == 4))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_30.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_30.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_30.style[domTransition]='width 0s, height 0s';
				if (me._rectangle_30.ggCurrentLogicStateSize == 0) {
					me._rectangle_30.style.width='80%';
					me._rectangle_30.style.height='40%';
					skin.updateSize(me._rectangle_30);
				}
				else {
					me._rectangle_30.style.width='50%';
					me._rectangle_30.style.height='50%';
					skin.updateSize(me._rectangle_30);
				}
			}
		}
		me._rectangle_30.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._titlu0=document.createElement('div');
		els=me._titlu0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Titlu";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 17.71%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 24px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._titlu0.ggUpdateText=function() {
			var hs=player.getVariableValue('poly_target2');
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._titlu0.ggUpdateText();
		player.addListener('timer', function() {
			me._titlu0.ggUpdateText();
		});
		el.appendChild(els);
		me._titlu0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._titlu0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._rectangle_30.appendChild(me._titlu0);
		el=me._descriere0=document.createElement('div');
		els=me._descriere0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Descriere";
		el.ggDx=0;
		el.ggDy=12;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text info2";
		el.ggType='text';
		hs ='';
		hs+='height : 71.4286%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 94%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 24px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._descriere0.ggUpdateText=function() {
			var hs=player.getVariableValue('poly_target');
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._descriere0.ggUpdateText();
		player.addListener('timer', function() {
			me._descriere0.ggUpdateText();
		});
		el.appendChild(els);
		me._descriere0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._descriere0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_30.appendChild(me._descriere0);
		el=me._ht_info_close0=document.createElement('div');
		els=me._ht_info_close0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzMiAzMiIgaWQ9IkxheWVyXzEiIHk9IjBweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIzMn'+
			'B4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFj'+
			'LTAuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI0LDAsMS42OUwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjctMC40NjcsMS4yMjYsMCwxLjY5MmMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Lj'+
			'g4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU2LDI5LjcyLDEyLjA0MiwyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTg5LTAuMDAxLTUuMTctMC45ODUtNy4xNDYtMi45NjFTNS44OTUsMTguNTksNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1'+
			'OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc2LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9IiNmZmZmZmYiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MiwxNmwzLjQ0LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjUsMC0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MSwwLjAwMUwxNiwxNC'+
			'4zMDhsLTMuNDQxLTMuNDQxYy0wLjQ2Ny0wLjQ2Ny0xLjIyNC0wLjQ2Ny0xLjY5MSwwLjAwMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDMuNDQtMy40NGwzLjQzOSwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNSwwLjQ2OCwxLjY5MSwwLjAwMUMyMS41OTksMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4'+
			'OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTUsMCwxNy42NzhjNC44ODEsNC44OCwxMi43OTYsNC44OCwxNy42NzgsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4NC01LjE3LDIuOTYtNy4xNDdDMTAuODMsNi44NzgsMTMuNDA5LDUuODk0LDE2LDUuODk0YzIuNTkxLDAuMDAxLDUuMT'+
			'csMC45ODQsNy4xNDcsMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjk3NiwxLjk3NywyLjk1Nyw0LjU1NiwyLjk2LDcuMTQ3Yy0wLjAwMSwyLjU5MS0wLjk4NSw1LjE2OS0yLjk2LDcuMTQ4QzIxLjE2OSwyNS4xMjIsMTguNTkxLDI2LjEwNiwxNiwyNi4xMDZ6IiBmaWxsLW9wYWNpdHk9IjEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_close0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_close0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzMiAzMiIgaWQ9IkxheWVyXzEiIHk9IjBweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIzMn'+
			'B4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjM0MzQzNDIiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYj'+
			'eDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MiwwLjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MWMtMC40NjgtMC40NjgtMS4yMjUtMC40NjctMS42OTMsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOT'+
			'A3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzhjNC44ODIsNC44ODEsMTIuNzk2LDQuODgxLDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTlDNi44NzgsMjEuMTcsNS44OTUsMTguNTkxLDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5'+
			'LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDhDMjEuMTcsMjUuMTIzLDE4LjU5MSwyNi4xMDcsMTYsMjYuMTA2eiIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSIjZmZmZmZmIi'+
			'BkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI2LDAuMDAxLTEuNjkzYy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MiwwLjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40NjcsMC40NjcsMS4yMjYsMC40'+
			'NjcsMS42OTIsMC4wMDFsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIxLjU5OCwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MWMtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzgmI3hkOyYjeGE7JiN4OTsmI3g5O2M0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45OD'+
			'QtNy4xNDYtMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O0M2Ljg3OCwyMS4xNyw1Ljg5NSwxOC41OTEsNS44OTQsMTZjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O0MyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6IiBmaWxsLW9wYWNpdHk9IjEiLz4K'+
			'IDwvZz4KPC9zdmc+Cg==';
		me._ht_info_close0__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_info_close0.onclick=function (e) {
			player.setVariableValue('POLIGON', false);
		}
		me._ht_info_close0.onmouseover=function (e) {
			me._ht_info_close0__img.style.visibility='hidden';
			me._ht_info_close0__imgo.style.visibility='inherit';
		}
		me._ht_info_close0.onmouseout=function (e) {
			me._ht_info_close0__img.style.visibility='inherit';
			me._ht_info_close0__imgo.style.visibility='hidden';
		}
		me._ht_info_close0.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_30.appendChild(me._ht_info_close0);
		me._poligoane.appendChild(me._rectangle_30);
		me._poligon_info_dialog.appendChild(me._poligoane);
		el=me._poligon_info=document.createElement('div');
		el.ggId="Poligon Info";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._poligon_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._poligon_info.onclick=function (e) {
			player.setVariableValue('poly_target', player.hotspot.description);
			player.setVariableValue('poly_target2', player.hotspot.title);
			player.setVariableValue('POLIGON', true);
		}
		me._poligon_info.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._poligon_info_dialog.appendChild(me._poligon_info);
		me.divSkin.appendChild(me._poligon_info_dialog);
		el=me._google_maps=document.createElement('div');
		el.ggId="Google Maps";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._google_maps.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._google_maps.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('maps') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._google_maps.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._google_maps.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._google_maps.style[domTransition]='';
				if (me._google_maps.ggCurrentLogicStateVisible == 0) {
					me._google_maps.style.visibility=(Number(me._google_maps.style.opacity)>0||!me._google_maps.style.opacity)?'inherit':'hidden';
					me._google_maps.ggVisible=true;
				}
				else {
					me._google_maps.style.visibility="hidden";
					me._google_maps.ggVisible=false;
				}
			}
		}
		me._google_maps.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(0,0,0,0.627451);';
		hs+='border : 1px solid rgba(0,0,0,0.627451);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4.onclick=function (e) {
			player.setVariableValue('maps', false);
		}
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._google_maps.appendChild(me._rectangle_4);
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._iframe_3d=document.createElement('div');
		els=me._iframe_3d__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="iframe_3d";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 95%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,0);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="border-radius: 50px 15px 50px 15px;";
		els.setAttribute('style',hs);
		els.innerHTML="<ifrrame width=\"100%\" height=\"100%\" marginheight=\"0\" marginwidth=\"0\" frameborder=\"0\" style=\"float:left; margin-left:0px\" allowfullscreen=\"true\" webkitallowfullscreen=\"true\" mozallowfullscreen=\"true\" src=\"https:\/\/maps.google.com\/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=bucuresti+(Bucuresti)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed\"><a href=\"https:\/\/www.gps.ie\/\">gps vehicle tracker<\/a><\/iframe>";
		el.appendChild(els);
		me._iframe_3d.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._iframe_3d.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_1.appendChild(me._iframe_3d);
		el=me._info_popup_close=document.createElement('div');
		els=me._info_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiBpZD0iTGF5ZXJfMSIgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xMzUuMywzNTcuM2MtMjEuOS0yMS45LTU3LjUtMjEuOS03OS40LDBjLTIxLjksMjEuOS0yMS45LDU3LjUsMCw3OS40YzIxLjksMjEuOSw1Ny41LDIxLjksNzkuNCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTExMy40LDM3OS4yLTEzNS4zLDM1Ny4zeiBNLTE0NS44LDQxMi43YzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xMC45LDEwLjljLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0x'+
			'LjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTUuOCwxNS44bDE1LjctMTUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xbDExLjEsMTEuMWMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTUuNywxNS43TC0xNDUuOCw0MTIuN3oiLz4KIDwvZz4KID'+
			'xnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2MS42LDM5Ni45bDE1LjgsMTUuOGMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTAuOSwxMC45Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjRsLTE1LjgtMTUuOGwtMTUuNywxNS43Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNXMtMC45LTAuMS0xLjEtMC40bC0xMS4xLTExLjFjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDE1LjctMTUuN2wtMTUuOC0xNS44Yy0wLjMt'+
			'MC4zLTAuNC0wLjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTAuOS0xMC45YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuOCwxNS44bDE1LjctMTUuN2MwLjktMC45LDEuNy0wLjksMi40LTAuMWwxMS4xLDExLjFjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRMLTE2MS42LDM5Ni45eiIvPgogPC9nPgo8L3N2Zz4K';
		me._info_popup_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiBpZD0iTGF5ZXJfMSIgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xMzAuOSwzNTIuOWMtMjQuNC0yNC40LTYzLjgtMjQuNC04OC4yLDBjLTI0LjQsMjQuNC0yNC40LDYzLjgsMCw4OC4yYzI0LjQsMjQuNCw2My44LDI0LjQsODguMiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTEwNi41LDM3Ny4zLTEzMC45LDM1Mi45eiBNLTE0Mi41LDQxNC41YzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xMi4yLDEyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTE3LjUtMTcuNWwtMTcuNCwxNy40Yy0wLjQsMC40LTAuOCwwLjYtMS40'+
			'LDAuNmMtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTIuMy0xMi4zYy0wLjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40bC0xNy41LTE3LjVjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjRsMTIuMi0xMi4yYzEtMSwxLjgtMSwyLjctMC4xbDE3LjUsMTcuNWwxNy40LTE3LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLTEsMS44LTEsMi43LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTE3LjQsMTcuNEwtMTQyLjUsNDE0LjV6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMi'+
			'I+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjAuMSwzOTYuOWwxNy41LDE3LjVjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTEyLjIsMTIuMmMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjYsMC4xLTEsMC42LTEuNGwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAu'+
			'NC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40YzEtMSwxLjgtMSwyLjctMC4xbDEyLjMsMTIuM2MwLjgsMC44LDAuOCwxLjctMC4xLDIuN0wtMTYwLjEsMzk2Ljl6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._info_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="info_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_close.onclick=function (e) {
			player.setVariableValue('maps', false);
		}
		me._info_popup_close.onmouseover=function (e) {
			me._info_popup_close__img.style.visibility='hidden';
			me._info_popup_close__imgo.style.visibility='inherit';
		}
		me._info_popup_close.onmouseout=function (e) {
			me._info_popup_close__img.style.visibility='inherit';
			me._info_popup_close__imgo.style.visibility='hidden';
		}
		me._info_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._info_popup_close);
		me._google_maps.appendChild(me._container_1);
		me.divSkin.appendChild(me._google_maps);
		el=me._interface=document.createElement('div');
		el.ggId="Interface";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._interface.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._interface.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._interface_mobile=document.createElement('div');
		el.ggId="Interface Mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._interface_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._interface_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getOS() == 5)) || 
				((player.getOS() == 4))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._interface_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._interface_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._interface_mobile.style[domTransition]='';
				if (me._interface_mobile.ggCurrentLogicStateVisible == 0) {
					me._interface_mobile.style.visibility=(Number(me._interface_mobile.style.opacity)>0||!me._interface_mobile.style.opacity)?'inherit':'hidden';
					me._interface_mobile.ggVisible=true;
				}
				else {
					me._interface_mobile.style.visibility="hidden";
					me._interface_mobile.ggVisible=false;
				}
			}
		}
		me._interface_mobile.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._container_30=document.createElement('div');
		el.ggId="Container 3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 3%;';
		hs+='height : 58px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : calc(100%  -  40px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_30.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		el=me._compass0=document.createElement('div');
		el.ggId="Compass";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.85 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 54px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 54px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._compass0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._compass0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['compass0'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._compass0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._compass0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._compass0.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me._compass0.ggCurrentLogicStateScaling == 0) {
					me._compass0.ggParameter.sx = 0.9;
					me._compass0.ggParameter.sy = 0.9;
					me._compass0.style[domTransform]=parameterToTransform(me._compass0.ggParameter);
				}
				else {
					me._compass0.ggParameter.sx = 0.85;
					me._compass0.ggParameter.sy = 0.85;
					me._compass0.style[domTransform]=parameterToTransform(me._compass0.ggParameter);
				}
			}
		}
		me._compass0.onclick=function (e) {
			player.moveToDefaultViewEx(1.5,0);
			player.setUseGyro(!(player.getUseGyro()));
		}
		me._compass0.onmouseover=function (e) {
			me.elementMouseOver['compass0']=true;
			me._compass0.logicBlock_scaling();
		}
		me._compass0.onmouseout=function (e) {
			me.elementMouseOver['compass0']=false;
			me._compass0.logicBlock_scaling();
		}
		me._compass0.ontouchend=function (e) {
			me.elementMouseOver['compass0']=false;
			me._compass0.logicBlock_scaling();
		}
		me._compass0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._container_50=document.createElement('div');
		el.ggId="Container 5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_50.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._compassring0=document.createElement('div');
		el.ggId="CompassRing";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid rgba(132,132,132,0.686275);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 0px 0px 13px 2px rgba(0,0,0,0.8);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._compassring0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._compassring0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_50.appendChild(me._compassring0);
		el=me._beamdot0=document.createElement('div');
		el.ggId="BeamDot";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : rgba(202,202,202,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='clip-path: polygon(50% 50%, 0% 100%, 50% 100%, 100% 100%, 50% 50%, 100% 100%);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._beamdot0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._beamdot0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_50.appendChild(me._beamdot0);
		el=me._rectangle_60=document.createElement('div');
		el.ggId="Rectangle 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : rgba(255,255,255,0.941176);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_60.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_60.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_50.appendChild(me._rectangle_60);
		me._compass0.appendChild(me._container_50);
		me._container_30.appendChild(me._compass0);
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 40px;';
		hs+='border-radius : 40px;';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 55px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 230px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 0px 0px 13px 2px rgba(0,0,0,0.8);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._container_61=document.createElement('div');
		el.ggId="Container 6";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 36px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 58px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_61.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_61.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._nodeimage_11=document.createElement('div');
		els=me._nodeimage_11__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + 'images/nodeimage_11.png');
		el.ggNodeId='node6';
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;border-radius: 50px; box-shadow: 0px 0px 11px 0px rgba(255,255,255,0.8);;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='opacity : 0.69999;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._nodeimage_11.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_11.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['nodeimage_11'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeimage_11.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeimage_11.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeimage_11.style[domTransition]='' + cssPrefix + 'transform 1250ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._nodeimage_11.ggCurrentLogicStateScaling == 0) {
					me._nodeimage_11.ggParameter.sx = 1.05;
					me._nodeimage_11.ggParameter.sy = 1.05;
					me._nodeimage_11.style[domTransform]=parameterToTransform(me._nodeimage_11.ggParameter);
				}
				else {
					me._nodeimage_11.ggParameter.sx = 1;
					me._nodeimage_11.ggParameter.sy = 1;
					me._nodeimage_11.style[domTransform]=parameterToTransform(me._nodeimage_11.ggParameter);
				}
			}
		}
		me._nodeimage_11.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['nodeimage_11'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._nodeimage_11.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._nodeimage_11.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._nodeimage_11.style[domTransition]='' + cssPrefix + 'transform 1250ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._nodeimage_11.ggCurrentLogicStateAlpha == 0) {
					me._nodeimage_11.style.visibility=me._nodeimage_11.ggVisible?'inherit':'hidden';
					me._nodeimage_11.style.opacity=1;
				}
				else {
					me._nodeimage_11.style.visibility=me._nodeimage_11.ggVisible?'inherit':'hidden';
					me._nodeimage_11.style.opacity=0.69999;
				}
			}
		}
		me._nodeimage_11.onclick=function (e) {
			player.openNext("{node6}","");
		}
		me._nodeimage_11.onmouseover=function (e) {
			me.elementMouseOver['nodeimage_11']=true;
			me._nodeimage_11.logicBlock_scaling();
			me._nodeimage_11.logicBlock_alpha();
		}
		me._nodeimage_11.onmouseout=function (e) {
			me.elementMouseOver['nodeimage_11']=false;
			me._nodeimage_11.logicBlock_scaling();
			me._nodeimage_11.logicBlock_alpha();
		}
		me._nodeimage_11.ontouchend=function (e) {
			me.elementMouseOver['nodeimage_11']=false;
			me._nodeimage_11.logicBlock_scaling();
			me._nodeimage_11.logicBlock_alpha();
		}
		me._nodeimage_11.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_61.appendChild(me._nodeimage_11);
		me._rectangle_2.appendChild(me._container_61);
		el=me._container_60=document.createElement('div');
		el.ggId="Container 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 36px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 58px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_60.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_60.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._nodeimage_10=document.createElement('div');
		els=me._nodeimage_10__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + 'images/nodeimage_10.png');
		el.ggNodeId='node8';
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;border-radius: 30px; box-shadow: 0px 0px 11px 0px rgba(255,255,255,0.8);;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='opacity : 0.69999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._nodeimage_10.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_10.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['nodeimage_10'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeimage_10.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeimage_10.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeimage_10.style[domTransition]='' + cssPrefix + 'transform 1250ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._nodeimage_10.ggCurrentLogicStateScaling == 0) {
					me._nodeimage_10.ggParameter.sx = 1.05;
					me._nodeimage_10.ggParameter.sy = 1.05;
					me._nodeimage_10.style[domTransform]=parameterToTransform(me._nodeimage_10.ggParameter);
				}
				else {
					me._nodeimage_10.ggParameter.sx = 1;
					me._nodeimage_10.ggParameter.sy = 1;
					me._nodeimage_10.style[domTransform]=parameterToTransform(me._nodeimage_10.ggParameter);
				}
			}
		}
		me._nodeimage_10.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['nodeimage_10'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._nodeimage_10.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._nodeimage_10.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._nodeimage_10.style[domTransition]='' + cssPrefix + 'transform 1250ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._nodeimage_10.ggCurrentLogicStateAlpha == 0) {
					me._nodeimage_10.style.visibility=me._nodeimage_10.ggVisible?'inherit':'hidden';
					me._nodeimage_10.style.opacity=1;
				}
				else {
					me._nodeimage_10.style.visibility=me._nodeimage_10.ggVisible?'inherit':'hidden';
					me._nodeimage_10.style.opacity=0.69999;
				}
			}
		}
		me._nodeimage_10.onclick=function (e) {
			player.openNext("{node8}","");
		}
		me._nodeimage_10.onmouseover=function (e) {
			me.elementMouseOver['nodeimage_10']=true;
			me._nodeimage_10.logicBlock_scaling();
			me._nodeimage_10.logicBlock_alpha();
		}
		me._nodeimage_10.onmouseout=function (e) {
			me.elementMouseOver['nodeimage_10']=false;
			me._nodeimage_10.logicBlock_scaling();
			me._nodeimage_10.logicBlock_alpha();
		}
		me._nodeimage_10.ontouchend=function (e) {
			me.elementMouseOver['nodeimage_10']=false;
			me._nodeimage_10.logicBlock_scaling();
			me._nodeimage_10.logicBlock_alpha();
		}
		me._nodeimage_10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_60.appendChild(me._nodeimage_10);
		me._rectangle_2.appendChild(me._container_60);
		el=me._container_6=document.createElement('div');
		el.ggId="Container 6";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 36px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 58px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._nodeimage_1=document.createElement('div');
		els=me._nodeimage_1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + 'images/nodeimage_1.png');
		el.ggNodeId='node7';
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;border-radius: 50px; box-shadow: 0px 0px 11px 0px rgba(255,255,255,0.8);;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0.69999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._nodeimage_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['nodeimage_1'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeimage_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeimage_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeimage_1.style[domTransition]='' + cssPrefix + 'transform 1250ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._nodeimage_1.ggCurrentLogicStateScaling == 0) {
					me._nodeimage_1.ggParameter.sx = 1.05;
					me._nodeimage_1.ggParameter.sy = 1.05;
					me._nodeimage_1.style[domTransform]=parameterToTransform(me._nodeimage_1.ggParameter);
				}
				else {
					me._nodeimage_1.ggParameter.sx = 1;
					me._nodeimage_1.ggParameter.sy = 1;
					me._nodeimage_1.style[domTransform]=parameterToTransform(me._nodeimage_1.ggParameter);
				}
			}
		}
		me._nodeimage_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['nodeimage_1'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._nodeimage_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._nodeimage_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._nodeimage_1.style[domTransition]='' + cssPrefix + 'transform 1250ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._nodeimage_1.ggCurrentLogicStateAlpha == 0) {
					me._nodeimage_1.style.visibility=me._nodeimage_1.ggVisible?'inherit':'hidden';
					me._nodeimage_1.style.opacity=1;
				}
				else {
					me._nodeimage_1.style.visibility=me._nodeimage_1.ggVisible?'inherit':'hidden';
					me._nodeimage_1.style.opacity=0.69999;
				}
			}
		}
		me._nodeimage_1.onclick=function (e) {
			player.openNext("{node7}","");
		}
		me._nodeimage_1.onmouseover=function (e) {
			me.elementMouseOver['nodeimage_1']=true;
			me._nodeimage_1.logicBlock_scaling();
			me._nodeimage_1.logicBlock_alpha();
		}
		me._nodeimage_1.onmouseout=function (e) {
			me.elementMouseOver['nodeimage_1']=false;
			me._nodeimage_1.logicBlock_scaling();
			me._nodeimage_1.logicBlock_alpha();
		}
		me._nodeimage_1.ontouchend=function (e) {
			me.elementMouseOver['nodeimage_1']=false;
			me._nodeimage_1.logicBlock_scaling();
			me._nodeimage_1.logicBlock_alpha();
		}
		me._nodeimage_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_6.appendChild(me._nodeimage_1);
		me._rectangle_2.appendChild(me._container_6);
		me._container_30.appendChild(me._rectangle_2);
		me._interface_mobile.appendChild(me._container_30);
		el=me._container_3=document.createElement('div');
		el.ggId="Container 3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 58px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 2%;';
		hs+='visibility : inherit;';
		hs+='width : calc(100%  -  40px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._container_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		me._interface_mobile.appendChild(me._container_3);
		el=me._timer_20=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="Timer 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 246px;';
		hs+='position : absolute;';
		hs+='top : 74px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_20.ggIsActive=function() {
			return (me._timer_20.ggTimestamp + me._timer_20.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._timer_20.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_20.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_20.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_20.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_20.style[domTransition]='';
				if (me._timer_20.ggCurrentLogicStateVisible == 0) {
					me._timer_20.style.visibility="hidden";
					me._timer_20.ggVisible=false;
				}
				else {
					me._timer_20.style.visibility=(Number(me._timer_20.style.opacity)>0||!me._timer_20.style.opacity)?'inherit':'hidden';
					me._timer_20.ggVisible=true;
				}
			}
		}
		me._timer_20.ggDeactivate=function () {
			var flag=me._container_30.ggOpacitiyActive;
			if (player.transitionsDisabled) {
				me._container_30.style[domTransition]='none';
			} else {
				me._container_30.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._container_30.style.opacity='0';
				me._container_30.style.visibility='hidden';
			} else {
				me._container_30.style.opacity='1';
				me._container_30.style.visibility=me._container_30.ggVisible?'inherit':'hidden';
			}
			me._container_30.ggOpacitiyActive=!flag;
		}
		me._timer_20.ggCurrentLogicStateVisible = -1;
		me._timer_20.ggUpdateConditionTimer=function () {
			me._timer_20.logicBlock_visible();
		}
		me._timer_20.ggUpdatePosition=function (useTransition) {
		}
		me._interface_mobile.appendChild(me._timer_20);
		me._interface.appendChild(me._interface_mobile);
		el=me._interface_pc=document.createElement('div');
		el.ggId="Interface PC";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._interface_pc.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._interface_pc.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getOS() == 1)) || 
				((player.getOS() == 2)) || 
				((player.getOS() == 3)) || 
				((player.getOS() == 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._interface_pc.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._interface_pc.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._interface_pc.style[domTransition]='';
				if (me._interface_pc.ggCurrentLogicStateVisible == 0) {
					me._interface_pc.style.visibility=(Number(me._interface_pc.style.opacity)>0||!me._interface_pc.style.opacity)?'inherit':'hidden';
					me._interface_pc.ggVisible=true;
				}
				else {
					me._interface_pc.style.visibility="hidden";
					me._interface_pc.ggVisible=false;
				}
			}
		}
		me._interface_pc.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._meniul_camerelor=document.createElement('div');
		el.ggId="meniul camerelor";
		el.ggDx=0.14;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 2%;';
		hs+='height : 58px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : calc(100%  -  40px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._meniul_camerelor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._meniul_camerelor.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		el=me._compass=document.createElement('div');
		el.ggId="Compass";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 54px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 54px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._compass.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._compass.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['compass'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._compass.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._compass.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._compass.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me._compass.ggCurrentLogicStateScaling == 0) {
					me._compass.ggParameter.sx = 1.05;
					me._compass.ggParameter.sy = 1.05;
					me._compass.style[domTransform]=parameterToTransform(me._compass.ggParameter);
				}
				else {
					me._compass.ggParameter.sx = 1;
					me._compass.ggParameter.sy = 1;
					me._compass.style[domTransform]=parameterToTransform(me._compass.ggParameter);
				}
			}
		}
		me._compass.onclick=function (e) {
			player.moveToDefaultViewEx(1.5,0);
			player.setUseGyro(!(player.getUseGyro()));
		}
		me._compass.onmouseover=function (e) {
			me.elementMouseOver['compass']=true;
			me._compass.logicBlock_scaling();
		}
		me._compass.onmouseout=function (e) {
			me.elementMouseOver['compass']=false;
			me._compass.logicBlock_scaling();
		}
		me._compass.ontouchend=function (e) {
			me.elementMouseOver['compass']=false;
			me._compass.logicBlock_scaling();
		}
		me._compass.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._container_5=document.createElement('div');
		el.ggId="Container 5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._compassring=document.createElement('div');
		el.ggId="CompassRing";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid rgba(132,132,132,0.686275);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 0px 0px 13px 2px rgba(0,0,0,0.8);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._compassring.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._compassring.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_5.appendChild(me._compassring);
		el=me._beamdot=document.createElement('div');
		el.ggId="BeamDot";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : rgba(202,202,202,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='clip-path: polygon(50% 50%, 0% 100%, 50% 100%, 100% 100%, 50% 50%, 100% 100%);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._beamdot.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._beamdot.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_5.appendChild(me._beamdot);
		el=me._rectangle_6=document.createElement('div');
		el.ggId="Rectangle 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : rgba(255,255,255,0.941176);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_5.appendChild(me._rectangle_6);
		me._compass.appendChild(me._container_5);
		me._meniul_camerelor.appendChild(me._compass);
		el=me._background_menu_camere=document.createElement('div');
		el.ggId="background menu camere";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 40px;';
		hs+='border-radius : 40px;';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 55px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 230px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 0px 0px 13px 2px rgba(0,0,0,0.8);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._background_menu_camere.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._background_menu_camere.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._baie=document.createElement('div');
		el.ggId="baie";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 36px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 58px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._baie.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._baie.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._baie_text_menu_popup=document.createElement('div');
		els=me._baie_text_menu_popup__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="baie text menu popup";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 15px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -50px;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #bcbcbc;';
		hs+='background: rgba(188,188,188,0);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 23px;';
		hs+=cssPrefix + 'border-radius: 23px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 17px;';
		hs+='font-weight: bold;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 8px 6px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="BAIE";
		el.appendChild(els);
		me._baie_text_menu_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._baie_text_menu_popup.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((78-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._baie.appendChild(me._baie_text_menu_popup);
		el=me._baie_image=document.createElement('div');
		els=me._baie_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + 'images/baie_image.png');
		el.ggNodeId='node6';
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;border-radius: 50px; box-shadow: 0px 0px 11px 0px rgba(255,255,255,0.8);;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="baie image";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='opacity : 0.59999;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._baie_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._baie_image.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['baie_image'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._baie_image.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._baie_image.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._baie_image.style[domTransition]='' + cssPrefix + 'transform 1250ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._baie_image.ggCurrentLogicStateScaling == 0) {
					me._baie_image.ggParameter.sx = 1.05;
					me._baie_image.ggParameter.sy = 1.05;
					me._baie_image.style[domTransform]=parameterToTransform(me._baie_image.ggParameter);
				}
				else {
					me._baie_image.ggParameter.sx = 1;
					me._baie_image.ggParameter.sy = 1;
					me._baie_image.style[domTransform]=parameterToTransform(me._baie_image.ggParameter);
				}
			}
		}
		me._baie_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['baie_image'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._baie_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._baie_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._baie_image.style[domTransition]='' + cssPrefix + 'transform 1250ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._baie_image.ggCurrentLogicStateAlpha == 0) {
					me._baie_image.style.visibility=me._baie_image.ggVisible?'inherit':'hidden';
					me._baie_image.style.opacity=1;
				}
				else {
					me._baie_image.style.visibility=me._baie_image.ggVisible?'inherit':'hidden';
					me._baie_image.style.opacity=0.59999;
				}
			}
		}
		me._baie_image.onclick=function (e) {
			player.openNext("{node6}","");
		}
		me._baie_image.onmouseover=function (e) {
			me._baie_text_menu_popup.style[domTransition]='none';
			me._baie_text_menu_popup.style.visibility=(Number(me._baie_text_menu_popup.style.opacity)>0||!me._baie_text_menu_popup.style.opacity)?'inherit':'hidden';
			me._baie_text_menu_popup.ggVisible=true;
			me.elementMouseOver['baie_image']=true;
			me._baie_image.logicBlock_scaling();
			me._baie_image.logicBlock_alpha();
		}
		me._baie_image.onmouseout=function (e) {
			me._baie_text_menu_popup.style[domTransition]='none';
			me._baie_text_menu_popup.style.visibility='hidden';
			me._baie_text_menu_popup.ggVisible=false;
			me.elementMouseOver['baie_image']=false;
			me._baie_image.logicBlock_scaling();
			me._baie_image.logicBlock_alpha();
		}
		me._baie_image.ontouchend=function (e) {
			me.elementMouseOver['baie_image']=false;
			me._baie_image.logicBlock_scaling();
			me._baie_image.logicBlock_alpha();
		}
		me._baie_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._baie.appendChild(me._baie_image);
		me._background_menu_camere.appendChild(me._baie);
		el=me._bucatarie=document.createElement('div');
		el.ggId="bucatarie";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 36px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 58px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._bucatarie.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bucatarie.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._bucatarie_text_menu_popup=document.createElement('div');
		els=me._bucatarie_text_menu_popup__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="bucatarie text menu popup";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 15px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -50px;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #bcbcbc;';
		hs+='background: rgba(188,188,188,0);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 23px;';
		hs+=cssPrefix + 'border-radius: 23px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 17px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 8px 6px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="BUCATARIE";
		el.appendChild(els);
		me._bucatarie_text_menu_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bucatarie_text_menu_popup.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((78-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._bucatarie.appendChild(me._bucatarie_text_menu_popup);
		el=me._bucatarie_image=document.createElement('div');
		els=me._bucatarie_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + 'images/bucatarie_image.png');
		el.ggNodeId='node8';
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;border-radius: 30px; box-shadow: 0px 0px 11px 0px rgba(255,255,255,0.8);;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="bucatarie image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='opacity : 0.59999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._bucatarie_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._bucatarie_image.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['bucatarie_image'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._bucatarie_image.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._bucatarie_image.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._bucatarie_image.style[domTransition]='' + cssPrefix + 'transform 1250ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._bucatarie_image.ggCurrentLogicStateScaling == 0) {
					me._bucatarie_image.ggParameter.sx = 1.05;
					me._bucatarie_image.ggParameter.sy = 1.05;
					me._bucatarie_image.style[domTransform]=parameterToTransform(me._bucatarie_image.ggParameter);
				}
				else {
					me._bucatarie_image.ggParameter.sx = 1;
					me._bucatarie_image.ggParameter.sy = 1;
					me._bucatarie_image.style[domTransform]=parameterToTransform(me._bucatarie_image.ggParameter);
				}
			}
		}
		me._bucatarie_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['bucatarie_image'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._bucatarie_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._bucatarie_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._bucatarie_image.style[domTransition]='' + cssPrefix + 'transform 1250ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._bucatarie_image.ggCurrentLogicStateAlpha == 0) {
					me._bucatarie_image.style.visibility=me._bucatarie_image.ggVisible?'inherit':'hidden';
					me._bucatarie_image.style.opacity=1;
				}
				else {
					me._bucatarie_image.style.visibility=me._bucatarie_image.ggVisible?'inherit':'hidden';
					me._bucatarie_image.style.opacity=0.59999;
				}
			}
		}
		me._bucatarie_image.onclick=function (e) {
			player.openNext("{node8}","");
		}
		me._bucatarie_image.onmouseover=function (e) {
			me._bucatarie_text_menu_popup.style[domTransition]='none';
			me._bucatarie_text_menu_popup.style.visibility=(Number(me._bucatarie_text_menu_popup.style.opacity)>0||!me._bucatarie_text_menu_popup.style.opacity)?'inherit':'hidden';
			me._bucatarie_text_menu_popup.ggVisible=true;
			me.elementMouseOver['bucatarie_image']=true;
			me._bucatarie_image.logicBlock_scaling();
			me._bucatarie_image.logicBlock_alpha();
		}
		me._bucatarie_image.onmouseout=function (e) {
			me._bucatarie_text_menu_popup.style[domTransition]='none';
			me._bucatarie_text_menu_popup.style.visibility='hidden';
			me._bucatarie_text_menu_popup.ggVisible=false;
			me.elementMouseOver['bucatarie_image']=false;
			me._bucatarie_image.logicBlock_scaling();
			me._bucatarie_image.logicBlock_alpha();
		}
		me._bucatarie_image.ontouchend=function (e) {
			me.elementMouseOver['bucatarie_image']=false;
			me._bucatarie_image.logicBlock_scaling();
			me._bucatarie_image.logicBlock_alpha();
		}
		me._bucatarie_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._bucatarie.appendChild(me._bucatarie_image);
		me._background_menu_camere.appendChild(me._bucatarie);
		el=me._dormitor=document.createElement('div');
		el.ggId="dormitor";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 36px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 58px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dormitor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dormitor.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._dormitor_text_menu_popup=document.createElement('div');
		els=me._dormitor_text_menu_popup__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="dormitor text menu popup";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 15px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -50px;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #bcbcbc;';
		hs+='background: rgba(188,188,188,0);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 23px;';
		hs+=cssPrefix + 'border-radius: 23px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 17px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 8px 6px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="DORMITOR";
		el.appendChild(els);
		me._dormitor_text_menu_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dormitor_text_menu_popup.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._dormitor.appendChild(me._dormitor_text_menu_popup);
		el=me._dormitor_image=document.createElement('div');
		els=me._dormitor_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + 'images/dormitor_image.png');
		el.ggNodeId='node7';
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;border-radius: 50px; box-shadow: 0px 0px 11px 0px rgba(255,255,255,0.8);;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="dormitor image";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0.59999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dormitor_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._dormitor_image.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['dormitor_image'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._dormitor_image.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._dormitor_image.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._dormitor_image.style[domTransition]='' + cssPrefix + 'transform 1250ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._dormitor_image.ggCurrentLogicStateScaling == 0) {
					me._dormitor_image.ggParameter.sx = 1.05;
					me._dormitor_image.ggParameter.sy = 1.05;
					me._dormitor_image.style[domTransform]=parameterToTransform(me._dormitor_image.ggParameter);
				}
				else {
					me._dormitor_image.ggParameter.sx = 1;
					me._dormitor_image.ggParameter.sy = 1;
					me._dormitor_image.style[domTransform]=parameterToTransform(me._dormitor_image.ggParameter);
				}
			}
		}
		me._dormitor_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['dormitor_image'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._dormitor_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._dormitor_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._dormitor_image.style[domTransition]='' + cssPrefix + 'transform 1250ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._dormitor_image.ggCurrentLogicStateAlpha == 0) {
					me._dormitor_image.style.visibility=me._dormitor_image.ggVisible?'inherit':'hidden';
					me._dormitor_image.style.opacity=1;
				}
				else {
					me._dormitor_image.style.visibility=me._dormitor_image.ggVisible?'inherit':'hidden';
					me._dormitor_image.style.opacity=0.59999;
				}
			}
		}
		me._dormitor_image.onclick=function (e) {
			player.openNext("{node7}","");
		}
		me._dormitor_image.onmouseover=function (e) {
			me._dormitor_text_menu_popup.style[domTransition]='none';
			me._dormitor_text_menu_popup.style.visibility=(Number(me._dormitor_text_menu_popup.style.opacity)>0||!me._dormitor_text_menu_popup.style.opacity)?'inherit':'hidden';
			me._dormitor_text_menu_popup.ggVisible=true;
			me.elementMouseOver['dormitor_image']=true;
			me._dormitor_image.logicBlock_scaling();
			me._dormitor_image.logicBlock_alpha();
		}
		me._dormitor_image.onmouseout=function (e) {
			me._dormitor_text_menu_popup.style[domTransition]='none';
			me._dormitor_text_menu_popup.style.visibility='hidden';
			me._dormitor_text_menu_popup.ggVisible=false;
			me.elementMouseOver['dormitor_image']=false;
			me._dormitor_image.logicBlock_scaling();
			me._dormitor_image.logicBlock_alpha();
		}
		me._dormitor_image.ontouchend=function (e) {
			me.elementMouseOver['dormitor_image']=false;
			me._dormitor_image.logicBlock_scaling();
			me._dormitor_image.logicBlock_alpha();
		}
		me._dormitor_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._dormitor.appendChild(me._dormitor_image);
		me._background_menu_camere.appendChild(me._dormitor);
		me._meniul_camerelor.appendChild(me._background_menu_camere);
		me._interface_pc.appendChild(me._meniul_camerelor);
		el=me._meniul_de_sus_logo=document.createElement('div');
		el.ggId="meniul de sus (logo)";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 58px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 2%;';
		hs+='visibility : inherit;';
		hs+='width : calc(100%  -  40px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._meniul_de_sus_logo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._meniul_de_sus_logo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		me._interface_pc.appendChild(me._meniul_de_sus_logo);
		el=me._timer_2=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=700;
		el.ggId="Timer 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 246px;';
		hs+='position : absolute;';
		hs+='top : 74px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_2.ggIsActive=function() {
			return (me._timer_2.ggTimestamp + me._timer_2.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._timer_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_2.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_2.style[domTransition]='';
				if (me._timer_2.ggCurrentLogicStateVisible == 0) {
					me._timer_2.style.visibility="hidden";
					me._timer_2.ggVisible=false;
				}
				else {
					me._timer_2.style.visibility=(Number(me._timer_2.style.opacity)>0||!me._timer_2.style.opacity)?'inherit':'hidden';
					me._timer_2.ggVisible=true;
				}
			}
		}
		me._timer_2.ggDeactivate=function () {
			var flag=me._meniul_camerelor.ggOpacitiyActive;
			if (player.transitionsDisabled) {
				me._meniul_camerelor.style[domTransition]='none';
			} else {
				me._meniul_camerelor.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._meniul_camerelor.style.opacity='0';
				me._meniul_camerelor.style.visibility='hidden';
			} else {
				me._meniul_camerelor.style.opacity='1';
				me._meniul_camerelor.style.visibility=me._meniul_camerelor.ggVisible?'inherit':'hidden';
			}
			me._meniul_camerelor.ggOpacitiyActive=!flag;
		}
		me._timer_2.ggCurrentLogicStateVisible = -1;
		me._timer_2.ggUpdateConditionTimer=function () {
			me._timer_2.logicBlock_visible();
		}
		me._timer_2.ggUpdatePosition=function (useTransition) {
		}
		me._interface_pc.appendChild(me._timer_2);
		me._interface.appendChild(me._interface_pc);
		me.divSkin.appendChild(me._interface);
		el=me._loading=document.createElement('div');
		el.ggId="loading";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._loading.onclick=function (e) {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		me._loading.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._loadingbg=document.createElement('div');
		el.ggId="loadingbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 58px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 208px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loadingbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbg.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbg);
		el=me._loadingtext=document.createElement('div');
		els=me._loadingtext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="loadingtext";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._loadingtext.ggUpdateText=function() {
			var hs="Loading... "+(player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		player.addListener('downloadprogress', function() {
			me._loadingtext.ggUpdateText();
		});
		el.appendChild(els);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingtext.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingtext);
		el=me._loadingbar=document.createElement('div');
		el.ggId="loadingbar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #808080;';
		hs+='cursor : default;';
		hs+='height : 12px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 181px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		me._loadingbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbar.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbar);
		me.divSkin.appendChild(me._loading);
		el=me._interactivitate=document.createElement('div');
		el.ggId="INTERACTIVITATE";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._interactivitate.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._interactivitate.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._televizor=document.createElement('div');
		el.ggId="TELEVIZOR";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._televizor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._televizor.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._televizor_tablou=document.createElement('div');
		el.ggId="TELEVIZOR (TABLOU)";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._televizor_tablou.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._televizor_tablou.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._televizor.appendChild(me._televizor_tablou);
		el=me._televizor_bucatarie=document.createElement('div');
		el.ggId="TELEVIZOR (BUCATARIE)";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._televizor_bucatarie.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._televizor_bucatarie.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._televizor.appendChild(me._televizor_bucatarie);
		me._interactivitate.appendChild(me._televizor);
		el=me._interior_interactiv=document.createElement('div');
		el.ggId="INTERIOR INTERACTIV";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._interior_interactiv.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._interior_interactiv.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._container_4=document.createElement('div');
		el.ggId="Container 4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._robinet_timer=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=5000;
		el.ggId="robinet timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 580px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 710px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._robinet_timer.ggIsActive=function() {
			return (me._robinet_timer.ggTimestamp + me._robinet_timer.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._robinet_timer.ggDeactivate=function () {
			player.openNext("{node8}","");
		}
		me._robinet_timer.ggUpdatePosition=function (useTransition) {
		}
		me._container_4.appendChild(me._robinet_timer);
		me._interior_interactiv.appendChild(me._container_4);
		me._interactivitate.appendChild(me._interior_interactiv);
		el=me._usi_interactive=document.createElement('div');
		el.ggId="USI INTERACTIVE";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._usi_interactive.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._usi_interactive.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._living_dormitor=document.createElement('div');
		el.ggId="LIVING > DORMITOR";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._living_dormitor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._living_dormitor.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._circle_node_living_dormitor=document.createElement('div');
		el.ggId="CIRCLE NODE (LIVING > DORMITOR)";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circle_node_living_dormitor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._circle_node_living_dormitor.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._timer_circle_node_living_x_dormitor=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=1500;
		el.ggId="TIMER CIRCLE NODE LIVING X DORMITOR";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 580px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 710px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_circle_node_living_x_dormitor.ggIsActive=function() {
			return (me._timer_circle_node_living_x_dormitor.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._timer_circle_node_living_x_dormitor.ggTimestamp) / me._timer_circle_node_living_x_dormitor.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._timer_circle_node_living_x_dormitor.ggDeactivate=function () {
			var list=me.findElements("CONTAINER CIRCLE NODE LIVING X DORMITOR",true);
			while(list.length>0) {
				var e=list.pop();
				if (player.transitionsDisabled) {
					e.style[domTransition]='none';
				} else {
					e.style[domTransition]='all 1000ms ease-out 0ms';
				}
				e.style.opacity='1';
				e.style.visibility=e.ggVisible?'inherit':'hidden';
			}
		}
		me._timer_circle_node_living_x_dormitor.ggUpdatePosition=function (useTransition) {
		}
		me._circle_node_living_dormitor.appendChild(me._timer_circle_node_living_x_dormitor);
		me._living_dormitor.appendChild(me._circle_node_living_dormitor);
		el=me._open_door_living_dormitor=document.createElement('div');
		el.ggId="OPEN DOOR (LIVING > DORMITOR)";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._open_door_living_dormitor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._open_door_living_dormitor.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._timer_open_door_living_x_dormitor=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=5000;
		el.ggId="TIMER OPEN DOOR LIVING X DORMITOR";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 580px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 710px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_open_door_living_x_dormitor.ggIsActive=function() {
			return (me._timer_open_door_living_x_dormitor.ggTimestamp + me._timer_open_door_living_x_dormitor.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._timer_open_door_living_x_dormitor.ggDeactivate=function () {
			player.openNext("{node8}","");
		}
		me._timer_open_door_living_x_dormitor.ggUpdatePosition=function (useTransition) {
		}
		me._open_door_living_dormitor.appendChild(me._timer_open_door_living_x_dormitor);
		el=me._hoyspon_=document.createElement('div');
		el.ggId="hoyspon ";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 580px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 710px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hoyspon_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hoyspon_.onclick=function (e) {
			var list=me.findElements("CONTAINER OPEN DOOR LIVING X DORMITOR",true);
			while(list.length>0) {
				var e=list.pop();
				if (player.transitionsDisabled) {
					e.style[domTransition]='none';
				} else {
					e.style[domTransition]='all 500ms ease-out 0ms';
				}
				e.style.opacity='1';
				e.style.visibility=e.ggVisible?'inherit':'hidden';
			}
			var list=me.findElements("CIRCLE LIVING X DORMITOR",true);
			while(list.length>0) {
				var e=list.pop();
				if (player.transitionsDisabled) {
					e.style[domTransition]='none';
				} else {
					e.style[domTransition]='all 1000ms ease-out 0ms';
				}
				e.ggParameter.sx=1;e.ggParameter.sy=1;
				e.style[domTransform]=parameterToTransform(e.ggParameter);
			}
			var list=me.findElements("CIRCLE IMAGINE LIVING X DORMITOR",true);
			while(list.length>0) {
				var e=list.pop();
				if (player.transitionsDisabled) {
					e.style[domTransition]='none';
				} else {
					e.style[domTransition]='all 750ms ease-out 0ms';
				}
				e.style.opacity='1';
				e.style.visibility=e.ggVisible?'inherit':'hidden';
			}
			var list=me.findElements("CIRCLE IMAGINE LIVING X DORMITOR",true);
			while(list.length>0) {
				var e=list.pop();
				if (player.transitionsDisabled) {
					e.style[domTransition]='none';
				} else {
					e.style[domTransition]='all 1000ms ease-out 0ms';
				}
				e.ggParameter.sx=1;e.ggParameter.sy=1;
				e.style[domTransform]=parameterToTransform(e.ggParameter);
			}
		}
		me._hoyspon_.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._open_door_living_dormitor.appendChild(me._hoyspon_);
		me._living_dormitor.appendChild(me._open_door_living_dormitor);
		me._usi_interactive.appendChild(me._living_dormitor);
		me._interactivitate.appendChild(me._usi_interactive);
		me.divSkin.appendChild(me._interactivitate);
		el=me._zoom_hotspot=document.createElement('div');
		el.ggId="ZOOM HOTSPOT";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoom_hotspot.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._zoom_hotspot.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._simple_zoom=document.createElement('div');
		el.ggId="SIMPLE ZOOM";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._simple_zoom.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._simple_zoom.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._back=document.createElement('div');
		el.ggId="BACK";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._back.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._back.onclick=function (e) {
			player.moveToDefaultViewEx(5,0);
			me._back.style[domTransition]='none';
			me._back.style.visibility='hidden';
			me._back.ggVisible=false;
			var list=me.findElements("EXIT ICON",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
		}
		me._back.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._simple_zoom.appendChild(me._back);
		me._zoom_hotspot.appendChild(me._simple_zoom);
		el=me._zoom_with_info=document.createElement('div');
		el.ggId="ZOOM WITH INFO";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoom_with_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoom_with_info.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._info_popup=document.createElement('div');
		el.ggId="INFO POPUP";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._rectangle_5=document.createElement('div');
		el.ggId="Rectangle 5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(0,0,0,0.615686);';
		hs+='border : 1px solid rgba(0,0,0,0.568627);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_5.onclick=function (e) {
			player.moveToDefaultViewEx(1,0);
			if (player.transitionsDisabled) {
				me._info_popup.style[domTransition]='none';
			} else {
				me._info_popup.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._info_popup.style.opacity='0';
			me._info_popup.style.visibility='hidden';
		}
		me._rectangle_5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._info_popup.appendChild(me._rectangle_5);
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : rgba(129,129,129,0.521569);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 0px 0px 15px 5px #FFFFFF;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getOS() == 5)) || 
				((player.getOS() == 4))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_3.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_3.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_3.style[domTransition]='width 0s, height 0s';
				if (me._rectangle_3.ggCurrentLogicStateSize == 0) {
					me._rectangle_3.style.width='80%';
					me._rectangle_3.style.height='40%';
					skin.updateSize(me._rectangle_3);
				}
				else {
					me._rectangle_3.style.width='50%';
					me._rectangle_3.style.height='50%';
					skin.updateSize(me._rectangle_3);
				}
			}
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._titlu=document.createElement('div');
		els=me._titlu__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Titlu";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 17.71%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 24px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._titlu.ggUpdateText=function() {
			var hs=player.getVariableValue('poly_target2');
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._titlu.ggUpdateText();
		player.addListener('timer', function() {
			me._titlu.ggUpdateText();
		});
		el.appendChild(els);
		me._titlu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._titlu.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._rectangle_3.appendChild(me._titlu);
		el=me._descriere=document.createElement('div');
		els=me._descriere__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Descriere";
		el.ggDx=0;
		el.ggDy=12;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text info2";
		el.ggType='text';
		hs ='';
		hs+='height : 71.4286%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 94%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 24px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._descriere.ggUpdateText=function() {
			var hs=player.getVariableValue('poly_target');
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._descriere.ggUpdateText();
		player.addListener('timer', function() {
			me._descriere.ggUpdateText();
		});
		el.appendChild(els);
		me._descriere.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._descriere.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_3.appendChild(me._descriere);
		el=me._ht_info_close=document.createElement('div');
		els=me._ht_info_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzMiAzMiIgaWQ9IkxheWVyXzEiIHk9IjBweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIzMn'+
			'B4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFj'+
			'LTAuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI0LDAsMS42OUwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjctMC40NjcsMS4yMjYsMCwxLjY5MmMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Lj'+
			'g4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU2LDI5LjcyLDEyLjA0MiwyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTg5LTAuMDAxLTUuMTctMC45ODUtNy4xNDYtMi45NjFTNS44OTUsMTguNTksNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1'+
			'OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc2LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9IiNmZmZmZmYiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MiwxNmwzLjQ0LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjUsMC0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MSwwLjAwMUwxNiwxNC'+
			'4zMDhsLTMuNDQxLTMuNDQxYy0wLjQ2Ny0wLjQ2Ny0xLjIyNC0wLjQ2Ny0xLjY5MSwwLjAwMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDMuNDQtMy40NGwzLjQzOSwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNSwwLjQ2OCwxLjY5MSwwLjAwMUMyMS41OTksMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4'+
			'OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTUsMCwxNy42NzhjNC44ODEsNC44OCwxMi43OTYsNC44OCwxNy42NzgsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4NC01LjE3LDIuOTYtNy4xNDdDMTAuODMsNi44NzgsMTMuNDA5LDUuODk0LDE2LDUuODk0YzIuNTkxLDAuMDAxLDUuMT'+
			'csMC45ODQsNy4xNDcsMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjk3NiwxLjk3NywyLjk1Nyw0LjU1NiwyLjk2LDcuMTQ3Yy0wLjAwMSwyLjU5MS0wLjk4NSw1LjE2OS0yLjk2LDcuMTQ4QzIxLjE2OSwyNS4xMjIsMTguNTkxLDI2LjEwNiwxNiwyNi4xMDZ6IiBmaWxsLW9wYWNpdHk9IjEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzMiAzMiIgaWQ9IkxheWVyXzEiIHk9IjBweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIzMn'+
			'B4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjM0MzQzNDIiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYj'+
			'eDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MiwwLjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MWMtMC40NjgtMC40NjgtMS4yMjUtMC40NjctMS42OTMsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOT'+
			'A3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzhjNC44ODIsNC44ODEsMTIuNzk2LDQuODgxLDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTlDNi44NzgsMjEuMTcsNS44OTUsMTguNTkxLDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5'+
			'LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDhDMjEuMTcsMjUuMTIzLDE4LjU5MSwyNi4xMDcsMTYsMjYuMTA2eiIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSIjZmZmZmZmIi'+
			'BkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI2LDAuMDAxLTEuNjkzYy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MiwwLjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40NjcsMC40NjcsMS4yMjYsMC40'+
			'NjcsMS42OTIsMC4wMDFsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIxLjU5OCwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MWMtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzgmI3hkOyYjeGE7JiN4OTsmI3g5O2M0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45OD'+
			'QtNy4xNDYtMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O0M2Ljg3OCwyMS4xNyw1Ljg5NSwxOC41OTEsNS44OTQsMTZjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O0MyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6IiBmaWxsLW9wYWNpdHk9IjEiLz4K'+
			'IDwvZz4KPC9zdmc+Cg==';
		me._ht_info_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_info_close.onclick=function (e) {
			player.moveToDefaultViewEx(1,0);
			if (player.transitionsDisabled) {
				me._info_popup.style[domTransition]='none';
			} else {
				me._info_popup.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._info_popup.style.opacity='0';
			me._info_popup.style.visibility='hidden';
		}
		me._ht_info_close.onmouseover=function (e) {
			me._ht_info_close__img.style.visibility='hidden';
			me._ht_info_close__imgo.style.visibility='inherit';
		}
		me._ht_info_close.onmouseout=function (e) {
			me._ht_info_close__img.style.visibility='inherit';
			me._ht_info_close__imgo.style.visibility='hidden';
		}
		me._ht_info_close.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_3.appendChild(me._ht_info_close);
		me._info_popup.appendChild(me._rectangle_3);
		me._zoom_with_info.appendChild(me._info_popup);
		el=me._zoom_hotspots_with_info=document.createElement('div');
		el.ggId="ZOOM HOTSPOTS WITH INFO";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 580px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 710px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoom_hotspots_with_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoom_hotspots_with_info.ggUpdatePosition=function (useTransition) {
		}
		me._zoom_with_info.appendChild(me._zoom_hotspots_with_info);
		me._zoom_hotspot.appendChild(me._zoom_with_info);
		me.divSkin.appendChild(me._zoom_hotspot);
		el=me._container_9=document.createElement('div');
		el.ggId="Container 9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 580px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 710px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_9.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_9.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._container_9);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('imagesready', function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		});
		player.addListener('beforechangenode', function() {
			if (
				(
					((player.getVariableValue('vis_loader') == true))
				)
			) {
				me._loading.style[domTransition]='none';
				me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
				me._loading.ggVisible=true;
			}
		});
		player.addListener('tilesrequested', function() {
			player.setVariableValue('vis_loader', false);
		});
		player.addListener('fullscreenenter', function() {
			me._timer_open_door_living_x_dormitor.ggTimeout=Number("3") * 1000.0;
			me._timer_open_door_living_x_dormitor.ggTimestamp=skin.ggCurrentTime;
		});
	};
	this.hotspotProxyClick=function(id, url) {
		if (id=='enter') {
			me._poligon_enter_ferestre_usi.onclick();
		}
		if (id=='panoinfo') {
			me._poligon_info.onclick();
		}
		if (id=='DORMITOR') {
			me._hoyspon_.onclick();
		}
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
		if (id=='open') {
			me._poligon_open_ferestre_usi.onmouseover();
		}
	}
	me.hotspotProxyOut=function(id, url) {
		if (id=='open') {
			me._poligon_open_ferestre_usi.onmouseout();
		}
	}
	me.callChildLogicBlocksHotspot_simple_zoom0_mouseover = function(){
		if(hotspotTemplates['SIMPLE ZOOM']) {
			var i;
			for(i = 0; i < hotspotTemplates['SIMPLE ZOOM'].length; i++) {
				if (hotspotTemplates['SIMPLE ZOOM'][i]._container_8 && hotspotTemplates['SIMPLE ZOOM'][i]._container_8.logicBlock_alpha) {
					hotspotTemplates['SIMPLE ZOOM'][i]._container_8.logicBlock_alpha();
				}
				if (hotspotTemplates['SIMPLE ZOOM'][i]._container_8 && hotspotTemplates['SIMPLE ZOOM'][i]._container_8.logicBlock_scaling) {
					hotspotTemplates['SIMPLE ZOOM'][i]._container_8.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_tv_tablou_mouseover = function(){
		if(hotspotTemplates['tv tablou']) {
			var i;
			for(i = 0; i < hotspotTemplates['tv tablou'].length; i++) {
				if (hotspotTemplates['tv tablou'][i]._video_tablou && hotspotTemplates['tv tablou'][i]._video_tablou.logicBlock_scaling) {
					hotspotTemplates['tv tablou'][i]._video_tablou.logicBlock_scaling();
				}
				if (hotspotTemplates['tv tablou'][i]._filtru_video && hotspotTemplates['tv tablou'][i]._filtru_video.logicBlock_backgroundcolor) {
					hotspotTemplates['tv tablou'][i]._filtru_video.logicBlock_backgroundcolor();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_tv_bucatarie_mouseover = function(){
		if(hotspotTemplates['tv bucatarie']) {
			var i;
			for(i = 0; i < hotspotTemplates['tv bucatarie'].length; i++) {
				if (hotspotTemplates['tv bucatarie'][i]._video_bucatarie && hotspotTemplates['tv bucatarie'][i]._video_bucatarie.logicBlock_scaling) {
					hotspotTemplates['tv bucatarie'][i]._video_bucatarie.logicBlock_scaling();
				}
				if (hotspotTemplates['tv bucatarie'][i]._rectangle_9 && hotspotTemplates['tv bucatarie'][i]._rectangle_9.logicBlock_backgroundcolor) {
					hotspotTemplates['tv bucatarie'][i]._rectangle_9.logicBlock_backgroundcolor();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_zoom_with_info_masa_mouseover = function(){
		if(hotspotTemplates['ZOOM WITH INFO MASA']) {
			var i;
			for(i = 0; i < hotspotTemplates['ZOOM WITH INFO MASA'].length; i++) {
				if (hotspotTemplates['ZOOM WITH INFO MASA'][i]._vircle_info_zoom0 && hotspotTemplates['ZOOM WITH INFO MASA'][i]._vircle_info_zoom0.logicBlock_scaling) {
					hotspotTemplates['ZOOM WITH INFO MASA'][i]._vircle_info_zoom0.logicBlock_scaling();
				}
				if (hotspotTemplates['ZOOM WITH INFO MASA'][i]._vircle_info_zoom0 && hotspotTemplates['ZOOM WITH INFO MASA'][i]._vircle_info_zoom0.logicBlock_alpha) {
					hotspotTemplates['ZOOM WITH INFO MASA'][i]._vircle_info_zoom0.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_zoom_with_info_oglinda_mouseover = function(){
		if(hotspotTemplates['ZOOM WITH INFO OGLINDA']) {
			var i;
			for(i = 0; i < hotspotTemplates['ZOOM WITH INFO OGLINDA'].length; i++) {
				if (hotspotTemplates['ZOOM WITH INFO OGLINDA'][i]._vircle_info_zoom && hotspotTemplates['ZOOM WITH INFO OGLINDA'][i]._vircle_info_zoom.logicBlock_scaling) {
					hotspotTemplates['ZOOM WITH INFO OGLINDA'][i]._vircle_info_zoom.logicBlock_scaling();
				}
				if (hotspotTemplates['ZOOM WITH INFO OGLINDA'][i]._vircle_info_zoom && hotspotTemplates['ZOOM WITH INFO OGLINDA'][i]._vircle_info_zoom.logicBlock_alpha) {
					hotspotTemplates['ZOOM WITH INFO OGLINDA'][i]._vircle_info_zoom.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_node_circle_node_living_x_dormitor_mouseover = function(){
		if(hotspotTemplates['NODE CIRCLE NODE LIVING X DORMITOR']) {
			var i;
			for(i = 0; i < hotspotTemplates['NODE CIRCLE NODE LIVING X DORMITOR'].length; i++) {
				if (hotspotTemplates['NODE CIRCLE NODE LIVING X DORMITOR'][i]._circle_living_x_dormitor && hotspotTemplates['NODE CIRCLE NODE LIVING X DORMITOR'][i]._circle_living_x_dormitor.logicBlock_scaling) {
					hotspotTemplates['NODE CIRCLE NODE LIVING X DORMITOR'][i]._circle_living_x_dormitor.logicBlock_scaling();
				}
				if (hotspotTemplates['NODE CIRCLE NODE LIVING X DORMITOR'][i]._circle_living_x_dormitor && hotspotTemplates['NODE CIRCLE NODE LIVING X DORMITOR'][i]._circle_living_x_dormitor.logicBlock_alpha) {
					hotspotTemplates['NODE CIRCLE NODE LIVING X DORMITOR'][i]._circle_living_x_dormitor.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_node_circle_node_living_x_dormitor_mouseover = function(){
		if(hotspotTemplates['NODE CIRCLE NODE LIVING X DORMITOR']) {
			var i;
			for(i = 0; i < hotspotTemplates['NODE CIRCLE NODE LIVING X DORMITOR'].length; i++) {
				if (hotspotTemplates['NODE CIRCLE NODE LIVING X DORMITOR'][i]._circle_imagine_living_x_dormitor && hotspotTemplates['NODE CIRCLE NODE LIVING X DORMITOR'][i]._circle_imagine_living_x_dormitor.logicBlock_alpha) {
					hotspotTemplates['NODE CIRCLE NODE LIVING X DORMITOR'][i]._circle_imagine_living_x_dormitor.logicBlock_alpha();
				}
				if (hotspotTemplates['NODE CIRCLE NODE LIVING X DORMITOR'][i]._circle_imagine_living_x_dormitor && hotspotTemplates['NODE CIRCLE NODE LIVING X DORMITOR'][i]._circle_imagine_living_x_dormitor.logicBlock_scaling) {
					hotspotTemplates['NODE CIRCLE NODE LIVING X DORMITOR'][i]._circle_imagine_living_x_dormitor.logicBlock_scaling();
				}
				if (hotspotTemplates['NODE CIRCLE NODE LIVING X DORMITOR'][i]._circle_shadow_living_x_dormitor && hotspotTemplates['NODE CIRCLE NODE LIVING X DORMITOR'][i]._circle_shadow_living_x_dormitor.logicBlock_scaling) {
					hotspotTemplates['NODE CIRCLE NODE LIVING X DORMITOR'][i]._circle_shadow_living_x_dormitor.logicBlock_scaling();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseOver['rectangle_74']) {
			player.changePanLog(-0.5,true);
		}
		if (me.elementMouseOver['rectangle_73']) {
			player.changePanLog(-0.3,true);
		}
		if (me.elementMouseOver['rectangle_72']) {
			player.changePanLog(-0.1,true);
		}
		if (me.elementMouseOver['rectangle_71']) {
			player.changePanLog(0.1,true);
		}
		if (me.elementMouseOver['rectangle_70']) {
			player.changePanLog(0.3,true);
		}
		if (me.elementMouseOver['mere0']) {
			player.changePanLog(0.5,true);
		}
		if (me.elementMouseDown['rectangle_7']) {
			player.changePanLog(-0.25,true);
		}
		if (me.elementMouseDown['mere']) {
			player.changePanLog(0.25,true);
		}
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
			} else {
				player.startAutorotate("0.008");
			}
		}
		if (me.elementMouseOver['poligon_open_ferestre_usi']) {
			player.openNext(player.hotspot.url,"$(fwd)");
		}
		var hs='';
		if (me._beamdot0.ggParameter) {
			hs+=parameterToTransform(me._beamdot0.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * player.getPanNorth() + 0)) + 'deg) ';
		me._beamdot0.style[domTransform]=hs;
		if (me._timer_20.ggLastIsActive!=me._timer_20.ggIsActive()) {
			me._timer_20.ggLastIsActive=me._timer_20.ggIsActive();
			if (me._timer_20.ggLastIsActive) {
			} else {
				var flag=me._container_30.ggOpacitiyActive;
				if (player.transitionsDisabled) {
					me._container_30.style[domTransition]='none';
				} else {
					me._container_30.style[domTransition]='all 1000ms ease-out 0ms';
				}
				if (flag) {
					me._container_30.style.opacity='0';
					me._container_30.style.visibility='hidden';
				} else {
					me._container_30.style.opacity='1';
					me._container_30.style.visibility=me._container_30.ggVisible?'inherit':'hidden';
				}
				me._container_30.ggOpacitiyActive=!flag;
			}
		}
		me._timer_20.ggUpdateConditionTimer();
		var hs='';
		if (me._beamdot.ggParameter) {
			hs+=parameterToTransform(me._beamdot.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * player.getPanNorth() + 0)) + 'deg) ';
		me._beamdot.style[domTransform]=hs;
		if (me._timer_2.ggLastIsActive!=me._timer_2.ggIsActive()) {
			me._timer_2.ggLastIsActive=me._timer_2.ggIsActive();
			if (me._timer_2.ggLastIsActive) {
			} else {
				var flag=me._meniul_camerelor.ggOpacitiyActive;
				if (player.transitionsDisabled) {
					me._meniul_camerelor.style[domTransition]='none';
				} else {
					me._meniul_camerelor.style[domTransition]='all 1000ms ease-out 0ms';
				}
				if (flag) {
					me._meniul_camerelor.style.opacity='0';
					me._meniul_camerelor.style.visibility='hidden';
				} else {
					me._meniul_camerelor.style.opacity='1';
					me._meniul_camerelor.style.visibility=me._meniul_camerelor.ggVisible?'inherit':'hidden';
				}
				me._meniul_camerelor.ggOpacitiyActive=!flag;
			}
		}
		me._timer_2.ggUpdateConditionTimer();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
		if (me._robinet_timer.ggLastIsActive!=me._robinet_timer.ggIsActive()) {
			me._robinet_timer.ggLastIsActive=me._robinet_timer.ggIsActive();
			if (me._robinet_timer.ggLastIsActive) {
			} else {
				player.openNext("{node8}","");
			}
		}
		if (me._timer_circle_node_living_x_dormitor.ggLastIsActive!=me._timer_circle_node_living_x_dormitor.ggIsActive()) {
			me._timer_circle_node_living_x_dormitor.ggLastIsActive=me._timer_circle_node_living_x_dormitor.ggIsActive();
			if (me._timer_circle_node_living_x_dormitor.ggLastIsActive) {
			} else {
				var list=me.findElements("CONTAINER CIRCLE NODE LIVING X DORMITOR",true);
				while(list.length>0) {
					var e=list.pop();
					if (player.transitionsDisabled) {
						e.style[domTransition]='none';
					} else {
						e.style[domTransition]='all 1000ms ease-out 0ms';
					}
					e.style.opacity='1';
					e.style.visibility=e.ggVisible?'inherit':'hidden';
				}
			}
		}
		if (me._timer_open_door_living_x_dormitor.ggLastIsActive!=me._timer_open_door_living_x_dormitor.ggIsActive()) {
			me._timer_open_door_living_x_dormitor.ggLastIsActive=me._timer_open_door_living_x_dormitor.ggIsActive();
			if (me._timer_open_door_living_x_dormitor.ggLastIsActive) {
			} else {
				player.openNext("{node8}","");
			}
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_simple_zoom0(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._simple_zoom0=document.createElement('div');
		el.ggId="SIMPLE ZOOM";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._simple_zoom0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._simple_zoom0.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._simple_zoom0.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._simple_zoom0.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._simple_zoom0.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._simple_zoom0.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_8=document.createElement('div');
		el.ggId="Container 8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.85 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 36px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.80002;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._container_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._container_8.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['container_8'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._container_8.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._container_8.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._container_8.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._container_8.ggCurrentLogicStateScaling == 0) {
					me._container_8.ggParameter.sx = 1;
					me._container_8.ggParameter.sy = 1;
					me._container_8.style[domTransform]=parameterToTransform(me._container_8.ggParameter);
				}
				else {
					me._container_8.ggParameter.sx = 0.85;
					me._container_8.ggParameter.sy = 0.85;
					me._container_8.style[domTransform]=parameterToTransform(me._container_8.ggParameter);
				}
			}
		}
		me._container_8.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['container_8'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._container_8.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._container_8.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._container_8.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._container_8.ggCurrentLogicStateAlpha == 0) {
					me._container_8.style.visibility=me._container_8.ggVisible?'inherit':'hidden';
					me._container_8.style.opacity=1;
				}
				else {
					me._container_8.style.visibility=me._container_8.ggVisible?'inherit':'hidden';
					me._container_8.style.opacity=0.80002;
				}
			}
		}
		me._container_8.onmouseover=function (e) {
			me.elementMouseOver['container_8']=true;
			me._container_8.logicBlock_scaling();
			me._container_8.logicBlock_alpha();
		}
		me._container_8.onmouseout=function (e) {
			me.elementMouseOver['container_8']=false;
			me._container_8.logicBlock_scaling();
			me._container_8.logicBlock_alpha();
		}
		me._container_8.ontouchend=function (e) {
			me.elementMouseOver['container_8']=false;
			me._container_8.logicBlock_scaling();
			me._container_8.logicBlock_alpha();
		}
		me._container_8.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._vircle_info_zoom1=document.createElement('div');
		els=me._vircle_info_zoom1__img=document.createElement('img');
		els.className='ggskin ggskin_vircle_info_zoom1';
		hs=basePath + 'images/vircle_info_zoom1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="vircle info zoom";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._vircle_info_zoom1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._vircle_info_zoom1.onclick=function (e) {
			player.moveTo(me.hotspot.pan,me.hotspot.tilt,me.hotspot.description,"2");
			me._exit_icon.style[domTransition]='none';
			me._exit_icon.style.visibility=(Number(me._exit_icon.style.opacity)>0||!me._exit_icon.style.opacity)?'inherit':'hidden';
			me._exit_icon.ggVisible=true;
			skin._back.style[domTransition]='none';
			skin._back.style.visibility=(Number(skin._back.style.opacity)>0||!skin._back.style.opacity)?'inherit':'hidden';
			skin._back.ggVisible=true;
		}
		me._vircle_info_zoom1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._exit_icon=document.createElement('div');
		els=me._exit_icon__img=document.createElement('img');
		els.className='ggskin ggskin_exit_icon';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAEPUlEQVR4nO2cTYscVRSG3xMnGiHREFDib1BBwY3Gj0QQ3SlkFhrxAyFudOFCMzNRcTU96sadIIiKuI2IOxfZBBcBiQMG/AUKbnQYdXTwYx4XnQ4ydHXPrXtu3erOeZZF1alT5+nqunW5daQgCIIgCIIgCIIgCIIgCIIgCIKgKFYqMGCSDknan3men80Mn6z6h6sA4IikxyQ9Kul2SbdKukHSvpYhr5P0taRTZva7S5LzCHAIeAv4kTIcb5HTYeA08Dpwf4HL7gfAMeD7QoUf8XhiTrcB67tinClVg2oATwLbhYsPcDIxr/ca4iyXqkXnAIvATgfFB3gwMbfzE2L1SsJCm4OAuyR9pOkP8T8l/SGp7ShmQdJFSZdaHj+ONUBm9rZjzNYkCwAWJL2v4R'+
			'Czia8kfSzpW0mbknZaZTdkw8z+zTh+HGuAmdmac9zyAC9MuL03gad6kOOkv6D/s1I71ySAfcA3DRezBZyonaOUJGC2JAD30Pzgfal2fiMSBcyOBOCVhgu4DOyvnd+IFgKqSUidIrijYfsXZvZ3bjKVGdSQkCrgaMP29dxEekLnElIFHGjYvpmbSI8YAGe7OlmqgKYXr3mbLl7tSkLbaeJrgU4kzKsArzuyuIRWc0FeAAckHXQO+4+k6x3jrTKcOxo4xrxKNQHAi5JelXRE/s+Qm53jrQKUmDuqIgBYlPRBjXNnMLhyJ7hKqPUMeKbSeXNxf0+oJWDSVHbfcX1PqCVg1t8b3EZH8zoM7QIXCSEgj2wJISCfLAkhwIfWEkKAH6tthqghwJcBiYvIQoA/z6XsHAIqEwL8+SRl5xDgy5KZfZ5yQAjwY8nM3k09KAT40Kr4'+
			'UgjwoHXxpRCQS1bxpRCQQ3bxpXoCin0e2xEuxZfqCfit0nk9WPEqvlRPwKeVzpvLivenTVVWRZjZOeC0pDMqtyzFe7m8e/GliuuCzOxD4DOVWZj1paQHHGMum9k7jvGuUnVlnJltS9r2jgv85RjO7YE7jnkdhnqNsooWX5pfAR4UL76ULqDpYTnr4/rdLHdRfCldQNP/tfdi2JoUe+COI1XATw3b785NpCd0WnwpXcDlhu1PAJ5r8muw0nXxk2Hyh9ov185vRIvvhJdq57wnmN6q4OHaOUrJAnrVvmYqwPMTLuZX4Oke5LhXAdWLnzx8ZNiu5oKkeyfsNmpXsy5pQ+3nenbM7JfUg4DzkqbdjUXmdlJpNX5n2LDpgqZ/aLEtaUt5k20XJT1rZht7PWAPAnpR/CyAk3TXsuyhxNxmpmVZ66kIMzsn6ZQKTKaN4XDi/t'+
			'81bJ/9X/5ugPso37YytWviUeDSrhivlapBdYCbgDeBHwoJSOqaeCWnUePWN4BjJa7bg1Ktix+RdKekWyTdmHGeUdfERTPbckmyZ5Ru3n1Qw97ROZTomhgEQRAEQRAEQRAEQRAEQRAEQRBcK/wHEFqG7OMNh2kAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="EXIT ICON";
		el.ggDx=1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.89999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._exit_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._exit_icon.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._vircle_info_zoom1.appendChild(me._exit_icon);
		me._container_8.appendChild(me._vircle_info_zoom1);
		me._simple_zoom0.appendChild(me._container_8);
		me.ggUse3d=true;
		me.gg3dDistance=500;
		me.__div = me._simple_zoom0;
	};
	function SkinHotspotClass_tv_tablou(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._tv_tablou=document.createElement('div');
		el.ggId="tv tablou";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tv_tablou.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._tv_tablou.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._tv_tablou.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._tv_tablou.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._tv_tablou.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._tv_tablou.ggUpdatePosition=function (useTransition) {
		}
		el=me._tv_tablou_player=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="tv tablou player";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 345px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 308px;';
		hs+='pointer-events:auto;';
		hs+='clip-path: polygon(3.2% 8.27%, 95.6% 1.67%, 92.61% 97.87%, 1.61% 81.4%)';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tv_tablou_player.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tv_tablou_player.onmouseover=function (e) {
			me.elementMouseOver['tv_tablou_player']=true;
			me._video_tablou.logicBlock_scaling();
		}
		me._tv_tablou_player.onmouseout=function (e) {
			me.elementMouseOver['tv_tablou_player']=false;
			me._video_tablou.logicBlock_scaling();
		}
		me._tv_tablou_player.ontouchend=function (e) {
			me.elementMouseOver['tv_tablou_player']=false;
			me._video_tablou.logicBlock_scaling();
		}
		me._tv_tablou_player.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._background_video_negru0=document.createElement('div');
		el.ggId="background video negru";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._background_video_negru0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._background_video_negru0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._tv_tablou_player.appendChild(me._background_video_negru0);
		el=me._video_tablou=document.createElement('div');
		els=me._video_tablou__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="video tablou";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -44px;';
		hs+='height : 140%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='background: #000000;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="transform: skew(0deg, 11deg);";
		els.setAttribute('style',hs);
		els.innerHTML="<iframe src=\"iframe\/index.html#"+me.hotspot.description+"\" style=\"border:0px #ffffff none;\" name=\"myiFrame\" scrolling=\"no\" frameborder=\"0\" marginheight=\"0px\" marginwidth=\"0px\" height=\"98%\" width=\"100%\"><\/iframe>";
		el.appendChild(els);
		me._video_tablou.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._video_tablou.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['tv_tablou_player'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._video_tablou.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._video_tablou.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._video_tablou.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me._video_tablou.ggCurrentLogicStateScaling == 0) {
					me._video_tablou.ggParameter.sx = 1.1;
					me._video_tablou.ggParameter.sy = 1.1;
					me._video_tablou.style[domTransform]=parameterToTransform(me._video_tablou.ggParameter);
				}
				else {
					me._video_tablou.ggParameter.sx = 1;
					me._video_tablou.ggParameter.sy = 1;
					me._video_tablou.style[domTransform]=parameterToTransform(me._video_tablou.ggParameter);
				}
			}
		}
		me._video_tablou.onmouseover=function (e) {
			me.elementMouseOver['video_tablou']=true;
			me._filtru_video.logicBlock_backgroundcolor();
		}
		me._video_tablou.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._video_tablou__text)
					return;
				}
			}
			me.elementMouseOver['video_tablou']=false;
			me._filtru_video.logicBlock_backgroundcolor();
		}
		me._video_tablou.ontouchend=function (e) {
			me.elementMouseOver['video_tablou']=false;
			me._filtru_video.logicBlock_backgroundcolor();
		}
		me._video_tablou.ggUpdatePosition=function (useTransition) {
		}
		el=me._filtru_video=document.createElement('div');
		el.ggId="filtru video";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.490196);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='transform: skew(0deg, 11deg);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._filtru_video.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._filtru_video.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['video_tablou'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._filtru_video.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._filtru_video.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._filtru_video.style[domTransition]='background-color 1000ms ease 0ms';
				if (me._filtru_video.ggCurrentLogicStateBackgroundColor == 0) {
					me._filtru_video.style.backgroundColor="rgba(0,0,0,0.294118)";
				}
				else {
					me._filtru_video.style.backgroundColor="rgba(0,0,0,0.490196)";
				}
			}
		}
		me._filtru_video.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._video_tablou.appendChild(me._filtru_video);
		me._tv_tablou_player.appendChild(me._video_tablou);
		me._tv_tablou.appendChild(me._tv_tablou_player);
		me.ggUse3d=true;
		me.gg3dDistance=1000;
		me.__div = me._tv_tablou;
	};
	function SkinHotspotClass_tv_bucatarie(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._tv_bucatarie=document.createElement('div');
		el.ggId="tv bucatarie";
		el.ggDx=-50;
		el.ggDy=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tv_bucatarie.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._tv_bucatarie.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._tv_bucatarie.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._tv_bucatarie.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._tv_bucatarie.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._tv_bucatarie.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_2=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="Container 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 155px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 91px;';
		hs+='pointer-events:auto;';
		hs+='clip-path: polygon(6.91% 0.27%, 92.6% 6.67%, 95.61% 97.6%, 9.61% 99.2%)';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._container_2.onmouseover=function (e) {
			me.elementMouseOver['container_2']=true;
			me._video_bucatarie.logicBlock_scaling();
		}
		me._container_2.onmouseout=function (e) {
			me.elementMouseOver['container_2']=false;
			me._video_bucatarie.logicBlock_scaling();
		}
		me._container_2.ontouchend=function (e) {
			me.elementMouseOver['container_2']=false;
			me._video_bucatarie.logicBlock_scaling();
		}
		me._container_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._background_video_negru=document.createElement('div');
		el.ggId="background video negru";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._background_video_negru.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._background_video_negru.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_2.appendChild(me._background_video_negru);
		el=me._video_bucatarie=document.createElement('div');
		els=me._video_bucatarie__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="video bucatarie";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -8px;';
		hs+='cursor : pointer;';
		hs+='height : 125%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='background: #000000;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="transform: skew(0deg, -2deg);";
		els.setAttribute('style',hs);
		els.innerHTML="<iframe src=\"iframe\/index.html#"+me.hotspot.description+"\" style=\"border:0px #ffffff none;\" name=\"myiFrame\" scrolling=\"no\" frameborder=\"0\" marginheight=\"0px\" marginwidth=\"0px\" height=\"98%\" width=\"100%\"><\/iframe>";
		el.appendChild(els);
		me._video_bucatarie.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._video_bucatarie.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['container_2'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._video_bucatarie.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._video_bucatarie.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._video_bucatarie.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me._video_bucatarie.ggCurrentLogicStateScaling == 0) {
					me._video_bucatarie.ggParameter.sx = 1.1;
					me._video_bucatarie.ggParameter.sy = 1.1;
					me._video_bucatarie.style[domTransform]=parameterToTransform(me._video_bucatarie.ggParameter);
				}
				else {
					me._video_bucatarie.ggParameter.sx = 1;
					me._video_bucatarie.ggParameter.sy = 1;
					me._video_bucatarie.style[domTransform]=parameterToTransform(me._video_bucatarie.ggParameter);
				}
			}
		}
		me._video_bucatarie.onmouseover=function (e) {
			me.elementMouseOver['video_bucatarie']=true;
			me._rectangle_9.logicBlock_backgroundcolor();
		}
		me._video_bucatarie.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._video_bucatarie__text)
					return;
				}
			}
			me.elementMouseOver['video_bucatarie']=false;
			me._rectangle_9.logicBlock_backgroundcolor();
		}
		me._video_bucatarie.ontouchend=function (e) {
			me.elementMouseOver['video_bucatarie']=false;
			me._rectangle_9.logicBlock_backgroundcolor();
		}
		me._video_bucatarie.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_9=document.createElement('div');
		el.ggId="Rectangle 9";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.490196);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='transform: skew(0deg, -2deg);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_9.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['video_bucatarie'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_9.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_9.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_9.style[domTransition]='background-color 1000ms ease 0ms';
				if (me._rectangle_9.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_9.style.backgroundColor="rgba(0,0,0,0.294118)";
				}
				else {
					me._rectangle_9.style.backgroundColor="rgba(0,0,0,0.490196)";
				}
			}
		}
		me._rectangle_9.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._video_bucatarie.appendChild(me._rectangle_9);
		me._container_2.appendChild(me._video_bucatarie);
		me._tv_bucatarie.appendChild(me._container_2);
		me.ggUse3d=true;
		me.gg3dDistance=1000;
		me.__div = me._tv_bucatarie;
	};
	function SkinHotspotClass_robinet(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._robinet=document.createElement('div');
		el.ggId="robinet";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._robinet.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._robinet.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._robinet.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._robinet.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._robinet.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._robinet.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_7=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="Container 7";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 224px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.001;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 224px;';
		hs+='pointer-events:auto;';
		hs+='clip-path: polygon(43.91% 42.27%, 50.6% 41.67%, 52.61% 52.6%, 43.61% 55.2%)';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._container_7.onclick=function (e) {
			var flag=me._container_7.ggOpacitiyActive;
			if (player.transitionsDisabled) {
				me._container_7.style[domTransition]='none';
			} else {
				me._container_7.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._container_7.style.opacity='0.001';
				me._container_7.style.visibility=me._container_7.ggVisible?'inherit':'hidden';
			} else {
				me._container_7.style.opacity='1';
				me._container_7.style.visibility=me._container_7.ggVisible?'inherit':'hidden';
			}
			me._container_7.ggOpacitiyActive=!flag;
			skin._robinet_timer.ggTimeout=Number("1") * 1000.0;
			skin._robinet_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._container_7.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs=basePath + 'images/image_2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;clip-path: polygon(6.91% 0.27%, 92.6% 6.67%, 95.61% 97.6%, 9.61% 99.2%);');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_7.appendChild(me._image_2);
		el=me._background_ajutator=document.createElement('div');
		el.ggId="background ajutator";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 0px solid rgba(0,0,0,0.415686);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._background_ajutator.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._background_ajutator.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_7.appendChild(me._background_ajutator);
		me._robinet.appendChild(me._container_7);
		me.ggUse3d=true;
		me.gg3dDistance=535;
		me.__div = me._robinet;
	};
	function SkinHotspotClass_zoom_with_info_masa(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._zoom_with_info_masa=document.createElement('div');
		el.ggId="ZOOM WITH INFO MASA";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoom_with_info_masa.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._zoom_with_info_masa.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._zoom_with_info_masa.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._zoom_with_info_masa.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._zoom_with_info_masa.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._zoom_with_info_masa.ggUpdatePosition=function (useTransition) {
		}
		el=me._vircle_info_zoom0=document.createElement('div');
		els=me._vircle_info_zoom0__img=document.createElement('img');
		els.className='ggskin ggskin_vircle_info_zoom0';
		hs=basePath + 'images/vircle_info_zoom0.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;transform: rotateX(73deg) rotateY(0deg);');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="vircle info zoom";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.85 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._vircle_info_zoom0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._vircle_info_zoom0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['vircle_info_zoom0'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._vircle_info_zoom0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._vircle_info_zoom0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._vircle_info_zoom0.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._vircle_info_zoom0.ggCurrentLogicStateScaling == 0) {
					me._vircle_info_zoom0.ggParameter.sx = 1;
					me._vircle_info_zoom0.ggParameter.sy = 1;
					me._vircle_info_zoom0.style[domTransform]=parameterToTransform(me._vircle_info_zoom0.ggParameter);
				}
				else {
					me._vircle_info_zoom0.ggParameter.sx = 0.85;
					me._vircle_info_zoom0.ggParameter.sy = 0.85;
					me._vircle_info_zoom0.style[domTransform]=parameterToTransform(me._vircle_info_zoom0.ggParameter);
				}
			}
		}
		me._vircle_info_zoom0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['vircle_info_zoom0'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._vircle_info_zoom0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._vircle_info_zoom0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._vircle_info_zoom0.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._vircle_info_zoom0.ggCurrentLogicStateAlpha == 0) {
					me._vircle_info_zoom0.style.visibility=me._vircle_info_zoom0.ggVisible?'inherit':'hidden';
					me._vircle_info_zoom0.style.opacity=1;
				}
				else {
					me._vircle_info_zoom0.style.visibility=me._vircle_info_zoom0.ggVisible?'inherit':'hidden';
					me._vircle_info_zoom0.style.opacity=0.79999;
				}
			}
		}
		me._vircle_info_zoom0.onclick=function (e) {
			player.setVariableValue('poly_target', me.hotspot.description);
			player.setVariableValue('poly_target2', me.hotspot.title);
			skin._info_popup.style[domTransition]='none';
			skin._info_popup.style.visibility=(Number(skin._info_popup.style.opacity)>0||!skin._info_popup.style.opacity)?'inherit':'hidden';
			skin._info_popup.ggVisible=true;
			if (player.transitionsDisabled) {
				skin._info_popup.style[domTransition]='none';
			} else {
				skin._info_popup.style[domTransition]='all 500ms ease-out 0ms';
			}
			skin._info_popup.style.opacity='1';
			skin._info_popup.style.visibility=skin._info_popup.ggVisible?'inherit':'hidden';
			player.moveTo(me.hotspot.pan,me.hotspot.tilt,"40","0.5");
		}
		me._vircle_info_zoom0.onmouseover=function (e) {
			me.elementMouseOver['vircle_info_zoom0']=true;
			me._vircle_info_zoom0.logicBlock_scaling();
			me._vircle_info_zoom0.logicBlock_alpha();
		}
		me._vircle_info_zoom0.onmouseout=function (e) {
			me.elementMouseOver['vircle_info_zoom0']=false;
			me._vircle_info_zoom0.logicBlock_scaling();
			me._vircle_info_zoom0.logicBlock_alpha();
		}
		me._vircle_info_zoom0.ontouchend=function (e) {
			me.elementMouseOver['vircle_info_zoom0']=false;
			me._vircle_info_zoom0.logicBlock_scaling();
			me._vircle_info_zoom0.logicBlock_alpha();
		}
		me._vircle_info_zoom0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._zoom_with_info_masa.appendChild(me._vircle_info_zoom0);
		me.ggUse3d=true;
		me.gg3dDistance=500;
		me.__div = me._zoom_with_info_masa;
	};
	function SkinHotspotClass_zoom_with_info_oglinda(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._zoom_with_info_oglinda=document.createElement('div');
		el.ggId="ZOOM WITH INFO OGLINDA";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoom_with_info_oglinda.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._zoom_with_info_oglinda.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._zoom_with_info_oglinda.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._zoom_with_info_oglinda.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._zoom_with_info_oglinda.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._zoom_with_info_oglinda.ggUpdatePosition=function (useTransition) {
		}
		el=me._vircle_info_zoom=document.createElement('div');
		els=me._vircle_info_zoom__img=document.createElement('img');
		els.className='ggskin ggskin_vircle_info_zoom';
		hs=basePath + 'images/vircle_info_zoom.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;transform: rotateX(-3deg) rotateY(4deg);');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="vircle info zoom";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.85 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._vircle_info_zoom.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._vircle_info_zoom.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['vircle_info_zoom'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._vircle_info_zoom.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._vircle_info_zoom.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._vircle_info_zoom.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._vircle_info_zoom.ggCurrentLogicStateScaling == 0) {
					me._vircle_info_zoom.ggParameter.sx = 1;
					me._vircle_info_zoom.ggParameter.sy = 1;
					me._vircle_info_zoom.style[domTransform]=parameterToTransform(me._vircle_info_zoom.ggParameter);
				}
				else {
					me._vircle_info_zoom.ggParameter.sx = 0.85;
					me._vircle_info_zoom.ggParameter.sy = 0.85;
					me._vircle_info_zoom.style[domTransform]=parameterToTransform(me._vircle_info_zoom.ggParameter);
				}
			}
		}
		me._vircle_info_zoom.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['vircle_info_zoom'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._vircle_info_zoom.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._vircle_info_zoom.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._vircle_info_zoom.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._vircle_info_zoom.ggCurrentLogicStateAlpha == 0) {
					me._vircle_info_zoom.style.visibility=me._vircle_info_zoom.ggVisible?'inherit':'hidden';
					me._vircle_info_zoom.style.opacity=1;
				}
				else {
					me._vircle_info_zoom.style.visibility=me._vircle_info_zoom.ggVisible?'inherit':'hidden';
					me._vircle_info_zoom.style.opacity=0.79999;
				}
			}
		}
		me._vircle_info_zoom.onclick=function (e) {
			player.setVariableValue('poly_target', me.hotspot.description);
			player.setVariableValue('poly_target2', me.hotspot.title);
			skin._info_popup.style[domTransition]='none';
			skin._info_popup.style.visibility=(Number(skin._info_popup.style.opacity)>0||!skin._info_popup.style.opacity)?'inherit':'hidden';
			skin._info_popup.ggVisible=true;
			if (player.transitionsDisabled) {
				skin._info_popup.style[domTransition]='none';
			} else {
				skin._info_popup.style[domTransition]='all 500ms ease-out 0ms';
			}
			skin._info_popup.style.opacity='1';
			skin._info_popup.style.visibility=skin._info_popup.ggVisible?'inherit':'hidden';
			player.moveTo(me.hotspot.pan,me.hotspot.tilt,"40","0.5");
		}
		me._vircle_info_zoom.onmouseover=function (e) {
			me.elementMouseOver['vircle_info_zoom']=true;
			me._vircle_info_zoom.logicBlock_scaling();
			me._vircle_info_zoom.logicBlock_alpha();
		}
		me._vircle_info_zoom.onmouseout=function (e) {
			me.elementMouseOver['vircle_info_zoom']=false;
			me._vircle_info_zoom.logicBlock_scaling();
			me._vircle_info_zoom.logicBlock_alpha();
		}
		me._vircle_info_zoom.ontouchend=function (e) {
			me.elementMouseOver['vircle_info_zoom']=false;
			me._vircle_info_zoom.logicBlock_scaling();
			me._vircle_info_zoom.logicBlock_alpha();
		}
		me._vircle_info_zoom.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._zoom_with_info_oglinda.appendChild(me._vircle_info_zoom);
		me.ggUse3d=true;
		me.gg3dDistance=500;
		me.__div = me._zoom_with_info_oglinda;
	};
	function SkinHotspotClass_node_circle_node_living_x_dormitor(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._node_circle_node_living_x_dormitor=document.createElement('div');
		el.ggId="NODE CIRCLE NODE LIVING X DORMITOR";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_circle_node_living_x_dormitor.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._node_circle_node_living_x_dormitor.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._node_circle_node_living_x_dormitor.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._node_circle_node_living_x_dormitor.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._node_circle_node_living_x_dormitor.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._node_circle_node_living_x_dormitor.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_circle_node_living_x_dormitor=document.createElement('div');
		el.ggId="CONTAINER CIRCLE NODE LIVING X DORMITOR";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 115px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.001;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 115px;';
		hs+='pointer-events:none;';
		hs+='transform: rotateX(-3deg) rotateY(4deg)';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_circle_node_living_x_dormitor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._container_circle_node_living_x_dormitor.onmouseover=function (e) {
			me.elementMouseOver['container_circle_node_living_x_dormitor']=true;
			me._circle_imagine_living_x_dormitor.logicBlock_alpha();
			me._circle_imagine_living_x_dormitor.logicBlock_scaling();
			me._circle_shadow_living_x_dormitor.logicBlock_scaling();
		}
		me._container_circle_node_living_x_dormitor.onmouseout=function (e) {
			me.elementMouseOver['container_circle_node_living_x_dormitor']=false;
			me._circle_imagine_living_x_dormitor.logicBlock_alpha();
			me._circle_imagine_living_x_dormitor.logicBlock_scaling();
			me._circle_shadow_living_x_dormitor.logicBlock_scaling();
		}
		me._container_circle_node_living_x_dormitor.ontouchend=function (e) {
			me.elementMouseOver['container_circle_node_living_x_dormitor']=false;
			me._circle_imagine_living_x_dormitor.logicBlock_alpha();
			me._circle_imagine_living_x_dormitor.logicBlock_scaling();
			me._circle_shadow_living_x_dormitor.logicBlock_scaling();
		}
		me._container_circle_node_living_x_dormitor.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._circle_imagine_living_x_dormitor=document.createElement('div');
		els=me._circle_imagine_living_x_dormitor__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/circle_imagine_living_x_dormitor_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;border-radius: 50%; filter: blur(0.3px);;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="CIRCLE IMAGINE LIVING X DORMITOR";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='opacity : 0.49999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._circle_imagine_living_x_dormitor.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._circle_imagine_living_x_dormitor.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['container_circle_node_living_x_dormitor'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._circle_imagine_living_x_dormitor.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._circle_imagine_living_x_dormitor.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._circle_imagine_living_x_dormitor.style[domTransition]='' + cssPrefix + 'transform 900ms ease 0ms, opacity 500ms ease 0ms';
				if (me._circle_imagine_living_x_dormitor.ggCurrentLogicStateScaling == 0) {
					me._circle_imagine_living_x_dormitor.ggParameter.sx = 1;
					me._circle_imagine_living_x_dormitor.ggParameter.sy = 1;
					me._circle_imagine_living_x_dormitor.style[domTransform]=parameterToTransform(me._circle_imagine_living_x_dormitor.ggParameter);
				}
				else {
					me._circle_imagine_living_x_dormitor.ggParameter.sx = 0;
					me._circle_imagine_living_x_dormitor.ggParameter.sy = 0;
					me._circle_imagine_living_x_dormitor.style[domTransform]=parameterToTransform(me._circle_imagine_living_x_dormitor.ggParameter);
				}
			}
		}
		me._circle_imagine_living_x_dormitor.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['container_circle_node_living_x_dormitor'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._circle_imagine_living_x_dormitor.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._circle_imagine_living_x_dormitor.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._circle_imagine_living_x_dormitor.style[domTransition]='' + cssPrefix + 'transform 900ms ease 0ms, opacity 500ms ease 0ms';
				if (me._circle_imagine_living_x_dormitor.ggCurrentLogicStateAlpha == 0) {
					me._circle_imagine_living_x_dormitor.style.visibility=me._circle_imagine_living_x_dormitor.ggVisible?'inherit':'hidden';
					me._circle_imagine_living_x_dormitor.style.opacity=1;
				}
				else {
					me._circle_imagine_living_x_dormitor.style.visibility=me._circle_imagine_living_x_dormitor.ggVisible?'inherit':'hidden';
					me._circle_imagine_living_x_dormitor.style.opacity=0.49999;
				}
			}
		}
		me._circle_imagine_living_x_dormitor.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_circle_node_living_x_dormitor.appendChild(me._circle_imagine_living_x_dormitor);
		el=me._circle_shadow_living_x_dormitor=document.createElement('div');
		el.ggId="CIRCLE SHADOW LIVING X DORMITOR";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: inset 0.25em 0.25em 1em rgba(0, 0,0, 0.5); overflow: hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._circle_shadow_living_x_dormitor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circle_shadow_living_x_dormitor.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['container_circle_node_living_x_dormitor'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._circle_shadow_living_x_dormitor.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._circle_shadow_living_x_dormitor.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._circle_shadow_living_x_dormitor.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._circle_shadow_living_x_dormitor.ggCurrentLogicStateScaling == 0) {
					me._circle_shadow_living_x_dormitor.ggParameter.sx = 1;
					me._circle_shadow_living_x_dormitor.ggParameter.sy = 1;
					me._circle_shadow_living_x_dormitor.style[domTransform]=parameterToTransform(me._circle_shadow_living_x_dormitor.ggParameter);
				}
				else {
					me._circle_shadow_living_x_dormitor.ggParameter.sx = 0.8;
					me._circle_shadow_living_x_dormitor.ggParameter.sy = 0.8;
					me._circle_shadow_living_x_dormitor.style[domTransform]=parameterToTransform(me._circle_shadow_living_x_dormitor.ggParameter);
				}
			}
		}
		me._circle_shadow_living_x_dormitor.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_circle_node_living_x_dormitor.appendChild(me._circle_shadow_living_x_dormitor);
		el=me._circle_living_x_dormitor=document.createElement('div');
		els=me._circle_living_x_dormitor__img=document.createElement('img');
		els.className='ggskin ggskin_circle_living_x_dormitor';
		hs=basePath + 'images/circle_living_x_dormitor.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="CIRCLE LIVING X DORMITOR";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.85 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 168px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 168px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._circle_living_x_dormitor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circle_living_x_dormitor.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['circle_living_x_dormitor'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._circle_living_x_dormitor.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._circle_living_x_dormitor.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._circle_living_x_dormitor.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._circle_living_x_dormitor.ggCurrentLogicStateScaling == 0) {
					me._circle_living_x_dormitor.ggParameter.sx = 1;
					me._circle_living_x_dormitor.ggParameter.sy = 1;
					me._circle_living_x_dormitor.style[domTransform]=parameterToTransform(me._circle_living_x_dormitor.ggParameter);
				}
				else {
					me._circle_living_x_dormitor.ggParameter.sx = 0.85;
					me._circle_living_x_dormitor.ggParameter.sy = 0.85;
					me._circle_living_x_dormitor.style[domTransform]=parameterToTransform(me._circle_living_x_dormitor.ggParameter);
				}
			}
		}
		me._circle_living_x_dormitor.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['circle_living_x_dormitor'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._circle_living_x_dormitor.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._circle_living_x_dormitor.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._circle_living_x_dormitor.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._circle_living_x_dormitor.ggCurrentLogicStateAlpha == 0) {
					me._circle_living_x_dormitor.style.visibility=me._circle_living_x_dormitor.ggVisible?'inherit':'hidden';
					me._circle_living_x_dormitor.style.opacity=1;
				}
				else {
					me._circle_living_x_dormitor.style.visibility=me._circle_living_x_dormitor.ggVisible?'inherit':'hidden';
					me._circle_living_x_dormitor.style.opacity=0.79999;
				}
			}
		}
		me._circle_living_x_dormitor.onmouseover=function (e) {
			me.elementMouseOver['circle_living_x_dormitor']=true;
			me._circle_living_x_dormitor.logicBlock_scaling();
			me._circle_living_x_dormitor.logicBlock_alpha();
		}
		me._circle_living_x_dormitor.onmouseout=function (e) {
			me.elementMouseOver['circle_living_x_dormitor']=false;
			me._circle_living_x_dormitor.logicBlock_scaling();
			me._circle_living_x_dormitor.logicBlock_alpha();
		}
		me._circle_living_x_dormitor.ontouchend=function (e) {
			me.elementMouseOver['circle_living_x_dormitor']=false;
			me._circle_living_x_dormitor.logicBlock_scaling();
			me._circle_living_x_dormitor.logicBlock_alpha();
		}
		me._circle_living_x_dormitor.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_circle_node_living_x_dormitor.appendChild(me._circle_living_x_dormitor);
		me._node_circle_node_living_x_dormitor.appendChild(me._container_circle_node_living_x_dormitor);
		me.ggUse3d=true;
		me.gg3dDistance=2500;
		me.__div = me._node_circle_node_living_x_dormitor;
	};
	function SkinHotspotClass_node_open_door_living_x_dormitor(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._node_open_door_living_x_dormitor=document.createElement('div');
		el.ggId="NODE OPEN DOOR LIVING X DORMITOR";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_open_door_living_x_dormitor.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._node_open_door_living_x_dormitor.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._node_open_door_living_x_dormitor.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._node_open_door_living_x_dormitor.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._node_open_door_living_x_dormitor.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._node_open_door_living_x_dormitor.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_open_door_living_x_dormitor=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="CONTAINER OPEN DOOR LIVING X DORMITOR";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 464px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 464px;';
		hs+='pointer-events:auto;';
		hs+='clip-path: polygon(42.6% 32%, 58.9% 31.5%, 58.5% 71.9%, 43% 71%)';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_open_door_living_x_dormitor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._container_open_door_living_x_dormitor.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._image_open_door_living_dormitor=document.createElement('div');
		els=me._image_open_door_living_dormitor__img=document.createElement('img');
		els.className='ggskin ggskin_image_open_door_living_dormitor';
		hs=basePath + 'images/image_open_door_living_dormitor.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;aclip-path: polygon(6.91% 0.27%, 92.6% 6.67%, 95.61% 97.6%, 9.61% 99.2%);');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="IMAGE OPEN DOOR (LIVING > DORMITOR)";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._image_open_door_living_dormitor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_open_door_living_dormitor.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_open_door_living_x_dormitor.appendChild(me._image_open_door_living_dormitor);
		el=me._background_ajutator_for_editing=document.createElement('div');
		el.ggId="BACKGROUND AJUTATOR (FOR EDITING)";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 0px solid rgba(0,0,0,0.415686);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._background_ajutator_for_editing.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._background_ajutator_for_editing.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_open_door_living_x_dormitor.appendChild(me._background_ajutator_for_editing);
		me._node_open_door_living_x_dormitor.appendChild(me._container_open_door_living_x_dormitor);
		me.ggUse3d=true;
		me.gg3dDistance=522;
		me.__div = me._node_open_door_living_x_dormitor;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='SIMPLE ZOOM') {
			hotspot.skinid = 'SIMPLE ZOOM';
			hsinst = new SkinHotspotClass_simple_zoom0(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_simple_zoom0_mouseover();;
		} else
		if (hotspot.skinid=='tv tablou') {
			hotspot.skinid = 'tv tablou';
			hsinst = new SkinHotspotClass_tv_tablou(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_tv_tablou_mouseover();;
		} else
		if (hotspot.skinid=='tv bucatarie') {
			hotspot.skinid = 'tv bucatarie';
			hsinst = new SkinHotspotClass_tv_bucatarie(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_tv_bucatarie_mouseover();;
		} else
		if (hotspot.skinid=='robinet') {
			hotspot.skinid = 'robinet';
			hsinst = new SkinHotspotClass_robinet(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ZOOM WITH INFO MASA') {
			hotspot.skinid = 'ZOOM WITH INFO MASA';
			hsinst = new SkinHotspotClass_zoom_with_info_masa(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_zoom_with_info_masa_mouseover();;
		} else
		if (hotspot.skinid=='ZOOM WITH INFO OGLINDA') {
			hotspot.skinid = 'ZOOM WITH INFO OGLINDA';
			hsinst = new SkinHotspotClass_zoom_with_info_oglinda(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_zoom_with_info_oglinda_mouseover();;
		} else
		if (hotspot.skinid=='NODE CIRCLE NODE LIVING X DORMITOR') {
			hotspot.skinid = 'NODE CIRCLE NODE LIVING X DORMITOR';
			hsinst = new SkinHotspotClass_node_circle_node_living_x_dormitor(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_node_circle_node_living_x_dormitor_mouseover();;
			me.callChildLogicBlocksHotspot_node_circle_node_living_x_dormitor_mouseover();;
		} else
		{
			hotspot.skinid = 'NODE OPEN DOOR LIVING X DORMITOR';
			hsinst = new SkinHotspotClass_node_open_door_living_x_dormitor(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['SIMPLE ZOOM']) {
			var i;
			for(i = 0; i < hotspotTemplates['SIMPLE ZOOM'].length; i++) {
				hotspotTemplates['SIMPLE ZOOM'][i] = null;
			}
		}
		if(hotspotTemplates['tv tablou']) {
			var i;
			for(i = 0; i < hotspotTemplates['tv tablou'].length; i++) {
				hotspotTemplates['tv tablou'][i] = null;
			}
		}
		if(hotspotTemplates['tv bucatarie']) {
			var i;
			for(i = 0; i < hotspotTemplates['tv bucatarie'].length; i++) {
				hotspotTemplates['tv bucatarie'][i] = null;
			}
		}
		if(hotspotTemplates['robinet']) {
			var i;
			for(i = 0; i < hotspotTemplates['robinet'].length; i++) {
				hotspotTemplates['robinet'][i] = null;
			}
		}
		if(hotspotTemplates['ZOOM WITH INFO MASA']) {
			var i;
			for(i = 0; i < hotspotTemplates['ZOOM WITH INFO MASA'].length; i++) {
				hotspotTemplates['ZOOM WITH INFO MASA'][i] = null;
			}
		}
		if(hotspotTemplates['ZOOM WITH INFO OGLINDA']) {
			var i;
			for(i = 0; i < hotspotTemplates['ZOOM WITH INFO OGLINDA'].length; i++) {
				hotspotTemplates['ZOOM WITH INFO OGLINDA'][i] = null;
			}
		}
		if(hotspotTemplates['NODE CIRCLE NODE LIVING X DORMITOR']) {
			var i;
			for(i = 0; i < hotspotTemplates['NODE CIRCLE NODE LIVING X DORMITOR'].length; i++) {
				hotspotTemplates['NODE CIRCLE NODE LIVING X DORMITOR'][i] = null;
			}
		}
		if(hotspotTemplates['NODE OPEN DOOR LIVING X DORMITOR']) {
			var i;
			for(i = 0; i < hotspotTemplates['NODE OPEN DOOR LIVING X DORMITOR'].length; i++) {
				hotspotTemplates['NODE OPEN DOOR LIVING X DORMITOR'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('html { position: fixed; height: 100%; overflow: hidden; } body { width: 100vw; height: 100vh; overflow-y: scroll; overflow-x: scroll; -webkit-overflow-scrolling: touch; } ::-webkit-scrollbar { width: 0px; /* Grosimea barei de derulare verticală */ height: 0px; /* Grosimea barei de derulare orizontală */ } .ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; } .ggskin.info { font-family: "Playwrite NL", cursive; font-size: 14px; } .ggskin.info2 { font-family: "Passion One", sans-serif; font-size: 14px; }'));
	document.head.appendChild(style);
	me._float_cursor.logicBlock_visible();
	me._poligoane.logicBlock_visible();
	me._google_maps.logicBlock_visible();
	me._dreapta.logicBlock_visible();
	me._stanga_pc.logicBlock_visible();
	me._dreapta_telefon.logicBlock_visible();
	me._stanga_telefon.logicBlock_visible();
	me._rectangle_30.logicBlock_size();
	me._interface_mobile.logicBlock_visible();
	me._interface_pc.logicBlock_visible();
	me._rectangle_3.logicBlock_size();
	player.addListener('changenode', function(args) { me._float_cursor.logicBlock_visible();me._poligoane.logicBlock_visible();me._google_maps.logicBlock_visible(); });
	player.addListener('configloaded', function(args) { me._dreapta.logicBlock_visible();me._stanga_pc.logicBlock_visible();me._dreapta_telefon.logicBlock_visible();me._stanga_telefon.logicBlock_visible();me._float_cursor.logicBlock_visible();me._rectangle_30.logicBlock_size();me._interface_mobile.logicBlock_visible();me._interface_pc.logicBlock_visible();me._rectangle_3.logicBlock_size(); });
	player.addListener('activehotspotchanged', function(args) { me._float_cursor.logicBlock_visible(); });
	player.addListener('varchanged_maps', function(args) { me._google_maps.logicBlock_visible(); });
	player.addListener('varchanged_POLIGON', function(args) { me._poligoane.logicBlock_visible(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_simple_zoom0_mouseover();me.callChildLogicBlocksHotspot_zoom_with_info_masa_mouseover();me.callChildLogicBlocksHotspot_zoom_with_info_oglinda_mouseover();me.callChildLogicBlocksHotspot_node_circle_node_living_x_dormitor_mouseover(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_tv_tablou_mouseover();me.callChildLogicBlocksHotspot_tv_bucatarie_mouseover();me.callChildLogicBlocksHotspot_node_circle_node_living_x_dormitor_mouseover(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};