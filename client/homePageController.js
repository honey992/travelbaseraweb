'use Strict';

app.controller('userController', function($scope){
$scope.fbAlbumImages = [{source:"https://newevolutiondesigns.com/images/freebies/city-wallpaper-5.jpg"},
                        {source:"https://newevolutiondesigns.com/images/freebies/city-wallpaper-preview-1.jpg"},
                        {source:"dist/images/hero-image.jpg"}
                      ];
 
   $scope.popularData = [{
   						image:"dist/images/hostel-1.jpg",
   						title:'Hostel Name Title Here',
   						description:'3989 Elk City Road Indianapolis, IN 46204',
   						price:'$40.82',
   						reviews:'2'
   },{
   						image:"dist/images/hostel-2.jpg",
   						title:'Hostel Name Title Here',
   						description:'3989 Elk City Road Indianapolis, IN 46204',
   						price:'$40.82',
   						reviews:'2'
   },{
   						image:"dist/images/hostel-3.jpg",
   						title:'Hostel Name Title Here',
   						description:'3989 Elk City Road Indianapolis, IN 46204',
   						price:'$40.82',
   						reviews:'2'
   },{
   						image:"dist/images/hostel-1.jpg",
   						title:'Hostel Name Title Here',
   						description:'3989 Elk City Road Indianapolis, IN 46204',
   						price:'$40.82',
   						reviews:'2'
   },{
   						image:"dist/images/hostel-2.jpg",
   						title:'Hostel Name Title Here',
   						description:'3989 Elk City Road Indianapolis, IN 46204',
   						price:'$40.82',
   						reviews:'2'
   }];
 

$scope.testimonialsData = [{
	image:"dist/images/testimonial-2.jpg",
	name:'Kathy R. Burroughs',
	title:'Had an amazing time and very good !!',
	content:'“Elementum naon tellus sit amet ultricies. In nec elit velit. Nullam luctus efficitur urna, a accumsan nunc varius nec.”'
},{
	image:"dist/images/testimonial-1.jpg",
	name:'Kathy R. Burroughs',
	title:'Had an amazing time and very good !!',
	content:'“Elementum naon tellus sit amet ultricies. In nec elit velit. Nullam luctus efficitur urna, a accumsan nunc varius nec.”'
}];

	    $scope.bannerOptions = {
            stopOnHover: true,
            paginationSpeed: 600,
            items: 1,
            loop:true,
		    margin:0,
		    autoplay:true,
		    autoplayTimeout:3000,
		    Item_Width : 100,
		    nav:true,
		    navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        };
          $scope.popularOptions  = {
            stopOnHover: true, 
            items: 3,
            loop:true,
		    margin:0,
		    autoplay:true,
		    autoplayTimeout:2500,
		    Item_Width : 100,
		    nav:true,
		    navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        };
       $scope.testimonialsOptions  = {
            stopOnHover: true, 
            items: 2,
            loop:true,
		    margin:0,
		    autoplay:true,
		    autoplayTimeout:3000,
		    Item_Width : 100,
		    nav:true,
		    navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        };
})