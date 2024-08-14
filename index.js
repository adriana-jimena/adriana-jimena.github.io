/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

const translations = {
  en: {
      // Navigation
      navAbout: "About Me",
      navWork: "Tools",
      navContact: "Get in Touch",

      // Header
      headerTitle: "Adriana B.",
      headerSubtitle: "Astrologer based in tradition, with elements of modern astrology.",
      headerButton: "Get in Touch",

      // About Section
      aboutTitle: "About Me",
      aboutText: `
          Spirituality has always been present in my life, from my early years with the Catholic education provided in school in Colombia, my native country. 
          Even so, with that foundation, while I was in college, I read books about the "violet flame" by Master Saint Germain, 
          the work of Alice Bayle and Edgar Cayce, among others.

          <br><br> Later in life, I was introduced to the world with some of its religions and interacted with different cultures, so through the lens of my friends, 
          I was able to learn about other spiritual worlds.

          <br><br> When I arrived in Brazil, as José Millán, a Spanish astrologer, says: "like all important things in life, they are not coincidental", 
          I encountered Rosicrucianism AMORC. There, I formally learned about the secret sciences of astrology, the Kabbalah, and other branches of Hermeticism.

          <br><br> In 2018, after living in the United States for 1 year and 4 months, I decided to study floral therapy after seeing its positive results 
          when using it with my eldest son to treat his allergies.

          <br><br> By chance, in the same institute where I was studying floral therapy, I took my first astrology course. 
          And since then, I continue studying it. In other words, if astrology were a university degree, I would have already graduated, 
          but astrology is a science that continues to be studied throughout life. To me, astrology is more than a science; it is an art. 
          It is the art of relationships, the study of the cycles of life, the interpretation of that unique imprint that every human being carries. 
          The natal chart is that mandala, that imprint that was recorded at the time of birth; it speaks to us, giving us many explanations 
          for why we are experiencing certain situations, predicting events, choosing the best moment, or resolving doubts (traditional astrology).

          <br><br> However, I am a firm believer that no matter what the stars tell us, we are the ones who have the great potential to change it or at least 
          to accept it, live it differently, or, in the last case, be aware of it to work on it.

          <br><br> "The man is either a victim of fate or the master of his destiny." Ralph M. Lewis.
      `,

      // Work Section
      workTitle: "Tools and Helping Therapies",
      work1Title: "Discover Your 3 Kabbalah Angels",
      work1Text: `
          You will discover the 3 angels, or names of God, which were given at the time of birth. Each of the angels or names of God 
          is written in Hebrew, their letters are visualized, invoked, and their psalm is recited. 
          This technique can also be extended to the angels corresponding to other planets if needed.
      `,
      work1List: [
          "The personal angel (some call it the guardian angel) is the angel you can always invoke or visualize its Hebrew letters at any time; it helps you whenever you need it. You can also read the psalm associated with this name of God.",
          "The mental angel is obtained from the second barrier of the zodiac. As its name suggests, this angel will help you when you need to use your mental faculties.",
          "The emotional angel is obtained from the third barrier, calculated with your birth time. Of course, to obtain this angel, you need to have the verified birth time."
      ],
      work2Title: "Discover Your Lunar Angels",
      work2Text: `
          These are angels that act immediately or for emergencies. They are the angels related to daily life events. 
          They do not help in the emotional or mental planes, i.e., with our feelings and ideas. 
          They are invoked according to the lunar phase or the lunar mansion.
      `,
      work3Title: "Gem Astrology",
      work3Text: `
          Gem astrology is a technique that allows you to alleviate planets, open houses without planets, 
          open aspects to unaspected planets, mitigate difficult transits, obtain the gem of the year, or activate progressions and directions. 
          Within the natal chart, each degree is related to a fixed star, and this, in turn, with a gem. 
          "The essential characteristic of the stars is the emission of radiation in the form of light and magnetism, 
          while the particularity of gems is their ability to retain light or be magnetic" (Gem Astrology, by Tito Macia).

          This technique is limited to physically finding the gem related to the fixed star you want to activate.
      `,
      work4Title: "Floral Therapy",
      work4Text: `
          Floral essences are taken to help with emotional processes. They were rediscovered by Dr. Edward Bach in modern times 
          and are commonly used in astrology to alleviate difficult transits or associated with the natal moon, using the 12 healers.

          The Lunar Complex analysis can also be performed if the person needs it. This is a technique developed by Dr. Franco Rossomando 
          and involves obtaining the floral essence associated with the natal moon, antiscia moon, virtual moon, and house moon.
      `,

      // Contact Section
      contactTitle: "Get in Touch",
      contactText: `
          Here we interpret your astral chart, and we will talk about the energies that are imprinted at the moment of birth. 
          If necessary, the birth time will be verified using techniques such as atacires, confirmed with the Hermes Trutine, 
          or worked with the sunrise chart.
      `,
      contactButton: "elestialq@gmail.com"
  },
  es: {
      // Navigation
      navAbout: "Acerca de mí",
      navWork: "Herramientas",
      navContact: "Ponte en contacto",

      // Header
      headerTitle: "Adriana B.",
      headerSubtitle: "Astróloga basada en la tradición, con elementos de la astrología moderna.",
      headerButton: "Ponte en contacto",

      // About Section
      aboutTitle: "Acerca de mí",
      aboutText: `
          La espiritualidad siempre ha estado presente en mi vida, desde mis primeros años de vida con la formación católica impartida en el colegio en Colombia, mi país natal. 
          Aun así, con esa base, mientras estaba en la universidad, leía libros de la "llama violeta", del maestro Saint Germain, 
          el trabajo de Alice Bayle y Edgar Cayce, entre otros.

          <br><br> Después la vida me puso a conocer el mundo con algunas de sus religiones y a interactuar con diferentes culturas, 
          así que a través de la lente de mis amigos pude conocer otros mundos espirituales.

          <br><br> Cuando llegué a Brasil y como dice José Millán, un astrólogo español: "como todas las cosas importantes de la vida, no son casuales", 
          llegué al Rosacrucionismo AMORC. Allí conocí formalmente las ciencias secretas de la astrología, la cábala, y otras ramas del hermetismo.

          <br><br> En 2018, después de llevar 1 año y 4 meses en los Estados Unidos, me dediqué a estudiar la terapia floral al ver sus resultados positivos 
          al utilizarla con mi hijo mayor para tratar sus alergias.

          <br><br> Por otra casualidad, en el mismo instituto donde estudiaba la terapia floral, hice mi primer curso de astrología. 
          Y desde allí continúo estudiándola. Es decir, si la astrología fuera una carrera universitaria, ya estaría graduada, 
          pero la astrología es una ciencia que se continúa estudiando toda la vida. Para mí, la astrología es más que una ciencia; es un arte. 
          Es el arte de las relaciones, del estudio de los ciclos de la vida, de la interpretación de esa huella única que es cada ser humano. 
          La carta natal es ese mándala, es esa impronta que se plasmó al momento del nacimiento; nos habla, dándonos muchas explicaciones 
          de por qué estamos viviendo ciertas situaciones, prediciendo eventos, eligiendo el mejor momento, o resolviendo dudas (astrología tradicional).

          <br><br> Sin embargo, soy una ferviente creyente de que por más que los astros nos digan algo, nosotros somos los que tenemos ese gran potencial 
          para cambiarlo o al menos asumirlo, vivirlo de otra manera, o, en el último caso, ser conscientes de ello para trabajarlo.

          <br><br> "El hombre es víctima de su destino o el dueño de su destino". Ralph M. Lewis.
      `,

      // Work Section
      workTitle: "Herramientas y terapias de ayuda",
      work1Title: "Conoce tus 3 genios de la Cábala",
      work1Text: `
          Se obtendrán los 3 genios, ángeles o nombre de Dios, los cuales fueron dados al momento de nacer. Cada uno de los ángeles o nombre de Dios 
          están escritos en hebreo, se visualizan sus letras, se invocan y se recita su salmo. 
          Esta técnica también se puede extender a los ángeles correspondientes a otros planetas en caso de que se necesite trabajar con ellos.
      `,
      work1List: [
          "El ángel personal (algunos lo llaman el ángel de la guarda) es el ángel al que siempre puedes invocar o visualizar sus letras en hebreo en cualquier momento; él te ayuda siempre que lo necesites. También puedes leer el salmo que está asociado a este nombre de Dios.",
          "El ángel mental se obtiene de la segunda barrera del zodiaco. Como su nombre lo indica, este ángel te ayudará cuando tengas que usar tus facultades mentales.",
          "El ángel emocional se obtiene de la tercera barrera, calculándolo con tu hora de nacimiento. Por supuesto, para obtener este ángel, se necesita tener la hora de nacimiento verificada."
      ],
      work2Title: "Conoce tus ángeles lunares",
      work2Text: `
          Son ángeles que actúan de forma inmediata o para urgencias. Ellos son los ángeles que se relacionan con los acontecimientos de la vida cotidiana. 
          No nos ayudan en el plano emocional ni mental, o sea, con nuestros sentimientos e ideas. Se invocan de acuerdo a la fase lunar en que se encuentre o a la mansión lunar.
      `,
      work3Title: "Usa la Gemoastrologia",
      work3Text: `
          La gemoastrologia es una técnica que permite aliviar planetas, abrir casas carentes de planetas, 
          abrir aspectos a los planetas sin aspectar, atenuar tránsitos penosos, obtener la gema del año o activar progresiones y direcciones. 
          Dentro de la carta natal, cada grado tiene relación con una estrella fija y esta, a su vez, con una gema. 
          "La característica esencial de las estrellas es la emisión de radiaciones en forma de luz y magnetismo, 
          mientras que la particularidad de las gemas es su capacidad para retener la luz o ser magnéticas" (Gemoastrologia, por Tito Macia).

          Esta técnica está limitada a encontrar físicamente la gema relacionada con la estrella fija que se quiere activar.
      `,
      work4Title: "Usa la Terapia Floral",
      work4Text: `
          Es tomar las esencias florales para ayudar en los procesos emocionales. Fue redescubierta por el Doctor Edward Bach en los tiempos modernos 
          y es usada comúnmente en la astrología para aliviar tránsitos penosos o asociada a la luna de nacimiento, utilizando los 12 curadores.

          También se podría hacer el análisis del Complejo Lunar en caso de que la persona lo necesite. 
          Esta es una técnica desarrollada por el Doctor Franco Rossomando y consiste en obtener la esencia floral asociada a la luna natal, 
          la luna antiscia, la luna virtual, y la luna por casa.
      `,

      // Contact Section
      contactTitle: "Ponte en contacto",
      contactText: `
          Aquí se hace una interpretación de lo que es tu carta natal, hablaremos de las energías que se plasman en el momento de nacer. 
          En caso de necesitarse, se verificará la hora de nacimiento usando técnicas como los atacires, se confirmaría con la trutina de Hermes, 
          o se trabajaría con la carta de la salida del sol.
      `,
      contactButton: "elestialq@gmail.com"
  }
};


