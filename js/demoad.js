(function () {
  var filename = '../../codrops/adpacks/demoadd41d.css?' + new Date().getTime();
  var fileref = document.createElement('link');
  fileref.setAttribute('rel', 'stylesheet');
  fileref.setAttribute('type', 'text/css');
  fileref.setAttribute('href', filename);
  document.getElementsByTagName('head')[0].appendChild(fileref);

  let cdaSpots = ['ad4'];
  let cdaSpot = cdaSpots[Math.floor(Math.random() * cdaSpots.length)];

  switch (cdaSpot) {
    case 'ad1':
      var cdaLink = 'https://serpapi.com/?utm_source=tympanusdemo';
      var cdaImg = '../../../codrops-1f606.kxcdn.com/codrops/wp-content/uploads/2025/10/Serpapid422.jpg?x70870';
      var cdaImgAlt = 'SerpApi';
      var cdaText =
        'Get structured search data without fighting captchas and build faster with simple, real-time API calls.';
      break;
    case 'ad2':
      var cdaLink = 'https://spline.design/?ref=codrops-demos';
      var cdaImg = '../../codrops/wp-content/uploads/2025/11/spline_image_banner.77c2eb63.png';
      var cdaImgAlt = 'Spline';
      var cdaText = 'Design, animate, and ship real-time 3D experiences with Spline.';
      break;
    case 'ad3':
      var cdaLink =
        'https://readymag.com/websites-of-the-year/?utm_source=codrops&amp;utm_medium=partnership_article&amp;utm_campaign=woty';
      var cdaImg = '../../codrops/wp-content/uploads/2025/11/readymag-voting.png';
      var cdaImgAlt = 'Readymag';
      var cdaText = 'Readymag Websites of the Year 2025: Check out the winning websites.';
      break;
    case 'ad4':
      var cdaLink = 'https://www.elegantthemes.com/affiliates/idevaffiliate.php?id=17972&amp;url=87433';
      var cdaImg = '../../codrops/wp-content/banners/Divi_Carbon.jpg';
      var cdaImgAlt = 'Divi';
      var cdaText = 'Power Your Freelance Web Business With Divi';
      break;
    default:
      var cdaLink = 'https://bit.ly/codrops-diviai';
      var cdaImg = '../../codrops/wp-content/banners/Divi_Carbon.jpg';
      var cdaImgAlt = 'Divi AI';
      var cdaText = 'Transform content, code, images, and websites on demand with DIVI AI.';
  }

  var cda = document.createElement('div');
  cda.id = 'cdawrap';
  cda.style.display = 'none';
  cda.innerHTML =
    '<a href="' +
    cdaLink +
    '" class="carbon-img" target="_blank" rel="noopener"><img src="' +
    cdaImg +
    '" alt="' +
    cdaImgAlt +
    '" border="0" height="100" width="130"></a><a href="' +
    cdaLink +
    '" class="carbon-text" target="_blank" rel="noopener">' +
    cdaText +
    '</a><div class="cda-footer"><span class="cda-remove" id="cda-remove">Close</span></div>';
  document.getElementsByTagName('body')[0].appendChild(cda);

  setTimeout(function () {
    cda.style.display = 'block';
  }, 1000);

  document.getElementById('cda-remove').addEventListener('click', function (e) {
    cda.style.display = 'none';
    e.preventDefault();
  });
})();
