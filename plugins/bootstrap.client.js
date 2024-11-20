import Collapse from "bootstrap/js/dist/collapse";
import Dropdown from "bootstrap/js/dist/dropdown";
import Modal from "bootstrap/js/dist/modal";

// import VCalendar from 'v-calendar';
// import 'v-calendar/style.css';

export default defineNuxtPlugin((nuxtApp) => {

  return {
    provide: {
      bootstrap: {
        Dropdown,
        Collapse,
        Modal: element => new Modal(element)
        // VCalendar
      }
    }
  };
});