function switchLanguage() {
  const lang = document.getElementById('language-switcher').checked ? 'en' : 'es';

  // Navigation
  document.getElementById('navAbout').textContent = translations[lang].navAbout;
  document.getElementById('navWork').textContent = translations[lang].navWork;
  document.getElementById('navContact').textContent = translations[lang].navContact;

  // Header
  document.getElementById('headerTitle').textContent = translations[lang].headerTitle;
  document.getElementById('headerSubtitle').innerHTML = translations[lang].headerSubtitle;
  document.getElementById('headerButton').textContent = translations[lang].headerButton;

  // About Section
  document.getElementById('aboutTitle').textContent = translations[lang].aboutTitle;
  document.getElementById('aboutText').innerHTML = translations[lang].aboutText;

  // Work Section
  document.getElementById('workTitle').textContent = translations[lang].workTitle;
  document.getElementById('work1Title').textContent = translations[lang].work1Title;
  document.getElementById('work1Text').innerHTML = translations[lang].work1Text;
  document.getElementById('work1List1').textContent = translations[lang].work1List[0];
  document.getElementById('work1List2').textContent = translations[lang].work1List[1];
  document.getElementById('work1List3').textContent = translations[lang].work1List[2];
  
  document.getElementById('work2Title').textContent = translations[lang].work2Title;
  document.getElementById('work2Text').innerHTML = translations[lang].work2Text;
  
  document.getElementById('work3Title').textContent = translations[lang].work3Title;
  document.getElementById('work3Text').innerHTML = translations[lang].work3Text;

  document.getElementById('work4Title').textContent = translations[lang].work4Title;
  document.getElementById('work4Text').innerHTML = translations[lang].work4Text;

  // Contact Section
  document.getElementById('contactTitle').textContent = translations[lang].contactTitle;
  document.getElementById('contactText').innerHTML = translations[lang].contactText;
  document.getElementById('contactButton').textContent = translations[lang].contactButton;
}

// Add event listener to the language switcher toggle
document.getElementById('language-switcher').addEventListener('change', switchLanguage);

// Initial language setup
switchLanguage();

