const C=[
{n:"Origen",a:["Natural","Surge sin intervención humana.","Un ecosistema, el sistema solar."],b:["Artificial","Lo diseña y construye el ser humano.","Un software, una fábrica."]},
{n:"Relación con el entorno",a:["Abierto","Intercambia materia, energía e información con su ambiente.","Una célula, una empresa."],b:["Cerrado","Casi no intercambia con el exterior; es un caso ideal.","Un reloj de cuerda, un frasco sellado."]},
{n:"Naturaleza",a:["Concreto","Sus elementos son físicos y tangibles.","Un computador, un edificio."],b:["Abstracto","Sus elementos son ideas o símbolos.","Un idioma, una teoría matemática."]},
{n:"Dinámica",a:["Estático","Casi no cambia con el tiempo.","Un puente de concreto en reposo."],b:["Dinámico","Cambia y evoluciona en el tiempo.","Una economía, un ser vivo."]},
{n:"Predecibilidad",a:["Determinístico","Mismas entradas, mismos resultados.","Una calculadora, una receta exacta."],b:["Probabilístico","Hay incertidumbre en el resultado.","El clima, la bolsa de valores."]}];
const K=[["Totalidad","El todo es distinto de la suma de sus partes: lo que importa es la interrelación."],["Sinergia","Al trabajar juntas, las partes logran más que por separado."],["Entropía","Tendencia al desorden y desgaste si no recibe energía ni información."],["Homeostasis","Capacidad de mantener el equilibrio frente a cambios del entorno."],["Equifinalidad","Se puede llegar al mismo objetivo por distintos caminos."],["Jerarquía","Los sistemas se componen de subsistemas y forman parte de suprasistemas."],["Límites y entorno","El límite separa el sistema de su ambiente, con el que intercambia."],["Objetivo y retroalimentación","Tiene un propósito y se corrige con la información de sus salidas."]];
const $=i=>document.getElementById(i);
const tabs=$("tabs"),tb=$("tabbody");
C.forEach((c,i)=>{const b=document.createElement("button");b.role="tab";b.textContent=c.n;b.onclick=()=>show(i);tabs.appendChild(b)});
function show(i){[...tabs.children].forEach((b,j)=>b.setAttribute("aria-selected",i==j));const c=C[i];
tb.innerHTML='<div class="two">'+[c.a,c.b].map(x=>`<div class="card"><h3>${x[0]}</h3><p>${x[1]}</p><p class="ex">Ejemplo: ${x[2]}</p></div>`).join("")+"</div><p class=\"src\">Fuente: "+SRC[i]+"</p>"}
const SRC=["basado en Johansen (1993) y Von Bertalanffy (1976).","basado en Von Bertalanffy (1976) y Kast y Rosenzweig (1987).","basado en Van Gigch (1987) y Johansen (1993).","basado en Johansen (1993) y Chiavenato (2006).","basado en Johansen (1993) y Van Gigch (1987)."];show(0);
$("cg").innerHTML=K.map(k=>`<div class="card"><h3>${k[0]}</h3><p>${k[1]}</p></div>`).join("");
function mc(id,qs,scored){let sc=0,done=0;const el=$(id);
qs.forEach((q,qi)=>{const d=document.createElement("div");d.className="card q";d.innerHTML=`<p>${qi+1}. ${q[0]}</p>`;const f=document.createElement("p");f.className="fb";
q[1].forEach((o,oi)=>{const b=document.createElement("button");b.className="opt";b.textContent=o;b.onclick=()=>{[...d.querySelectorAll(".opt")].forEach((x,k)=>{x.disabled=true;if(k==q[2]){x.classList.add("ok");x.insertAdjacentHTML("beforeend",'<span class="mk">✔</span>')}});
const right=oi==q[2];if(!right){b.classList.add("no");b.insertAdjacentHTML("beforeend",'<span class="mk">✘</span>')}f.textContent=(right?"Correcto. ":"No es esa. ")+q[3];
if(scored){done++;if(right)sc++;if(done==qs.length)setTimeout(()=>quizEnd(sc),0);$("qr").textContent="Puntaje: "+sc+" / "+qs.length+(done==qs.length?(sc>=5?" · Excelente dominio del tema":sc>=3?" · Buen avance, repasa lo que fallaste":" · Repasa el contenido e inténtalo de nuevo"):"")}};d.appendChild(b)});
d.appendChild(f);el.appendChild(d)})}
mc("ex",[["Un ecosistema de selva es un sistema…",["Artificial y cerrado","Natural y abierto","Abstracto y estático"],1,"Surge sin intervención humana e intercambia energía y materia con su entorno."],
["Un software de facturación es principalmente…",["Un sistema abstracto en su lógica","Un sistema natural","Un sistema sin límites"],0,"Su lógica son reglas e instrucciones; el hardware que lo ejecuta sería la parte concreta."],
["Un termostato que enciende el aire cuando sube la temperatura ilustra…",["Entropía","Retroalimentación y homeostasis","Equifinalidad"],1,"Mide la salida (temperatura) y corrige para mantener el equilibrio."]],false);
const QZ0=[["¿Cuál es un sistema artificial?",["Un río","Un sistema de riego diseñado","Una colonia de hormigas"],1,"Fue creado por humanos."],
["Un sistema abierto se caracteriza por…",["Intercambiar con su entorno","No tener objetivos","Ser siempre abstracto"],0,"Recibe entradas y entrega salidas al ambiente."],
["“El todo es más que la suma de las partes” describe la…",["Entropía","Sinergia","Jerarquía"],1,"La sinergia genera resultados que las partes solas no logran."],
["Si un sistema abierto no recibe energía ni información tiende a…",["Homeostasis","Entropía","Equifinalidad"],1,"La entropía es la tendencia al desorden y la degradación."],
["El pronóstico del clima es un sistema…",["Determinístico","Probabilístico","Cerrado"],1,"Hay incertidumbre: no se puede garantizar el resultado."],
["Llegar al mismo objetivo por caminos distintos se llama…",["Equifinalidad","Totalidad","Límite"],0,"Distintas condiciones iniciales pueden llevar al mismo estado final."]];
const QB=[...QZ0,
["Un sistema cerrado se caracteriza por…",["Intercambiar mucho con su entorno","Tener muy poco o ningún intercambio con el exterior","Ser siempre natural"],1,"Es un caso ideal: casi no intercambia materia, energía ni información."],
["Un idioma es un sistema…",["Concreto","Abstracto","Estático por definición"],1,"Sus elementos son símbolos y reglas, no objetos físicos."],
["¿Cuál es un ejemplo de sistema natural?",["Un sistema operativo","Una red de transporte","Un ecosistema"],2,"Surge sin diseño humano."],
["En un sistema determinístico…",["Las mismas entradas producen siempre los mismos resultados","Siempre hay incertidumbre","No existen salidas"],0,"Su comportamiento es predecible."],
["La homeostasis es…",["El aumento del desorden","La capacidad de mantener el equilibrio ante cambios","La división en subsistemas"],1,"Permite al sistema conservar su estado estable, como la temperatura corporal."],
["Un subsistema es…",["Un sistema sin objetivo","El entorno del sistema","Un sistema que forma parte de otro mayor"],2,"Los sistemas se organizan en jerarquías de subsistemas y suprasistemas."],
["La retroalimentación sirve para…",["Corregir el sistema con información de sus salidas","Eliminar las entradas","Aumentar la entropía"],0,"Compara lo obtenido con lo esperado y ajusta el proceso."],
["¿Qué separa a un sistema de su ambiente?",["La sinergia","La entropía","El límite"],2,"El límite define qué está dentro del sistema y qué es entorno."],
["Un edificio terminado y sin uso se acerca más a un sistema…",["Estático","Dinámico","Probabilístico"],0,"Casi no cambia con el tiempo."],
["La neguentropía consiste en…",["Perder energía","Importar energía o información para contrarrestar el desorden","Cerrar el sistema"],1,"Es lo opuesto a la entropía: ayuda al sistema a mantener su organización."],
["Una universidad que recibe estudiantes y entrega profesionales es un sistema…",["Cerrado","Natural","Abierto"],2,"Intercambia personas e información con su entorno."],
["Una teoría matemática es un sistema…",["Concreto","Abstracto","Natural"],1,"Está formada por conceptos y reglas, no por objetos físicos."],
["La característica de totalidad significa que…",["El sistema es solo la suma de sus partes","Los elementos actúan aislados","El sistema es más que la suma de sus partes: importan sus relaciones"],2,"Lo esencial es cómo se interrelacionan los elementos."],
["Un sistema dinámico es aquel que…",["Cambia y evoluciona en el tiempo","Nunca cambia","No tiene entorno"],0,"Su estado varía con el tiempo, como una economía o un ser vivo."]];
let lockQ=false;
function startQuiz(){lockQ=true;document.body.classList.add("ql");$("qi").style.display="none";$("qz").innerHTML="";$("qa").innerHTML="";const S=QB.slice().sort(()=>Math.random()-.5).slice(0,6).map(q=>{const o=q[1].map((t,k)=>[t,k]).sort(()=>Math.random()-.5);return [q[0],o.map(x=>x[0]),o.findIndex(x=>x[1]==q[2]),q[3]]});$("qr").textContent="Puntaje: 0 / "+S.length;mc("qz",S,true);window.scrollTo(0,0)}
function quizEnd(){lockQ=false;document.body.classList.remove("ql");$("qa").innerHTML='<button class="btn" id="qre">Reintentar quiz</button>';$("qre").onclick=startQuiz}
$("qs").onclick=startQuiz;
const G=[["Una célula","Abierto"],["Un reloj de cuerda ideal","Cerrado"],["Un idioma","Abstracto"],["Un computador","Concreto"],["El clima","Probabilístico"],["Una calculadora","Determinístico"],["Un bosque","Natural"],["Una aplicación móvil","Artificial"]];
const EX={"Una célula":"Es abierto: toma nutrientes y energía del medio y expulsa desechos.","Un reloj de cuerda ideal":"Se considera cerrado: en el caso ideal no intercambia materia ni información con el exterior.","Un idioma":"Es abstracto: está hecho de símbolos y reglas, no de objetos físicos.","Un computador":"Es concreto: sus componentes (hardware) son físicos y tangibles.","El clima":"Es probabilístico: tiene tantas variables que solo se pronostica con cierta probabilidad.","Una calculadora":"Es determinístico: con la misma operación siempre entrega el mismo resultado.","Un bosque":"Es natural: se formó sin diseño ni construcción humana.","Una aplicación móvil":"Es artificial: fue diseñada y programada por personas."};
const opts=["Abierto","Cerrado","Concreto","Abstracto","Probabilístico","Determinístico","Natural","Artificial"];
let gi=0,gs=0;
function g1(){$("g1n").innerHTML="";if(gi>=G.length){$("g1i").textContent="Fin del juego";$("g1o").innerHTML='<button class="btn" id="g1r">Jugar de nuevo</button>';$("g1r").onclick=()=>{gi=0;gs=0;g1()};$("g1f").textContent="Aciertos: "+gs+" de "+G.length;return}
$("g1q").textContent="Pregunta "+(gi+1)+" de "+G.length;$("g1s").textContent="Aciertos: "+gs;$("g1i").textContent=G[gi][0];$("g1f").textContent="";
const l=$("g1o");l.innerHTML="";const o=opts.slice(),x=G[gi][1];
[x,...o.filter(v=>v!=x).sort(()=>Math.random()-.5).slice(0,2)].sort(()=>Math.random()-.5).forEach(v=>{const b=document.createElement("button");b.className="opt";b.textContent=v;
b.onclick=()=>{const r=v==x;if(r)gs++;$("g1s").textContent="Aciertos: "+gs;$("g1f").innerHTML=(r?"<b>✔ ¡Correcto!</b> ":"<b>✘ Incorrecto.</b> ")+EX[G[gi][0]];[...l.children].forEach(y=>{y.disabled=true;if(y.textContent==x){y.classList.add("ok");y.insertAdjacentHTML("beforeend",'<span class="mk">✔</span>')}});if(!r){b.classList.add("no");b.insertAdjacentHTML("beforeend",'<span class="mk">✘</span>')}gi++;const n=document.createElement("button");n.className="btn";n.style.marginTop="12px";n.textContent=gi>=G.length?"Ver resultado":"Siguiente";n.onclick=g1;$("g1n").appendChild(n)};l.appendChild(b)})}
g1();
let first=null,lock=false,pairs=0,tries=0;
function mem(){const m=$("mem");m.innerHTML="";pairs=0;tries=0;first=null;$("m1").textContent="Intentos: 0";$("mres").textContent="";
const P=[["Sinergia","Más juntos que separados"],["Entropía","Tendencia al desorden"],["Homeostasis","Mantener el equilibrio"],["Equifinalidad","Varios caminos, un fin"],["Jerarquía","Subsistemas y suprasistemas"],["Totalidad","El todo ≠ suma de partes"]];
const cards=[];P.forEach((p,i)=>{cards.push([i,p[0]],[i,p[1]])});cards.sort(()=>Math.random()-.5).forEach(c=>{const b=document.createElement("button");b.className="mc";b.textContent=c[1];b.dataset.k=c[0];b.onclick=()=>flip(b);b.classList.add("up");m.appendChild(b)});
setTimeout(()=>[...m.children].forEach(b=>b.classList.remove("up")),1800)}
function flip(b){if(lock||b.classList.contains("up")||b.classList.contains("done"))return;b.classList.add("up");
if(!first){first=b;return}tries++;$("m1").textContent="Intentos: "+tries;
if(first.dataset.k==b.dataset.k){first.classList.add("done");b.classList.add("done");first=null;if(++pairs==6)$("mres").textContent="¡Lo lograste en "+tries+" intentos!"}
else{lock=true;const a=first;first=null;setTimeout(()=>{a.classList.remove("up");b.classList.remove("up");lock=false},900)}}
$("mr").onclick=mem;mem();
const V=[["inicio"],["clasif","contexto"],["carac"],["casos"],["videos"],["ejer"],["juegos"],["quiz"],["creditos"]];
const NM=["Inicio","Clasificaciones","Características","Ejemplos","Videos","Ejercicios","Juegos","Quiz","Créditos"];
V.forEach((ids,i)=>{const last=$(ids[0]);const host=i==V.length-1?last.firstElementChild:last;const p=document.createElement("div");p.className="pager";
p.innerHTML=(i>0?`<button class="btn alt" data-go="${i-1}">← Regresar: ${NM[i-1]}</button>`:"<span></span>")+(i<V.length-1?`<button class="btn" data-go="${i+1}">Continuar: ${NM[i+1]} →</button>`:`<button class="btn" data-go="0">Volver al inicio</button>`);if(i)host.appendChild(p)});
document.addEventListener("click",e=>{if(lockQ&&e.target.closest("nav a")){e.preventDefault();return}const b=e.target.closest("[data-go]");if(b&&!lockQ)location.hash=V[b.dataset.go][0]});
function route(){let i=V.findIndex(v=>v[0]==location.hash.slice(1));if(i<0)i=0;if(lockQ){i=V.findIndex(v=>v[0]=="quiz");if(location.hash!="#quiz")location.hash="quiz"}
V.forEach((ids,k)=>ids.forEach(id=>$(id).style.display=k==i?"":"none"));
document.querySelectorAll("nav a").forEach((a,k)=>{a.classList.toggle("on",k==i);if(k==i){a.setAttribute("aria-current","page");a.scrollIntoView({inline:"center",block:"nearest"})}else a.removeAttribute("aria-current")});
window.scrollTo(0,0)}
addEventListener("hashchange",route);route();
