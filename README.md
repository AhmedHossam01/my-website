# My Personal Website

> Kind of a blogofolio..

![screenshot](./screenshot.png)

## Built With

- React
- Gatsby
- TailwindCSS

## Live Demo
[https://site.site.site](https://site.site.site)

## Authors

👤 **Ahmed Hossam**

- GitHub: [@ahmedhossam01](https://github.com/ahmedhossam01)
- LinkedIn: [Ahmed Hossam](https://linkedin.com/in/ahmedhossam01)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Tailblocks Website - Used TailwindCSS snippets from there.

## Script to scrape YouTube subscriptions
```javascript
const data = Array.from(document.querySelectorAll("#channel")).map(
  (channel) => {
    return {
      imageUrl: channel.querySelector("img").src,
      channelName: channel.querySelector("#title").textContent,
      link: channel.querySelector("a").href,
      featured: false,
    };
  }
);

console.log(JSON.stringify(data));
```

## 🚀 Quick start
2.  **Start developing.**

    Navigate into project's folder and run

    ```shell
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
