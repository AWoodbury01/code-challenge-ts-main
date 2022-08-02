import categories from "../data/categories.json"

export const movieCategories = (categories: any) => {
    let currentCategories;
    let result = `Movie Categories:\n`

    for (let m of categories.categoryDescriptions) {
        result += `\t${categories}`

    }

    return result
}