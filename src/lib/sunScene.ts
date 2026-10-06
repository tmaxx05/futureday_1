// @ts-nocheck
// Cảnh mái nhà 3D: mặt trời di chuyển và ánh sáng đổi theo (kéo chuột, chạm hoặc phím mũi tên).
export function mountScene(svgEl, heroEl) {
var dead=false,raf=0;
['r-ton','r-be','r-xn'].forEach(function(id){svgEl.querySelector('#'+id).replaceChildren()});
function hx(h){return[1,3,5].map(function(i){return parseInt(h.substr(i,2),16)})}
function mx(a,b,t){return'rgb('+a.map(function(v,i){return Math.round(v+(b[i]-v)*t)}).join(',')+')'}
var svg=svgEl,hero=heroEl,halo=svgEl.querySelector('#halo'),disc=svgEl.querySelector('#disc'),shd=svgEl.querySelector('#shadow'),st0=svgEl.querySelector('#st0'),st1=svgEl.querySelector('#st1'),cur='ton',lx=260,ly=60,ca=1.5;
var E={ton:[100,420,135],be:[85,440,115],xn:[60,470,100]};
var NS='http://www.w3.org/2000/svg',COL={w:['#B9A99A','#FFF5E6'],r:['#5A6670','#E8F0F6'],p:['#0F2F55','#9AD4FF'],g:['#4F7898','#EAF8FF'],c:['#8E9094','#F3F4F6'],d:['#7A4E2D','#E3A86A'],l:['#2F6B3F','#88CE76'],m:['#707A84','#E0E7ED']};
function mk(g,t,a){var e=document.createElementNS(NS,t);for(var k in a)e.setAttribute(k,a[k]);g.appendChild(e);return e}
function pj(o,q){return(o+q[0]+.42*q[2]).toFixed(1)+','+(262-q[1]-.24*q[2]).toFixed(1)}
function F(g,o,P,c,pv){var a=P[0],b=P[1],d=P[2],u=[b[0]-a[0],b[1]-a[1],b[2]-a[2]],v=[d[0]-a[0],d[1]-a[1],d[2]-a[2]],n=[u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0]],m=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2])||1;n=n.map(function(q){return q/m});if(n[0]*.4+n[1]*.4-n[2]<0)n=n.map(function(q){return-q});return mk(g,'polygon',{'class':'lit','data-n':n.join(','),'data-d':COL[c][0],'data-l':COL[c][1],'data-p':pv?1:0,points:P.map(function(q){return pj(o,q)}).join(' ')})}
function Ls(g,o,S,st,w,op){mk(g,'path',{d:S.map(function(s){return'M'+pj(o,s[0])+'L'+pj(o,s[1])}).join(''),fill:'none',stroke:st,'stroke-width':w,'stroke-opacity':op,'stroke-linecap':'round'})}
function G(g,o,A,B,C,D,nu,nv){F(g,o,[A,B,C,D],'m');function Q(s,t){return[0,1,2].map(function(i){return A[i]*(1-s)*(1-t)+B[i]*s*(1-t)+C[i]*s*t+D[i]*(1-s)*t})}
 for(var i=0;i<nu;i++)for(var j=0;j<nv;j++){var e=.07;F(g,o,[Q((i+e)/nu,(j+e)/nv),Q((i+1-e)/nu,(j+e)/nv),Q((i+1-e)/nu,(j+1-e)/nv),Q((i+e)/nu,(j+1-e)/nv)],'p',1)}}
