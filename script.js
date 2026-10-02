/* ============ EDIT YOUR LINKS HERE ============ */
const CONFIG = {
  FORM_URL: "https://forms.gle/ArDT7Bx7j34KtTE17",          // Google Form link  (ضع رابط Google Form)
  WHATSAPP_NUMBER: "213559841752",   // e.g. "213XXXXXXXXX" (no + or spaces)  (رقم الواتساب)
  ENOPSY_URL: "https://psycho-speech-session-manager.web.app/",        // ENopsy platform link  (ضع-الرابط-هنا) — not invented
  INSTAGRAM_URL: "https://www.instagram.com/op_space_for_training/", FACEBOOK_URL: "https://www.facebook.com/p/Op-space-61577493747423/",
  PDF: {                 // PDF files — upload to assets/pdf/ or use external URLs
    orthophonie: "assets/1.pdf",
    psychologie: "assets/3.pdf",
    education: "assets/2.pdf"
  }
};
/* Other things to replace: Logo -> assets/logo.png (or .svg/.webp, edit <img> in index.html)
   ENopsy image -> assets/enopsy.png | Illustrations: inline SVG in index.html (or swap for <img>) */
/* ============================================== */
const wa = CONFIG.WHATSAPP_NUMBER ? "https://wa.me/" + CONFIG.WHATSAPP_NUMBER : "#register";
const map = {".wa-l": wa, ".form": CONFIG.FORM_URL || "#register", ".enopsy": CONFIG.ENOPSY_URL || "#enopsy", ".ig": CONFIG.INSTAGRAM_URL || "#", ".fb": CONFIG.FACEBOOK_URL || "#"};
for (const s in map) document.querySelectorAll(s).forEach(a => { a.href = map[s]; if (/^http/.test(map[s])) { a.target = "_blank"; a.rel = "noopener"; } });
document.querySelectorAll("[data-pdf]").forEach(a => { a.href = CONFIG.PDF[a.dataset.pdf]; a.target = "_blank"; a.rel = "noopener"; });
const D = {
o: [["01","FONDAMENTAUX","مدخل إلى الأرطفونيا • التشريح والفيزيولوجيا • الصوتيات والفونولوجيا • تطور اللغة والكلام • علم النفس المعرفي"],["02","ÉVALUATION","الفحص الأرطفوني • التقييم اللغوي • التقييم النطقي والفونولوجي • التشخيص التفريقي • كتابة التقرير"],["03","TROUBLES DE L'ENFANT","اضطرابات اللغة • النطق والكلام • التأتأة • التواصل • Dyslexie • Dysgraphie • التوحد"],["04","NEURO-ORTHOPHONIE","Aphasie • Apraxie • Dysarthrie • الاضطرابات العصبية واللغوية"],["05","VOIX & AUDITION","اضطرابات الصوت • السمعيات • التأهيل السمعي اللفظي • زراعة القوقعة • التواصل مع الأشخاص الصم"],["06","PRISE EN CHARGE","خطة التكفل • الأهداف العلاجية • التقنيات • إعداد الجلسة • متابعة النتائج • العمل مع الأسرة والمدرسة"]],
p: [["🟢","NIVEAU 1 — INITIATION","أساسيات علم النفس • النمو • المعرفي • الاجتماعي • الشخصية • Psychopathologie • الملاحظة • التواصل","lv1"],["🟠","NIVEAU 2 — ÉVALUATION","المقابلة النفسية • Entretien clinique • Anamnèse • أدوات التقييم • الاختبارات • تحليل النتائج • التقرير","lv2"],["🔴","NIVEAU 3 — CLINIQUE","دراسة الحالات • Analyse clinique • Hypothèses cliniques • Projet d'accompagnement • المحاكاة • الإشراف التعليمي","lv3"]],
e: [["01","FONDAMENTAUX","علم نفس النمو • علم النفس التربوي • نظريات التعلم • الفروق الفردية"],["02","COMPRENDRE L'APPRENANT","الدافعية • الانتباه • الذاكرة • الوظائف التنفيذية • الملاحظة"],["03","DIFFICULTÉS D'APPRENTISSAGE","Dyslexie • Dysgraphie • Dyscalculie • TDAH • اضطرابات اللغة"],["04","PÉDAGOGIE","التخطيط • التعلم النشط • التعلم باللعب • التعليم المتمايز • إدارة القسم"],["05","ÉVALUATION","الملاحظة • التقييم المستمر • شبكات الملاحظة • تحليل النتائج • Projet pédagogique individualisé"],["06","ÉDUCATION INCLUSIVE","التربية الدامجة • التوحد • الإعاقة السمعية • الإعاقة الذهنية • التكييفات البيداغوجية"]]};
document.querySelectorAll(".steps").forEach(el => el.innerHTML = D[el.dataset.k].map(s => `<div class="st ${s[3]||""}"><small>${s[0]}</small><h3>${s[1]}</h3><p>${s[2]}</p></div>`).join(""));
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("on"); io.unobserve(e.target); } }), {threshold: .08});
document.querySelectorAll(".fu").forEach(el => io.observe(el));
