Ariana_mp3 = "";
Taylor_mp3 = "";

function preload()
{
    Ariana_mp3 = loadSound("Ariana Grande - Dangerous Woman (Audio).mp3");
    Taylor_mp3 = loadSound("Taylor Swift - Wildest Dreams (Taylor's Version) (Official Audio).mp3");
}

function setup()
{
    canvas = createCanvas(500, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 500, 500);
}
