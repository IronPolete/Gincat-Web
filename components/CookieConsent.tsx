"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type Consent = "accepted" | "denied" | null;

const texts = {
  es: {
    title: "Gestionar consentimiento de cookies",
    description:
      "Para ofrecer las mejores experiencias, utilizamos tecnologías como las cookies para almacenar y/o acceder a la información del dispositivo. El consentimiento de estas tecnologías nos permitirá procesar datos como el comportamiento de navegación o las identificaciones únicas en este sitio. No consentir o retirar el consentimiento puede afectar negativamente a ciertas características y funciones.",
    accept: "Aceptar",
    deny: "Denegar",
    preferences: "Ver preferencias",
    preferenceTitle: "Preferencias de cookies",
    necessary: "Cookies necesarias",
    necessaryText:
      "Estas cookies son necesarias para el correcto funcionamiento de la página web.",
    analytics: "Cookies analíticas",
    analyticsText:
      "Nos ayudan a conocer cómo se utiliza la página web y a mejorar nuestros servicios.",
    save: "Guardar preferencias",
    cookiePolicy: "Política de cookies",
    privacyPolicy: "Política de privacidad",
    legalNotice: "Aviso legal",
  },

  ca: {
    title: "Gestionar el consentiment de cookies",
    description:
      "Per oferir les millors experiències, utilitzem tecnologies com les cookies per emmagatzemar i/o accedir a la informació del dispositiu. El consentiment d'aquestes tecnologies ens permetrà processar dades com el comportament de navegació o identificacions úniques en aquest lloc.",
    accept: "Acceptar",
    deny: "Denegar",
    preferences: "Veure preferències",
    preferenceTitle: "Preferències de cookies",
    necessary: "Cookies necessàries",
    necessaryText:
      "Aquestes cookies són necessàries per al correcte funcionament del lloc web.",
    analytics: "Cookies analítiques",
    analyticsText:
      "Ens ajuden a conèixer com s'utilitza el lloc web i a millorar els nostres serveis.",
    save: "Desar preferències",
    cookiePolicy: "Política de cookies",
    privacyPolicy: "Política de privacitat",
    legalNotice: "Avís legal",
  },

  en: {
    title: "Manage cookie consent",
    description:
      "To provide the best experiences, we use technologies such as cookies to store and/or access device information. Consent to these technologies will allow us to process data such as browsing behaviour or unique identifiers on this site.",
    accept: "Accept",
    deny: "Deny",
    preferences: "View preferences",
    preferenceTitle: "Cookie preferences",
    necessary: "Necessary cookies",
    necessaryText:
      "These cookies are required for the website to function correctly.",
    analytics: "Analytics cookies",
    analyticsText:
      "They help us understand how the website is used and improve our services.",
    save: "Save preferences",
    cookiePolicy: "Cookie policy",
    privacyPolicy: "Privacy policy",
    legalNotice: "Legal notice",
  },

  fr: {
    title: "Gérer le consentement aux cookies",
    description:
      "Afin de fournir les meilleures expériences, nous utilisons des technologies telles que les cookies pour stocker et/ou accéder aux informations de l'appareil.",
    accept: "Accepter",
    deny: "Refuser",
    preferences: "Voir les préférences",
    preferenceTitle: "Préférences des cookies",
    necessary: "Cookies nécessaires",
    necessaryText:
      "Ces cookies sont nécessaires au bon fonctionnement du site.",
    analytics: "Cookies analytiques",
    analyticsText:
      "Ils nous aident à comprendre comment le site est utilisé.",
    save: "Enregistrer les préférences",
    cookiePolicy: "Politique de cookies",
    privacyPolicy: "Politique de confidentialité",
    legalNotice: "Mentions légales",
  },

  de: {
    title: "Cookie-Einwilligung verwalten",
    description:
      "Um die bestmögliche Erfahrung zu bieten, verwenden wir Technologien wie Cookies, um Geräteinformationen zu speichern und/oder darauf zuzugreifen.",
    accept: "Akzeptieren",
    deny: "Ablehnen",
    preferences: "Einstellungen",
    preferenceTitle: "Cookie-Einstellungen",
    necessary: "Notwendige Cookies",
    necessaryText:
      "Diese Cookies sind für die ordnungsgemäße Funktion der Website erforderlich.",
    analytics: "Analyse-Cookies",
    analyticsText:
      "Sie helfen uns zu verstehen, wie die Website genutzt wird.",
    save: "Einstellungen speichern",
    cookiePolicy: "Cookie-Richtlinie",
    privacyPolicy: "Datenschutzrichtlinie",
    legalNotice: "Impressum",
  },

  zh: {
    title: "管理 Cookie 同意",
    description:
      "为了提供最佳体验，我们使用 Cookie 等技术来存储和访问设备信息。",
    accept: "接受",
    deny: "拒绝",
    preferences: "查看偏好",
    preferenceTitle: "Cookie 偏好设置",
    necessary: "必要 Cookie",
    necessaryText: "这些 Cookie 是网站正常运行所必需的。",
    analytics: "分析 Cookie",
    analyticsText: "帮助我们了解网站的使用情况并改进服务。",
    save: "保存偏好",
    cookiePolicy: "Cookie 政策",
    privacyPolicy: "隐私政策",
    legalNotice: "法律声明",
  },

  ja: {
    title: "Cookieの同意を管理",
    description:
      "最適な体験を提供するため、Cookieなどの技術を使用してデバイス情報を保存またはアクセスします。",
    accept: "同意する",
    deny: "拒否する",
    preferences: "設定を見る",
    preferenceTitle: "Cookie設定",
    necessary: "必須Cookie",
    necessaryText:
      "これらのCookieはウェブサイトを正常に動作させるために必要です。",
    analytics: "分析Cookie",
    analyticsText:
      "ウェブサイトの利用状況を理解し、サービスを改善するために使用します。",
    save: "設定を保存",
    cookiePolicy: "Cookieポリシー",
    privacyPolicy: "プライバシーポリシー",
    legalNotice: "法的通知",
  },
};

