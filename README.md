Page Reference Context Data
===========================

Field that stores one or more references to ProcessWire pages with additional data in field context.  
Values are editable via page edit modal of the referenced page provided from the field if module [**AdminPageFieldEditLinks**](https://processwire.com/modules/admin-page-field-edit-links/) is installed and "Enable link to create new pages?" is checked in field settings.

**Requirements:** AdminPageFieldEditLinks >= 3.1.4  

## Field configuration

### Modal Title
Custom modal. Use placeholders to display page, forpage and forfield properties.  
**Default:** *'Edit Page "{title}" [#{id}] with additional values related to Pagefield: "{forfield.name}" of page "{forpage.title}" [#{forpage.id}]'*

### Tab Label
All context data fields are bundled under its own tab inside the edit modal window. Customize the label if needed.  
**Default**: *'Pagefield Context Data'*


### Additional page fields in Pagefield context
#### Setup Syntax
Use one line per field in the format `<name>:<InputfieldClass>`  
Add any Inputfield setting separated by comma in the format `<settingName>=<settingValue>` after `<InputfieldClass>`  
\
Syntax of `<settingValue>`:  
Usage of further equal signs in `<settingValue>` is allowed. Commata are reserved as separator and must be escaped with backslash if used in `<settingValue>`. Type "\n" for linebreaks.

#### Supported Inputfield classes

##### Text
+ InputfieldText
+ InputfieldTextarea
+ InputfieldEmail
+ InputfieldURL

##### Numbers
+ InputfieldInteger
+ InputfieldFloat

##### Date & Time
+ InputfieldDatetime

##### Page
+ **InputfieldPage**  
*using inputfields*
	+ 	InputfieldSelect
	+ InputfieldSelectMultiple
	+ InputfieldCheckboxes
	+ InputfieldRadios
	+ InputfieldAsmSelect
	+ InputfieldPageListSelect

##### Select
+ InputfieldSelect
+ InputfieldCheckbox
+ InputfieldCheckboxes
+ InputfieldRadios
+ InputfieldAsmSelect

Use 'options' as setting name separate each option value or value=label pair using \n.

##### others
+ InputfieldIcon
+ InputfieldSelector
+ InputfieldMarkup

#### Unsupported Inputfield classes
+ **InputfieldFile**
+ **InputfieldImage**
+ InputfieldPage with **InputfieldPageAutocomplete**
+ InputfieldPage with **InputfieldTextTags**

#### Setting Examples:

```
text:InputfieldText,columnWidth=50,description=This is a nice description including a comma\, escaped with backslash and equal sign == and double dot : xyz,label=Nice Label fo Text Inputfield,notes=whats up?
integer:InputfieldInteger,columnWidth=50,inputType=number
area:InputfieldTextarea,rows=12
page:InputfieldPageListSelect,parent_id=1,inputfield=InputfieldAsmSelect
page2:InputfieldPage,parent_id=1,inputfield=InputfieldAsmSelect
icon:InputfieldIcon,columnWidth=50
float:InputfieldFloat,columnWidth=50,inputType=number
date:InputfieldDatetime,columnWidth=50,datepicker=3
email:InputfieldEmail
file:InputfieldFile,extensions=pdf
select:InputfieldSelect,options=Hello\nWorld\nWhats up?
check1:InputfieldCheckboxes,options=1=Hello\n2=World\n3=Whats up?
check2:InputfieldCheckbox
url:InputfieldURL
selector:InputfieldSelector
textlang:InputfieldText,useLanguages=1
textlang2:InputfieldTextarea,useLanguages=1
```

## API
While calling the pagefield all context data values will be assigned as runtime values to the page object.

To prevent conflicts an underscore must be prepended to contexts field name.  

#### Example:

```
$page->fieldname; // call the field to assign runtime values

// get first item of PageArray
$reference = $page->fieldname->first();
echo $reference->_text; // get the value of context field 'text' of the referenced page

// loop PageArray
foreach ($page->fieldname as $reference) {
	echo $reference->_text;
}
```

## Multilanguage Context Fields
Multilanguage Fields are supported. Set setting: **useLanguages=1**  

## Limitations
+ The usage of  `get()` or `find()` with context data values is very limited:
	+ no support for multilanguage fields
	+ only equal sign operator allowed
	+ no support for array values
+ Values are lost after removing related page from the page field.
+ some Inputfield classes are not unsupported.

## Thanks
to **@thetuningspoon** (Mike Spooner)
for updating [**AdminPageFieldEditLinks**](https://processwire.com/modules/admin-page-field-edit-links/) that I could get everything working together smoothly.





