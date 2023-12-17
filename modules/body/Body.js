import { createSlide1 } from "../slides/Slide1";
import { createSlide2 } from "../slides/Slide2";

export function createBody() {
  const body = document.querySelector('body');

  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  body.append(wrapper);
  const slide1 = createSlide1();
  const slide2 = createSlide2();

  wrapper.append(slide1, slide2);
};