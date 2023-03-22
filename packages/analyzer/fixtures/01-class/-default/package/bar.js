
import { LitElement } from 'lit';

export class MyElement extends LitElement {
  /** @readonly */
  foo = 1;

  readonly bar = 2;

  get baz() {}
  set baz() {}

  get qux() {}
}
