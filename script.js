const titles = [
    "The Power of BLOG in Content Generation",
    "How Copy.BLOG is Revolutionizing the Writing Process",
    "Unlocking Creativity with BLOG Copywriting",
    "The Future of Blogging: BLOG-Generated Content",
    "Writing Made Easy: BLOG-Powered Copywriting Tools"
];

const contents = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat tortor non felis tincidunt, id feugiat nunc congue. Suspendisse potenti.",
    "Praesent eu ligula at ex fermentum condimentum vitae in tortor. Aliquam erat volutpat.",
    "Integer ut dui nunc. Donec scelerisque mi in massa pulvinar sagittis. Vestibulum id cursus metus. Quisque semper quam lectus, eget elementum nunc dignissim quis.",
    "Vestibulum vel est non mauris malesuada placerat. Suspendisse magnis nostra iaculis nostra sit diam tellus enim facilisi.",
    "Curabitur habitant platea tempus. Duis scelerisque maecenas potenti fermentum felis orci."
];

document.addEventListener("DOMContentLoaded", function() {
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    const randomContent = contents[Math.floor(Math.random() * contents.length)];

    document.getElementById("title").textContent = randomTitle;
    document.getElementById("content").textContent = randomContent;
});
