import { createSlide } from '../base/Slide.js';
import { createElement } from '../base/CreateElement.js';

export function createSlide1() {

  const slide = createSlide();

  const slideTitle = createElement('p', '', 'Peptic ulcer disease (PUD)', slide);
  const slideSubtitle = createElement('p', ['grey-upper-text'], 'Is imbalance between protective factors and aggressive factors', slide);
  const factorsList = createElement('div', ['list-container'], '', slide);

  const protectiveFactorsTitle = createElement('ol', ['list'], 'protective factors:', factorsList);
  const protectiveFactors = ['Prostaglandins', 'Bicarbonate', 'Mucus', 'Somatostatin'];
  protectiveFactors.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    protectiveFactorsTitle.append(listItem);
  });

  const agressiveFactorsTitle = createElement('ol', ['list'], 'agressive factors:', factorsList);
  const agressiveFactors = ['H.pylori', 'HCl, pepsin, gastritis', 'Stress, smoking, fried and spicy food, etc.'];
  agressiveFactors.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    agressiveFactorsTitle.append(listItem);
  })

  const treatmentApproach = createElement('div', ['blue-background'], '', slide);

  createElement('span', [], '80-95% of PUD associate with H. pylori or NSAIDs intake. The most effective regimens to cure H. pylori infection combine two antibiotics ', treatmentApproach);

  createElement('span', ['bold-text'], 'metronidazole, tetracycline, amoxicillin, or clarithromycin', treatmentApproach);

  createElement('span', [], ' with an adjunctive agent ', treatmentApproach);

  createElement('span', ['bold-text'], 'proton pump inhibitor', treatmentApproach);

  createElement('span', [], ' and/or bismuth) for 14 days.', treatmentApproach);

  return slide;
}