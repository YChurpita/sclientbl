<?php
defined('_JEXEC') or die;

/**
 * Template for Joomla! CMS, created with Artisteer.
 * See readme.txt for more details on how to use the template.
 */

require_once dirname(__FILE__) . DIRECTORY_SEPARATOR . 'functions.php';

// Create alias for $this object reference:
$document = $this;

// Shortcut for template base url:
$templateUrl = $document->baseurl . '/templates/' . $document->template;

Artx::load("Artx_Page");

// Initialize $view:
$view = $this->artx = new ArtxPage($this);

// Decorate component with Artisteer style:
$view->componentWrapper();

JHtml::_('behavior.framework', true);

?>
<!DOCTYPE html>
<html dir="ltr" lang="<?php echo $document->language; ?>">
<head>
    <jdoc:include type="head" />
    <link rel="stylesheet" href="<?php echo $document->baseurl; ?>/templates/system/css/system.css" />
    <link rel="stylesheet" href="<?php echo $document->baseurl; ?>/templates/system/css/general.css" />
 	<link rel="stylesheet" href="<?php echo $document->baseurl; ?>/templates/sodruzhestv/css/tsslider.css" />   
   
    <link rel="stylesheet" href="<?php echo $document->baseurl; ?>/templates/sodruzhestv/css/selmenu.css" />
    <link rel="stylesheet" href="<?php echo $document->baseurl; ?>/templates/sodruzhestv/css/horsl.css" />
    <link rel="stylesheet" href="<?php echo $document->baseurl; ?>/templates/sodruzhestv/css/catkey.css" />
    <link rel="stylesheet" href="<?php echo $document->baseurl; ?>/templates/sodruzhestv/css/slpredgaz.css" />  
    <link rel="stylesheet" href="<?php echo $document->baseurl; ?>/templates/sodruzhestv/css/gasmenu.css" />  	
    <link rel="stylesheet" href="<?php echo $document->baseurl; ?>/templates/sodruzhestv/css/oomenu.css" />  	
    <link rel="stylesheet" href="<?php echo $document->baseurl; ?>/templates/sodruzhestv/css/nedvmenu.css" />  	
    <link rel="stylesheet" href="<?php echo $document->baseurl; ?>/templates/sodruzhestv/css/fondmenu.css" />  	
	<link rel="stylesheet" href="<?php echo $document->baseurl; ?>/templates/sodruzhestv/css/azkmenu.css" /> 
    <link rel="stylesheet" href="<?php echo $document->baseurl; ?>/templates/sodruzhestv/css/gasstmenu.css" /> 
    <link rel="stylesheet" href="<?php echo $document->baseurl; ?>/templates/sodruzhestv/css/videoslider.css" /> 
    <link rel="stylesheet" href="<?php echo $document->baseurl; ?>/templates/sodruzhestv/css/billboard.css" /> 
    <link rel="stylesheet" href="<?php echo $document->baseurl; ?>/templates/sodruzhestv/css/catmenu.css" /> 
    <link rel="stylesheet" href="<?php echo $document->baseurl; ?>/templates/sodruzhestv/css/titlekey.css" />  
    <link rel="stylesheet" href="<?php echo $document->baseurl; ?>/templates/sodruzhestv/css/feedback.css" /> 
	<link rel="stylesheet" href="<?php echo $document->baseurl; ?>/templates/sodruzhestv/css/sodrcontact.css" /> 
  
    <!-- Created by Artisteer v4.0.0.58475 -->
    
    
    <meta name="viewport" content="initial-scale = 1.0, maximum-scale = 1.0, user-scalable = no, width = device-width">

    <!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
    <link rel="stylesheet" href="<?php echo $templateUrl; ?>/css/template.css" media="screen">
    <!--[if lte IE 7]><link rel="stylesheet" href="<?php echo $templateUrl; ?>/css/template.ie7.css" media="screen" /><![endif]-->
    <link rel="stylesheet" href="<?php echo $templateUrl; ?>/css/template.responsive.css" media="all">
    <link rel="stylesheet" href="<?php echo $document->baseurl; ?>/templates/sodruzhestv/css/correct.css" /> 
    <link rel="stylesheet" href="<?php echo $document->baseurl; ?>/templates/sodruzhestv/css/sfront.css" /> 
    <link rel="stylesheet" href="<?php echo $document->baseurl; ?>/templates/sodruzhestv/css/sodradvsl.css" /> 
	<link rel="stylesheet" href="<?php echo $document->baseurl; ?>/templates/sodruzhestv/css/sclientbl.css" /> 
    
	<script>if ('undefined' != typeof jQuery) document._artxJQueryBackup = jQuery;</script>
	 <script>
      var sturl = '<?php echo $this->baseurl ?>';
    </script>	
	
	
    <script src="<?php echo $templateUrl; ?>/jquer.js"></script>
    <script>jQuery.noConflict();</script>

    <script src="<?php echo $templateUrl; ?>/script.js"></script>
	<script type="text/javascript" src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/jquery-2.0.0.js"></script>
    <script>if (document._artxJQueryBackup) jQuery = document._artxJQueryBackup;</script>
    <script src="<?php echo $templateUrl; ?>/script.responsive.js"></script>
	 
    
	<script type="text/javascript" src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/selmenu.js"></script>

    <script type="text/javascript" src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/catkey.js"></script>
	<script type="text/javascript" src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/slpredgas.js"></script>
    <script type="text/javascript" src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/titleKey.js"></script>	 
	<script type="text/javascript" src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/sfront.js"></script>
    <script type="text/javascript" src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/tsslider.js"></script>	 
    <script type="text/javascript" src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/sodradvsl.js"></script>	
	   
    <script type="text/javascript" src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/gasmenu.js"></script>	 
    <script type="text/javascript" src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/oomenu.js"></script>	 
    <script type="text/javascript" src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/nedvmenu.js"></script>	
    <script type="text/javascript" src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/fondmenu.js"></script>	
    <script type="text/javascript" src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/azkmenu.js"></script>		
    <script type="text/javascript" src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/gasstmenu.js"></script>	
	<script type="text/javascript" src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/videoslider.js"></script>	
    <script type="text/javascript" src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/billboard.js"></script>	
    <script type="text/javascript" src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/catmenu.js"></script>
	<script type="text/javascript" src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/feedback.js"></script>
	<script type="text/javascript" src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/sclientbl.js"></script>
  

 </head>
