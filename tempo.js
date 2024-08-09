// =======================ager

// const  handleMarkAsReadBtn = async () =>{
//     const res = await fetch(' https://openapi.programming-hero.com/api/retro-forum/posts')
//     const data = await res.json()
//     const posts = data.posts
//     // console.log(posts);
//     for(const post of posts){
//        const markAsReadTitlesContainer = document.getElementById('mark-as-read-titles-container');
//     const headings = document.createElement('div')
//     headings.classList = `flex justify-between bg-white rounded-2xl p-4`
//     headings.innerHTML = `
//     <h4 class="font-semibold text-color-primary">${post.title}</h4>
//     <span class="font-inter text-description-color"><i class="fa-regular fa-eye ml-6"></i> ${post.view_count}</span>
//     `
//     markAsReadTitlesContainer.appendChild(headings)
//     }
    
   
    
// }

// const appendTitles = (id) =>{
//     const markAsReadTitlesContainer = document.getElementById('mark-as-read-titles-container');
//     const headings = document.createElement('div')
//     headings.classList = `flex justify-between bg-white rounded-2xl p-4`
//     headings.innerHTML = `
//     <h4 class="font-semibold text-color-primary">${id.parentNode.title}</h4>
//     <span class="font-inter text-description-color"><i class="fa-regular fa-eye ml-6"></i> ${post.view_count}</span>
//     `
//     markAsReadTitlesContainer.appendChild(headings)
// }




const headingText = e.target.parentNode.parentNode.parentNode.childNodes[3].innerText;
    const viewCountNum = e.target.parentNode.parentNode.parentNode.childNodes[7].childNodes[1].childNodes[3].innerText;
    console.log(headingText, viewCountNum);



