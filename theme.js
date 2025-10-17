// Theme personalization based on time of day
(function() {
  const hour = new Date().getHours();
  let theme = {};
  if (hour >= 6 && hour < 12) {
    // Morning
    theme = {
      bodyBg: '#fffbe6',
      text: '#222',
      headerBg: '#ffecb3',
      navBg: '#ffe082',
      sectionBg: '#fffde7',
      footerBg: '#ffe082',
    };
  } else if (hour >= 12 && hour < 18) {
    // Afternoon
    theme = {
      bodyBg: '#e3f2fd',
      text: '#222',
      headerBg: '#90caf9',
      navBg: '#64b5f6',
      sectionBg: '#e3f2fd',
      footerBg: '#64b5f6',
    };
  } else if (hour >= 18 && hour < 21) {
    // Evening
    theme = {
      bodyBg: '#ede7f6',
      text: '#222',
      headerBg: '#b39ddb',
      navBg: '#7e57c2',
      sectionBg: '#ede7f6',
      footerBg: '#7e57c2',
    };
  } else {
    // Night
    theme = {
      bodyBg: '#212121',
      text: '#eee',
      headerBg: '#424242',
      navBg: '#333',
      sectionBg: '#2c2c2c',
      footerBg: '#333',
    };
  }
  document.body.style.background = theme.bodyBg;
  document.body.style.color = theme.text;
  document.querySelector('header').style.background = theme.headerBg;
  document.querySelector('nav').style.background = theme.navBg;
  document.querySelectorAll('section').forEach(s => s.style.background = theme.sectionBg);
  document.querySelector('footer').style.background = theme.footerBg;
  document.querySelector('footer').style.color = theme.text;
})();
