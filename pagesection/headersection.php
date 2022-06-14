<header class="headerSection">
    <div class="headerContainer">
        <img src="assets/images/logo.png" alt="7/11 Banner Logo" class="headerLogo">
    </div>
    <div class="headerNavigationContainer">
        <a href="praesentium.php" class="headerLink">
            <?php echo $headermenu1; ?>
            <div class="headerLinkHover"></div>
        </a>
        <a href="index.php" class="headerLink">
            <?php echo $headermenu2; ?>
            <div class="headerLinkHover headerLinkActive"></div>
        </a>
        <a href="dignissimos.php" class="headerLink">
            <?php echo $headermenu3; ?>
            <div class="headerLinkHover"></div>
        </a>
        <a href="blanditiis.php" class="headerLink">
            <?php echo $headermenu4; ?>
            <div class="headerLinkHover"></div>
        </a>
    </div>
    <div class="headerMobileNavigationBackground" onclick="closeNavigationMobileMenuContainer()"></div>
    <div class="headerMobileNavigationContainer">
        <div class="headerContainer">
            <img src="assets/images/logo.png" alt="7/11 Banner Logo" class="headerLogo">
        </div>
        <a href="praesentium.php" class="headerMobileNavigationContainerLink headerMobileNavigationContainerLink1" 
        ><?php echo $headermenu1; ?></a>
        <a href="index.php" class="headerMobileNavigationContainerLink"><?php echo $headermenu2; ?></a>
        <a href="dignissimos.php" class="headerMobileNavigationContainerLink"><?php echo $headermenu3; ?></a>
        <a href="blanditiis.php" class="headerMobileNavigationContainerLink"><?php echo $headermenu4; ?></a>
        <p class="headerMobileNavigationContainerAuthor">Made with ❤️ by <?php echo $authorAlias; ?></p>
    </div>
</header>