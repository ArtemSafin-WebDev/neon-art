import polyfills from './polyfills';
import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import validation from './validation';
import customSelects from './customSelects';
import masks from './masks';
import fileUpload from './fileUpload';
import anchorLinks from './anchorLinks';
import mediaPlayer from './mediaPlayer';
import pressCenter from './pressCenter';
import accordions from './accordions';
import modals from './modals';
import datepicker from './datepicker';
import pageHeaderNav from './pageHeaderNav';
import menu from './menu';
import menuSlider from './menuSlider';
import numbersSlider from './numbersSlider';
import projectsSlider from './projectsSlider';
import slidingText from './numbers';


document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    setScrollbarWidth();
    validation();
    customSelects();
    masks();
    fileUpload();
    anchorLinks();
    accordions();
    mediaPlayer();
    modals();
    datepicker();
    pressCenter();
    pageHeaderNav();
    menu();
    menuSlider();
    numbersSlider();
    projectsSlider();
    
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300);
    slidingText();
})
