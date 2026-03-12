import { supabase } from './supabase'

/**
 * Daily News 관련 서비스
 */
export const newsService = {
  async getTop10() {
    const { data, error } = await supabase
      .from('daily_news')
      .select('*')
      .order('published_at', { ascending: false })
      .limit(10)
    if (error) throw error
    return data
  },

  async addNews(newsItem: { title: string; url: string; summary?: string; published_at?: string }) {
    const { data, error } = await supabase.from('daily_news').insert([newsItem]).select()
    if (error) throw error
    return data
  }
}

/**
 * Community Listings 관련 서비스
 */
export const listingService = {
  async getByCategory(category: 'jobs' | 'accommodation' | 'business_sell') {
    const { data, error } = await supabase
      .from('listings')
      .select('*')
      .eq('category', category)
      .order('created_at', { ascending: false })
    if (error) throw error
    return data
  },

  async createListing(listing: any) {
    const { data, error } = await supabase.from('listings').insert([listing]).select()
    if (error) throw error
    return data
  }
}

/**
 * Business Directory 관련 서비스
 */
export const businessService = {
  async getAll() {
    const { data, error } = await supabase
      .from('business_directory')
      .select('*')
      .order('name', { ascending: true })
    if (error) throw error
    return data
  },

  async getByLocation(location: string) {
    const { data, error } = await supabase
      .from('business_directory')
      .select('*')
      .eq('location', location)
    if (error) throw error
    return data
  }
}
