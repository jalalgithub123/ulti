package com.ultimatix.resources;

import org.openqa.selenium.WebElement;

import com.ultimatix.stepdefinition.Hook;

public class FunctionLibrary {
public void typeData(WebElement element,String data) {
	element.sendKeys(data);
}


public void funClick(WebElement element) {
	element.click();
}

public void winMax() {
	Hook.driver.manage().window().maximize();
	
}

public void loadUrl(String url) {
	Hook.driver.get(url);
}
}
