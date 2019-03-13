package com.ultimatix.stepdefinition;

import com.ultimatix.objectrepositary.Login;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginScreen {
	Login lg = new Login();
	@Given("The user should be in ultimatix home page")
	public void the_user_should_be_in_ultimatix_home_page() {
	lg.loadUrl("https://www.ultimatix.net");	
	}

	@When("The user should enter combination of username and password{string},{string}")
	public void the_user_should_enter_combination_of_username_and_password(String name, String pass) {
	lg.typeData(lg.getUser(), name);
	lg.typeData(lg.getPassword(), pass);
	lg.funClick(lg.getBtn_login());
	}

	@Then("The user should should see the error{string}message")
	public void the_user_should_should_see_the_error_message(String errormessage) {
	Assert.assertEquals(errormessage, lg.getErrorMessage().getAttribute("value"));
	
	}



}
