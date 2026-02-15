import { getTrendingRepos } from './lib/github-client.js';

async function main() {
    const lang = process.argv[2] || '';
    console.log(`--- GitHub Trending (API-First) - ${lang || 'Global'} ---`);
    
    const repos = await getTrendingRepos(lang);
    
    if (repos.length === 0) {
        console.log('無法獲取資料，請檢查網路或 API 限制。');
        return;
    }

    repos.forEach((repo, index) => {
        console.log(`${index + 1}. [${repo.full_name}](${repo.html_url})`);
        console.log(`   ⭐ Stars: ${repo.stargazers_count} | 📝 ${repo.description || '無描述'}`);
    });
}

main();
