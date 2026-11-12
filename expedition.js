'use strict';

const whoi = 'https://www.whoi.edu/ocean-learning-hub/ocean-topics/how-the-ocean-works/ocean-zones/';
const mbari = 'https://www.mbari.org/education/animals-of-the-deep/';
const elevator = 'https://www.whoi.edu/ocean-elevator/index.html';
const zones = [
  {
    id: 'sunlight', title: 'Sunlight Zone', scientific: 'Epipelagic', start: 0, end: 200,
    colors: ['#073c4c', '#0a293f', '#167b8190'],
    description: 'Sunlight powers photosynthesis in this upper layer, feeding food webs from kelp forests to the open ocean.',
    factTitle: 'Where does photosynthesis happen?',
    fact: 'The upper ocean receives enough light for photosynthesis. The depth of this sunlit layer varies with water clarity, and 200 meters is a conventional boundary.',
    animals: [
      ['Green sea turtle', 'Chelonia mydas', 'Shallow coastal feeding grounds, including seagrass beds. Turtles also cross the open ocean.', 'Adults feed largely on seagrass and algae. Young green turtles have a more varied diet.', 'https://ocean.si.edu/ocean-life/reptiles/sea-turtles'],
      ['Clownfish', 'Amphiprion spp.', 'Shallow Indo-Pacific reefs, among the tentacles of certain sea anemones.', 'The anemone offers shelter, and clownfish can help defend it against predators.', 'https://ocean.si.edu/ecosystems/coral-reefs/coral-reefs'],
      ['Giant kelp', 'Macrocystis pyrifera', 'Cool, rocky coastal shallows where sunlight can reach the kelp canopy.', 'Gas-filled floats lift its blades toward the light. Giant kelp is a brown alga.', 'https://ocean.si.edu/kelp-and-kelp-forests']
    ]
  },
  {
    id: 'twilight', title: 'Twilight Zone', scientific: 'Mesopelagic', start: 200, end: 1000,
    colors: ['#0a293f', '#09172d', '#285a8870'],
    description: 'A trace of sunlight remains, too weak for photosynthesis. Some animals rise toward the surface at night to feed.',
    factTitle: 'Why does the water get colder?',
    fact: 'Sunlight warms the upper ocean. Below the surface layer, temperature often falls rapidly through a layer called the thermocline. Its depth and strength vary by location and season.',
    animals: [
      ['Barreleye fish', 'Macropinna microstoma', 'Midwater in the North Pacific, typically hundreds of meters below the surface.', 'Its tubular eyes can rotate inside a transparent shield, looking up for prey and forward as it feeds.', mbari],
      ['Vampire squid', 'Vampyroteuthis infernalis', 'Low-oxygen midwater, including the lower twilight zone.', 'It gathers drifting organic particles with long, retractable filaments.', 'https://www.mbari.org/animal/vampire-squid/'],
      ['Lanternfish', 'Myctophidae', 'Open-ocean midwater. Many species migrate into shallower water at night.', 'Light-producing organs called photophores form patterns that differ by species.', elevator]
    ]
  },
  {
    id: 'midnight', title: 'Midnight Zone', scientific: 'Bathypelagic', start: 1000, end: 4000,
    colors: ['#09172d', '#070e20', '#32447765'],
    description: 'Sunlight disappears. In this cold, dark water, animals can make their own light to lure prey, defend themselves, or communicate.',
    factTitle: 'How do animals make light?',
    fact: 'Bioluminescence comes from chemical reactions in living organisms. Some animals house light-producing bacteria, including many deep-sea anglerfish.',
    animals: [
      ['Deep-sea anglerfish', 'Ceratioidei', 'Deep open water, including the midnight zone. Depth ranges vary among species.', 'Females of many species use a luminous lure to draw prey within reach.', 'https://www.mbari.org/animal/deep-sea-anglerfish/'],
      ['Whiptail gulper eel', 'Saccopharynx lavenbergi', 'Deep open water, including the midnight zone.', 'A huge mouth helps this eel take advantage of rare feeding opportunities in the deep.', 'https://www.mbari.org/animal/whiptail-gulper-eel/'],
      ['Dumbo octopus', 'Grimpoteuthis spp.', 'On or near the deep seafloor, including depths in the midnight zone.', 'It swims using paired ear-like fins and can also propel itself with its webbed arms.', 'https://www.fisheries.noaa.gov/feature-story/diving-creatures-deep']
    ]
  },
  {
    id: 'abyssal', title: 'Abyssal Zone', scientific: 'Abyssopelagic', start: 4000, end: 6000,
    colors: ['#070e20', '#050a14', '#29275160'],
    description: 'Cold water blankets vast sediment plains. Much of the food here arrives as particles sinking from above.',
    factTitle: 'How much pressure is here?',
    fact: 'Water adds roughly one atmosphere of pressure for every 10 meters of depth. At 5,000 meters, the pressure is about 500 times the air pressure at sea level.',
    animals: [
      ['Sea pig', 'Scotoplanes spp.', 'Soft sediment on deep ocean floors, including abyssal plains.', 'This sea cucumber walks on enlarged tube feet and eats organic matter in the sediment.', 'https://oceanexplorer.noaa.gov/ocean-fact/what-are-abyssal-plains/'],
      ['Abyssal tripodfish', 'Bathypterois grallator', 'Deep seafloor, including the upper abyssal zone.', 'It props itself above the bottom on elongated fin rays and waits for small prey to drift past.', elevator],
      ['Xenophyophore', 'Xenophyophorea', 'Deep seafloor, including abyssal plains.', 'These single-celled organisms build structures from sediment particles. Some grow several centimeters across.', elevator]
    ]
  },
  {
    id: 'hadal', title: 'Hadal Zone', scientific: 'Hadalpelagic', start: 6000, end: 11000,
    colors: ['#050a14', '#040914', '#1e254f65'],
    description: 'Beyond 6,000 meters, deep trenches and other depressions hold some of Earth’s highest-pressure habitats.',
    factTitle: 'How cold is the bottom?',
    fact: 'Hadal waters are generally only a few degrees above freezing. Temperature varies with the trench and the water masses that reach it.',
    animals: [
      ['Hadal snailfish', 'Pseudoliparis spp.', 'Certain deep Pacific trenches. These fish inhabit only part of the hadal depth range.', 'They use suction to capture small crustaceans and a second set of jaws in the throat to process prey.', 'https://www.whoi.edu/oceanus/feature/squishy-survivor-snailfish-hadal-zone/'],
      ['Supergiant amphipod', 'Alicella gigantea', 'Deep ocean floors and trenches, including the hadal zone.', 'This scavenging crustacean grows far larger than most amphipods.', 'https://dmoserv3.whoi.edu/data_docs/Mariana_Perspectives/FK141109_Cruise_Report_JDC_2015-01-12.pdf'],
      ['Hadal isopod', 'Munnopsidae', 'Deep seafloor, including the Puerto Rico Trench, where a swimming isopod was documented at about 6,100 meters.', 'Researchers observed the isopod swimming upward with two sets of paddle-like legs.', 'https://www.whoi.edu/oceanus/feature/a-hadal-zone-mystery-solved-deep-sea-isopod/']
    ]
  }
];

