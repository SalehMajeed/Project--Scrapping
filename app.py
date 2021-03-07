from bs4 import BeautifulSoup
import requests

available_sites = {
    'policybazaar': {
        'gold': {
            'delhi': 'https://www.policybazaar.com/gold-rate-delhi/',
            'hyderabad': 'https://www.policybazaar.com/gold-rate-hyderabad/',
            'mumbai': 'https://www.policybazaar.com/gold-rate-mumbai/',
            'pune': 'https://www.policybazaar.com/gold-rate-pune/',
            'bangalore': 'https://www.policybazaar.com/gold-rate-bangalore/',
            'chennai': 'https://www.policybazaar.com/gold-rate-chennai/',
            'coimbatore': 'https://www.policybazaar.com/gold-rate-coimbatore/',
            'madurai': 'https://www.policybazaar.com/gold-rate-madurai/',
            'kolkata': 'https://www.policybazaar.com/gold-rate-kolkata/',
            'lucknow': 'https://www.policybazaar.com/gold-rate-lucknow/',
            'ahmedabad': 'https://www.policybazaar.com/gold-rate-ahmedabad/',
            'patna': 'https://www.policybazaar.com/gold-rate-patna/'
        },
        'silver': {
            'hyderabad': 'https://www.policybazaar.com/silver-rate-hyderabad/',
            'delhi': 'https://www.policybazaar.com/silver-rate-delhi/',
            'ahmedabad': 'https://www.policybazaar.com/silver-rate-ahmedabad/',
            'bangalore': 'https://www.policybazaar.com/silver-rate-bangalore/',
            'mumbai': 'https://www.policybazaar.com/silver-rate-mumbai/',
            'chennai': 'https://www.policybazaar.com/silver-rate-chennai/'
        }
    },
    'goodreturns': {
        'gold': {
            'chennai': 'https://www.goodreturns.in/gold-rates/chennai.html',
            'mumbai': 'https://www.goodreturns.in/gold-rates/mumbai.html',
            'delhi': 'https://www.goodreturns.in/gold-rates/delhi.html',
            'kolkata': 'https://www.goodreturns.in/gold-rates/kolkata.html',
            'bangalore': 'https://www.goodreturns.in/gold-rates/bangalore.html',
            'hyderabad': 'https://www.goodreturns.in/gold-rates/hyderabad.html',
            'kerala': 'https://www.goodreturns.in/gold-rates/kerala.html',
            'pune': 'https://www.goodreturns.in/gold-rates/pune.html',
            'vadodara': 'https://www.goodreturns.in/gold-rates/vadodara.html',
            'ahmedabad': 'https://www.goodreturns.in/gold-rates/ahmedabad.html',
            'jaipur': 'https://www.goodreturns.in/gold-rates/jaipur.html',
            'lucknow': 'https://www.goodreturns.in/gold-rates/lucknow.html',
            'coimbatore': 'https://www.goodreturns.in/gold-rates/coimbatore.html',
            'madurai': 'https://www.goodreturns.in/gold-rates/madurai.html',
            'vijayawada': 'https://www.goodreturns.in/gold-rates/vijayawada.html',
            'patna': 'https://www.goodreturns.in/gold-rates/patna.html',
            'nagpur': 'https://www.goodreturns.in/gold-rates/nagpur.html',
            'chandigarh': 'https://www.goodreturns.in/gold-rates/chandigarh.html',
            'surat': 'https://www.goodreturns.in/gold-rates/surat.html',
            'bhubaneswar': 'https://www.goodreturns.in/gold-rates/bhubaneswar.html',
            'mangalore': 'https://www.goodreturns.in/gold-rates/mangalore.html',
            'visakhapatnam': 'https://www.goodreturns.in/gold-rates/visakhapatnam.html',
            'nashik': 'https://www.goodreturns.in/gold-rates/nashik.html',
            'mysore': 'https://www.goodreturns.in/gold-rates/mysore.html'
        },
        'silver': {
            'chennai': 'https://www.goodreturns.in/silver-rates/chennai.html',
            'mumbai': 'https://www.goodreturns.in/silver-rates/mumbai.html',
            'delhi': 'https://www.goodreturns.in/silver-rates/delhi.html',
            'kolkata': 'https://www.goodreturns.in/silver-rates/kolkata.html',
            'bangalore': 'https://www.goodreturns.in/silver-rates/bangalore.html',
            'hyderabad': 'https://www.goodreturns.in/silver-rates/hyderabad.html',
            'kerala': 'https://www.goodreturns.in/silver-rates/kerala.html',
            'pune': 'https://www.goodreturns.in/silver-rates/pune.html',
            'vadodara': 'https://www.goodreturns.in/silver-rates/vadodara.html',
            'ahmedabad': 'https://www.goodreturns.in/silver-rates/ahmedabad.html',
            'jaipur': 'https://www.goodreturns.in/silver-rates/jaipur.html',
            'lucknow': 'https://www.goodreturns.in/silver-rates/lucknow.html',
            'coimbatore': 'https://www.goodreturns.in/silver-rates/coimbatore.html',
            'madurai': 'https://www.goodreturns.in/silver-rates/madurai.html',
            'vijayawada': 'https://www.goodreturns.in/silver-rates/vijayawada.html',
            'patna': 'https://www.goodreturns.in/silver-rates/patna.html',
            'nagpur': 'https://www.goodreturns.in/silver-rates/nagpur.html',
            'chandigarh': 'https://www.goodreturns.in/silver-rates/chandigarh.html',
            'surat': 'https://www.goodreturns.in/silver-rates/surat.html',
            'bhubaneswar': 'https://www.goodreturns.in/silver-rates/bhubaneswar.html',
            'mangalore': 'https://www.goodreturns.in/silver-rates/mangalore.html',
            'visakhapatnam': 'https://www.goodreturns.in/silver-rates/visakhapatnam.html',
            'nashik': 'https://www.goodreturns.in/silver-rates/nashik.html',
            'mysore': 'https://www.goodreturns.in/silver-rates/mysore.html'
        }
    }
}

class_for_sites = {
    'policybazaar': 'trande_table',
    'goodreturns': 'gold_silver_table right-align-content'
}


def price_for_hrd():
    url = 'http://www.hrdkbullion.com/'
    headers = {'User-agent': 'Mozilla/5.0'}
    response = requests.get(url, headers=headers)
    result = BeautifulSoup(response.content, 'html.parser')
    print(result.find_all(id='liverate'))


price_for_hrd()


def get_price(type, name):

    for key in available_sites:
        if (name in available_sites[key][type]):
            url = available_sites[key][type][name]
            headers = {'User-agent': 'Mozilla/5.0'}
            response = requests.get(url, headers=headers)
            result = BeautifulSoup(response.content, 'html.parser')

            print(type, 'for', name, 'from', key, '\n')
            print(result.find_all(class_=class_for_sites[key]))
        else:
            print('not available \n')


# get_price('gold', 'pune')
