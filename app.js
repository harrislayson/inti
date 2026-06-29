/* ============================================================
   Inti — app.js
   · Bilingual (EN/ES) text swapping
   · Gallery + clothing grids, shared lightbox
   · WhatsApp links built from config.js (modular)
   · Mobile nav
   ============================================================ */

/* ---------- 1. Translations ---------- */
const I18N = {
  en: {
    meta_desc: "Inti — self-taught artist in Lobitos, Peru. Original art, artist residencies, free workshops for children, and hand-painted clothing. Art that brings people together.",
    header_loc: "Lobitos · Piura · Peru",
    nav_about: "About", nav_signatures: "Signatures", nav_gallery: "Gallery",
    nav_residency: "Residency", nav_programs: "Programs", nav_clothing: "Clothing", nav_contact: "Contact",

    hero_eyebrow: "Self-taught artist · Lobitos, Peru",
    hero_sub: "A living studio by the ocean in Lobitos — where art brings people together.",
    hero_cta1: "See the work", hero_cta2: "Stay as a resident",

    about_eyebrow: "The artist",
    about_title: "A life given to art",
    about_p1: "Inti has lived in Lobitos — a laid-back surf town on the desert coast of Piura, in northern Peru, loved by surfers for its long left-hand waves — for 15 years. Since the pandemic, his home has been a large creative space given over entirely to art: white brick walls, open light, and work on every surface.",
    about_p2: "Self-taught, he has been making art for 10 years, developing three signatures of his own. He was once an English teacher in nearby Talara, and still works there as a translator for doctors.",

    phil_eyebrow: "His belief",
    phil_title: "Art that brings people together",
    phil_body: "More than anything, Inti believes that art can bring people together and transform their lives. His studio is a gathering place — for visiting artists, travelers and local children — where making something by hand becomes something shared.",

    sig_eyebrow: "His hand",
    sig_title: "Three signatures",
    sig_lede: "Three motifs return through Inti's work — a name, a face, and a fish. Each is painted in many colors; the pieces shown here are just examples.",
    sig1_title: "Inti",
    sig1_body: "His tag — a crown over bold letters — the mark he signs across his work.",
    sig2_title: "The Face",
    sig2_body: "A face drawn from the ancient north — Moche and pre-Columbian lines, reimagined in his own hand.",
    sig3_title: "The Fish &amp; the Moon",
    sig3_body: "A fish rising to a crescent moon — the sea and the sky in one frame.",

    gal_eyebrow: "Selected work",
    gal_title: "Gallery",
    gal_lede: "A selection of Inti's paintings and prints. Tap any piece to enlarge.",
    gal_buy: "Every piece is original and available to purchase. Message Inti about a work to ask the price and arrange payment and delivery.",
    gal_buy_cta: "Ask about a piece",

    res_eyebrow: "Artists in residence",
    res_title: "Live and make work in the studio",
    res_p1: "Inti hosts visiting artists to live alongside him in the space. You get the run of the studio and all its materials, and the slow pleasures of Lobitos — the surf, the desert light, the quiet.",
    res_li1: "A place to live inside a working studio",
    res_li2: "Access to the whole space and its materials",
    res_li3: "Days by the ocean in Lobitos",
    res_cta: "Ask about a residency",

    prog_eyebrow: "For schoolchildren",
    prog_title: "Educational programs",
    prog_free: "Free",
    prog_p1: "Inti opens the studio to local schoolchildren with free educational programs — hands-on workshops in drawing, painting and printmaking, surrounded by real work in a real artist's space.",
    prog_p2: "Teachers, schools and community groups are welcome to get in touch to arrange a visit or workshop.",
    prog_cta: "Arrange a program",

    cloth_eyebrow: "Wearable work",
    cloth_title: "Clothing",
    cloth_p1: "Inti's signatures live on cloth as well as canvas — hand-painted denim jackets, shorts and one-of-a-kind pieces, each made by hand and to order.",
    cloth_p2: "Message Inti to see what's available and to order a piece.",
    cloth_cta: "Ask about clothing",

    contact_eyebrow: "Get in touch",
    contact_title: "Visit, stay, or commission",
    contact_lede: "The studio is in Lobitos, Piura. The fastest way to reach Inti is by message.",
    contact_loc: "Lobitos · Piura · Peru",

    footer_loc: "Lobitos · Piura · Peru",
    footer_credit: "Artist · Studio · Residency",

    btn_whatsapp: "Message on WhatsApp",
    btn_instagram: "Instagram",
    btn_email: "Email"
  },

  es: {
    meta_desc: "Inti — artista autodidacta en Lobitos, Perú. Arte original, residencias artísticas, talleres gratuitos para niños y ropa pintada a mano. Arte que une a las personas.",
    header_loc: "Lobitos · Piura · Perú",
    nav_about: "Historia", nav_signatures: "Firmas", nav_gallery: "Galería",
    nav_residency: "Residencia", nav_programs: "Programas", nav_clothing: "Ropa", nav_contact: "Contacto",

    hero_eyebrow: "Artista autodidacta · Lobitos, Perú",
    hero_sub: "Un taller vivo frente al mar en Lobitos — donde el arte une a las personas.",
    hero_cta1: "Ver la obra", hero_cta2: "Quédate en residencia",

    about_eyebrow: "El artista",
    about_title: "Una vida dedicada al arte",
    about_p1: "Inti vive en Lobitos — un tranquilo pueblo de surf en la costa desértica de Piura, al norte del Perú, querido por los surfistas por sus largas olas izquierdas — desde hace 15 años. Desde la pandemia, su hogar es un gran espacio creativo entregado por completo al arte: paredes de ladrillo blanco, luz abierta y obra en cada rincón.",
    about_p2: "Autodidacta, lleva 10 años haciendo arte y ha desarrollado tres firmas propias. Fue profesor de inglés en la cercana Talara, y aún trabaja allí como traductor para médicos.",

    phil_eyebrow: "Su creencia",
    phil_title: "Arte que une a las personas",
    phil_body: "Más que nada, Inti cree que el arte puede unir a las personas y transformar sus vidas. Su taller es un lugar de encuentro — para artistas visitantes, viajeros y niños de la zona — donde crear algo con las manos se vuelve algo compartido.",

    sig_eyebrow: "Su trazo",
    sig_title: "Tres firmas",
    sig_lede: "Tres motivos vuelven una y otra vez en la obra de Inti — un nombre, un rostro y un pez. Cada uno se pinta en muchos colores; las piezas que se muestran son solo ejemplos.",
    sig1_title: "Inti",
    sig1_body: "Su firma — una corona sobre letras gruesas — la marca con la que firma su obra.",
    sig2_title: "El Rostro",
    sig2_body: "Un rostro tomado del norte antiguo — líneas mochica y precolombinas, reinterpretadas con su propia mano.",
    sig3_title: "El Pez y la Luna",
    sig3_body: "Un pez que sube hacia una luna creciente — el mar y el cielo en un mismo cuadro.",

    gal_eyebrow: "Obra seleccionada",
    gal_title: "Galería",
    gal_lede: "Una selección de pinturas y grabados de Inti. Toca cualquier pieza para ampliarla.",
    gal_buy: "Cada pieza es original y está a la venta. Escríbele a Inti sobre una obra para conocer el precio y coordinar el pago y la entrega.",
    gal_buy_cta: "Consultar por una obra",

    res_eyebrow: "Artistas en residencia",
    res_title: "Vive y crea en el taller",
    res_p1: "Inti recibe a artistas visitantes para vivir junto a él en el espacio. Tienes acceso a todo el taller y sus materiales, y a los placeres tranquilos de Lobitos — el surf, la luz del desierto, la calma.",
    res_li1: "Un lugar para vivir dentro de un taller en activo",
    res_li2: "Acceso a todo el espacio y sus materiales",
    res_li3: "Días junto al mar en Lobitos",
    res_cta: "Consultar por una residencia",

    prog_eyebrow: "Para escolares",
    prog_title: "Programas educativos",
    prog_free: "Gratis",
    prog_p1: "Inti abre el taller a los escolares de la zona con programas educativos gratuitos — talleres prácticos de dibujo, pintura y grabado, rodeados de obra real en el espacio real de un artista.",
    prog_p2: "Maestros, colegios y grupos de la comunidad son bienvenidos a escribir para coordinar una visita o un taller.",
    prog_cta: "Coordinar un programa",

    cloth_eyebrow: "Obra para vestir",
    cloth_title: "Ropa",
    cloth_p1: "Las firmas de Inti viven también en la tela — casacas de jean pintadas a mano, shorts y piezas únicas, cada una hecha a mano y a pedido.",
    cloth_p2: "Escríbele a Inti para ver qué hay disponible y pedir una pieza.",
    cloth_cta: "Consultar por ropa",

    contact_eyebrow: "Escríbenos",
    contact_title: "Visita, quédate o encarga una obra",
    contact_lede: "El taller está en Lobitos, Piura. La forma más rápida de contactar a Inti es por mensaje.",
    contact_loc: "Lobitos · Piura · Perú",

    footer_loc: "Lobitos · Piura · Perú",
    footer_credit: "Artista · Taller · Residencia",

    btn_whatsapp: "Escribir por WhatsApp",
    btn_instagram: "Instagram",
    btn_email: "Correo"
  }
};

