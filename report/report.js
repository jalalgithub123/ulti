$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/NTLFeature/ntl.feature");
formatter.feature({
  "name": "To test ultimatix login page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ulti"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To test ultimatix login page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user should be in ultimatix home page",
  "keyword": "Given "
});
formatter.step({
  "name": "The user should enter combination of username and password\"\u003cusername\u003e\",\"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The user should should see the error\" The information you entered is incorrect. Please try again.\"message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "11111111",
        "22222222"
      ]
    },
    {
      "cells": [
        "33333333",
        "44444444"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To test ultimatix login page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ulti"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user should be in ultimatix home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginScreen.the_user_should_be_in_ultimatix_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should enter combination of username and password\"11111111\",\"22222222\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginScreen.the_user_should_enter_combination_of_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should should see the error\" The information you entered is incorrect. Please try again.\"message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.the_user_should_should_see_the_error_message(String)"
});
formatter.result({
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c The information you entered is incorrect. Please try again.\u003e but was:\u003cnull\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.ultimatix.stepdefinition.LoginScreen.the_user_should_should_see_the_error_message(LoginScreen.java:26)\r\n\tat ✽.The user should should see the error\" The information you entered is incorrect. Please try again.\"message(src/test/resources/Features/NTLFeature/ntl.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To test ultimatix login page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ulti"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user should be in ultimatix home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginScreen.the_user_should_be_in_ultimatix_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should enter combination of username and password\"33333333\",\"44444444\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginScreen.the_user_should_enter_combination_of_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should should see the error\" The information you entered is incorrect. Please try again.\"message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.the_user_should_should_see_the_error_message(String)"
});
formatter.result({
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c The information you entered is incorrect. Please try again.\u003e but was:\u003cnull\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.ultimatix.stepdefinition.LoginScreen.the_user_should_should_see_the_error_message(LoginScreen.java:26)\r\n\tat ✽.The user should should see the error\" The information you entered is incorrect. Please try again.\"message(src/test/resources/Features/NTLFeature/ntl.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});