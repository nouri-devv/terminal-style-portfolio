# Terminal Style Portfolio

A customizable terminal-themed portfolio template built with React and TypeScript. This template allows you to create a unique portfolio that mimics a terminal interface while maintaining easy customization through a single JSON file.

## 📋 Features

- Terminal-style interface
- Customizable through a single JSON file
- Responsive design
- ASCII art name display
- Interactive command system
- Syntax highlighting
- Animated typing effects
- Dark mode with terminal-like aesthetics

## 📝 Customization

### Resume Data Structure

The portfolio is customized through the `resume.json` file located in the `src` directory. Here's how to modify each section:

```json
{
  "name": "Your Name",
  "statement": "Your Role/Title",
  "about": "A brief description about yourself",
  "tech": {
    "languages": ["Language1", "Language2"],
    "frameworks": ["Framework1", "Framework2"],
    "tools": ["Tool1", "Tool2"],
    "databases": ["Database1", "Database2"]
  }
}
```

### ASCII Art Name

To customize the ASCII art display of your name:

1. Create your ASCII art using an online generator or tool
2. Go to `pagehero.tsx` in the project and add it
