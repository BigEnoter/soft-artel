function findSubstringBounds(input: string, position: number): { start: number; end: number } | null {
    if (position < 0 || position >= input.length) {
        return null;
    }

    let start = input.lastIndexOf('\n', position);
    if (start === -1) {
        start = 0;
    } else {
        start += 1;
    }

    let end = input.indexOf('\n', position) - 1;
    if (end === -1) {
        end = input.length;
    }

    return { start, end };
}

// Пример использования:
const str: string = "Hello\nWorld\nThis is a test\nString";
const str2: string = "абвг\nдежзи\nклмн";
const position: number = 15;
const bounds = findSubstringBounds(str, position);
const bounds2 = findSubstringBounds(str2, 1);
console.log(bounds, bounds2);

interface A {
    id: number;
    name: string;
    age?: number;
}

interface B {
    title: string;
    description: string;
    isActive: boolean;
}

function hasKeys<T>(data: Partial<T>, keys: Array<keyof T>): boolean {
    return keys.every(key => key in data);
}

// Пример использования функции
const dataA: Partial<A> = { id: 1, name: "Alice" };
const keysA: Array<keyof A> = ["id", "name"];
const resultA = hasKeys(dataA, keysA);
console.log(resultA);

const dataB: Partial<B> = { title: "Example", isActive: true };
const keysB: Array<keyof B> = ["title", "description"];
const resultB = hasKeys(dataB, keysB);
console.log(resultB)