const messages = ['pl', 'en'].reduce((acc, lang) => {
    acc[lang] = {
        message: require(`i18n/${lang}.js`).messages
    };

    return acc
}, {});

export {messages}
