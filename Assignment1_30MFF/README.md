# Assignment 1: Website | Sep 21
## [Coco and Ostap](https://sripranav9.github.io/CommunicationsLab/Assignment1_30MFF/)

### Description
This website is for the 30MFF shot by 3 students from the class: Communications Lab (IM-UH 1011) at New York University, Abu Dhabi. The task was to finish shooting 
a video and edit it within 30 minutes. The video must have a story, a meaning, and should make sense (something that is not totally random). Our team came
up with this idea as it is common for university students and we used our soft toys (featured as Coco and Ostap) to depict what we wanted to convey – which is 
academic pressure and stress in university and how friends can help us cope with that. In the film, Coco and Ostap are worried about their studies, they are confused
and nothing might be going right in their lives, hence they decide to meet up – showing how friends play an important role during this period. To host this film, 
we needed to create a website using HTML, CSS, and JavaScript. The link to the website can be found [here](https://sripranav9.github.io/CommunicationsLab/Assignment1_30MFF/) 
or in the title above. The website is a landing page with all the necessary sections in one main homepage – main title, the video (embedded using vimeo), 
team of directors, and a 'contact me' option for visitors to shoot an email to me. The website is in a dark setting to show this problem at large common to many 
students across the globe. 

### Process
#### Film
- As a group, we took 4-6 minutes to brainstorm on the topic, finding a story that could enable us to depict itself using the objects around us. 
- We then wanted to make use of our soft toys, and depict the common problem students had at universities. 
- We then met to shoot videos quickly, and then came back to collaboratively edit the video.

#### Website
- Website Wireframe: [Figma Prototype](https://www.figma.com/proto/9OUJp1olSfL7t8W88q5o1s/30MFF-%7C-Communications-Lab?page-id=0%3A1&node-id=1%3A2&viewport=410%2C146%2C0.27&scaling=scale-down)
  - I made a wireframe and tried to stick to the elements in the wireframe. But as I explored more options in HTML and CSS, I decided to add some elements, and also delete some of them along the way.
- I began with watching some tutorials on HTML and CSS (mentioned in the sources).
- I started making some basic html pages embedding some media like videos and images.
- After experimenting with a lot of functions in CSS, I began with the first section, or rather, the navigation bar of the main website: It took some time to get to know how to add transition to the hover effect, but it seems pretty easy now. Next I added the button to watch the movie, initially, I was exploring the idea of embedding a link to google drive where the film can be watched, but embedding it was something I was keen on exploring. 
- After creating the button, I went on to create the next section to have the main video and a title called '30MFF video' which I've linked to the button to watch the film using an anchor point using ````id```` parameter on HTML.
- Then I created a container to have the description in it, and further the team of directors - which is a composition of 1 row and 3 columns. 
- I've also highlighted them using different colors to attract attention from the users, adding a hover effect. (this might be a problem sometimes as the user might think the highlighted effect post hover means a link that is attached. 
- Finally, I added a Contact Me section that can let the user email me. 

### Problems and a few workarounds
- The edited video is around 800 MB, so GitHub Desktop couldn't push the video to the server owing to the large file size. The workaround to this was to post the video on Vimeo, and copy an Embed link from Vimeo into the HTML file to fully embed the video into the website. 
- I wanted to add more scroll like effect when the buttons are clicked which takes the user to the specific anchor point in the page, mainly for a smoother user experience. To do this I had to add the following to the top in the ````style.css```` file:

  ````
  /* This smoothens the scrolling behaviour when links to anchor points are clicked*/
  html{
      scroll-behavior: smooth;
  }
  ````
- I also wanted to add the logos for instagram, facebook, etc. for other social media handles in the Contact Me section but the link for these using font awesome did not work, initially. I had to update the version of the Font Awesome on the HTML page, and also make sure the icons are not pro version ones. I could also finally make them work as clickable links which open in new-tabs.

### Reflections
Specifically talking about HTML, initially it was very overwhelming to use. Once I have practiced from several tutorials and got acquainted to the language, I was more comfortable to code in HTML and same the CSS as well. I really love how we can literally control every element using CSS. However, there are some elements whose execution I could not figure out with respect to what was in my wireframe (for eg. the '30MFF' in the top middle of the navigation bar). The rest I could figure out, in terms of adding anchor points to the buttons, and navigating through the page from various points. Furthermore, I am now acquanited with embedding vimeo videos as well, which lets me put videos of any size into the website.

It was a very good experience learning how to create websites from scratch. I have used builders like [Wix](https://www.wix.com) and found them to be not very responsive. So I have explored other builders like [Wordpress](www.wordpress.com), and mainly [EditorX](www.editorx.com) which is solely developed for responsive design, in which I failed to create a responsive website again. I think learning HTML and CSS has enabled me to probably try out the coding feature on EditorX, to create better responsive websites (specifically, portfolios!). 

### Sources
1. [YouTube Tutorial: Making a responsive website using HTML and CSS](https://www.youtube.com/watch?v=oYRda7UtuhA)
2. [YouTube Tutorial: [commlab] intro to html and css](https://www.youtube.com/watch?v=STPUv_f1IIw)
3. [Google Fonts](https://www.google.com/fonts)
4. [YouTube Tutorial: Font Awesome](https://www.youtube.com/watch?v=q93hR316nk4&t=460s)
5. [Anchor points in HTML](https://www.w3docs.com/snippets/html/how-to-create-an-anchor-link-to-jump-to-a-specific-part-of-a-page.html)
6. [Font Awesome](https://fontawesome.com/icons/bars?s=solid&f=classic)

