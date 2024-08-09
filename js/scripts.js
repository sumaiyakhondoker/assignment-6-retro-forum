tippy("[data-tippy-content]");





const loadPosts = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json()
    // console.log(data);
    const posts = data.posts;
    // console.log(posts);
    displayPosts(posts)
}

const displayPosts = (posts) =>{
// console.log(posts);



const postsContainer = document.getElementById('posts-container');
posts.forEach(post =>{
    // console.log(post.id);
    
    const postCard = document.createElement('div') 
    postCard.classList =  `flex gap-6 p-10 border rounded-3xl shadow-xl hover:border-[#797DFC] bg-[#12132D0D] hover:bg-[#797DFC1A]`
    postCard.innerHTML = `
    <div>
    <div class="absolute lg:left-[272px]  border-2 border-white max-h-[5px] max-w-[5px] bg-black p-2 rounded-full"></div>
    <img class="max-h-[70px] max-w-[70px] rounded-2xl" src="${post.image}" alt="">
    </div>
    <div class="w-full">
    <p class="text-[#12132DCC] font-inter text-sm font-medium mb-0"><span class="mr-5"># ${post.category}</span>Author: ${post.author.name}</p>
    <h3 class="text-xl font-bold text-color-primary mt-2 mb-3">${post.title}</h3>
    <p class="font-inter mt-0 pb-5 border-b-2 border-dashed  border-gray-300 text-description-color ">${post.description}</p>

    <div class=" flex justify-between items-center pt-5 w-full">
        <div class="font-inter text-description-color">
        <span><i class="fa-regular fa-message"></i> ${post.comment_count}</span>
        <span><i class="fa-regular fa-eye ml-6"></i> ${post.view_count}</span>
        <span><i class="fa-regular fa-clock ml-6"></i> ${post.posted_time} min</span>
        
        </div>
        <div>
        
        <button onclick = 'handleMarkAsReadBtn()'  class=" btn bg-green-500 text-white px-4 rounded-full read-btn"><i class=" fa-solid fa-envelope-open"></i></button>  
        </div>
        
    </div>
    </div>
    `;
    postsContainer.appendChild(postCard)

})
}

// new
const handleMarkAsReadBtn = () =>{
    // console.log('starting');
    const allReadBtn = document.getElementsByClassName('read-btn');
//  console.log(allReadBtn);

for(const btn of allReadBtn){
    btn.addEventListener('click', function(e){
        console.log(e.target);
    })
}


}




// =============================== pray hoye gece
// const handleMarkAsReadBtn = () =>{
//     const allReadBtn = document.getElementsByClassName('read-btn')
//  console.log(readBtn);

//     for(const btn of allReadBtn){
//         btn.addEventListener('click', function(e){

//             const headingText = e.target.parentNode.parentNode.parentNode.childNodes[3].innerText;
//             const viewCountNum = e.target.parentNode.parentNode.parentNode.childNodes[7].childNodes[1].childNodes[3].innerText;


//             const headingsContainer = document.getElementById('headings-container');

//             const headingDiv = document.createElement('div');
//             headingDiv.classList = `flex justify-between  rounded-2xl p-4 bg-white`;


//             const title = document.createElement('h4');
//             const viewCount = document.createElement('span');

//             title.innerText = headingText;
//             viewCount.innerHTML = `<i class="fa-regular fa-eye"></i>${viewCountNum}`;

//             title.classList = `font-semibold w-52`






//             headingDiv.appendChild(title)
//             headingDiv.appendChild(viewCount)

//             headingsContainer.appendChild(headingDiv)



//         //     
//const heading = document.getElementById('heading');
//heading.innerText = headingText;

//const viewCountNum = e.target.parentNode.parentNode.parentNode.childNodes[7].childNodes[1].childNodes[3].innerText


//         //     const viewCount = document.getElementById('view-count');
//             // viewCount.innerHTML = 
//             // `

//             // `


//             // ;

//         })
//     }
// }





// latest post
const loadLatestPosts =async ()=>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const posts = await res.json()
    // console.log(data);
    displayLatestPost(posts)
}

const displayLatestPost = (posts) =>{
    // console.log(posts);
    const latestPostContainer = document.getElementById('latest-post-container')
    posts.forEach((post)=>{
        console.log(post);
        const postDiv = document.createElement('div')
        postDiv.classList = `card bg-base-100 w-full lg:w-[374px] shadow-xl rounded-3xl border border-gray-200`

        postDiv.innerHTML = `
         <figure class="px-6 pt-6">
            <img
            src="${post.cover_image}"
            alt="coverImage"
            class="rounded-2xl" />
        </figure>
        <div class="card-body ">
            <div class="text-description-color">
            <i class="fa-regular fa-calendar"></i><span> ${post.author.posted_date || 'No publish date'}</span> 
            </div>

            <h2 class=" text-color-primary  text-[18px] font-extrabold">${post.title}</h2>
            <p class="text-description-color">${post.description}</p>
            <div class="flex items-center  gap-4">
            <div>
                <img src="${post.profile_image}" alt="author img" class="h-11 w-11 rounded-full">
            </div>
            <div>
                <h4 class="text-color-primary font-bold">${post.author.name}</h4>
                <p class="text-description-color text-sm">${post.author.designation || 'Unknown'} </p>
            </div>
            </div>
            
        </div>

        `


        // postDiv.innerHTML = `
        // <figure class="px-6 pt-6">
        //     <img
        //     src=""
        //     alt="coverImage"
        //     class="rounded-2xl" />
        // </figure>
        // <div class="card-body ">
        //     <div>
        //     <i class="fa-regular fa-calendar"></i><span> </span> 
        //     </div>

        //     <h2 class="card-title"></h2>
        //     <p class="text-description-color"></p>
        //     <div class="flex items-center  gap-4">
        //     <div>
        //         <img src="" alt="author img">
        //     </div>
        //     <div>
        //         <h4></h4>
        //         <p></p>
        //     </div>
        //     </div>
            
        // </div>
        
        // `

        latestPostContainer.appendChild(postDiv)

    })
}




loadLatestPosts()






loadPosts()
























// const loadData = async()=>{
//     const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
//     const data = await res.json();
//     const phones = data.data;
//     // console.log(phones);
//     displayPhones(phones)
// }


// const displayPhones = (phones)=>{
// // console.log(phones);
// const phoneContainer = document.getElementById('phone-container')
// phones.forEach(phone =>{
// console.log(phone);
// const phoneCard = document.createElement('div')
// phoneCard.classList = `card bg-base-100 w-96 shadow-xl`;
// phoneCard.innerHTML = `
//     <figure class="px-10 pt-10">
//     <img
//     src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//     alt="Shoes"
//     class="rounded-xl" />
//     </figure>
//     <div class="card-body items-center text-center">
//     <h2 class="card-title">Shoes!</h2>
//     <p>If a dog chews shoes whose shoes does he choose?</p>
//     <div class="card-actions">
//     <button class="btn btn-primary">Buy Now</button>
//     </div>
//     </div>
// `;
// phoneContainer.appendChild(phoneCard);



// });
// }
// loadData()                                                                                                                                                     