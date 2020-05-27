function capitalize(string) {
    return string.split(" ").map(palabra => palabra.substr(0, 1).toUpperCase() + palabra.substr(1).toLocaleLowerCase()).join(" ");
}
