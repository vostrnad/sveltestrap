declare module 'sveltestrap' {
  import { SvelteComponent } from 'svelte';
  import { HTMLFormAttributes } from 'svelte/elements';

  export interface FormProps extends HTMLFormAttributes {
    inline?: boolean;
    validated?: boolean;
  }

  export interface FormEvents {}

  export interface FormSlots {
    default: {};
  }

  export default class Form extends SvelteComponent<FormProps, FormEvents, FormSlots> {}
}
