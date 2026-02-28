import { getTrendingRepos } from './lib/github-client.js';

async function main() {
    const lang = process.argv[2] || '';
    const date = new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });
    
    const repos = await getTrendingRepos(lang);
    
    if (repos.length === 0) {
        console.log('無法獲取資料，請檢查網路或 API 限制。');
        return;
    }

    console.log(`### 🚀 GitHub Trending (${lang || 'Global'}) - ${date}`);
    console.log('');
    repos.forEach((repo, index) => {
        console.log(`${index + 1}. **[${repo.name}](${repo.html_url})**`);
        console.log(`   ⭐ Stars: ${repo.stargazers_count.toLocaleString()} | 📝 ${repo.description || '無描述'}`);
        console.log('');
    });
    console.log('---');
    console.log('*資料由 GitHub Trending API 專案自動產出，已優化資源佔用。*');
}

main();
