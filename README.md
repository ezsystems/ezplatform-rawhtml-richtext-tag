# eZ Platform Rich Text Custom Tag: `rawhtml`

Initial implementation of a custom tag that stores HTML code that gets
rendered on the frontend.

This package is meant as an early access. The feature will ultimately
be moved to the richtext core. It requires
`ezsystems/ezplatform-admin-ui` support for editing the main content of a
custom tag (https://github.com/ezsystems/ezplatform-admin-ui/pull/619),
planned for version 1.4.

## Installation

In eZ Platform's `composer.json`, define a new repository:

    "repositories": [
        { "type": "vcs", "url": "https://github.com/ezsystems/ezplatform-rawhtml-richtext-tag.git" }
    ]

add the package to the requirements, and change the requirement for `ezplatform-admin-ui`:

    "require": {
        ...
        "ezsystems/ezplatform-admin-ui": "dev-custom_tag_content_edit as 1.4.x-dev",
        ...
        "ezsystems/rawhtml-richtext-tag": "dev-master"
    }

Edit `app/config/config.yml`, and locate the `assetic section`. Add
`EzSystemsRawHtmlRichTextTagBundle` to the `bundles` array:

    framework:
        assetic:
            bundles: [ EzPlatformAdminUiBundle, EzSystemsRawHtmlRichTextTagBundle ]

Run `composer update`. During the update process, the assets from the
rawhtml bundle should be installed in `web/bundles/ezsystemsrawhtmlrichtexttag`.

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

## Known issues

### Focus error when pasting
When text is pasted in the tag's main textarea, an error occurs, related
to `setFocus()`. Those errors have happend before in the Online Editor,
and will have to be fixed upstream.

No known workaround for the time being.