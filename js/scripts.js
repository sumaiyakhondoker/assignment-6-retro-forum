tippy("[data-tippy-content]");

const loadPosts = async () =>{

    toggleLoading(true)
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json()
    // console.log(data);
    const posts = data.posts;
    // console.log(posts);
    setTimeout(()=>{
        displayPosts(posts)
    }, 2000)
}


const displayPosts = (posts) =>{
    // console.log(posts);
    
    
    
    const postsContainer = document.getElementById('posts-container');
    posts.forEach(post =>{
        // console.log(post.id);
        if(post.isActive){
            // console.log('online');
            const postCard = document.createElement('div') 
    
        postCard.classList =  `flex gap-2 md:gap-4 lg:gap-6 p-4 md:p-6 lg:p-10 border rounded-3xl shadow-xl hover:border-[#797DFC] bg-[#12132D0D] hover:bg-[#797DFC1A]`
        postCard.innerHTML = `
        <div  class="absolute left-[66px]  lg:left-[272px] border-2 border-white h-[3px] lg:h-[5px] w-[3px] lg:w-[5px] bg-green-500 p-2 rounded-full "></div>
        <img class="h-[50px] w-[50px] lg:h-[70px] lg:w-[70px] rounded-md lg:rounded-2xl" src="${post.image}" alt="">
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
            
            <button onclick = "handleMarkAsReadBtn('${post?.title}', '${post?.view_count}')" class="btn bg-green-500 text-white px-4 rounded-full read-btn"><i class=" fa-solid fa-envelope-open"></i></button>  
            </div>
            
        </div>
        </div>
        `;
    
        toggleLoading(false)
        postsContainer.appendChild(postCard)
        }else{
            // console.log('offline');
            const postCard = document.createElement('div') 
    
        postCard.classList =  `flex gap-2 md:gap-4 lg:gap-6 p-4 md:p-6 lg:p-10 border rounded-3xl shadow-xl hover:border-[#797DFC] bg-[#12132D0D] hover:bg-[#797DFC1A]`
        postCard.innerHTML = `
        <div  class="absolute left-[66px]  lg:left-[272px] border-2 border-white h-[3px] lg:h-[5px] w-[3px] lg:w-[5px] bg-red-500 p-2 rounded-full "></div>
        <img class="h-[50px] w-[50px] lg:h-[70px] lg:w-[70px] rounded-md lg:rounded-2xl" src="${post?.image}" alt="">
        </div>
        <div class="w-full">
        <p class="text-[#12132DCC] font-inter text-sm font-medium mb-0"><span class="mr-5"># ${post?.category}</span>Author: ${post.author.name}</p>
        <h3 class="text-xl font-bold text-color-primary mt-2 mb-3">${post?.title}</h3>
        <p class="font-inter mt-0 pb-5 border-b-2 border-dashed  border-gray-300 text-description-color ">${post?.description}</p>
    
        <div class=" flex justify-between items-center pt-5 w-full">
            <div class="font-inter text-description-color">
            <span><i class="fa-regular fa-message"></i> ${post?.comment_count}</span>
            <span><i class="fa-regular fa-eye ml-6"></i> ${post?.view_count}</span>
            <span><i class="fa-regular fa-clock ml-6"></i> ${post?.posted_time} min</span>
            
            </div>
            <div>
            
            <button onclick = "handleMarkAsReadBtn('${post?.title}' , '${post?.view_count}')" class="btn bg-green-500 text-white px-4 rounded-full read-btn"><i class=" fa-solid fa-envelope-open"></i></button>  
            </div>
            
        </div>
        </div>
        `;
        postsContainer.appendChild(postCard)
        }
    
        
    })
    }

// setTimeout(()=>{

// })


const handleMarkAsReadBtn = (heading, views) =>{
    
    const markAsReadNum = getConvertedValue('mark-as-read');


     document.getElementById('mark-as-read').innerText = markAsReadNum + 1;
  
    const headingsContainer = document.getElementById('headings-container');

    const headingDiv = document.createElement('div');
    headingDiv.classList = `flex justify-between  rounded-2xl p-4 bg-white`;

    
            const title = document.createElement('h4');
            const viewCount = document.createElement('span');


            title.innerText = heading;
            viewCount.innerHTML = `<i class="fa-regular fa-eye"></i>${views}`;
            
            title.classList = `font-semibold w-52`

            headingDiv.appendChild(title)
            headingDiv.appendChild(viewCount)

            headingsContainer.appendChild(headingDiv)







    
}


const getConvertedValue = (id)=>{
    const value = document.getElementById(id).innerText;
    const convertedToInt = parseInt(value)
    return convertedToInt;
}







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
        // console.log(post);
        const postDiv = document.createElement('div')
        postDiv.classList = `card bg-base-100 w-full lg:w-[374px] shadow-xl rounded-3xl border border-gray-200`

        postDiv.innerHTML = `
         <figure class="px-6 pt-6">
            <img
            src="${post?.cover_image}"
            alt="coverImage"
            class="rounded-2xl" />
        </figure>
        <div class="card-body ">
            <div class="text-description-color">
            <i class="fa-regular fa-calendar"></i><span> ${post?.author?.posted_date || 'No publish date'}</span> 
            </div>

            <h2 class=" text-color-primary  text-[18px] font-extrabold">${post?.title}</h2>
            <p class="text-description-color">${post?.description}</p>
            <div class="flex items-center  gap-4">
            <div>
                <img src="${post?.profile_image}" alt="author img" class="h-11 w-11 rounded-full">
            </div>
            <div>
                <h4 class="text-color-primary font-bold">${post?.author.name}</h4>
                <p class="text-description-color text-sm">${post?.author?.designation || 'Unknown'} </p>
            </div>
            </div>
            
        </div>

        `



        latestPostContainer.appendChild(postDiv)

    })
}

// handle search button
const handleSearchBtn =async () =>{
    toggleLoading(true)
    const searchField = document.getElementById('search-field')
    const searchFieldText = searchField.value;
    // console.log(searchFieldText);

    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchFieldText}`)
    const data = await res.json()
    const posts = data.posts
    // console.log(posts);

    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerText = ''
    setTimeout(() => {
        displayPosts(posts)
    }, 2000);
    

    

}


const toggleLoading = (isLoading)=>{
    const loading = document.getElementById('loading');
    if(isLoading){
        loading.classList.remove('hidden')
    }else{
        loading.classList.add('hidden')
    }
}

loadLatestPosts()

loadPosts()























