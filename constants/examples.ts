export const numberList: number[] = [1, 2, 3, 4, 5];
export const credentials: { username: string, password: string } = { username: 'admin', password: 'admin' };
export const navLinks: string[] = ["Docs", "API", "Community", "Playwright Test"];
export const searchKeyword: string = "test";
export const  flag: boolean = true;
export const flag2: boolean = false;
export const dictionary1: { [key: string]: string } = { key1: 'value1', key2: 'value2' };
export const list1: string[] = ['value1', 'value2'];
export function add(a: number, b: number): number {
    return a + b;
}
export function subtract(a: number, b: number): number {
    return a - b;
}
export function removeLastCharacter(str: string): string {
    return str.slice(0, -1);
}