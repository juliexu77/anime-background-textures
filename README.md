# Image Hosting Repository

A simple image hosting solution with a JSON manifest for fetching random images.

## Structure

```
├── images/           # All image files go here
│   ├── image1.jpg
│   ├── image2.png
│   └── ...
├── images.json       # Manifest file with all image URLs
└── README.md
```

## JSON Schema

The `images.json` file contains:

```json
{
  "version": "1.0.0",
  "lastUpdated": "2026-02-02",
  "totalImages": 5,
  "baseUrl": "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/images/",
  "images": [
    { "filename": "sunset.jpg", "alt": "Sunset over mountains" },
    { "filename": "ocean.jpg", "alt": "Calm ocean waves" }
  ]
}
```

## Usage in Other Apps

### Fetch a Random Image (JavaScript)

```javascript
async function getRandomImage() {
  const res = await fetch('https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/images.json');
  const data = await res.json();
  
  const randomIndex = Math.floor(Math.random() * data.images.length);
  const image = data.images[randomIndex];
  
  return {
    url: data.baseUrl + image.filename,
    alt: image.alt
  };
}

// Usage
getRandomImage().then(img => {
  document.getElementById('myImage').src = img.url;
});
```

### React Example

```jsx
import { useState, useEffect } from 'react';

function RandomImage() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/images.json')
      .then(res => res.json())
      .then(data => {
        const random = data.images[Math.floor(Math.random() * data.images.length)];
        setImage({ url: data.baseUrl + random.filename, alt: random.alt });
      });
  }, []);

  if (!image) return <div>Loading...</div>;
  return <img src={image.url} alt={image.alt} />;
}
```

### Python Example

```python
import requests
import random

def get_random_image():
    res = requests.get('https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/images.json')
    data = res.json()
    
    image = random.choice(data['images'])
    return data['baseUrl'] + image['filename']
```

## Adding Images

1. Upload images to the `images/` folder
2. Update `images.json` with the new entries:

```json
{
  "images": [
    { "filename": "your-image.jpg", "alt": "Description of image" }
  ]
}
```

3. Update `totalImages` count and `lastUpdated` date
4. Commit and push

## Important Notes

- **Update `baseUrl`**: Replace `YOUR_USERNAME` and `YOUR_REPO` with your actual GitHub username and repository name
- **File naming**: Use lowercase, no spaces (use hyphens instead)
- **Supported formats**: jpg, jpeg, png, gif, webp
- **GitHub raw URL format**: `https://raw.githubusercontent.com/{user}/{repo}/{branch}/{path}`

## Cache Considerations

GitHub raw files are cached. For immediate updates, you can add a cache-busting query parameter:

```javascript
const url = `${baseUrl}${filename}?v=${Date.now()}`;
```
