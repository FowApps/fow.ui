export default (text: string): string => {
    let name = '';

    const splittedText = text.trim().split(' ');

    if (splittedText.length === 1) {
        name = `${splittedText[0].charAt(0)}`;
    } else {
        name = `${splittedText[0].charAt(0)}${splittedText[
            splittedText.length - 1
        ].charAt(0)}`;
    }

    return name.toUpperCase();
};
