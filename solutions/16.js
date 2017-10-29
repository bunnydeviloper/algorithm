const kebabCase = (string) => {
    return string.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);
};
module.exports = kebabCase;

//longer version: string.replace(/([A-Z])/g, function (g) { return '-' + g[0].toLowerCase() })
