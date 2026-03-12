import os
import feedparser
from openai import OpenAI
from supabase import create_client, Client
from dotenv import load_dotenv
from datetime import datetime

# 데이터 로드
load_dotenv('.env.local')

# 환경 변수 설정
SUPABASE_URL = os.getenv("NEXT_PUBLIC_SUPABASE_URL")
SUPABASE_KEY = os.getenv("NEXT_PUBLIC_SUPABASE_ANON_KEY")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

# 클라이언트 초기화
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
openai_client = OpenAI(api_key=OPENAI_API_KEY)

# RSS 피드 리스트
RSS_FEEDS = [
    "https://www.abc.net.au/news/feed/45910/rss.xml", # ABC News Australia
    "https://www.sbs.com.au/news/feed", # SBS News
]

def fetch_rss_news():
    news_items = []
    for url in RSS_FEEDS:
        feed = feedparser.parse(url)
        for entry in feed.entries[:20]: # 각 피드당 상위 20개
            news_items.append({
                "title": entry.title,
                "link": entry.link,
                "summary": entry.summary if hasattr(entry, 'summary') else ""
            })
    return news_items

def filter_and_translate_with_gpt(news_list):
    # GPT에게 보낼 프롬프트 구성
    news_text = "\n".join([f"- Title: {item['title']}\n  Link: {item['link']}\n" for item in news_list])
    
    prompt = f"""
    아래는 호주 주요 언론사의 최신 뉴스 목록입니다. 
    이 중에서 호주에 거주하는 한국인 교민들에게 가장 유익하고 중요한 뉴스 10개를 선정해주세요.
    선정된 뉴스의 제목을 한국어로 자연스럽게 번역하고, 각 뉴스에 대한 짧은 요약(한국어)을 작성해주세요.
    
    반드시 아래 JSON 형식으로만 답변해주세요:
    [
      {{
        "title": "한국어 번역 제목",
        "url": "원문 링크",
        "summary": "한국어 요약 내용"
      }},
      ... (총 10개)
    ]
    
    뉴스 목록:
    {news_text}
    """

    response = openai_client.chat.completions.create(
        model="gpt-4o",
        messages=[{"role": "user", "content": prompt}],
        response_format={ "type": "json_object" }
    )
    
    import json
    # GPT-4o JSON mode returns a dict with a key if not careful, or just the list content.
    # We'll parse it safely.
    result = json.loads(response.choices[0].message.content)
    if isinstance(result, dict) and 'news' in result:
        return result['news']
    elif isinstance(result, dict) and 'items' in result:
        return result['items']
    elif isinstance(result, list):
        return result
    return result.get('news', result) # Fallback

def save_to_supabase(news_data):
    # 기존 오늘의 뉴스 삭제 (선택 사항: 매일 새로운 TOP 10을 유지하기 위함)
    # supabase.table("daily_news").delete().neq("id", "00000000-0000-0000-0000-000000000000").execute()
    
    for item in news_data:
        data = {
            "title": item["title"],
            "url": item["url"],
            "summary": item["summary"],
            "published_at": datetime.now().isoformat()
        }
        supabase.table("daily_news").insert(data).execute()

if __name__ == "__main__":
    print("RSS 피드 수집 중...")
    raw_news = fetch_rss_news()
    
    print("GPT를 통한 뉴스 선별 및 번역 중...")
    processed_news = filter_and_translate_with_gpt(raw_news)
    
    print("Supabase에 저장 중...")
    save_to_supabase(processed_news)
    
    print("작업 완료!")
