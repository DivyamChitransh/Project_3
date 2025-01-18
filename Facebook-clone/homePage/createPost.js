// Select the form and its inputs
const form = document.querySelector('.create-post-form');
const titleInput = document.querySelector('#post-title');
const contentInput = document.querySelector('#post-content');
const imageInput = document.querySelector('#post-image');

// Add event listener to handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get values from inputs
    const title = titleInput.value;
    const content = contentInput.value;
    const imageFile = imageInput.files[0];

    if (!title || !content) {
        alert('Title and content are required!');
        return;
    }

    // Handle image upload (convert to Base64 string if an image is uploaded)
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = () => {
            const post = {
                title,
                content,
                image: reader.result, // Base64 encoded string
                timestamp: new Date().toISOString(),
            };
            savePostToLocalStorage(post);
            redirectToHomepage();
        };
        reader.readAsDataURL(imageFile);
    } else {
        // Create post object without an image
        const post = {
            title,
            content,
            image: null,
            timestamp: new Date().toISOString(),
        };
        savePostToLocalStorage(post);
        redirectToHomepage();
    }

    // Clear the form
    form.reset();
});

// Function to save post to local storage
function savePostToLocalStorage(post) {
    // Retrieve existing posts from local storage
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    // Add the new post to the list
    posts.push(post);

    // Save the updated posts list back to local storage
    localStorage.setItem('posts', JSON.stringify(posts));
}

// Function to redirect to the homepage
function redirectToHomepage() {
    window.location.href = '../index.html';
}
