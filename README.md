# remarkable-codegroup
remarkable plugin to put code blocks into groups

## Getting Started

```shell
npm i --save remarkable-codegroup
```

```js
const Remarkable = require('remarkable');
const markdown = new Remarkable(opts)
const codeGroup = require('remarkable-codegroup');
markdown.use(codeGroup);
```

## Description

This plugin creates a codegroup in the html syntax for the following: 
- [Bootstrap 3 Tabs](https://getbootstrap.com/docs/3.3/javascript/#tabs) 
    - `requires`: jQuery, Boostrap 3 (js, css)


### Syntax 

The syntax below denotes how the markdown should look in order to group code blocks

<pre>
[codegroup]    
```js
const docFolder = 'source/docs'
const docPath = `./${docFolder}`;
const fileGlob = '**/*.md'
const publicFolder = 'public';
const htmlTemplate = fs.readFileSync('source/doc.template.html', 'utf8')
```
    
```js::sdk
const docFolder = 'source/docs'
const docPath = `./${docFolder}`;
const fileGlob = '**/*.md'
const publicFolder = 'public';
```
    
```swift
func application(_ application: UIApplication) -> Bool {
    sampleApp = SampleApplication()
    return true
}
```
[/codegroup]
</pre>

### Preview

![codegroup](https://i.imgur.com/YJAwalP.png)

**Please Note:** The dark theme in this example is a custom style. Styles can be customized however you see fit.

### Custom Named Tabs

As seen in the example above, tabs can have custom names for situations where you may need to group the same language and need to differentiate them.

The example above shows a code block `js::sdk`, where `js` is the language syntax to be used and `sdk` denotes the name to be seen in the tab; we use `::` to separate both terms.


Notes:
- Pull requests are welcome




