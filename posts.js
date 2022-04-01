const postsContaner = document.querySelector('.posts-list');

const getPosts = async() => {
   try {
       const responce = await fetch('https://jsonplaceholder.typicode.com/posts') 
       const data = await responce.json();  
       return data;
   } catch (err) {
       return [
            {
                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
            }
           
       ]
   }
};
getPosts().then((result) => {
    //console.log(result);
    let renderData = result.map(post => `<div class = 'card'> <h3>${post.title}</h3> <p>${post.body}</p></div>`);
    postsContaner.innerHTML = renderData.join('</br>')
})
.catch((err)=> alert(err.message))
