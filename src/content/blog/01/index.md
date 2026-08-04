---
heading: "Accessible Images: A Guide to Alt Text"
slug: "accessible-images-a-guide-to-alt-text"
date: "04-08-2026"
kicker: "A practical guide to writing accessible alt text for images"
chips: ["Accessibility", "Frontend"]
---

Making images accessible is easier than you think. Let's break down what you need to know.

## Images: Decorative or Informative?

From a screen reader's perspective, an image can be either decorative or informative.

**Decorative images** don't add helpful information to the page. We've all seen in corporate websites images of two smiling people shaking hands, right?

**Informative images** do add information to the page. A product photo on a product page (e.g., a pair of headphones) gives information to a sighted user about how the product looks—maybe it's a set of headphones with a golden finish.

A quick test you can do to see if an image is informative or not is to comment it out from the code and make an educated guess. Is the information gone? If yes, it's informative. If nothing changed, it's decorative.

## The Alt Attribute

Once you've figured out which type of image you're dealing with, you can use an `alt` attribute.

The `alt` attribute (which stands for alternative text) can either display text if for whatever reason the page didn't load the image (slow connection, the user turning off images to save data, a bad url?) or let a screen reader have additional information.

The `alt` attribute can be: not set at all, an empty string, or a populated string.

## Making Screen Readers Skip Decorative Images

If an image is decorative and you want to make the screen reader skip announcing it, the best way is to use `alt=""`. Not setting the attribute at all (alt is null/undefined) might cause some screen readers—most notably NVDA and JAWS—to try to announce the file path. Not really cool when your file is called "image_hero-banner_final_v3.png".

Some other examples include:

- Repeated images in feeds
- Icons with text labels (the screen reader is reading the label, the repetition might sound awkward)
- Images in links where the link text describes the destination

## Writing Good Alt Text for Informative Images

If your image is informative, you can set up a string for the alt attribute. There are some best practices to follow though:

1. **Describe what it is without saying "image."** The screen reader already announces it's an image.
2. **Describe what it does if it's a clickable image or icon.** If the image is a button or a link, don't describe what it looks like—describe what it does. A magnifying glass icon? Don't say "magnifying glass icon." Say "Search." The user needs to know what happens when they click, not what the icon looks like.
3. **Keep it short.** Screen reader users are already listening to a lot of content so get to the point.
4. **End with a period.** This creates a natural pause.

## Don't Use the Title Attribute

If you're tempted to use a `title` instead of `alt`, don't. It's unreliable (on touch and keyboard), often ignored, can be announced twice by screen readers, and important information should be conveyed via proper `alt` text or visible captions (`<figure>`/`<figcaption>`) instead.

## Common Cases

Some special common cases include:

**If you're using an SVG tag:**
Because of a VoiceOver bug, SVG images may not be announced as images. Adding `role="img"` to `<img>` elements that reference SVG files helps ensure assistive technologies identify them as image content.

**Logos in the header:**
Logos should use the company name as alt text, adding the link destination if needed (e.g., "CompanyName – Home"), because users need to identify the brand and understand where the link leads.

## Wrapping Up

Accessible images aren't just good for screen reader users. Users on slow connections see descriptive text instead of broken images. Search engines better understand your content. The small effort of writing thoughtful alt text creates a better web for everyone.
