// Get all sidebar links and content section
const sidebarLinks = document.querySelectorAll('.sidebar ul li a');
const content = document.getElementById('content');

// Audio element for the "Blue" song
const blueAudio = new Audio('blue.mp3');
blueAudio.loop = true; // Enable looping

// Audio element for the "Cry" sound
const cryAudio = new Audio('cry.mp3');
cryAudio.loop = true; // Enable looping for continuous playback

// Function to play the "Blue" song
function playBlueSong() {
    blueAudio.play().catch(error => {
        console.error('Error playing audio:', error);
    });
}

// Function to pause the "Blue" song
function pauseBlueSong() {
    blueAudio.pause();
}

// Function to play the "Cry" sound
function playCrySong() {
    cryAudio.play().catch(error => {
        console.error('Error playing audio:', error);
    });
}

// Function to stop the "Cry" sound
function stopCrySong() {
    cryAudio.pause();
    cryAudio.currentTime = 0; // Reset the audio to the beginning
}

// Default content for "Moments We Shared"
const momentsContent = `
    <div class="happy-valentines">
        <div class="valentines-day-card">
            <div class="clouds"></div>
            <div class="hearts">
                <div class="heartOne">
                    <div class="left-side"></div>
                    <div class="right-side"></div>
                </div>
                <div class="heartTwo">
                    <div class="left-side"></div>
                    <div class="right-side"></div>
                </div>
                <div class="heartThree">
                    <div class="left-side"></div>
                    <div class="right-side"></div>
                </div>
                <div class="heartFour">
                    <div class="left-side"></div>
                    <div class="right-side"></div>
                </div>
                <div class="heartFive">
                    <div class="left-side"></div>
                    <div class="right-side"></div>
                </div>
            </div>
            <div class="text">
                <span>Tap this for more information ! <br /></span>
            </div>
        </div>
    </div>
`;

// Content for "Video Together"
const videoTogetherContent = `
    <div class="video-container">
        <video class="vid-box" src="video1.mp4" muted loop playsinline></video>
        <video class="vid-box" src="video2.mp4" muted loop playsinline></video>
    </div>
`;

// Content for "The Journey We’ve Taken"
const journeyContent = `
    <div class="photo-container">
        <div class="photo">
            <img src="together1.jpg" alt="Image 1" style="width: 300px; height: auto; object-fit: contain;">
        </div>
        <div class="photo">
            <img src="together2.jpg" alt="Image 2" style="width: 300px; height: auto; object-fit: contain;">
        </div>
    </div>
`;

// Content for "Favorite Foods We Enjoy"
const favoriteFoodsContent = `
    <div id="hedlinecontainer">
        <div id="shine">Favssssssssss pix I captured!!</div>
    </div>
    <div class="gallery">
        <img src="pic1.jpg" alt="Picture 1">
        <img src="pic2.jpg" alt="Picture 2">
        <img src="pic3.jpg" alt="Picture 3">
        <img src="pic4.jpg" alt="Picture 4">
        <img src="pic5.jpg" alt="Picture 5">
    </div>
`;

