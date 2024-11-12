const data = [
    { href: '', text: 'Scoreboard' },
    { href: 'html/hexGenerator.html', text: 'Hex' },
    { href: 'html/keyUp.html', text: 'Key up' },
    { href: 'html/vowelCount.html', text: 'Vowels' },
    { href: 'html/cards.html', text: 'Cards' },
    { href: 'html/slide.html', text: 'Slide' },
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
