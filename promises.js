// Define user object
const user = {
    username: 'aravind',
    lastActivity: '21/12/2023'
};

// Placeholder functions (with simulated delays)
function createPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const newPost = {
                id: 1,
                content: 'This is a new post.',
                author: user.username,
                // Any other relevant details for the post
            };
            resolve(newPost);
        }, 1000);
    });
}

function updateLastActivity() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.lastActivity = new Date().toLocaleString();
            resolve(user.lastActivity);
        }, 1000);
    });
}

// Function to update user post and activity
function userUpdatePost() {
    Promise.all([createPost(), updateLastActivity()])
        .then(([newPost, updatedLastActivity]) => {
            console.log('Post Created:', newPost);
            console.log('User\'s Updated Last Activity:', updatedLastActivity);
        })
        .catch((err) => {
            console.error('Error:', err);
        });
}

// Call the function to initiate the sequence
userUpdatePost();
