# mpn gen (by [1upHealth](https://1up.health))
MPN GEN is a response to the USA Challenge.gov Healthcare Privacy Policy Snapshot Challenge. Visit it here https://1up.health/products/model-privacy-notice
  
This is a stand-alone script which starts a Node.js application that can be used to generate and customize a Model Privacy Notice for health care developers.
  
## Run the app
note: you may need to use `sudo` for these commands

### Development
```
npm install
npm run dev
```

### Production
```
npm install
npm run build
npm start
```
  
## Test out the app
Open up a web browser and navigate to [http://localhost:3030](http://localhost:3030) to test the app

## Browser Support
MPN GEN works on the latest versions of Firefox, Chrome, MS Edge, and Safari as of 7/29/2017.

## Supporting materials
[Demo](https://1up.health/products/model-privacy-notice)  
[Video](https://www.youtube.com/watch?v=FZHUed5iMKQ)  
[Slide Deck](https://docs.google.com/presentation/d/1k5XS8OvlzkaK39YAhI97qUdZDjLRrBFvCEUFsNiLHLc/)  




## Features

### Header
[x] Floats at top  
[x] Automatically shows what's been completed  

### Form
[x] Validates phone numbers  
[x] Validates email  
[x] Validates urls  
[x] Uses correct form types for easy mobile entry (e.g. tel, number, email, text)  
[x] Autocomplete country selector  
[x] Header changes to green when valid data  
[x] Do not share automatically removes share options  
[x] Highlight incomplete questions   

### State
[x] Display responses as JSON  
[x] Styles in header of MPN are easy to change  
[x] Export as JSON  

### Questions
[x] Conditional questions appear only when needed  
[x] Other entry  
[x] Question Schema controls all questions to be asked  
[x] Tooltips in CSS for footnotes, so no external JS dependencies needed

### User Feedback Fixes
[x] improve style, reduce contrast of resulting mpn headers  
- tone down black background on headings  

[x] intro messaging  
- make it "lets build your privacy notice"  
- explain UX, form validation  
- rephrase "to get started, jump right into the form"  
- remove left hand right hand, just say left / right  
- change style of tooltips, too similar to a link  
- add back original links for preamble   

[x] improve the look of the landing experience  

[x] fix top header of mpn sections  
- rename company to contact  
- rename data to data use  
- explain the top company, data, security, user are sections that will be filled in automatically  
- the mpn generator will guide you through completing these sections  

[x] visually separate generator from the background info.  

[x] improve mpn preview  
- flip the paper style onto the preview section.  
- use formal document text for the MPN  

[x] multiple privacy policies  
- explain the pre requisite links before beginning  
- explain the difference between the full privacy policy and privacy notice  

[x] link http issue  
- https / http should not be required  
- "link to your online contact or comment form"  
- fix typo on what is link to full hippo policy  

[x] contact section  
- add the header to the first contact section  
- move contact info to the bottom  
- suggest name & address at top, phone, email, then contact / policy  

[x] fix the we do not share your data to remove all other checks  
- if data not stored on device, automatically select not applicable  

[x] Does this technology or app allow you to share the collected data with your social media accounts, like Facebook?  
- clarify settings are for social settings, only request external url  

[x] improve export section  
- required messaging: clarify that you have to fill out everything that   
- create some method to save work  
- separate the export options  
- rename export options - to export as..  
