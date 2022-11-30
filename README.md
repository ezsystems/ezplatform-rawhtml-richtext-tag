# eZ Platform Rich Text Custom Tag: `rawhtml`

Example implementation of a custom tag that stores HTML code that gets
rendered on the frontend. This code is meant as exampe code and comes with no warranty or support.

This package is meant for users who upgrade eZ Publish sites having ezxmltext with
`<literal class="html">...</literal>` tags.

This versions works with Ibexa DXP 4.2.0 

## Installation

In Ibexa DXPs `composer.json`, define a new repository:
```diff
    "repositories": {
        "ibexa": {
            "type": "composer",
            "url": "https://updates.ibexa.co"
-        }
+        },
+        "rawhtml":    { "type": "vcs", "url": "https://github.com/ezsystems/ezplatform-rawhtml-richtext-tag.git" }
```


Run `composer require ezsystems/rawhtml-richtext-tag:dev-master`.
