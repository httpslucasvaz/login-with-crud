export async function fetchWrapper(url: string) {
    const data = await fetch(`${process.env.NEXT_BASE_URL}?api_key=${process.env.NEXT_API_KEY}&language=pt-BR&page=1&include_adult=false&query=${url}`);
    const result = await data.json();

    return result
}