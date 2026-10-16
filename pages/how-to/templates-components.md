---
title: Use Twig components
description: Create reusable template units with Cecil components and the x tag.
date: 2026-10-18
schedule:
  publish: 2026-10-18
---
Components are small reusable Twig templates (button, card, alert, etc.) that you call with a dedicated tag, pass attributes to, and wrap around any content.

## Create a component

Components are Twig templates stored in the `components/` subdirectory of your layouts directory. Create `layouts/components/button.twig`:

```twig
<button {{ attributes.merge({class: 'rounded px-4'}) }}>
  {{ slot }}
</button>
```

- `slot` contains the content added between the opening and the closing tags
- `attributes` contains the attributes passed to the component, and `merge()` combines them with default values

## Use the component

Call the component with the `x` tag followed by `:` and the file name of the component, without extension:

```twig
{% x:button with {class: 'text-white'} %}
  <strong>Click me</strong>
{% endx %}
```

It will render:

```html
<button class="text-white rounded px-4">
  <strong>Click me</strong>
</button>
```

## Pass variables

Values passed with `with` are also available as variables inside the component. For example, `layouts/components/card.twig`:

```twig
<article class="card">
  <h2><a href="{{ href }}">{{ title }}</a></h2>
  {{ slot }}
</article>
```

Use it in a list template:

```twig
{% for p in page.pages.showable %}
  {% x:card with {href: url(p), title: p.title} %}
    <p>{{ p.description }}</p>
  {% endx %}
{% endfor %}
```

## Change the components directory

The directory and file extension of components can be changed in `cecil.yml`:

```yaml
layouts:
  components:
    dir: components # components source directory
    ext: twig       # components files extension
```

:::info
See the documentation of [components](/documentation/templates/#components) and the [components configuration](/documentation/configuration/#layouts-components). The feature is provided by the [Twig components extension](https://github.com/giorgiopogliani/twig-components).
:::
