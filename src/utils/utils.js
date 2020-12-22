export const denormalizeDataArrays = (api, usersModel) => {
    api.getUsers().then((users) => {
        api.getPosts().then((posts) => {
            api.getComments().then((comments) => {
                posts.forEach((post) => {
                    const postComments = comments.filter(
                        (comment) => comment.postId === post.id
                    );
                    post.comments = postComments;
                });

                users.forEach((user) => {
                    const userPosts = posts.filter((post) => post.userId === user.id);
                    user.posts = userPosts;
                });

                usersModel.setUsers(users);
            });
        });
    });
}
