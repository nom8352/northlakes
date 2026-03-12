import os
from supabase import create_client, Client
from dotenv import load_dotenv

# .env.local 파일 로드
load_dotenv('.env.local')

url: str = os.environ.get("NEXT_PUBLIC_SUPABASE_URL")
key: str = os.environ.get("NEXT_PUBLIC_SUPABASE_ANON_KEY")

if not url or url == "your-supabase-url":
    print("오류: .env.local 파일에 실제 Supabase URL이 설정되어 있지 않습니다.")
    exit(1)

supabase: Client = create_client(url, key)

businesses = [
    {'name': 'bapboi Korean BBQ', 'category': '식당', 'location': 'North Lakes', 'phone': '0468 926 807', 'address': 'Shopping Centre, f09/1 N Lakes Dr, North Lakes QLD 4509', 'website_url': 'https://bapboi.com.au/'},
    {'name': 'BULGOGI', 'category': '식당', 'location': 'North Lakes', 'phone': '0493 987 110', 'address': '27 Discovery Dr, North Lakes QLD 4509', 'website_url': 'https://order-now.app/bulgogi-korean-bbq'},
    {'name': 'CUPBOP', 'category': '식당', 'location': 'Kallangur', 'phone': '0432 021 688', 'address': 'Shop 7B/1473 Anzac Ave, Kallangur QLD 4503', 'website_url': 'https://order-now.app/cupbop-korean-street-food'},
    {'name': 'Hanaromart North Lakes', 'category': '비즈니스', 'location': 'North Lakes', 'phone': '07 3491 8064', 'address': 'Shop 1200A Cnr Anzac Ave &, N Lakes Dr, North Lakes', 'website_url': 'https://hanaromart.com.au/'},
    {'name': 'Chicken in Seoul', 'category': '식당', 'location': 'North Lakes', 'phone': '0413 543 516', 'address': '1/59 Endeavour Blvd, North Lakes QLD 4509', 'website_url': 'https://chickeninseoul.com.au/'},
    {'name': 'South Seoul (Murrumba Downs)', 'category': '식당', 'location': 'Murrumba Downs', 'phone': '0411 114 964', 'address': '1/268 Murrumba Downs Shopping Centre, QLD 4503', 'website_url': None},
    {'name': '노스레이크 순복음 교회', 'category': '교회', 'location': 'North Lakes', 'phone': '0433 246 191', 'address': 'North Lakes Library Auditorium, North Lakes, QLD', 'website_url': 'https://cafe.naver.com/northlakeschurchs'},
    {'name': 'Haru Korean Kitchen', 'category': '식당', 'location': 'Noosa Heads', 'phone': '(07) 5447 2249', 'address': '2 Arcadia St, Noosa Heads QLD 4567', 'website_url': None},
    {'name': 'JANGO Korean BBQ', 'category': '식당', 'location': 'Buddina', 'phone': '0481 862 780', 'address': 'Shop 4/119 Point Cartwright Dr, Buddina QLD 4575', 'website_url': 'https://www.jango.com.au/'},
    {'name': 'Momo Chicken (Sunshine Plaza)', 'category': '식당', 'location': 'Maroochydore', 'phone': '(07) 5443 4133', 'address': 'Sunshine Plaza, Maroochydore QLD 4558', 'website_url': 'http://momochicken.com.au/'},
    {'name': 'Meekak Bar & BBQ', 'category': '식당', 'location': 'Maroochydore', 'phone': '0491 714 170', 'address': '51 Duporth Ave, Maroochydore QLD 4558', 'website_url': 'https://meekak-maroochydore.yumbojumbo.com.au/'},
    {'name': '선샤인코스트 성결교회', 'category': '교회', 'location': 'Bokarina', 'phone': '0410 228 572', 'address': '3 Honeysuckle Dr, Bokarina QLD 4575', 'website_url': 'https://m.facebook.com/sunshinecoastkoreanchurch'}
]

try:
    response = supabase.table("business_directory").insert(businesses).execute()
    print(f"성공: {len(businesses)}개의 업체 정보가 추가되었습니다.")
except Exception as e:
    print(f"오류 발생: {e}")
