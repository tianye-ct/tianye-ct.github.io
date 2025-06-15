# How to Write a Blog Post

## Quick Start

To add a new blog post to your portfolio website:

1. **Create a new markdown file** in `src/content/blog/` directory
   - Name it with a URL-friendly slug: `my-blog-post.md`

2. **Add frontmatter** at the top of your file:
```markdown
---
title: Your Blog Post Title
date: 2025-06-15
tags: ["tag1", "tag2", "tag3"]
excerpt: A brief description of your post that will appear in the blog list...
---
```

3. **Write your content** using Markdown:
```markdown
# Main Heading

Your introduction paragraph...

## Section Heading

Your content with **bold** and *italic* text.

### Subsection

- Bullet points
- More points

```python
# Code blocks with syntax highlighting
def hello_world():
    print("Hello, World!")
```

> Blockquotes for important notes

[Links to other sites](https://example.com)
```

## Blog Post Template

Create a new file: `src/content/blog/your-post-slug.md`

```markdown
---
title: Building Scalable AI Systems with Modern Stack
date: 2025-06-20
tags: ["AI", "Architecture", "Engineering"]
excerpt: Exploring how to build production-ready AI systems using Next.js, FastAPI, and modern infrastructure...
---

# Building Scalable AI Systems with Modern Stack

Introduction paragraph explaining what the post is about...

## The Challenge

Describe the problem you're solving...

## The Solution

### Frontend with Next.js

Explain your approach...

```typescript
// Example code
const MyComponent = () => {
  return <div>Hello AI</div>
}
```

### Backend with FastAPI

More details...

## Key Learnings

1. First learning point
2. Second learning point
3. Third learning point

## Conclusion

Wrap up your thoughts...
```

## Adding Your Blog Post to the Site

Currently, blog posts are stored in the `pages/Blog.jsx` file as mock data. To add your post:

1. Open `src/pages/Blog.jsx`
2. Find the `mockPosts` array
3. Add your new post object:

```javascript
{
  slug: 'your-post-slug',
  title: 'Your Post Title',
  date: 'June 20, 2025',
  readTime: '5 min read',
  excerpt: 'Your post excerpt...',
  tags: ['AI', 'Architecture'],
  content: `Your full markdown content here...`
}
```

## Future Enhancement

To make blog writing easier, consider:
1. Setting up a CMS (Content Management System)
2. Using MDX for enhanced markdown features
3. Creating a build script to automatically convert markdown files to blog posts
4. Adding a markdown editor to write posts directly in the browser

## Tips for Good Blog Posts

- **Clear titles**: Make them descriptive and searchable
- **Good structure**: Use headings to break up content
- **Code examples**: Include practical examples when relevant
- **Visuals**: Add diagrams or screenshots when helpful
- **SEO**: Use relevant tags and write good excerpts
- **Consistent voice**: Maintain your professional but approachable tone