const WA_MESSAGES = {
  en: {
    general:   "Hola Inti! I found your website and would love to get in touch.",
    residency: "Hola Inti! I'm interested in an artist residency at your studio in Lobitos. Could you tell me more?",
    programs:  "Hola Inti! I'd like to ask about your educational programs for children.",
    clothing:  "Hola Inti! I'm interested in your clothing — could you tell me what's available?",
    purchase:  "Hola Inti! I'm interested in buying one of your pieces — could you tell me the price and how to pay?"
  },
  es: {
    general:   "¡Hola Inti! Encontré tu página web y me encantaría ponerme en contacto.",
    residency: "¡Hola Inti! Me interesa una residencia artística en tu taller de Lobitos. ¿Me cuentas más?",
    programs:  "¡Hola Inti! Quisiera consultar por tus programas educativos para niños.",
    clothing:  "¡Hola Inti! Me interesa tu ropa — ¿me cuentas qué hay disponible?",
    purchase:  "¡Hola Inti! Me interesa comprar una de tus obras — ¿me dices el precio y cómo pagar?"
  }
};

/* ---------- 2. Grid data ---------- */
const GALLERY = [
  { src: "images/gallery/g01.jpg", en: "Crowned fish",     es: "Pez coronado" },
  { src: "images/gallery/g02.jpg", en: "Ancestor mask",    es: "Máscara ancestral" },
  { src: "images/gallery/g03.jpg", en: "Bay at sunset",    es: "Bahía al atardecer" },
  { src: "images/gallery/g04.jpg", en: "Lobitos",          es: "Lobitos" },
  { src: "images/gallery/g05.jpg", en: "The fisherman",    es: "El pescador" },
  { src: "images/gallery/g06.jpg", en: "Golden face",      es: "Rostro dorado" },
  { src: "images/gallery/g07.jpg", en: "Night creature",   es: "Criatura nocturna" },
  { src: "images/gallery/g08.jpg", en: "Faces",            es: "Rostros" },
  { src: "images/gallery/g09.jpg", en: "Spirit face",      es: "Rostro espíritu" },
  { src: "images/gallery/g10.jpg", en: "Guardian",         es: "Guardián" },
  { src: "images/gallery/g11.jpg", en: "Figure & sun",     es: "Figura y sol" },
  { src: "images/gallery/g13.jpg", en: "Moon face",        es: "Rostro lunar" },
  { src: "images/gallery/g14.jpg", en: "Guardian & sun",   es: "Guardián y sol" },
  { src: "images/gallery/g15.jpg", en: "Guardian & moon",  es: "Guardián y luna" },
  { src: "images/gallery/g16.jpg", en: "Creature",         es: "Criatura" },
  { src: "images/gallery/g17.jpg", en: "Guardian & sun",   es: "Guardián y sol" },
  { src: "images/gallery/g18.jpg", en: "Guardian & moon",  es: "Guardián y luna" }
];

