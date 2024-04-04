import { Serializable } from "./types";

export class Storage<T extends Serializable> {
  private storage: globalThis.Storage | null;

  constructor(
    private key: string,
    private initialValue?: T,
    private type: "local" | "session" = "local"
  ) {
    this.storage = this.initializeStorage();
  }

  initializeStorage() {
    if (this.checkWindow()) {
      return this.type === "local" ? window.localStorage : window.sessionStorage;
    }

    return null;
  }

  checkWindow() {
    if (typeof window === "undefined") return false;

    return true;
  }

  get(): T | undefined {
    if (!this.storage) return this.initialValue;

    try {
      const item = typeof window !== "undefined" ? this.storage.getItem(this.key) : null;
      return item ? JSON.parse(item) : this.initialValue;
    } catch (error) {
      console.log(error);
      return this.initialValue;
    }
  }

  set(value: T): void {
    try {
      if (typeof window !== "undefined") {
        this.storage?.setItem(this.key, JSON.stringify(value));
      }
    } catch (error) {
      console.log(error);
    }
  }

  clear() {
    this.storage?.removeItem(this.key);
  }
}
