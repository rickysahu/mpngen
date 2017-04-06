# mpn gen (by 1upHealth)

## Development
```
npm install
npm run dev
```

## Production
```
npm install
npm run build
npm start
```


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

### State
[x] Display responses as JSON  
[x] Styles in header of MPN are easy to change  
[x] Export as JSON  
[ ] Save using local storage on refresh  


### Questions
[x] Conditional questions appear only when needed  
[x] Other entry  
[x] Question Schema controls all questions to be asked  
[ ] Tooltips in CSS for footnotes, so no external JS dependencies needed

### Feedback TODOs
[ ] improve style, reduce contrast of resulting mpn headers
- tone down black background on headings
[ ] intro messaging
- make it "lets build your privacy notice"
- explain UX, form validation
- rephrase "to get started, jump right into the form"
- no need to call out preamble, just call it "faq"
- remove left hand right hand, just say left / right
- change style of tooltips, too similar to a link
- add back original links for preamble 
[ ] improve the look of the landing experience
[ ] fix top header of mpn sections
- rename company to contact
- rename data to data use
- explain the top company, data, security, user are sections that will be filled in automatically
- the mpn generator will guide you through completing these sections
[ ] visually separate generator from the background info.
[ ] improve mpn preview
- flip the paper style onto the preview section.
- use formal document text for the MPN
[ ] multiple privacy policies
- explain the pre requisite links before beginning
- explain the difference between the full privacy policy and privacy notice
[ ] link http issue
- https / http should not be required
- "link to your online contact or comment form"
- fix typo on what is link to full hippo policy
[ ] contact section
- add the header to the first contact section
- move contact info to the bottom
- suggest name & address at top, phone, email, then contact / policy
[ ] fix the we do not share your data to remove all other checks
- if data not stored on device, automatically select not applicable
[ ] Does this technology or app allow you to share the collected data with your social media accounts, like Facebook?
- clarify settings are for social settings, only request external url
[ ] improve export section
- required messaging: clarify that you have to fill out everything that 
- create some method to save work
- separate the export options
- rename export options - to export as..

* "Some of the health data we collect as part of this [insert name of technology product]", Is the "name of the technology product" different from the legal entity name?
* "Privacy: How this technology accesses other data
[If yes] Here is how you can check your settings,
including permissions set as a default...No"
What does this last part "including permissions set as a default...No" mean?

* Is the privacy policy mentioned in "Some of the health data we collect as part of this ... Read our HIPAA Notice of Privacy Practices [embed link or popup] for more information." the same privacy policy collected by the [Link to full privacy policy] ?