const CLOTHING = [
  { src: "images/clothing/wear1.jpg", en: "Hand-painted jacket",        es: "Casaca pintada a mano" },
  { src: "images/clothing/wear2.jpg", en: "Hand-painted jacket (back)", es: "Casaca pintada (espalda)" },
  { src: "images/clothing/wear3.jpg", en: "Painted shorts",             es: "Short pintado" },
  { src: "images/clothing/wear4.jpg", en: "Painted denim set",          es: "Conjunto de jean pintado" },
  { src: "images/clothing/wear5.jpg", en: "Hand-painted jacket",        es: "Casaca pintada a mano" },
  { src: "images/clothing/wear6.jpg", en: "Hand-painted jacket",        es: "Casaca pintada a mano" }
];

const GRIDS = { gallery: GALLERY, clothing: CLOTHING };

/* ---------- 3. Language ---------- */
let currentLang = localStorage.getItem("inti-lang") ||
  ((navigator.language || "en").toLowerCase().startsWith("es") ? "es" : "en");

function applyLang(lang){
  currentLang = lang;
  localStorage.setItem("inti-lang", lang);
  document.documentElement.lang = lang;
  const dict = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] == null) return;
    if (el.tagName === "META") el.setAttribute("content", dict[key]);
    else el.innerHTML = dict[key];
  });
  const t = document.getElementById("langToggle");
  t.querySelector(".lang-en").classList.toggle("active", lang === "en");
  t.querySelector(".lang-es").classList.toggle("active", lang === "es");
  buildContactButtons();
  refreshWhatsAppLinks();
  refreshGridCaptions();
}

