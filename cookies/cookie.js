const getCookieByName = (name) => {
    const cookieString = document.cookie;
    const cookieSplit = cookieString.split('; ');
    const getCookiePair = cookieSplit.find(c => c.includes(name))

    if (getCookiePair) {
        const cookieValue = getCookiePair.split('=')[1];
        return cookieValue;
    }
}