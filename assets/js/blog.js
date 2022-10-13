let dataBlog = []

function addBlog(event) { 
    event.preventDefault()

    let title = document.getElementById("input-title").value
    let content = document.getElementById("input-content").value
    let image = document.getElementById("input-blog-image").files[0]

    // buat url gambar 
    image = URL.createObjectURL(image)
    console.log(image)

    let blog = {
        title,
        content,
        image,
        postAt: new Date,
        autohor: "Rizko" 
    }
    dataBlog.push(blog)
    console.log(dataBlog)

    renderBlog()
}

function renderBlog() {
    document.getElementById("contents").innerHTML =''

    for (let index = 0; index < dataBlog.length; index++) {
        console.log(dataBlog[index])

        document.getElementById("contents").innerHTML +=`
        <div class="blog-list-item">
            <div ckass="blog-image">
                <img src="${dataBlog[index].image}">
        </div>
        <div class ="blog-content">
            <div ckass="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-post">Post Blog</button>
            </div>
            <h1>
                <a href="project-detail.html" target="_blank">
                    ${dataBlog[index].title}
            </h1>
            <div class="detail-blog-content">
                12 Jul 2022 22:30 WIB | 
            </div>
            <p>
                ${dataBlog[index].content}
            </p>
            </div>
        </div>
        `
    }
}

renderBlog()
