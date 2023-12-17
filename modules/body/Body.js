import { createSlide1 } from "../slides/Slide1";

export function createBody() {
  const body = document.querySelector('body');
  // body.classList.add('first-color');

  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  body.append(wrapper);
  const slide1 = createSlide1();
  wrapper.append(slide1);
};