const number = new Intl.NumberFormat('en-US');
const water = document.querySelector('#water');
const depthLinks = document.querySelector('#depth-links');
const dialog = document.querySelector('#specimen');
const setText = (id, value) => { document.getElementById(id).textContent = value; };
const artStyle = (row, col) => `--x:${col * 50}%;--y:${row * 25}%`;

zones.forEach((zone, row) => {
  const section = document.createElement('section');
  section.id = zone.id;
  section.className = 'zone';
  ['--top', '--bottom', '--glow'].forEach((key, index) => section.style.setProperty(key, zone.colors[index]));
  const range = zone.id === 'hadal' ? '6,000 m and deeper' : `${number.format(zone.start)}–${number.format(zone.end)} m`;
  section.innerHTML = `
    <div class="bubbles" aria-hidden="true"></div>
    <div class="wrap">
      <div class="zone-head">
        <div><p class="zone-label">${String(row + 1).padStart(2, '0')} / ${zone.scientific}</p>
        <h2>${zone.title}</h2></div>
        <p class="zone-copy">${zone.description}<span class="measure">${range}</span></p>
      </div>
      <div class="creatures"></div>
      <details class="fact"><summary>${zone.factTitle}</summary><p>${zone.fact} <a href="${whoi}">Ocean zones · WHOI</a></p></details>
    </div>`;
  const bubbles = section.querySelector('.bubbles');
  for (let i = 0; i < 12 - row * 2; i++) {
    const bubble = document.createElement('i');
    bubble.style.cssText = `--left:${(i * 23 + 7) % 100}%;--size:${5 + i % 5 * 4}px;--duration:${12 + i % 7}s;--delay:-${i * 1.8}s`;
    bubbles.append(bubble);
  }
  zone.animals.forEach(([name, latin, habitat, fact, source], col) => {
    const button = document.createElement('button');
    button.className = 'creature';
    button.type = 'button';
    button.innerHTML = `<span class="art" aria-hidden="true" style="${artStyle(row, col)}"></span>
      <span class="creature-label">${name}<span class="plus" aria-hidden="true">+</span></span>`;
    button.addEventListener('click', () => {
      const art = document.querySelector('#animal-art');
      art.style.cssText = artStyle(row, col);
      art.setAttribute('aria-label', `Illustration of ${name}`);
      setText('animal-zone', zone.title);
      setText('animal-name', name);
      setText('animal-latin', latin);
      setText('animal-habitat', habitat);
      setText('animal-fact', fact);
      document.querySelector('#animal-source').href = source;
      dialog.showModal();
    });
    section.querySelector('.creatures').append(button);
  });
  water.append(section);

  const link = document.createElement('a');
  link.href = `#${zone.id}`;
  link.textContent = zone.title.replace(' Zone', '');
  link.setAttribute('aria-label', zone.title);
  link.style.top = `${row * 24 + 2}%`;
  depthLinks.append(link);
});

dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});

const sections = [...water.children];
const sub = document.querySelector('#sub');
let framePending = false;
let currentZone = '';
function updateDepth() {
  framePending = false;
  const probe = window.innerHeight * 0.22;
  const index = sections.findLastIndex(section => section.getBoundingClientRect().top <= probe);
  let depth = 0;
  let progress = 0;
  if (index >= 0) {
    const bounds = sections[index].getBoundingClientRect();
    const fraction = Math.min(1, Math.max(0, (probe - bounds.top) / bounds.height));
    const zone = zones[index];
    depth = Math.round(zone.start + fraction * (zone.end - zone.start));
    progress = Math.min(100, 2 + index * 24 + fraction * (index === 4 ? 2 : 24));
  }
  setText('reading', `${number.format(depth)} m`);
  sub.style.top = `${progress}%`;
  sub.style.setProperty("--progress", `${progress}%`);
  const location = index < 0 ? 'Surface' :
    sections[index].getBoundingClientRect().bottom <= probe ? 'Expedition complete' :
    `${index + 1}/${zones.length} · ${zones[index].title}`;
  if (location === currentZone) return;
  currentZone = location;
  setText('zone-progress', location);
  [...depthLinks.children].forEach((link, i) => {
    if (i === index && location !== 'Expedition complete') link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
function queueDepth() {
  if (!framePending) {
    framePending = true;
    requestAnimationFrame(updateDepth);
  }
}
window.addEventListener('scroll', queueDepth, { passive: true });
window.addEventListener('resize', queueDepth);
new ResizeObserver(queueDepth).observe(water);
updateDepth();

const questions = [
  ['Which zone receives enough sunlight for photosynthesis?', ['Sunlight', 'Twilight', 'Midnight'], 0, 'Photosynthesis in the open ocean depends on light in the upper layer.'],
  ['What happens to water pressure as you descend?', ['It falls', 'It rises', 'It stays constant'], 1, 'Water pressure increases by roughly one atmosphere every 10 meters.'],
  ['Where do hadal snailfish live?', ['Kelp forests', 'Sunlit coral reefs', 'Deep ocean trenches'], 2, 'Hadal snailfish inhabit certain deep Pacific trenches.']
];
const form = document.querySelector('#questions');
const titles = [
  'Ocean Explorer in Training', 'Ocean Explorer in Training',
  'Deep-Sea Adventurer', 'Master Ocean Explorer'
];
questions.forEach(([question, options], i) => {
  const field = document.createElement('fieldset');
  field.innerHTML = `<legend>${i + 1}. ${question}</legend>${options.map((option, j) =>
    `<label><input required type="radio" name="q${i}" value="${j}"> ${option}</label>`).join('')}
    <p class="feedback" id="feedback-${i}"></p>`;
  form.append(field);
});
form.insertAdjacentHTML('beforeend', '<button class="action" type="submit">Check my answers</button>');
form.addEventListener('submit', event => {
  event.preventDefault();
  const answers = new FormData(form);
  let score = 0;
  questions.forEach(([, , correct, explanation], i) => {
    const matches = Number(answers.get(`q${i}`)) === correct;
    score += Number(matches);
    setText(`feedback-${i}`, `${matches ? 'Correct.' : 'Try again.'} ${explanation}`);
  });
  setText('score', `${titles[score]} · ${score}/${questions.length} correct`);
});
document.querySelector('#restart').addEventListener('click', () => {
  form.reset();
  questions.forEach((_, i) => setText(`feedback-${i}`, ''));
  setText('score', '');
});
