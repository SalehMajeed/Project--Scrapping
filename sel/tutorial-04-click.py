import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

# url of the page we want to scrape
url = "http://www.hrdkbullion.com/"

# initiating the webdriver. Parameter includes the path of the webdriver.
driver = webdriver.Chrome('/usr/bin/chromedriver')
driver.get(url)

time.sleep(5)


html = driver.page_source

# this renders the JS code and stores all
# of the information in static HTML code.

# Now, we could simply apply bs4 to html variable
soup = BeautifulSoup(html, "html.parser")

print(soup.find_all(id='liverate'))

driver.close()  # closing the webdriver
