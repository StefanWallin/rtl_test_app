## RTL with/without lineheight textAlignment in iOS test app

### Screenshot
![Screenshot of iOS simulator]
(https://github.com/StefanWallin/rtl_test_app/raw/master/RN_RTL_LH_IOS.png)


### Versions
Fresh install with:
-		`"react": "~15.4.0-rc.4",`
-		`"react-native": "0.40.0"`

### Expected behaviour
Text rows in arabic app should render Right To Left given that textDirection and 
I18nManager is set up correctly.

### Actual behaviour
- With lineHeight the text component behaves as expected.
- Without lineHeight the text component seemingly ignores writingDirection or gets 
moved to another position.

### Caveat
If opening this locally for testing, a double reload is mandatory for RTL settings 
to take proper effect if changing the line with `I18nManager.forceRTL(true);`
