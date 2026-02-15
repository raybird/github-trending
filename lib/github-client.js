export async function getTrendingRepos(language = '') {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    const dateStr = date.toISOString().split('T')[0];
    const query = `created:>${dateStr}${language ? ` language:${language}` : ''}`;
    const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc&per_page=10`;
    try {
        const response = await fetch(url, { headers: { 'Accept': 'application/vnd.github.v3+json' } });
        const data = await response.json();
        return data.items || [];
    } catch (error) {
        return [];
    }
}
