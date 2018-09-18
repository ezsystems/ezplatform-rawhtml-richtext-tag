# eZ Platform Rich Text Custom Tag: `rawhtml`

Initial implementation of a custom tag that stores HTML code that gets
rendered on the frontend.

This package is meant as an early access. The feature will ultimately
be moved to the richtext core.

## Installation

In eZ Platform's `composer.json`, define a new repository:

    "repositories": [
        { "type": "vcs", "url": "https://github.com/ezsystems/ezplatform-rawhtml-richtext-tag.git" }
    ]

add the package to the requirements, and change the requirement for `ezplatform-admin-ui`:

    "requires": {
        ...
        "ezsystems/ezplatform-admin-ui": "dev-custom_tag_content_edit as 1.4.x-dev",
        ...
        "ezsystems/rawhtml-richtext-tag": "dev-master"
    }

:
    "
Run `composer update`.

Enable the bundle in `app/AppKernel.php`:

    $bundles = [
        // ...
        new EzSystems\RawHtmlRichTextTagBundle\EzSystemsRawHtmlRichTextTagBundle(),
    ];

Enable the `rawhtml` tag in `app/config/ezplatform.yml`:

    ezpublish:
        system:
            default:
                # ...
                fieldtypes:
                    ezrichtext:
                        custom_tags: [rawhtml]
