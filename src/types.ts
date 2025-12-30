import type { LitElement } from "lit";

export type LitElementProps<T extends LitElement> = Omit<Partial<T>, "children"> & {
  class?: string;
};
