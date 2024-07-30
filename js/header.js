const data = [
    { href: '', text: 'Scoreboard' },
    { href: 'hex-generator', text: 'Hex' },
    { href: 'key-up', text: 'Key up' },
    { href: 'cards', text: 'Cards' },
];

export function header(isHomepage = false) {
    const dot = isHomepage ? '' : '.';
    let navHTML = '';

    for (const item of data) {
        navHTML += `<a href="${dot}./${item.href}">${item.text}</a>`;
    }

    document.body.insertAdjacentHTML('afterbegin', `
        <header>
            <nav>${navHTML}</nav>
        </header>`);
}
