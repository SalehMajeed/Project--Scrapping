#!/usr/bin/python3

from selenium import webdriver

driver_location = "/usr/bin/chromedriver"
binary_location = "/usr/bin/google-chrome"

option = webdriver.ChromeOptions()
option.binary_location = binary_location

driver = webdriver.Chrome(
    executable_path=driver_location, chrome_options=option)
driver.get("http://www.hrdkbullion.com/")
print(driver)
