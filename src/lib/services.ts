import { supabase } from './supabase'

export type ListingCategory = 'jobs' | 'accommodation' | 'business_sell'

export type NewsItemInput = {
  title: string
  url: string
  summary?: string
  published_at?: string
}

export type ListingInput = {
  category: ListingCategory
  title: string
  content: string
  price?: string
}

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

  async addNews(newsItem: NewsItemInput) {
    const { data, error } = await supabase.from('daily_news').insert([newsItem]).select()
    if (error) throw error
    return data
  }
}

/**
 * Community Listings 관련 서비스
 */
export const listingService = {
  async getByCategory(category: ListingCategory) {
    const { data, error } = await supabase
      .from('listings')
      .select('*')
      .eq('category', category)
      .order('created_at', { ascending: false })
    if (error) throw error
    return data
  },

  async createListing(listing: ListingInput) {
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
