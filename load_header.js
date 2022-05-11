document.write(`
<header>
<ul class="head_nav_ul">
    <li class="head_nav_li" id="header_name">Э. В. Соколова</li>
    <li class="head_nav_li">
        <a href="main.html">
            <span class="header_text" id="header_home">ГЛАВНАЯ</span>
            <img src="img/home.svg" class="header_home_svg">
        </a>
    </li>
    <li class="head_nav_li">
        <a href="blog.html">
            <span class="header_text" id="header_blog">БЛОГ</span>
            <img src="img/blog.svg" class="header_blog_svg">
        </a>
    </li>
    <li class="head_nav_li">
        <a href="prices.html">
            <span class="header_text" id="header_prices">УСЛУГИ</span>
            <img src="img/prices.svg" class="header_prices_svg">
        </a>
    </li>
    <li class="head_nav_li">
        <a href="gallery.html">
            <span class="header_text" id="header_gallery">ГАЛЕРЕЯ</span>
            <img src="img/gallery.svg" class="header_gallery_svg">
        </a>
    </li>
</ul>
</header>
<div id="to-top" onclick='toTop()'></div>
`)