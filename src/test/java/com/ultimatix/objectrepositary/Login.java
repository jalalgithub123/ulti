package com.ultimatix.objectrepositary;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.ultimatix.resources.FunctionLibrary;
import com.ultimatix.stepdefinition.Hook;

public class Login extends FunctionLibrary {
public Login() {
PageFactory.initElements(Hook.driver,this);
}
	
	@FindBy(xpath="//input[@id='USER']")
	private WebElement user;

	@FindBy(xpath="//input[@id='PASSWORD']")
	private WebElement password;

	@FindBy(xpath="//input[@id='login_button']")
	private WebElement btn_login;

	@FindBy(xpath="//font[@color='yellow']//label")
	private WebElement errorMessage;

	public WebElement getErrorMessage() {
		return errorMessage;
	}

	public WebElement getUser() {
		return user;
	}

	public WebElement getPassword() {
		return password;
	}

	public WebElement getBtn_login() {
		return btn_login;
	}
	
}