/* ---------- 4. WhatsApp / contact ---------- */
function waHref(kind){
  const num = (window.SITE_CONFIG && SITE_CONFIG.whatsapp || "").replace(/\D/g, "");
  const msg = WA_MESSAGES[currentLang][kind] || WA_MESSAGES[currentLang].general;
  return `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
}
function refreshWhatsAppLinks(){
  document.querySelectorAll(".wa-link").forEach(a => {
    a.setAttribute("href", waHref(a.dataset.msg || "general"));
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener");
  });
}
function buildContactButtons(){
  const c = document.getElementById("contactBtns");
  if (!c) return;
  const cfg = window.SITE_CONFIG || {};
  const dict = I18N[currentLang];
  c.innerHTML = "";
  if (cfg.whatsapp){
    c.insertAdjacentHTML("beforeend",
      `<a class="btn btn-solid" target="_blank" rel="noopener" href="${waHref("general")}">${dict.btn_whatsapp}</a>`);
  }
  if (cfg.instagram){
    c.insertAdjacentHTML("beforeend",
      `<a class="btn btn-ghost" style="color:var(--ink);border-color:var(--line)" target="_blank" rel="noopener" href="https://instagram.com/${cfg.instagram}">${dict.btn_instagram}</a>`);
  }
  if (cfg.email){
    c.insertAdjacentHTML("beforeend",
      `<a class="btn btn-ghost" style="color:var(--ink);border-color:var(--line)" href="mailto:${cfg.email}">${dict.btn_email}</a>`);
  }
  if (cfg.location && cfg.location[currentLang]){
    const loc = document.getElementById("contactLoc");
    if (loc) loc.textContent = cfg.location[currentLang];
  }
}

/* ---------- 5. Grids ---------- */
function buildGrid(containerId, listName, showCaptions){
  const g = document.getElementById(containerId);
  if (!g) return;
  const list = GRIDS[listName];
  g.innerHTML = list.map((item, i) =>
    `<figure data-list="${listName}" data-i="${i}"><span class="frame"><img src="${item.src}" alt="${item.en}" loading="lazy"></span>${showCaptions ? "<figcaption></figcaption>" : ""}</figure>`
  ).join("");
  g.querySelectorAll("figure").forEach(f =>
    f.addEventListener("click", () => openLightbox(listName, +f.dataset.i)));
}
function refreshGridCaptions(){
  document.querySelectorAll("#galleryGrid figure, #clothingGrid figure").forEach(fig => {
    const cap = fig.querySelector("figcaption");
    const list = GRIDS[fig.dataset.list];
    if (cap && list) cap.textContent = list[+fig.dataset.i][currentLang] || "";
  });
}

/* ---------- 6. Lightbox ---------- */
let lbList = GALLERY, lbIndex = 0;
const lb = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");

function openLightbox(listName, i){
  lbList = GRIDS[listName] || GALLERY;
  lbIndex = i;
  showLb();
  lb.classList.add("open");
  lb.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeLightbox(){
  lb.classList.remove("open");
  lb.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
function showLb(){
  const item = lbList[lbIndex];
  lbImg.src = item.src;
  lbImg.alt = item[currentLang] || "";
}
function step(d){
  lbIndex = (lbIndex + d + lbList.length) % lbList.length;
  showLb();
}

/* ---------- 7. Wire up ---------- */
document.addEventListener("DOMContentLoaded", () => {
  buildGrid("galleryGrid", "gallery", false);
  buildGrid("clothingGrid", "clothing", true);
  applyLang(currentLang);

  document.getElementById("langToggle").addEventListener("click", () => {
    applyLang(currentLang === "en" ? "es" : "en");
  });

  const menuBtn = document.getElementById("menuBtn");
  const nav = document.querySelector(".nav");
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
  nav.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", false); }));

  document.getElementById("lbClose").addEventListener("click", closeLightbox);
  document.getElementById("lbPrev").addEventListener("click", () => step(-1));
  document.getElementById("lbNext").addEventListener("click", () => step(1));
  lb.addEventListener("click", e => { if (e.target === lb) closeLightbox(); });
  document.addEventListener("keydown", e => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });
});
