const postCard = document.createElement('div') 

postCard.classList =  `flex gap-6 p-10 border rounded-3xl shadow-xl hover:border-[#797DFC] bg-[#12132D0D] hover:bg-[#797DFC1A]`
postCard.innerHTML = `
<div  class="absolute lg:left-[272px] border-2 border-white max-h-[5px] max-w-[5px] bg-black p-2 rounded-full "></div>
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
    
    <button onclick = "handleMarkAsReadBtn('${post?.title}', '${post?.view_count}')" class="btn bg-green-500 text-white px-4 rounded-full read-btn"><i class=" fa-solid fa-envelope-open"></i></button>  
    </div>
    
</div>
</div>
`;
postsContainer.appendChild(postCard)