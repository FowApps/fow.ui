export default (text: string): string => {
    let name = '';

    const splitedText = text.trim().split(' ');

    if (splitedText.length >= 0) {
        name = `${splitedText[0].charAt(0)}${splitedText[
            splitedText.length - 1
        ].charAt(0)}`;
    } else {
        name = `${splitedText[0].charAt(0)}${splitedText[0].charAt(1)}`;
    }

    return name.toUpperCase();
};