<body>

<div id="art-main">
    <div class="art-sheet clearfix">
<header class="art-header clearfix"><?php echo $view->position('header', 'art-nostyle'); ?>

<div class ="header-logo" >
  <jdoc:include type="modules" name="logo1" />
</div> 

<div class ="header-lang" >
  <jdoc:include type="modules" name="lang1" />
</div> 

<div class ="header-contact" >
  <jdoc:include type="modules" name="contact1" />
</div> 

<div class="header-menu" >
  <jdoc:include type="modules" name="menu1" />
</div> 

<div class="header-search">
  <jdoc:include type="modules" name="search1" />
</div> 



    <div class="art-shapes">


            </div>

                
                    
</header>








<div style="position: absolute; height: 60px; width: 350px;  overflow: hidden; margin-left: 35% ; top: 150px; z-index: 20">
  <jdoc:include type="modules" name="btn1" />
</div> 





<?php if ($view->containsModules('user3', 'extra1', 'extra2')) : ?>
<nav class="art-nav clearfix">
    
<?php if ($view->containsModules('extra1')) : ?>
<div class="art-hmenu-extra1"><?php echo $view->position('extra1'); ?></div>
<?php endif; ?>
<?php if ($view->containsModules('extra2')) : ?>
<div class="art-hmenu-extra2"><?php echo $view->position('extra2'); ?></div>
<?php endif; ?>
<?php echo $view->position('user3'); ?>



 
    </nav>
<?php endif; ?>
<?php echo $view->position('banner1', 'art-nostyle'); ?>
<?php echo $view->positions(array('top1' => 33, 'top2' => 33, 'top3' => 34), 'art-block'); ?>
<div class="art-layout-wrapper clearfix">
                <div class="art-content-layout">
                    <div class="art-content-layout-row">
                        <?php if ($view->containsModules('left')) : ?>
<div class="art-layout-cell art-sidebar1 clearfix">
<?php echo $view->position('left', ''); ?>




                        </div>
<?php endif; ?>
                        <div class="art-layout-cell art-content clearfix">
<?php
  echo $view->position('banner2', 'art-nostyle');
  if ($view->containsModules('breadcrumb'))
    echo artxPost($view->position('breadcrumb'));
  echo $view->positions(array('user1' => 50, 'user2' => 50), 'art-article');
  echo $view->position('banner3', 'art-nostyle');
  echo artxPost(array('content' => '<jdoc:include type="message" />', 'classes' => ' art-messages'));
  echo '<jdoc:include type="component" />';
  echo $view->position('banner4', 'art-nostyle');
  echo $view->positions(array('user4' => 60, 'user5' => 30), 'art-nostyle');
  echo $view->position('banner5', 'art-nostyle');
?>

                        </div>
	
						
                    
</div>
                </div>
            

<div class="clearfix" style="position: absolute; height: 60px; width: 250px;  overflow: hidden; margin-left: 35% ; z-index: 20">
  <jdoc:include type="modules" name="btn2" />
</div>

</div>

<?php echo $view->positions(array('bottom1' => 33, 'bottom2' => 33, 'bottom3' => 34), 'art-block'); ?>
<?php echo $view->position('banner6', 'art-nostyle'); ?>
     

<div style="position: absolute; height: 20px; width: 95px;  overflow: hidden; margin-left: 88% ; botom: 20px; z-index: 20">
  <jdoc:include type="modules" name="topbtn" />
</div>



<footer class="art-footer clearfix"><?php echo $view->position('copyright', 'art-nostyle'); ?>



</footer>

    
 


</div>
</div>



<?php echo $view->position('debug'); ?>



</body>
</html>