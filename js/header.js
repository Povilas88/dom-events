const data = [
    { href: '', text: 'Scoreboard' },
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
