export const removeForwardsSlash = (str: string): string => {
    return str.replace(/\//g, '');
};

export const removeBackwardSlash = (str: string): string => {
    return str.replace(/\\/g, '');
};

export const removeFirstCharacter = (str: string): string => {
    return str.slice(1);
};

export const removeLastCharacter = (str: string): string => {
    return str.slice(0, -1);
};

export const removeFirstAndLastCharacter = (str: string): string => {
    return str.slice(1, -1);
};