export default function CookieConsent() {
  const pathname = usePathname();

  const locale =
    (pathname.split("/")[1] as keyof typeof texts) in texts
      ? (pathname.split("/")[1] as keyof typeof texts)
      : "es";

  const t = texts[locale];

  const [consent, setConsent] = useState<Consent>(null);
  const [visible, setVisible] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const storedConsent = localStorage.getItem("gincat-cookie-consent");

    if (!storedConsent) {
      setVisible(true);
      return;
    }

    if (storedConsent === "accepted") {
      setConsent("accepted");
      setAnalytics(true);
    }

    if (storedConsent === "denied") {
      setConsent("denied");
      setAnalytics(false);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("gincat-cookie-consent", "accepted");
    localStorage.setItem("gincat-cookie-analytics", "true");

    setAnalytics(true);
    setConsent("accepted");
    setVisible(false);
  };

  const denyAll = () => {
    localStorage.setItem("gincat-cookie-consent", "denied");
    localStorage.setItem("gincat-cookie-analytics", "false");

    setAnalytics(false);
    setConsent("denied");
    setVisible(false);
  };

  const savePreferences = () => {
    localStorage.setItem("gincat-cookie-consent", "accepted");
    localStorage.setItem(
      "gincat-cookie-analytics",
      analytics ? "true" : "false"
    );

    setConsent("accepted");
    setPreferencesOpen(false);
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-end justify-center bg-black/35 p-4 backdrop-blur-[2px] md:items-center">
      <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl md:p-8">
        {!preferencesOpen ? (
          <>
            <h2 className="text-center text-xl font-semibold text-slate-900">
              {t.title}
            </h2>

            <p className="mt-6 text-sm leading-6 text-slate-600">
              {t.description}
            </p>

            <div className="mt-7 grid gap-3 md:grid-cols-3">
              <button
                onClick={acceptAll}
                className="rounded-lg bg-gray-500 px-5 py-4 font-semibold text-white transition hover:bg-gray-600"
              >
                {t.accept}
              </button>

              <button
                onClick={denyAll}
                className="rounded-lg bg-gray-500 px-5 py-4 font-semibold text-white transition hover:bg-gray-600"
              >
                {t.deny}
              </button>

              <button
                onClick={() => setPreferencesOpen(true)}
                className="rounded-lg border border-slate-200 bg-slate-50 px-5 py-4 font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                {t.preferences}
              </button>
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs">
              <a
                href="/documentos/politica-cookies.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 underline hover:text-sky-800"
              >
                {t.cookiePolicy}
              </a>

              <a
                href="/documentos/politica-privacidad.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 underline hover:text-sky-800"
              >
                {t.privacyPolicy}
              </a>

              <a
                href="/documentos/aviso-legal.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 underline hover:text-sky-800"
              >
                {t.legalNotice}
              </a>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold text-slate-900">
              {t.preferenceTitle}
            </h2>

            <div className="mt-7 space-y-5">
              <div className="rounded-xl border border-slate-200 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {t.necessary}
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-slate-500">
                      {t.necessaryText}
                    </p>
                  </div>

                  <div className="shrink-0 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    ON
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {t.analytics}
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-slate-500">
                      {t.analyticsText}
                    </p>
                  </div>

                  <button
                    onClick={() => setAnalytics(!analytics)}
                    className={`relative h-7 w-12 shrink-0 rounded-full transition ${
                      analytics ? "bg-[#00a99d]" : "bg-slate-300"
                    }`}
                    aria-label="Analytics cookies"
                  >
                    <span
                      className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${
                        analytics ? "left-6" : "left-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-7 flex gap-3">
              <button
                onClick={() => setPreferencesOpen(false)}
                className="flex-1 rounded-lg border border-slate-200 px-5 py-3 font-semibold text-slate-700"
              >
                ←
              </button>

              <button
                onClick={savePreferences}
                className="flex-[3] rounded-lg bg-[#00a99d] px-5 py-3 font-semibold text-white transition hover:bg-[#008f85]"
              >
                {t.save}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}