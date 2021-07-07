export default (text: string): string => {
    let name = '';

    const splittedText = text.trim().split(' ');

    if (splittedText.length >= 0) {
        name = `${splittedText[0].charAt(0)}${splittedText[
            splittedText.length - 1
        ].charAt(0)}`;
    } else {
        return '';
    }

    return name.toUpperCase();
};
