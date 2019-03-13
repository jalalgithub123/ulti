package com.ultimatix.stepdefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hook {
	public static WebDriver driver;
@Before
public void openBrowser() {
	System.setProperty("webdriver.chrome.driver", "C:\\Users\\moham\\eclipse-workspace\\SUCCESS\\CucumberTest1\\lib\\chromedriver.exe");
	driver = new ChromeDriver();
	
}

@After
public void closeBrowser() {
/*	driver.close();*/
}
}
