/* ============================================================
   UVA PASSA: configurações do site (edite aqui)
   ============================================================ */
var WHATSAPP = "";   // número com DDI+DDD, só dígitos. Ex.: "5555999999999"
var MSG = "Olá! Vi o site da Uva Passa e queria saber sobre os produtos.";
var INSTAGRAM = "https://www.instagram.com/uvapassasantarosa/";
var MAPS = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Uva Passa produtos naturais Santa Rosa RS");

(function () {
  "use strict";
  var root = document.documentElement;
  root.classList.add("js");
  var reduz = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var toque = window.matchMedia("(hover: none)").matches;

  /* ---------------- ícones ---------------- */
  var A = 'viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
  var S = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
  var ICONS = {
    cha: '<svg ' + A + '><path d="M12 28h34v8a14 14 0 0 1-14 14h-6a14 14 0 0 1-14-14z"/><path d="M46 31h4a6 6 0 0 1 0 12h-6"/><path d="M22 10c-2 3 2 5 0 8M31 10c-2 3 2 5 0 8M40 10c-2 3 2 5 0 8"/><path d="M14 56h32"/></svg>',
    uva: '<svg ' + A + '><g fill="currentColor" stroke="none"><circle cx="24" cy="32" r="7"/><circle cx="38" cy="32" r="7"/><circle cx="31" cy="43" r="7"/><circle cx="45" cy="43" r="6"/><circle cx="18" cy="44" r="6"/></g><path d="M31 24c0-7 5-11 12-11"/><path d="M31 24c-1-5-4-8-9-9"/></svg>',
    sopa: '<svg ' + A + '><path d="M8 32h48a24 24 0 0 1-24 22A24 24 0 0 1 8 32z"/><path d="M22 58h20"/><path d="M22 10c-2 3 2 5 0 8M32 10c-2 3 2 5 0 8M42 10c-2 3 2 5 0 8"/></svg>',
    granel: '<svg ' + A + '><rect x="14" y="22" width="36" height="36" rx="6"/><rect x="18" y="12" width="28" height="10" rx="3"/><g fill="currentColor" stroke="none"><circle cx="24" cy="46" r="2.6"/><circle cx="32" cy="50" r="2.6"/><circle cx="40" cy="46" r="2.6"/><circle cx="28" cy="40" r="2.6"/><circle cx="37" cy="39" r="2.6"/></g></svg>',
    intol: '<svg ' + A + '><path d="M12 50C12 26 28 12 52 12c0 24-14 40-38 40z"/><path d="M12 52L38 26"/><path d="M26 38l-1 8M33 31l7-1"/></svg>',
    supl: '<svg ' + A + '><g transform="rotate(-35 32 32)"><rect x="6" y="21" width="52" height="22" rx="11"/><path d="M32 21v22"/></g></svg>',
    balanca: '<svg ' + A + '><path d="M32 10v44M18 54h28"/><path d="M12 20h40"/><path d="M12 20l-7 16a7 7 0 0 0 14 0zM52 20l-7 16a7 7 0 0 0 14 0z"/></svg>',
    coracao: '<svg ' + A + '><path d="M32 54S8 40 8 24a12 12 0 0 1 24-4 12 12 0 0 1 24 4c0 16-24 30-24 30z"/></svg>',
    conversa: '<svg ' + A + '><path d="M10 14h44v28H30l-12 10V42h-8z"/><path d="M20 26h24M20 33h16"/></svg>',
    sacola: '<svg ' + A + '><path d="M12 22h40l-4 32H16z"/><path d="M24 22v-4a8 8 0 0 1 16 0v4"/></svg>',
    casa: '<svg ' + A + '><path d="M8 30L32 10l24 20"/><path d="M14 26v28h36V26"/><path d="M27 54V40h10v14"/></svg>',
    zap: '<svg ' + S + '><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.6-5.4A8.4 8.4 0 1 1 21 11.5z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.3-1.6-2-1-.8.7c-.8-.4-1.6-1.2-2-2l.7-.8-1-2z" fill="currentColor" stroke="none"/></svg>',
    insta: '<svg ' + S + '><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor"/></svg>',
    pin: '<svg ' + S + '><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    relogio: '<svg ' + S + '><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    seta: '<svg ' + S + ' stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    check: '<svg ' + S + ' stroke-width="2.6"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    x: '<svg ' + S + ' stroke-width="2.4"><path d="M7 7l10 10M17 7L7 17"/></svg>',
    folha: '<svg ' + S + '><path d="M4 20c0-9 6-15 16-16 0 10-6 16-16 16z"/><path d="M4 20l9-9"/></svg>'
  };
  window.UPICONS = ICONS;
  function icons(scope) {
    (scope || document).querySelectorAll("[data-ico]").forEach(function (el) {
      var svg = ICONS[el.getAttribute("data-ico")];
      if (svg && !el.firstChild) el.innerHTML = svg;
    });
  }

  function zapLink(msg) {
    if (WHATSAPP) return "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg || MSG);
    return INSTAGRAM;
  }
  window.UP = { zapLink: zapLink, MAPS: MAPS };

  /* ---------------- loader ---------------- */
  var loader = document.createElement("div");
  loader.className = "loader";
  loader.innerHTML = '<div><svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="19" fill="#fff"/><g fill="#6F1D2B"><circle cx="15" cy="17" r="4"/><circle cx="23" cy="16" r="4"/><circle cx="19" cy="23" r="4"/><circle cx="27" cy="23" r="3.4"/><circle cx="12" cy="24" r="3.4"/></g><path d="M20 10c1-3 4-4 7-3" stroke="#4F6B45" stroke-width="2.2" fill="none" stroke-linecap="round"/></svg><span>Uva Passa</span></div>';
  if (!reduz) document.body.appendChild(loader);
  function pronto() {
    loader.classList.add("out");
    setTimeout(function () { root.classList.add("ready"); }, 250);
    setTimeout(function () { loader.remove(); }, 1300);
  }
  if (document.readyState === "complete") setTimeout(pronto, 300);
  else { window.addEventListener("load", function () { setTimeout(pronto, 200); }); setTimeout(pronto, 2200); }

  /* ---------------- header / footer ---------------- */
  var page = document.body.getAttribute("data-page") || "inicio";
  function cur(n) { return page === n ? ' aria-current="page"' : ""; }
  var logo = '<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="19" fill="#fff" stroke="#6F1D2B" stroke-width="2"/><g fill="#6F1D2B"><circle cx="15" cy="17" r="4"/><circle cx="23" cy="16" r="4"/><circle cx="19" cy="23" r="4"/><circle cx="27" cy="23" r="3.4"/><circle cx="12" cy="24" r="3.4"/></g><path d="M20 10c1-3 4-4 7-3" stroke="#4F6B45" stroke-width="2.2" fill="none" stroke-linecap="round"/></svg>';

  var header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML =
      '<div class="wrap nav">' +
      '<a class="brand" href="index.html" aria-label="Uva Passa, início">' + logo + 'Uva Passa</a>' +
      '<button class="menu-btn" aria-expanded="false" aria-controls="menu" aria-label="Abrir menu"><span></span><span></span><span></span></button>' +
      '<nav id="menu" class="nav-links" aria-label="Principal">' +
      '<a href="index.html"' + cur("inicio") + '>Início</a>' +
      '<a href="produtos.html"' + cur("produtos") + '>Produtos</a>' +
      '<a href="a-loja.html"' + cur("loja") + '>A loja</a>' +
      '<a href="contato.html"' + cur("contato") + '>Contato</a>' +
      '<a class="btn small mag" data-zap href="#"><span class="i" data-ico="zap"></span>WhatsApp</a>' +
      '</nav></div>';
  }
  var bar = document.createElement("div");
  bar.className = "progress";
  document.body.appendChild(bar);

  var footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML =
      '<div class="big" aria-hidden="true">Uva Passa</div>' +
      '<div class="wrap"><div class="foot-grid">' +
      '<div><a class="brand" href="index.html">' + logo + 'Uva Passa</a><p>Produtos naturais que facilitam a sua rotina. A granel, intolerâncias e suplementação em Santa Rosa, RS.</p></div>' +
      '<div><h4>Navegue</h4><ul><li><a href="index.html">Início</a></li><li><a href="produtos.html">Produtos</a></li><li><a href="a-loja.html">A loja</a></li><li><a href="contato.html">Contato</a></li></ul></div>' +
      '<div><h4>Fale com a gente</h4><ul><li><a data-zap href="#">WhatsApp</a></li><li><a href="' + INSTAGRAM + '" target="_blank" rel="noopener">@uvapassasantarosa</a></li><li><a href="' + MAPS + '" target="_blank" rel="noopener">Como chegar</a></li></ul></div>' +
      '</div><div class="foot-bottom"><span>Uva Passa, produtos naturais. Santa Rosa, RS. Fotos ilustrativas: Unsplash.</span><span>Prévia criada pela Prospecta Studio</span></div></div>';
  }

  /* flutuantes */
  var zf = document.createElement("a");
  zf.className = "zap-float";
  zf.setAttribute("data-zap", "");
  zf.setAttribute("aria-label", "Chamar no WhatsApp");
  zf.href = "#";
  zf.innerHTML = '<span class="i" data-ico="zap"></span><span class="tip">Fale com a gente</span>';
  document.body.appendChild(zf);
  var topo = document.createElement("button");
  topo.className = "topo";
  topo.setAttribute("aria-label", "Voltar ao topo");
  topo.innerHTML = '<span class="i" data-ico="seta"></span>';
  topo.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: reduz ? "auto" : "smooth" }); });
  document.body.appendChild(topo);

  icons();

  document.querySelectorAll("[data-zap]").forEach(function (a) {
    a.href = zapLink(a.getAttribute("data-msg"));
    a.target = "_blank";
    a.rel = "noopener";
  });

  /* fotos que não carregarem somem sem quebrar o layout */
  document.querySelectorAll("img").forEach(function (im) {
    im.addEventListener("error", function () { im.style.opacity = "0"; });
  });

  /* ---------------- menu mobile ---------------- */
  var btn = document.querySelector(".menu-btn");
  var menu = document.getElementById("menu");
  if (btn && menu) {
    btn.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) { menu.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
    });
  }

  /* ---------------- scroll: header, progresso, parallax, topo ---------------- */
  var h = document.getElementById("site-header");
  var pars = Array.prototype.slice.call(document.querySelectorAll("[data-par]"));
  var ultimo = 0, tick = false;
  function onScroll() {
    var y = window.scrollY;
    var max = document.documentElement.scrollHeight - innerHeight;
    bar.style.setProperty("--p", max > 0 ? (y / max).toFixed(4) : 0);
    if (h) {
      h.classList.toggle("scrolled", y > 12);
      var abrindo = menu && menu.classList.contains("open");
      h.classList.toggle("hide", !abrindo && y > 420 && y > ultimo + 4);
      if (y < ultimo - 4) h.classList.remove("hide");
    }
    topo.classList.toggle("show", y > 700);
    if (!reduz) {
      pars.forEach(function (el) {
        var r = el.parentElement.getBoundingClientRect();
        if (r.bottom < -200 || r.top > innerHeight + 200) return;
        var sp = parseFloat(el.getAttribute("data-par")) || 0.15;
        var c = r.top + r.height / 2 - innerHeight / 2;
        el.style.transform = "translate3d(0," + (-c * sp).toFixed(1) + "px,0)";
      });
    }
    ultimo = y;
    tick = false;
  }
  window.addEventListener("scroll", function () { if (!tick) { tick = true; requestAnimationFrame(onScroll); } }, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();

  /* ---------------- títulos palavra por palavra ---------------- */
  document.querySelectorAll(".split").forEach(function (el) {
    var i = 0;
    function wrap(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (n) {
        if (n.nodeType === 3) {
          var frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(function (part) {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(" ")); return; }
            var w = document.createElement("span"); w.className = "w";
            var s = document.createElement("span"); s.textContent = part; s.style.setProperty("--i", i++);
            w.appendChild(s); frag.appendChild(w);
          });
          node.replaceChild(frag, n);
        } else if (n.nodeType === 1 && !n.classList.contains("rot")) { wrap(n); }
      });
    }
    wrap(el);
  });

  /* ---------------- palavra que troca no título ---------------- */
  document.querySelectorAll(".rot").forEach(function (rot) {
    var bs = rot.querySelectorAll("b");
    if (bs.length < 2 || reduz) { if (bs[0]) bs[0].classList.add("on"); return; }
    var k = 0;
    bs[0].classList.add("on");
    setInterval(function () {
      var a = bs[k];
      k = (k + 1) % bs.length;
      var b = bs[k];
      a.classList.remove("on"); a.classList.add("out");
      b.classList.remove("out"); b.classList.add("on");
      setTimeout(function () { a.classList.remove("out"); }, 750);
    }, 2400);
  });

  /* ---------------- slider de fotos ---------------- */
  document.querySelectorAll(".slider").forEach(function (sl) {
    var slides = sl.querySelectorAll(".slide");
    var cap = sl.querySelector(".slide-cap b");
    var dots = sl.querySelector(".dots");
    var k = 0, t;
    slides.forEach(function (s, i) {
      var d = document.createElement("button");
      d.setAttribute("aria-label", "Foto " + (i + 1));
      d.addEventListener("click", function () { ir(i); });
      dots.appendChild(d);
    });
    function ir(i) {
      slides[k].classList.remove("on"); dots.children[k].classList.remove("on");
      k = i;
      slides[k].classList.add("on");
      void dots.children[k].offsetWidth;
      dots.children[k].classList.add("on");
      if (cap) cap.textContent = slides[k].getAttribute("data-cap") || "";
      clearTimeout(t);
      if (!reduz) t = setTimeout(function () { ir((k + 1) % slides.length); }, 5000);
    }
    ir(0);
    if (!toque) {
      sl.addEventListener("mouseenter", function () { clearTimeout(t); sl.classList.add("pausa"); });
      sl.addEventListener("mouseleave", function () { sl.classList.remove("pausa"); ir(k); });
    }
  });

  /* ---------------- aparecer ao rolar ---------------- */
  /* fotos com máscara: observa o container, porque a máscara fechada não tem área visível */
  var maskPais = [];
  document.querySelectorAll(".mask").forEach(function (m) {
    var p = m.parentElement;
    if (maskPais.indexOf(p) < 0) { maskPais.push(p); p.setAttribute("data-mask-pai", ""); }
  });
  var alvos = document.querySelectorAll(".rv,.rv-l,.rv-r,.rv-s,[data-mask-pai],[data-count]");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add("in");
        if (e.target.hasAttribute("data-mask-pai")) {
          e.target.querySelectorAll(":scope > .mask").forEach(function (m) { m.classList.add("in"); });
        }
        if (e.target.hasAttribute("data-count")) contar(e.target);
        io.unobserve(e.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -5% 0px" });
    alvos.forEach(function (el) { io.observe(el); });
  } else {
    alvos.forEach(function (el) { el.classList.add("in"); if (el.hasAttribute("data-count")) contar(el); });
    document.querySelectorAll(".mask").forEach(function (m) { m.classList.add("in"); });
  }

  /* contador (só para números reais) */
  function contar(el) {
    var fim = parseFloat(el.getAttribute("data-count"));
    if (reduz) { el.textContent = fim.toLocaleString("pt-BR"); return; }
    var t0 = null;
    function passo(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / 1800, 1);
      var e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(fim * e).toLocaleString("pt-BR");
      if (p < 1) requestAnimationFrame(passo);
    }
    requestAnimationFrame(passo);
  }

  /* ---------------- cards 3D (tilt) ---------------- */
  if (!reduz && !toque) {
    document.querySelectorAll(".pcard").forEach(function (c) {
      c.addEventListener("mousemove", function (e) {
        var r = c.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        c.style.transform = "perspective(900px) rotateY(" + ((x - 0.5) * 4).toFixed(2) + "deg) rotateX(" + ((0.5 - y) * 4).toFixed(2) + "deg) translateY(-6px)";
        c.style.setProperty("--gx", (x * 100) + "%");
        c.style.setProperty("--gy", (y * 100) + "%");
      });
      c.addEventListener("mouseleave", function () { c.style.transform = ""; });
    });

    /* botões magnéticos */
    document.querySelectorAll(".btn,.mag").forEach(function (b) {
      b.addEventListener("mousemove", function (e) {
        var r = b.getBoundingClientRect();
        var x = e.clientX - r.left - r.width / 2, y = e.clientY - r.top - r.height / 2;
        b.style.transform = "translate(" + (x * 0.18).toFixed(1) + "px," + (y * 0.25).toFixed(1) + "px)";
      });
      b.addEventListener("mouseleave", function () { b.style.transform = ""; });
    });
  }

  /* ---------------- abas (dicas) ---------------- */
  document.querySelectorAll("[role=tablist]").forEach(function (tl) {
    var tabs = tl.querySelectorAll("[role=tab]");
    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () { abrir(i); });
      tab.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight") { abrir((i + 1) % tabs.length); tabs[(i + 1) % tabs.length].focus(); }
        if (e.key === "ArrowLeft") { var j = (i - 1 + tabs.length) % tabs.length; abrir(j); tabs[j].focus(); }
      });
    });
    function abrir(i) {
      tabs.forEach(function (t, j) {
        var p = document.getElementById(t.getAttribute("aria-controls"));
        var on = i === j;
        t.setAttribute("aria-selected", on ? "true" : "false");
        t.tabIndex = on ? 0 : -1;
        p.hidden = !on;
        if (on) { p.classList.remove("anim"); void p.offsetWidth; p.classList.add("anim"); }
      });
    }
  });

  /* ---------------- galeria arrastável + lightbox ---------------- */
  var gal = document.querySelector(".galeria");
  if (gal) {
    var down = false, sx = 0, sl = 0, moveu = false;
    gal.addEventListener("pointerdown", function (e) {
      if (e.pointerType !== "mouse") return;
      down = true; moveu = false; sx = e.clientX; sl = gal.scrollLeft;
    });
    window.addEventListener("pointermove", function (e) {
      if (!down) return;
      var dx = e.clientX - sx;
      if (Math.abs(dx) > 5) { moveu = true; gal.classList.add("drag"); }
      gal.scrollLeft = sl - dx;
    });
    window.addEventListener("pointerup", function () { down = false; gal.classList.remove("drag"); });
    var passo = function () { return gal.querySelector(".ph").offsetWidth + 16; };
    var pv = document.querySelector(".gal-ctrl .prev"), nx = document.querySelector(".gal-ctrl .next");
    if (pv) pv.addEventListener("click", function () { gal.scrollBy({ left: -passo(), behavior: "smooth" }); });
    if (nx) nx.addEventListener("click", function () { gal.scrollBy({ left: passo(), behavior: "smooth" }); });

    var itens = Array.prototype.slice.call(gal.querySelectorAll(".ph"));
    var lb = document.createElement("div");
    lb.className = "lb";
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-modal", "true");
    lb.setAttribute("aria-label", "Foto ampliada");
    lb.innerHTML = '<img alt=""><p></p><button class="x" aria-label="Fechar">&times;</button><button class="lp" aria-label="Foto anterior"><span class="i" data-ico="seta"></span></button><button class="ln" aria-label="Próxima foto"><span class="i" data-ico="seta"></span></button>';
    document.body.appendChild(lb);
    icons(lb);
    var lbImg = lb.querySelector("img"), lbTxt = lb.querySelector("p"), atual = 0, origem = null;
    function mostrar(i) {
      atual = (i + itens.length) % itens.length;
      var im = itens[atual].querySelector("img");
      lbImg.src = im.src.replace(/w=\d+/, "w=1600");
      lbImg.alt = im.alt;
      lbTxt.textContent = im.alt;
    }
    function abrirLb(i) { origem = document.activeElement; mostrar(i); lb.classList.add("open"); lb.querySelector(".x").focus(); document.body.style.overflow = "hidden"; }
    function fechar() { lb.classList.remove("open"); document.body.style.overflow = ""; if (origem) origem.focus(); }
    itens.forEach(function (it, i) {
      it.addEventListener("click", function (e) { if (moveu) { e.preventDefault(); return; } abrirLb(i); });
    });
    lb.querySelector(".x").addEventListener("click", fechar);
    lb.querySelector(".lp").addEventListener("click", function () { mostrar(atual - 1); });
    lb.querySelector(".ln").addEventListener("click", function () { mostrar(atual + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) fechar(); });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") fechar();
      if (e.key === "ArrowRight") mostrar(atual + 1);
      if (e.key === "ArrowLeft") mostrar(atual - 1);
    });
  }

  /* ---------------- chips de categoria (página produtos) ---------------- */
  var chips = document.querySelectorAll(".chips a");
  if (chips.length && "IntersectionObserver" in window) {
    var mapa = {};
    chips.forEach(function (c) { mapa[c.getAttribute("href").slice(1)] = c; });
    var spy = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        chips.forEach(function (c) { c.classList.remove("on"); });
        var c = mapa[e.target.id];
        if (c) {
          c.classList.add("on");
          var w = c.parentElement;
          w.scrollTo({ left: c.offsetLeft - w.clientWidth / 2 + c.offsetWidth / 2, behavior: reduz ? "auto" : "smooth" });
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    Object.keys(mapa).forEach(function (id) { var s = document.getElementById(id); if (s) spy.observe(s); });
  }

  /* ---------------- formulário: monta a mensagem e abre o WhatsApp ---------------- */
  var form = document.getElementById("form-zap");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nome = form.nome.value.trim();
      var marcados = Array.prototype.slice.call(form.querySelectorAll("input[name=tipo]:checked")).map(function (i) { return i.value; });
      var msg = form.mensagem.value.trim();
      var texto = "Olá! Meu nome é " + nome + "." + (marcados.length ? " Tenho interesse em: " + marcados.join(", ") + "." : "") + (msg ? " " + msg : "");
      var st = document.getElementById("status");
      if (!WHATSAPP) {
        st.textContent = "O número de WhatsApp ainda não foi configurado neste site. Por enquanto, chame pelo Instagram.";
        window.open(INSTAGRAM, "_blank", "noopener");
        return;
      }
      st.textContent = "Abrindo o WhatsApp com a sua mensagem...";
      window.open(zapLink(texto), "_blank", "noopener");
    });
  }

  /* ---------------- movimento no hover ---------------- */
  if (!toque) {
    /* luz que segue o mouse dentro dos cards */
    document.querySelectorAll(".passo,.valor,.info,.card-contato,.ponto,.compare>div,.faq details,.painel").forEach(function (el) {
      el.classList.add("spot");
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect();
        el.style.setProperty("--sx", (e.clientX - r.left) + "px");
        el.style.setProperty("--sy", (e.clientY - r.top) + "px");
      });
    });
  }
  if (!reduz && !toque) {
    /* camadas de foto e chips acompanham o mouse em profundidades diferentes */
    var prof = [3, 8, -9, 12, -5];
    document.querySelectorAll(".hero-art,.collage,.fotos").forEach(function (c) {
      var kids = Array.prototype.filter.call(c.children, function (k) { return k.matches(".ph,.chip,.selo,.slider"); });
      var area = c.classList.contains("hero-art") ? (c.closest(".hero") || c) : c;
      area.addEventListener("mousemove", function (e) {
        var r = c.getBoundingClientRect();
        var x = Math.max(-1.3, Math.min(1.3, ((e.clientX - r.left) / r.width - 0.5) * 2));
        var y = Math.max(-1.3, Math.min(1.3, ((e.clientY - r.top) / r.height - 0.5) * 2));
        kids.forEach(function (k, i) {
          var d = prof[i % prof.length];
          k.style.translate = (x * d).toFixed(1) + "px " + (y * d * 0.8).toFixed(1) + "px";
        });
        c.style.setProperty("--mx", x.toFixed(3));
        c.style.setProperty("--my", y.toFixed(3));
      });
      area.addEventListener("mouseleave", function () {
        kids.forEach(function (k) { k.style.translate = ""; });
        c.style.setProperty("--mx", 0);
        c.style.setProperty("--my", 0);
      });
    });

    /* cursor que acompanha o mouse */
    var cur = document.createElement("div");
    cur.className = "cursor";
    cur.setAttribute("aria-hidden", "true");
    cur.innerHTML = "<span></span><b>Ampliar</b>";
    document.body.appendChild(cur);
    var cx = 0, cy = 0, tx = 0, ty = 0, vis = false;
    document.addEventListener("pointermove", function (e) {
      if (e.pointerType !== "mouse") return;
      tx = e.clientX; ty = e.clientY;
      if (!vis) { vis = true; cx = tx; cy = ty; cur.classList.add("on"); }
      var el = e.target.closest ? e.target : null;
      cur.classList.toggle("hov", !!(el && el.closest("a,button,summary,label,.ph,.pcard")));
      cur.classList.toggle("view", !!(el && el.closest(".galeria .ph")));
    });
    document.documentElement.addEventListener("mouseleave", function () { cur.classList.remove("on"); vis = false; });
    (function loop() {
      cx += (tx - cx) * 0.18; cy += (ty - cy) * 0.18;
      cur.style.transform = "translate3d(" + cx.toFixed(1) + "px," + cy.toFixed(1) + "px,0)";
      requestAnimationFrame(loop);
    })();

    /* onda ao clicar nos botões */
    document.addEventListener("click", function (e) {
      var b = e.target.closest ? e.target.closest(".btn") : null;
      if (!b) return;
      var r = b.getBoundingClientRect(), d = Math.max(r.width, r.height) * 2;
      var s = document.createElement("span");
      s.className = "rip";
      s.style.cssText = "width:" + d + "px;height:" + d + "px;left:" + (e.clientX - r.left - d / 2) + "px;top:" + (e.clientY - r.top - d / 2) + "px";
      b.appendChild(s);
      setTimeout(function () { s.remove(); }, 700);
    });
  }

  var lm = document.getElementById("link-mapa");
  if (lm) lm.href = MAPS;
})();
