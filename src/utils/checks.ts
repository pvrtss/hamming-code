export function check(word: string, num: number) {
    return /^[01]+$/g.test(word) ? word.length === num ? true : false : false;
}
