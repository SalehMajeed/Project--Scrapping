from selenium import webdriver
from bs4 import BeautifulSoup

browser = webdriver.Firefox()
browser.get('http://www.hrdkbullion.com/')

soup = BeautifulSoup(browser.page_source)

# do something useful
# prints all the links with corresponding text

for link in soup.find_all(id='liverate'):
    print(link.get('href', None), link.get_text())
