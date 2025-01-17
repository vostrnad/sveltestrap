declare module 'sveltestrap' {
  import { SvelteComponent } from 'svelte';
  import { HTMLAnchorAttributes } from 'svelte/elements';

  export interface NavbarBrandProps extends HTMLAnchorAttributes {}

  export interface NavbarBrandEvents {}

  export interface NavbarBrandSlots {
    default: {};
  }

  export default class NavbarBrand extends SvelteComponent<NavbarBrandProps, NavbarBrandEvents, NavbarBrandSlots> {}
}
