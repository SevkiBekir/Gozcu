<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
$route['default_controller'] = 'main';

$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;

$route['catagory/(:any)'] = 'catagory/index/$1';
$route['application/(:any)'] = 'application/index/$1';
//$route['application/(:any)/levels/'] = 'application/levels/';
$route['application/(:any)/levels/(:any)'] = 'application/levels/$1/$2';
$route['result/application/(:any)/filter'] = 'result/filter/$1';




/* CUSTOM */
//$route['courseList/search/catagory/(:any)'] = 'courseList/searchCat/$1';
//$route['course/(:any)/lesson']='lesson/transfer/$1';
//$route['course/(:any)/lesson/(:any)']='lesson/index/$2';
//$route['course/(:any)/lesson/(:any)/completed']='lesson/completed/$1/$2';
//$route['course/(:any)/payment']='course/payment/$1';
//$route['course/(:any)/payment']='course/payment/$1';
//$route['course/(:any)/payment/process']='course/process/$1';
//$route['course/(:any)']='course/index/$1';
//$route['profile/edit/process']='profile/process/';

