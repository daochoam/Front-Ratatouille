export const saveFileLocally = (name, buffer) => {
    fs.writeFile(`./file_directory/${name}`, buffer, (err) => {
        if (err) {
            console.error(err);
            return false;
        }
    });
    return true;
};