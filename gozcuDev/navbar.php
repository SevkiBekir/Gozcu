<div class="header-section">

    <!--toggle button start-->
    <a class="toggle-btn  menu-collapsed"><i class="fa fa-bars"></i></a>
    <!--toggle button end-->

    <!--notification menu start -->
    <div class="menu-right">
        <div class="user-panel-top">
            <div class="profile_details_left">
                <ul class="nofitications-dropdown">
                    <h2><span>ODTÜ</span> Gözcü</h2>
                    <div class="clearfix"></div>
                </ul>
            </div>
            <div class="profile_details">
                <ul>
                    <li class="dropdown profile_details_drop">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                            <div class="profile_img">
                                <div class="user-name">
                                    <p><?php echo $_SESSION["user"]["firstname"]." ".$_SESSION["user"]["lastname"] ?><span>Kullanıcı</span></p>
                                </div>
                                <i class="lnr lnr-chevron-down"></i>
                                <i class="lnr lnr-chevron-up"></i>
                                <div class="clearfix"></div>
                            </div>
                        </a>
                        <ul class="dropdown-menu drp-mnu">
                            <li> <a href="logout.php"><i class="fa fa-sign-out"></i> Çıkış Yap</a> </li>
                        </ul>
                    </li>
                    <div class="clearfix"> </div>
                </ul>
            </div>

            <div class="clearfix"></div>
        </div>
    </div>
    <!--notification menu end -->
</div>