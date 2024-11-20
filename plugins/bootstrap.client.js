import Collapse from "bootstrap/js/dist/collapse";
import Dropdown from "bootstrap/js/dist/dropdown";

export default defineNuxtPlugin((nuxtApp) => {

  return {
    provide: {
      bootstrap: {
        Dropdown,
        Collapse,
      }
    }
  };
});
