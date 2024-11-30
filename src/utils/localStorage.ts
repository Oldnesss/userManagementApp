export class LocalStorageService {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  getData<T>(): T[] {
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : [];
  }

  saveData<T>(data: T[]): void {
    localStorage.setItem(this.key, JSON.stringify(data));
  }
}
