import { createSlide } from '../base/Slide.js';

export function createSlide1() {

  const slide = createSlide();

  const slideTitle = document.createElement('p');
  slideTitle.textContent = 'Peptic ulcer disease (PUD)';
  slide.append(slideTitle);

  const slideSubtitle = document.createElement('p');
  const subtitle = 'Is imbalance between protective factors and aggressive factors';
  slideSubtitle.classList.add('grey-upper-text');
  slideSubtitle.textContent = subtitle;
  slide.append(slideSubtitle);

  const factorsList = document.createElement('div');
  factorsList.classList.add('list-container');

  const protectiveFactorsTitle = document.createElement('ol');
  protectiveFactorsTitle.classList.add('list');
  protectiveFactorsTitle.textContent = 'protective factors:';
  const protectiveFactors = ['Prostaglandins', 'Bicarbonate', 'Mucus', 'Somatostatin'];
  protectiveFactors.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    protectiveFactorsTitle.append(listItem);
  });

  const agressiveFactorsTitle = document.createElement('ol');
  agressiveFactorsTitle.classList.add('list');
  agressiveFactorsTitle.textContent = 'agressive factors:';
  const agressiveFactors = ['H.pylori', 'HCl, pepsin, gastritis', 'Stress, smoking, fried and spicy food, etc.'];
  agressiveFactors.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    agressiveFactorsTitle.append(listItem);
  })

  factorsList.append(protectiveFactorsTitle, agressiveFactorsTitle);
  slide.append(factorsList);

  const treatmentApproach = document.createElement('div');
  treatmentApproach.classList.add('blue-background');

  const antibiotics = document.createElement('span');
  antibiotics.textContent = 'metronidazole, tetracycline, amoxicillin, or clarithromycin';
  antibiotics.classList.add('bold-text');

  const ppi = document.createElement('span');
  ppi.textContent = 'proton pump inhibitor';
  ppi.classList.add('bold-text');

  const text1 = document.createElement('span');
  text1.textContent = '80-95% of PUD associate with H. pylori or NSAIDs intake. The most effective regimens to cure H. pylori infection combine two antibiotics ';

  const text2 = document.createElement('span');
  text2.textContent = ' with an adjunctive agent ';

  const text3 = document.createElement('span');
  text3.textContent = ' and/or bismuth) for 14 days.';

  treatmentApproach.append(text1, antibiotics, text2, ppi, text3);

  slide.append(treatmentApproach);

  return slide;
}