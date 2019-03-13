package com.ultimatix.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\Features\\NTLFeature\\ntl.feature",glue="com.ultimatix.stepdefinition",dryRun=false,
plugin= {"html:report","json:src\\test\\resources\\json.xml"},tags= {"@ulti"})
public class TestRunner {

}
