import { SiteConfig } from './types'

// 由于无法直接导入MD文件，我们使用一个默认配置
export const defaultConfig: SiteConfig = {
  defaultGame: "spawner-script-grow-a-garden",
  siteName: "Spawner Script Grow a Garden",
  logo: `/images/hot_game/spawner-script-grow-a-garden.png`,
  seo: {
    title: "Spawner Script Grow a Garden: One-Click Pets & Items",
    description: "Spawner Script Grow a Garden is the top Roblox script for 2025, offering instant pet, seed, and item spawning, auto farm, safe updates, and full automation for Grow a Garden players.",
    keywords: "Grow a Garden, Spawner Script Grow a Garden,grow a garden pet spawner script,pet spawner script grow a garden,Roblox script, pets, seeds, auto farm",
    ogImage: "/images/hot_game/spawner-script-grow-a-garden.png"
  },
  advertisement: {
    key: ""
  },
  gameSettings: {
    randomGamesCount: 20
  },
  siteInfo: {
    companyName: "Spawner Script Grow a Garden",
    siteUrl: "https://www.spawnerscriptgrowagarden.org",
    email: "HarryC199101@gmail.com"
  },
  footer: {
    columns: [],
    copyright: "© 2025 All rights reserved.",
    disclaimer: "This is an independent website."
  }
}

// 获取随机游戏数量配置
export function getRandomGamesCount(): number {
  return defaultConfig.gameSettings?.randomGamesCount || 20
}

// 获取站点配置
export function getSiteConfig(): SiteConfig {
  return defaultConfig
}

export default defaultConfig 