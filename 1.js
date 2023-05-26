<!doctype html>
<html>
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <title>后台管理系统</title>

    <!-- CSS files -->
    <link href="./dist/css/tabler.min.css" rel="stylesheet"/>
</head>
<body>
<div class="page">
    <header class="navbar navbar-expand-md navbar-light d-print-none">
        <div class="container-xl">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <h1 class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                <a href=".">
                    <img src="./__PUBLIC__/images/tubiao.png" width="110" height="32" alt="Tabler" class="navbar-brand-image">
                    <span style="position: relative;top: 4px;">管理系统</span>
                </a>
            </h1>
            <div class="navbar-nav flex-row order-md-last">
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown"
                       aria-label="Open user menu">
                        <span id="admintouxiang" class="avatar avatar-sm" style="background-image: url(./__PUBLIC__/images/touxiang.png)"></span>
                        <div class="d-none d-xl-block ps-2">
                            <div id="userlabel">Paweł Kuna</div>
                        </div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <a href="#" onclick="setHref('profile.html')" class="dropdown-item">个人信息</a>
                        <a href="#" onclick="setHref('changepw.html')" class="dropdown-item">修改密码</a>
                        <!--<a href="#" class="dropdown-item">Feedback</a>-->
                        <div class="dropdown-divider"></div>
                        <!--<a href="#" class="dropdown-item">Settings</a>-->
                        <a href="#" onclick="logOut();" class="dropdown-item">退出登录</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div class="navbar-expand-md">
        <div class="collapse navbar-collapse" id="navbar-menu">
            <div class="navbar navbar-light">
                <div class="container-xl">
                    <ul class="navbar-nav" id="mymenus">
                        <li class="nav-item active" onclick="setUrl(this,'http://localhost:8088/user.html')">
                            <a class="nav-link" href="#">
                              <span class="nav-link-title">用户管理</span>
                            </a>
                        </li>

                        <li class="nav-item" onclick="setUrl(this,'http://localhost:8088/good.html')">
                            <a class="nav-link" href="#">
						      <!--<span class="nav-link-icon d-md-none d-lg-inline-block"></span>-->
                              <span class="nav-link-title">商品管理</span>
                            </a>
                        </li>

                        <li class="nav-item" onclick="setUrl(this,'http://localhost:8088/problem.html')">
                            <a class="nav-link" href="#">
						      <!--<span class="nav-link-icon d-md-none d-lg-inline-block"></span>-->
                              <span class="nav-link-title">知识问答管理</span>
                            </a>
                        </li>

                    </ul>

                </div>
            </div>
        </div>
    </div>
    <div class="page-wrapper">
        <iframe id="targetframe" src="" style="height: 100vh;"></iframe>
    </div>
</div>
<!-- Tabler Core -->
<script src="./dist/js/tabler.min.js" defer></script>
<script type="text/javascript" src="./__PUBLIC__/js/jquery-3.4.1.min.js"></script>
<script type="text/javascript" src="./__PUBLIC__/js/common.js"></script>
<script type="text/javascript">
    function setUrl(el, url) {
        $(".navbar-nav .active").removeClass("active");
        $(el).addClass("active");
        $("#targetframe").attr("src", url);
    }

    function setHref(url) {
        $("#targetframe").attr("src", rootUrl+url);
    }



    function initMenus(){
        let menujson = null;
        if(userinfo.roletype=="3"){
            menujson = "./__PUBLIC__/layuimini/api/init3.json";

        }else if(userinfo.roletype=="1"){
            menujson = "./__PUBLIC__/layuimini/api/init.json";
        }else{
            window.location.href="login.html";
        }
        $.getJSON(menujson,null,function (mdata){
            console.log(mdata);
            let homeInfo = mdata.homeInfo;
            let hurl = homeInfo.href;
            if(hurl){
                $("#targetframe").attr("src",rootUrl+hurl)
            }

            let logoInfo = mdata.logoInfo;
            let logoimg = logoInfo.image;
            let htitle = logoInfo.title;

            let menuInfo = mdata.menuInfo;
            let mlist = menuInfo[0]['child'];

            let mhtml = "";
            for (let i = 0; i < mlist.length; i++) {
                let m = mlist[i];
                mhtml += `<li class="nav-item" onclick="setUrl(this,'${rootUrl+m.href}')">
                            <a class="nav-link" href="#">
                              <span class="nav-link-title">${m.title}</span>
                            </a>
                        </li>`;
            }
            mhtml += `<li class="nav-item" onclick="setUrl(this,'http://localhost:8088/problem.html')">
                            <a class="nav-link" href="#">
						    
                              <span class="nav-link-title">知识问答管理</span>
                            </a>
                        </li>`

            $("#mymenus").html(mhtml);
            $(".navbar-nav .active").removeClass("active");
            $(".navbar-nav .bg-gradient-primary").removeClass("bg-gradient-primary");
        })
    }

    function logOut(){
        window.location.href="login.html";
    }
    $(function(){
        if(userinfo){
            $("#userlabel").text(userinfo && userinfo.username);
            $("#admintouxiang").css("background-image","url('"+fileurl+userinfo.img+"')");
            initMenus();
        }else{
            logOut()
        }

    });
</script>
</body>
</html>