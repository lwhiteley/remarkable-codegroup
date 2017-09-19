# remarkable-codegroup
remarkable plugin to put code blocks into groups


## Description

This plugin creates a codegroup in the html syntax for the following: 
- [Bootstrap 3 tabs](https://getbootstrap.com/docs/3.3/javascript/#tabs) 
    - requires: jquery, boostrap 3 (js, css)

## Syntax 

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

### Custom Named Tabs

As seen in the example above, tabs can have custom names for situations where you may need to group the same language and need to differentiate them.

The xample above shows a code block `js::sdk`, where `js` is the language syntax to be used and `sdk` denotes the name to be seen in the tab; we use `::` to spearate both terms.





