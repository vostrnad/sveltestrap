declare module 'sveltestrap' {
  import { SvelteComponent } from 'svelte';
  import { HTMLAttributes } from 'svelte/elements';
  import { Color } from './shared';

  export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    color?: Color;
    body?: boolean;
    inverse?: boolean;
    outline?: boolean;
  }

  export interface CardEvents {}

  export interface CardSlots {
    default: {};
  }

  export default class Card extends SvelteComponent<CardProps, CardEvents, CardSlots> {}
}