// Content for "Personal Essay"
const songsContent = `
    <div class="personal-essay-container">
        <h2>Personal Essay of Jhustyn Ferrer</h2>
        <div class="personal-essay-content">
            <p>“You only see the medals. You never see the mess.”</p>
            <p>I’m the type of person who knows how to smile through breaking. Who knows how to look presentable when everything inside me feels like it’s collapsing. I talk a lot, I joke a lot, I seem loud and alive — but that’s not the full picture. Not even close.</p>
            <p>My life has been nothing but a storm pretending to be a clear sky. I didn’t grow up with comfort or luxury. I grew up in survival mode — counting coins, skipping things I needed, and learning early on how to say, “I’m okay” when I wasn’t. We never had a lot. Sometimes, we had barely enough. And yet, I still had to show up like the world wasn’t falling apart behind my back.</p>
            <p>I worked harder than everyone around me, not because I wanted to, but because I had to. I graduated high school with high honors under the ABM strand — but even that didn’t silence the voice in my head that whispered, you still don’t matter. Because no award can fill your stomach when you’re hungry. No recognition can fix the light bills when they’re overdue. And worst of all — no achievement can silence your own mind when it turns against you.</p>
            <p>I’ve been fighting battles most people don’t even see. I walk into rooms trying to look confident, but inside, I’m just hoping nobody notices how insecure I feel about everything — my weight, my face, my worth. I’ve been skinny all my life. People call it a blessing, but to me, it’s a curse. I look in the mirror and see someone small. Fragile. Forgettable. There are days I wonder if I’ll ever feel like I’m enough — physically, emotionally, humanly.</p>
            <p>And I try. God, I try. I wear makeup to hide how hollow I feel. I dress up, fix my hair, put on a brave face — but nothing changes the fact that I often feel invisible. Like I have to perform just to be seen. Like I have to be excellent just to be tolerated.</p>
            <p>Now in college at National University Laguna, I’m still pushing, still pretending, still exhausting myself just to keep up. I only have classes twice a week, but the pressure never ends. I worry about money, I overthink constantly, I feel like I’m falling behind even when I’m doing my best. And when I get home, the fight doesn’t stop — it just gets quieter. Quieter, but heavier.</p>
            <p>I love my cats and my Ian ^_^ I mean — Cubcub and Xavier. They’re the few things that make me feel safe. They don’t judge. They don’t expect me to be perfect. They just curl up beside me like I matter. And maybe that’s why I hold onto them so tightly. Because sometimes, they’re the only proof I have that I’m not completely alone. thank you three ;>.</p>
            <p>My dream? It used to be big. Now, I just want peace. I want to wake up one day without this crushing fear of being forgotten. I want to walk into a room and not feel like I’m taking up space I don’t deserve. I want to stop feeling guilty for wanting more when we barely have enough.</p>
            <p>This essay isn’t about victory. It’s about survival. It’s about what it means to grow up feeling like the world is always one step ahead, and you’re stuck running barefoot in broken glass just trying to keep up.</p>
            <p>I’m Jhustyn Ferrer. I’m tired. I’m insecure. I’m always questioning my worth — even when I’m winning.<br>But I’m still here. And maybe that’s enough.<br>Or maybe it’s not.<br></p>
        </div>
    </div>
`;

// Set the "Moments We Shared" content as the default when the page loads
content.innerHTML = momentsContent;

// Mark the "Moments We Shared" link as active on page load
document.getElementById('momentsWeShared').classList.add('active');

// Function to load content dynamically based on the clicked sidebar link
function loadContent(pageId) {
    if (pageId === 'momentsWeShared') {
        content.innerHTML = momentsContent;
        playBlueSong(); // Play the "Blue" song
        stopCrySong(); // Stop the "Cry" sound
    } else if (pageId === 'individualPictures') {
        content.innerHTML = videoTogetherContent;
        document.querySelectorAll(".vid-box").forEach(video => {
            video.addEventListener("mouseenter", () => {
                video.play();
            });
            video.addEventListener("mouseleave", () => {
                video.pause();
                video.currentTime = 0;
            });
        });
        playBlueSong();
        stopCrySong(); // Stop the "Cry" sound
    } else if (pageId === 'ourStory') {
        content.innerHTML = journeyContent;
        playBlueSong();
        stopCrySong(); // Stop the "Cry" sound
    } else if (pageId === 'favoriteFoods') {
        content.innerHTML = favoriteFoodsContent;
        playBlueSong();
        stopCrySong(); // Stop the "Cry" sound
    } else if (pageId === 'favoriteSongs') {
        content.innerHTML = songsContent;
        pauseBlueSong(); // Pause the "Blue" song
        playCrySong(); // Play the "Cry" sound
    } else {
        stopCrySong(); // Stop the "Cry" sound
        content.innerHTML = `<h1>Explore Other Sections</h1><p>Select a section to see more content.</p>`;
        playBlueSong();
    }
}

// Event listener for sidebar links
sidebarLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        sidebarLinks.forEach(link => link.classList.remove('active'));
        event.target.classList.add('active');
        loadContent(event.target.id);
    });
});

// Function to create and animate snowflakes
function createSnowflakes() {
    const snowflakeContainer = document.createElement('div');
    snowflakeContainer.classList.add('snowflake-container');
    document.body.appendChild(snowflakeContainer);

    setInterval(() => {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random fall duration
        snowflake.style.opacity = Math.random();
        snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; // Random size
        snowflake.innerHTML = '❄'; // Snowflake character
        snowflakeContainer.appendChild(snowflake);

        // Remove snowflake after animation ends
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
        });
    }, 200); // Create a new snowflake every 200ms
}

// Call the snowfall function when the page loads
window.onload = function() {
    playBlueSong();
    createSnowflakes(); // Start snowfall effect
};