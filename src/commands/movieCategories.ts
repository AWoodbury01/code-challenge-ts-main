export const movieCategories = (categories: any): string => {
    let currentCategories;
    let result = `Movie Categories:\n\n`

    for (let m of categories.movieCategories) {
        result += `\t${m.category}\t${m.description}\n\n`;
    }

    return result
}