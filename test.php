<?php

if (isset ( $_GET ['key'] ) && $_GET ['key'] == md5 ( 'logout' ) || ! isset ( $_GET ['key'] ) || empty ( $_GET ['key'] ) ) {
	session_start ();
	session_unset (); // cette fonction permet de supprimer tous les variables session cad valeur
	session_destroy (); // permet la destruction de session
		                 
}
// session_name('so');
session_start ();


$page ="";
if (isset ( $_GET ['key'] ) && !empty ( $_GET ['key'] ) ) {
	
	if ($_GET ['key'] == md5 ( 'logout' )) {
		$page = md5 ( 'login' );//login
		$pageselect = "";
	} else {
		$page = $_GET ['key'];
		$pageselect = $page;
	}
} else if (! isset ( $_GET ['key'] )) {

	$page = md5 ( 'login' );//login
	$pageselect = "";
}

include_once ('lang/fr.php');
include_once (FILE_Cl_FUNCTION);

// require_once 'class/class_db.php';

$fonction = new fonctions ();
$path_xml = FILE_XML_CONFIG;
$fonction->xml_config ( $path_xml );


    // style administrateur
	if (isset($_SESSION['user']['stat']) && $_SESSION['user']['stat']==1){
	
		if(! isset ( $_GET ['key'] )) {

			if ($_SESSION['user']['type']=="Administrateur"){
				$page = md5 ( 'adminProfil' );//page home Administrateur
				$pageselect = "";
			}
			elseif($_SESSION['user']['type']=="Étudiant"){
				$page = md5 ( 'EtudProfil' );////page home Etudiant
					$pageselect = "";
			}
			else{
				$page = md5 ( 'ensProfil' );////page home Enseignant
					$pageselect = "";
			}
			
		}
		
		$fonction->load_html_open ();
		$fonction->load_head ( '', 'true', 'true', $page );
		$fonction->load_head_close ();
		
		$fonction->load_haeder( $page );
		$fonction->load_sliderbar_g( $page );
		
		$fonction->load_div_main ( $page );
		$fonction->load_js_basic_buttom ($page);
		$fonction->load_html_close ();
		

	}else if (isset($_SESSION['user']['stat']) && $_SESSION['user']['stat']==0 || ! isset ($_SESSION['user']['stat']) ) {
		
		$page = md5 ( 'login' );//login
		$pageselect = "";
		
		$fonction->load_div_main ( $page );
		
		
	}
?>
    

    
  



  



