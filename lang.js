
function changeLanguage(lang) {
  localStorage.setItem('language', lang);
  location.reload();
}
document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem('language') || 'ua';
  const translations = {
    ua: {
      nav_home: "Головна",
      nav_services: "Послуги",
      nav_about: "Про Нас",
      nav_contacts: "Контакти",
      home_title: "Ласкаво просимо до Смарт Транзит!",
      home_text: "Ми надаємо якісні митно-логістичні послуги 24/7."
    },
    en: {
      nav_home: "Home",
      nav_services: "Services",
      nav_about: "About Us",
      nav_contacts: "Contacts",
      home_title: "Welcome to Smart Transit!",
      home_text: "We provide high-quality customs and logistics services 24/7."
    },
    ru: {
      nav_home: "Главная",
      nav_services: "Услуги",
      nav_about: "О Нас",
      nav_contacts: "Контакты",
      home_title: "Добро пожаловать в Смарт Транзит!",
      home_text: "Мы предоставляем качественные таможенно-логистические услуги 24/7."
    }
  };
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
});