function X(g,o,x,y,z,w,h,d,c){F(g,o,[[x,y,z],[x+w,y,z],[x+w,y+h,z],[x,y+h,z]],c);F(g,o,[[x+w,y,z],[x+w,y,z+d],[x+w,y+h,z+d],[x+w,y+h,z]],c);F(g,o,[[x,y+h,z],[x+w,y+h,z],[x+w,y+h,z+d],[x,y+h,z+d]],c)}
function Bu(g,cx,cy,rx,ry){mk(g,'ellipse',{'class':'lit',cx:cx,cy:cy,rx:rx,ry:ry,'data-d':COL.l[0],'data-l':COL.l[1]})}
function Wn(g,o,x0,y0,x1,y1,z){var mx=(x0+x1)/2,my=(y0+y1)/2;F(g,o,[[x0,y0,z],[x1,y0,z],[x1,y1,z],[x0,y1,z]],'g');Ls(g,o,[[[mx,y0,z],[mx,y1,z]],[[x0,my,z],[x1,my,z]]],'#fff',1.4,.8)}
(function(){var g=svgEl.querySelector('#r-ton'),o=105,W=250,H=88,R=48,D=110;
function s(x,v){return[x,H+R*v,-12+67*v]}
F(g,o,[[0,0,0],[W,0,0],[W,H,0],[0,H,0]],'w');
F(g,o,[[W,0,0],[W,0,D],[W,H,D],[W,H,0]],'w');
F(g,o,[[W,H,0],[W,H,D],[W,H+R,D/2]],'w');
Wn(g,o,26,26,82,66,0);Wn(g,o,168,26,224,66,0);
F(g,o,[[108,0,0],[142,0,0],[142,62,0],[108,62,0]],'d');
F(g,o,[[W,26,26],[W,26,78],[W,64,78],[W,64,26]],'g');
F(g,o,[[W,H+10,D/2-9],[W,H+10,D/2+9],[W,H+26,D/2+9],[W,H+26,D/2-9]],'g');
F(g,o,[s(-10,0),s(W+10,0),s(W+10,1),s(-10,1)],'r');
var L=[];for(var x=-2;x<W+10;x+=8)L.push([s(x,0),s(x,1)]);Ls(g,o,L,'#000',1,.13);
F(g,o,[s(-10,0),s(W+10,0),[W+10,H-6,-12],[-10,H-6,-12]],'m');
Ls(g,o,[[s(-10,1),s(W+10,1)]],'#6B7782',4,1);
X(g,o,224,127,38,16,36,10,'c');
G(g,o,s(22,.12),s(200,.12),s(200,.88),s(22,.88),6,3);
Bu(g,o+8,254,32,17);Bu(g,o+W+12,255,36,15)})();
(function(){var g=svgEl.querySelector('#r-be'),o=85;
F(g,o,[[0,0,0],[300,0,0],[300,62,0],[0,62,0]],'w');
F(g,o,[[300,0,0],[300,0,110],[300,62,110],[300,62,0]],'w');
F(g,o,[[0,62,0],[300,62,0],[300,62,110],[0,62,110]],'c');
F(g,o,[[0,62,0],[300,62,0],[300,68,0],[0,68,0]],'c');
F(g,o,[[300,62,0],[300,62,110],[300,68,110],[300,68,0]],'c');
Wn(g,o,16,12,92,52,0);Wn(g,o,104,12,180,52,0);Wn(g,o,192,12,268,52,0);
F(g,o,[[300,12,22],[300,12,88],[300,52,88],[300,52,22]],'g');
F(g,o,[[20,62,10],[190,62,10],[190,118,10],[20,118,10]],'w');
F(g,o,[[190,62,10],[190,62,90],[190,118,90],[190,118,10]],'w');
F(g,o,[[20,118,10],[190,118,10],[190,118,90],[20,118,90]],'c');
Wn(g,o,36,76,174,106,10);
function K(x,w,y,z0,dz,r){G(g,o,[x,y,z0],[x+w,y,z0],[x+w,y+r,z0+dz],[x,y+r,z0+dz],4,2)}
K(30,44,119,30,34,26);K(84,44,119,30,34,26);K(138,44,119,30,34,26);
K(204,38,69,40,30,22);K(248,38,69,40,30,22);
Bu(g,o+10,254,30,15);Bu(g,o+312,255,30,14)})();
(function(){var g=svgEl.querySelector('#r-xn'),o=60,W=340,H=72;
F(g,o,[[0,0,0],[W,0,0],[W,H,0],[0,H,0]],'w');
F(g,o,[[W,0,0],[W,0,120],[W,H,120],[W,H,0]],'w');
var L=[];for(var x=14;x<W;x+=14)L.push([[x,0,0],[x,H,0]]);Ls(g,o,L,'#000',1,.08);
[36,126].forEach(function(x){F(g,o,[[x,0,0],[x+70,0,0],[x+70,50,0],[x,50,0]],'m');var S=[];for(var y=8;y<50;y+=8)S.push([[x,y,0],[x+70,y,0]]);Ls(g,o,S,'#000',1,.22)});
Wn(g,o,224,32,324,58,0);
F(g,o,[[W,0,30],[W,0,66],[W,46,66],[W,46,30]],'m');
function sl(x,v,z){return[x,H+18*v,z+40*v]}
for(var k=2;k>=0;k--){var z=40*k;
 F(g,o,[[-6,H,z],[W+6,H,z],[W+6,H+18,z+40],[-6,H+18,z+40]],'r');
 G(g,o,sl(14,.12,z),sl(326,.12,z),sl(326,.88,z),sl(14,.88,z),9,2);
 F(g,o,[[W+6,H,z],[W+6,H+18,z+40],[W+6,H,z+40]],'w');
 if(k==2)X(g,o,22,76,86,16,44,10,'c')}
Bu(g,o+8,254,28,14);Bu(g,o+W+30,255,30,14)})();
var lit=[].map.call(svg.querySelectorAll('.lit'),function(e){var b=e.getBBox(),n=e.getAttribute('data-n');return{e:e,x:b.x+b.width/2,y:b.y+b.height/2,n:n?n.split(',').map(Number):null,d:hx(e.getAttribute('data-d')),l:hx(e.getAttribute('data-l')),p:e.getAttribute('data-p')==='1'}});
function frame(sx,sy){
  lx=sx;ly=sy;
  var el=Math.max(0,Math.min(1,(262-sy)/190)),w=Math.sqrt(el);
  halo.setAttribute('cx',sx);halo.setAttribute('cy',sy);disc.setAttribute('cx',sx);disc.setAttribute('cy',sy);
  disc.setAttribute('fill',mx([255,120,30],[255,205,45],w));
  st0.setAttribute('stop-color',mx([232,140,120],[104,184,242],w));
  st1.setAttribute('stop-color',mx([255,150,70],[255,238,196],w));
  lit.forEach(function(o){
    var k;
    if(o.n){var dx=sx-o.x,dy=o.y-sy,L=Math.sqrt(dx*dx+dy*dy+22500);k=Math.max(0,(o.n[0]*dx+o.n[1]*dy-150*o.n[2])/L);k=.12+.88*k;if(o.p)k=k*k}
    else k=.3+.7*w;
    o.e.style.fill=mx(o.d,o.l,Math.min(1,k*(.6+.4*w)));
  });
  var e=E[cur],c=(e[0]+e[1])/2,Ls=Math.min(260,e[2]*Math.abs(sx-c)/Math.max(40,262-sy)),x0=sx<c?e[0]+20:e[0]-Ls,x1=Math.min(520,x0+(e[1]-e[0]-20)+Ls);x0=Math.max(0,x0);
  shd.setAttribute('x',x0);shd.setAttribute('width',Math.max(0,x1-x0));shd.setAttribute('opacity',(.36*(.4+.6*w)).toFixed(2));
  hero.style.setProperty('--gx',(8+(sx-25)/470*60).toFixed(1)+'%');
  hero.style.setProperty('--ga',(.45+.5*w).toFixed(2));
}
var A0=.06*Math.PI,AR=.88*Math.PI,P=26000,drag=false,t0=performance.now()-P/4,reduce=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
function place(a){ca=a;frame(260-235*Math.cos(a),252-195*Math.sin(a))}
function relight(){frame(lx,ly)}
function sync(a){var ph=Math.max(0,Math.min(1,(a-A0)/AR));t0=performance.now()-Math.acos(1-2*ph)/(2*Math.PI)*P}
function ang(ev){var r=svg.getBoundingClientRect(),x=(ev.clientX-r.left)*520/r.width;return Math.max(A0,Math.min(A0+AR,Math.acos(Math.max(-1,Math.min(1,(260-x)/235)))))}
function tick(now){if(!drag&&!reduce)place(A0+(1-Math.cos((now-t0)/P*2*Math.PI))/2*AR);if(!dead)raf=requestAnimationFrame(tick)}
svg.addEventListener('pointerdown',function(ev){drag=true;svg.setPointerCapture(ev.pointerId);place(ang(ev))});
svg.addEventListener('pointermove',function(ev){if(drag)place(ang(ev))});
function endDrag(ev){if(!drag)return;drag=false;sync(ang(ev))}
svg.addEventListener('pointerup',endDrag);svg.addEventListener('pointercancel',endDrag);
svg.addEventListener('keydown',function(ev){var d=ev.key==='ArrowRight'?-.08:ev.key==='ArrowLeft'?.08:0;if(!d)return;ev.preventDefault();var a=Math.max(A0,Math.min(A0+AR,ca+d*Math.PI*-1));place(a);sync(a)});
place(A0+AR/2);raf=requestAnimationFrame(tick);
return{setRoof:function(k){['ton','be','xn'].forEach(function(r){svgEl.querySelector('#r-'+r).style.visibility=(r===k)?'visible':'hidden'});cur=k;relight()},destroy:function(){dead=true;cancelAnimationFrame(raf)}};
}
